import React from "react";
import { Link } from "react-router-dom";

const Main = ({ isAuthorized, userName }) => {
  return (
    <main className="main">
      <section className="content1">
        <h1 className="contentTitle">Exploring The Vast Universe</h1>

        <p className="contentContent">
          Dive into the infinite wonders of space through our portal. Discover
          the latest space missions, news, maps, calendar events
        </p>
        {isAuthorized ? (
          <h2 className="userName">Star explored by {userName}</h2>
        ) : (
          <button className="content1__button">Get Started</button>
        )}
      </section>

      <section className="content2">
        <h2 className="contentContent2">
          Unleash the mysteries of the cosmos from the comfort of your home
        </h2>
        {isAuthorized ? (
          <Link to="/blog">
            <button className="content2__button">Blog</button>
          </Link>
        ) : (
          <Link to="/authorization">
            <button className="content2__button">Login</button>
          </Link>
        )}
      </section>
    </main>
  );
};

export default Main;
