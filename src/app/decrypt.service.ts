import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class DecryptService {
  private key = "QUVCUDE0NWFjaEB+JHNBQw=="

  constructor() { }

  decrypt(data : any){
    //CryptoJS.AES.decrypt(atob(data.password), CryptoJS.SHA256(key),CryptoJS.mode.CBC).toString(CryptoJS.enc.Utf8);
    var Pkey = CryptoJS.enc.Base64.parse(this.key);
    var Pdata = CryptoJS.enc.Base64.parse(data.password);


    data.password = CryptoJS.AES.decrypt(data.password, Pkey,{
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
    
    return data;
  }

}
