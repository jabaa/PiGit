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
const router_1 = require("@angular/router");
const repository_list_component_1 = require("./components/repository-list.component");
const repository_list_item_component_1 = require("./components/repository-list-item.component");
const repository_list_service_1 = require("./services/repository-list.service");
const repository_list_pagination_pipe_1 = require("./pipes/repository-list-pagination.pipe");
const repository_list_delete_confirmation_component_1 = require("./components/repository-list-delete-confirmation.component");
let RepositoryListModule = class RepositoryListModule {
};
RepositoryListModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            router_1.RouterModule
        ],
        declarations: [
            repository_list_component_1.RepositoryListComponent,
            repository_list_item_component_1.RepositoryListItemComponent,
            repository_list_pagination_pipe_1.RepositoryListPaginationPipe,
            repository_list_delete_confirmation_component_1.RepositoryListDeleteConfirmationComponent
        ],
        providers: [
            repository_list_service_1.RepositoryListService,
            repository_list_pagination_pipe_1.RepositoryListPaginationPipe
        ],
        exports: [
            repository_list_component_1.RepositoryListComponent
        ]
    })
], RepositoryListModule);
exports.RepositoryListModule = RepositoryListModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5LWxpc3QvcmVwb3NpdG9yeS1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdDQUF5QztBQUN6Qyx3Q0FBMkM7QUFDM0MsNENBQStDO0FBQy9DLDRDQUErQztBQUUvQyxzRkFBaUY7QUFDakYsZ0dBQTBGO0FBQzFGLGdGQUEyRTtBQUMzRSw2RkFBdUY7QUFDdkYsOEhBQXVIO0FBc0J2SCxJQUFhLG9CQUFvQixHQUFqQztDQUFvQyxDQUFBO0FBQXZCLG9CQUFvQjtJQXBCaEMsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWixpQkFBVTtZQUNWLHFCQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWixtREFBdUI7WUFDdkIsNERBQTJCO1lBQzNCLDhEQUE0QjtZQUM1Qix5RkFBeUM7U0FDMUM7UUFDRCxTQUFTLEVBQUU7WUFDVCwrQ0FBcUI7WUFDckIsOERBQTRCO1NBQzdCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsbURBQXVCO1NBQ3hCO0tBQ0YsQ0FBQztHQUNXLG9CQUFvQixDQUFHO0FBQXZCLG9EQUFvQiIsImZpbGUiOiJhcHAvcmVwb3NpdG9yeS1saXN0L3JlcG9zaXRvcnktbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBSZXBvc2l0b3J5TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXBvc2l0b3J5LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVwb3NpdG9yeUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlcG9zaXRvcnktbGlzdC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnlMaXN0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVwb3NpdG9yeS1saXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXBvc2l0b3J5TGlzdFBhZ2luYXRpb25QaXBlIH0gZnJvbSAnLi9waXBlcy9yZXBvc2l0b3J5LWxpc3QtcGFnaW5hdGlvbi5waXBlJztcclxuaW1wb3J0IHsgUmVwb3NpdG9yeUxpc3REZWxldGVDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVwb3NpdG9yeS1saXN0LWRlbGV0ZS1jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSHR0cE1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBSZXBvc2l0b3J5TGlzdENvbXBvbmVudCxcclxuICAgIFJlcG9zaXRvcnlMaXN0SXRlbUNvbXBvbmVudCxcclxuICAgIFJlcG9zaXRvcnlMaXN0UGFnaW5hdGlvblBpcGUsXHJcbiAgICBSZXBvc2l0b3J5TGlzdERlbGV0ZUNvbmZpcm1hdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBSZXBvc2l0b3J5TGlzdFNlcnZpY2UsXHJcbiAgICBSZXBvc2l0b3J5TGlzdFBhZ2luYXRpb25QaXBlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBSZXBvc2l0b3J5TGlzdENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9zaXRvcnlMaXN0TW9kdWxlIHt9XHJcbiJdfQ==
