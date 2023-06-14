import { Pipe, PipeTransform } from '@angular/core';
    
    
    /**
     * Sanitize HTML
     */
    @Pipe({
      name: 'safe'
    })
    export class SafePipe implements PipeTransform {
     
    }