import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ButtonsComponent} from './buttons/buttons.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {CompanyComponent} from './company/company.component';
import {LoginComponent} from './login/login.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';

import {RouterModule} from "@angular/router";
import {AuthGuard} from './_auth/auth.guard';
import {AuthInterceptor} from './_auth/auth.interceptor';
import {AppService} from "./_services/app.service";
import {RegisterComponent} from './register/register.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {PdfDownloadComponent} from './file-download/pdf-download/pdf-download.component';
import {ImageDownloadComponent} from './file-download/image-download/image-download.component';
import {CommonModule, DatePipe, KeyValuePipe} from '@angular/common';
import {CandidateComponent} from "./candidat/candidat.component";
import {CreateCandidateComponent} from "./candidat/create-candidate/create-candidate.component";
import {UpdateCandidateComponent} from "./candidat/candidate-update/candidate-update.component";
import {CompanyCreateComponent} from './company/company-create/company-create.component';
import {CompanyGetComponent} from './company/company-get/company-get.component';
import {JobGetComponent} from './company/job-get/job-get.component';
import {JobCreateComponent} from './company/job-create/job-create.component';
import {JobGetByCompanyIdComponent} from './company/job-get-by-company-id/job-get-by-company-id.component';
import {FilterJobsPipe} from "./company/company-get/filter-jobs.pipe";
import {JobApplicationListComponent} from './application/job-application-list/job-application-list.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HomeComponent,
    AdminComponent,
    CompanyComponent,
    LoginComponent,
    ForbiddenComponent,
    HeaderComponent,
    RegisterComponent,
    CandidateComponent,
    CreateCandidateComponent,
    FileUploadComponent,
    PdfDownloadComponent,
    ImageDownloadComponent,
    UpdateCandidateComponent,
    CompanyCreateComponent,
    CompanyGetComponent,
    JobGetComponent,
    JobCreateComponent,
    JobGetByCompanyIdComponent,
    FilterJobsPipe,
    JobApplicationListComponent,
  ],
  imports: [BrowserModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxExtendedPdfViewerModule,

    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatSelectModule],

  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AppService, DatePipe, KeyValuePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
