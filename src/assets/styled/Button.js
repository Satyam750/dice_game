import styled from "styled-components"

export const Button = styled.button`
padding: 10px 18px;
color: white;
border-radius: 5px;
background: #000;
min-width: 220px;
border:1px solid transparent;
transition: 0.5s ease-in;
cursor: pointer;

font-size: 16px;
&:hover{
    background-color:white;
    border:1px solid black;
    color: black;
    transition: 0.3s  ease-in;

}
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;



