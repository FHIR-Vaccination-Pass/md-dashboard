import { Location } from '../models/Location';

export const MockLocations = new Map<string, Location>([
  [
    'location1',
    {
      id: 'location1',
      country: 'Germany',
      state: 'Bavaria',
      administrativeDistrict: 'Munich',
    },
  ],
]);
