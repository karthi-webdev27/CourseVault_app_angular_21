import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { InternalService } from '../../core/service/internal.service';

@Component({
  selector: 'app-batch',
  imports: [],
  templateUrl: './batch.component.html',
  styleUrl: './batch.component.css',
})
export class BatchComponent {
  formList: any;

  constructor(private readonly internalService: InternalService) {}

  onSubmitForm(payload: any) {
    this.internalService.createBatches(payload).subscribe({
      next: (resp: any) => {
        this.formList = resp.data;
      },
      error: () => {},
    });
  }
}
