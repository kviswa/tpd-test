import { Component } from '@angular/core';

import { LifePage } from '../life/life';
import { BragPage } from '../brag/brag';
import { ProfilePage } from '../profile/profile';
import { WorkPage } from '../work/work';
 


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LifePage;
  tab2Root = BragPage;
  /*tab3Root = WorkPage;*/
  tab4Root = ProfilePage;

  constructor() {

  }        
}
