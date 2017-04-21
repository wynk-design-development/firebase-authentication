import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

//Firebase
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

//Pages
import { LoginPage } from '../login/login';

//Components
import { ListComponent } from '../components/login.component';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  username = '';
  email = '';
  state: string = '';

  constructor(
      private nav: NavController,
      private auth: AuthService,
      public af: AngularFire
  ) {
    // check if user is signed in
    this.af.auth.subscribe(auth => {
        if (auth) {}
    });
}


    // logout
    public logout() {
        this.af.auth.logout().then(auth => {
            if (!auth) {
                this.nav.setRoot(LoginPage);
            }
        });
    } //logout
}
