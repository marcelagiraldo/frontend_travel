import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl = 'https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=MUC&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL';

  constructor(private http: HttpClient) { }

  getFlightOffers(origin: string, destination: string, departureDate: string, adults: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer Apitravel.123'
      })
    };
    const url = `${this.baseUrl}?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=${adults}`;
    return this.http.get(url, httpOptions);
  }
}
