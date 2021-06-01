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
          <div className='container-fluid h-100 p-0'>
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
              <div className='container-fluid'>
                <a className='navbar-brand' href='#'>999</a>
          
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#menuText' aria-controls='menuText' aria-expanded='false' aria-label='Toggle menu.'>
                  <span className='navbar-toggler-icon'></span>
                </button>
              </div>
          
              <div className='collapse navbar-collapse me-auto' id='menuText'>
                <ul className='navbar-nav'>
                  <li className='nav-item mx-2'>
                    <a className="nav-link" href="#">Save</a>
                  </li>
        
                  <li className='nav-item mx-2'>
                    <a className="nav-link" href="#">Load</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        );
    }
}


if (typeof window !== 'undefined') {
    ReactDOM.render(<App />, document.getElementById('app'));
}
