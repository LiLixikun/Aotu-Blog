import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux'
import App from '../shared/App'

import { getClientStore } from '../shared/store'

loadableReady(() => {
    ReactDOM.hydrate(
        <Provider store={getClientStore()}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        ,
        document.getElementById("root")
    )
})

