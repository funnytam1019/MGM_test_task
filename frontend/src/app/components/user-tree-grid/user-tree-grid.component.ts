import { Component, OnInit, ViewChild } from '@angular/core';
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

  ngOnInit(): void {
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.editSettings = {
      allowAdding: true,
      allowDeleting: true,
      allowEditing: true,
      mode: "Dialog"
    }
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
      { text: 'EditCol', target: '.e-content', id: 'editcol' },
      { text: 'AddCol', target: '.e-content', id: 'addcol' },
      { text: 'ViewCol', target: '.e-content', id: 'viewcol' },
      { text: 'DelCol', target: '.e-content', id: 'delcol' },
      { separator: true, target: '.e-content', id: 'separator' },
      { text: 'ChooseCol', target: '.e-content', id: 'choosecol' },
      { text: 'FreezeCol', target: '.e-content', id: 'freezecol' },
      { text: 'FilterCol', target: '.e-content', id: 'filtercol' },
      { text: 'MultiSort', target: '.e-content', id: 'multisort' },
    ]
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
