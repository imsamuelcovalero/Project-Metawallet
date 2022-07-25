import styled from 'styled-components';

export const DivGlobal = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: #FFF3F0;
`;

export const Div = styled.div`
  width: 450px;
  height: 340px;
  border: 1px solid #e1e5eb;
  background: ${(props) => (props.corFundo ? props.corFundo : '#4D7C8A')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #FE5E41;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  #logo {
    width: 90%;
    margin-left: 15px;
    margin-top: 25px;
  }
  #btc {
    width: 38px;
  }
  #loginBtc {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
  }
  form {
    input {
      font-size: 18px;
      border: 1px solid #e1e5eb;
      outline: none;
      width: 100%;
      height: 20%;
      margin-bottom: 10px;
    }
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Btn = styled.button`
  :disabled {
    background-color: #7F9C96;
  }
  :enabled {
    background-color: #4D7C8A;
    color: #FE5E41;
    border: 1px solid #FE5E41;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  }
  font-size: 16px;
  border: 1px solid #EFA00B;
  border-radius: 5px;
  margin-top: 15px;
  width: 50%;
  height: 35px; 
  align-self: center;
  color: #EFA00B;
  font-weight: bold;
  cursor: pointer;
`;
