import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ApiMethodConstant } from '../constants/Global.constant';

@Injectable({
  providedIn: 'root',
})
export class InternalService {
  https = inject(HttpClient);

  getCandidateId(payload: any) {
    return this.https.post(
      environment.API_URL +
        ApiMethodConstant.BATCH_USER +
        ApiMethodConstant.LOGIN,
      payload
    );
  }
}
