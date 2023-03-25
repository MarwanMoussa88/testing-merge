import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:"[serverDirective]"
})
export class serverDirective implements OnInit
{
    constructor(private element:ElementRef){
    }
    ngOnInit(): void {
        console.log("a")
        console.log(this.element)
        this.element.nativeElement.style.backgroundColor="blue"
    }
}