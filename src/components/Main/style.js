import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px auto;
  padding: 15px;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin: 15px auto;
  }

  @media (min-width: 1400px) {
    width: 1400px;
  }
`;

export default MainContainer;
