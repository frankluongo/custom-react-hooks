import React from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

import Toggle from "./Components/Toggle";
import Increment from "./Components/Increment";
import Mount from "./Components/Mount";
import Hover from "./Components/Hover";
import { PageWrapper } from "./State";
import Navigation from "./Components/Navigation";
import Cookie from "./Components/Cookie";
import { useWindowWidth } from "./Hooks";
import Scripty from "./Components/Scripty";
import LocalStore from "./Components/LocalStore/LocalStore";
import Theme from "./Components/Theme";

function App() {
  const { width } = useWindowWidth();

  return (
    <PageWrapper>
      <div>
        <Header>
          <Menu />
          <h1>Header</h1>
        </Header>
        <Navigation />
        <Scripty />
        <Container>
          <Theme />
          <Cookie />
          <h2>Super Cool</h2>
          <Toggle />
          <Increment />
          <Mount />
          <LocalStore />
          <Hover imgSrc={black} />
          <CardGrid>
            <Card style={{ background: "var(--purp)" }}>
              <h3>Some card</h3>
              <img alt="Card Description" src={purp} />
            </Card>
            <Card style={{ background: "var(--blue)" }}>
              <h3>Some card</h3>
              <img alt="Card Description" src={blue} />
            </Card>
            <Card style={{ background: "var(--black)" }}>
              <h3>Some card</h3>
              <img alt="Card Description" src={black} />
            </Card>
            <Card style={{ background: "var(--green)" }}>
              <h3>Some card</h3>
              <img alt="Card Description" src={green} />
            </Card>
          </CardGrid>
        </Container>
      </div>
    </PageWrapper>
  );
}

export default App;
