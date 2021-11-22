import { Location } from '../models/location';

export class LocationsService {
  locations: Location[] = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1635928179615-565d1de5df50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Biarritz, France',
      date: new Date('2021-11-17T15:25:24.3009894'),
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1636469503004-9f5bab58560c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      name: 'Fivizzano, Italy',
      date: new Date('2021-12-15T20:20:24.3009894'),
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1635870933541-8b392135c75a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      name: 'Holy Hill, Erin, WI, USA',
      date: new Date('2021-10-17T16:40:24.3009894'),
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1626169740183-702d6421beeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Sörg, Austria',
      date: new Date('2021-10-10T10:20:24.3009894'),
    },
  ];

  getLocations(): Location[] {
    return this.locations;
  }
}
