import { Component, OnInit, Input } from '@angular/core';
import { Trainer } from './trainer.model';
import { TrainerService } from '../trainer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {
  @Input() trainer: Trainer;
  trainerId: string;



  constructor(private trainerService: TrainerService, private activeRoutes: ActivatedRoute) { }

  onTrainerSelect(selectedTrainer: Trainer): void {
    this.activeRoutes.params
      .subscribe(
        (params: Params) => {
          this.trainerId = params['id'];
          //console.log(this.trainerId);
          this.trainer = this.trainerService.getTrainer(this.trainerId);
          console.log(this.trainer);
        }
      );
  }


  ngOnInit() {
  //  console.log(this.trainer);

  }
}
