import React from 'react';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import './Idea.css';
export class Task extends React.Component{
    constructor(props){
        super(props);
        
        
    }
    

    Delete(e){
        confirmAlert({
      title: 'Confirm to delete',                        // Title dialog 
      message: 'Are you sure you want to delete this task?',               // Message dialog 
             
      confirmLabel: 'Confirm',                           // Text button confirm 
      cancelLabel: 'Cancel',                             // Text button cancel 
      onConfirm: () => this.props.deleteTask(this.props.thisIdea.taskID),    // Action after Confirm 
            // Action after Cancel 
    })
        //this.props.deleteTask(this.props.thisIdea.taskID);
    }
    changeStatus(){
        this.props.changeStatus(this.props.thisIdea.taskID);
    }
    EditTask(){
        
        this.props.editTask(this.props.thisIdea.taskID);
    }
    render(){
       
        return(
            
            <tr>
                <td>{this.props.thisIdea.taskID}</td>
                <td>{this.props.thisIdea.title}</td>
                <td>{this.props.thisIdea.description}</td>
                <td>{this.props.thisIdea.catogery}</td>
                <td>{this.props.thisIdea.dueDate}</td>
                <td value="Change" onClick={this.changeStatus.bind(this)}>{(this.props.thisIdea.status) ? 'Done' : 'Pending'}</td>
                <td><input type="button" value="Edit"  onClick={this.EditTask.bind(this)} className="button"/></td>
                <td><input type="button" value="Delete" onClick={this.Delete.bind(this)} className="button"/></td>
            </tr>
        )
    }
}