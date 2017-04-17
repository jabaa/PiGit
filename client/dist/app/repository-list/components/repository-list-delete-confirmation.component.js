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
const repository_list_service_1 = require("../services/repository-list.service");
let RepositoryListDeleteConfirmationComponent = class RepositoryListDeleteConfirmationComponent {
    constructor(repositoryListService) {
        this.repositoryListService = repositoryListService;
        this.reloadList = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.eventListener
            .subscribe((event) => {
            this.repository = event.data;
            $('#repository-list-delete-confirmation').modal(event.method);
        });
    }
    deleteRepository() {
        this.repositoryListService.deleteRepository(this.repository)
            .subscribe((response) => {
            if (response) {
                this.reloadList.emit();
            }
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.EventEmitter)
], RepositoryListDeleteConfirmationComponent.prototype, "eventListener", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RepositoryListDeleteConfirmationComponent.prototype, "reloadList", void 0);
RepositoryListDeleteConfirmationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-repository-list-delete-confirmation',
        templateUrl: './repository-list-delete-confirmation.component.html'
    }),
    __metadata("design:paramtypes", [repository_list_service_1.RepositoryListService])
], RepositoryListDeleteConfirmationComponent);
exports.RepositoryListDeleteConfirmationComponent = RepositoryListDeleteConfirmationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5LWxpc3QvY29tcG9uZW50cy9yZXBvc2l0b3J5LWxpc3QtZGVsZXRlLWNvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBK0U7QUFFL0UsaUZBQTRFO0FBUzVFLElBQWEseUNBQXlDLEdBQXREO0lBT0UsWUFBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFKdEQsZUFBVSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBSXlCLENBQUM7SUFFcEUsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhO2FBQ2YsU0FBUyxDQUFDLENBQUMsS0FBc0Q7WUFDaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3pELFNBQVMsQ0FBQyxDQUFDLFFBQWlCO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YsQ0FBQTtBQXZCVTtJQUFSLFlBQUssRUFBRTs4QkFBZ0IsbUJBQVk7Z0ZBQWtEO0FBQzVFO0lBQVQsYUFBTSxFQUFFOzs2RUFBaUM7QUFIL0IseUNBQXlDO0lBTHJELGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLHlDQUF5QztRQUNuRCxXQUFXLEVBQUUsc0RBQXNEO0tBQ3BFLENBQUM7cUNBUTJDLCtDQUFxQjtHQVByRCx5Q0FBeUMsQ0F5QnJEO0FBekJZLDhGQUF5QyIsImZpbGUiOiJhcHAvcmVwb3NpdG9yeS1saXN0L2NvbXBvbmVudHMvcmVwb3NpdG9yeS1saXN0LWRlbGV0ZS1jb25maXJtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBvc2l0b3J5RGV0YWlsc0ludGVyZmFjZSB9IGZyb20gJy4uLy4uL3JlcG9zaXRvcnktZGV0YWlscy9tb2RlbHMvcmVwb3NpdG9yeS1kZXRhaWxzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnlMaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JlcG9zaXRvcnktbGlzdC5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyICQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXBwLXJlcG9zaXRvcnktbGlzdC1kZWxldGUtY29uZmlybWF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVwb3NpdG9yeS1saXN0LWRlbGV0ZS1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvc2l0b3J5TGlzdERlbGV0ZUNvbmZpcm1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGV2ZW50TGlzdGVuZXI6IEV2ZW50RW1pdHRlcjx7bWV0aG9kOiBhbnksIGRhdGE6IFJlcG9zaXRvcnlEZXRhaWxzSW50ZXJmYWNlfT47XHJcbiAgQE91dHB1dCgpIHJlbG9hZExpc3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyByZXBvc2l0b3J5OiBSZXBvc2l0b3J5RGV0YWlsc0ludGVyZmFjZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXBvc2l0b3J5TGlzdFNlcnZpY2U6IFJlcG9zaXRvcnlMaXN0U2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJcclxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IHttZXRob2Q6IGFueSwgZGF0YTogUmVwb3NpdG9yeURldGFpbHNJbnRlcmZhY2V9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXBvc2l0b3J5ID0gZXZlbnQuZGF0YTtcclxuICAgICAgICAkKCcjcmVwb3NpdG9yeS1saXN0LWRlbGV0ZS1jb25maXJtYXRpb24nKS5tb2RhbChldmVudC5tZXRob2QpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGVSZXBvc2l0b3J5KCkge1xyXG4gICAgdGhpcy5yZXBvc2l0b3J5TGlzdFNlcnZpY2UuZGVsZXRlUmVwb3NpdG9yeSh0aGlzLnJlcG9zaXRvcnkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbG9hZExpc3QuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
