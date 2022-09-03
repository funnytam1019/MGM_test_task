import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  public event?: string;

  contextMenuClick(args?: string) {
    this.event = args;
    console.log(this.event)
  }

}
