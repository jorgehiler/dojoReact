import React, { Component } from 'react'

import Cards from '../../components/Cards'
import axios from 'axios';


class Tasks extends Component {

    state = {
        taskData: []
    }

    componentDidMount() {
       // console.log('[Component Did mount]')
        axios.get("http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks", 
        {
            headers: { "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzODExOTksImV4cCI6MTU4Mjk4NTk5OX0.WgdUPC_QgSGJCDJx1WaLZ6ow_uEq8AMpz5JGXqE4tIk"}
        })
        .then(res => {
            this.setState({
                taskData: res.data.results
            });
            console.log("DATOOOS: "+res.data);
        })
        .catch(err => {
            console.log("ERROR");
            console.log(err)
        })
    
    }

    render() {
        const cardsView = (this.state.taskData.length ?    
            <Cards data={this.state.taskData}/>
            :
            null);
       return (

            <div>
                <h1>TASK</h1>
              {cardsView}
            </div>
        )
    }
}

export default Tasks;