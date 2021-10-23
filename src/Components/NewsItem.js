import React from 'react'
import logo from '../logo.jpg'
const NewsItem =(props)=> {

    
        let { title, description, imgUrl, newsUrl, Author, date, source } = props
        return (
            <>
                <div className="card" style={{ width: "19rem" }}>
                    <img src={imgUrl === null ? logo : imgUrl} className="card-img-top" alt="..." />
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "88%", zIndex: "1" }}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted"> By {Author === null ? "Unknwon" : Author} on{new Date(date).toUTCString()}</small></p>
                        <a href={newsUrl}  className="btn btn-dark btn-sm">Read More...</a>
                    </div>
                </div>
            </>
        )
    }


export default NewsItem
