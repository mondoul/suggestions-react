import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class App extends Component {

    render() {
        const { auth } = this.props.route;
        let children = null;
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: auth // propagates the auth instance from route to all children
            });
        }

        return (
          <div>
            <Navbar auth={auth}/>
            {this.props.children}
          </div>
        );
    }
}

export default App;