import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link, BrowserHistory } from 'react-router-dom'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header} from 'semantic-ui-react'
// import AnyComponent from './components/filename.jsx'
import ProgressBoard from './components/ProgressBoard.jsx'
import Metrics from './components/Metrics.jsx'
import ApplicationList from './components/ApplicationList.jsx'



class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		menuVisible: false
  	}

  	this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(){
  	this.setState({
  		menuVisible: !this.state.menuVisible
  	})
  }

  render () {
  	return(
  		<Router>
  		<div className="app-container">
  		<Menu secondary attached="top">
  			<Menu.Item onClick={this.toggleMenu}>
  			<Icon name="sidebar" /> Menu
  			</Menu.Item>
  		</Menu>
  		 <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={this.state.menuVisible} icon='labeled' vertical inverted>
            <Menu.Item name='home' as={Link} to='/'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='metrics' as={Link} to='/metrics'>
              <Icon name='bar chart' />
              Metrics
            </Menu.Item>
            <Menu.Item name='apps' as={Link} to='/myapps'>
              <Icon name='book' />
              My Apps
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
          	<Route  exact path='/' component={ProgressBoard}/>
          	<Route  path='/metrics' component={Metrics}/>
          	<Route  path='/myapps' component={ApplicationList}/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
  		</div>
  		</Router>
  	)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


