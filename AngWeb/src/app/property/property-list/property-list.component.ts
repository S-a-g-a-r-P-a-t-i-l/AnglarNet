
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
Properties$: any;
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
