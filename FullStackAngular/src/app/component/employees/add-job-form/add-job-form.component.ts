import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jobForm } from 'src/app/model/jobForm.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-job-form',
  templateUrl: './add-job-form.component.html',
  styleUrls: ['./add-job-form.component.css']
})
//export class AddJobFormComponent implements OnInit {
export class AddJobFormComponent implements OnInit{
  addJobFormRequest:any={
    
    Id:0,
    MobileNumber:0,
    Name:'',
    FatherName:'',
    MotherName:'',
    Nid:0,
    DateOfBirth: new Date,
    BirthPlace:'',
    Religion:'',
    BloodGroup:'',
    MaritalStatus:'',
    Email:'',

    address:{
     presentAddress:{
      Village:'',
      PostOffice:'',
      PoliceStation:'',
      District:''
     },
     parmanentAddress:{
      Village:'',
      PostOffice:'',
      PoliceStation:'',
      District:''
     },

     InterviewDare:new Date,
    AppliedPost:'',
    JoiningDate:new Date,
    ExpectedSelary:0,
     AppliedBy:'',

     //accademic qulification
     accademicQulifiction:{
      Degree:'',
      University:'',
      Instution:'',
      Major:'',
      Result:0,
      PassingYear:new Date,
     },
     workExprience:{
      Post:'',
      Organization:'',
      JobLocation:'',
      Selary:0,
      ReportingTo:'',
      DefaultProduct:''
     }
    }
    

  

  };

  constructor(private AddJobService:EmployeesService,private router:Router) { }

  ngOnInit(): void {
  }

  addJobFormCompo(){
    this.AddJobService.addJobForm(this.addJobFormRequest)
    .subscribe({
      next:(jobforparam)=>{
              console.log("Something is worng",jobforparam);
            this.router.navigate(['employee']);
         }
       })

    }
   
   
  }

  // addJobFormRepo(){
  //   this.AddJobService.addJobForm(this.addJobFormRequest)
  //   .subscribe({
  //     next:(jobforparam)=>{
  //       console.log(jobforparam);
  //       //this.router.navigate(['employee']);
  //     }
  //   })
  // }


