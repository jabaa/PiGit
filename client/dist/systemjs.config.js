(function (global) {
    SystemJS.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                defaultExtension: 'js',
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5c3RlbWpzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLFVBQVUsTUFBTTtJQUNmLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDZCxLQUFLLEVBQUU7WUFDTCx1QkFBdUI7WUFDdkIsTUFBTSxFQUFFLGVBQWU7U0FDeEI7UUFDRCx1REFBdUQ7UUFDdkQsR0FBRyxFQUFFO1lBQ0gsbUNBQW1DO1lBQ25DLEtBQUssRUFBRSxLQUFLO1lBRVosa0JBQWtCO1lBQ2xCLGVBQWUsRUFBRSx1Q0FBdUM7WUFDeEQsaUJBQWlCLEVBQUUsMkNBQTJDO1lBQzlELG1CQUFtQixFQUFFLCtDQUErQztZQUNwRSwyQkFBMkIsRUFBRSwrREFBK0Q7WUFDNUYsbUNBQW1DLEVBQUUsK0VBQStFO1lBQ3BILGVBQWUsRUFBRSx1Q0FBdUM7WUFDeEQsaUJBQWlCLEVBQUUsMkNBQTJDO1lBQzlELGdCQUFnQixFQUFFLHlDQUF5QztZQUUzRCxrQkFBa0I7WUFDbEIsTUFBTSxFQUF1QixVQUFVO1NBQ3hDO1FBQ0Qsb0ZBQW9GO1FBQ3BGLFFBQVEsRUFBRTtZQUNSLEdBQUcsRUFBRTtnQkFDSCxnQkFBZ0IsRUFBRSxJQUFJO2FBQ3ZCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLGdCQUFnQixFQUFFLElBQUk7YUFDdkI7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDIiwiZmlsZSI6InN5c3RlbWpzLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsKSB7XHJcbiAgU3lzdGVtSlMuY29uZmlnKHtcclxuICAgIHBhdGhzOiB7XHJcbiAgICAgIC8vIHBhdGhzIHNlcnZlIGFzIGFsaWFzXHJcbiAgICAgICducG06JzogJ25vZGVfbW9kdWxlcy8nXHJcbiAgICB9LFxyXG4gICAgLy8gbWFwIHRlbGxzIHRoZSBTeXN0ZW0gbG9hZGVyIHdoZXJlIHRvIGxvb2sgZm9yIHRoaW5nc1xyXG4gICAgbWFwOiB7XHJcbiAgICAgIC8vIG91ciBhcHAgaXMgd2l0aGluIHRoZSBhcHAgZm9sZGVyXHJcbiAgICAgICdhcHAnOiAnYXBwJyxcclxuXHJcbiAgICAgIC8vIGFuZ3VsYXIgYnVuZGxlc1xyXG4gICAgICAnQGFuZ3VsYXIvY29yZSc6ICducG06QGFuZ3VsYXIvY29yZS9idW5kbGVzL2NvcmUudW1kLmpzJyxcclxuICAgICAgJ0Bhbmd1bGFyL2NvbW1vbic6ICducG06QGFuZ3VsYXIvY29tbW9uL2J1bmRsZXMvY29tbW9uLnVtZC5qcycsXHJcbiAgICAgICdAYW5ndWxhci9jb21waWxlcic6ICducG06QGFuZ3VsYXIvY29tcGlsZXIvYnVuZGxlcy9jb21waWxlci51bWQuanMnLFxyXG4gICAgICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic6ICducG06QGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzJyxcclxuICAgICAgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc6ICducG06QGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLnVtZC5qcycsXHJcbiAgICAgICdAYW5ndWxhci9odHRwJzogJ25wbTpAYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMnLFxyXG4gICAgICAnQGFuZ3VsYXIvcm91dGVyJzogJ25wbTpAYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzJyxcclxuICAgICAgJ0Bhbmd1bGFyL2Zvcm1zJzogJ25wbTpAYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcycsXHJcblxyXG4gICAgICAvLyBvdGhlciBsaWJyYXJpZXNcclxuICAgICAgJ3J4anMnOiAgICAgICAgICAgICAgICAgICAgICAnbnBtOnJ4anMnXHJcbiAgICB9LFxyXG4gICAgLy8gcGFja2FnZXMgdGVsbHMgdGhlIFN5c3RlbSBsb2FkZXIgaG93IHRvIGxvYWQgd2hlbiBubyBmaWxlbmFtZSBhbmQvb3Igbm8gZXh0ZW5zaW9uXHJcbiAgICBwYWNrYWdlczoge1xyXG4gICAgICBhcHA6IHtcclxuICAgICAgICBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnLFxyXG4gICAgICB9LFxyXG4gICAgICByeGpzOiB7XHJcbiAgICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKHRoaXMpO1xyXG4iXX0=
