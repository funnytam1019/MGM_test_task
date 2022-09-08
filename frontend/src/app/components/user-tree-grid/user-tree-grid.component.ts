import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BeforeOpenCloseMenuEventArgs, MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { BeforeOpenEventArgs } from '@syncfusion/ej2-angular-popups';
import { EditSettingsModel, TreeGridComponent, VirtualScrollService } from '@syncfusion/ej2-angular-treegrid';
import { Ajax } from '@syncfusion/ej2-base';
import { RowInfo } from '@syncfusion/ej2-grids';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { UserTreeGridConfig } from './config/user-tree-grid.config';

@Component({
  selector: 'app-user-tree-grid',
  templateUrl: './user-tree-grid.component.html',
  styleUrls: ['./user-tree-grid.component.css'],
  providers: [VirtualScrollService]
})

export class UserTreeGridComponent implements OnInit {
  public editSettings!: EditSettingsModel;
  public contextMenuItems!: Record<string, unknown>[];
  public rowIndex!: number | undefined;
  public selectionOptions!: Record<string, unknown>;

  @ViewChild('treegrid')
  public treeGridObj!: TreeGridComponent;

  ngOnInit(): void {
    this.contextMenu();
  }

  contextMenu(): void {
    this.editSettings = new UserTreeGridConfig().editSettings;
    this.contextMenuItems = new UserTreeGridConfig().contextMenuItems; 
  }
  
  contextMenuOpen(args: RowInfo): void {
    this.rowIndex = args.rowIndex;
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

      // case 'copyasnext':
      //   this.editSettings = {
      //     allowAdding: true,
      //     newRowPosition: "Below"
      //   }
      //   this.treeGridObj.copyHierarchyMode = 'Parent';
      //   this.treeGridObj.copy();
      //   console.log(this.treeGridObj.clipboardModule.paste());
      //   this.treeGridObj.addRecord();
      //   break;
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
