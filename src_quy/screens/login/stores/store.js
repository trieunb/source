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
