import React, { useRef, useState } from "react";
import './Quiz.css'
import { data } from "../assets/data";
import Swal from 'sweetalert2'
import { shuffle } from "../utils/funct";

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [AlrChoose, setAlrChoose] = useState(false);
    let [score, setScore] = useState(0);

    let optionRefs = useRef([]);

    let nextButtonRef = useRef();
    let completeButtonRef = useRef();

    useState(() => {
        shuffle(data)
        data.forEach((question) => {
            shuffle(question.options)
        })
        setQuestion(data[index]);
    }, [])

    const checkAns = (e, ans) => {
        if (AlrChoose === false) {
            if (question.ans === ans) {
                e.target.classList.add("Benar");
                setAlrChoose(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("Salah");
                optionRefs.current[question.options.findIndex(option => option === question.ans)].classList.add("Benar");
                setAlrChoose(true);
                optionRefs.current[question.ans - 1].classList.add("Benar");
            }
        }
    }

    const Next = () => {
        if (AlrChoose === true) {
            if(index === data.length - 1){
                Swal.fire({
                    title: "Quiz Selesai",
                    text: `Score Anda : ${score}/${data.length}`,
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#347928",
                    confirmButtonText: "Try Again",
                    cancelButtonText: "Back to Home",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.reload();
                    }else{
                        Swal.fire({
                            title : "Back to Home",
                            icon : "success",
                        })
                    }
                  });
                  
            }
            else if(index === data.length - 2){
                setIndex(index + 1);
                setQuestion(data[index + 1]);
                setAlrChoose(false);
                optionRefs.current.forEach(option => {
                    option.classList.remove("Salah");
                    option.classList.remove("Benar");
                });
                nextButtonRef.current.classList.add("d-none");
                completeButtonRef.current.classList.remove("d-none");
            }
            else{
                setIndex(index + 1);
                setQuestion(data[index + 1]);
                setAlrChoose(false);
                optionRefs.current.forEach(option => {
                    option.classList.remove("Salah");
                    option.classList.remove("Benar");
                });
            }
        }
        else{
            Swal.fire({
                title: "Pilih jawaban terlebih dahulu",
                icon: "warning",
            })
        }
    }

    return (
            <div className="container mt-5 p-4 w-50" style={{ color: 'white', borderRadius: '10px', background: 'rgba(0, 0, 0, 0.7)' }}>
                <h1 className="text-center mb-4">Buat Quiz</h1>
                <hr />
                <h2>{index + 1}. {question.question}</h2>
                <ul className="list-group">
                    {question.options.map((option, i) => (
                        <li
                            key={i}
                            ref={el => optionRefs.current[i] = el}
                            onClick={(e) => { checkAns(e, option) }}
                            className="list-group-item list-group-item-action mt-2 mb-2 rounded"
                            style={{ cursor: 'pointer' }}
                        >
                            {String.fromCharCode(65+i)}. {option}
                        </li>
                    ))}
                </ul>
                <button ref={nextButtonRef} className="btn btn-primary mt-4" onClick={Next}>Next</button>
                <button ref={completeButtonRef} className="btn btn-primary mt-4 d-none" onClick={Next}>Complete</button>
                <div className="soal mt-3">{index + 1} dari {data.length} soal</div>
            </div>
    )
}

export default Quiz;
