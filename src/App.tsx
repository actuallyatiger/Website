import type { Component } from "solid-js";

import styles from "./styles/App.module.scss";
import Head from "./components/Head";
import HomeIcon from "./assets/home.svg";
import Tiles from "./components/Tiles";
import Tile from "./components/Tile";

import pfp from "./assets/pfp.png";
import insta from "./assets/insta.png";
import snap from "./assets/snap.png";
import discord from "./assets/discord.png";
import threads from "./assets/threads.png";
import facebook from "./assets/facebook.png";

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
          <Tile href="https://snapchat.com/add/possiblyatiger">
            <img src={snap} />
          </Tile>
          <Tile href="https://discord.com/users/525078637880410115">
            <img src={discord} />
          </Tile>
          <Tile href="https://threads.net/@actuallyatiger">
            <img src={threads} />
          </Tile>
          <Tile href="https://facebook.com/possiblyatiger">
            <img src={facebook} />
          </Tile>
        </Tiles>

        <footer>
          <p>
            &copy; All logos are subject to copyright by their respective owners
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
