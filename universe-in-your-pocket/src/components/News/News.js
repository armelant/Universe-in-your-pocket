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
      {news.map((item) => (
        <div className="news" key={item._id}>
          <div className="newsBox">
            <div className="newsContent">
              <h1>{item.title}</h1>
              {item.text.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {item.imageUrl && (
                <img src={item.imageUrl} alt="News" />
              )}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default News;
