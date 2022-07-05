// Coloque aqui suas actions
const CURRENCI_API = 'https://economia.awesomeapi.com.br/json/all';

export const SET_CURRENCIES = 'SET_CURRENCIES';
export const ADD_USER_EXPENSES = 'SET_USER_EXPENSES';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const REQUEST_API = 'REQUEST_API';
export const ADD_ACTUAL_EXPENSE = 'ADD_ACTUAL_EXPENSE';
export const EXCLUDE_USER_EXPENSES = 'EXCLUDE_USER_EXPENSE';
export const EDIT_USER_EXPENSES = 'EDIT_USER_EXPENSES';
export const IS_EDIT_ACTIVE = 'IS_EDIT_ACTIVE';

export const failedRequest = (payload) => ({ type: FAILED_REQUEST, payload });

export const requestAPI = () => ({ type: REQUEST_API });

export const setUserEmail = (payload) => ({
  type: SET_USER_EMAIL,
  payload,
});

export const fetchCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  try {
    // dispatch(requestAPI());
    const response = await fetch(CURRENCI_API);
    const data = await response.json();
    const currenciesArray = Object.keys(data)
      .filter((coin) => coin !== 'USDT');
    return dispatch(fetchCurrencies(currenciesArray));
  } catch (error) {
    return dispatch(failedRequest(error.message));
  }
};

export const userExpenses = (expense, exchangeRates) => ({
  type: ADD_USER_EXPENSES,
  payload: { ...expense, exchangeRates },
});

export const addExpenseThunk = (expense) => async (dispatch) => {
  try {
    const response = await fetch(CURRENCI_API);
    const exchangeRates = await response.json();
    return dispatch(userExpenses(expense, exchangeRates));
  } catch (error) {
    return dispatch(failedRequest(error.message));
  }
};

export const excludeExpenses = (expense) => ({
  type: EXCLUDE_USER_EXPENSES,
  payload: expense,
});

export const editExpenses = (expense) => ({
  type: EDIT_USER_EXPENSES,
  payload: expense,
});

export const activeEdit = (payload) => ({
  type: IS_EDIT_ACTIVE,
  payload,
});
