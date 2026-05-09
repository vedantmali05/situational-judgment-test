# 🎯 Simple Quiz Application

A lightweight web-based quiz application built using **HTML**, **Vanilla JavaScript**, and **Tailwind CSS**.

This application allows students to:

- Login using name and email
- Attempt a timed multiple-choice quiz
- Automatically move to the next question when time expires
- Submit final score to **Google Sheets**
- View a completion confirmation message

---

# 📌 Features

✅ Student login validation  
✅ Timer-based quiz (30 seconds per question)  
✅ Multiple-choice questions  
✅ Dynamic score calculation  
✅ Auto-submit on timeout  
✅ Google Sheets integration for storing results  
✅ Responsive UI using Tailwind CSS  
✅ No backend required

---

# 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Structure |
| JavaScript | Application logic |
| Tailwind CSS | Styling |
| Google Apps Script | Save data to Google Sheets |

---

# 📂 Project Structure

```text
simple-quiz/
│── index.html        # Main application file
│── README.md         # Documentation
```

---

# 🚀 Getting Started

## 1. Download / Clone Project

```bash
git clone <your-repository-url>
cd simple-quiz
```

Or simply download the source code ZIP.

---

## 2. Open the Application

Open:

```text
index.html
```

in any browser.

Example:

- Google Chrome
- Microsoft Edge
- Firefox
- Safari

No installation or server setup required.

---

# ⚙️ Configuration

## Update Google Sheets API URL

Find this line in `index.html`:

```javascript
const scriptURL = 'https://script.google.com/macros/s/your-script-id/exec';
```

Replace it with your own **Google Apps Script Web App URL**.

---

# 🧪 How to Use

### Login

Enter:

- Name
- Email

Click:

`Start Quiz`

---

### Answer Questions

- Select one option
- Click **Next**
- Timer runs automatically
- If timer reaches 0, question auto-submits

---

### Finish

After last question:

- Thank you message appears
- Data gets stored in Google Sheets

---

# 🔧 Customizing Questions

Inside `index.html`, edit:

```javascript
const questions = [
  {
    text: "Your Question?",
    time: 30,
    options: [
      { text: "Option 1", marks: 1 },
      { text: "Option 2", marks: 5 }
    ]
  }
];
```

You can change:

- question text
- timer
- options
- marks

---

# 🌐 Deployment Options

You can host this app on:

- Netlify
- Vercel
- Firebase Hosting
