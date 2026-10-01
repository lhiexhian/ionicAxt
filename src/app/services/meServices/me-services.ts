import { Injectable } from '@angular/core';
import { Me } from '../../attributes/me';

@Injectable({
  providedIn: 'root'
})
export class MeService {
  private profileData: Me = {
    img: '../../../assets/avatar/lhie.jpg',
    name: 'Lhie Xhian',
    uName: '@lhie_',
    email: 'lhiexhian@gmail.com.com',
    address: '123 Four-Five St., Gotham City'
  };

  constructor() {}

  getProfile(): Me {
    return this.profileData;
  }
}
