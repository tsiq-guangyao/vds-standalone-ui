import React from 'react';
import Form from "react-jsonschema-form";
import VendorSchemaList from "./components/vendorSchemaList"
import VendorDataList from "./components/vendorDataList"

const log = (type) => console.log.bind(console, type)

export default class App extends React.Component {
  state = {
      vendorData: null,
      vendorSchema: null
  }

  render() {
    return (
      <div className="App">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
        <div className={'col-sm-1'}/>    
        <div className={'col-sm-3'}>
            <Form schema={this.props.schema.vendorRequest}
                onChange={log("changed")}
                onSubmit={this.submit.bind(this)}
                onError={log("errors")} />
        </div>
        <div className={'col-sm-4'} >
          <VendorSchemaList vendors={this.props.schema.vendors} vendorResponseSchema={this.props.schema.vendorResponseSchema}/>
        </div>
        <div className={'col-sm-4'}>
          <VendorDataList data={this.state.vendorData}/>
        </div>
        <div className={'col-sm-1'}/>
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
        body: JSON.stringify(data)
      })
      .then(res => {
          return res.json()
      })
      .then(body => {
        that.setState({vendorData: body})
      })
  }
}