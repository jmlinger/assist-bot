import { FormsModule } from '@angular/forms';
import { Component, ViewChild, viewChild } from '@angular/core';
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
  IonText,
  IonSelect,
  IonSelectOption,
  IonModal,
  IonButtons,
  IonList,
} from '@ionic/angular/standalone';
import { TableModule } from 'primeng/table';
import { OverlayEventDetail } from '@ionic/core/components';
import { UserService } from 'src/app/core/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonList,
    FormsModule,
    TableModule,
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
    IonText,
    IonSelect,
    IonSelectOption,
    IonModal,
    IonButtons,
  ],
})
export class HomePage {
  @ViewChild(IonModal) modal: IonModal | undefined;

  chatMessages: { name: string; message: string }[] = [];

  question: { name: string; message: string } = { name: 'User', message: '' };
  years: Array<number> = [];
  currentYear: number = new Date().getFullYear();
  panelButtons: Array<{ title: string; icon: string }> = [
    { title: 'ADICIONAR', icon: 'ic--baseline-plus.svg' },
    { title: 'BUSCAR', icon: 'search-sharp.svg' },
    { title: 'FILTRAR', icon: 'mdi--filter.svg' },
    { title: 'AÇÕES', icon: 'mdi--gear.svg' },
  ];
  table: any = {
    cols: [
      { field: '', header: '' },
      { field: 'Janeiro', header: 'Janeiro' },
      { field: 'Fevereiro', header: 'Fevereiro' },
      { field: 'Março', header: 'Março' },
      { field: 'Abril', header: 'Abril' },
      { field: 'Maio', header: 'Maio' },
      { field: 'Junho', header: 'Junho' },
      { field: 'Julho', header: 'Julho' },
      { field: 'Agosto', header: 'Agosto' },
      { field: 'Setembro', header: 'Setembro' },
      { field: 'Outubro', header: 'Outubro' },
      { field: 'Novembro', header: 'Novembro' },
      { field: 'Dezembro', header: 'Dezembro' },
    ],
    rows: [
      [
        'Receita',
        1000,
        2000,
        3000,
        4000,
        5000,
        5000,
        5000,
        5000,
        5000,
        5000,
        400,
        600,
      ],
      [
        'Despesa',
        1000,
        2000,
        3000,
        4000,
        5000,
        5000,
        5000,
        5000,
        5000,
        5000,
        400,
        600,
      ],
      [
        'Demonstrativo de Resultado',
        1000,
        2000,
        3000,
        4000,
        5000,
        5000,
        5000,
        5000,
        5000,
        5000,
        400,
        600,
      ],
      [
        'Variação do Exercício',
        1000,
        2000,
        3000,
        4000,
        5000,
        5000,
        5000,
        5000,
        5000,
        5000,
        400,
        600,
      ],
      [
        'Ativo',
        1000,
        2000,
        3000,
        4000,
        5000,
        5000,
        5000,
        5000,
        5000,
        5000,
        400,
        600,
      ],
      [
        'Passivo',
        1000,
        2000,
        3000,
        4000,
        5000,
        5000,
        5000,
        5000,
        5000,
        5000,
        400,
        600,
      ],
      [
        'Patrimônio Líquido',
        1000,
        2000,
        3000,
        4000,
        5000,
        5000,
        5000,
        5000,
        5000,
        5000,
        400,
        600,
      ],
      [
        'Variação',
        1000,
        2000,
        3000,
        4000,
        5000,
        5000,
        5000,
        5000,
        5000,
        5000,
        400,
        600,
      ],
      [
        'Auditoria Patrimonial',
        1000,
        2000,
        3000,
        4000,
        5000,
        5000,
        5000,
        5000,
        5000,
        5000,
        400,
        600,
      ],
    ],
  };

  constructor() {
    for (let i = this.currentYear - 6; i <= this.currentYear + 6; i++) {
      this.years.push(i);
    }
  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  // confirm() {
  //   // this.modal?.dismiss(this.question, 'confirm');
  // }

  sendMessage() {
    const newMessage = { ...this.question };

    if (newMessage.message.trim() !== '') {
      this.chatMessages.push(newMessage);
      this.question.message = '';
    }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.chatMessages[0].message = `Hello, ${ev.detail.data}!`;
    }
  }
}
