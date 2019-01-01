import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bodyParts: Observable<any[]>;
  muscles: Observable<any[]>;

  constructor(
    db: AngularFirestore,
  ) {
    this.bodyParts = db.collection('/body-parts').valueChanges();
    this.muscles = db.collection('/muscles').valueChanges();
  }
}
