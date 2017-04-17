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
let RepositoryDetailsService = class RepositoryDetailsService {
    constructor(http) {
        this.http = http;
    }
    getRepositoryDetails(id) {
        return this.http.get('/api/repository/' + id)
            .map((response) => response.json());
    }
    updateRepositoryDetails(repository) {
        return this.http.put('/api/repository/' + repository._id, repository)
            .map((response) => response.json());
    }
    createRepository(repository) {
        return this.http.post('/api/repository', repository)
            .map((response) => response.json());
    }
};
RepositoryDetailsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RepositoryDetailsService);
exports.RepositoryDetailsService = RepositoryDetailsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5LWRldGFpbHMvc2VydmljZXMvcmVwb3NpdG9yeS1kZXRhaWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBMkM7QUFDM0Msd0NBQStDO0FBSy9DLElBQWEsd0JBQXdCLEdBQXJDO0lBRUUsWUFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRTNCLG9CQUFvQixDQUFDLEVBQVU7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQzthQUMxQyxHQUFHLENBQUMsQ0FBQyxRQUFrQixLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSx1QkFBdUIsQ0FBQyxVQUFzQztRQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUM7YUFDbEUsR0FBRyxDQUFDLENBQUMsUUFBa0IsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsVUFBc0M7UUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQzthQUNqRCxHQUFHLENBQUMsQ0FBQyxRQUFrQixLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRixDQUFBO0FBbEJZLHdCQUF3QjtJQURwQyxpQkFBVSxFQUFFO3FDQUdlLFdBQUk7R0FGbkIsd0JBQXdCLENBa0JwQztBQWxCWSw0REFBd0IiLCJmaWxlIjoiYXBwL3JlcG9zaXRvcnktZGV0YWlscy9zZXJ2aWNlcy9yZXBvc2l0b3J5LWRldGFpbHMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCB7IFJlcG9zaXRvcnlEZXRhaWxzSW50ZXJmYWNlIH0gZnJvbSAnLi4vbW9kZWxzL3JlcG9zaXRvcnktZGV0YWlscy5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVwb3NpdG9yeURldGFpbHNTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0UmVwb3NpdG9yeURldGFpbHMoaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvcmVwb3NpdG9yeS8nICsgaWQpXHJcbiAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVSZXBvc2l0b3J5RGV0YWlscyhyZXBvc2l0b3J5OiBSZXBvc2l0b3J5RGV0YWlsc0ludGVyZmFjZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoJy9hcGkvcmVwb3NpdG9yeS8nICsgcmVwb3NpdG9yeS5faWQsIHJlcG9zaXRvcnkpXHJcbiAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVSZXBvc2l0b3J5KHJlcG9zaXRvcnk6IFJlcG9zaXRvcnlEZXRhaWxzSW50ZXJmYWNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvcmVwb3NpdG9yeScsIHJlcG9zaXRvcnkpXHJcbiAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICB9XHJcbn1cclxuIl19
