import * as actions from '../actions/action'
import {Tasks} from './reducers'

describe('Test the reducer',()=>{
  let DefaultTasks = [
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
  let nextTodoId = 11;
  let state = [];
  
  let addedTask = {taskID:11,title:'What about you ',description:'I am good Thank You ',catogery:'Initiated',dueDate:'1 Aug',status:false};
  let actionAdd = actions.addTask(addedTask);
  let editedTask = {taskID:5,title:'Write UI PolicyforMe',description:'Write a UI PolicyforME',catogery:'Initiated',dueDate:'10 Aug',status:true};
    it('should handle addToDo',()=>{
      expect(Tasks(state=DefaultTasks,{
	            type: actions.ADD_TASK,
                id: nextTodoId++,
                task:addedTask
				})).toEqual([{taskID:1,title:'Todo Task One',description:'This is first todo task',catogery:'New',dueDate:'1 Aug',status:true},
              {taskID:2,title:'Do the second task',description:'This is second task',catogery:'Initiated',dueDate:'1 Aug',status:false},
              {taskID:3,title:'Random Task',description:'Create a random task',catogery:'Completed',dueDate:'1 Aug',status:false},
              {taskID:4,title:'Write Script Include',description:'Write a script include for all Business rules',catogery:'Completed',dueDate:'1 Aug',status:true},
              {taskID:5,title:'Write UI Policy',description:'Write a UI Policy',catogery:'New',dueDate:'1 Aug',status:true},
              {taskID:6,title:'File IT Returns',description:'Claim the excess tax paid to the GoI',catogery:'New',dueDate:'1 Aug',status:false},
              {taskID:7,title:'Write a Business Rule',description:'Write a proper Business Rule',catogery:'Initiated',dueDate:'1 Aug',status:true},
              {taskID:8,title:'Complete the Assignment',description:'Complete the React Assignment',catogery:'Initiated',dueDate:'1 Aug',status:false},
              {taskID:9,title:'Push it to GitHUb',description:'Push it to GitHUb',catogery:'Completed',dueDate:'1 Aug',status:false},
              {taskID:10,title:'Continue with SNOW ',description:'Continue with SNOW ',catogery:'New',dueDate:'1 Aug',status:true},
              {taskID:11,title:'What about you ',description:'I am good Thank You ',catogery:'Initiated',dueDate:'1 Aug',status:false}
              ])
  
  
    })

    it('should handle delete',()=>{
      expect(Tasks(state=DefaultTasks,{type: actions.DELETE_TASK,id:5,taskID:5})).
	    toEqual([
	          {taskID:1,title:'Todo Task One',description:'This is first todo task',catogery:'New',dueDate:'1 Aug',status:true},
              {taskID:2,title:'Do the second task',description:'This is second task',catogery:'Initiated',dueDate:'1 Aug',status:false},
              {taskID:3,title:'Random Task',description:'Create a random task',catogery:'Completed',dueDate:'1 Aug',status:false},
              {taskID:4,title:'Write Script Include',description:'Write a script include for all Business rules',catogery:'Completed',dueDate:'1 Aug',status:true},
              {taskID:6,title:'File IT Returns',description:'Claim the excess tax paid to the GoI',catogery:'New',dueDate:'1 Aug',status:false},
              {taskID:7,title:'Write a Business Rule',description:'Write a proper Business Rule',catogery:'Initiated',dueDate:'1 Aug',status:true},
              {taskID:8,title:'Complete the Assignment',description:'Complete the React Assignment',catogery:'Initiated',dueDate:'1 Aug',status:false},
              {taskID:9,title:'Push it to GitHUb',description:'Push it to GitHUb',catogery:'Completed',dueDate:'1 Aug',status:false},
              {taskID:10,title:'Continue with SNOW ',description:'Continue with SNOW ',catogery:'New',dueDate:'1 Aug',status:true}
		])
  
  
    })

    it('should handle edit',()=>{
      expect(Tasks(state=DefaultTasks,{type: actions.EDIT_TASK,task:editedTask,allTask:DefaultTasks,editTaskID:5})).
	    toEqual([
	          {taskID:1,title:'Todo Task One',description:'This is first todo task',catogery:'New',dueDate:'1 Aug',status:true},
              {taskID:2,title:'Do the second task',description:'This is second task',catogery:'Initiated',dueDate:'1 Aug',status:false},
              {taskID:3,title:'Random Task',description:'Create a random task',catogery:'Completed',dueDate:'1 Aug',status:false},
              {taskID:4,title:'Write Script Include',description:'Write a script include for all Business rules',catogery:'Completed',dueDate:'1 Aug',status:true},
			  {taskID:5,title:'Write UI PolicyforMe',description:'Write a UI PolicyforME',catogery:'Initiated',dueDate:'10 Aug',status:true},
              {taskID:6,title:'File IT Returns',description:'Claim the excess tax paid to the GoI',catogery:'New',dueDate:'1 Aug',status:false},
              {taskID:7,title:'Write a Business Rule',description:'Write a proper Business Rule',catogery:'Initiated',dueDate:'1 Aug',status:true},
              {taskID:8,title:'Complete the Assignment',description:'Complete the React Assignment',catogery:'Initiated',dueDate:'1 Aug',status:false},
              {taskID:9,title:'Push it to GitHUb',description:'Push it to GitHUb',catogery:'Completed',dueDate:'1 Aug',status:false},
              {taskID:10,title:'Continue with SNOW ',description:'Continue with SNOW ',catogery:'New',dueDate:'1 Aug',status:true}
		])
  
  
    })


})