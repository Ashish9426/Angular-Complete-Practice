import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { ProductComponent } from './components/pages/product/product.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { AuthoGuard } from './authentication/autho.guard';
import { CardComponent } from './components/pages/card/card.component';
import { TableComponent } from './components/pages/table/table.component';
import { StylepropComponent } from './components/pages/styleprop/styleprop.component';
import { NgstyleComponent } from './components/pages/ngstyle/ngstyle.component';
import { ClassClassNameComponent } from './components/pages/class-class-name/class-class-name.component';
import { NgClassComponent } from './components/pages/ng-class/ng-class.component';
import { EventbindingComponent } from './components/pages/eventbinding/eventbinding.component';
import { CustomedirectiveComponent } from './components/pages/customedirective/customedirective.component';
import { ComponentdirectiveComponent } from './components/pages/componentdirective/componentdirective.component';
import { StructuraldirectiveComponent } from './components/pages/structuraldirective/structuraldirective.component';
import { AttributedirectiveComponent } from './components/pages/attributedirective/attributedirective.component';
import { PropertybindingComponent } from './components/pages/propertybinding/propertybinding.component';
import { BuiltinpipeComponent } from './components/pages/builtinpipe/builtinpipe.component';
import { CustompipeComponent } from './components/pages/custompipe/custompipe.component';
import { TicketBookingComponent } from './components/pages/ticket-booking/ticket-booking.component';
import { MobileRechargeComponent } from './components/pages/mobile-recharge/mobile-recharge.component';
import { PaymentTransferComponent } from './components/pages/payment-transfer/payment-transfer.component';
import { EmployeeComponent } from './components/pages/employee/employee.component';
import { EmployeeListComponent } from './components/pages/employee-list/employee-list.component';
import { EmployeeTODOComponent } from './components/pages/employee-todo/employee-todo.component';
import { EmployeedashboardComponent } from './components/pages/employeedashboard/employeedashboard.component';
import { TemplateDrivenFormComponent } from './components/pages/template-driven-form/template-driven-form.component';
import { ReativeFormComponent } from './components/pages/reative-form/reative-form.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'services', component:ServicesComponent, children:[
    {path:'', component:TicketBookingComponent},
    {path:'ticket-booking', component:TicketBookingComponent},
    {path:'mobile-recharge', component:MobileRechargeComponent},
    {path:'payment-transfer', component:PaymentTransferComponent}
  ]},
  {path:'product', component:ProductComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'card', component:CardComponent},
  {path:'table', component:TableComponent},
  {path:'styleprop', component:StylepropComponent},
  {path:'ngstyle', component:NgstyleComponent},
  {path:'classClassName', component:ClassClassNameComponent},
  {path:'ngClass', component:NgClassComponent},
  {path:'eventbinding', component:EventbindingComponent},
  {path:'propertybinding', component:PropertybindingComponent},
  {path:'attributedirective', component:AttributedirectiveComponent},
  {path:'structuraldirective', component:StructuraldirectiveComponent},
  {path:'componentdirective', component:ComponentdirectiveComponent},
  {path:'customedirective', component:CustomedirectiveComponent},
  {path:'builtinpipe', component:BuiltinpipeComponent},
  {path:'custompipe', component:CustompipeComponent},
  {path:'employee', component:EmployeeComponent, children:[
    {path:'', component:EmployeeListComponent},
    {path:'search-employee/:id', component:EmployeeListComponent}
  ]},
  {path:'employee-todo', component:EmployeeTODOComponent},
  {path:'template-driven-form', component:TemplateDrivenFormComponent},
  {path:'reactive-form', component:ReativeFormComponent},
  {path:'employeedashboard', component:EmployeedashboardComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthoGuard]},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
