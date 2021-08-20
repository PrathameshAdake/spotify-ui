import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

function FriendList() {
  return (
    <FriendContainer>
      <h3>Friend Activity</h3>
      <Friendssss>
        <Friend>
          <IconContainer>
            <img src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png" />
            <StatusCircle></StatusCircle>
          </IconContainer>
          <Detail>
            <Username>friend 1</Username>
            <Playlist>On Repeat</Playlist>
          </Detail>
        </Friend>
        <Friend>
          <IconContainer>
            <img src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png" />
            <StatusCircle></StatusCircle>
          </IconContainer>
          <Detail>
            <Username>friend 2</Username>
            <Playlist>On Repeat</Playlist>
          </Detail>
        </Friend>
        <Friend>
          <IconContainer>
            <img src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png" />
            <StatusCircle></StatusCircle>
          </IconContainer>
          <Detail>
            <Username>friend 3</Username>
            <Playlist>On RepeatOn RepeatOn RepeatOn RepeatOn Repeat</Playlist>
          </Detail>
        </Friend>
      </Friendssss>
    </FriendContainer>
  );
}

const FriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 40vh;
  height: 81.5vh;

  > h3 {
    position: sticky;
    color: lightgray;
    text-align: left;
  }
`;

const Friendssss = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Friend = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const Username = styled.div`
  text-transform: none;
  padding-bottom: 10px;
  padding-top: 2px;
  color: lightgray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 28vh;
`;
const Playlist = styled.div`
  color: lightgray;
  text-transform: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 28vh;
`;

const IconContainer = styled.div`
  display: flex;
  max-width: 50px;
  min-width: 50px;
  max-height: 50px;
  min-height: 50px;
  position: relative;
  margin-right: 15px;
  margin-left: 10px;

  > img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
`;

const StatusCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: grey;
  border: 2px solid white;
  bottom: 0;
  right: 0;
  position: absolute;
`;

export default FriendList;
