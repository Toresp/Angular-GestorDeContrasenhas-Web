import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireBaseBdService {
  uid='';

  constructor(
    public db: AngularFireDatabase,
    ) { }
    updateUserData(user: any){
      const path = user.user?.uid;
      var fecha = new Date ();
      const fullfech = fecha.toString();
      const data = {
        ultima_conexion : fullfech
      }
      this.uid=user.user?.uid;
      this.db.object(path).update(data).catch(error => console.log(error));
    }
    getDatos(){
      const path = this.uid+'/contraseñas';
      return this.db.list(path).snapshotChanges();
  
    }
    
  }
