// import { Component, OnInit } from '@angular/core';
// import data from '../../../assets/mock_data_(3).json';

// @Component({
//   selector: 'app-clients',
//   templateUrl: './clients.component.html',
//   styleUrls: ['./clients.component.scss']
// })
// export class ClientsComponent implements OnInit {

//   listData = data;

//   constructor() { }

//   ngOnInit(): void {
//     console.log(data);
//   }

// }



import { Component, OnInit } from '@angular/core';
import data from '../../../assets/mock_data_(3).json';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
  id: number;
  first_name: string;
  last_name: string;
  company: string;
  uk_based: boolean;
  gender: string;
}

interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  listData:any;
  listOfData:DataItem[];
  listOfColumns: ColumnItem[] = [
      {name: 'id'},
      {
        name: 'First Name',
        sortOrder: null,
        sortFn: (a: DataItem, b: DataItem) => a.first_name.localeCompare(b.first_name),
        filterMultiple: false,
      },
      {name: 'Last Name'},

      {name: 'Company'},

      {
        name: 'UK Based',
        filterMultiple: false,
        listOfFilter: [
        { text: 'yes', value: true},
        { text: 'No', value: false},
        ],
        filterFn: (ukbased: boolean, item: DataItem) =>
        item.uk_based === ukbased,
      },
      {
        name: 'Gender',
        sortOrder: 'descend',
        sortFn: (a: DataItem, b: DataItem) => a.gender.localeCompare(b.gender),
        sortDirections: ['descend', null]
      },]

  constructor() { }

  ngOnInit(): void {
    this.listData=data;
    this.listOfData=data;
  }

}

