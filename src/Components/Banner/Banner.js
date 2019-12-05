import styled from "styled-components/macro";
const width = window.innerWidth;
export const Banner = styled.div`
  height: 30vw;
  min-height: 200px;
  margin-top: -90vh;
  clip-path: polygon(0 0,100% 0,100% 100%,0 80%);
  background-image: url("img/banner.jpg");
  background-size: cover;
  background-position: center;
  /* padding-top: 100px; */
`;
