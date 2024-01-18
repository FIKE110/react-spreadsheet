import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f3f3;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 6em;
  color: #333;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 1.5em;
  color: #666;
  margin-bottom: 20px;
`;

const StyledLink = styled.a`
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
`;

const Image = styled.img`
  width: 50%;
  max-width: 400px;
  margin-top: 20px;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Content>
        <Title>404</Title>
        <Message>Oops! The page you are looking for might be in another castle.</Message>
        <Message>Return to <StyledLink href="/">home</StyledLink>.</Message>
        <Image src="https://i.imgur.com/Q2BAOd2.png" alt="Lost Mario" />
      </Content>
    </Container>
  );
};

export default NotFoundPage;
