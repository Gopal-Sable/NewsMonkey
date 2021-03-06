import React, { useState } from 'react'
import Search from './Search';

import {
    Link

} from "react-router-dom";

const Navbar = (props) => {

    // constructor() {
    //     super();
    //     this.state = {
    //         search: ""
    //     }
    // }
    // qSearch() {

    // }
    
    const [search, setSearch] = useState({ searchValue: "" })
    const handleOnChange = (event) => {
        
        setSearch({ ...search, [event.target.name]: event.target.value })

    }
    const handleClick = (e) => {
       
        props.search(search.searchValue)
        Search();
        
    }
    // render() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark  bg-dark">
                <div className="container-fluid  ">
                    <Link className="navbar-brand" to="/">News Monkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                    <Link className="nav-link" to="/">About</Link>
                                </li> */}
                            <li className="nav-item"><Link to="/business" className="nav-link">Business</Link></li>
                            <li className="nav-item"><Link to="/entertainment" className="nav-link">Entertainment</Link></li>
                            <li className="nav-item"><Link to="/general" className="nav-link">General</Link></li>
                            <li className="nav-item"><Link to="/health" className="nav-link">Health</Link></li>
                            <li className="nav-item"><Link to="/science" className="nav-link">Science</Link></li>
                            <li className="nav-item"><Link to="/sports" className="nav-link">Sports</Link></li>
                            <li className="nav-item"><Link to="/technology" className="nav-link">Technology</Link></li>
                        </ul>
                        <form className="d-flex" >
                            <input className="form-control me-2" type="search" onChange={handleOnChange} value={search.searchValue} name="searchValue" placeholder="Search" aria-label="Search" />
                            <Link class="btn btn-primary" onClick={handleClick} to="/search" role="button">Search</Link>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}


export default Navbar

