import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Form from "react-jsonschema-form";

const log = (type) => console.log.bind(console, type)
fetch("http://localhost:8080/getVendorData", {'mode': 'no-cors'})
      .then(res => {
          console.error(res)
          return res.json()
      })
      .then(res => {
        ReactDOM.render((
            <Form schema={res.vendorRequest}
                  onChange={log("changed")}
                  onSubmit={log("submitted")}
                  onError={log("errors")} />
          ), document.getElementById("root"));
      })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
