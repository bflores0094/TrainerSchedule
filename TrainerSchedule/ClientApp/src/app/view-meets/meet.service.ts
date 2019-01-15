import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Meet } from './meet.model';
import { Client } from './client.model';
//import { Response } from '_debugger';

@Injectable({
  providedIn: 'root'
})
export class MeetService {

  private meets: Meet[];
  maxId = new Number();
  maxMeetId: any;
  meetListChangedEvent = new Subject<Meet[]>();

  getMeets() {
    this.http.get<Meet[]>('http://localhost:56150/api/Meets')
      .subscribe(
        (meets: Meet[]) => {
          this.meets = meets;
          //for (var i = 0; i < meets.length; i++) {
          //  console.log(this.meets[i].MeetId)
         // }
          this.meetListChangedEvent.next(this.meets.slice());
        }, (error: any) => {
          console.log('Error getting meets');
        }
      );

  }

  getMeet(meetId: string): Meet {

    //console.log("Get Meet function:" + meetId);
    for (var i = 0; i < this.meets.length; i++) {
      //console.log("array id" + this.meets[i].meetID);
      if (this.meets[i].meetID === meetId) {
        console.log("Selected meet:" + this.meets[i]);
        return this.meets[i];
      }
    }
    //return null;
  }

  storeMeets(meet: Meet) {
    if (!meet) {
      return;
    }
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const strMeet = JSON.stringify(meet)

    this.http.post('http://localhost:56150/api/Meets', strMeet,
      { headers: headers })
      .subscribe(
      (response: Response) => {
        if (response.status > 199 && response.status < 300) {
          console.log("MEET HAS BEEN ADDED");
        };
        }
      );
  }


  deleteMeet(meet: Meet) {
    if (document === null) {
      return;
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.delete('https://localhost:44317/api/meets',
      { headers: headers })
      .subscribe(
      (response: Response) => {
        //this.meetListChangedEvent.next(meets.slice());
      })
 
    //this.documentsClone = this.documents.slice();
    //this.documentListChangedEvent.next(this.documentsClone);
  }

  addMeet(newMeet: Meet) {
    if (newMeet == null || !newMeet) {
      return;
    }
    this.meets.push(newMeet);
    // this.contactsClone = this.contacts.slice();
   // this.storeMeets(this.meets);
  }

  constructor(private http: HttpClient) { }
}
