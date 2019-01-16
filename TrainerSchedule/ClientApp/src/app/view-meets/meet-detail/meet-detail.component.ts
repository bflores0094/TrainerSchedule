import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Meet } from '../meet.model';
import { MeetService } from '../meet.service';

@Component({
  selector: 'app-meet-detail',
  templateUrl: './meet-detail.component.html',
  styleUrls: ['./meet-detail.component.css']
})
export class MeetDetailComponent implements OnInit {
  id: string;

  meet: Meet;
  
  constructor(private activeRoutes: ActivatedRoute, private meetService: MeetService, private router: Router) { }

  onDelete() {
    this.meetService.deleteMeet(this.meet);
    this.router.navigate(['/view-meets']);
    
  }

  ngOnInit() {
    this.activeRoutes.params
      .subscribe(
      (params: Params) => {
        console.log(params['id']);
          this.id = params['id'];
         // console.log(this.meetService.getMeet(this.id));

         this.meet = this.meetService.getMeet(this.id);
          //console.log("This Meet" + this.meet);
        }
      );
  } 

}
