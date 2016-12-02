import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filteredItems: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;
  sizeSubject: Subject<any>

  constructor(public af: AngularFire) {
    this.items = af.database.list('/items');
    this.item = af.database.object('/item');
    
    this.sizeSubject = new Subject();
    this.filteredItems = af.database.list('/items', 
    {
      query: {
        orderByChild: 'size',
        equalTo: this.sizeSubject
      }
    });

    this.item.set({something: 'cool', subobject: {morestuff: "blah blah"}});

    this.af.auth.subscribe(auth => console.log(auth));
  }

  save(newName: string) {
    this.item.set({ name: newName });
  }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  
  delete() {
    this.item.remove();
  }

  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  updateItemSize(key: string, newSize: string){
    this.items.update(key, { size: newSize });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }

  filterBy(size: string){
    this.sizeSubject.next(size);
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

  title = 'app works!';
}
