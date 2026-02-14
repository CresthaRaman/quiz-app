import React, { useMemo, useState } from "react";

const QUESTIONS = [
  {
    question: "Which company created React?",
    options: ["Google", "Meta", "Microsoft", "Apple"],
    answer: "Meta"
  },
  {
    question: "Which hook stores local component state?",
    options: ["useState", "useMemo", "useEffect", "useRef"],
    answer: "useState"
  },
  {
    question: "JSX is mainly used to describe what?",
    options: ["Database schema", "UI structure", "Network config", "Build cache"],
    answer: "UI structure"
  }
];

function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const current = QUESTIONS[index];
  const progress = useMemo(() => ((index + (finished ? 1 : 0)) / QUESTIONS.length) * 100, [index, finished]);

  function handleOptionClick(option) {
    if (selected || finished) return;
    setSelected(option);
    if (option === current.answer) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (!selected) return;
    if (index === QUESTIONS.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected("");
  }

  function handleRestart() {
    setIndex(0);
    setScore(0);
    setSelected("");
    setFinished(false);
  }

  return (
    <main className="page">
      <section className="card">
        <h1>Quick React Quiz</h1>
        <div className="progressWrap">
          <div className="progressBar" style={{ width: `${progress}%` }} />
        </div>

        {finished ? (
          <div className="result">
            <p>
              You scored <strong>{score}</strong> out of <strong>{QUESTIONS.length}</strong>
            </p>
            <button onClick={handleRestart}>Play Again</button>
          </div>
        ) : (
          <>
            <p className="counter">
              Question {index + 1} / {QUESTIONS.length}
            </p>
            <h2>{current.question}</h2>
            <div className="options">
              {current.options.map((option) => {
                const isCorrect = selected && option === current.answer;
                const isWrong = selected === option && option !== current.answer;
                const className = isCorrect ? "correct" : isWrong ? "wrong" : "";
                return (
                  <button key={option} className={className} onClick={() => handleOptionClick(option)}>
                    {option}
                  </button>
                );
              })}
            </div>
            <button className="next" onClick={handleNext} disabled={!selected}>
              {index === QUESTIONS.length - 1 ? "Finish" : "Next"}
            </button>
          </>
        )}
      </section>
    </main>
  );
}

export default App;

