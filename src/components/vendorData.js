class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      return <h1>Hello, {JSON.stringify(this.props.hazardHub, null, 2}</h1>;
    }
  }