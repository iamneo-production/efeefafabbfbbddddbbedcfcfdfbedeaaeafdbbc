import { useState } from "react";
import Button from "./Button";

const Card = ({ question, correctAnswerMarkUpdate, attempt, options, answer, setQsns, qsn, setCard, qsnAttempt }) => {
  const [marked, setMarked] = useState(false);
  const optionsArray = [options.option1, options.option2, options.option3, options.option4];
  
  const click = (clicked) => {
    if (qsnAttempt === 4) {
      setCard(true);
    }
    if (clicked === answer) {
      correctAnswerMarkUpdate(attempt + 1);
    }
    setMarked(true);
    setQsns(qsn + 1);
  };

  const norm = "bg-red-300 px-2 py-1 rounded hover:bg-orange-400";
  const disable = "bg-orange-300 px-2 py-1 rounded opacity-50 cursor-not-allowed";

  return (
    <div>
      <h4 className="pt-3 pb-1">{question}</h4>
      <div className="flex space-x-2">
        {optionsArray.map((option, index) => (
          <Button
            key={index}
            marked={marked}
            onClick={() => click(option)}
            style={!marked ? norm : disable}
            disabled={marked}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Card;
