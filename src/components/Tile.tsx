import { ParentComponent } from "solid-js";

import styles from "../styles/Tile.module.scss";

const Tile: ParentComponent<{ href: string }> = (props) => {
  return (
    <a href={props.href} class={styles.tile}>
      {props.children}
    </a>
  );
};

export default Tile;
