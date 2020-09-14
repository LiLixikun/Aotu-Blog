import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

// 返回 server 端 store
export const getServerStore = () => {
    return createStore(
        reducers
    )
}

// 返回客户端 store
export const getClientStore = () => {
    const defaultStore: object = (window as any).REDUX_STORE || {};
    return createStore(
        reducers,
        defaultStore,
    )
}