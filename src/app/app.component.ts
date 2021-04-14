import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {FireBaseBdService} from './fire-base-bd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestor-contrasenhas';
  constructor(public auth : AuthService,
              public bd : FireBaseBdService,){

  }
  ngOnInit(): void {
    this.auth.auth.signOut();

  }
}
