"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_list_component_1 = require("./repository-list/components/repository-list.component");
const repository_details_component_1 = require("./repository-details/components/repository-details.component");
exports.appRoutes = [
    {
        path: '',
        component: repository_list_component_1.RepositoryListComponent
    },
    {
        path: 'repository',
        component: repository_details_component_1.RepositoryDetailsComponent
    },
    {
        path: 'repository/:id',
        component: repository_details_component_1.RepositoryDetailsComponent
    }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsc0dBQWlHO0FBQ2pHLCtHQUEwRztBQUU3RixRQUFBLFNBQVMsR0FBVztJQUMvQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLG1EQUF1QjtLQUFFO0lBQ3RDO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLHlEQUEwQjtLQUN0QztJQUNEO1FBQ0UsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixTQUFTLEVBQUUseURBQTBCO0tBQ3RDO0NBQ0YsQ0FBQyIsImZpbGUiOiJhcHAvYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBSZXBvc2l0b3J5TGlzdENvbXBvbmVudCB9IGZyb20gJy4vcmVwb3NpdG9yeS1saXN0L2NvbXBvbmVudHMvcmVwb3NpdG9yeS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnlEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXBvc2l0b3J5LWRldGFpbHMvY29tcG9uZW50cy9yZXBvc2l0b3J5LWRldGFpbHMuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogUmVwb3NpdG9yeUxpc3RDb21wb25lbnQgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncmVwb3NpdG9yeScsXHJcbiAgICBjb21wb25lbnQ6IFJlcG9zaXRvcnlEZXRhaWxzQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncmVwb3NpdG9yeS86aWQnLFxyXG4gICAgY29tcG9uZW50OiBSZXBvc2l0b3J5RGV0YWlsc0NvbXBvbmVudFxyXG4gIH1cclxuXTtcclxuIl19
