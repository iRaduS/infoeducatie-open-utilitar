import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import Chat from "./Chat";
import ChatRules from "./ChatRules";

import "./chat-box.scss";

const allOptions = ["chat & log", "rules"];

const ChatBox = ({ G, ctx, playerID, moves }) => {
  const [optionIndex, setIndex] = useState(0);
  const [rulesPage, setRPage] = useState(1);

  const left = () => {
    if (optionIndex - 1 < 0) {
      setIndex(allOptions.length - 1);
    } else {
      setIndex(optionIndex - 1);
    }
  };

  const right = () => {
    if (optionIndex + 1 > allOptions.length - 1) {
      setIndex(0);
    } else {
      setIndex(optionIndex + 1);
    }
  };

  const selection = allOptions[optionIndex];

  const option = () => {
    if (selection === "chat & log") {
      return <Chat G={G} playerID={playerID} moves={moves} />;
    }
    else if (selection === "rules") {
      return <ChatRules page={rulesPage} setPage={setRPage} />;
    }
  };

  return (
      <div className="cls-container">
        <div className="cls-header">
        <span className="left-option" onClick={() => left()}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </span>
          <span className="cls-title">{selection}</span>
          <span className="right-option" onClick={() => right()}>
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
        </div>
        {option()}
      </div>
  );
};

export default ChatBox;
