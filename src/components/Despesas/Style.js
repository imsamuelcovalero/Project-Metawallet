import styled from 'styled-components';

export const TrS = styled.tr`
  /* box-shadow: 0 4px 4px rgba(0, 0, 0, 0.50); */
  /* transform: scale(1.0005);
  transition: all 0.2s ease-in-out; */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  textarea:-webkit-autofill:active,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus,
  select:-webkit-autofill:active {
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
    -webkit-transition-delay: 9999s;
    -webkit-transition-property: background-color, color;
  }
  select {
      font-weight: bolder;
      font-size: 1.01em;
      color: ${({ oddOrEven }) => (oddOrEven === 'odd'
    ? '#93032E' : '#FFF3F0')};
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
        background: #4D7C8A;
      }
    }
  #input-expense-description {
    width: 200px;
    text-align: center;
  }
  #input-expense-valor {
    margin-right: 3px;
    width: 70px;
  }
  input {
    font-weight: bolder;
    font-size: 1.01em;
    color: ${({ oddOrEven }) => (oddOrEven === 'odd'
    ? '#93032E' : '#FFF3F0')};
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
