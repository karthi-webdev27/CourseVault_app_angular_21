import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InternalService {

  https = inject(HttpClient);
  
  api_Url = 'https://feestracking.freeprojectapi.com/api/BatchUser/login';

  getCandidateId(payload:any) {
    return this.https.post(this.api_Url, payload);
  }

 
  
}
