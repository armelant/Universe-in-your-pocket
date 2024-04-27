import React, { useEffect, useState } from 'react';

const MainPage = () => {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      const apiKey = 'aNsbyQgR9PpQHwPCFxJAWocvs5r4NEpNmkLxWdZW';
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setApod(data);
      } catch (error) {
        console.error("Error fetching APOD data: ", error);
      }
    };

    fetchAPOD();
  }, []);

  return (
    <>
      <div className="content1">
        <div className="contentTitle">
          <h1>Exploring The Vast Universe</h1>
        </div>
        <div className="contentContent">
          <p>Dive into the infinite wonders of space through our portal. Discover the latest space missions, news, maps, calendar events.</p>
          <button>Get Started</button>
        </div>
      </div>

      {apod && (
        <div className="apodContent">
          <img src={apod.url} alt={apod.title} style={{ width: '40%', height: 'auto', borderRadius: '8px' }} />
          <p className="apodTitle">{apod.title} - {apod.date}</p>
          <p className="apodExplanation">{apod.explanation}</p>
        </div>
      )}

      <div className="content2">
        <div className="contentContent">
          <p>Unleash the mysteries of the cosmos from the comfort of your home.</p>
          <div className="contentButton">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
