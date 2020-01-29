import React from "react";
import styled from "styled-components";

const TeamMembersDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const FriendDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2%;
  background-color: whitesmoke;
`;

function TeamMembers(props) {
  return (
    <TeamMembersDiv>
      {props.friends.map(friend => {
        return (
          <FriendDiv key={friend.id}>
            <h2>{friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p>Role: {friend.role}</p>
          </FriendDiv>
        );
      })}
    </TeamMembersDiv>
  );
}

export default TeamMembers;
