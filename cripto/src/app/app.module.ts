import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { MarketHomeComponent } from './component/market-home/market-home.component';
import { MarketChartComponent } from './component/market-chart/market-chart.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component'; // <- Create this component

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'market', component: MarketHomeComponent },
  { path: 'chart/:id', component: MarketChartComponent },

  // Must be the last route
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
