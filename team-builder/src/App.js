import React, { useState } from "react";
import styled from "styled-components";
import img from "../src/assets/friends.jpg";
import TeamMemberForm from "../src/components/teamMemberForm";
import TeamMembers from "../src/components/teamMembers";
import "./App.css";

const AppDiv = styled.div`
  background-image: url(${img});
  background-size: 100%;
  height: 100vh;
  background-position: center top;
  background-attatchment: initial;
`;

function App() {
  const [friends, setFreinds] = useState([
    {
      id: 0,
      name: "Joey Tribbiani",
      email: "joeyisgreat@actors.com",
      role: "Actor"
    },
    {
      id: 1,
      name: "Rachel Green",
      email: "rgreen@bloomingdales.com",
      role: "Buyer"
    },
    {
      id: 2,
      name: "Ross Geller",
      email: "gandalflover@museum.com",
      role: "Paleontologist"
    },
    {
      id: 3,
      name: "Phoebe Buffay",
      email: "rubsyoudown@massagenow.com",
      role: "Masseuse"
    },
    {
      id: 4,
      name: "Chandler Bing",
      email: "businessbing@office.com",
      role: "Unknown"
    },
    {
      id: 5,
      name: "Monica Geller",
      email: "willcookandclean@chef.com",
      role: "chef"
    }
  ]);

  const addNewFriend = friend => {
    const newFriend = {
      id: Date.now(),
      name: friend.name
    };
    setFreinds([...friends, newFriend]);
  };

  return (
    <AppDiv className="App">
      <TeamMemberForm addNewFriend={addNewFriend} />
      <TeamMembers friends={friends} />
    </AppDiv>
  );
}

export default App;
