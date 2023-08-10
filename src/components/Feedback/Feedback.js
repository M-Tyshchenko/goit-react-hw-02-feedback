import { Container, Title } from 'components/Feedback/Feedback.styled';
import { FeedbackBtns } from 'components/FeedbackBtns/FeedbackBtns';

export const Feedback = ({
  goodHandleClick,
  neutralHandleClick,
  badHandleClick,
}) => {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      <FeedbackBtns
        goodClick={goodHandleClick}
        neutralClick={neutralHandleClick}
        badClick={badHandleClick}
      />
    </Container>
  );
};
