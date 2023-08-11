import { BtnContainer, BtnItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  goodHandleClick,
  neutralHandleClick,
  badHandleClick,
}) => {
  return (
    <BtnContainer>
      <BtnItem onClick={goodHandleClick}>Good</BtnItem>
      <BtnItem onClick={neutralHandleClick}>Neutral</BtnItem>
      <BtnItem onClick={badHandleClick}>Bad</BtnItem>
    </BtnContainer>
  );
};
