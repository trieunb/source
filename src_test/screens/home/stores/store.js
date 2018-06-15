/**
*| Screen         : Home
*| Author       	: ANS809 - quypn@ans-asia.com
*| Created date 	: 2018-06-14
*| Description   	: send reducers and sagas to store
*/
/*============================================================================*/
// import library
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

// import sagas and reducer of home screen
import reducers from '../reducers/reducer';
import rootSaga from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    {},
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
