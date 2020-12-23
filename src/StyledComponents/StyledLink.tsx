import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: black;
  padding: 5px;
  margin: 2px;
  border: solid;
  border-width: 2px;
  text-decoration: none;
  background: ${(p: IStyledLink) => (p.active ? "#0000ff" : "#365bd3")}
  &:hover{
    background : #0000ff
  }
`;
interface IStyledLink {
  active: boolean;
}
