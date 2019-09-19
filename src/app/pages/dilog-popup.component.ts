import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
})
export class DialogPopupComponent implements OnInit {
  
  constructor(private dialogRef: MatDialogRef<DialogPopupComponent>) { }

  ngOnInit() {
  }
  
}