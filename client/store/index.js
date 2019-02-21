import { createStore, applyMiddleware } from 'redux';

export default createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        // `withExtraArgument` gives us access to axios in our async action creators!
        // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
        thunkMiddleware.withExtraArgument({ axios }),
        loggingMiddleware
      )
    )
  );