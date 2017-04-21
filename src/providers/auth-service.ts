import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

//Firebase
import { AngularFireAuth } from "angularfire2/angularfire2";




export class User {
    name: string;
    email: string;

    constructor(name: string, email:string) {
        this.name = name;
        this.email = email;
    }
} //User



@Injectable()
export class AuthService {
    currentUser: User;
    public fireAuth: any;
    public userProfile: any;

    constuctor() {
        this.fireAuth = firebase.auth();
        this.userProfile = firebase.database().ref('/userProfile');
    }



    // public login(credentials) {
    //     // if (credentials.email == null || credentials.password == null) {
    //     //     return Observable.throw("Please insert credentials");
    //     // }
    //     // else {
    //     //     return Observable.create(observer => {
    //     //         // At this point make a request to your backend to make a real check!
    //     //         let access = (credentials.password === "pass" && credentials.email === "email");
    //     //         this.currentUser = new User('Simon', 'saimon@devdactic.com');
    //     //         observer.next(access);
    //     //         observer.complete();
    //     //     })
    //     // }
    //     return;
    // } //login



    // public register(credentials) {
    //     // if (credentials.email === null || credentials.password === null) {
    //     //     return Observable.throw("Please insert credentials");
    //     // } else {
    //     //     // At this point store the credentials to your backend!
    //     //     return Observable.create(observer => {
    //     //         observer.next(true);
    //     //         observer.complete();
    //     //     });
    //     // }
    //     return;
    // } //register



    // public getUserInfo() : User {
    //     return;
    //     // return this.currentUser;
    // } //getUserInfo



    // public logout() {
    //     // return Observable.create(observer => {
    //     // this.currentUser = null;
    //     //     observer.next(true);
    //     //     observer.complete();
    //     // });
    // } //logout
}
