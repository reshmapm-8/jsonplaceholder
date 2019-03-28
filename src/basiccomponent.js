import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import './style.css';

const BasicComponent=(props)=>{
		return(
			
			
				<div className="postCard">
				<Link to= {'/comments/'+props.details.id}>
			              <div >
			                <h3 className="postTitle">{props.details.title}</h3>
			                <p>{props.details.body}</p>
			              </div>
			    </Link>
			    <button onClick={props.delete}>Delete</button>
			    </div>
		    
		)
	}

export default BasicComponent;