import { cdk } from './data';
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  cdkItems: string[] = cdk;
  components: string[] = [];
  behaviors: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.cdkItems, event.previousIndex, event.currentIndex);
  }
}
