import { useState, useEffect } from "react";
import "./App.css";
import sbLogo from "../src/assets/sbLogo.svg";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
// Components
import TeamName from "./components/TeamName";
import ScoreBtn from "./components/ScoreBtn";
import Timer from "./components/Timer";
import ShotClock from "./components/ShotClock";
import ControlBtn from "./components/ControlBtn";

function BasketballScorekeeper() {
  const [timer, setTimer] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [shotClock, setShotClock] = useState(0);
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
        setShotClock((prevShotClock) => prevShotClock - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (shotClock === 0) {
      setIsRunning(false);
    }
  }, [shotClock]);

  useEffect(() => {
    if (timer === 0) {
      setIsRunning(false);
    }
  }, [timer]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setTimer(0);
    setShotClock(0);
    setIsRunning(false);
  };

  const setShotClockTime = (time: number) => {
    setShotClock(time);
    if (isRunning) {
      setIsRunning(false);
      start();
    }
  };

  const changeScore = (team: string, points: number, action: string) => {
    if (team === "A") {
      if (action === "add") {
        setTeamAScore((prevScore) => prevScore + points);
      } else if (action === "sub") {
        setTeamAScore((prevScore) =>
          prevScore > points ? prevScore - points : 0
        );
      }
    } else {
      if (action === "add") {
        setTeamBScore((prevScore) => prevScore + points);
      } else if (action === "sub") {
        setTeamBScore((prevScore) =>
          prevScore > points ? prevScore - points : 0
        );
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const increaseMinutes = () => {
    setMinutes((prevMinutes) => prevMinutes + 1);
    setTimer((prevTimer) => prevTimer + 60);
  };

  const decreaseMinutes = () => {
    setMinutes((prevMinutes) => (prevMinutes > 0 ? prevMinutes - 1 : 0));
    setTimer((prevTimer) => (prevTimer > 60 ? prevTimer - 60 : 0));
  };

  const increaseSeconds = () => {
    setSeconds((prevSeconds) => (prevSeconds < 59 ? prevSeconds + 1 : 59));
    setTimer((prevTimer) => (prevTimer < 3540 ? prevTimer + 1 : 3540));
  };

  const decreaseSeconds = () => {
    setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    setTimer((prevTimer) => (prevTimer > 1 ? prevTimer - 1 : 0));
  };

  return (
    <main className="bg-image text-center" style={{ height: "100vh" }}>
      <Container className="p-5 ps-0 pe-0 pb-0">
        <Row>
          {/* Team A */}
          <Col className="d-flex text-start align-items-center justify-content-center w-100 p-0">
            <Row>
              <div className="lh-1 mt-3 w-100">
                <TeamName initialName="team A" />
                <p
                  className="font-mcAlt text-start w-100 text-mc-green"
                  style={{ fontSize: "10em", userSelect: "none"}}
                >
                  {teamAScore}
                </p>
              </div>
            </Row>
          </Col>

          {/* Timer ShotClock */}
          <Col style={{userSelect: "none"}}>
            <Image src={sbLogo} height={180} style={{userSelect: "none"}}/>
            {/* Timer */}
            <Timer
              timer={timer}
              formatTime={formatTime}
              increaseMinutes={increaseMinutes}
              decreaseMinutes={decreaseMinutes}
              increaseSeconds={increaseSeconds}
              decreaseSeconds={decreaseSeconds}
              isRunning={isRunning}
            />

            {/* Shot Clock */}
            <ShotClock
              shotClock={shotClock}
              setShotClockTime={setShotClockTime}
            />
          </Col>

          {/* Team B */}
          <Col className="d-flex text-end align-items-center justify-content-center w-100 p-0">
            <Row>
              <div className="lh-1 mt-3 w-100">
                <TeamName initialName="team B" />
                <p
                  className="font-mcAlt text-end w-100 text-mc-green"
                  style={{ fontSize: "10em", userSelect: "none"}}
                >
                  {teamBScore}
                </p>
              </div>
            </Row>
          </Col>

          <div className="fixed-section d-flex justify-content-center align-items-center mt-3 gap-2">
            {/* Team A */}
            <ScoreBtn team="A" score={teamAScore} changeScore={changeScore} />

            {/*Start Stop Reset  */}
            <ControlBtn
              start={start}
              stop={stop}
              reset={reset}
              timer={timer}
              shotClock={shotClock}
            />

            {/* Team B */}
            <ScoreBtn team="B" score={teamBScore} changeScore={changeScore} />
          </div>
        </Row>
      </Container>
    </main>
  );
}

export default BasketballScorekeeper;
