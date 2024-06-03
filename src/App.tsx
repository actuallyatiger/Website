import type { Component } from "solid-js";

import styles from "./styles/App.module.scss";
import Head from "./components/Head";
import HomeIcon from "./assets/home.svg";
import Tiles from "./components/Tiles";
import Tile from "./components/Tile";

import pfp from "./assets/pfp.png";
import insta from "./assets/insta.png";

const App: Component = () => {
  return (
    <>
      <Head title="Tiger Taylor" />
      <div class={styles.App}>
        <header class={styles.header}>
          <img src={pfp} class={styles.pfp}></img>
          <h1>Tiger Taylor</h1>
          <a href="https://tigertaylor.xyz">
            <img src={HomeIcon} />
          </a>
        </header>
        <Tiles title="Social Media">
          <Tile href="https://instagram.com/actuallyatiger">
            <img src={insta} />
          </Tile>
          <Tile href="https://instagram.com/actuallyatiger">
            <img src={insta} />
          </Tile>
          <Tile href="https://instagram.com/actuallyatiger">
            <img src={insta} />
          </Tile>
          <Tile href="https://instagram.com/actuallyatiger">
            <img src={insta} />
          </Tile>
          <Tile href="https://instagram.com/actuallyatiger">
            <img src={insta} />
          </Tile>
        </Tiles>
      </div>
    </>
  );
};

export default App;
