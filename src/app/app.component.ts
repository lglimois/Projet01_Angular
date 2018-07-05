import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  //title = 'my awesome app';
  //isAuth = false;
  //lastUpdate = new Date();

  searchAppareil: string = '';
  secondes: number;
  counterSubscription: Subscription;

  constructor(){
    /*setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );*/
  }

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

  onButton2()
  {
    console.log('clic sur le 2!');
  }

}
