import React from 'react';

export default class VendorData extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
    let data = this.props.data
    let name = this.props.name
    let status = data.status
    let message = data.message
    let resData = data.data
    console.error(this.props.data)
    return (
      <div>
        <h5>{name}</h5>
        <span className='row border border-secondary'>
          <div>{populateDataField('data', this.props.data)}</div>
        </span>
      </div>
    )
  }
}

function populateDataField(dataName, data) {
  if (!data) {
    return
  }

  if (Array.isArray(data)) {
    return (
      <div className="form-group">
        <ul className="list-group">
        {
          data.map(function(d, i){
            return (
              <li className="list-group-item" style={{border: 'none'}} key={i}> {populateDataField(i, d)} </li>
            )
          })
        }
        </ul>
      </div>)
  }
  else if (typeof data === 'object' && data !== null) {
    return(
      <div className="form-group">
        <div> {dataName}: </div>
        <ul className="list-group" style={{marginBottom: '0px'}}>
        {
          Object.keys(data).map(function(d, i){
            return (
              <li className="list-group-item" style={{border: 'none', padding: '0px 15px'}} key={i}> {populateDataField(d, data[d])} </li>
            )
          })
        }
        </ul>
      </div>)
  }
  return(<div> {dataName}: <span className="label label-default"> {data !== null ? data: "N/A"} </span></div>)
}
// Specifies the default values for props:
VendorData.defaultProps = {
  data: {}
};
