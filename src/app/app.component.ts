import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user: any) => {
      this.user = user.results[0];
      this.toastr.info('Profile Loaded. . .');
    }, (err) => {
      this.toastr.error(err.status, 'Opps, Please reload. . .');
    });
  }

  getUser() {
    this.userService.getUser().subscribe((user: any) => {
      this.user = user.results[0];
      this.toastr.info('Profile Loaded. . .');
    }, (err) => {
      this.toastr.error(err.status, 'Opps, Please reload. . .');
    });
  }
}
