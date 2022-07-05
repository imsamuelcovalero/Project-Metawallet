import styled from 'styled-components';

export const DivGlobal = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  // justify-content: center;
  background-color: #FFF3F0;
  /* #header {
    border: 2px solid red;
    width: 100%;
    height: 30px;
    background: ${(props) => (props.corFundo ? props.corFundo : '#4D7C8A')};
    border: 1px solid black;
    color: #EFA00B;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-self: flex-start;
    align-content: space-between;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  } */
`;

export const DivDespesas = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 10px;
  // border: 1px solid red;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  form {
    color: #93032E;
    input {
      color: #4D7C8A;
      margin-right: 5px;
      border: 1px solid #e1e5eb;
      outline: none;
    }
    select {
      color: #4D7C8A;
      margin-right: 5px;
    }
    button {
      padding: 2px;
      border: 1px solid black;
      margin-left: 2px;
      border-radius: 4px; 
      // margin-top: 8px;
      // margin-bottom: 5px;
      // width: 50%;
      height: 20px; 
      align-self: center;
      color: #FFF3F0;
      background-color: #FE5E41;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const Table = styled.table`
  border: 2px solid #7F9C96;
  width: 98vw;
  color: #EFA00B;
  margin-bottom: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-collapse: collapse;
  tbody {
    tr {
      margin: 2px 2px 2px 2px;
      /* outline: 1px solid #7F9C96; */
      :nth-child(even) { background-color: #FFF3F0; }
      :nth-child(odd) { background-color: #93032E; }
    }
  }
  td {
    align-items: center;
    text-align: center;
  }
  button {
    margin-right: 2px;
    padding: 2px;
    border: 1px solid black;
    border-radius: 4px; 
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    height: 20px; 
    align-self: center;
    color: #FFF3F0;
    background-color: #FE5E41;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const HeaderS = styled.div`
  width: 100%;
  background: ${(props) => (props.corFundo ? props.corFundo : '#4D7C8A')};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  /* border: 1px solid black; */
  header {
    height: 35px;
    color: #EFA00B;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* align-self: flex-start; */
    justify-content: space-between;
    margin: 0 15px;
  }
`;
