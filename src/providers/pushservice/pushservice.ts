 
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';
/*
  Generated class for the PushserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushserviceProvider {
  one_id: any;
  constructor(  private oneSignal: OneSignal, public platform: Platform) {
    console.log('Hello PushserviceProvider Provider');
  }

  init_notifications(){
    if(this.platform.is('cordova')){
      this.oneSignal.startInit('0f56fc8b-19d6-43b9-8486-b7bca94375db', '1076464367449');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
        console.log('Notificacion recivida');
        
      });
      this.oneSignal.getIds().then(ids=>{//player id del celular
        this.one_id = ids.userId
        console.log("entro one promesa");
        console.log(this.one_id);
      
        
      })
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log('Notificacion abierta');
      });

      this.oneSignal.endInit();
    }else{
      console.log('No corre en el navedador');
      
    }

  }

}
