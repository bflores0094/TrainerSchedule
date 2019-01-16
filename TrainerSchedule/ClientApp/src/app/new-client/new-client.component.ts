import { Component, OnInit } from '@angular/core';
import { Client } from '../view-meets/client.model';
import { Subscription } from 'rxjs';
import { ClientService } from '../view-meets/client.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  newClient: Client;
  subscription: Subscription;

  constructor(private clientService: ClientService) { }

  onClientSubmit(form: NgForm) {
    this.newClient = form.value;
    console.log(this.newClient);
    try {
      this.clientService.addClient(this.newClient);
      //console.log("Client " + this.newClient.FirstName + " has been added")
    } catch (error) {
      console.log("Could not add client " + this.newClient.FirstName);
      console.log(error);
    }
  }

  ngOnInit() {
  }

}
