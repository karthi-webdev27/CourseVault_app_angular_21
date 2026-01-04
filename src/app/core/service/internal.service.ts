import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ApiMethodConstant } from '../constants/Global.constant';

@Injectable({
  providedIn: 'root',
})
export class InternalService {
  https = inject(HttpClient);

  getCandidateDetails(payload: any) {
    return this.https.post(
      environment.API_URL +
        ApiMethodConstant.batch_user.BATCH_USER +
        ApiMethodConstant.batch_user.LOGIN,
      payload
    );
  }

  createBatches(payload: any) {
    return this.https.post(
      environment.API_URL + ApiMethodConstant.batches.BATCHES,
      payload
    );
  }
}
