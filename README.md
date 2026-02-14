# Quiz App

A simple and interactive React quiz application that tests your knowledge of React fundamentals.

## Features

- 🎯 Multiple choice questions
- 📊 Progress bar to track quiz completion
- ✅ Instant feedback on correct/incorrect answers
- 🏆 Final score display
- 🔄 Replay option to take the quiz again

## Tech Stack

- React
- JavaScript (JSX)
- CSS

## Project Structure

```
quiz-app/
├── src/
│   ├── App.jsx       # Main quiz component with logic
│   ├── main.jsx      # React entry point
│   └── styles.css    # Styling
├── index.html        # HTML template
└── package.json      # Dependencies
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/CresthaRaman/quiz-app.git
cd quiz-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## How It Works

The quiz displays questions one at a time with multiple choice options. When you select an answer:
- Correct answers are highlighted in green
- Incorrect answers are highlighted in red
- You can proceed to the next question after selecting an answer
- At the end, your final score is displayed with an option to restart

## Customization

You can easily add or modify questions by editing the `QUESTIONS` array in `src/App.jsx`:

```javascript
const QUESTIONS = [
  {
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: "Correct Option"
  },
  // Add more questions...
];
```

## License

This project is open source and available for anyone to use.
