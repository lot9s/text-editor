import './index.css';


import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    
    render() {
        return (
          <div className='container-fluid h-100 p-0'></div>
        );
    }
}


if (typeof window !== 'undefined') {
    ReactDOM.render(<App />, document.getElementById('app'));
}
