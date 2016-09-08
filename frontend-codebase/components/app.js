import React from 'react';
import Navbar from './Navbar';

class App extends React.Component {

    render() {
        let children = null;
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth // propagates the auth instance from route to all children
            });
        }

        return (
          <div>
            <Navbar history={this.props.history} auth={this.props.route.auth} />
            {children}
          </div>
        );
    }
}

export default App;