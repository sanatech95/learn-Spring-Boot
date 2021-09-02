import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  )
  {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

   todos : Todo[]

message: string

  //  = [
  //    new Todo(1, 'Learn to Dance', false, new Date()),
  //    new Todo(2, 'Visit India', false, new Date()),
  //    new Todo(3,  'Become an expert to Angular', false, new Date())
     
  //   //  {id: 1, description: 'Learn to Dance'},
  //   //  {id: 2, description: 'Visit India'},
  //   //  {id: 3, description: 'Become an expert to Angular'}
  //   ]

  // // todo = {
  // //   id : 1,
  // //   description : 'Learn to Dance'
  // // }

  constructor(
    private todoService:TodoDataService,
    private router: Router
  
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response =>{
        console.log(response); 
        this.todos=response;
      }
    )    
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message=`Delete of todo ${id} successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
  //  this.updateTodo(`update ${id}`);
   this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }
}
