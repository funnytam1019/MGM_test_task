import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the TreeGridModule for the TreeGrid component
import { FilterService, PageService, SortService, TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  //declaration of ej2-angular-treegrid module into NgModule
  imports: [
    BrowserModule,
    TreeGridModule
  ],
  providers: [
    PageService,
    SortService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
