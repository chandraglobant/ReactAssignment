import React from 'react';
import './NewIdea.css';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';
//import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
let dueDate = '';
export class CreateTasks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Task:{                
                Title:'',
                Description:'',
                createdBy:'',
                createdDaate:'',
                likes:[],
                comments:[],
                
            },
            currentUser: this.props.currentUser.userName,
            currCategory:'Category',
            dueDate:''
             
        }
        //this.changeCategory = this.changeCategory.bind(this);
        this.mandatoryCheck = 0;
    }

     updateTitle(e){
         if(e.target.value != '')
             this.mandatoryCheck++;
       
        var stateCopy = Object.assign({}, this.state);
        stateCopy.Task.title = e.target.value;
        
        this.setState(stateCopy);
    }
    updateDescription(e){
        if(e.target.value != '')
             this.mandatoryCheck++;
       
        var stateCopy = Object.assign({}, this.state);
        stateCopy.Task.description = e.target.value;
        this.setState(stateCopy);
    }

    updateDueDate(e){
         //var stateCopy = Object.assign({}, this.state);
        //stateCopy.Task.dueDate = e.target.value;
        this.setState({dueDate:e.target.value});
        dueDate = e.target.value;
    }


    createTask(){
        
       // let newID = this.state.id+1;
        //this.setState({id:newID})
         if(this.mandatoryCheck == 3)
            {
        let NewTask = {
            taskID:this.state.Task.taskID,
            title:this.state.Task.title,
            description:this.state.Task.description,
            dueDate:dueDate,
            catogery:this.state.currCategory    
        }
        this.props.onTaskAdd(NewTask);
        confirmAlert({
                  title: 'Successful',                        // Title dialog 
                  message: 'The task was successfully created',               // Message dialog 
                  confirmLabel: 'ok',                           // Text button confirm 
                })
            }
         else {
        
       document.getElementById("errorMsg").innerHTML = 'Kindly fill mandatory details';
        }
   
    }

    changeCategory(selectedCategory){
        if(selectedCategory != 'Category')
             this.mandatoryCheck++;
        console.log(`mandatory count check in category ${this.mandatoryCheck}`);

        this.setState({currCategory:selectedCategory})
    }

    render(){
        return(
            <div className="row newIdea">
                <div className="col-md-6 col-md-offset-3">
                    <form action="">                        
                            <div className="form-group">
                                <label>Title*</label>
                                <input onBlur={this.updateTitle.bind(this)} className="form-control" type="text" placeholder="Title of your task" />
                            </div>
                            <div className="form-group">
                                <label >Description*</label>
                                <textarea onBlur={ this.updateDescription.bind(this)} placeholder="description" className="form-control" rows="6"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Due Date</label>
                                <input onBlur={this.updateDueDate.bind(this)} className="form-control" type="text" placeholder="Due Date of your task" />
                            </div> 
                            <div className="form-group dropdown">
                                <label className="dropdown-toggle" data-toggle="dropdown">{this.state.currCategory}* <span className="caret"></span></label>
                                <ul className="dropdown-menu">
                                <li onClick={this.changeCategory.bind(this, 'New')}>New</li>
                                <li onClick={this.changeCategory.bind(this, 'Initiated')}>Initiated</li>
                                <li onClick={this.changeCategory.bind(this, 'Completed')}>Completed</li>
                                </ul>
                            </div>  
                            <button onClick={()=> this.createTask()} type="submit" className="btn btn-primary">Create</button> 
                            <div id = "errorMsg" ></div>                     
                    </form>
                </div>
            </div>
        )
    }
}
