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
  <h1>switch case in Angular</h1>
  <div [ngSwitch]="color">
       <h2 style="color: red;" *ngSwitchCase="'red'">
        redcolour
       </h2>
       <h2 style="color: green;" *ngSwitchCase="'green'">
        green
       </h2>
       <h2 style="color: blue;" *ngSwitchCase="'blue'">
        blue
       </h2>
       <h2 style="color: grey;" *ngSwitchDefault>
         default
       </h2>
  </div>
 <h1>for loop in Angular</h1>
  this is ngfor working in array when we give data of array of object .it gives output like [object,object]
  <div *ngFor="let item of data">
     {{item}}
  </div>
  <table border="1">
    <tr>
      <td>name</td>
      <td>age</td>
    </tr>
    <tr *ngFor="let item of data">
      <td>{{item.name}}</td>
      <td>{{item.age}}</td>
    </tr>
<h1>Simple forms</h1>
 <form #simpleForm="ngForm" (ngSubmit)="submit(simpleForm.value)">
  <input type="text" ngModel name="name"
  placeholder="enter your name">
  <br>
  <input type="email" ngModel name="email"
  placeholder="enter your email">
  <br>
  <input type="password" ngModel name="password"
  placeholder="enter your password">
   <div>
    <button>Submit</button>
  </div>
 </form>
 <!-- ................ -->
 <h1>Make header and footer</h1>
 <app-header></app-header>
  <app-footer></app-footer>
  </table>

  # Todoapp in react 
  import React, {  useState } from "react";

const Todo =()=>{
    const [text,setText]= useState("");
    const [data,setData]= useState([]);
    const [toggle,setToggle]= useState(true);
    const [edit,setEdit]= useState(null);
     const handleAdd=()=>{
       if(!toggle){
          let editTodo= data.map((item)=>{
              if(item.id === edit){
                return {...item, name:text}
              }
              return item;
          })
          setData(editTodo);
          setText("")
          setToggle(true);
          setEdit(null)
          
       }else{
        setData([...data, {id: data.length + 1,name:text,
        }])
        setText("");  
       }
        
       }


    const handleEdit=(id)=>{
      let newTodo = data.map((item)=>{
        if(item.id === id)
        {
          return item.name
        }
      })
      console.log(newTodo);
      setToggle(false)
      setText(newTodo)
      setEdit(id)
        // console.log(newTodo.name)
    }
    const handleDelete=(id)=>{
         let deleteTodo= data.filter((item)=>{
           return item.id !== id;
         })
         setData(deleteTodo)
    }
  return (
   <div>
      <input type="text"
      value={text}
      placeholder="enter your text"
      onChange={(e)=> setText(e.target.value)}/>
      <button onClick={handleAdd}>{toggle ? "Add" :"Edit"}</button>
      {
        data.map((item)=>{
          return <div key={item.id}>
             <div>{item.name} </div>
             <button onClick={()=> handleEdit(item.id)}>Edit</button>
            <button onClick={()=> handleDelete(item.id)}>Delete</button>
            </div>
        })
      }
   </div>
  )
}
export default Todo;

Sure, here's a table that highlights some key differences between SQL (relational databases) and MongoDB (a NoSQL document-oriented database):

Feature	SQL (Relational)	MongoDB (NoSQL)
Data Model	Tabular (Tables with rows and columns)	Document-Oriented (JSON-like documents)
Schema	Fixed, predefined schema	Flexible, dynamic schema
Scaling	Vertical (Scaling up)	Horizontal (Scaling out)
Joins	Supports complex joins	Limited support for joins
Transactions	ACID-compliant (Atomic, Consistent, Isolated, Durable)	Limited ACID support
Flexibility	Well-structured data	Semi-structured, diverse data
Performance	Great for complex queries and analytics	Great for read-heavy, simple queries
Data Relationships	Maintains relationships with foreign keys	Supports embedded documents, references
Data Integrity	Enforced by the schema	May require application-level checks
Query Language	SQL (Structured Query Language)	BSON-based queries
Use Cases	Business applications, reporting, analytics	Real-time analytics, content management
  <!-- **************************************************  -->
  <h1>Style Binding in angular</h1>
  <h1 style="color: red;">heading 1 normal css</h1>
  <h1 [style.color]="'red'">heading2 style binding </h1>
  <h2 [style.color]="!flag ? 'red':color">heading 3 Dynamic css</h2> 
  <button (click)="updateColor()">click color</button>
  </table>
