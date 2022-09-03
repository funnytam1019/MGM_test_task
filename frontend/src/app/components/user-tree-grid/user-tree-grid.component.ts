import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { EditSettingsModel, TreeGridComponent, VirtualScrollService } from '@syncfusion/ej2-angular-treegrid';
import { Ajax } from '@syncfusion/ej2-base';
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
  public toolbar!: string[];
  public contextMenuItems!: Record<string, unknown>[];

  @ViewChild('treegrid')
  public treeGridObj!: TreeGridComponent;

  @Output()
  public contextMenuClickEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.editSettings = {
      allowAdding: true,
      allowDeleting: true,
      allowEditing: true,
      mode: "Dialog"
    }
    this.contextMenuItems = new UserTreeGridConfig().contextMenuItems;
  }

  contextMenuClick(args?: MenuEventArgs): void {
      this.contextMenuClickEvent.emit(args?.item.id);
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
