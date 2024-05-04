import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent  implements OnInit {
  isAdmin!: boolean;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.isAdmin = this.service.isAdmin()
  }

   

}
