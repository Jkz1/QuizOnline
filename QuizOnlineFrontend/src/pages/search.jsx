import axios from "axios";
import { useEffect, useState } from "react";
import { apiNode } from "../utils/url";
import { useNavigate } from "react-router-dom";

function SearchPage() {

    const [keyword, setKeyword] = useState()

    const handleSearch = () => {
        console.log(keyword)
    }

    const [Quiz, setQuiz] = useState([])

    useEffect(() => {
        async function getData (){
            await axios.get(`${apiNode}/quiz/getAllQuiz`)
            .then((res) => {
                setQuiz(res.data.data)
            })
        }
        getData()
    },[])



    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column justify-content-center align-items-start h-100 p-5">
            <div className="input-group mb-3 h-25">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSearch}>
                    Search
                </button>
            </div>
            {Quiz.map((quiz) => (
                <div key={quiz._id} className="card w-100 mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{quiz.namaQuiz}</h5>
                        <div className="d-flex justify-content-end">
                            <button 
                                className="btn btn-success me-2" 
                                onClick={() => navigate(`/doQuiz/${quiz._id}`)}
                            >
                                Do this quiz
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SearchPage;