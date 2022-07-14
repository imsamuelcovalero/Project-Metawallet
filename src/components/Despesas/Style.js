import styled from 'styled-components';

export const TrS = styled.tr`
  /* box-shadow: 0 4px 4px rgba(0, 0, 0, 0.50); */
  /* transform: scale(1.0005);
  transition: all 0.2s ease-in-out; */
  select {
      font-weight: bolder;
      font-size: 1.01em;
      color: #EFA00B;
      background: transparent;
      cursor: pointer;
      height: 25px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: none;
      text-align: center;
      &:focus {
        outline: none;
        border:2px solid #FDCA40;
        border-radius:5px;
      }
      option {
        background: rgba(43, 45, 66, 1);
      }
    }
  #input-expense-description {
    width: 200px;
    text-align: start;
  }
  input {
    font-weight: bolder;
    font-size: 1.01em;
    color: #EFA00B;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #FDCA40;
    background: transparent;
    width: 50px;
    height: 20px;
    text-align: center;
    &:focus {
      outline: none;
      border:2px solid #FDCA40;
    }
  }
`;

export default TrS;
