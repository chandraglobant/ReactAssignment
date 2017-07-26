//import axios from 'axios';
import firebase from '../firebase';
export const ADD_TASK = 'ADD_TODO';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SORT_TASK = 'SORT_TASK';
let nextTodoId = 11;

export function addTask(task) {
    

   return dispatch => {
       
            dispatch({
                type: ADD_TASK,
                id: nextTodoId++,
                task
            });
     }

}


     export function deleteTask(taskID){
          return dispatch => {
       
            dispatch({
                type: DELETE_TASK,
                id:taskID,
                taskID
            });
          }
     }
    export function sortTask(allTask,columnName){
        return dispatch => {
            dispatch({
                type: SORT_TASK,
                column: columnName,
                tasks: allTask
            });
        }
    }
     export function editTask(task,allTask,editTaskID){
          return dispatch => {
       
            dispatch({
                type: EDIT_TASK,
                
                task,
                allTask,
                editTaskID
              });
          }
     }