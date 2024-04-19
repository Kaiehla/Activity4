// ShotClock.tsx
interface ShotClockProps {
  shotClock: number;
  setShotClockTime: (time: number) => void;
}

function ShotClock({ shotClock, setShotClockTime }: ShotClockProps) {
  return (
    <div className="lh-1">
      <p className="mb-1 fs-6 mt-3" style={{userSelect: "none"}}>Shot Clock</p>
      <div className="d-flex align-items-center justify-content-center gap-3">
        <button className="btnShotClock" style={{userSelect: "none"}} onClick={() => setShotClockTime(14)}>
          14
          <br />
          Sec
        </button>
        <p className="font-mcReg text-mc-gray" style={{ fontSize: "7em", userSelect: "none" }}>
          {shotClock}
        </p>
        <button className="btnShotClock" style={{userSelect: "none"}} onClick={() => setShotClockTime(24)}>
          24
          <br />
          Sec
        </button>
      </div>
    </div>
  );
}

export default ShotClock;
