import { combineReducers } from 'redux';
import { ADD_TASK } from '../actions/action';
import { DELETE_TASK,EDIT_TASK,SORT_TASK } from '../actions/action';
var DefaultTasks = [
              {taskID:1,title:'Todo Task One',description:'This is first todo task',catogery:'New',dueDate:'1 Aug',status:true},
              {taskID:2,title:'Do the second task',description:'This is second task',catogery:'Initiated',dueDate:'1 Aug',status:false},
              {taskID:3,title:'Random Task',description:'Create a random task',catogery:'Completed',dueDate:'1 Aug',status:false},
              {taskID:4,title:'Write Script Include',description:'Write a script include for all Business rules',catogery:'Completed',dueDate:'1 Aug',status:true},
              {taskID:5,title:'Write UI Policy',description:'Write a UI Policy',catogery:'New',dueDate:'1 Aug',status:true},
              {taskID:6,title:'File IT Returns',description:'Claim the excess tax paid to the GoI',catogery:'New',dueDate:'1 Aug',status:false},
              {taskID:7,title:'Write a Business Rule',description:'Write a proper Business Rule',catogery:'Initiated',dueDate:'1 Aug',status:true},
              {taskID:8,title:'Complete the Assignment',description:'Complete the React Assignment',catogery:'Initiated',dueDate:'1 Aug',status:false},
              {taskID:9,title:'Push it to GitHUb',description:'Push it to GitHUb',catogery:'Completed',dueDate:'1 Aug',status:false},
              {taskID:10,title:'Continue with SNOW ',description:'Continue with SNOW ',catogery:'New',dueDate:'1 Aug',status:true}
              
              
            ]
 function todo(state, action) {
   switch (action.type) {
	
      case ADD_TASK:
         return {
            taskID:action.id,
            title:action.task.title,
            description:action.task.description,
            catogery:action.task.catogery,
            status:false,
            dueDate:action.task.dueDate
        }

         
       
        

      default:
      return state
   }
}

export function Tasks(state = DefaultTasks, action) {
      
   switch (action.type) {
	
      case ADD_TASK:
         return [
            ...state,
            todo(undefined, action)
         ]

      case DELETE_TASK:{
           let newArray = Object.assign([], state);
           for (var i = 0; i < newArray.length; i++)
            if (newArray[i].taskID == action.taskID) { 
                newArray.splice(i, 1);
                break;
            }
              return newArray;
         }
      case EDIT_TASK:{
        let newArray = action.allTask.map(task=>{
          if (action.editTaskID === task.taskID)
            return action.task;
          else return task;
        });
        console.log(`The new array at edit task reducer ${newArray}`)
        return newArray;
        


      }
      case SORT_TASK:{
        let curArray = action.tasks;
        console.log(`The coloumn name fetched is ${action.column}`);
        switch(action.column){
          case 'description':{
             curArray.sort(function(a,b) {return (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0);});
             return curArray;
          }
          case 'catogery':{
            curArray.sort(function(a,b) {return (a.catogery > b.catogery) ? 1 : ((b.catogery > a.catogery) ? -1 : 0);});
             console.log(`Hellloooooo ${curArray[0].catogery}`);
             return curArray;
          }
          case 'dueDate':{
            curArray.sort(function(a,b) {return (a.dueDate > b.dueDate) ? 1 : ((b.dueDate > a.dueDate) ? -1 : 0);});
            return curArray;

          }
        }
      }
      

      default:
      return state
   }
}




const todoApp = combineReducers({
   Tasks
})

export default todoApp