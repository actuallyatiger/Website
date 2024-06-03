import { Title, Link, MetaProvider } from "@solidjs/meta";
import type { Component } from "solid-js";

const Head: Component<{ title: string }> = (props) => {
  return (
    <MetaProvider>
      <Title>{props.title}</Title>
    </MetaProvider>
  );
};

export default Head;
