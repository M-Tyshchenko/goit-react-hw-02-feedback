import { Container, Title, Text } from './Statistics.styled';

export const Statistics = ({ goodClicks, neutralClicks, badClicks }) => {
  return (
    <Container>
      <Title>Statistics</Title>
      <Text>Good: {goodClicks}</Text>
      <Text>Neutral: {neutralClicks}</Text>
      <Text>Bad: {badClicks}</Text>
    </Container>
  );
};
