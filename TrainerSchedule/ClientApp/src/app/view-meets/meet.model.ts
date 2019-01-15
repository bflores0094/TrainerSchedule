import { Injectable } from '@angular/core';
import { Trainer } from '../new-meet/trainer-list/trainer.model';
import { Client } from './client.model';

@Injectable()
export class Meet {
    meetID: string;
    client: string;
    trainer: string;

  constructor(public MeetId: string,
    public clientID: string,
    public trainerID: string,
    public DateAndTime: string,
    public Trainer: Trainer,
    public Client: Client,
    public Notes: string
    
  ) {


  }
}
