import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchPage } from '../pages/search/search';
import { ChatPage } from '../pages/chat/chat';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
	declarations: [
		MyApp,
		AboutPage,
		AccountPage,
		HomePage,
		TabsPage,
		SearchPage,
		ChatPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		Ionic2RatingModule 
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		AboutPage,
		AccountPage,
		HomePage,
		TabsPage,
		SearchPage,
		ChatPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
