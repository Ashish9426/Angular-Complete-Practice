import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductComponent } from './components/pages/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CardComponent } from './components/pages/card/card.component';
import { TableComponent } from './components/pages/table/table.component';
import { StylepropComponent } from './components/pages/styleprop/styleprop.component';
import { NgstyleComponent } from './components/pages/ngstyle/ngstyle.component';
import { ClassClassNameComponent } from './components/pages/class-class-name/class-class-name.component';
import { NgClassComponent } from './components/pages/ng-class/ng-class.component';
import { EventbindingComponent } from './components/pages/eventbinding/eventbinding.component';
import { AttributedirectiveComponent } from './components/pages/attributedirective/attributedirective.component';
import { StructuraldirectiveComponent } from './components/pages/structuraldirective/structuraldirective.component';
import { ComponentdirectiveComponent } from './components/pages/componentdirective/componentdirective.component';
import { CustomedirectiveComponent } from './components/pages/customedirective/customedirective.component';
import { PropertybindingComponent } from './components/pages/propertybinding/propertybinding.component';
import { ChangebgDirective } from './tools/utils/changebg.directive';
import { FormatgenderPipe } from './tools/utils/formatgender.pipe';
import { BuiltinpipeComponent } from './components/pages/builtinpipe/builtinpipe.component';
import { CustompipeComponent } from './components/pages/custompipe/custompipe.component';
import { FormatnamePipe } from './tools/utils/formatname.pipe';
import { MobileRechargeComponent } from './components/pages/mobile-recharge/mobile-recharge.component';
import { TicketBookingComponent } from './components/pages/ticket-booking/ticket-booking.component';
import { PaymentTransferComponent } from './components/pages/payment-transfer/payment-transfer.component';
import { EmployeeComponent } from './components/pages/employee/employee.component';
import { EmployeeListComponent } from './components/pages/employee-list/employee-list.component';
import { EmployeeTODOComponent } from './components/pages/employee-todo/employee-todo.component';
import { FilterEmployeePipe } from './tools/pips/filter-employee.pipe';
import { EmployeedashboardComponent } from './components/pages/employeedashboard/employeedashboard.component';
import { TemplateDrivenFormComponent } from './components/pages/template-driven-form/template-driven-form.component';
import { ReativeFormComponent } from './components/pages/reative-form/reative-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    LoginComponent,
    RegistrationComponent,
    ServicesComponent,
    PagenotfoundComponent,
    ProductComponent,
    DashboardComponent,
    CardComponent,
    TableComponent,
    StylepropComponent,
    NgstyleComponent,
    ClassClassNameComponent,
    NgClassComponent,
    EventbindingComponent,
    AttributedirectiveComponent,
    StructuraldirectiveComponent,
    ComponentdirectiveComponent,
    CustomedirectiveComponent,
    PropertybindingComponent,
    ChangebgDirective,
    FormatgenderPipe,
    BuiltinpipeComponent,
    CustompipeComponent,
    FormatnamePipe,
    MobileRechargeComponent,
    TicketBookingComponent,
    PaymentTransferComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTODOComponent,
    FilterEmployeePipe,
    EmployeedashboardComponent,
    TemplateDrivenFormComponent,
    ReativeFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
