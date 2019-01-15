import { Component, OnInit } from '@angular/core';
import { Trainer } from './trainer-list/trainer.model';
import { TrainerService } from './trainer.service';
import { Subscription } from 'rxjs';
import { ClientService } from '../view-meets/client.service';
import { MeetService } from '../view-meets/meet.service';
import { NgForm } from '@angular/forms';
import { Meet } from '../view-meets/meet.model';
import { Client } from '../view-meets/client.model';
import { ActivatedRoute, Router, Params } from '@angular/router';



@Component({
  selector: 'app-new-meet',
  templateUrl: './new-meet.component.html',
  styleUrls: ['./new-meet.component.css']
})
export class NewMeetComponent implements OnInit {

  trainers: Trainer[] = [];
  clients: Client[] = [];
  newMeet: Meet;
  newClient: Client;
  subscription: Subscription;
  trainer: Trainer;
  trainerId: string;

  constructor(private trainerService: TrainerService,
    private clientService: ClientService,
    private meetService: MeetService,
    private router: Router,
    private route: ActivatedRoute) { }

  onClick(value: string) {
    console.log(value);
  }

  onSubmit(form: NgForm) {
    this.newMeet = form.value;
    this.trainer = this.getTrainerId();
    console.log(this.trainer);

    try {
      //this.meetService.addMeet(this.newMeet);
      console.log(this.newMeet);
    } catch(error){
      console.log("Could not create meet");
      console.log(error);
    }
    
    //this.router.navigate(["/meets"]);
  }

  getTrainerId(): Trainer {
 
    this.route.params.subscribe(
      (params) => {
        this.trainer = this.trainerService.getTrainer(params.id);

      })
      return this.trainer;
  }



  ngOnInit() {
   
    this.trainerService.getTrainers();
    this.trainerService.trainerListChangedEvent.subscribe(
      (trainers: Trainer[]) => {
        this.trainers = trainers;
        //console.log(this.trainers);
      })

    this.subscription = this.trainerService.trainerListChangedEvent.subscribe(
      (trainers: Trainer[]) => {
        this.trainers = trainers;
      })

    this.clientService.getClients();
    this.clientService.clientListChangedEvent.subscribe(
      (clients: Client[]) => {
        this.clients = clients;
        console.log(this.clients);
      })

    this.subscription = this.clientService.clientListChangedEvent.subscribe(
      (clients: Client[]) => {
        this.clients = clients;
      })
  }

  }


