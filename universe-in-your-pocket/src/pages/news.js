const News = () => {
    const date = [
      { name: "jhjhhhh", date: "2024" },
      { name: "jhjhhhh", date: "2024" },
      { name: "jhjhhhh", date: "2024" },
      { name: "jhjhhhh", date: "2024" },
    ];
  
    return (
      <main className="main">
        <div className="news">
          <div className="newsBox">
            <div className="newsContent">
              <p>
                The latest news from the company will be published here. These may
                include announcements, product updates, or other important events.
              </p>
              <ul>
                {date.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.name}-{item.date}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="newsDate">
              <p>March 20, 2021</p>
            </div>
          </div>
          <img
            src={require("../../img/test.jpg")}
            alt="newsImg"
            className="newsImg"
          />
        </div>
      </main>
    );
  };
  
  export default News;
  