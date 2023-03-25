import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[BetterServerDirective]'
})
export class BetterServerDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor:string=""
  @Input() highlightColor:string="transparent"
  @Input() defaultColor:string="transparent"
  constructor(private element:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
  }
  
  @HostListener('mouseenter') mouseOver(eventData:Event)
  {
    
  //  this.renderer.setStyle(this.element.nativeElement,'background-color','yellow')
    this.backgroundColor=this.highlightColor
  }
  @HostListener('mouseleave') mouseLeave(eventData:Event)
  {
    
    //this.renderer.setStyle(this.element.nativeElement,'background-color','transparent')
    this.backgroundColor=this.defaultColor
  }

}
