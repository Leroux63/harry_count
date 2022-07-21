import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarryCountComponent } from './page/harry-count/harry-count.component';
const routes: Routes = [
  { path: 'harry', component: HarryCountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
