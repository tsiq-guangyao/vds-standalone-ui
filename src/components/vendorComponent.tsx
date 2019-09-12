import React from 'react';

import Form from "react-jsonschema-form";
import VendorSchemaList from "./vendorSchemaList"
import VendorDataList from "./vendorDataList"

const log = (type: any) => console.log.bind(console, type)

export default class VendorComponent extends React.Component<VendorComponentProps, VendorComponentStates> {
  constructor(props: any) {
      super(props)
      this.state = {
        vendorData: {},
        vendorSchema: {}
      }
  }

  render() {
    var that = this
    function submit(form: any) {
      const data = form.formData
      fetch('https://vds-ea-white.iqos.twosigmaiq.com/standalone/getVendorData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
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
    return (<div className={'col-sm-12'}>
    <div className={'col-sm-4'} style={{paddingBottom: '50px'}}>
      <Form 
        schema={this.props.vendorRequest}
        formData={this.props.vendorRequestDefaultData}
        onChange={log("changed")}
        onSubmit={submit}
        onError={log("errors")} 
      />
    </div>
    <div className={'col-sm-4'}>
      <VendorSchemaList
        vendors={this.props.vendors} 
        vendorResponseSchema={this.props.vendorResponseSchema}/>
    </div>

    <div className={'col-sm-4'}>
      <VendorDataList vendorData={this.state.vendorData}/>
    </div>
  </div>)
  }
}

type VendorComponentProps = {
  vendorRequest: any,
  vendors: any,
  vendorRequestDefaultData: object,
  vendorResponseSchema: any
}
type VendorComponentStates = {
  vendorData: object,
  vendorSchema: object
}
