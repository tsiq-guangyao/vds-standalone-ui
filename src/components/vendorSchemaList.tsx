import React from 'react';
import VendorSchema from './vendorSchema'

export default class VendorSchemaList extends React.Component<VendorSchemaListProps, VendorSchemaListStates> {
  constructor(props: any) {
      super(props)
  }

  render() {
    return (
      <div>{
        Object.keys(this.props.vendors).map((name: any, _: any) => {
          let vendor = this.props.vendors[name]
          let schemaName = vendor.schemaName
          if (this.props.vendorResponseSchema && this.props.vendorResponseSchema[schemaName]) {
            return (
              <VendorSchema schema={this.props.vendorResponseSchema[schemaName]}></VendorSchema>
            )
          }
        })
      }
      </div>
    )
  }
}

// Specifies the default values for props:
type VendorSchemaListProps = {
  vendors: any,
  vendorResponseSchema: any
}

type VendorSchemaListStates = {
  vendors: []
}