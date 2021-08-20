import React from "react";
import styled, { keyframes } from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import Img from "../Images/PlayListIcon.png";
import Img3 from "../Images/travel.png";

function MainContent() {
  return (
    <MainContainer>
      <NavBar>
        <NameTag>
          Prathamesh
          <ArrowDropDownIcon style={{ fontSize: 25 }} />
        </NameTag>
      </NavBar>
      <MainBody>
        <Welcome>Welcome Prathamesh!</Welcome>
        <MainDisplayPlaylists>
          <PlayListContainer>
            <img src={Img3} />
            <h4>Travelling</h4>
            <p>For Prathamesh</p>
          </PlayListContainer>
          <PlayListContainer>
            <img src={Img} />
            <h4>
              Night StrollNight StrollNight StrollNight StrollNight Stroll
            </h4>
            <p>For Prathamesh</p>
          </PlayListContainer>
          <PlayListContainer>
            <img src={Img} />
            <h4>On Repeat</h4>
            <p>For Prathamesh</p>
          </PlayListContainer>
          <PlayListContainer>
            <img src={Img} />
            <h4>Night Stroll</h4>
            <p>For Prathamesh</p>
          </PlayListContainer>
          <PlayListContainer>
            <img src={Img} />
            <h4>Night Stroll</h4>
            <p>For Prathamesh</p>
          </PlayListContainer>
        </MainDisplayPlaylists>
      </MainBody>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: none;
`;

const NavBar = styled.div`
  display: flex;
  padding: 5px;
  justify-content: flex-end;
  min-height: 50px;
`;
const NameTag = styled.div`
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 7px;
  margin-right: 40px;
  border-radius: 20px;
  background-color: rgb(10, 10, 10);
  color: lightgray;
`;

const MainBody = styled.div`
  display: flex;
  height: 75vh;
  min-width: 87vh;
  max-width: 128vh;
  flex-direction: column;
  /* background-color: brown; */

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Welcome = styled.h1`
  color: lightgray;
  margin-left: 30px;
`;

const MainDisplayPlaylists = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  flex-wrap: wrap;
`;

const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  max-height: 260px;
  background-color: #272727;
  padding: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;

  > img {
    max-width: 200px;
    max-height: 200px;
    min-width: 200px;
    min-height: 200px;
    margin-bottom: 10px;
  }

  > h4 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: lightgray;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > p {
    margin-top: 5px;
    margin-bottom: 5px;
    color: lightgray;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: small;
  }
`;

export default MainContent;
