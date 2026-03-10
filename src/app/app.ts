import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from './components/modal/modal';
import { MealService } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Modal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  meals:any[] = [];
  selectedMeal:any = null;

  constructor(private mealService: MealService){}

  async search(event:any){

    const query = event.target.value;

    if(!query) return;

    this.meals = await this.mealService.searchMeals(query);

  }

  openModal(meal:any){
    this.selectedMeal = meal;
  }

  closeModal(){
    this.selectedMeal = null;
  }

}