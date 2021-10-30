import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

 
const Search = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title = `${capitalizeFirstLetter(props.search)} - NewsMonkey`;


     const updateNews = async () => {
        props.setProgress(10);
        // https://newsapi.org/v2/everything?q=bitcoin&apiKey=7a8bd5497c4649afa32d2805b79bf154
        const url = `https://newsapi.org/v2/everything?q=${props.search}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        console.log(url);
        props.setProgress(30);
        setLoading(true)
        // setState({ loading: true });
        let data = await fetch(url);
        props.setProgress(70);
        let parsedData = await data.json()

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);


    }

    useEffect(() => {

        updateNews();
        // eslint-disable-next-line
    }, [])
    //  componentDidMount= async()=> {
    //     updateNews();
    // }

    // const handlePrevClick = async () => {
    //     setPage(page - 1)
    //     updateNews();
    // }

    // const handleNextClick = async () => {
    //     setPage(page + 1)
    //     updateNews()
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/everything?q=${props.search}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; setPage(page + 1)
        console.log(url);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        // setState({
        //     articles: articles.concat(parsedData.articles),
        //     totalResults: parsedData.totalResults
        // })
    };


    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '80px' }}>Your Search - {capitalizeFirstLetter(props.search)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col md-4 my-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 85) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}
// Search.defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
// }

// Search.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
// }

export default Search
