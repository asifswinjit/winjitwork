import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import RootReducer from '../reducers'

export default function configureStore(initialState = {})
{
    const logger = createLogger({collapse:true});
    const enhancer = compose(
        applyMiddleware(thunk,promise,logger)
    );
    return createStore(RootReducer,initialState,enhancer);
}