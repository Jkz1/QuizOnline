import { useState } from "react";

import axios from "axios";
import { apiNode } from "./utils/url";

function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    await axios
      .get(`${apiNode}/bankSoal/getAllSoal`)
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {
        alert("Error");
      });
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
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
              <p className="card-text mt-2"><strong>Jawaban:</strong> {item.jawaban}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
