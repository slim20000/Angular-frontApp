import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AppService} from "../_services/app.service";
import {AppAuthService} from "../_services/app-auth.service";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    constructor(private appService: AppService,
                private appAuthService: AppAuthService,
                private router: Router,
                private toastr: ToastrService) {
    }

    ngOnInit(): void {

    }

  login(loginForm: NgForm) {
    this.appService.login(loginForm.value).subscribe(
      (response: any) => {
        this.appAuthService.setRole(response.user.role);
        this.appAuthService.setToken(response.token);
        this.appAuthService.setUserId(response.user.id.toString());

        const role = response.user.role;
        if (role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (role === 'CANDIDATE') {
          this.fetchAndNavigateCandidate(response.user.id);
        } else {
          this.router.navigate(['/company']);
        }
        this.toastr.success('Logged in successfully!');
      },
      (error) => {
        this.toastr.error('Login failed. Please try again.');
      }
    );
  }
    fetchAndNavigateCandidate(userId: any): void {
        this.appService.getCandidateByUserId().subscribe(
            (candidateData: any) => {
                this.router.navigate(['/create-candidate']);
            },
            (error) => {
                console.log("Error fetching candidate data:", error);
                this.router.navigate(['/create-candidate']);

            }
        );
    }
}
