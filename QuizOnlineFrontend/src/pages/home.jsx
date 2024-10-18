import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleDoQuizClick = () => {
        navigate('/search');
    };

    const handleMakeQuizClick = () => {
        navigate('/makeQuiz');
    }

    return (
        <div className="container text-center w-100 h-100" >
            <h1>QuizOnline</h1>
            <div className="mt-4">
                <button className="btn btn-primary mx-2" onClick={handleMakeQuizClick}>Make Quiz</button>
                <button className="btn btn-secondary mx-2" onClick={handleDoQuizClick}>Do Quiz</button>
            </div>
        </div>
    );
};

export default Home;
