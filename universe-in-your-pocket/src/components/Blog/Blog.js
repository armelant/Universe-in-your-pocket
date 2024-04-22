import React from "react";

const Blog = () => {
  return (
    <main className="main">
      <div className="post">
        <div className="image">
          <img
            src={require("../../img/sun.webp")}
            alt="sunImg"
            className="sunImg"
          />
        </div>
        <div className="text">
          <div className="white-background">
            <h2>Article title</h2>
            <p className="info">
              <a className="author">James Bond</a>
              <time>24-04-2024 16:45</time>
            </p>
            <p className="summary">
              Outer space (or simply space) is the expanse beyond celestial
              bodies and their atmospheres. It contains ultra-low levels of
              particle densities, constituting a near-perfect vacuum[1] of
              predominantly hydrogen and helium plasma, permeated by
              electromagnetic radiation, cosmic rays, neutrinos, magnetic fields
              and dust.
            </p>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src={require("../../img/sun.webp")}
            alt="sunImg"
            className="sunImg"
          />
        </div>
        <div className="text">
          <div className="white-background">
            <h2>Article title</h2>
            <p className="info">
              <a className="author">James Bond</a>
              <time>24-04-2024 16:45</time>
            </p>
            <p className="summary">
              Outer space (or simply space) is the expanse beyond celestial
              bodies and their atmospheres. It contains ultra-low levels of
              particle densities, constituting a near-perfect vacuum[1] of
              predominantly hydrogen and helium plasma, permeated by
              electromagnetic radiation, cosmic rays, neutrinos, magnetic fields
              and dust.
            </p>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src={require("../../img/sun.webp")}
            alt="sunImg"
            className="sunImg"
          />
        </div>
        <div className="text">
          <div className="white-background">
            <h2>Article title</h2>
            <p className="info">
              <a className="author">James Bond</a>
              <time>24-04-2024 16:45</time>
            </p>
            <p className="summary">
              Outer space (or simply space) is the expanse beyond celestial
              bodies and their atmospheres. It contains ultra-low levels of
              particle densities, constituting a near-perfect vacuum[1] of
              predominantly hydrogen and helium plasma, permeated by
              electromagnetic radiation, cosmic rays, neutrinos, magnetic fields
              and dust.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
