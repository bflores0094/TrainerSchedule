import { Injectable } from '@angular/core';
import { Meet } from './../../view-meets/meet.model';

@Injectable()
export class Trainer {
    trainerID: string;

  constructor(public TrainerId: string,
    public FirstName: string,
    public LastName: string,
    public Email: string,
    public Phone: string,
    public Meets: Meet[]
  ) {


  }
}
