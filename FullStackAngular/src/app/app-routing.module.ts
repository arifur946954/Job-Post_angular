import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employees/employee-list/employee-list.component';
import { AddEmployeesComponent } from './component/employees/add-employees/add-employees.component';
import { EditEmployeeComponent } from './component/employees/edit-employee/edit-employee.component';
import { AddJobFormComponent } from './component/employees/add-job-form/add-job-form.component';

const routes: Routes = [
  {
    path:"",
    component:EmployeeListComponent
  },
  {
    path:"employees",
    component:EmployeeListComponent
  },
  {
    path:"employees/add",
    component:AddEmployeesComponent
  },
  {
    path:"employees/edit/:id",
    component:EditEmployeeComponent
  },
  {
    path:"employees/jobForm",
    component:AddJobFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
