import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

class Navigation extends Component {
render() {
    return (<div id="sidebar">
    <ul>
        <li><Link className="navigation" to='/'>The Basics</Link></li>
        <li><Link className="navigation" to='/types'>Types of Climbing</Link></li>
        <li><Link className="navigation" to='/safety'>Safety</Link></li>
        <li><Link className="navigation" to='/equipment'>Equipment</Link></li>
        <li><Link className="navigation" to='/where'>Where to Climb</Link></li>
    </ul>
</div>
    )
   
 }
}
export default Navigation;