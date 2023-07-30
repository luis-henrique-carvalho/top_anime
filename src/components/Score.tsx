import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

type Props = {
  score: number;
};

const Score = ({ score }: Props) => {
  const maxScore = 5;
  const scoreInteiro = Math.floor(score); // Utilizamos Math.floor para arredondar para baixo
  const hasHalfStar = score % 1 !== 0; // Verificamos se o score possui parte decimal

  const renderedStars = [];

  for (let i = 1; i <= maxScore; i++) {
    if (i <= scoreInteiro) {
      renderedStars.push(<BsStarFill key={i} />);
    } else if (i === scoreInteiro + 1 && hasHalfStar) {
      renderedStars.push(<BsStarHalf key={i} />);
    } else {
      renderedStars.push(<BsStar key={i} />);
    }
  }

  return (
    <div className="flex gap-1 items-center justify-center">
      {renderedStars}
    </div>
  );
};

export default Score;
