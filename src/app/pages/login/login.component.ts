import { Component, inject, Inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { InternalService } from '../../core/service/internal.service';
import { GlobalConstant } from '../../core/constants/Global.constant';

@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);

  apiUrl = 'https://feestracking.freeprojectapi.com/api/BatchUser/login';
  
  loginObject: any = {
    email : '',
    password : ''
  };
  constructor(
    private readonly internalService: InternalService
  ) {}

  loginCheck() {
    this.internalService.getCandidateId(this.loginObject).subscribe({
      next: (resp:any) => {
        console.log(resp);
        localStorage.setItem(GlobalConstant.LOGIN_KEY, JSON.stringify(resp.data));
        if(resp.result) {
          window.alert(resp.message)
          this.router.navigate(['/dashboard']);
        }
        }, error: (err:any) => {
      
          window.alert(err.message)
      }
    })

  }

  

  
}


