import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'InstagramClone';

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyBL0ccALLzyDVs1cWM8NRuXkWlFk4_c65Q',
      authDomain: 'jta-instagram-clone-abcd1.firebaseapp.com',
      projectId: 'jta-instagram-clone-abcd1',
      storageBucket: 'jta-instagram-clone-abcd1.appspot.com',
      messagingSenderId: '1019449559147',
      databaseURL: 'https://jta-instagram-clone-abcd1-default-rtdb.firebaseio.com/',
      appId: '1:1019449559147:web:78907db0a3735bad69492e',
      measurementId: 'G-Z2HSC0SV2V',
    };

    firebase.initializeApp(firebaseConfig);
  }
}
