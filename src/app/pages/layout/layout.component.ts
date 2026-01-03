import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { GlobalConstant } from '../../core/constants/Global.constant';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  toProfile() {
    throw new Error('Method not implemented.');
  }
  toBatch() {
    this.router.navigate(['/batch']);
  }
  toDashboard() {
    this.router.navigate(['/dashboard']);
  }

  router = inject(Router);

  ngOnInit(): void {}

  logOff() {
    localStorage.removeItem(GlobalConstant.LOGIN_KEY);
    alert('Logout Successfull');
    this.router.navigate(['login']);
  }
}
