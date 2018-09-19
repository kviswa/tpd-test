import { AddPage } from './../add/add';
import { AuthService } from './../../app/auth.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { List } from '../../app/list.model';
import { ListService } from '../../app/list.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-life',
  templateUrl: 'life2.html'
})

export class LifePage {

  todoList: List[];
  isLoggedIn ;
  username ;
  message;
  

  constructor(private navCtrl: NavController,
        private listService: ListService,
      private authService : AuthService) {

        this.isLoggedIn = authService.isLoggedIn;
        //this.isLoggedIn = false;
        this.username = authService.username;
      }
        
   ionViewWillEnter() {
     
    //console.log(this.todoList);
    this.listService.getAllList()
    .then(todoList =>  this.todoList = todoList);
   }
   
  setStatus()
  {
    console.log("Setting status:", this.message);
  
    this.listService.updateMessasge(this.message);
  }
  
  onAddClick()
  {
  	console.log("Add clicked");
  	this.navCtrl.push(AddPage);
  }

  onItemClick(todo: List) {
      console.log("Item clicked",todo);
  	  this.navCtrl.push(DetailPage, {
        // listId:  todo.id 
        item: todo
  	  });
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
