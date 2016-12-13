import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire) { }

  ngOnInit() {
  }

  loginGitHub(){
    this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup,
    });
  }

  loginGoogle(){
     this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  logout(){
    this.af.auth.logout();
  }

}
