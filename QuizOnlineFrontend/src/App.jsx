import React from "react";
import QuizForm from "./components/QuizForm";
import QuizList from "./components/QuizList"; // Komponen untuk menampilkan soal
import "./App.css"; // Import file CSS kustom

function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="card shadow p-4">
              <h1 className="text-center mb-4">Create a New Quiz</h1>
              <QuizForm />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow p-4">
              <h2 className="text-center mb-4">Available Quizzes</h2>
              <QuizList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
