import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input('name') name: string = '';
}
