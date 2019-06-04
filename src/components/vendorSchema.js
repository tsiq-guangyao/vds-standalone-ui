import React from 'react';
import Deref from "json-schema-deref";
import SchemaTable from 'react-schema-viewer/lib/SchemaTable';

export default class VendorSchema extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          showSchema: true
      }
      this.toggleSchema = this.toggleSchema.bind(this)
  }

  componentDidMount() {
    Deref(this.props.schema, (_, schema) => {
      this.setState({schema: schema})
    })
  }

  toggleSchema() {
    this.setState({showSchema: !this.state.showSchema})
  }

  render() {
    return (
      <div className='row border border-secondary'>
        <div className="row">
          <h4 className='col-sm-5'>{this.props.data.name}</h4>
          <h4 className='col-sm-4' >
            <a onClick={this.toggleSchema}>{this.state.showSchema ? "Hide Schema" : "Show Schema" }</a>
          </h4>
          <h4 className='col-sm-3'>{this.props.data.queryType}</h4>
        </div>
        {this.state.showSchema ? 
            (<div className="row col-sm-12"> {this.state.schema && <SchemaTable schema={this.state.schema}></SchemaTable>} </div>): 
            null 
        }
      </div>
    )
  }

}

// Specifies the default values for props:
VendorSchema.defaultProps = {
  name: ""
};
