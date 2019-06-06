import React from 'react';
import VendorData from './vendorData';

export default class VendorDataList extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

  render() {
    const vendorData = this.props.vendorData
    // const vendorData = {"address":{"cpsc":{"data":{"numViolations":0},"messages":null,"status":"AVAILABLE"},"experian":{"data":{"intelliscorePlusScore":{"hadRecentBankruptcy":false,"value":27},"intelliscorePlusV2RiskClass":3,"intelliscorePlusV2Score":{"hadRecentBankruptcy":false,"value":28},"numDerogatoryLegalItems":0,"numEmployees":null,"numJudgments":0,"numLiens":0,"numYearsInFile":34,"primaryNaicsCode":null},"messages":null,"status":"AVAILABLE"},"fdaEnforcement":{"data":{"numEnforcements":0},"messages":null,"status":"AVAILABLE"}},"drivers":[{"data":null,"messages":["Driver first name must be neither null nor blank","Driver last name must be neither null nor blank","Driver license number must be neither null nor blank","Driver license state must be neither null nor blank"],"status":"INSUFFICIENT_INPUT"}],"vehicles":[{"data":null,"messages":null,"status":"AVAILABLE"}]}
    console.error('query', JSON.stringify(vendorData))
    return (
      <div>
        {
          vendorData && Object.keys(vendorData).map((queryName, _) => {
            const queryDatum = vendorData[queryName]
            console.error('queryName = ', queryName)
            console.error('queryDatum ', queryDatum)
            if (Array.isArray(queryDatum)) {
                return (<div className={"form-group"}>
                    {queryDatum.map((data, i) => {
                      return (<div>
                          <legend>{queryName} #{i}</legend>
                          {
                            Object.keys(data).map((name, _) => { 
                              return <VendorData data={data[name]} name={name}/>
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
VendorDataList.defaultProps = {
  vendorData: {}
};
