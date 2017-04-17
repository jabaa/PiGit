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
let RepositoryListItemComponent = class RepositoryListItemComponent {
    constructor() {
        this.openDeleteConfirmation = new core_1.EventEmitter();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RepositoryListItemComponent.prototype, "item", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RepositoryListItemComponent.prototype, "index", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RepositoryListItemComponent.prototype, "openDeleteConfirmation", void 0);
RepositoryListItemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-repository-list-item',
        templateUrl: './repository-list-item.component.html'
    })
], RepositoryListItemComponent);
exports.RepositoryListItemComponent = RepositoryListItemComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5LWxpc3QvY29tcG9uZW50cy9yZXBvc2l0b3J5LWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBdUU7QUFTdkUsSUFBYSwyQkFBMkIsR0FBeEM7SUFMQTtRQVNZLDJCQUFzQixHQUFHLElBQUksbUJBQVksRUFBOEIsQ0FBQztJQUNwRixDQUFDO0NBQUEsQ0FBQTtBQUpVO0lBQVIsWUFBSyxFQUFFOzt5REFBa0M7QUFDakM7SUFBUixZQUFLLEVBQUU7OzBEQUFlO0FBRWI7SUFBVCxhQUFNLEVBQUU7OzJFQUF5RTtBQUp2RSwyQkFBMkI7SUFMdkMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLFdBQVcsRUFBRSx1Q0FBdUM7S0FDckQsQ0FBQztHQUNXLDJCQUEyQixDQUt2QztBQUxZLGtFQUEyQiIsImZpbGUiOiJhcHAvcmVwb3NpdG9yeS1saXN0L2NvbXBvbmVudHMvcmVwb3NpdG9yeS1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFJlcG9zaXRvcnlEZXRhaWxzSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vcmVwb3NpdG9yeS1kZXRhaWxzL21vZGVscy9yZXBvc2l0b3J5LWRldGFpbHMuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcHAtcmVwb3NpdG9yeS1saXN0LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXBvc2l0b3J5LWxpc3QtaXRlbS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9zaXRvcnlMaXN0SXRlbUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaXRlbTogUmVwb3NpdG9yeURldGFpbHNJbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIG9wZW5EZWxldGVDb25maXJtYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPFJlcG9zaXRvcnlEZXRhaWxzSW50ZXJmYWNlPigpO1xyXG59XHJcbiJdfQ==
