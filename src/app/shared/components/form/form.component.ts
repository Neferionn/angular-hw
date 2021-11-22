/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormInput } from '../../models/form';
import { FormService } from '../../services/form.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  formData: FormInput | null = null;

  constructor(private formService: FormService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  getFormParam(str: string): AbstractControl | null {
    return this.form.get(str);
  }

  getParamError(str: string): ValidationErrors | null | undefined {
    return this.form.get(str)?.errors;
  }

  showError(str: string, fieldName: string): string {
    return this.formService.showErrorMsg(this.getParamError(str)!, fieldName);
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = this.formData;

    this.dialog.open(ModalComponent, dialogConfig);
  }

  submitForm(): void {
    this.formData = this.form.value;
    this.openDialog();
  }
}
