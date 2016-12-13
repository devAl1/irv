import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PollModule } from './poll/poll.module';
import { CreatePollModule } from './create-poll/create-poll.module';
import { LoginModule } from './login/login.module';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAhUJL0Rnmf_rbiaI8IuFYtIhJe4Ox3Q4o",
  authDomain: "airv-a6f12.firebaseapp.com",
  databaseURL: "https://airv-a6f12.firebaseio.com",
  storageBucket: "airv-a6f12.appspot.com",
  messagingSenderId: "451818901859"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule,
    CreatePollModule,
    PollModule,
    LoginModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
