import { Container, Text } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePerc }) => {
  const totalFeedback = total(good, neutral, bad);
  const positiveFeedback = positivePerc(good, totalFeedback);

  return (
    <Container>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {totalFeedback}</Text>
      <Text>Positive feedback: {positiveFeedback}%</Text>
    </Container>
  );
};
