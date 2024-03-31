import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonImg, IonIcon, IonRouterLink } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonImg, IonIcon, IonRouterLink, RouterModule]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('xablau');

  }

}
