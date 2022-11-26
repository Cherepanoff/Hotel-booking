import React from 'react'
import { Breadcrumb, Layout, Menu, Button, Row} from 'antd';
import {observer} from 'mobx-react-lite';

const { Header, Content, Footer } = Layout;


const Navbar = observer(() => {
    return ( 
        <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{justifyContent:'space-between'}}
          >
            <Row>
            <Menu.Item key="1">
              <Button type="text" style={{color:'white', fontSize: '25px'}}>Booking-Hotel</Button>
            </Menu.Item>
            <Menu.Item key="2">
              <Button type="text" style={{color:'white', fontSize : '20px'}}>Главная</Button>
            </Menu.Item>
            <Menu.Item key="3">
              <Button type="text" style={{color:'white', fontSize : '20px'}}>Отели</Button>
            </Menu.Item>
            <Menu.Item key="4">
              <Button type="text" style={{color:'white', fontSize : '20px'}}>Номера</Button>
            </Menu.Item>
            <Menu.Item key="5">
              <Button type="text" style={{color:'white', fontSize : '20px'}}>Контакты</Button>
            </Menu.Item>
            </Row>
            <Row container style={{alignItems: 'center', marginLeft: 'auto'}}>
            <Button ghost style={{marginRight: '10px'}}>Вход</Button>
            <Button ghost>Регистрация</Button>
            </Row>
          </Menu>
        </Header>
      </Layout>
     );
})
 
export default Navbar;