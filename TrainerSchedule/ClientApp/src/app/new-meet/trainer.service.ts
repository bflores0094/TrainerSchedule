import { Injectable } from '@angular/core';
import { Trainer } from './trainer-list/trainer.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private trainers: Trainer[];
  trainerListChangedEvent = new Subject<Trainer[]>();

  getTrainers() {
    this.http.get<Trainer[]>('http://localhost:56150/api/Trainers')
      .subscribe(
        (trainers: Trainer[]) => {
          this.trainers = trainers;
         // console.log(trainers);
          this.trainerListChangedEvent.next(this.trainers.slice());
        }, (error: any) => {
          console.log('Error getting trainers');
        }
      );

  }


  getTrainer(trainerId: string): Trainer {

    for (const trainer of this.trainers) {
      if (trainer.trainerID === trainerId) {
        return trainer;
      }
    }
    return null;
  }

  constructor(private http: HttpClient) { }
}
