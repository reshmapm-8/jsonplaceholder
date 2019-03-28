import React, { Component } from 'react';
import axios from 'axios';


import './style.css';
class CreateComponent extends Component {
    constructor(props) {
            super(props);
            this.state = {
            };
    }
    
    createpost = () => {
        var postTitle = this.refs.title.value;
        var postBody = this.refs.body.value;
        

        axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: postTitle,
                body: postBody,
                userId: '4'
            })
            .then(function(response) {
               
                alert("New post uploaded successfully");
                if (response.data.message) { 
                    alert(response.data.message); 
                }
                if (response.data.errorMsg) { 
                    alert(response.data.errorMsg); 
                }

            })
            .catch(function(error) {
                console.log(error);
            });

    }
       

        

render() {
        return (
         <div id="create-post">
         <h1>My Story</h1>
         	<table id="post-table">
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
         			<td><button onClick={this.createpost} id="buttonid">Upload</button></td>
         		</tr>
            </tbody>
         	</table>
      </div>
    );
}
}

export default CreateComponent;