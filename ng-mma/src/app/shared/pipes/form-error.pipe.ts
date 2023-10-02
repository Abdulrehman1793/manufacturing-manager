import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formError',
})
export class FormErrorPipe implements PipeTransform {
  transform(error: HttpErrorResponse, ...args: unknown[]): unknown {
    if (error) {
      if (error.status === HttpStatusCode.UnprocessableEntity) {
        let errors: { field: string; message: string }[] = error.error.errors;

        let result = errors
          .map((row) => {
            return `${this.titleCase(row.field)} ${row.message}`;
          })
          .join('<br />');

        return result;
      }

      return error.message;
    }

    return '';
  }

  titleCase(input: string): string {
    return input
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
