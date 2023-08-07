# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# notes
   <h1 (mouseover)="getName('over-hello')" style="background-color: red;">name:{{name}}</h1>
  keyup,keydown
  <input type="text" #box (blur)="getName(box.value)"/>
  <br>
  <button (click)="getName('e')">Click</button>
  <h1 (mouseleave)="getName('leave-hello')" style="background-color: green;">name:{{name}}</h1>
 this is the event binding
   <input type="text" (keyup)="getName($event)"/>
  
   <input type="text" #box />
 <button (click)="getName(box.value)">Add</button>
 <h1>{{name}}</h1> when we click on buttion we get value from the input field
this is Property Binding 
 <input type="text" [disabled]="disable" [value]="name">
 disabled Property is working in the property Binding
  Property Binding 
 <br> <br>
 <input type="text"  disabled={{disable}} value={{name}}>
 disabled Property is not working in the interpolation
 This is interpolation
 <br><br>
 <button (click)="enablebox()">Enable</button>
 /*****************************************/
  <h1>condition in Angular</h1>
 <div *ngIf="show else elseBlock">
  if Block
 </div>
 <ng-template [ngIf]="show==true">
   {{show}}
 </ng-template>
 <ng-template #elseBlock>
        <h1>hello</h1>
 </ng-template>
