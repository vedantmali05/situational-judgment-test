# 🎯 Situational Judgment Test (SJT)

A premium, lightweight, dark-themed **Situational Judgment Test (SJT)** built with Vanilla JS, Tailwind CSS, and Google Sheets integration.

---

## ⚡ Quick 3-Step Setup

### 1. Setup Google Sheet
Create a blank Google Sheet and add these exactly as column headers in Row 1:
```text
Timestamp | Name | Email | TotalScore | Responses
```

### 2. Deploy Apps Script
1. Inside your Spreadsheet, click **Extensions > Apps Script**.
2. Paste the contents of `AppsScript.js` into the editor.
3. Replace `"YOUR_SPREADSHEET_ID_HERE"` with your spreadsheet ID (from the sheet URL).
4. Click **Deploy > New Deployment**.
5. Set deployment to **Web App**:
   * **Execute as**: Me
   * **Who has access**: Anyone
6. Authorize and copy the generated **Web App URL**.

### 3. Connect Frontend
Open `index.html` and paste your URL into `scriptURL` (around line 530):
```javascript
const scriptURL = "PASTE_YOUR_COPIED_URL_HERE";
```

Double click `index.html` to run. Done! 🎉

---

## 🔒 Admin Allowlist
To let your teammates/admins see scores, percentages, and restart button on completion:
Add their emails to `adminEmails` inside `index.html` (around line 508):
```javascript
const adminEmails = [
  "admin@example.com",
  "reviewer@example.com"
];
```
*(Everyone else only sees a simple, secure "Thank you" screen on submit.)*

---

## 📊 Sheet Schema
*   **TotalScore**: Total points earned.
*   **Responses Format**: `Q1-4,Q2-3,Q3-1` *(Q1 got 4 pts, Q2 got 3 pts, etc. Works for any question count!)*

---

## 🌐 Deployment
This is a static website and can be deployed entirely for free on **Netlify**, **GitHub Pages**, **Vercel**, or **Firebase Hosting**.
