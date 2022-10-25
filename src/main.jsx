import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes'
import './styles/index.css'
import {store} from "./utils/store/store"
import {Provider} from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
