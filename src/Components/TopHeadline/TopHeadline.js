import React, { useEffect, useState } from 'react';
import News from '../News/News';



const TopHeadline = () => {
        const [articles, setArticle] = useState([]);
        useEffect(() => {
        const url = 'https://newsapi.org/v2/everything?q=apple&from=2021-05-22&to=2021-05-22&sortBy=popularity&apiKey=49b3bf094d3e4ff69fcbe767832fcac5'
        fetch(url)
        .then(res => res.json())
        .then(data => setArticle(data.articles))
    }, [])
    return (
        <div>
            <h2>Top headline: {articles.length}</h2>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;