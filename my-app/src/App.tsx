/** @format */

import React from "react";
import "./App.css";
import { Greet } from "./component/codvo/1Greet";
import Person from "./component/codvo/2Person";
import PersonList from "./component/codvo/3PersonList";
import Status from "./component/codvo/4Status";
import Heading from "./component/codvo/5Heading";
import Oscar from "./component/codvo/6Oscar";
import Button from "./component/codvo/event/Button";
import Input from "./component/codvo/event/Input";
import Container from "./component/codvo/style/Container";
import LoggedIn from "./component/codvo/state/LoggedIn";
import DomRef from "./component/codvo/ref/DomRef";
import Private from "./component/codvo/componentprop/Private";
import Profile from "./component/codvo/componentprop/Profile";
import List from "./component/codvo/propsgeneric/List";
import AuthForm from "./component/authForm";

function App() {
  const person = {
    fname: "ankit",
    lname: "kumar",
  };
  const personList = [
    {
      fname: "ankit",
      lname: "kumar",
    },
    {
      fname: "ankit",
      lname: "kumar",
    },
    {
      fname: "ankit",
      lname: "kumar",
    },
  ];
  return (
    <div className='App'>
      <AuthForm />
      {/* <List items={["a", "a"]} onClick={(item) => console.log(item)} />
      <List items={[1, 2]} onClick={(item) => console.log(item)} />
      <List
        items={[{ a: "a" }, { a: "a" }]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <Private isLogedIn={true} component={Profile} /> */}
      {/* <DomRef /> */}
      {/* <LoggedIn /> */}
      {/* <Greet name={"ankit"} messageCount={9} isLogedIn={false} />
      <Person name={person} />
      <PersonList names={personList} />
      <Status status='loading' />
      <Heading>typescript</Heading>
      <Oscar>
        <Heading>type script</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      <Input
        value='typescript'
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <Container styles={{ border: "1px solid black", padding: "10px" }} /> */}
    </div>
  );
}

export default App;
