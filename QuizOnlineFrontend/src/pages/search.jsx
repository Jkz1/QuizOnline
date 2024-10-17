import { useState } from "react";

function SearchPage() {

    const [keyword, setKeyword] = useState()

    const handleSearch = () => {
        console.log(keyword)
    }

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
            <div className="card w-100 mb-3">
                <div className="card-body">
                    <h5 className="card-title">Judul Quiz</h5>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-success me-2">Do this quiz</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;