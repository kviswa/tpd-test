import { AuthService } from './../../app/auth.service';
import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ListService } from '../../app/list.service';
import { List } from '../../app/list.model';


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})

export class DetailPage {

  todoItem: List;
  username;
  isLoggedIn;
   

  constructor( private alertCtrl: AlertController,
				private navCtrl: NavController, 
  			 private navParams: NavParams,
			   private listService: ListService,
			   private authService: AuthService) {

		// not reqd to retrieve from server again, ?
		// fix CORS err
		//const ListId = this.navParams.get('listId');
		/*
			if (ListId) {
				console.log("ListId:", ListId);
				this.listService.getList(ListId)
				.then(todo => this.todoItem = todo);
				//console.log(this.todoItem);
			} 
			else {
				console.log("Unexpected call");
			}
			*/
		this.todoItem = this.navParams.get('item');
		this.isLoggedIn = authService.isLoggedIn;
		this.username = authService.username;
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

    onTrash() {

			let confirm = this.alertCtrl.create({
				title: 'Delete ',
				message: `Are you sure you want to delete this list: "${this.todoItem.title}"?`,
				buttons:[
					{	text: 'Cancel'},
					{
						text: 'Confirm',
						handler: () => {
							this.listService.removeList(this.todoItem.id); 
							this.navCtrl.pop();
				    }
					},
				]
			});
			confirm.present();
	}
	
	onIconLikeClick(todo: List) {
		console.log("Icon like clicked",todo.title, todo.num_likes);
		todo.num_likes ++;
		this.listService.updateList(todo);
	}
  
	onIconCommentClick(todo: List) {
		console.log("Icon Comment clicked",todo.title, todo.num_helps);
		todo.num_helps ++;
		this.listService.updateList(todo);
	}
}
