import React, {Component} from 'react';
import axios from 'axios';


class UpdatePost extends Component{
	constructor(props){
		super(props);
		this.state={
			update:[]
		};
	}

//Display current title and body values to form fields

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
            .then(response => { 
                      this.setState({ update : response.data});
                      this.refs.title.value=this.state.update.title;
                      this.refs.body.value=this.state.update.body;
            })
    }

// Set new values to title and body fields for specific post and 
//alert a success message if updated successfully

    updatePost = () =>{
        axios.put("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id,{
			title: this.refs.title.value,
            body: this.refs.body.value,
            userId: 4
        })
        .then(response => {
			alert("Post updated successfully");
			if (response.data.message) { 
				alert(response.data.message); 
			}
			if (response.data.errorMsg) { 
				alert(response.data.errorMsg); 
			}

            }
        )
        .catch(function(error) {
			console.log(error);
        })
    }

// To display form fields

	render(){
		return(
			<div id="create-post">
         		<h1>Update Post</h1>
         		<table>
					<tbody>
         				<tr>
         					<td className="label">Title</td>
         					<td><input type="text" ref="title" id="titleid" /></td>
         				</tr>
         				<tr>
         					<td className="label">Body</td>
         					<td><textarea ref="body" rows="20" cols="40"></textarea></td>
         				</tr>
         				<tr>      			
         					<td><button onClick={this.updatePost} ref="button">Update</button></td>
         				</tr>
            		</tbody>
         		</table>
         	</div>
		)
	}
}

export default UpdatePost;