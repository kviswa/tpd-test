import { AuthService } from './../../app/auth.service';

import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ListService } from '../../app/list.service';
import { List } from '../../app/list.model';


@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})

export class AddPage {

  todoItem: List;
  categories : any;


  constructor( private alertCtrl: AlertController,
				private navCtrl: NavController, 
  			 private navParams: NavParams,
			   private listService: ListService,
			private authService: AuthService) {

			//console.log("New entry");
			this.todoItem = {
				id: 0,
				date: '',
				author: this.authService.username,
				title: '',
				category: '',
				detail: '',
				priv: '',
				status:'',
				num_likes: 0,
				num_helps: 0,
				image: false
			};
		}
  

 
  onSave() 
  {
  	if (this.todoItem.id) {
		console.log("OnSave: Update ", this.todoItem);
  		this.listService.updateList(this.todoItem);
  	} else {
		  //new list item
		  console.log("OnSave: Add", this.todoItem);
  		this.listService.addList(this.todoItem);
  	}
  	this.navCtrl.pop();
  }

} // class
