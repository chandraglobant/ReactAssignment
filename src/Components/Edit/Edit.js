import React, { Component } from 'react';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';
//import { browserHistory } from 'react-router'
import { withRouter } from 'react-router-dom';

//import React from 'react';
//import './NewIdea.css';
//import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
let dueDate = '';
 export class Edit extends React.Component{
    constructor(props){
        super(props);
        //this.fetchData = this.fetchData.bind(this);
        this.state = {
            Task:{  
                taskID:this.props.editTaskID,             
                title:'',
                description:'',
                dueDate:'',
                catogery:'',
                status:false
            },
            //currentUser: this.props.currentUser.userName,
            currCategory:'Category',
            
            formfilled:false,
            allTask : this.props.allTask,
            
        } 
        
        this.mandatoryCheck = 0;
        //this.changeCategory = this.changeCategory.bind(this);
    }
    
    fetchData(){
    let task = {};
    let curTask = this.state.allTask;
    let taskID =  this.state.Task.taskID;
    for(let i=0;i<curTask.length;i++){
        if (curTask[i].taskID === taskID){
            task = curTask[i];
        }
    }
    //console.log(`the current task title is ${task.title}`);
    this.setState({currCategory:task.catogery});
    return task;
    }

     updateTitle(e){
         if(e.target.value != '')
             this.mandatoryCheck++;
         
        console.log(`mandatory count check in Title ${this.mandatoryCheck}`);
        var stateCopy = Object.assign({}, this.state);
        stateCopy.Task.title = e.target.value;
        console.log(`stateCopy.Task.title ${stateCopy.Task.title}`)
        this.setState(stateCopy);
    }
    updateDescription(e){
       if(e.target.value != '')
             this.mandatoryCheck++;

       console.log(`mandatory count check in Description ${this.mandatoryCheck}`);
        var stateCopy = Object.assign({}, this.state);
        stateCopy.Task.description = e.target.value;
        console.log(`stateCopy.Task.description ${stateCopy.Task.description}`)
        this.setState(stateCopy);
    }

    updateDueDate(e){
         //var stateCopy = Object.assign({}, this.state);
        //stateCopy.Task.dueDate = e.target.value;
        var stateCopy = Object.assign({}, this.state);
        stateCopy.Task.dueDate = e.target.value;
        //console.log(`stateCopy.Task.dueDate ${stateCopy.Task.dueDate}`)
        this.setState(stateCopy);
    }


   updateTask(e){
        let title = document.getElementById("title").value;
		let description = document.getElementById("description").value;
        let dueDate = document.getElementById("dueDate").value;
        let newc = document.getElementById("new").value;
        let initiated = document.getElementById("initiated").value;
        let completed = document.getElementById("completed").value;
        let catg =  document.getElementById("category").innerHTML;
        if (catg.indexOf('react')!=  -1){
            catg= this.state.currCategory;
        }
         /*console.log(`Category selected is ${newc}`);
         console.log(`Category selected is ${initiated}`);
         console.log(`Category selected is ${completed}`);*/
         console.log(`Category selected is ${catg}`);
		if (title != null && description != null && this.state.currCategory !='Category')
           {
				let NewTask = {
					taskID:this.state.Task.taskID,
					title:title,
					description:description,
					dueDate:dueDate,
					catogery:catg,
					status:false    
                };
                //this.setState({formfilled:true});
                this.props.editTask(NewTask,this.props.allTask);
                confirmAlert({
                  title: 'Successful',                        // Title dialog 
                  message: 'The task was successfully edited',               // Message dialog 
                  confirmLabel: 'ok',                           // Text button confirm 
                })
                //this.props.history;
         }

            
		else {
			
		   document.getElementById("errorMsg").innerHTML = 'Kindly fill mandatory details';
			}
    }

    changeCategory(selectedCategory){
        
        //console.log(`Selected category ${this.mandatoryCheck}`);
        document.getElementById("category").innerHTML = selectedCategory;
        //this.setState({currCategory:selectedCategory});
        //console.log(`New State Category ${this.state.currCategory}`);
    }

    render(){
        this.fetchData=this.fetchData.bind(this);
       let newData = this.fetchData();
                return( 
            <div className="row newIdea">
                <div className="col-md-6 col-md-offset-3">
                    <form action="">                        
                            <div className="form-group">
                                <label>Title<strong>*</strong></label>
                                <input id ='title' onBlur={this.updateTitle.bind(this)} className="form-control" type="text"  defaultValue={newData.title} />
                            </div>
                            <div className="form-group">
                                <label >Description<strong>*</strong></label>
                                <textarea id = 'description' onBlur={ this.updateDescription.bind(this)}  className="form-control" rows="6" defaultValue={newData.description}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Due Date</label>
                                <input id = 'dueDate' onBlur={this.updateDueDate.bind(this)} className="form-control" type="text"  defaultValue={newData.dueDate}/>
                            </div> 
                            <div className="form-group dropdown">
                                <label id = "category" className="dropdown-toggle" data-toggle="dropdown">{this.state.currCategory} <span className="caret"></span></label>
                                <ul className="dropdown-menu">
                                    <li id = "new" value = "new" onClick={this.changeCategory.bind(this,'New')}> New </li>
                                    <li id = "initiated" value ="initiated" onClick={this.changeCategory.bind(this,'Initiated')}> Initiated </li>
                                    <li id = "completed" value = "completed" onClick={this.changeCategory.bind(this,'Completed')}> Completed </li>
                                </ul>
                            </div> 
                            <button onClick={()=> this.updateTask()} type="submit" className="btn btn-primary">Update</button> 
                            <div id = "errorMsg" ></div>            
                    </form>
                </div>
            </div>
        )
    }
}


withRouter(Edit)