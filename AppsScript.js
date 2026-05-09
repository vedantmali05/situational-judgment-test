/**
 * Google Apps Script Backend for Situational Judgment Test (SJT)
 * 
 * Paste this code inside the Google Sheets Extensions -> Apps Script editor.
 * Appends candidate details and assessment response strings safely on submission.
 */

function doPost(e) {
  try {
    // Ensure payload exists
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No payload received.");
    }

    // Parse the incoming JSON string
    var data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet by ID and select the first sheet
    // PASTE YOUR SPREADSHEET ID HERE (e.g., "1BxiMVs0XRA5nFMdKvBdBZjXUUkuRrh97Z9z_D8zYpPI")
    var sheet = SpreadsheetApp.openById("1SFKmL0CMXx3j7jP6te6qtCknErmCcIVNCXvZFicQQDM").getSheets()[0];
    
    // Automatically generate a local timestamp
    var timestamp = new Date();
    
    // Extract fields safely (handles both lowercase/camelCase from frontend and trims whitespace)
    var name = (data.name || data.Name || "Anonymous").toString().trim();
    var email = (data.email || data.Email || "No Email").toString().trim();
    var totalScore = data.totalScore !== undefined ? data.totalScore : (data.TotalScore || 0);
    var responses = data.responses || data.Responses || "";
    
    // Append the row to Google Sheets
    // Column order matches schema: Timestamp | Name | Email | TotalScore | Responses
    sheet.appendRow([timestamp, name, email, totalScore, responses]);
    
    // Return standard success response
    return ContentService.createTextOutput(JSON.stringify({ "success": true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    // Return standard error response
    return ContentService.createTextOutput(JSON.stringify({ "success": false, "error": err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
