import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { EditSettingsModel, PageService, TreeGridComponent, VirtualScrollService } from '@syncfusion/ej2-angular-treegrid';
import { Ajax } from '@syncfusion/ej2-base';
import { row, RowSelectEventArgs } from '@syncfusion/ej2-grids';
import { UserTreeGridConfig } from './config/user-tree-grid.config';

@Component({
  selector: 'app-user-tree-grid',
  templateUrl: './user-tree-grid.component.html',
  styleUrls: ['./user-tree-grid.component.css'],
  providers: [VirtualScrollService]
})

export class UserTreeGridComponent implements OnInit {
  public data!: Record<string, unknown>[];
  public editSettings!: EditSettingsModel;
  public contextMenuItems!: Record<string, unknown>[];
  public selectedIndex!: number | undefined;
  public selectedRecord!: Record<string, any>;

  @ViewChild('treegrid')
  public treeGridObj!: TreeGridComponent;

  ngOnInit(): void {
    this.contextMenu();
  }

  contextMenu(): void {
    this.editSettings = new UserTreeGridConfig().editSettings;
    this.contextMenuItems = new UserTreeGridConfig().contextMenuItems;
  }

  contextMenuClick(args?: MenuEventArgs): void{
    switch (args?.item.id) {
      case 'addnext':
        this.treeGridObj.addRecord();
        break;
      
      case 'addchild':
        this.editSettings = {
          newRowPosition: "Child"
        }
        this.treeGridObj.addRecord();
        break;
  
      case 'editrow':
        this.treeGridObj.startEdit();
        break;

      case 'delrows':
        this.treeGridObj.deleteRecord();
        break;

      case 'copyasnext':
        this.selectedIndex = this.treeGridObj['getSelectedRowIndexes']()[0];
        this.selectedRecord = this.treeGridObj['getSelectedRecords']()[0];
        this.treeGridObj.addRecord(this.selectedRecord, this.selectedIndex, 'Below');
        break;

      case 'copyaschild':
        this.editSettings = {
          newRowPosition: "Child"
        }
        this.selectedIndex = this.treeGridObj['getSelectedRowIndexes']()[0];
        this.selectedRecord = this.treeGridObj['getSelectedRecords']()[0];
        this.treeGridObj.addRecord(this.selectedRecord, this.selectedIndex);
        break;
    }
  }

  click(): void {
    const ajax = new Ajax(
      'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
      'GET'
    );
    ajax.send();
    ajax.onSuccess = (data: string) => {
      this.data = JSON.parse(data);
    }
  }

}
