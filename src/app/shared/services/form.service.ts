/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  errorMsgMap = new Map([
    ['required', (fieldName: string) => `${fieldName} is required.\n`],
    [
      'minlength',
      (fieldName: string) =>
        `${fieldName} should be minimum 3 characters long.\n`,
    ],
    [
      'maxlength',
      (fieldName: string) =>
        `${fieldName} should be maximum 30 characters long.\n`,
    ],
    [
      'email',
      (fieldName: string) =>
        `${fieldName} should contain @ e.g user@mail.com\n`,
    ],
    ['pattern', (fieldName: string) => `${fieldName} should be a number.\n`],
  ]);

  showErrorMsg(error: ValidationErrors, fieldName: string): string {
    return Object.keys(error).reduce((acc, item) => {
      return (acc += `${this.errorMsgMap.get(item)!(fieldName)}`);
    }, ' ');
  }
}
