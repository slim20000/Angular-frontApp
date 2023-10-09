import { Component, Input,OnInit } from '@angular/core';
import {AppAuthService} from "../_services/app-auth.service";
import {AppService} from "../_services/app.service";
import {Router} from "@angular/router";
import {CompanyDetails} from "../company/company";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  companyDetails: CompanyDetails | null;
  companyId: string | null = null;
  constructor(
    private appAuthService: AppAuthService,
    private router: Router,
    public appService: AppService
  ) {}

  ngOnInit(): void {
    this.companyId = localStorage.getItem('companyId');

  }
  redirectToCreateJob() {
    if (this.companyDetails && this.companyDetails.companyId) {
      console.log('companyId:', this.companyDetails.companyId);
      this.router.navigate(['/create-job', this.companyDetails.companyId]);
    } else {
      console.log('companyId is undefined or null.');
    }
  }
  public isLoggedIn() {
    return this.appAuthService.isLoggedIn();
  }

  public logout() {
    this.appAuthService.clear();
    this.router.navigate(['/home']);
  }
}
