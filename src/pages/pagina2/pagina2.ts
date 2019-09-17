import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ir_pagina3(){
    this.navCtrl.push('mi-pagina3');
  }

  ionViewDidLoad(){
    console.log('ionviewdidload');
  }

  ionViewWillEnter(){
    console.log('ionviewillenter');
  }

  ionViewDidEnter(){
    console.log('ionviewdidenter');
  }

  ionViewWillLeave(){
    console.log('ionviewwillleave');
  }

  ionViewDidLeave(){
    console.log('ionviewdidleave');
  }

  ionViewWillUnload(){
    console.log('ionviewwillunload');
  }

  ionViewCanEnter(){
    console.log('ionviewcanenter');
  }

  ionViewCanLeave(){
    console.log('ionviewcanleave');
  }
}
