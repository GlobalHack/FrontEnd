const actionCall = (action, api) => filter => dispatch =>
  api(filter)
    .then((payload) => {
      dispatch({ type: action, payload });
    })
    .catch((error) => {
      throw error;
    });

export default actionCall;
