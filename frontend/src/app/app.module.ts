
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule,
        ContextMenuModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }