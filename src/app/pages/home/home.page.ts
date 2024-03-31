import { FormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonImg, IonIcon, IonText, IonSelect, IonSelectOption, IonModal, IonButtons } from '@ionic/angular/standalone';
import { TableModule } from 'primeng/table';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule, TableModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonImg, IonIcon, IonText, IonSelect, IonSelectOption, IonModal, IonButtons]

})
export class HomePage {
  @ViewChild(IonModal) modal: IonModal | undefined;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  question: string = '';
  years: Array<number> = []
  currentYear: number = new Date().getFullYear();
  panelButtons: Array<{title: string, icon: string}> = [
    {title: 'ADICIONAR', icon: 'ic--baseline-plus.svg'},
    {title: 'BUSCAR', icon: 'search-sharp.svg'},
    {title: 'FILTRAR', icon: 'mdi--filter.svg'},
    {title: 'AÇÕES', icon: 'mdi--gear.svg'},
  ]
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
      { field: 'Dezembro', header: 'Dezembro' }
    ],
    rows: [
     ['Receita', 1000, 2000, 3000, 4000, 5000, 5000, 5000, 5000, 5000, 5000, 400, 600],
     ['Despesa', 1000, 2000, 3000, 4000, 5000, 5000, 5000, 5000, 5000, 5000, 400, 600],
     ['Demonstrativo de Resultado', 1000, 2000, 3000, 4000, 5000, 5000, 5000, 5000, 5000, 5000, 400, 600],
     ['Variação do Exercício', 1000, 2000, 3000, 4000, 5000, 5000, 5000, 5000, 5000, 5000, 400, 600],
     ['Ativo', 1000, 2000, 3000, 4000, 5000, 5000, 5000, 5000, 5000, 5000, 400, 600],
     ['Passivo', 1000, 2000, 3000, 4000, 5000, 5000, 5000, 5000, 5000, 5000, 400, 600],
     ['Patrimônio Líquido', 1000, 2000, 3000, 4000, 5000, 5000, 5000, 5000, 5000, 5000, 400, 600],
     ['Variação', 1000, 2000, 3000, 4000, 5000, 5000, 5000, 5000, 5000, 5000, 400, 600],
     ['Auditoria Patrimonial', 1000, 2000, 3000, 4000, 5000, 5000, 5000, 5000, 5000, 5000, 400, 600],
    ]
  }

  constructor() {
    for(let i = this.currentYear - 6; i <= this.currentYear + 6; i++) {
      this.years.push(i);
    }
  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal?.dismiss(this.question, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
