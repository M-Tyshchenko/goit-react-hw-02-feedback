import { BtnContainer, BtnItem } from './FeedbackBtns.styled';

export const FeedbackBtns = ({ handleClick, good, neutral, bad }) => {
  return (
    <BtnContainer>
      <BtnItem onClick={handleClick}>Good</BtnItem>
      <BtnItem onClick={handleClick}>Neutral</BtnItem>
      <BtnItem onClick={handleClick}>Bad</BtnItem>
    </BtnContainer>
  );
};
