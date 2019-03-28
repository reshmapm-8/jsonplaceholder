
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

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => { 
                      this.setState({ postData : response.data});
            })
    }
   
   reRender=() =>{
      axios.get('https://jsonplaceholder.typicode.com/posts?userId=4')
        .then(response => { 
            this.setState({ postData : response.data });
        })
            
    }  
    
deletePost=() =>{

    axios.get('https://jsonplaceholder.typicode.com/posts?userId=4')
        .then(response => { 
            this.setState({ postData : response.data });
        })
       // const result= postData.filter()

}     
    
 render() {
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