import React from 'react';

export default class VendorData extends React.Component<VendorDataProps, VendorDataStates> {
  constructor(props: any) {
      super(props)
  }

  render() {
    let data = this.props.data
    let name = this.props.name
    let status = data.status
    let messages = data.messages
    let vendorData = data.data
    let backgroundWarning = (status === 'AVAILABLE' ? 'bg-success' : 'bg-danger')
    return (
      <div>
        <div className={'row ' + backgroundWarning}>
          <h5 className={'col-sm-7'} >{name}</h5>
          <h5 className={'col-sm-4'} >{status}</h5>
        </div>
        <div>{populateMessages(messages)}</div>
        <table className='table'><tbody>{vendorData && populateDataField(null, vendorData)}</tbody></table>
      </div>
    )
  }
}
function populateMessages(messages: any) {
  if (!messages) {
    return
  }
  return (
    <ul>
      {
        messages.map((message: any, i: number) => 
          (<li key={i}> {message} </li>))
      }
    </ul>
  )
}
function populateDataField(dataName: any, data: any) {
  if (data == null) {
    return
  }

  if (Array.isArray(data)) {
    return (
      <tr>
        {dataName && <td> {dataName}: </td>}
        <td>
          <table className='table' style={{marginBottom: 0}}>
            <tbody>
              {data.map((d, i) => populateDataField(null, d))}
            </tbody>
          </table>
        </td>
      </tr>)
  }
  else if (typeof data === 'object' && data !== null) {
    return(
      <tr>
        {dataName && <td> {dataName}: </td>}
        <td>
          <table className='table' style={{marginBottom: 0}}>
            <tbody>
              {Object.keys(data).map(d => {if (d !== 'id') populateDataField(d, data[d])})}
            </tbody>
          </table>
        </td>
      </tr>)
  }
return(<tr>{dataName && <td>{dataName}:</td>}<td><label>{data !== null && data !== "" ? data.toString(): "N/A"}</label></td></tr>)
}


// Specifies the default values for props:
type VendorDataProps = {
  data: {
    status: string,
    messages: [],
    data: {}
  },
  name: string,
}
type VendorDataStates = {}