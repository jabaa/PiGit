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
let RepositoryListComponent = class RepositoryListComponent {
    constructor(repositoryListService) {
        this.repositoryListService = repositoryListService;
        this.page = 0;
        this.itemsPerPage = 10;
        this.modalEvent = new core_1.EventEmitter();
        this.reloadList();
    }
    get showPagination() {
        return this.list && this.list.length > this.itemsPerPage;
    }
    get pages() {
        return !this.list ? [1] : Array(this.list.length / this.itemsPerPage).fill(0).map((el, idx) => idx + 1);
    }
    goToPage(page) {
        this.page = page;
    }
    openDeleteConfirmation(repository) {
        this.modalEvent.emit({ method: 'show', data: repository });
    }
    reloadList() {
        this.repositoryListService.getList()
            .subscribe((response) => {
            this.list = response;
        });
    }
};
RepositoryListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './repository-list.component.html'
    }),
    __metadata("design:paramtypes", [repository_list_service_1.RepositoryListService])
], RepositoryListComponent);
exports.RepositoryListComponent = RepositoryListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5LWxpc3QvY29tcG9uZW50cy9yZXBvc2l0b3J5LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXdEO0FBRXhELGlGQUE0RTtBQVE1RSxJQUFhLHVCQUF1QixHQUFwQztJQU9FLFlBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBTHpELFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFtRCxDQUFDO1FBR3RGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBVyxjQUFjO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0QsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFVLEVBQUUsR0FBVyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxSCxDQUFDO0lBRU0sUUFBUSxDQUFDLElBQVk7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVNLHNCQUFzQixDQUFDLFVBQXNDO1FBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sVUFBVTtRQUNmLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7YUFDakMsU0FBUyxDQUFDLENBQUMsUUFBaUM7WUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YsQ0FBQTtBQWpDWSx1QkFBdUI7SUFKbkMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsa0NBQWtDO0tBQ2hELENBQUM7cUNBUTJDLCtDQUFxQjtHQVByRCx1QkFBdUIsQ0FpQ25DO0FBakNZLDBEQUF1QiIsImZpbGUiOiJhcHAvcmVwb3NpdG9yeS1saXN0L2NvbXBvbmVudHMvcmVwb3NpdG9yeS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSZXBvc2l0b3J5TGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yZXBvc2l0b3J5LWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnlMaXN0SW50ZXJmYWNlIH0gZnJvbSAnLi4vbW9kZWxzL3JlcG9zaXRvcnktbGlzdC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBSZXBvc2l0b3J5RGV0YWlsc0ludGVyZmFjZSB9IGZyb20gJy4uLy4uL3JlcG9zaXRvcnktZGV0YWlscy9tb2RlbHMvcmVwb3NpdG9yeS1kZXRhaWxzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXBvc2l0b3J5LWxpc3QuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvc2l0b3J5TGlzdENvbXBvbmVudCB7XHJcbiAgcHVibGljIGxpc3Q6IFJlcG9zaXRvcnlMaXN0SW50ZXJmYWNlO1xyXG4gIHB1YmxpYyBwYWdlID0gMDtcclxuICBwdWJsaWMgaXRlbXNQZXJQYWdlID0gMTA7XHJcblxyXG4gIHB1YmxpYyBtb2RhbEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7bWV0aG9kOiBhbnksIGRhdGE6IFJlcG9zaXRvcnlEZXRhaWxzSW50ZXJmYWNlfT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXBvc2l0b3J5TGlzdFNlcnZpY2U6IFJlcG9zaXRvcnlMaXN0U2VydmljZSkge1xyXG4gICAgdGhpcy5yZWxvYWRMaXN0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNob3dQYWdpbmF0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGlzdCAmJiB0aGlzLmxpc3QubGVuZ3RoID4gdGhpcy5pdGVtc1BlclBhZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBhZ2VzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiAhdGhpcy5saXN0ID8gWzFdIDogQXJyYXkodGhpcy5saXN0Lmxlbmd0aCAvIHRoaXMuaXRlbXNQZXJQYWdlKS5maWxsKDApLm1hcCgoZWw6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IGlkeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdvVG9QYWdlKHBhZ2U6IG51bWJlcikge1xyXG4gICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuRGVsZXRlQ29uZmlybWF0aW9uKHJlcG9zaXRvcnk6IFJlcG9zaXRvcnlEZXRhaWxzSW50ZXJmYWNlKSB7XHJcbiAgICB0aGlzLm1vZGFsRXZlbnQuZW1pdCh7bWV0aG9kOiAnc2hvdycsIGRhdGE6IHJlcG9zaXRvcnl9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWxvYWRMaXN0KCkge1xyXG4gICAgdGhpcy5yZXBvc2l0b3J5TGlzdFNlcnZpY2UuZ2V0TGlzdCgpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBSZXBvc2l0b3J5TGlzdEludGVyZmFjZSkgPT4ge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHJlc3BvbnNlO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
