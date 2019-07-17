import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAComponent } from './components/bank-a/bank-a.component';
import { BankBComponent } from './components/bank-b/bank-b.component';
import { BankCComponent } from './components/bank-c/bank-c.component';
import { BankDComponent } from './components/bank-d/bank-d.component';

const routes: Routes = [
  { path: 'bankA',   component: BankAComponent, pathMatch: 'full' },
  { path: 'bankB',   component: BankBComponent, pathMatch: 'full' },
  { path: 'bankC',   component: BankCComponent, pathMatch: 'full' },
  { path: 'bankD',   component: BankDComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
