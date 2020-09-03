import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'


export const getServerStore = () => {
    return createStore(
        reducers
    )
}


export const getClientStore = () => {
    const defaultStore: object = (window as any).REDUX_STORE || {};

    return createStore(
        reducers,
        defaultStore,
    )
}