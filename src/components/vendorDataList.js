import React from 'react';
import VendorData from './vendorData';

export default class VendorDataList extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        vendors: []
      }
  }

  render() {
    // const queryData = this.props.queryData
    const queryData = {"address":{"cpsc":{"data":{"numViolations":0},"messages":null,"status":"AVAILABLE"},"experian":{"data":{"intelliscorePlusScore":{"hadRecentBankruptcy":false,"value":27},"intelliscorePlusV2RiskClass":3,"intelliscorePlusV2Score":{"hadRecentBankruptcy":false,"value":28},"numDerogatoryLegalItems":0,"numEmployees":null,"numJudgments":0,"numLiens":0,"numYearsInFile":34,"primaryNaicsCode":null},"messages":null,"status":"AVAILABLE"},"fdaEnforcement":{"data":{"numEnforcements":0},"messages":null,"status":"AVAILABLE"}},"drivers":[],"locations":[{"hazardHub":{"data":{"crime":{"score":"C","text":"Average crime rate"},"elevationInFeet":9.09,"femaAllFloodParams":{"floodZone":"X","zoneSubtype":"0.2 PCT ANNUAL CHANCE FLOOD HAZARD"},"femaFirmDate":{"currentClass":"N/A"},"fireProtection":{"score":"A","text":"Within Municipality & < 1 Drive Miles from Fire Station"},"fireStationDriveDistanceInMiles":0.32,"fireStationType":"FULL_TIME","hazardhubFlood":{"score":"F","text":"Very High risk of damage from freshwater stream/river flooding. Check SurgeMax Score."},"ifBasementYn":null,"mineSubsidence":{"score":null,"text":""},"surgeMax":{"score":"F","text":"In SurgeMax Zone"},"wildfireDescription":"High_Dens_NoVeg","wildfireDistanceToHighAreaInFeet":null,"wildfireRisk":"VERY_LOW","wildfireRiskScore":1},"messages":null,"status":"AVAILABLE"},"osha":{"data":{"numViolations":0},"messages":null,"status":"AVAILABLE"},"proMetrixLocation":{"data":{"risks":[{"address":{"city":"MANHATTAN","state":"NY","street":"101 AVENUE OF THE AMERICAS","zip":"10013"},"buildingDescription":"101_LIMITED_PARTNERS(23S)","occupantNames":["GENERAL BUSINESS OFFICE (NOC)","DISTRICT CONUNCIL 1707 LOCAL 389"],"riskId":"31NY99055110"}]},"messages":null,"status":"AVAILABLE"},"smrCommercial":{"data":null,"messages":null,"status":"AVAILABLE"}},{"hazardHub":{"data":{"crime":{"score":"C","text":"Average crime rate"},"elevationInFeet":79.72,"femaAllFloodParams":{"floodZone":"X","zoneSubtype":"AREA OF MINIMAL FLOOD HAZARD"},"femaFirmDate":{"currentClass":"N/A"},"fireProtection":{"score":"A","text":"Within Municipality & < 1 Drive Miles from Fire Station"},"fireStationDriveDistanceInMiles":0.51,"fireStationType":"FULL_TIME","hazardhubFlood":{"score":"A","text":"Extremely Low risk of damage from stream/river flooding."},"ifBasementYn":null,"mineSubsidence":{"score":null,"text":""},"surgeMax":{"score":null,"text":"Not In SurgeMax Zone"},"wildfireDescription":"High_Dens_NoVeg","wildfireDistanceToHighAreaInFeet":null,"wildfireRisk":"VERY_LOW","wildfireRiskScore":1},"messages":null,"status":"AVAILABLE"},"osha":{"data":{"numViolations":0},"messages":null,"status":"AVAILABLE"},"proMetrixLocation":{"data":{"risks":[]},"messages":null,"status":"AVAILABLE"},"smrCommercial":{"data":null,"messages":null,"status":"AVAILABLE"}}],"vehicles":[]}
    // console.error('query', JSON.stringify(queryData))
    return (
      <div>
        <h4>Query Result:</h4>
        {
          queryData && Object.keys(queryData).map((queryName, _) => {
            const queryDatum = queryData[queryName]
            if (Array.isArray(queryDatum)) {
                return (<div>
                  <h4>{queryName}</h4>
                    {queryDatum.map((data, i) => {
                      return (<div>
                          <h5>Query: {i}</h5>
                          {
                            Object.keys(data).map((name, _) => { 
                              return <VendorData data={data[name]} name={name}/>
                            })
                          }
                        </div>)
                    })}
                </div>)
                
            }
            return (<div>
                <h4>{queryName}</h4>
                  {Object.keys(queryDatum).map((name, _) => { 
                    return <VendorData data={queryDatum[name]} name={name}/>
                  })}
              </div>)
          })
        }
      </div>
    )
  }
}

// Specifies the default values for props:
VendorDataList.defaultProps = {
  vendors: {},
  data: {}
};
