import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { ContextMenuService, EditService, FilterService, PageService, TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { ContainerComponent } from './components/container/container.component';
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
    DialogModule,
    HttpClientModule
  ],
  providers: [
    FilterService,
    EditService,
    PageService,
    ContextMenuService
  ],
  declarations: [AppComponent, UserTreeGridComponent, EditDialogComponent, ContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }