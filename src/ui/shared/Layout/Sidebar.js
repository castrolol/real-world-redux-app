import React from 'react';
import { Link } from 'react-router-dom'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

class AppSidebar extends React.Component {

  state = {
    activeItem: 'home'
  }
  
  onMenuItemClick = (_, p) => { 
    this.setState({ activeItem: p.name })
  }

  render() {

    const { activeItem } = this.state

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' defaultVisible visible vertical inverted>
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.onMenuItemClick}>
            <Icon name='home' />
            Home
            </Menu.Item>
          <Menu.Item as={Link} to='/users' name='users' active={activeItem === 'users'} onClick={this.onMenuItemClick}>
            <Icon name='gamepad' />
            Usuarios
          </Menu.Item>
          <Menu.Item name='camera'>
            <Icon name='camera' />
            Channels
            </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            {this.props.children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default AppSidebar;