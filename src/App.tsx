import type { Component } from "solid-js";

import styles from "./styles/App.module.scss";
import Head from "./components/Head";
import HomeIcon from "./assets/home.svg";
import Tiles from "./components/Tiles";
import Tile from "./components/Tile";

import pfp from "./assets/pfp.webp";
import insta from "./assets/insta.png";
import snap from "./assets/snap.png";
import discord from "./assets/discord.png";
import threads from "./assets/threads.png";
import facebook from "./assets/facebook.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import oxford from "./assets/oxford.png";
import email from "./assets/email.png";

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
            <h2>Home</h2>
          </a>
        </header>
        <main>
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
          <Tiles title="Professional">
            <Tile href="https://www.linkedin.com/in/tiger-taylor">
              <img src={linkedin} />
            </Tile>
            <Tile href="https://www.github.com/actuallyatiger">
              <img src={github} />
            </Tile>
            <Tile href="https://users.ox.ac.uk/~kebl7725">
              <img src={oxford} />
            </Tile>
            <Tile href="mailto:tiger@tigertaylor.xyz">
              <img src={email} />
            </Tile>
          </Tiles>
        </main>

        <footer>
          <p>
            &copy; Tiger Taylor 2024.
            <br />
            All logos are the property of their respective owners
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
