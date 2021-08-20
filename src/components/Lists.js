import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddBoxIcon from "@material-ui/icons/AddBox";
import styled from "styled-components";

function Lists() {
  return (
    <ListsContainer>
      <TopList>
        <ElementDivs>
          <HomeIcon style={{ fontSize: 27, color: "white" }} />
          <LabelsTopList>Home</LabelsTopList>
        </ElementDivs>
        <ElementDivs>
          <SearchIcon style={{ fontSize: 27, color: "white" }} />
          <LabelsTopList>Search</LabelsTopList>
        </ElementDivs>
        <ElementDivs>
          <AddBoxIcon style={{ fontSize: 27, color: "white" }} />
          <LabelsTopList>Create Playlist</LabelsTopList>
        </ElementDivs>
        <ElementDivs>
          <FavoriteIcon style={{ fontSize: 27, color: "white" }} />
          <LabelsTopList>Liked Songs</LabelsTopList>
        </ElementDivs>
      </TopList>
      <CustomPlayList>
        <PlayListElements>Morning walk</PlayListElements>
        <PlayListElements>Evening Stroll</PlayListElements>
        <PlayListElements>Night Stroll</PlayListElements>
        <PlayListElements>Morning walk</PlayListElements>
        <PlayListElements>Evening Stroll</PlayListElements>
        <PlayListElements>Night Stroll</PlayListElements>
        <PlayListElements>Morning walk</PlayListElements>
        <PlayListElements>Evening Stroll</PlayListElements>
        <PlayListElements>Night Stroll</PlayListElements>
        <PlayListElements>Morning walk</PlayListElements>
        <PlayListElements>Evening Stroll</PlayListElements>
        <PlayListElements>Night Stroll</PlayListElements>
      </CustomPlayList>
    </ListsContainer>
  );
}

const ListsContainer = styled.div`
  /* background-color: pink; */

  display: flex;
  flex-direction: column;
  max-width: 42vh;
  min-width: 30vh;
`;

const TopList = styled.div`
  /* background-color: brown; */
  display: flex;
  height: 26vh;
  flex-direction: column;
  padding-top: 15px;
`;
const ElementDivs = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 15px;
  :hover {
    background-color: #212529;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const LabelsTopList = styled.h4`
  color: lightgray;
  margin: 0px;
  padding-top: 6px;
  padding-left: 15px;
`;

const CustomPlayList = styled.div`
  border-top: 1px groove grey;
  display: flex;
  flex-direction: column;
  height: 55vh;
  padding-top: 10px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const PlayListElements = styled.div`
  padding-left: 10px;
  text-align: left;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
  color: lightgray;
  text-transform: none;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 3px;
  font-size: medium;
  min-height: 18px;

  :hover {
    background-color: #212529;
  }
`;

export default Lists;
