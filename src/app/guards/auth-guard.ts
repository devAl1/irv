import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {

    user: any;

    constructor(private router: Router, private af: AngularFire) {
        this.af.auth.subscribe(user => {
            if(user) {
                // user logged in
                this.user = user;
            }
            else {
                // user not logged in
                this.user = {};
            }
        });

     }

    canActivate() {    
        if(this.user.uid) {
            // user logged in
            return true;
        }
        else {
            // user not logged in
            this.router.navigate(['/login']);
            return false;
        }
    }
}