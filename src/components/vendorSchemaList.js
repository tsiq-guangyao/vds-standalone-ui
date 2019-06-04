import React from 'react';
import VendorSchema from './vendorSchema'

export default class VendorSchemaList extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        vendors: []
      }
  }

  render() {
    return (
      <div>{
        Object.keys(this.props.vendors).map((name, _) => {
          let vendor = this.props.vendors[name]
          let schemaName = vendor.schemaName
          return (
              <VendorSchema data={vendor} schema={this.props.vendorResponseSchema && this.props.vendorResponseSchema[schemaName]}></VendorSchema>
            )
        })
      }
      </div>
    )
  }
}

// Specifies the default values for props:
VendorSchemaList.defaultProps = {
  vendors: {},
  data: {},
  vendorResponseSchema: {}
};

// function populateVendor(vendorData) {

// }
// function populateDataField(dataName, data) {
//   if (!data) {
//     return <div></div>
//   }

//   if (Array.isArray(data)) {
//     return (
//       <div className="form-group">
//         <ul className="list-group">
//         {
//           data.map(function(d, i){
//             return (
//               <li className="list-group-item" style={{border: 'none'}} key={i}> {populateDataField(i, d)} </li>
//             )
//           })
//         }
//         </ul>
//       </div>)
//   }
//   else if (typeof data === 'object' && data !== null) {
//     return(
//       <div className="form-group">
//         <div> {dataName}: </div>
//         <ul className="list-group" style={{marginBottom: '0px'}}>
//         {
//           Object.keys(data).map(function(d, i){
//             return (
//               <li className="list-group-item" style={{border: 'none', padding: '0px 15px'}} key={i}> {populateDataField(d, data[d])} </li>
//             )
//           })
//         }
//         </ul>
//       </div>)
//   }
//   return(<div> {dataName}: <span className="label label-default"> {data !== null ? data: "N/A"} </span></div>)
// }