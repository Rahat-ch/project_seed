import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'
import InnerLayout from './InnerLayout';
import Seedling from "../Components/Seedling"
import { Link } from 'react-router-dom';


const Side= () => (
  <Sidebar.Pushable>
    <Sidebar as={Menu} animation='push' icon='labeled'  vertical visible width='thin'>
    <Menu.Item as='a'>
    <br></br>
    <br></br>
        <Icon name='users' />
        START A TEAM
      </Menu.Item>
      <Menu.Item as='a'>
      <br></br>
      <br></br>
        <Icon name='handshake outline' />
        
        JOIN A TEAM
      </Menu.Item>
      <Menu.Item as='a'>
      <br></br>
      <br></br>
        <Icon name='lightbulb outline' />
       <Link to="/ideas">PROJECT IDEAS</Link>
      </Menu.Item>
      
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h1'></Header>
      <InnerLayout />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default Side