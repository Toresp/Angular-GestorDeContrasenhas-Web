import { Component,Input } from '@angular/core';
import { AuthService } from './auth.service';
import {FireBaseBdService} from './fire-base-bd.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'gestor-contrasenhas';
  constructor(public auth : AuthService,
              public bd : FireBaseBdService,
              private modalService: NgbModal,){

  }
  ngOnInit(): void {
    this.auth.auth.signOut();

  }
  open() {
    const modalRef = this.modalService.open(AppContent);
  }
}

@Component({
  selector: 'app-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">¿No tienes cuenta?</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <a href="https://drive.google.com/file/d/1iI-PvcQaSlE7DPnRRJbNJRawaHcSp3Po/view?usp=sharing" class="alert-link fade show">Descargar la app</a> 
      para crear una cuenta y empezar a guardar tus contraseñas ya!!.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class AppContent {
  @Input() name : any;

  constructor(public activeModal: NgbActiveModal) {}
}

