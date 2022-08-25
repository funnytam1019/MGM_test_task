import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { ContextMenuService, EditService, FilterService, ToolbarService, TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';


/**
 * Module
 */
@NgModule({
  imports: [
    BrowserModule,
    TreeGridModule,
    ContextMenuModule,
    ButtonModule,
    DropDownListAllModule
  ],
  providers: [
    FilterService,
    EditService,
    ToolbarService,
    ContextMenuService
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }