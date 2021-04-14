import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PassDataComponent} from './pass-data/pass-data.component';
const routes: Routes = [
  {path:'loggedUser', component : PassDataComponent},
  {path:'',component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
