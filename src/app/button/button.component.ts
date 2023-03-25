import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  constructor() { }
  title:string="testing"
  buttonText:string="button text"

  changeButtonName()
  {
    this.buttonText="Button Name changed"
  }

}
