import React, { useState } from "react";

const QuizForm = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([{ question: "", options: [""], correctAnswer: "" }]);

  const handleQuizTitleChange = (e) => {
    setQuizTitle(e.target.value);
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const addNewQuestion = () => {
    setQuestions([...questions, { question: "", options: [""], correctAnswer: "" }]);
  };

  const addNewOption = (qIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options.push("");
    setQuestions(newQuestions);
  };

  const removeOption = (qIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options.splice(optionIndex, 1);
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ quizTitle, questions });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label>Quiz Title:</label>
        <input
          type="text"
          className="form-control"
          value={quizTitle}
          onChange={handleQuizTitleChange}
          required
        />
      </div>

      {questions.map((q, qIndex) => (
        <div key={qIndex} className="question-section mb-4">
          <h5>Question {qIndex + 1}</h5>
          <input
            type="text"
            className="form-control mb-2"
            value={q.question}
            onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
            placeholder="Enter question"
            required
          />

          {q.options.map((option, optionIndex) => (
            <div key={optionIndex} className="mb-2">
              <label>Option {optionIndex + 1}:</label>
              <div className="d-flex flex-row align-items-center jusify-content-center">

                <input
                  type="text"
                  className="form-control"
                  value={option}
                  onChange={(e) => handleOptionChange(qIndex, optionIndex, e.target.value)}
                  required
                  />
                <button type="button" className="btn btn-danger m-0" onClick={() => removeOption(qIndex, optionIndex)}>
                  X
                </button>
                </div>
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={() => addNewOption(qIndex)}>
            Add New Option
          </button>
        </div>
      ))}

      <div className="d-flex flex-row justify-content-center align-items-center">
        <button type="button" className="btn btn-primary me-5" onClick={addNewQuestion}>
          Add New Question
        </button>
        <button type="submit" className="btn btn-success">Submit Quiz</button>
      </div>
    </form>
  );
};

export default QuizForm;
