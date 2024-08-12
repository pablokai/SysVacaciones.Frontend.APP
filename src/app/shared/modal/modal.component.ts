import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  
  public modalSwitch: boolean = false;
  public mensaje : string = 'dsddddddds';
  public textoBoton : string = 'dsd';
  public estado : boolean = true;

  openModal(){
    this.modalSwitch = true;
  }

  closeModal(){
    this.modalSwitch = false;
  }
}
