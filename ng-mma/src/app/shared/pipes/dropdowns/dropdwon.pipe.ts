import { Pipe, PipeTransform } from '@angular/core';
import { KeyValuePair } from 'src/app/core/models';

@Pipe({
  name: 'lookup',
  standalone: true,
})
export class DropdownPipe implements PipeTransform {
  transform(value: unknown, content: KeyValuePair[] | null): unknown {
    return value ? content?.filter((row) => row.key === value)[0].value : '';
  }
}
