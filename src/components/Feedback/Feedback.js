import { Container, Title } from 'components/Feedback/Feedback.styled';
import { FeedbackBtns } from 'components/FeedbackBtns/FeedbackBtns';

export const Feedback = ({
  handleClick,
  goodClicks,
  neutralClicks,
  badClicks,
}) => {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      <FeedbackBtns
        handleClick={handleClick}
        good={goodClicks}
        neutral={neutralClicks}
        bad={badClicks}
      />
    </Container>
  );
};
