import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
import { FireBaseBdService } from './fire-base-bd.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '';
  pass = '';

  constructor(public auth : AngularFireAuth,
              private router: Router,
              public bd : FireBaseBdService) { }

  user = this.auth.authState.pipe (map(authState =>{
    if(authState){
      return authState;
    }else{
      return null;
    }
  }))
  
  login(){
    this.auth.signInWithEmailAndPassword(this.email, this.pass)
    .then(user => {
      this.bd.updateUserData(user)
      this.router.navigate(['loggedUser']);

  }
  ).catch(error => {
    alert("Credenciales introducidas incorrectas");
  });

  }
  logout(){
    this.auth.signOut();
    this.email='';
    this.pass='';
    this.router.navigate(['/']);
    console.log('logout!');
  }

 
}
