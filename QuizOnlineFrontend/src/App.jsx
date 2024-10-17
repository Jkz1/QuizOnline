import { useState } from "react";

import axios from "axios";
import { apiNode } from "./utils/url";
import Home from "./pages/home";
import SearchPage from "./pages/search";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Quiz from "./pages/test";
import React from "react";
import QuizForm from "./components/QuizForm";
import QuizList from "./components/QuizList"; // Komponen untuk menampilkan soal
import "./App.css"; // Import file CSS kustom

function App() {
  return (
    <>
      <Router>
        <div style={{ minHeight: '100vh', background: 'linear-gradient(orange, black)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </Router>
      {/* <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <button className="btn btn-success" onClick={getData}>check data</button>
        {data && data.map((item, index) => (
          <div key={index} className="card mt-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Soal: {item.soal}</h5>
              <ul className="list-group list-group-flush">
                {item.pilihan.map((pilihan, idx) => (
                  <li key={idx} className="list-group-item">{pilihan}</li>
                ))}
              </ul>
              import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

              function App() {
                const [data, setData] = useState("");

                const getData = async () => {
                  await axios
                    .get(`${apiNode}/bankSoal/getAllSoal`)
                    .then((res) => {
                      setData(res.data.data);
                    })
                    .catch((err) => {
                      alert("Error");
                    });
                };

                return (
                  <Router>
                    <div style={{ minHeight: '100vh', background: 'linear-gradient(orange, black)' }}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<SearchPage />} />
                      </Routes>
                    </div>
                  </Router>
                );
              }

              export default App;
              <p className="card-text mt-2"><strong>Jawaban:</strong> {item.jawaban}</p>
            </div>
          </div>
        ))}
      </div> */}
      {/* <div className="container mt-5">
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
      </div> */}
    </>
  );
}

export default App;
