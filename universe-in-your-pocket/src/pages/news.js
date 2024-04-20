import React, { useState, useEffect } from 'react';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/news')
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div className="news">
            {news.map((item, index) => (
                <div key={index} className="newsBox">
                    <div className="newsContent">
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                    <div className="newsDate">
                        <p>{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                    <div className="newsImg">
                        <img src={item.imageUrl} alt="newsImg" />
                        <p className="imageDescription">{item.altText || "Textual description of the image"}</p>                   
                    </div>
                </div>
            ))}
        </div>
    );
};

export default News;
