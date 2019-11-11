import {Component, OnInit} from '@angular/core';
import {User} from '../../../auth/models/user.model';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public systemUsers: User[];

  constructor(private userService: UserService,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: { allUsers: User[] }) => {
      this.systemUsers = data.allUsers;
    });
  }
}

/* ngOnInit(): void {
   of(this.userService.getAllUsers()).pipe(delay(100)).subscribe(users => {
     this.systemUsers = users;
   });
 }*/




