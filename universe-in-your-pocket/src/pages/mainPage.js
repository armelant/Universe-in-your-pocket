import "../styles/mainPage.css"


const MainPage = () => {
  return (
    <> 
      <div className="contentBox-1">
          <div className="contentBoxTitle">
            <h1>Exploring The Vast Universe</h1>
          </div>

            <div className="contentBoxContent">
              <p>Dive into the infinite wonders of space through our portal. Discover the latest space missions, news, maps, calendar events</p>
            
            <button>Get Started</button>
            </div>

      </div>
      
      <div className="contentBox-2">
        <div className="contentBoxContent">
          <p>Unleash the mysteries of the cosmos from the comfort of your home</p>
        </div>

        <div className="contentBoxButton">
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default MainPage;