 import { AfterContentInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent{

  @Output() eventFromChild =new EventEmitter()
  serverName:string ="";
  setDisabled:boolean = true;
  serverCreationStatus = "No server was created"
  twoWayBinding:string=""
  enableThisElement:boolean=true
  redBackground:string ="red"
  testArray=[1,2,3,4,5,6]
  @Input("fromParentComponenent") fromParent=""
  @ViewChild("testReference") testReferenceElement?:ElementRef;
  getServerName=()=>{
    return this.serverName
  }

  constructor() {
  
    setTimeout(() => {
      this.setDisabled=false
    }, 3000);
  }

  onCreateServer()
  {
    this.serverCreationStatus="Server was added successfully"
  }
  
  onUpdateServerName(event:any)
  {
    console.log(event.target)
    this.serverName=event.target.value
  }
  /**
   * Local Reference
   * @param htmlReference HTML Reference 
   */
  localReference(htmlReference:any)
  {
      console.log(this.testReferenceElement?.nativeElement)
  }
  /**
   * Pass data to parent
   */
  onButtonClicked()
  {
      console.log("FromChild")
      this.eventFromChild.emit("marwan")
  }

}
