import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ServicesComponent } from './services/services.component';
import { TipsComponent } from './tips/tips.component';
import { FeaturedarticleComponent } from './featuredarticle/featuredarticle.component';
import { CheckComponent } from './check/check.component';
import { PlansComponent } from './plans/plans.component';
import { ComboComponent } from './combo/combo.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
{path: 'register', component:RegisterComponent},
{path: 'forgetpassword', component:ForgetpasswordComponent},
{path:'product',component:ProductComponent},
{path:'product/productdetail',component:ProductdetailComponent},
{path:'product/catalog',component:CatalogComponent},
{path:'services',component:ServicesComponent},
{path: 'tips', component:TipsComponent},
{path: 'tips', component:FeaturedarticleComponent}, 
{path:'check',component:CheckComponent},
{path:'combocatalog',component:PlansComponent},
{path:'combo',component:ComboComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
