import React from 'react';
import VendorComponent from "./components/vendorComponent"

type AppProps = {
  schema: {
    vendors: any, 
    vendorRequest: any, 
    vendorResponseSchema: any}
  }
type AppStates = {}

export default class App extends React.Component<AppProps, AppStates> {

  render() {
    let vendorRequest = this.props.schema.vendorRequest
    return (
      <div className="App">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
        <div className={'col-sm-1'}/>
        <div className={'col-sm-10'}>
          {Object.keys(vendorRequest).map(name => 
            <VendorComponent 
              vendorRequest={vendorRequest[name]}
              vendorRequestDefaultData={vendorRequest[name].defaultValue}
              vendors={this.props.schema.vendors}
              vendorResponseSchema={this.props.schema.vendorResponseSchema[name]}/>
          )}
        </div>
        <div className={'col-sm-1'}/>
      </div>
    )
  }
}