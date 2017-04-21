import { Component } from '@angular/core';
import { IonicPage, AlertController, ActionSheetController } from 'ionic-angular';

// Firebase
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'list-component',
  templateUrl: 'list-component.html'
})



export class ListComponent {
    drills: FirebaseListObservable<any>;

    constructor(
        private alertCtrl: AlertController,
        public actionSheetCtrl: ActionSheetController,
        public af: AngularFire
    ) {
        this.drills = af.database.list('/drills');
    }



    addDrill() {
      let prompt = this.alertCtrl.create({
        title: 'Song Name',
        message: "Enter a name for this new song you're so keen on adding",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.drills.push({
                title: data.title
              });
            }
          }
        ]
      });
      prompt.present();
    } //addDrill



    showOptions(drillId, drillTitle) {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'What do you want to do?',
        buttons: [
          {
            text: 'Delete Drill',
            role: 'destructive',
            handler: () => {
              this.removeDrill(drillId);
            }
          }, {
            text: 'Update title',
            handler: () => {
              this.updateDrill(drillId, drillTitle);
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    } //showOptions



    removeDrill(drillId: string){
        this.drills.remove(drillId);
    } //removeDrill



    updateDrill(drillId, drillTitle){
        let prompt = this.alertCtrl.create({
            title: 'Drill Name',
            message: "Update the name for this drill",
            inputs: [
              {
                name: 'title',
                placeholder: 'Title',
                value: drillTitle
              },
            ],
            buttons: [
              {
                text: 'Cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Save',
                handler: data => {
                  this.drills.update(drillId, {
                    title: data.title
                  });
                }
              }
            ]
        });
        prompt.present();
    } //updateDrill
}
