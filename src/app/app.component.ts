import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name='Rohit';
  // getName(value:any){
  //   this.name=value
  //   console.log(value)
  // }
  // disable=true
  // enablebox(){
  //      this.disable=false
  //      console.log(this.disable)
  // }
//    a=10;
//    b=20;
//  show=true
//  color="black"
//for loop array
// data=['r','s','m','p']
//for loop with object
data=[
  {
    name:"Rohit",
    age:25,
  },
  {
    name:"Anish",
    age:24,
  },
  {
    name:"Loku",
    age:26
  }
]
}
