import { Component, OnInit, Input } from '@angular/core';
import { Client } from './../../view-meets/client.model';
import { ClientService } from './../../view-meets/client.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  @Input() client: Client;
  clientId: string;

  constructor(private clientService: ClientService, private activeRoutes: ActivatedRoute) { }

  ngOnInit() {
    
  }

  onClientSelect(selectedTrainer: Client): void {
    this.activeRoutes.params
      .subscribe(
        (params: Params) => {
          this.clientId = params['id'];
          console.log(this.client.clientID);
          this.client = this.clientService.getClient(this.clientId);
          //console.log(this.trainer);
        }
      );
  }
}
