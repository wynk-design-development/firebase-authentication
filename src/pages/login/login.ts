import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, AlertController, LoadingController, ActionSheetController, Loading } from 'ionic-angular';

// Firebase
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

//pages
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

//services
import { AuthService } from '../../providers/auth-service';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})



export class LoginPage {
    loading: Loading;
    registerCredentials = {email: '', password: ''};
    state: string = '';
    error: any;
    drills: FirebaseListObservable<any>;

    constructor(
        public nav: NavController,
        private auth: AuthService,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        public af: AngularFire
    ) {
        this.af.auth.subscribe(auth => {
            if(auth) {
                this.nav.setRoot(HomePage);
            }
        });
    }

    public NodeList



    public createAccount() {
        this.nav.push(RegisterPage);
    } //createAccount



    public login(formData) {
        if(formData.valid) {
            console.log(formData.value);
            this.af.auth.login({
                email: formData.value.email,
                password: formData.value.password
            },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            }).then(
                (success) => {
                    console.log(success);
                    this.nav.setRoot(HomePage)
            }).catch(
            (err) => {
                this.showError(err);
            })
        }
    } //login




    showError(text) {
        let alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    } //showError



    ionViewDidLoad() {
        console.log('ionViewDidLoad Login');
    }

}
