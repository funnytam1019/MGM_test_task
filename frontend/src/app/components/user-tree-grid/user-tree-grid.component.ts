import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { EditSettingsModel, TreeGridComponent, VirtualScrollService } from '@syncfusion/ej2-angular-treegrid';
import { Ajax } from '@syncfusion/ej2-base';

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
    this.contextMenuItems = [
      // { text: 'EditCol', target: '.e-headercontent', id: 'editcol' },
      // { text: 'AddCol', target: '.e-headercontent', id: 'addcol' },
      // { text: 'ViewCol', target: '.e-headercontent', id: 'viewcol' },
      // { text: 'DelCol', target: '.e-headercontent', id: 'delcol' },
      // { text: 'ChooseCol', target: '.e-headercontent', id: 'choosecol' },
      // { text: 'FreezeCol', target: '.e-headercontent', id: 'freezecol' },
      // { text: 'FilterCol', target: '.e-headercontent', id: 'filtercol' },
      // { text: 'MultiSort', target: '.e-headercontent', id: 'multisort' },
      // { text: 'AddNext', target: '.e-headercontent', id: 'addnext' },
      { text: 'AddChild', target: '.e-content', id: 'addchild' },
      { text: 'EditRow', target: '.e-content', id: 'editrow' },
      { text: 'SelectRows', target: '.e-content', id: 'selectrows' },
      { text: 'DelRows', target: '.e-content', id: 'delrows' },
      { text: 'CopyAsNext', target: '.e-content', id: 'copyasnext' },
      { text: 'CopyAsChild', target: '.e-content', id: 'copyaschild' },
      { text: 'MoveAsNext', target: '.e-content', id: 'moveasnext' },
      { text: 'MoveAsChild', target: '.e-content', id: 'moveaschild' },
    ]
  }

  contextMenuClick(args?: MenuEventArgs): void {
    switch (args?.item.id) {
      case 'addchild':
        this.treeGridObj.addRecord();
    }

    switch (args?.item.id) {
      case 'editrow':
        this.treeGridObj.startEdit();
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
