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
        this.meets = meets.sort((meet1, meet2) => {
          return meet1.DateAndTime > meet2.DateAndTime ? 1: -1
        });

        for (let m of this.meets) {
          m.Client = this.clientService.getClient(m.clientID);
          m.Trainer = this.trainerService.getTrainer(m.trainerID);
          //console.log(m);
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
