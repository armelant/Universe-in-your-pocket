import React, { useState, useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/news') 
      .then(response => response.json())
      .then(data => setNews(data.reverse()))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <main className="main">
      <h1 className="mainTitle">News</h1>
      {news.map((item) => (
        <div className="news" key={item._id}>
          <img src={item.imageUrl} alt="sunImg" className="newsImage" />
          <div className="newsText">
            <div className="text-container">
            <h2 className="newsTitle">{item.title}</h2>
              {item.text.split('\n\n').map((paragraph, index) => (
                <p className="newsSummary" key={index}>{paragraph}</p>
              ))}
              </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default News;
