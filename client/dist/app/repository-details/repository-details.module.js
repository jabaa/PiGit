"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const repository_details_component_1 = require("./components/repository-details.component");
const repository_details_service_1 = require("./services/repository-details.service");
let RepositoryDetailsModule = class RepositoryDetailsModule {
};
RepositoryDetailsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            repository_details_component_1.RepositoryDetailsComponent
        ],
        providers: [
            repository_details_service_1.RepositoryDetailsService
        ],
        exports: [
            repository_details_component_1.RepositoryDetailsComponent
        ]
    })
], RepositoryDetailsModule);
exports.RepositoryDetailsModule = RepositoryDetailsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5LWRldGFpbHMvcmVwb3NpdG9yeS1kZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdDQUF5QztBQUN6Qyx3Q0FBMkM7QUFDM0MsNENBQStDO0FBQy9DLDBDQUFrRTtBQUVsRSw0RkFBdUY7QUFDdkYsc0ZBQWlGO0FBbUJqRixJQUFhLHVCQUF1QixHQUFwQztDQUF1QyxDQUFBO0FBQTFCLHVCQUF1QjtJQWpCbkMsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWixpQkFBVTtZQUNWLG1CQUFXO1lBQ1gsMkJBQW1CO1NBQ3BCO1FBQ0QsWUFBWSxFQUFFO1lBQ1oseURBQTBCO1NBQzNCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QscURBQXdCO1NBQ3pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AseURBQTBCO1NBQzNCO0tBQ0YsQ0FBQztHQUNXLHVCQUF1QixDQUFHO0FBQTFCLDBEQUF1QiIsImZpbGUiOiJhcHAvcmVwb3NpdG9yeS1kZXRhaWxzL3JlcG9zaXRvcnktZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUmVwb3NpdG9yeURldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVwb3NpdG9yeS1kZXRhaWxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnlEZXRhaWxzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVwb3NpdG9yeS1kZXRhaWxzLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFJlcG9zaXRvcnlEZXRhaWxzQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFJlcG9zaXRvcnlEZXRhaWxzU2VydmljZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUmVwb3NpdG9yeURldGFpbHNDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvc2l0b3J5RGV0YWlsc01vZHVsZSB7fVxyXG4iXX0=
