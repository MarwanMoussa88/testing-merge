import { Component } from '@angular/core';

@Component({
  //how to call componenent
  /**
   * '['app-root'] select by attribute
   * '.app-root' select by class
   */
  selector: 'app-root',
  //html
  templateUrl: './app.component.html',
  //css
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApp';


  recieveFromChild(event:any)
  {
    console.log(event)

  }
}
