import React, { useState } from "react";
import styled from "styled-components";

const TeamMemberFormForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  width: 35%;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 5px;
  opacity: 0.8;
`;

const InputDiv = styled.div`
  margin: 2%;
`;

const SubmitButton = styled.button`
  margin: 2%;
`;

function TeamMemberForm(props) {
  // console.log(props);

  const [friend, setFriend] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = e => {
    // console.log(e.target);
    setFriend({ ...friend, [e.target.id]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(friend);
    props.addNewFriend(friend);
    setFriend({ name: "", email: "", role: "" });
  };

  return (
    <TeamMemberFormForm onSubmit={submitForm}>
      <InputDiv>
        <label htmlFor="name">Team Member's Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={friend.name}
        />
      </InputDiv>
      <InputDiv>
        <label htmlFor="email">Team Member's Email: </label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={friend.email}
        />
      </InputDiv>
      <InputDiv>
        <label htmlFor="role">Team Member's Role: </label>
        <input
          id="role"
          type="text"
          name="role"
          onChange={handleChange}
          value={friend.role}
        />
      </InputDiv>
      <SubmitButton type="submit">Add Team Member</SubmitButton>
    </TeamMemberFormForm>
  );
}

export default TeamMemberForm;
