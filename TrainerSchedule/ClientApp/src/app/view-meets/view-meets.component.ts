import { Component, OnInit } from '@angular/core';
import { Meet } from './meet.model';
import { Client } from './client.model';
import { Subscription } from 'rxjs';
import { MeetService } from './meet.service';
import { ClientService } from './client.service';
import { forEach } from '@angular/router/src/utils/collection';
import { TrainerService } from '../new-meet/trainer.service';

@Component({
  selector: 'app-view-meets',
  templateUrl: './view-meets.component.html',
  styleUrls: ['./view-meets.component.css']
})
export class ViewMeetsComponent implements OnInit {
  public meets: Meet[] = [];
  public clients: Client[] = [];
  subscription: Subscription;
 

  constructor(private meetService: MeetService, private clientService: ClientService, private trainerService: TrainerService) { }

  ngOnInit() {
    this.meetService.getMeets();
    this.meetService.meetListChangedEvent.subscribe(
      (meets: Meet[]) => {
        this.meets = meets;

        for (let m of this.meets) {
          m.Client = this.clientService.getClient(m.clientID);
          //console.log(m);
        }

        for (let m of this.meets) {
          console.log(m.trainerID);
          m.Trainer = this.trainerService.getTrainer(m.trainerID);
         // console.log(m.Trainer);
          //console.log(this.meets[i]);
        }
      })

    this.subscription = this.meetService.meetListChangedEvent.subscribe(
      (meets: Meet[]) => {
        this.meets = meets;
      })

    this.clientService.getClients();
    this.clientService.clientListChangedEvent.subscribe(
      (clients: Client[]) => {
        this.clients = clients;

      })

    this.subscription = this.clientService.clientListChangedEvent.subscribe(
      (clients: Client[]) => {
        this.clients = clients;
      })

  }
}
