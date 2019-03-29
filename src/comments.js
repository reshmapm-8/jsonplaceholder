import React, {Component} from 'react';
import axios from 'axios';

class Comments extends Component{

	constructor(props) {
        super(props);

        this.state = {
        	commentsData: []
        };
    }
	
//To get postid of a particular post

    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/comments?postId='+this.props.match.params.id)
            .then(response => { 
                      this.setState({ commentsData : response.data});
            })
    }

//Display all comments related to the selected post

    render(){
    	return(
    		<div>
    			<h1>Comments</h1>
    			{this.state.commentsData.map(fetchedComments=>
    				<div>
    					<h4>{fetchedComments.email}</h4>
    					<h4>{fetchedComments.name}</h4>
    					<p>{fetchedComments.body}</p>
    				</div>
				)}
    		</div>
    	)
    }
}

export default Comments;