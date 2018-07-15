import { Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
    selector: '[redBorder]'
})

export class RedBorder{

    @Input()redBorder:string;
    @Input()redClass:string;

    constructor(private el : ElementRef){

        console.log("Estan llamando a la directiva redBorder");
    }

    ngOnInit(): void {
        console.log("color: " + this.redBorder);
        console.log("class : " + this.redClass);
        this.el.nativeElement.classList.add(this.redClass);         
    }
    
    @HostListener("click") applyBorder(){
        this.el.nativeElement.style.border = `solid 2px ${this.redBorder}`;
     }

     @HostListener("mouseout") removeBorder(){
        this.el.nativeElement.style.border = "none";
     }
}