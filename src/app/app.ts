import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealService } from './services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

  meals:any[] = [];
  selectedMeal:any = null;

  currentPage = 1;
  pageSize = 3;

  constructor(private mealService: MealService){}

  async search(event:any){

    const query = event.target.value;

    if(!query) return;

    this.meals = await this.mealService.searchMeals(query);

    this.currentPage = 1;

  }

  get paginatedMeals(){

    const start = (this.currentPage - 1) * this.pageSize;

    return this.meals.slice(start, start + this.pageSize);

  }

  next(){

    const maxPage = Math.ceil(this.meals.length / this.pageSize);

    if(this.currentPage < maxPage){
      this.currentPage++;
    }

  }

  prev(){

    if(this.currentPage > 1){
      this.currentPage--;
    }

  }

  openModal(meal:any){
    this.selectedMeal = meal;
  }

  closeModal(){
    this.selectedMeal = null;
  }

}