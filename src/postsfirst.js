
import React, {Component} from 'react';
import axios from 'axios';

import BasicComponent from './basiccomponent.js';
import './style.css';

class Posts extends Component{
    constructor(props) {
        super(props);

        this.state = {
            postData: []
        };
    }


// To show all post on page loading 
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => { 
                this.setState({ postData : response.data});
            }
        )
    }


// To re-render posts on clicking MyPost button
   reRender=() =>{
      axios.get('https://jsonplaceholder.typicode.com/posts?userId=4')
        .then(response => { 
            this.setState({ postData : response.data });
        })
            
    }  


// To delete a specific post. (Not completed)
    // deletePost=(id) =>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts?userId=4')
    //         .then(response => { 
    //             this.setState({ postData : response.data });

    //         })
    //     var array = this.state.postData; 
    // }
    

//Function to display Mypost button and each posts  
render(){
    return (
        <div>
            <button onClick={this.reRender} id= "button">My Posts </button>
            {this.state.postData.map(fetchData=>
                <BasicComponent details={fetchData} delete={this.deletePost}/>
            )}
        </div>
    )
  }
}

export default Posts;