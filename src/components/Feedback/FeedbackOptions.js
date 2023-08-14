import { BtnContainer, BtnItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <BtnContainer>
    {options.map(option => (
      <BtnItem onClick={onLeaveFeedback(option.key)}>{option.key}</BtnItem>      
    </BtnContainer>
  );
};
