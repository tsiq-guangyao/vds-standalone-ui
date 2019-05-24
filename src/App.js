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
        contents.push(
          <div className="form-group field field-string">
            <legend> { vendor } </legend>
          </div>)
        if (this.state.vendorData[vendor] === null) {
          continue
        }
        let vendorData = JSON.parse(this.state.vendorData[vendor])
        for (let dataName in vendorData) {
          let data = vendorData[dataName]
          console.log("typeof " + (typeof dataName) + dataName)
          if (typeof data === 'object' && data !== null) {
            contents.push(
              <div className="form-group field field-string">
                <h5 className="control-label"> {dataName}: </h5>
                <ul class="list-group">
                {
                  Object.keys(data).map(function(d, i){
                    return (
                      <li className="list-group-item" key={i}> {d}: <span class="label label-default">{data[d] !== null ? data[d]: "N/A"} </span></li>
                    )
                  })
                }
                </ul>
              </div>)
          }
          else {
            contents.push(
              <div className="form-group field field-string">
                <h5 className="control-label"> {dataName}: <span class="label label-default"> {data !== null ? data: "N/A"} </span></h5>
              </div>)
          }
        }
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
            {/* <div>{JSON.stringify(this.state.vendorData)} </div> */}
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
}
