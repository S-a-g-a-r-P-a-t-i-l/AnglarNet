
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { catchError, Observable, of } from 'rxjs';
import { IProperty } from '../IProperty.Interface';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  Properties$: Observable<IProperty[]> = of([]);
constructor(private housingService : HousingService){}
  ngOnInit(): void {
    this.Properties$ = this.housingService.getAllProperties().pipe(
      catchError(error => {
        console.error('Error fetching properties:', error);
        return of([]);
      })
    );
  }

}
