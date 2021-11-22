import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location';
import { LocationsService } from '../../services/locations.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  locations: Location[] = [];
  constructor(private LocationService: LocationsService) {}

  ngOnInit(): void {
    this.locations = this.LocationService.getLocations();
  }
}
