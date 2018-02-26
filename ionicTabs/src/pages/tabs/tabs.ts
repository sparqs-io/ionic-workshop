import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor() {
    this.tab1 = AboutPage;
    this.tab2 = ContactPage;
    this.tab3 = HomePage;
  }
}
