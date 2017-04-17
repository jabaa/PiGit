"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const Observable_1 = require("rxjs/Observable");
const repository_details_service_1 = require("../services/repository-details.service");
let RepositoryDetailsComponent = class RepositoryDetailsComponent {
    constructor(activatedRoute, formBuilder, router, repositoryDetailsService) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.repositoryDetailsService = repositoryDetailsService;
        this.repositoryForm = this.formBuilder.group({
            id: '',
            name: ['', forms_1.Validators.required]
        });
    }
    ngOnInit() {
        this.activatedRoute.params
            .subscribe((params) => {
            if (params['id']) {
                this.repositoryDetailsService.getRepositoryDetails(params['id'])
                    .catch((err) => {
                    this.router.navigate(['']);
                    return Observable_1.Observable.throw(err + ': Repository not found');
                })
                    .subscribe((response) => {
                    this.repositoryForm.controls['id'].setValue(response._id);
                    this.repositoryForm.controls['name'].setValue(response.name);
                });
            }
        });
    }
    save() {
        if (this.repositoryForm.controls['id'].value) {
            let repository = {
                _id: this.repositoryForm.controls['id'].value,
                name: this.repositoryForm.controls['name'].value
            };
            this.repositoryDetailsService.updateRepositoryDetails(repository)
                .subscribe((response) => {
                if (response) {
                    this.router.navigate(['']);
                }
            });
        }
        else {
            let repository = {
                name: this.repositoryForm.controls['name'].value
            };
            this.repositoryDetailsService.createRepository(repository)
                .subscribe((response) => {
                if (response) {
                    this.router.navigate(['']);
                }
            });
        }
    }
};
RepositoryDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './repository-details.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router,
        repository_details_service_1.RepositoryDetailsService])
], RepositoryDetailsComponent);
exports.RepositoryDetailsComponent = RepositoryDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5LWRldGFpbHMvY29tcG9uZW50cy9yZXBvc2l0b3J5LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQWtEO0FBQ2xELDRDQUFpRTtBQUNqRSwwQ0FBb0U7QUFFcEUsZ0RBQTZDO0FBRTdDLHVGQUFrRjtBQU9sRixJQUFhLDBCQUEwQixHQUF2QztJQUlFLFlBQW9CLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLE1BQWMsRUFDZCx3QkFBa0Q7UUFIbEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ3BFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDM0MsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU07YUFDdkIsU0FBUyxDQUFDLENBQUMsTUFBYztZQUN4QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsd0JBQXdCLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUM3RCxLQUFLLENBQUMsQ0FBQyxHQUFRO29CQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDLENBQUM7cUJBQ0QsU0FBUyxDQUFDLENBQUMsUUFBb0M7b0JBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9ELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLElBQUk7UUFDVCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksVUFBVSxHQUErQjtnQkFDM0MsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUs7Z0JBQzdDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLO2FBQ2pELENBQUM7WUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDO2lCQUM5RCxTQUFTLENBQUMsQ0FBQyxRQUFpQjtnQkFDM0IsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksVUFBVSxHQUErQjtnQkFDM0MsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUs7YUFDakQsQ0FBQztZQUNGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7aUJBQ3ZELFNBQVMsQ0FBQyxDQUFDLFFBQWlCO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7Q0FDRixDQUFBO0FBdkRZLDBCQUEwQjtJQUp0QyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxxQ0FBcUM7S0FDbkQsQ0FBQztxQ0FLb0MsdUJBQWM7UUFDakIsbUJBQVc7UUFDaEIsZUFBTTtRQUNZLHFEQUF3QjtHQVAzRCwwQkFBMEIsQ0F1RHRDO0FBdkRZLGdFQUEwQiIsImZpbGUiOiJhcHAvcmVwb3NpdG9yeS1kZXRhaWxzL2NvbXBvbmVudHMvcmVwb3NpdG9yeS1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IFJlcG9zaXRvcnlEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JlcG9zaXRvcnktZGV0YWlscy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVwb3NpdG9yeURldGFpbHNJbnRlcmZhY2UgfSBmcm9tICcuLi9tb2RlbHMvcmVwb3NpdG9yeS1kZXRhaWxzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXBvc2l0b3J5LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvc2l0b3J5RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyByZXBvc2l0b3J5Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVwb3NpdG9yeURldGFpbHNTZXJ2aWNlOiBSZXBvc2l0b3J5RGV0YWlsc1NlcnZpY2UpIHtcclxuICAgIHRoaXMucmVwb3NpdG9yeUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXNcclxuICAgICAgLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgICAgICBpZiAocGFyYW1zWydpZCddKSB7XHJcbiAgICAgICAgICB0aGlzLnJlcG9zaXRvcnlEZXRhaWxzU2VydmljZS5nZXRSZXBvc2l0b3J5RGV0YWlscyhwYXJhbXNbJ2lkJ10pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcclxuICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIgKyAnOiBSZXBvc2l0b3J5IG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogUmVwb3NpdG9yeURldGFpbHNJbnRlcmZhY2UpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnJlcG9zaXRvcnlGb3JtLmNvbnRyb2xzWydpZCddLnNldFZhbHVlKHJlc3BvbnNlLl9pZCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZXBvc2l0b3J5Rm9ybS5jb250cm9sc1snbmFtZSddLnNldFZhbHVlKHJlc3BvbnNlLm5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNhdmUoKSB7XHJcbiAgICBpZiAodGhpcy5yZXBvc2l0b3J5Rm9ybS5jb250cm9sc1snaWQnXS52YWx1ZSkge1xyXG4gICAgICBsZXQgcmVwb3NpdG9yeTogUmVwb3NpdG9yeURldGFpbHNJbnRlcmZhY2UgPSB7XHJcbiAgICAgICAgX2lkOiB0aGlzLnJlcG9zaXRvcnlGb3JtLmNvbnRyb2xzWydpZCddLnZhbHVlLFxyXG4gICAgICAgIG5hbWU6IHRoaXMucmVwb3NpdG9yeUZvcm0uY29udHJvbHNbJ25hbWUnXS52YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnJlcG9zaXRvcnlEZXRhaWxzU2VydmljZS51cGRhdGVSZXBvc2l0b3J5RGV0YWlscyhyZXBvc2l0b3J5KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcmVwb3NpdG9yeTogUmVwb3NpdG9yeURldGFpbHNJbnRlcmZhY2UgPSB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5yZXBvc2l0b3J5Rm9ybS5jb250cm9sc1snbmFtZSddLnZhbHVlXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucmVwb3NpdG9yeURldGFpbHNTZXJ2aWNlLmNyZWF0ZVJlcG9zaXRvcnkocmVwb3NpdG9yeSlcclxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
