import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable, AngularFire} from 'angularfire2';
import { AuthGuard } from '../guards/auth-guard';
import { ValuesPipe } from '../values.pipe';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  currentPollKey: string
  currentPoll: {}
  polls: FirebaseObjectObservable<any>

  constructor(public af: AngularFire, private authGuard: AuthGuard) { 
    this.polls = af.database.object(`/polls/${authGuard.user.uid}`);
  }

  ngOnInit() {
  }

  createNewPoll(name: string){
    let currentTime = Math.round(new Date().getTime()/1000);
    
    this.currentPollKey = `${name}-${currentTime}`;
    this.currentPoll = {title: name};
  }

  savePoll(poll: any){
    let toSave = {};
    toSave[this.currentPollKey] = poll;

    this.polls.update(toSave);
  }

}
