import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-help-desk',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './help-desk.component.html',
  styleUrl: './help-desk.component.css'
})
export class HelpDeskComponent {
  helpDeskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.helpDeskForm = this.fb.group({
      name: [''],
      prnNo: [''],
      department: [''],
      email: [''],
      title: [''],
      description: ['']
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.helpDeskForm.value);
  }

  onCancel() {
    this.helpDeskForm.reset();
  }
}
