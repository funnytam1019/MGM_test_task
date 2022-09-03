import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ButtonPropsModel, DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})

export class EditDialogComponent implements OnInit {
  title = 'angular-dialog';

  @Input()
  public event?: string;

  @ViewChild('editDialog')
  public editDialogObject ! : DialogComponent;
  @ViewChild('confirmDialog')
  public confirmDialogObject ! : DialogComponent;
  @ViewChild('dialogTextbox')
  public dialogTextboxObject ! : ElementRef;

  ngOnInit() {
    this.editDialogObject.hide()
  }

  public confirmEvent = (): void => {
    if(this.event === 'editcol') {
      this.editDialogObject.show();
    }
  }

  public confirmDialogNoButtonClick = (): void => {
    if(this.dialogTextboxObject.nativeElement.value !== '') {
      this.dialogTextboxObject.nativeElement.value = '';
      this.confirmDialogObject.hide();
    }
  };

  public confirmDialogYesButtonClick = (): void => {
    this.editDialogObject.hide();
    this.confirmDialogObject.hide();
  };

  public confirmDialogButtons: ButtonPropsModel[] = [
    { click: this.confirmDialogYesButtonClick.bind(this),
      buttonModel: {content: 'Yes', isPrimary: true}},

    { click: this.confirmDialogNoButtonClick.bind(this),
      buttonModel: {content: 'No'}}
  ];

  public closeIcon = true;
  public ConfirmDialogVisibility = false;

  public saveButtonClick = (event: any): void => { 
    this.ConfirmDialogVisibility = true;
  };

  public cancelButtonClick = (event: any): void => {
    this.editDialogObject.hide();
  }
}
