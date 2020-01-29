import React, { useState } from "react";
import styled from "styled-components";

const TeamMemberFormForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 3% auto;
  width: 35%;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 5px;
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
    name: ""
  });

  const handleChange = e => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
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
        <label htmlFor="name">Team Member's Email: </label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={friend.email}
        />
      </InputDiv>
      <InputDiv>
        <label htmlFor="name">Team Member's Role: </label>
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
