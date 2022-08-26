
import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeGridComponent, VirtualScrollService } from '@syncfusion/ej2-angular-treegrid';
import { Ajax } from '@syncfusion/ej2-base';
import { EditSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { SaveEventArgs } from '@syncfusion/ej2-grids';
import { MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { Dialog } from '@syncfusion/ej2-angular-popups';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-container',
  templateUrl: './app.component.html',
  providers: [VirtualScrollService]
})

export class AppComponent implements OnInit {
  public data!: Record<string, unknown>[];
  public editSettings!: EditSettingsModel;
  public toolbar!: string[];
  public contextMenuItems!: Record<string, unknown>[];
  public taskData!: ITaskModel;
  public modalService: NgbM

  @ViewChild('treegrid')
  public treeGridObj!: TreeGridComponent;


  ngOnInit(): void {
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.contextMenuItems = [
      { text: 'EditCol', target: '.e-headercontent', id: 'editcol' },
      { text: 'AddCol', target: '.e-headercontent', id: 'addcol' },
      { text: 'ViewCol', target: '.e-headercontent', id: 'viewcol' },
      { text: 'DelCol', target: '.e-headercontent', id: 'delcol' },
      { separator: true, target: '.e-headercontent', id: 'separator' },
      { text: 'ChooseCol', target: '.e-headercontent', id: 'choosecol' },
      { text: 'FreezeCol', target: '.e-headercontent', id: 'freezecol' },
      { text: 'FilterCol', target: '.e-headercontent', id: 'filtercol' },
      { text: 'MultiSort', target: '.e-headercontent', id: 'multisort' },
    ]
  }

  contextMenuClick(args: MenuEventArgs): void {
    if (args.item.id === 'editcol') {

    }
    else if (args.item.id === 'addcol') {

    } else if (args.item.id === 'viewcol') {

    } else if (args.item.id === 'delcol') {

    } else if (args.item.id === 'choosecol') {

    } else if (args.item.id === 'freezecol') {

    } else if (args.item.id === 'filtercol') {

    } else if (args.item.id === 'multisort') {

    }
  }

  click(): void {
    const ajax = new Ajax(
      'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
      'GET'
    );
    ajax.send();
    ajax.onSuccess = (data: string) => {
      this.treeGridObj.dataSource = JSON.parse(data);
    }
  }
}

export interface ITaskModel {
  taskID?: number;
  taskName?: string;
  startDate?: Date;
  duration?: number;
  // progress?: number;
  // priority?: string;
  // approved?: boolean;
}