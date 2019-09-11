import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-theater',
  templateUrl: './add-theater.component.html',
  styleUrls: ['./add-theater.component.css']
})
export class AddTheaterComponent implements OnInit {

  constructor(public adminSrv: AdminService) { }

  ngOnInit() {

  }

}
