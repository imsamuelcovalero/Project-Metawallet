// Lembre-se sempre de criar um estado inicial para cada reducer. É o mesmo que fazíamos com o this.state lá no constructor...
import { SET_CURRENCIES, ADD_USER_EXPENSES, EXCLUDE_USER_EXPENSES,
  EDIT_USER_EXPENSES, IS_EDIT_ACTIVE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isEditActive: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case ADD_USER_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case EXCLUDE_USER_EXPENSES:
    return { ...state, expenses: action.payload };
  case IS_EDIT_ACTIVE:
    return { ...state, isEditActive: action.payload };
  case EDIT_USER_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
      isEditActive: false,
    };
  default:
    return state;
  }
};

export default walletReducer;
