import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"employees",component:EmployeeListComponent},
  {path:"create",component:CreateEmployeeComponent},
  {path:"employee/update/:id",component:UpdateEmployeeComponent },
  {path:"employee/details/:id",component:EmployeeDetailsComponent},
  {path:"",redirectTo:"employees",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
