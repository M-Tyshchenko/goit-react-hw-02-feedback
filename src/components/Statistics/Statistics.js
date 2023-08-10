import { Container, Title, Text } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <Container>
      <Title>Statistics</Title>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
    </Container>
  );
};
