import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/types';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  isAdmin!: boolean;
  user!: User | undefined;

  constructor(private service: AppService, private router: Router) {}

  ngOnInit(): void {
    this.isAdmin = this.service.isAdmin();
    this.user = this.service.user;
  }

  handleLogout() {
    this.service.logout();
    this.router.navigate(['login']);
  }
}
