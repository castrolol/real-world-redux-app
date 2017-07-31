import React from 'react';
import Sidebar from './Sidebar'

class Layout extends React.Component {

    render() {
        return (
            <Sidebar>
                {this.props.children}
            </Sidebar>
        )
    }

}

export default Layout;