import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'event', component: EventComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
