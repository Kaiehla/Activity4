// ScoreButtons.tsx
import { Button } from "react-bootstrap";

interface ScoreButtonsProps {
  team: string;
  score: number;
  changeScore: (team: string, points: number, action: string) => void;
}

function ScoreButtons({ team, score, changeScore }: ScoreButtonsProps) {
  return (
    <>
      <Button variant="success" onClick={() => changeScore(team, 1, "add")}>
        +1
      </Button>
      <Button variant="success" onClick={() => changeScore(team, 2, "add")}>
        +2
      </Button>
      <Button variant="success" onClick={() => changeScore(team, 3, "add")}>
        +3
      </Button>
      <Button
        variant="danger"
        onClick={() => changeScore(team, 1, "sub")}
        disabled={score <= 0}
      >
        -1
      </Button>
      <Button
        variant="danger"
        onClick={() => changeScore(team, 2, "sub")}
        disabled={score <= 1}
      >
        -2
      </Button>
      <Button
        variant="danger"
        onClick={() => changeScore(team, 3, "sub")}
        disabled={score <= 2}
      >
        -3
      </Button>
    </>
  );
}

export default ScoreButtons;
