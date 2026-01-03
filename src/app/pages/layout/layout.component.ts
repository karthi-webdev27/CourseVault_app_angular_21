import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  
  router = inject(Router);
  
  ngOnInit(): void {
  }

  logOff() {
    localStorage.removeItem('login_key');
    alert('Logout Successfull')
    this.router.navigate(['login']);
  }
}
