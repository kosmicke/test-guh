import styled from "styled-components";
import starwarsBackgroundImg from "../../assets/background-api-starwars.png";

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  background: url(${starwarsBackgroundImg}) no-repeat center;
  background-size: cover;
`;
