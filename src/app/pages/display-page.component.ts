import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import jsondata from '../../assets/JsonFile.json';
import { DialogPopupComponent } from './dilog-popup.component.js';

@Component({
  selector: 'app-display',
  templateUrl: './display-page.component.html',
})

export class DisplayPageComponent implements OnInit {
    displayedColumnsCustomers: string[] = ['firstname', 'lastname', 'address', 'city', 'state', 'zip'];
    displayedColumnsOrders: string[] = ['sku', 'price', 'orderNo'];
    dataSource = new MatTableDataSource<any>();
    constructor(private dialog: MatDialog){

    }
    ngOnInit() {
        this.dataSource.data = jsondata;
        console.log(this.dataSource.data);
    }
    getRecord(row: any){
        console.log(row);
        const dialogRef = this.dialog.open(DialogPopupComponent);
    }
}
