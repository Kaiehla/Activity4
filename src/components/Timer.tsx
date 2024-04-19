import { PlusSquare, DashSquare } from "react-bootstrap-icons";

interface TimerProps {
  timer: number;
  formatTime: (time: number) => string;
  increaseMinutes: () => void;
  decreaseMinutes: () => void;
  increaseSeconds: () => void;
  decreaseSeconds: () => void;
  isRunning: boolean;
}

function Timer({
  timer,
  formatTime,
  increaseMinutes,
  decreaseMinutes,
  increaseSeconds,
  decreaseSeconds,
  isRunning,
}: TimerProps) {
  return (
    <div>
      <div className="lh-1 mt-3">
        <p className="mb-3 fs-2 mt-2" style={{userSelect: "none"}}>Timer</p>
        <p style={{ fontSize: "8.5em", marginLeft: "10px", userSelect: "none" }}>
          {formatTime(timer)}
        </p>
      </div>
      {!isRunning && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center me-5 pe-2">
            <PlusSquare className="iconStyle" onClick={increaseMinutes} />
            <p className="ms-2 mb-0 me-1" style={{ userSelect: 'none' }}>Min</p>
            <DashSquare className="iconStyle" onClick={decreaseMinutes} />
          </div>
          <div className="d-flex justify-content-center align-items-center ms-5 ps-3">
            <PlusSquare className="iconStyle" onClick={increaseSeconds} />
            <p className="ms-2 mb-0 me-1" style={{ userSelect: 'none' }}>Sec</p>
            <DashSquare className="iconStyle" onClick={decreaseSeconds} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Timer;
