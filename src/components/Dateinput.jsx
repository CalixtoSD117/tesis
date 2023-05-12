import React from 'react';
class Dateinput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fecha: ''
      };
    }
  
    componentDidMount() {
      const today = new Date();
      const formattedDate = today.toISOString().substring(0, 10); // Formato YYYY-MM-DD
      this.setState({ fecha: formattedDate });
    }
  
    render() {
      return (
        <input className="h-7 text-sm rounded-lg ring-[0.5px] ring-gray-500 outline-none pl-3 w-52" disabled type="text" value={this.state.fecha} readOnly />
      );
    }
  }
  
  export default Dateinput;