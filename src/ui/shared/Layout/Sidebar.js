import React from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'


class AppSidebar extends React.Component {

  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' defaultVisible visible vertical inverted>
          <Menu.Item name='home'>
            <Icon name='home' />
            Home
            </Menu.Item>
          <Menu.Item name='gamepad'>
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