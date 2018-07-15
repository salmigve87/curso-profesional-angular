
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'secondsToTimeFormat'
})
export class SecondsToTimeFormat implements PipeTransform{
    transform(seconds: number) : string {
        // 3600 => 1 hra
        // 3660 => 1hr 1min
        const hours = Math.floor(seconds / 3600);   
        const minutes = Math.floor(seconds % 3600 / 60);
        return `${hours}hrs ${minutes}mins`;
    }


}