import React from "react";
import styled from "styled-components";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import Forward10Icon from "@material-ui/icons/Forward10";
import Replay10Icon from "@material-ui/icons/Replay10";

import Img from "../Images/PlayListIcon.png";

function Player() {
  return (
    <PlayerContainer>
      <SongInfo>
        <img src={Img} />
        SongName
      </SongInfo>
      <Controller>
        <PlayerControllers>
          <Replay10Icon style={{ fontSize: 35, color: "white" }} />
          <PlayCircleFilledWhiteIcon style={{ fontSize: 35, color: "white" }} />
          <PauseCircleFilledIcon style={{ fontSize: 35, color: "white" }} />
          <Forward10Icon style={{ fontSize: 35, color: "white" }} />
        </PlayerControllers>
        <Sliderrr>
          <StartTime>00:00</StartTime>

          <TimeRange>
            <input type="range" style={{ width: 650 }} />
          </TimeRange>

          <EndTime>02:49</EndTime>
        </Sliderrr>
      </Controller>
    </PlayerContainer>
  );
}

const PlayerContainer = styled.div`
  display: flex;
  min-height: 15vh;
  max-height: 15vh;
  /* background-color: grey; */
  padding-left: 20px;
  padding-right: 20px;
  /* padding-top: 10px;
  padding-bottom: 10px; */
  color: lightgray;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 30vh;
  max-width: 30vh;

  > img {
    min-height: 70px;
    max-height: 70px;
    min-width: 70px;
    max-width: 70px;
    margin-right: 20px;
  }
`;

const Controller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: brown; */
  width: 140vh;
`;

const PlayerControllers = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 7px;
  justify-content: space-around;
`;

const Sliderrr = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 7px;
`;

const StartTime = styled.div``;

const EndTime = styled.div``;

const TimeRange = styled.div`
  width: 700px;
  /* background-color: black; */
`;

export default Player;
