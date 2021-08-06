import styled from 'styled-components';

export const MenuStyle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #49aa26;
  padding: 2rem;
  text-align: center;
  width: 100vw;
  height: 5em;
`;

export const ButtonMenu = styled.button`
  background-color: #49aa26;
  color: #ffffff;
  text-decoration: none;
  margin: 20px;
  padding: 10px;
  font-size: 1em;
  border: none;
  &:hover {
    background: #00000020;
  }
`;
