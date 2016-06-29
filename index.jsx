import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render() {
    return (
      <div style={{margin: 10}}>
        <DatePicker />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
