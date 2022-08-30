import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { ContextMenuService, EditService, FilterService, ToolbarService, TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { UserTreeGridComponent } from './components/user-tree-grid/user-tree-grid.component';

/**
 * Module
 */
@NgModule({
  imports: [
    BrowserModule,
    TreeGridModule,
    ContextMenuModule,
    ButtonModule,
    DropDownListAllModule,
    FormsModule,
    NumericTextBoxAllModule
  ],
  providers: [
    FilterService,
    EditService,
    ToolbarService,
    ContextMenuService
  ],
  declarations: [AppComponent, UserTreeGridComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }