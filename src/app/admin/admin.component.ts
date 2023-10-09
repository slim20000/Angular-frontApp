import {Component, OnInit} from '@angular/core';
import {AppService} from "../_services/app.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements  OnInit{
  message:any;
  constructor(private appService: AppService) {
  }
  ngOnInit() {
    // this.adminAccess();
  }
  adminAccess(){
    this.appService.adminAccess().subscribe(
      (response) =>{
        console.log(response);
        this.message= response;
      },
      (error) =>{
        console.log(error)
      }
    )
  }
}
