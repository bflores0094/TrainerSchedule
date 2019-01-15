import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Client[] = [];
  maxId = new Number();
  maxMeetId: any;
  clientListChangedEvent = new Subject<Client[]>();

  getClients() {
    this.http.get<Client[]>('http://localhost:56150/api/Clients')
      .subscribe(
        (clients: Client[]) => {
          this.clients = clients;
          //console.log(clients);
          this.clientListChangedEvent.next(this.clients.slice());
        }, (error: any) => {
          console.log('Error getting clients');
        }
      );

  }

  getClient(clientId: string): Client {

    //console.log(clientId);
    for (var i = 0; i < this.clients.length; i++) {
      //console.log(this.clients[i].clientID);
      if (this.clients[i].clientID === clientId) {
        console.log(this.clients[i]);
        return this.clients[i];
      }
    }
    //return null;
  }

  storeClients(client: Client) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://localhost:44317/api/clients', client,
      { headers: headers })
      .subscribe(
      (response: Response) => {
        //console.log(response);
        //client.ClientId = response.clientID;
        this.clients.push(client);
          this.clientListChangedEvent.next(this.clients.slice());
        }
      );
  }

  addClient(newClient: Client) {
    if (newClient == null || !newClient) {
      return;
    }
    //this.maxMeetId++;
    //newClient.ClientId = this.maxMeetId;
    //this.clients.push(newClient);
    // this.contactsClone = this.contacts.slice();
    this.storeClients(newClient);
  }

  constructor(private http: HttpClient) { }
}
