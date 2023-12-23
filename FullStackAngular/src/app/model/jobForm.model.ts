import { Data } from "@angular/router";

export interface jobForm{

    employee:{
        Id:number;
        MobileNumber:number;
            Name:string;
            FatherName:string;
            MotherName:string;
            Nid:number;
            DateOfBirth:Date;
            BirthPlace:string;
            Religion:string;
            BloodGroup:string;
            MaritalStatus:string;
            Email:string;
            address:{
                presentAddress:{
                        Village:string;
                        PostOffice:string;
                        PoliceStation:string;
                        District:string;   
                },
                parmanentAddress:{
                    Village:string;
                    PostOffice:string;
                    PoliceStation:string;
                    District:string; 
                }
            };

            InterviewDare:Date;
           AppliedPost:string;
          JoiningDate:Date;
          ExpectedSelary:number;
          AppliedBy:string;

          accademicQulifiction:{
            Degree:string;
           University:string;
          Instution:string;
          Major:string;
          Result:number;
            PassingYear:Date;
          };

          workExprience:{
    Post:string;
    Organization:string;
    JobLocation:string;
    Selary:number;
    ReportingTo:string;
    DefaultProduct:string;
          }


    }



//     Id:number;
//     MobileNumber:number;
//     Name:string;
//     FatherName:string;
//     MotherName:string;
//     Nid:number;
//     DateOfBirth:Date;
//     BirthPlace:string;
//     Religion:string;
//     BloodGroup:string;
//     MaritalStatus:string;
//     Email:string;
    

//     PaVillage:string;
//     PaPostOffice:string;
//     PaPoliceStation:string;
//     PaDistrict:string;
   

   
//     PeVillage:string;
//     PePostOffice:string;
//     PePoliceStation:string;
//     PeDistrict:string;
    

//    InterviewDare:Date;
//     AppliedPost:string;
//    JoiningDate:Date;
//     ExpectedSelary:number;
//     AppliedBy:string;

    
   
//     Degree:string;
//     University:string;
//     Instution:string;
//     Major:string;
//     Result:number;
//    PassingYear:Date;
  

  
//     Post:string;
//     Organization:string;
//     JobLocation:string;
//     Selary:number;
//     ReportingTo:string;
//     DefaultProduct:string;
   


}