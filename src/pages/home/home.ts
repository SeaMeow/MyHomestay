import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	homes: any[] = [{ 
		user: 'user.jpg',
		image: 'homestay1',
		title: 'Border Jungle Home', 
		desc:'A house, your home, 15 minutes away from the twin towers, jungle at a walk distance. A place to share travel experiences...', 
		location: 'Ampang, Selangor', 
		price: 'MYR 65', 
		reviews:2, 
		rooms:2, 
		bathrooms: 2,
		accomodate:5,
		rate: 3
	},{ 
		user: "user2.jpeg",
		image: 'homestay2',
		title: 'Resort Apartment', 
		desc:'Small cosy single room which can sleeps 2 is ready for stay. Access to fully equipped and furnished common living room...', 
		location: 'Johor Bahru, Johor', 
		price: 'MYR 100', 
		reviews:5, 
		rooms:1, 
		bathrooms: 1,
		accomodate:2,
		rate: 4
	}]
	constructor(public navCtrl: NavController) {
	}

}
