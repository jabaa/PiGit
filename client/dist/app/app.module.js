"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const app_component_1 = require("./app.component");
const app_routes_1 = require("./app.routes");
const repository_list_module_1 = require("./repository-list/repository-list.module");
const repository_details_module_1 = require("./repository-details/repository-details.module");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(app_routes_1.appRoutes),
            repository_list_module_1.RepositoryListModule,
            repository_details_module_1.RepositoryDetailsModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQXlDO0FBQ3pDLGdFQUEwRDtBQUMxRCw0Q0FBK0M7QUFFL0MsbURBQStDO0FBQy9DLDZDQUF5QztBQUN6QyxxRkFBZ0Y7QUFDaEYsOEZBQXlGO0FBRXpGLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFDakMscUNBQW1DO0FBZ0JuQyxJQUFhLFNBQVMsR0FBdEI7Q0FBeUIsQ0FBQTtBQUFaLFNBQVM7SUFkckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsZ0NBQWE7WUFDYixxQkFBWSxDQUFDLE9BQU8sQ0FBQyxzQkFBUyxDQUFDO1lBQy9CLDZDQUFvQjtZQUNwQixtREFBdUI7U0FDeEI7UUFDRCxZQUFZLEVBQUU7WUFDWiw0QkFBWTtTQUNiO1FBQ0QsU0FBUyxFQUFFLEVBQ1Y7UUFDRCxTQUFTLEVBQUssQ0FBRSw0QkFBWSxDQUFFO0tBQy9CLENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGFwcFJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnlMaXN0TW9kdWxlIH0gZnJvbSAnLi9yZXBvc2l0b3J5LWxpc3QvcmVwb3NpdG9yeS1saXN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnlEZXRhaWxzTW9kdWxlIH0gZnJvbSAnLi9yZXBvc2l0b3J5LWRldGFpbHMvcmVwb3NpdG9yeS1kZXRhaWxzLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcclxuICAgIFJlcG9zaXRvcnlMaXN0TW9kdWxlLFxyXG4gICAgUmVwb3NpdG9yeURldGFpbHNNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogICAgWyBBcHBDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiJdfQ==
