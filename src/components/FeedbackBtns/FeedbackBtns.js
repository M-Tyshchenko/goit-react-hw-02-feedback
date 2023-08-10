import { BtnContainer, BtnItem } from './FeedbackBtns.styled';

export const FeedbackBtns = ({ goodClick, neutralClick, badClick }) => {
  return (
    <BtnContainer>
      <BtnItem onClick={goodClick}>Good</BtnItem>
      <BtnItem onClick={neutralClick}>Neutral</BtnItem>
      <BtnItem onClick={badClick}>Bad</BtnItem>
    </BtnContainer>
  );
};
