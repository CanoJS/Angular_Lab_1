import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from './components/modal/modal';

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

  search(event:any){

    const query = event.target.value;

    if(!query) return;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(res => res.json())
    .then(data => {

      this.meals = data.meals || [];

    });

  }

  openModal(meal:any){

    this.selectedMeal = meal;

  }

  closeModal(){

    this.selectedMeal = null;

  }

}