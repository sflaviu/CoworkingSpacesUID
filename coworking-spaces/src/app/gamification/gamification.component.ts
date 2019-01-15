import { Component, OnInit } from '@angular/core';
import { Strategy } from '../model/gamification-strategy';
import { TouchSequence } from 'selenium-webdriver';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gamification',
  templateUrl: './gamification.component.html',
  styleUrls: ['./gamification.component.css']
})
export class GamificationComponent implements OnInit {

  strategies: Strategy[] = [];
  selectedStrategy: Strategy;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.strategies.push({ id: 1, title: "apps",  description: "apps", 
    reward: "", startDate: "", endDate: ""});
    this.strategies.push({ id: 1, title: "games",  description: "apps", 
    reward: "", startDate: "", endDate: ""});
    this.strategies.push({ id: 1, title: "movies",  description: "apps", 
    reward: "", startDate: "", endDate: ""});
    this.strategies.push({ id: 1, title: "books",  description: "apps", 
    reward: "", startDate: "", endDate: ""});
    this.strategies.push({ id: 1, title: "newspapers",  description: "apps", 
    reward: "", startDate: "", endDate: ""});
    console.log(this.strategies);
    this.selectedStrategy = this.strategies[0];
  }

  addNew() {
      this.selectedStrategy = 
      { id: 1, title: "New Strategy",  description: "", 
    reward: "", startDate: "", endDate: ""}
  }

  save(){
   if(this.strategies.find(x=> x == this.selectedStrategy) == undefined ) {
      this.strategies.push(this.selectedStrategy);
   }
   this.toastr.success("Saved");
  }

  onStrategyChanged(strategy: Strategy) {
    console.log(strategy);
    this.selectedStrategy = strategy;
  }

}
