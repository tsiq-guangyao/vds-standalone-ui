
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

const APIAddr = "https://vds-ea-white.iqos.twosigmaiq.com/standalone/getVendorSchema"
const options = {
    method: 'GET'
}
fetch(APIAddr, options)
    .then(res => {
        return res.json()
    })
    .then(body => {
        ReactDOM.render(<App schema={body}/>, document.getElementById("root"));
    })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
