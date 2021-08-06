import styled from 'styled-components';

export const Container = styled.section`
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 1920px;
  min-width: 540px;
`;

export const Table = styled.table`
box-shadow: -10px 10px 10px 1px rgba(0, 0, 0, 0.25);
border-radius: 4px;
border-spacing: 0 1rem;
  width: 85vw;
  max-width: 1920px;
  min-width: 540px;
  background: white;
  font-size: 1em;
  font-weight: normal;
  padding: 1rem 2rem;
  text-align: left;
  th {
    border-spacing: 0;
    background: #cdcdcd;
    font-weight: normal;
    padding: 1rem 2rem;
    text-align: center;
  }
  tr{
    margin: 5px;
    opacity: 0.5
    :hover{
        opacity: 1
    }
  }
  td {
    padding: 1rem 2rem;
    text-align: center;
  }

td.income {
    color: #12a454;
}

td.expense {
    color: #e92929;
}
`;

export const ButtonTable = styled.button`
text-decoration: none;
margin: 0 auto;
height: 50px;
padding: 10px 25px;
font-size: 1em;
border: none;
  border: none;
  color: #49AA26;
  background: #fff;
  border-radius: 0.25rem;
  cursor: pointer;
  :hover {
    background:#A4AFC1;
    color: #fff
`;
