import { useState } from "react";

interface TeamNameProps {
  initialName: string;
}

function TeamName({ initialName }: TeamNameProps) {
  const [teamName, setTeamName] = useState(initialName);
  const [isEditable, setIsEditable] = useState(false);

  return (
    <p
      className={`mb-3 fs-2 mt-2 ${
        initialName === "team A" ? "text-start" : "text-end"
      }`}
      onDoubleClick={() => setIsEditable(true)}
      onBlur={(e) => {
        setIsEditable(false);
        setTeamName(e.target.innerText);
      }}
      contentEditable={isEditable}
      style={{userSelect: "none"}}
    >
      {teamName}
    </p>
  );
}

export default TeamName;
