import { ParentComponent, For } from "solid-js";

import styles from "../styles/Tiles.module.scss";

const Tiles: ParentComponent<{ title: string }> = (props) => {
  return (
    <div class={styles.tiles}>
      <h2 class={styles.title}>{props.title}</h2>
      <div class={styles.icons}>{props.children}</div>
    </div>
  );
};

export default Tiles;
