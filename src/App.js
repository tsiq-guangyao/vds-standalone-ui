import React from 'react';
import Form from "react-jsonschema-form";
const log = (type) => console.log.bind(console, type)

export default class App extends React.Component {
  state = {
      vendorData: null
  }

  render() {
    let contents = []
    if (this.state.vendorData) {
      contents.push((<h3 > Name and Legal Address Query </h3>))
      for (let vendor in this.state.vendorData) {
        this.populateVendorData.call(this, contents, vendor, this.state.vendorData[vendor])
      }
    }
    return (
      <div className="App">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
        <div className={'col-sm-1'}></div>    
        <div className={'col-sm-5'}>
            <Form schema={this.props.schema.vendorRequest}
                onChange={log("changed")}
                onSubmit={this.submit.bind(this)}
                onError={log("errors")} />
        </div>        
        <div className={'col-sm-5'}>
            <div> {contents} </div>
        </div>
        <div className={'col-sm-1'}></div>
      </div>
    )
  }

  submit(form) {
    const data = form.formData
    console.log(data)
    var that = this
    fetch('http://localhost:8080/standalone/getVendorData', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(data.address)
      })
      .then(res => {
          return res.json()
      })
      .then(body => {
        that.setState({vendorData: body})
      })
  }

  populateVendorData(contents, vendorName, val) {
    contents.push(
      <div className="form-group field field-string">
        <legend> { vendorName } </legend>
      </div>)
    if (val === null) {
      return
    }
    let vendorData = JSON.parse(val)
    for (let dataName in vendorData) {
      contents.push(populateDataField(dataName, vendorData[dataName]))
    }
  }
}

function populateDataField(dataName, data) {
  if (Array.isArray(data)) {
    console.log(data)
    return (
      <div className="form-group field field-string">
        <h5 className="control-label"> {dataName}: </h5>
        <ul class="list-group">
        {
          data.map(function(d, i){
            return (
              <li className="list-group-item" key={i}> index{i+1} {populateDataField(i, d)} </li>
            )
          })
        }
        </ul>
      </div>)
  }
  else if (typeof data === 'object' && data !== null) {
    console.log(data)
    return(
      <div className="form-group field field-string">
        <h5 className="control-label"> {dataName}: </h5>
        <ul className="list-group">
        {
          Object.keys(data).map(function(d, i){
            return (
              <li className="list-group-item" key={i}> {populateDataField(d, data[d])} </li>
            )
          })
        }
        </ul>
      </div>)
  }
  else {
    return(
      <div className="form-group field field-string">
        <h5 className="control-label"> {dataName}: <span className="label label-default"> {data !== null ? data: "N/A"} </span></h5>
      </div>)
  }
}