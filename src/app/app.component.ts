import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedItem = "";

  setSelected(name: string) {
    console.log(name);
    this.selectedItem = name;
  }

  ngOnInit() {
    this.selectedItem = "main";
  }
}
