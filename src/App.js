import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTask } from './actions/action';
import {deleteTask } from './actions/action';
import {editTask , sortTask } from './actions/action';
import { BrowserRouter as Router, Route,Link  } from 'react-router-dom';
//import {Route, IndexRoute} from 'react-router';
import HomeComponent from './Components/Home/Home';
import {AboutComponent } from './Components/About/About';
import {HeaderComponent } from './Components/Header/Header';
import {CreateTasks } from './Components/NewIdea/NewIdea';
import {Edit} from './Components/Edit/Edit';
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          currentUser:{
            userName:'User Name'
          }
        };
        this.editTaskId = '';
    };
  sortList(columnName,dispatch){
    this.props.dispatch(sortTask(this.props.visibleTasks,columnName))
  }
  setEditTaskID(taskId){
     this.editTaskId = taskId;
  }
  onTaskAdd(task,dispatch){

    this.props.dispatch(addTask(task));
  } 

  onTaskDelete(taskID){
    this.props.dispatch(deleteTask(taskID))
  }

  editTask(task,allTask,dispatch){
    this.props.dispatch(editTask(task,allTask,this.editTaskId))
  }
  render() {  
    const { dispatch, visibleTasks } = this.props
    return (
       <Router>
         
        <div>
         <HeaderComponent currentUser={this.state.currentUser} />
          <div >           
             <Route exact path = "/" component = {() => (<HomeComponent editTaskID ={this.setEditTaskID.bind(this)} onTaskDelete = {this.onTaskDelete.bind(this)} allTasks = {visibleTasks} currentUser={this.state.currentUser} sortList ={this.sortList.bind(this)}/>)}></Route>
             <Route path="/About" component={AboutComponent} ></Route>
             <Route path="/Home" component={() => (<HomeComponent editTaskID ={this.setEditTaskID.bind(this)} onTaskDelete = {this.onTaskDelete.bind(this)} allTasks = {visibleTasks} currentUser={this.state.currentUser} sortList ={this.sortList.bind(this)}/>)}></Route>
             <Route path="/createIdea" component={() => (<CreateTasks onTaskAdd = {this.onTaskAdd.bind(this)} currentUser={this.state.currentUser} />)}></Route>
             <Route path="/edit" component={() => (<Edit editTask = {this.editTask.bind(this)} allTask ={this.props.visibleTasks} editTaskID={ this.editTaskId}/>)}></Route>
          </div>  
           <footer><h3>Copyright &copy; CSB@Globant India</h3></footer>       
        </div>
      </Router>
    );
  }
}

function select(state) {
   return {
      visibleTasks: state.Tasks
   }
}

export default connect(select)(App)
