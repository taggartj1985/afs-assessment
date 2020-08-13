import { Component, OnInit } from '@angular/core';

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import { listTodos } from "../../../graphql/queries"
import * as mutations from '../../../graphql/mutations';
import * as subscriptions from '../../../graphql/subscriptions';


// const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
// console.log(allTodos);

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})


export class ContractorsComponent implements OnInit {
  todo = {};

  createTodo(name, description) {
    this.todo = {
      name: name,
      description: description,
    };
    API.graphql(graphqlOperation(this.createTodo, { input: this.todo }));
    API.graphql(graphqlOperation(queries.listTodos));
  }
  ngOnInit(): void {
    console.log(listTodos);
  }

}

// import { Component, OnInit } from '@angular/core';

// import { API, graphqlOperation } from 'aws-amplify';
// import * as queries from '../../../graphql/queries';
// import * as mutations from '../../../graphql/mutations';
// import * as subscriptions from '../../../graphql/subscriptions';

// interface Todo {
//   name: string;
//   description: string;
// }

// @Component({
//   selector: 'app-contractors',
//   templateUrl: './contractors.component.html',
//   styleUrls: ['./contractors.component.scss']
// })

// export class ContractorsComponent implements OnInit {
//   listData: Todo[];

//   constructor() {}

//   async addTodo() {
//     const todoDetails = {
//       name: 'Job',
//       description: 'Please work',
//     };

//     const newTodo = await API.graphql(
//       graphqlOperation(mutations.createTodo, { input: todoDetails })
//     );

//     this.populateTodos;
//   }

//   async populateTodos() {
//     const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
//     this.listData =
//       allTodos.data.listTodos.items.map(
//         (todo) =>
//           ({
//             id: todo?.id,
//             name: todo?.name,
//             description: todo?.description,
//           } as Todo)
//       ) || [];
//   }

//   ngOnInit(): void {
//     console.log(this.populateTodos);
    
//     this.populateTodos();
//   }

// }

