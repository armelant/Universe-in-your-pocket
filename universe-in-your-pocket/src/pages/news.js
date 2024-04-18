

const news = () => {
    return (
        <>
        <div className="news">
            <div className="newsBox">
                <div className="newsContent">
                <p>The latest news from the company will be published here. These may include announcements, product updates, or other important events.</p>
                </div>
                <div className="newsDate">
                    <p>March 20, 2021</p>
                </div>
            </div>
            <div className="newsImg">
            <img src={require("../img/test.jpg")} alt="newsImg" />
            </div>
        </div>
        </>
    );
};

export default news;