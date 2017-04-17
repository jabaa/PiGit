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
const http_1 = require("@angular/http");
let RepositoryListService = class RepositoryListService {
    constructor(http) {
        this.http = http;
    }
    getList() {
        return this.http.get('/api/repositories')
            .map((response) => response.json());
    }
    deleteRepository(repository) {
        return this.http.delete('/api/repository/' + repository._id)
            .map((response) => response.json());
    }
};
RepositoryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RepositoryListService);
exports.RepositoryListService = RepositoryListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5LWxpc3Qvc2VydmljZXMvcmVwb3NpdG9yeS1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBMkM7QUFDM0Msd0NBQStDO0FBSS9DLElBQWEscUJBQXFCLEdBQWxDO0lBQ0UsWUFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRTNCLE9BQU87UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7YUFDdEMsR0FBRyxDQUFDLENBQUMsUUFBa0IsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsVUFBc0M7UUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7YUFDekQsR0FBRyxDQUFDLENBQUMsUUFBa0IsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQ0YsQ0FBQTtBQVpZLHFCQUFxQjtJQURqQyxpQkFBVSxFQUFFO3FDQUVlLFdBQUk7R0FEbkIscUJBQXFCLENBWWpDO0FBWlksc0RBQXFCIiwiZmlsZSI6ImFwcC9yZXBvc2l0b3J5LWxpc3Qvc2VydmljZXMvcmVwb3NpdG9yeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnlEZXRhaWxzSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vcmVwb3NpdG9yeS1kZXRhaWxzL21vZGVscy9yZXBvc2l0b3J5LWRldGFpbHMuaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcG9zaXRvcnlMaXN0U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0TGlzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3JlcG9zaXRvcmllcycpXHJcbiAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGVSZXBvc2l0b3J5KHJlcG9zaXRvcnk6IFJlcG9zaXRvcnlEZXRhaWxzSW50ZXJmYWNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSgnL2FwaS9yZXBvc2l0b3J5LycgKyByZXBvc2l0b3J5Ll9pZClcclxuICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=
