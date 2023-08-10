import { Container, Title } from 'components/Feedback/Feedback.styled';
import { FeedbackBtns } from 'components/FeedbackBtns/FeedbackBtns';

export const Feedback = () => {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      <FeedbackBtns />
    </Container>
  );
};
