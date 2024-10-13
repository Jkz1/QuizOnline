import { useState } from "react";
import axios from "axios";
import { apiNode } from "../utils/url";

const QuizList = () => {
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
    <div>
      <button className="btn btn-success mb-4" onClick={getData}>
        Check Data
      </button>

      {data && data.map((item, index) => (
        <div key={index} className="card mt-3 shadow-sm" style={{ width: "100%" }}>
          <div className="card-body">
            <h5 className="card-title">Soal: {item.soal}</h5>
            <ul className="list-group list-group-flush">
              {item.pilihan.map((pilihan, idx) => (
                <li key={idx} className="list-group-item">{pilihan}</li>
              ))}
            </ul>
            <p className="card-text mt-2">
              <strong>Jawaban:</strong> {item.jawaban}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
