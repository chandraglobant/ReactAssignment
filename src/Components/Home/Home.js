import React from 'react';
import './Home.css';
import { Task } from './Ideas/IdeasComponent';
import { BrowserRouter as Router , Route , Link,withRouter } from 'react-router-dom';
class HomeComponent extends React.Component {
  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);
    this.state = {
       currentUser:{
            userName:'User Name'
          },
      Tasks: this.props.allTasks,
      filteredTasks:this.props.allTasks
     
    }     
   
  }
  sortTask(colm){
    let curArray = this.state.Tasks;
    switch(colm){
          case 'description':{
             curArray.sort(function(a,b) {return (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0);});
             this.setState({Tasks:curArray});
             break;
          }
          case 'catogery':{
            curArray.sort(function(a,b) {return (a.catogery > b.catogery) ? 1 : ((b.catogery > a.catogery) ? -1 : 0);});
             console.log(`Hellloooooo ${curArray[0].catogery}`);
             this.setState({Tasks:curArray});
             break;
          }
          case 'dueDate':{
            curArray.sort(function(a,b) {return (a.dueDate > b.dueDate) ? 1 : ((b.dueDate > a.dueDate) ? -1 : 0);});
           this.setState({Tasks:curArray});

          }
        
   //this.props.sortList(colm);
  }
  }
  addTask() {
    //debugger
    this.props.history.push('/createIdea')
  } 
  editTask(taskId) {
    this.props.editTaskID(taskId);
    //debugger    
    this.props.history.push('/edit')
  } 
  deleteTask(taskID){
    this.props.onTaskDelete(taskID);
  }
  filter(filterStr){
    let newTasksArr = [];
    for(let i = 0; i < this.state.Tasks.length;i++){
      if(this.state.Tasks[i].status == filterStr){
          newTasksArr.push(this.state.Tasks[i]);
      }
    }
    this.setState({
      filteredTasks:newTasksArr
    })
  }
  filterAll(){
    let Tasks = this.state.Tasks;
    this.setState({filteredTasks: Tasks})
  }
  changeStatus(taskID){
     let newTasksArr = [];
    for(let i = 0; i < this.state.Tasks.length;i++){
      if(this.state.Tasks[i].taskID == taskID){
         this.state.Tasks[i].status = !this.state.Tasks[i].status;
         break;
      }
    }
     let Tasks = this.state.Tasks;
    this.setState({filteredTasks: Tasks})
  }
  render() {
    return (
      
        <div className="taskList">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th >Task ID</th>
                <th>Title</th>
                <th onClick = {this.sortTask.bind(this,'description')}>Description</th>
                <th onClick = {this.sortTask.bind(this,'catogery')}>Category</th>
                <th onClick = {this.sortTask.bind(this,'dueDate')}>Due Date</th>
                <th className="dropdown">
                   <div className="dropdown-toggle" type="button" data-toggle="dropdown">Status
                    <span className="caret"></span></div>
                    <ul className="dropdown-menu">
                      <li onClick={this.filterAll.bind(this)}><a >All</a></li>
                      <li onClick={this.filter.bind(this,true)}><a >Done</a></li>
                      <li onClick={this.filter.bind(this,false)}><a >Pending</a></li>                   
                    </ul>
                </th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="tableBody">
               {this.state.filteredTasks.map((idea,i) =><Task editTask = {this.editTask.bind(this)} changeStatus = {this.changeStatus.bind(this)} deleteTask = {this.deleteTask.bind(this)} currentUser = {this.state.currentUser} thisIdea = {idea}/>)}
            </tbody>
          </table>
             <td><input type="button" value="Add Task" onClick={this.addTask}   className="button"/></td>
           
        </div>
     
    );
  }
}

export default withRouter(HomeComponent)