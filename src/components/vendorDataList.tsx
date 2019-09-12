import React from 'react';
import VendorData from './vendorData';

export default class VendorDataList extends React.Component<VendorDataListProps, VendorDataListStates> {
  constructor(props: any) {
      super(props)
      this.state = {}
  }

  render() {
    const vendorData = this.props.vendorData
    return (
      <div>
        {
          vendorData && Object.keys(vendorData).map((queryName: any, _) => {
            const queryDatum = vendorData[queryName]
            if (Array.isArray(queryDatum)) {
                return (<div className={"form-group"}>
                    {queryDatum.map((data, i) => {
                      return (<div>
                          <legend>{queryName} #{i}</legend>
                          {
                            Object.keys(data).map((name, _) => { 
                              if (name !== "id" && name !== "structures" && name !== "vin" && name !== "driverLicense")
                                return <VendorData data={data[name]} name={name} key={name}/>
                              else return
                            })
                          }
                        </div>)
                    })}
                </div>)
            }
            return (<div className={"form-group"}>
                <legend>{queryName}:</legend>
                  {Object.keys(queryDatum).map((name, _) => { 
                    return <VendorData data={queryDatum[name]} name={name}/>
                  })}
                  <span></span>
              </div>)
          })
        }
      </div>
    )
  }
}

// Specifies the default values for props:
type VendorDataListProps = {
  vendorData: any
}
type VendorDataListStates = {}