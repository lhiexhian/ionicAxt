import { Component, OnInit } from '@angular/core';
import { MeService } from '../../services/meServices/me-services';
import { Me } from '../../attributes/me';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
  standalone: false
})
export class MePage implements OnInit {
  public profile!: Me;

  constructor(private meService: MeService) {}

  ngOnInit() {
    this.profile = this.meService.getProfile();
  }
}
