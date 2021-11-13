import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid-app',
  templateUrl: './grid-app.component.html',
  styleUrls: ['./grid-app.component.scss']
})
export class GridAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Mini', model: 'Cooper', price: 21000 },
    { make: 'Mercedes', model: 'Benz', price: 49500 },
    { make: 'Mitsubushi', model: 'Eclipse', price: 85000 },
    { make: 'Range', model: 'Rover', price: 88000 }
  ]

}
