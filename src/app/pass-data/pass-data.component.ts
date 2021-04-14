import { Component, OnInit } from '@angular/core';
import { FireBaseBdService } from '../fire-base-bd.service';
import {DecryptService} from '../decrypt.service';

@Component({
  selector: 'app-pass-data',
  templateUrl: './pass-data.component.html',
  styleUrls: ['./pass-data.component.scss']
})
export class PassDataComponent implements OnInit {
  data : any = [];
  Hidden : Boolean =true;

  constructor(
    public bd : FireBaseBdService,
    public decrypt : DecryptService,
    ) { }

  ngOnInit(): void {
    this.bd.getDatos().subscribe(snap => {
      this.data = [];
      snap.forEach(u => {
        const pass : any = u.payload.val();
        pass.key =u.key;
        this.data.push(this.decrypt.decrypt(pass));
      })
      console.log('data: ', this.data);
    });
  }
  hide(){
    this.Hidden = !this.Hidden;    
    

  }

}
