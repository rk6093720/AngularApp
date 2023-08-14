import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  //pass data from child to parent component that use in @Output and eventemiiter
    @Output() parentData:EventEmitter<any>= new EventEmitter()
    // Use in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.

    // @usageNotes
    // Extends RxJS Subject for Angular by adding the emit() method.
    
    // In the following example, a component defines two output properties that create event emitters. When the title is clicked, the emitter emits an open or close event to toggle the current visibility state.
    
    
  //  // *@Component*  
    // ({
    // selector: 'zippy',
    // template: `
    // <div class="zippy">
    // <div (click)="toggle()">Toggle</div>
    // <div [hidden]="!visible">
    // <ng-content></ng-content>
    // </div>
    // </div>`})
    // export class Zippy {
    // visible: boolean = true;  
    
   // // *@Output* — () open: EventEmitter<any> = new EventEmitter();  
    
   // // *@Output*  
    // () close: EventEmitter<any> = new EventEmitter();
    
    // toggle() {
    // this.visible = !this.visible;
    // if (this.visible) {
    // this.open.emit(null);
    // } else {
    // this.close.emit(null);
    // }
    // }
    // }
    // Access the event object with the $event argument passed to the output event handler:
    
    // <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
    //  @Input() hero: any; 
     //pass data from parent to child component that use in @Input
    //  Decorator that marks a class field as an input property and supplies configuration metadata. The input property is bound to a DOM property in the template. During change detection, Angular automatically updates the data property with the DOM property's value.
    constructor () {}
    ngOnInit(): void {
      
      // A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.
      
    }
    sendData(){
      let data ={ name:"Rohit", age:25}
      this.parentData.emit(data)
      // Emits an event containing a given value.
      //  @param value — The value to emit.
    }
}
