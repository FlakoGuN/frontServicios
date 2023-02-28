import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'obToarr'
})
export class ObToarrPipe implements PipeTransform {
    transform(Object: any = []): any {
        return Object.values(Object);
    }
}