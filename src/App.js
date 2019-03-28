
import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


import Posts from './postsfirst.js';
import Comments from './comments.js';
import CreateComponent from './CreateComponent.js';
//import Posts from './test1.js';

class App extends Component {
  render() {
    return (
    	<Router>
		    <div>
		    <Link to = "/newpost"> My Story </Link>
		    	<Route path = "/" exact component = {Posts} />
		        <Route path = "/comments/:id" exact component = {Comments} />
		        <Route path = "/newpost" exact component = {CreateComponent} />
		    </div>
		</Router>
    );
  }
}

export default App;
