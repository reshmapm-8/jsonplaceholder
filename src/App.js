
import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


import Posts from './postsfirst.js';
import Comments from './comments.js';
import CreateComponent from './CreateComponent.js';
import UpdatePost from './update.js';


class App extends Component {
  render() {
    return (
    	<Router>
		    <div>
		    <Link to = "/newpost"> My Story </Link>					{/* Link to creating new post */}
		    	<Route path = "/" exact component = {Posts} />		{/* Routes to home page */}
		        <Route path = "/comments/:id" exact component = {Comments} />	{/* Routes to comment view page */}
		        <Route path = "/newpost" exact component = {CreateComponent} />		{/* Routes to creating new post */}
		         <Route path = "/update/:id" exact component = {UpdatePost} />		{/* Routes to update page */}
		    </div>
		</Router>
    );
  }
}

export default App;
