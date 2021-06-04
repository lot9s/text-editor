import './index.css';


import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          canAccessFS: 'chooseFileSystemEntries' in window || 'showOpenFilePicker' in window
        };
    }

    onLoad() {
      /* TODO: */  
    }

    onSave() {
      /* TODO: */
    }
    
    render() {
      let ioMenu = null;
      let ioMenuItems = null;
      if (this.state.canAccessFS) {
        ioMenu = (
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#menuText' aria-controls='menuText' aria-expanded='false' aria-label='Toggle menu.'>
            <span className='navbar-toggler-icon'></span>
          </button>
        );

        ioMenuItems = (
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
        );
      }

      return (
        <div className='container-fluid h-100 p-0'>
          <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            <div className='container-fluid'>
              <a className='navbar-brand' href='#'>999</a>
        
              {ioMenu}
            </div>

            {ioMenuItems}
          </nav>
        
          <textarea id='editor' className='h-100 w-100'></textarea>
        </div>
      );
    }
}


if (typeof window !== 'undefined') {
    ReactDOM.render(<App />, document.getElementById('app'));
}
