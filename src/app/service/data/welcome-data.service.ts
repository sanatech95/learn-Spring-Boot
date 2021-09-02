import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
private http:HttpClient
 ) { }


    executeHelloWorldBeanService(){
     return this.http.get<HelloWorldBean>('http://localhost:8082/hello-world-bean');
     // console.log("Hello World Bean Service")
    }

    //http://localhost:8082/hello-world/path-variable/in28minutes

    executeHelloWorldBeanServiceWithPathVariable(name){
      return this.http.get<HelloWorldBean>(`http://localhost:8082/hello-world/path-variable/${name}`);
      // console.log("Hello World Bean Service")
     }
  }