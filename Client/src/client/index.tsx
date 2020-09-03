import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../shared/App'

import { getClientStore } from '../shared/store'


ReactDOM.hydrate(
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
)