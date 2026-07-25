import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrisisEvaluationService, CrisisEvaluationResponse } from './crisis-evaluation.service';

@Component({
  selector: 'app-crisis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crisis.component.html',
  styleUrls: ['./crisis.component.css']
})
export class CrisisComponent {
  private crisisService = inject(CrisisEvaluationService);

  transcript = signal<string>('');
  isLoading = signal<boolean>(false);
  result = signal<CrisisEvaluationResponse | null>(null);
  errorMessage = signal<string | null>(null);

  onSubmit() {
    if (!this.transcript().trim()) return;

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.result.set(null);

    this.crisisService.evaluate(this.transcript()).subscribe({
      next: (res) => {
        this.result.set(res);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to connect to the evaluation engine. Please try again or seek immediate local help.');
        this.isLoading.set(false);
      }
    });
  }

  reset() {
    this.transcript.set('');
    this.result.set(null);
    this.errorMessage.set(null);
  }
}