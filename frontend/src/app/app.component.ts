
import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeGridComponent, VirtualScrollService } from '@syncfusion/ej2-angular-treegrid';
import { Ajax } from '@syncfusion/ej2-base';
import { MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { EditSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
@Component({
  selector: 'app-container',
  templateUrl: './app.component.html',
  providers: [VirtualScrollService]
})

export class AppComponent implements OnInit {
  public data!: Object[];
  public content: string = '';
  public editSettings!: EditSettingsModel;
  public toolbar!: string[];
  public contextMenuItems!: Object[];

  @ViewChild('treegrid')
  public treeGridObj!: TreeGridComponent;


  ngOnInit(): void {
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Dialog'
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.contextMenuItems = [
      { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
      { text: 'Expand the Row', target: '.e-content', id: 'expandrow' }
    ]
  }
  contextMenuClick(args?: MenuEventArgs): void {
    this.treeGridObj.getColumnByField('taskID');
    if (args?.item.id === 'collapserow') {
      this.treeGridObj.collapseRow(<HTMLTableRowElement>(this.treeGridObj.getSelectedRows()[0]));
    } else {
      this.treeGridObj.expandRow(<HTMLTableRowElement>(this.treeGridObj.getSelectedRows()[0]));
    }
  }
  contextMenuOpen(arg?: BeforeOpenCloseEventArgs): void {
    let elem: Element = arg!.event.target as Element;
    let uid: any = elem!.closest('.e-row')?.getAttribute('data-uid');
    if (this.treeGridObj.grid) {
      arg!.cancel = true;
    }
  }

  click(): any {
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
