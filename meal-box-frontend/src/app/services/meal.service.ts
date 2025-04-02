import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = `${environment.apiUrl}/meals`;  // API URL defined in environment

  constructor(private http: HttpClient) { }

  // Get all meals from the backend
  getMeals() {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Book a meal based on its ID
  bookMeal(mealId: number) {
    return this.http.post(`${this.apiUrl}/book`, { mealId });
  }
}
