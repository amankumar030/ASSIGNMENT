import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  // todoList contains all todos
  todoList: Todo[];
  check:boolean;
  maxid:number;
  len:number;
  

  constructor() { 
  
    this.todoList=[]
 

  
   
    
    
  }

  ngOnInit() {
  }
   

  // write logic to the onAddTodo method is to add a new todo to list
  // get maximum id in list and assign maximum id plus one while adding a todo
  onAddTodo(todoText: any) {
    this.maxid=0;
    for(let i=0;i<this.todoList.length;i++)
    {
        if(this.todoList[i].todoId>this.maxid)
        {
          this.maxid=this.todoList[i].todoId;
        }
    }
    let temp=new Todo();
    temp.isCompleted=false;
    temp.text=todoText;
    temp.todoId=this.maxid+1;
    this.todoList.push(temp);
    
 
    
  }

  // write logic to the onClearTodos method to delete the all todos in the todoList
  onClearTodos() {
    this.len=this.todoList.length;
    this.todoList.splice(0,this.len)
 
  }

  // write logic to method onCompletingTask, to mark todo as as completed or not
  onCompletingTodo(todo: Todo) {
    
      if(todo.isCompleted==true)
      {
           todo.isCompleted=false;
          
      }
      else{
        todo.isCompleted=true;
       
      }
     
  }

  // write logic to method onDeletingTask, to delete the todo
  onDeletingTodo(todoId) {
    for(let i=0;i<this.todoList.length;i++)
    {
      if(this.todoList[i].todoId===todoId)
      {
        this.todoList.splice(i,1);
      }
    }
  }
}
