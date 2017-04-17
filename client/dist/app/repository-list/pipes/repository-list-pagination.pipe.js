"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let RepositoryListPaginationPipe = class RepositoryListPaginationPipe {
    transform(list, page, itemsPerPage) {
        if (!list) {
            list = [];
        }
        if (!page) {
            page = 1;
        }
        if (!itemsPerPage) {
            itemsPerPage = 10;
        }
        let start = (page) * itemsPerPage;
        if (start >= list.length) {
            start = list.length - (list.length % itemsPerPage);
        }
        let end = (page + 1) * itemsPerPage;
        if (end >= list.length) {
            end = list.length;
        }
        return list.slice(start, end);
    }
};
RepositoryListPaginationPipe = __decorate([
    core_1.Pipe({
        name: 'repositoryListPagination'
    })
], RepositoryListPaginationPipe);
exports.RepositoryListPaginationPipe = RepositoryListPaginationPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5LWxpc3QvcGlwZXMvcmVwb3NpdG9yeS1saXN0LXBhZ2luYXRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdDQUFvRDtBQU9wRCxJQUFhLDRCQUE0QixHQUF6QztJQUNFLFNBQVMsQ0FBQyxJQUE2QixFQUFFLElBQWEsRUFBRSxZQUFxQjtRQUMzRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksR0FBRyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTtBQXJCWSw0QkFBNEI7SUFIeEMsV0FBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLDBCQUEwQjtLQUNqQyxDQUFDO0dBQ1csNEJBQTRCLENBcUJ4QztBQXJCWSxvRUFBNEIiLCJmaWxlIjoiYXBwL3JlcG9zaXRvcnktbGlzdC9waXBlcy9yZXBvc2l0b3J5LWxpc3QtcGFnaW5hdGlvbi5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUmVwb3NpdG9yeUxpc3RJbnRlcmZhY2UgfSBmcm9tICcuLi9tb2RlbHMvcmVwb3NpdG9yeS1saXN0LmludGVyZmFjZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3JlcG9zaXRvcnlMaXN0UGFnaW5hdGlvbidcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9zaXRvcnlMaXN0UGFnaW5hdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0obGlzdDogUmVwb3NpdG9yeUxpc3RJbnRlcmZhY2UsIHBhZ2U/OiBudW1iZXIsIGl0ZW1zUGVyUGFnZT86IG51bWJlcikge1xyXG4gICAgaWYgKCFsaXN0KSB7XHJcbiAgICAgIGxpc3QgPSBbXTtcclxuICAgIH1cclxuICAgIGlmICghcGFnZSkge1xyXG4gICAgICBwYWdlID0gMTtcclxuICAgIH1cclxuICAgIGlmICghaXRlbXNQZXJQYWdlKSB7XHJcbiAgICAgIGl0ZW1zUGVyUGFnZSA9IDEwO1xyXG4gICAgfVxyXG4gICAgbGV0IHN0YXJ0ID0gKHBhZ2UpICogaXRlbXNQZXJQYWdlO1xyXG4gICAgaWYgKHN0YXJ0ID49IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgIHN0YXJ0ID0gbGlzdC5sZW5ndGggLSAobGlzdC5sZW5ndGggJSBpdGVtc1BlclBhZ2UpO1xyXG4gICAgfVxyXG4gICAgbGV0IGVuZCA9IChwYWdlICsgMSkgKiBpdGVtc1BlclBhZ2U7XHJcbiAgICBpZiAoZW5kID49IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgIGVuZCA9IGxpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpc3Quc2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
