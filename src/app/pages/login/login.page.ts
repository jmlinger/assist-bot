import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonImg,
  IonIcon,
  IonRouterLink,
  IonList,
} from '@ionic/angular/standalone';
import { Component, OnInit, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonImg,
    IonIcon,
    IonRouterLink,
    IonList,
    RouterModule,
  ],
  providers: [{ provide: UserService, useClass: UserService }],
})
export class LoginPage implements OnInit {
  private service = inject(UserService);

  constructor() {}
  ngOnInit() {
    console.log('xablau');
  }

  criarUsuario() {}
}
