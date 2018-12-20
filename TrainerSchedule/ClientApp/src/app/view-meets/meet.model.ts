import { Injectable } from '@angular/core';
import { Trainer } from '../new-meet/trainer-list/trainer.model';
import { Client } from './client.model';

@Injectable()
export class Meet {

  constructor(public MeetId: string,
    public ClientId: string,
    public TrainerId: string,
    public DateAndTime: string,
    public Trainer: Trainer,
    public Client: Client,
    public Notes: string
    
  ) {


  }
}
