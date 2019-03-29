import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import './style.css';

//For displaying each post

const BasicComponent=(props)=>{
	return(
		<div className="postCard">
			<Link to= {'/comments/'+props.details.id}>
				<div >
					<h3 className="postTitle">{props.details.title}</h3>
					<p>{props.details.body}</p>
				</div>
			    </Link>
			    <button onClick={()=>props.delete(props.details.id)}>Delete</button>
			    <button title={props.details.title} body={props.details.body}>
			    	<Link to ={'/update/'+props.details.id}>
			    	Update
			    	</Link>
			    </button>
			</div>
		)
}

export default BasicComponent;