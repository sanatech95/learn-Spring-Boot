import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username ='in28minutes'
password = ''
errorMessage = 'invalid Credential'
invalidLogin=false


//Router
//Angular.giveMeRouter
//Dependency Injection
  constructor(private router:Router, 
    private HardcodedAuthenticationService: HardcodedAuthenticationService ) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username)
    //if (this.username ==="in28minutes" && this.password ==="dummy"){
      if (this.HardcodedAuthenticationService.authenticate(this.username, this.password)){
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
     this.invalidLogin = false;
    }else {
      this.invalidLogin = true;
    }

    }
}
