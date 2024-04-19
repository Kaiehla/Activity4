import { Button } from "react-bootstrap";

interface ControlButtonsProps {
  start: () => void;
  stop: () => void;
  reset: () => void;
  timer: number;
  shotClock: number;
}

function ControlButtons({
  start,
  stop,
  reset,
  timer,
  shotClock,
}: ControlButtonsProps) {
  return (
    <div className="d-flex justify-content-center align-items-center gap-2">
      <Button
        variant="dark"
        className="ms-5"
        onClick={start}
        disabled={timer === 0 || shotClock === 0}
      >
        Start
      </Button>
      <Button variant="dark" onClick={stop}>
        Stop
      </Button>
      <Button variant="dark" className="me-5" onClick={reset}>
        Reset
      </Button>
    </div>
  );
}

export default ControlButtons;
