import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CrisisEvaluationRequest {
  transcript: string;
}

export interface CrisisEvaluationResponse {
  riskLevel: 'HIGH' | 'MEDIUM' | 'LOW';
  primaryEmotion: string;
  deEscalationScript: string;
  requiresEmergencyUI: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CrisisEvaluationService {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://crisis-backend.onrender.com/api/evaluate';

  evaluate(transcript: string): Observable<CrisisEvaluationResponse> {
    return this.http.post<CrisisEvaluationResponse>(this.API_URL, { transcript });
  }
}