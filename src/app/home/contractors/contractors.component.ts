import { Component, OnInit } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import * as subscriptions from '../../../graphql/subscriptions';


@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})

export class ContractorsComponent implements OnInit {
  todoList;

  constructor() { }

    public async onCreate(){
      const todo = { name: "New Todo", description: "Hello"};
      await API.graphql(graphqlOperation(mutations.createTodo, {input: todo}))
      console.log("working" + todo.name);
      
    }

  async ngOnInit() {
    const allTodos = await API.graphql(graphqlOperation(queries.listTodos))
    console.log('Listing todo`s ');
    console.log(allTodos);
    this.todoList = allTodos;
  };
  
} 