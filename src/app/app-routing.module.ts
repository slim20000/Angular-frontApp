import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CandidateComponent} from './candidat/candidat.component';
import {AdminComponent} from './admin/admin.component';
import {CompanyComponent} from './company/company.component';
import {LoginComponent} from './login/login.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {AuthGuard} from "./_auth/auth.guard";
import {RegisterComponent} from "./register/register.component";
import {CreateCandidateComponent} from "./candidat/create-candidate/create-candidate.component";
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {PdfDownloadComponent} from "./file-download/pdf-download/pdf-download.component";
import {ImageDownloadComponent} from "./file-download/image-download/image-download.component";
import {UpdateCandidateComponent} from "./candidat/candidate-update/candidate-update.component";
import {CompanyCreateComponent} from "./company/company-create/company-create.component";
import {CompanyGetComponent} from "./company/company-get/company-get.component";
import {JobCreateComponent} from "./company/job-create/job-create.component";
import {JobGetByCompanyIdComponent} from "./company/job-get-by-company-id/job-get-by-company-id.component";
import {JobGetComponent} from "./company/job-get/job-get.component";
import {JobApplicationListComponent} from "./application/job-application-list/job-application-list.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data:{role:'ADMIN'} },
  { path: 'candidate', component: CandidateComponent , canActivate: [AuthGuard], data:{role:'CANDIDATE'} },
  { path: 'create-candidate', component: CreateCandidateComponent , canActivate: [AuthGuard], data:{role:'CANDIDATE'} },
  { path: 'company', component: CompanyComponent, canActivate: [AuthGuard], data:{role:'COMPANY'} },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'upload', component: FileUploadComponent },
  { path: 'downloadPDF', component: PdfDownloadComponent },
  { path: 'downloadImage', component: ImageDownloadComponent },
  { path: 'updatecandidate', component: UpdateCandidateComponent },
  { path: 'createCompany', component: CompanyCreateComponent , canActivate: [AuthGuard], data:{role:'COMPANY'}},
  { path: 'getCompany', component: CompanyGetComponent , canActivate: [AuthGuard], data:{role:'COMPANY'} },
  { path: 'create-job/:companyId', component: JobCreateComponent , canActivate: [AuthGuard], data:{role:'COMPANY'}},
  { path: 'getAlljobsCompany/:companyId', component: JobGetByCompanyIdComponent , canActivate: [AuthGuard], data:{role:'COMPANY'} },
  { path: 'AllJobs', component: JobGetComponent },
  {path: 'applications/:jobId', component: JobApplicationListComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
