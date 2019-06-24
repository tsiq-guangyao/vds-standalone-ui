import React from 'react';
import Deref from "json-schema-deref";
import SchemaTable from 'react-schema-viewer/lib/SchemaTable';

export default class VendorSchema extends React.Component<VendorSchemaProps, VendorSchemaStates> {
  constructor(props: any) {
      super(props)
      this.state = {
        showSchema: false,
        schema: {}
      }
      this.toggleSchema = this.toggleSchema.bind(this)
  }

  componentDidMount() {
    this.setState({schema: false})
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
          <h4 className='col-sm-5'>{this.props.schema && this.props.schema.title}</h4>
          <h4 className='col-sm-4' >
            <a onClick={this.toggleSchema}>{this.state.showSchema ? "Hide Schema" : "Show Schema" }</a>
          </h4>
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
type VendorSchemaProps = {
  schema: {title: string}
}
type VendorSchemaStates = {
  showSchema: Boolean,
  schema: any
}