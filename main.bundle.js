webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Preloader - style you can find in spinners.css -->\n<div class=\"preloader\">\n  <svg class=\"circular\" viewBox=\"25 25 50 50\">\n    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" /> </svg>\n</div>\n<!-- Main wrapper  -->\n<div id=\"main-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n<!-- End Wrapper -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_subcategory_service__ = __webpack_require__("./src/app/services/subcategory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_pageTitle_pageTitle_component__ = __webpack_require__("./src/app/components/dashboard/pageTitle/pageTitle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_product_product_component__ = __webpack_require__("./src/app/components/dashboard/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_product_product_add_component__ = __webpack_require__("./src/app/components/dashboard/product/product-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_product_product_edit_component__ = __webpack_require__("./src/app/components/dashboard/product/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_category_category_component__ = __webpack_require__("./src/app/components/dashboard/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_category_category_add_component__ = __webpack_require__("./src/app/components/dashboard/category/category-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dashboard_category_category_edit_component__ = __webpack_require__("./src/app/components/dashboard/category/category-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dashboard_subcategory_subcategory_component__ = __webpack_require__("./src/app/components/dashboard/subcategory/subcategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_subcategory_subcategory_add_component__ = __webpack_require__("./src/app/components/dashboard/subcategory/subcategory-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dashboard_subcategory_subcategory_edit_component__ = __webpack_require__("./src/app/components/dashboard/subcategory/subcategory-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_error_error_component__ = __webpack_require__("./src/app/components/error/error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Routes

// Services





// Components














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_dashboard_pageTitle_pageTitle_component__["a" /* PageTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_dashboard_product_product_add_component__["a" /* ProductAddComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_product_product_edit_component__["a" /* ProductEditComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dashboard_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_dashboard_category_category_add_component__["a" /* CategoryAddComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_dashboard_category_category_edit_component__["a" /* CategoryEditComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_dashboard_subcategory_subcategory_add_component__["a" /* SubCategoryAddComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_dashboard_subcategory_subcategory_edit_component__["a" /* SubCategoryEditComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_dashboard_subcategory_subcategory_component__["a" /* SubCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_error_error_component__["a" /* ErrorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* appRouting */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["b" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_9__services_subcategory_service__["a" /* SubcategoryService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_error_error_component__ = __webpack_require__("./src/app/components/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_routes__ = __webpack_require__("./src/app/components/dashboard/dashboard.routes.ts");

// Services

// Components



// Routes

var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_routes__["a" /* dashboardRoutes */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
    },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__components_error_error_component__["a" /* ErrorComponent */] }
];
var appRoutingProviders = [];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/dashboard/category/category-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent(_router, _categoryService) {
        this._router = _router;
        this._categoryService = _categoryService;
        this.title = 'Add Categorie';
        this.category = {
            name: '',
            description: '',
            image: '',
            state: true
        };
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
    };
    CategoryAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._categoryService.addCategory(this.category)
            .subscribe(function (res) {
            if (res.message !== 'Category Added') {
                console.log(res);
            }
            else {
                _this._router.navigate(['/dashboard/category']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CategoryAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addcategory',
            template: __webpack_require__("./src/app/components/dashboard/category/category-form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]])
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/category/category-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent(_router, _activatedRoute, _categoryService) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._categoryService = _categoryService;
        this.title = 'Edit Categorie';
        this.category = {
            name: '',
            description: '',
            image: '',
            state: true
        };
    }
    CategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) { _this.categoryID = params['id']; });
        this.getCategory();
    };
    CategoryEditComponent.prototype.getCategory = function () {
        var _this = this;
        this._categoryService.getCategory(this.categoryID)
            .subscribe(function (res) {
            if (res.message !== 'Return Category') {
                console.log(res);
            }
            else {
                _this.category = res.category;
                // console.log(this.category);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CategoryEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._categoryService.updateCategory(this.categoryID, this.category)
            .subscribe(function (res) {
            if (res.message !== 'Category Updated') {
                console.log(res);
            }
            else {
                _this._router.navigate(['/dashboard/category']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CategoryEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editcategory',
            template: __webpack_require__("./src/app/components/dashboard/category/category-form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]])
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/category/category-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n  <div class=\"card card-outline-primary\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"m-b-0 text-white\">{{title}}</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form #formCategory=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-body\">\r\n          <div class=\"row p-t-20\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Name</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"category.name\" required>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group has-danger\">\r\n                <label class=\"control-label\">Description</label>\r\n                <textarea type=\"text\" id=\"description\" class=\"form-control form-control-danger\" name=\"description\" #description=\"ngModel\"\r\n                  [(ngModel)]=\"category.description\" required></textarea>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group has-danger\">\r\n                <label class=\"control-label\">Image</label>\r\n                <input type=\"text\" id=\"image\" class=\"form-control form-control-danger\" name=\"image\" #image=\"ngModel\" [(ngModel)]=\"category.image\"\r\n                  required>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n          </div>\r\n          <!--/row-->\r\n        </div>\r\n        <div class=\"form-actions\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!formCategory.form.valid\">\r\n            <i class=\"fa fa-check\"></i> Save</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-title [title]=\"'Categories'\"></app-page-title>\r\n<!-- Container fluid  -->\r\n<div class=\"container-fluid\">\r\n  <!-- Start Page Content -->\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Table Categories</h4>\r\n          <div>\r\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" [routerLink]=\"['/dashboard/category-add']\">Add Category</button>\r\n          </div>\r\n          <br>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\r\n              <thead>\r\n                <tr>\r\n                  <th>ID</th>\r\n                  <th>Name</th>\r\n                  <th>Description</th>\r\n                  <th>State</th>\r\n                  <th>Options</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let category of categories\">\r\n                  <td>{{category.category_id}}</td>\r\n                  <td>{{category.name}}</td>\r\n                  <td>{{category.description}}</td>\r\n                  <td *ngIf=\"category.state\">Active</td>\r\n                  <td *ngIf=\"!category.state\">Disabled</td>\r\n                  <td>\r\n                    <div class=\"btn-group btn-group-sm\">\r\n                      <a class=\"btn btn-warning\" [routerLink]=\"['/dashboard/category-edit', category.category_id]\">Edit</a>\r\n                      <button class=\"btn btn-primary\" *ngIf=\"!category.state\" (click)=\"state(category.category_id, category)\">Active</button>\r\n                      <button class=\"btn btn-danger\" *ngIf=\"category.state\" (click)=\"state(category.category_id, category)\">Disabled</button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End PAge Content -->\r\n</div>\r\n<!-- End Container fluid  -->\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(_router, _categoryService) {
        this._router = _router;
        this._categoryService = _categoryService;
        this.title = 'Categories';
        this.categories = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (res) {
            if (res.message === 'Bad Request') {
                console.log(res);
            }
            else {
                _this.categories = res.category;
                // console.log(this.categories);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CategoryComponent.prototype.state = function (categoryID, category) {
        var _this = this;
        if (category.state === 1) {
            category.state = 0;
        }
        else {
            category.state = 1;
        }
        this._categoryService.updateCategory(categoryID, category)
            .subscribe(function (res) {
            if (res.message !== 'Category Updated') {
                console.log(res);
            }
            else {
                _this._router.navigate(['/dashboard/category']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category',
            template: __webpack_require__("./src/app/components/dashboard/category/category.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- header header  -->\r\n<div class=\"header\">\r\n  <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\r\n    <!-- Logo -->\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">\r\n        <!-- Logo icon -->\r\n        <b>\r\n          <img src=\"assets/images/logo.jpg\" alt=\"homepage\" class=\"dark-logo\" />\r\n        </b>\r\n        <!--End Logo icon -->\r\n        <!-- Logo text -->\r\n        <span>\r\n          JaguarSoft\r\n        </span>\r\n      </a>\r\n    </div>\r\n    <!-- End Logo -->\r\n    <div class=\"navbar-collapse\">\r\n      <!-- toggle and nav items -->\r\n      <ul class=\"navbar-nav mr-auto mt-md-0\">\r\n        <!-- This is  -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\r\n            <i class=\"mdi mdi-menu\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item m-l-10\">\r\n          <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\r\n            <i class=\"ti-menu\"></i>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <!-- User profile and search -->\r\n      <ul class=\"navbar-nav my-lg-0\">\r\n        <!-- Profile -->\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <img src=\"assets/images/users/default-avatar.png\" alt=\"user\" class=\"profile-pic\" />\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\r\n            <ul class=\"dropdown-user\">\r\n              <li>\r\n                <a href=\"#\">\r\n                  <i class=\"ti-user\"></i> Profile</a>\r\n              </li>\r\n              <li>\r\n                <a style=\"cursor: pointer;\" (click)=\"logOut()\">\r\n                  <i class=\"fa fa-power-off\"></i> Logout</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n<!-- End header header -->\r\n<!-- Left Sidebar  -->\r\n<div class=\"left-sidebar\">\r\n  <!-- Sidebar scroll-->\r\n  <div class=\"scroll-sidebar\">\r\n    <!-- Sidebar navigation-->\r\n    <nav class=\"sidebar-nav\">\r\n      <ul id=\"sidebarnav\">\r\n        <li class=\"nav-devider\">\r\n        </li>\r\n        <li>\r\n          <a class=\"has-arrow\" [routerLink]=\"['/dashboard']\" aria-expanded=\"false\">\r\n            <i class=\"fa fa-table\"></i>\r\n            <span class=\"hide-menu\">Products</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"has-arrow\" [routerLink]=\"['/dashboard/category']\" aria-expanded=\"false\">\r\n            <i class=\"fa fa-table\"></i>\r\n            <span class=\"hide-menu\">Categories</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"has-arrow\" [routerLink]=\"['/dashboard/subcategory']\" aria-expanded=\"false\">\r\n            <i class=\"fa fa-table\"></i>\r\n            <span class=\"hide-menu\">Subcategories</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!-- End Sidebar navigation -->\r\n  </div>\r\n  <!-- End Sidebar scroll-->\r\n</div>\r\n<!-- End Left Sidebar  -->\r\n<!-- Page wrapper  -->\r\n<div class=\"page-wrapper\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<!-- End Page wrapper  -->\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_router) {
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.logOut = function () {
        localStorage.clear();
        this._router.navigate(['/login']);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_product_component__ = __webpack_require__("./src/app/components/dashboard/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_product_add_component__ = __webpack_require__("./src/app/components/dashboard/product/product-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_edit_component__ = __webpack_require__("./src/app/components/dashboard/product/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category_component__ = __webpack_require__("./src/app/components/dashboard/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category_add_component__ = __webpack_require__("./src/app/components/dashboard/category/category-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category_edit_component__ = __webpack_require__("./src/app/components/dashboard/category/category-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subcategory_subcategory_component__ = __webpack_require__("./src/app/components/dashboard/subcategory/subcategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subcategory_subcategory_add_component__ = __webpack_require__("./src/app/components/dashboard/subcategory/subcategory-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subcategory_subcategory_edit_component__ = __webpack_require__("./src/app/components/dashboard/subcategory/subcategory-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_error_error_component__ = __webpack_require__("./src/app/components/error/error.component.ts");










var dashboardRoutes = [
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_0__product_product_component__["a" /* ProductComponent */] },
    { path: 'product-add', component: __WEBPACK_IMPORTED_MODULE_1__product_product_add_component__["a" /* ProductAddComponent */] },
    { path: 'product-edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__product_product_edit_component__["a" /* ProductEditComponent */] },
    { path: 'category', component: __WEBPACK_IMPORTED_MODULE_3__category_category_component__["a" /* CategoryComponent */] },
    { path: 'category-add', component: __WEBPACK_IMPORTED_MODULE_4__category_category_add_component__["a" /* CategoryAddComponent */] },
    { path: 'category-edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__category_category_edit_component__["a" /* CategoryEditComponent */] },
    { path: 'subcategory', component: __WEBPACK_IMPORTED_MODULE_6__subcategory_subcategory_component__["a" /* SubCategoryComponent */] },
    { path: 'subcategory-add', component: __WEBPACK_IMPORTED_MODULE_7__subcategory_subcategory_add_component__["a" /* SubCategoryAddComponent */] },
    { path: 'subcategory-edit/:id', component: __WEBPACK_IMPORTED_MODULE_8__subcategory_subcategory_edit_component__["a" /* SubCategoryEditComponent */] },
    { path: '', pathMatch: 'full', redirectTo: 'product' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__components_error_error_component__["a" /* ErrorComponent */] }
];


/***/ }),

/***/ "./src/app/components/dashboard/pageTitle/pageTitle.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Bread crumb -->\r\n<div class=\"row page-titles\">\r\n  <div class=\"col-md-5 align-self-center\">\r\n    <h3 class=\"text-primary\">{{title}}</h3>\r\n  </div>\r\n</div>\r\n<!-- End Bread crumb -->\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/pageTitle/pageTitle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageTitleComponent = /** @class */ (function () {
    function PageTitleComponent() {
    }
    PageTitleComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PageTitleComponent.prototype, "title", void 0);
    PageTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-title',
            template: __webpack_require__("./src/app/components/dashboard/pageTitle/pageTitle.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PageTitleComponent);
    return PageTitleComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/product/product-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_subcategory_service__ = __webpack_require__("./src/app/services/subcategory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(_router, _productService, _subcategoryService) {
        this._router = _router;
        this._productService = _productService;
        this._subcategoryService = _subcategoryService;
        this.title = 'Add Product';
        this.product = {
            name: '',
            description: '',
            image: '',
            price: 0,
            quantity: 0,
            state: true,
            subcategory_id: 0
        };
        this.subcategories = [];
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.getSubcategories();
    };
    ProductAddComponent.prototype.getSubcategories = function () {
        var _this = this;
        this._subcategoryService.getSubcategories()
            .subscribe(function (res) {
            if (res.message === 'Bad Request') {
                console.log(res);
            }
            else {
                _this.subcategories = res.subcategory;
                // console.log(this.subcategories);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._productService.addProduct(this.product)
            .subscribe(function (res) {
            if (res.message !== 'Product Added') {
                console.log(res);
            }
            else {
                _this._router.navigate(['/dashboard/product']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addcategory',
            template: __webpack_require__("./src/app/components/dashboard/product/product-form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__services_subcategory_service__["a" /* SubcategoryService */]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/product/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_subcategory_service__ = __webpack_require__("./src/app/services/subcategory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(_router, _activatedRoute, _productService, _subcategoryService) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._productService = _productService;
        this._subcategoryService = _subcategoryService;
        this.title = 'Edit Subcategorie';
        this.product = {
            name: '',
            description: '',
            image: '',
            price: 0,
            quantity: 0,
            state: true,
            subcategory_id: 0
        };
        this.subcategories = [];
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) { _this.productID = params['id']; });
        this.getSubcategories();
        this.getProduct();
    };
    ProductEditComponent.prototype.getSubcategories = function () {
        var _this = this;
        this._subcategoryService.getSubcategories()
            .subscribe(function (res) {
            if (res.message === 'Bad Request') {
                console.log(res);
            }
            else {
                _this.subcategories = res.subcategory;
                // console.log(this.subcategories);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductEditComponent.prototype.getProduct = function () {
        var _this = this;
        this._productService.getProduct(this.productID)
            .subscribe(function (res) {
            if (res.message !== 'Return Product') {
                console.log(res);
            }
            else {
                _this.product = res.product;
                // console.log(this.product);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductEditComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.product);
        this._productService.updateProduct(this.productID, this.product)
            .subscribe(function (res) {
            if (res.message !== 'Product Updated') {
                console.log(res);
            }
            else {
                _this._router.navigate(['/dashboard/product']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editcategory',
            template: __webpack_require__("./src/app/components/dashboard/product/product-form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__services_subcategory_service__["a" /* SubcategoryService */]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/product/product-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n  <div class=\"card card-outline-primary\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"m-b-0 text-white\">{{title}}</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form #formSubcategy=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-body\">\r\n          <div class=\"row p-t-20\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Name</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"product.name || product.product_name\"\r\n                  required>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group has-danger\">\r\n                <label class=\"control-label\">Description</label>\r\n                <textarea type=\"text\" id=\"description\" class=\"form-control form-control-danger\" name=\"description\" #description=\"ngModel\"\r\n                  [(ngModel)]=\"product.description\" required></textarea>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group has-danger\">\r\n                <label class=\"control-label\">Image</label>\r\n                <input type=\"text\" id=\"image\" class=\"form-control form-control-danger\" name=\"image\" #image=\"ngModel\" [(ngModel)]=\"product.image\"\r\n                  required>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group has-danger\">\r\n                <label class=\"control-label\">Price</label>\r\n                <textarea type=\"text\" id=\"price\" class=\"form-control form-control-danger\" name=\"price\" #price=\"ngModel\" [(ngModel)]=\"product.price\"\r\n                  required></textarea>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group has-danger\">\r\n                <label class=\"control-label\">Subcategory</label>\r\n                <select class=\"form-control custom-select\" name=\"subcategoryid\" #subcategoryid=\"ngModel\" [(ngModel)]=\"product.subcategory_id\">\r\n                  <option *ngFor=\"let subcategory of subcategories\" value=\"{{subcategory.subcategory_id}}\">{{subcategory.name}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n          </div>\r\n          <!--/row-->\r\n        </div>\r\n        <div class=\"form-actions\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!formSubcategy.form.valid\">\r\n            <i class=\"fa fa-check\"></i> Save</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-title [title]=\"'Products'\"></app-page-title>\r\n<!-- Container fluid  -->\r\n<div class=\"container-fluid\">\r\n  <!-- Start Page Content -->\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Table Products</h4>\r\n          <div>\r\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" [routerLink]=\"['/dashboard/product-add']\">Add Product</button>\r\n          </div>\r\n          <br>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\r\n              <thead>\r\n                <tr>\r\n                  <th>ID</th>\r\n                  <th>Name</th>\r\n                  <th>Description</th>\r\n                  <th>State</th>\r\n                  <th>Price</th>\r\n                  <!--<th>Options</th>-->\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let product of products\">\r\n                  <td>{{product.product_id}}</td>\r\n                  <td>{{product.product_name }} </td>\r\n                  <td>{{product.description}}</td>\r\n                  <td *ngIf=\"product.state\">Active</td>\r\n                  <td *ngIf=\"!product.state\">Disabled</td>\r\n                  <td>{{product.price}}</td>\r\n                  <!--<td>\r\n                    <div class=\"btn-group btn-group-sm\">\r\n                      <a class=\"btn btn-warning\" [routerLink]=\"['/dashboard/product-edit', product.product_id]\">Edit</a>\r\n                      <button class=\"btn btn-primary\" *ngIf=\"!product.state\" (click)=\"state(product.category_id, product)\">Active</button>\r\n                      <button class=\"btn btn-danger\" *ngIf=\"product.state\" (click)=\"state(product.category_id, product)\">Disabled</button>\r\n                    </div>\r\n                  </td>-->\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End PAge Content -->\r\n</div>\r\n<!-- End Container fluid  -->\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent(_router, _productService) {
        this._router = _router;
        this._productService = _productService;
        this.title = 'Products';
        this.products = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductComponent.prototype.getProducts = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (res) {
            if (res.message === 'Bad Request') {
                console.log(res);
            }
            else {
                _this.products = res.product;
                // console.log(this.products);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/components/dashboard/product/product.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/subcategory/subcategory-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoryAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_subcategory_service__ = __webpack_require__("./src/app/services/subcategory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubCategoryAddComponent = /** @class */ (function () {
    function SubCategoryAddComponent(_router, _categoryService, _subcategoryService) {
        this._router = _router;
        this._categoryService = _categoryService;
        this._subcategoryService = _subcategoryService;
        this.title = 'Add Subcategorie';
        this.subcategory = {
            category_id: 0,
            name: '',
            description: '',
            image: ''
        };
        this.categories = [];
    }
    SubCategoryAddComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    SubCategoryAddComponent.prototype.getCategories = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (res) {
            if (res.message === 'Bad Request') {
                console.log(res);
            }
            else {
                _this.categories = res.category;
                // console.log(this.categories);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SubCategoryAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._subcategoryService.addSubcategory(this.subcategory)
            .subscribe(function (res) {
            if (res.message !== 'SubCategory Added') {
                console.log(res);
            }
            else {
                _this._router.navigate(['/dashboard/category']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SubCategoryAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addcategory',
            template: __webpack_require__("./src/app/components/dashboard/subcategory/subcategory-form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_3__services_subcategory_service__["a" /* SubcategoryService */]])
    ], SubCategoryAddComponent);
    return SubCategoryAddComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/subcategory/subcategory-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoryEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_subcategory_service__ = __webpack_require__("./src/app/services/subcategory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubCategoryEditComponent = /** @class */ (function () {
    function SubCategoryEditComponent(_router, _activatedRoute, _categoryService, _subcategoryService) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._categoryService = _categoryService;
        this._subcategoryService = _subcategoryService;
        this.title = 'Edit Subcategorie';
        this.subcategory = {
            name: '',
            description: '',
            image: '',
            category_id: 0,
            subcategory_id: 0
        };
        this.categories = [];
    }
    SubCategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) { _this.subcategoryID = params['id']; });
        this.getCategories();
        this.getSubCategory();
    };
    SubCategoryEditComponent.prototype.getCategories = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (res) {
            if (res.message === 'Bad Request') {
                console.log(res);
            }
            else {
                _this.categories = res.category;
                // console.log(this.categories);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SubCategoryEditComponent.prototype.getSubCategory = function () {
        var _this = this;
        this._subcategoryService.getSubcategory(this.subcategoryID)
            .subscribe(function (res) {
            if (res.message !== 'Return SubCategory') {
                console.log(res);
            }
            else {
                _this.subcategory = res.subcategory;
                // console.log(this.category);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SubCategoryEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._subcategoryService.updateSubcategory(this.subcategoryID, this.subcategory)
            .subscribe(function (res) {
            if (res.message !== 'SubCategory Updated') {
                console.log(res);
            }
            else {
                _this._router.navigate(['/dashboard/subcategory']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SubCategoryEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editcategory',
            template: __webpack_require__("./src/app/components/dashboard/subcategory/subcategory-form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_3__services_subcategory_service__["a" /* SubcategoryService */]])
    ], SubCategoryEditComponent);
    return SubCategoryEditComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/subcategory/subcategory-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n  <div class=\"card card-outline-primary\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"m-b-0 text-white\">{{title}}</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form #formSubcategy=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-body\">\r\n          <div class=\"row p-t-20\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Name</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"subcategory.name\" required>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group has-danger\">\r\n                <label class=\"control-label\">Description</label>\r\n                <textarea type=\"text\" id=\"description\" class=\"form-control form-control-danger\" name=\"description\" #description=\"ngModel\"\r\n                  [(ngModel)]=\"subcategory.description\" required></textarea>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group has-danger\">\r\n                <label class=\"control-label\">Image</label>\r\n                <input type=\"text\" id=\"image\" class=\"form-control form-control-danger\" name=\"image\" #image=\"ngModel\" [(ngModel)]=\"subcategory.image\"\r\n                  required>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group has-danger\">\r\n                <label class=\"control-label\">Category</label>\r\n                <select class=\"form-control custom-select\" name=\"categoryid\" #categoryid=\"ngModel\" [(ngModel)]=\"subcategory.category_id\">\r\n                  <option *ngFor=\"let category of categories\" value=\"{{category.category_id}}\">{{category.name}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!--/span-->\r\n          </div>\r\n          <!--/row-->\r\n        </div>\r\n        <div class=\"form-actions\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!formSubcategy.form.valid\">\r\n            <i class=\"fa fa-check\"></i> Save</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/subcategory/subcategory.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-title [title]=\"'Subcategories'\"></app-page-title>\r\n<!-- Container fluid  -->\r\n<div class=\"container-fluid\">\r\n  <!-- Start Page Content -->\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Table Subcategories</h4>\r\n          <div>\r\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" [routerLink]=\"['/dashboard/subcategory-add']\">Add SubCategory</button>\r\n          </div>\r\n          <br>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\r\n              <thead>\r\n                <tr>\r\n                  <th>ID</th>\r\n                  <th>Name</th>\r\n                  <th>Description</th>\r\n                  <th>Options</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let subcategory of subcategories\">\r\n                  <td>{{subcategory.subcategory_id}}</td>\r\n                  <td>{{subcategory.name}}</td>\r\n                  <td>{{subcategory.description}}</td>\r\n                  <td>\r\n                    <div class=\"btn-group btn-group-sm\">\r\n                      <a class=\"btn btn-warning\" [routerLink]=\"['/dashboard/subcategory-edit', subcategory.subcategory_id]\">Edit</a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End PAge Content -->\r\n</div>\r\n<!-- End Container fluid  -->\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/subcategory/subcategory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_subcategory_service__ = __webpack_require__("./src/app/services/subcategory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubCategoryComponent = /** @class */ (function () {
    function SubCategoryComponent(_router, _subcategoryService) {
        this._router = _router;
        this._subcategoryService = _subcategoryService;
        this.title = 'Subcategories';
        this.subcategories = [];
    }
    SubCategoryComponent.prototype.ngOnInit = function () {
        this.getSubcategories();
    };
    SubCategoryComponent.prototype.getSubcategories = function () {
        var _this = this;
        this._subcategoryService.getSubcategories()
            .subscribe(function (res) {
            if (res.message === 'Bad Request') {
                console.log(res);
            }
            else {
                _this.subcategories = res.subcategory;
                console.log(_this.subcategories);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SubCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-subcategory',
            template: __webpack_require__("./src/app/components/dashboard/subcategory/subcategory.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_subcategory_service__["a" /* SubcategoryService */]])
    ], SubCategoryComponent);
    return SubCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main wrapper  -->\r\n<div class=\"error-page\" id=\"wrapper\">\r\n  <div class=\"error-box\">\r\n    <div class=\"error-body text-center\">\r\n      <h1>404</h1>\r\n      <h3 class=\"text-uppercase\">Page not found </h3>\r\n      <p class=\"text-muted m-t-30 m-b-30\">Please try after some time</p>\r\n      <a class=\"btn btn-info btn-rounded waves-effect waves-light m-b-40\" [routerLink]=\"['']\">Back to home</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- End Wrapper -->\r\n"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("./src/app/components/error/error.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"unix-login\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"login-content card\">\r\n          <div class=\"login-form\">\r\n            <h4>Login</h4>\r\n            <form #formSignin=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"alert alert-danger alert-dismissible fade show\" *ngIf=\"alert\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"closeAlert()\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <strong>The email you’ve entered doesn’t match any account.</strong>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Email address</label>\r\n                <input type=\"email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" required>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" required>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary btn-flat m-b-30 m-t-30\" [disabled]=\"!formSignin.form.valid\">Sign in</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _userService, _authService) {
        this._router = _router;
        this._userService = _userService;
        this._authService = _authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */](0, '', '', '', '', '', '', '', '');
        this.alert = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this._authService.canActivate()) {
            this._router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.authenticate(this.user.email, this.user.password)
            .subscribe(function (res) {
            _this._userService.saveStorage(res);
        }, function (err) {
            _this.alert = true;
            console.log(err);
        });
    };
    LoginComponent.prototype.closeAlert = function () {
        this.alert = false;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(user_id, firstname, lastname, email, phone, password, nit, address, image) {
        this.user_id = user_id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.nit = nit;
        this.address = address;
        this.image = image;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(_userService) {
        this._userService = _userService;
    }
    AuthService.prototype.canActivate = function () {
        if (this._userService.verifyUser()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryService = /** @class */ (function () {
    function CategoryService(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Global */].url;
    }
    CategoryService.prototype.getCategories = function () {
        return this._http.get(this.url + 'category')
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getCategory = function (id) {
        return this._http.get(this.url + 'category/' + id)
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.addCategory = function (category) {
        var json = JSON.stringify(category);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'category', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.updateCategory = function (id, category) {
        var json = JSON.stringify(category);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.put(this.url + 'category/' + id, json, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    CategoryService.prototype.deleteCategory = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.delete(this.url + 'category/' + id, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
var Global = {
    url: '//jbackend.herokuapp.com/'
};


/***/ }),

/***/ "./src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Global */].url;
    }
    ProductService.prototype.getProducts = function () {
        return this._http.get(this.url + 'product')
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProduct = function (id) {
        return this._http.get(this.url + 'product/' + id)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.addProduct = function (product) {
        var json = JSON.stringify(product);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'product', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.updateProduct = function (id, product) {
        var json = JSON.stringify(product);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.put(this.url + 'product/' + id, json, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProductService.prototype.deleteProduct = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.delete(this.url + 'product/' + id, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/subcategory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubcategoryService = /** @class */ (function () {
    function SubcategoryService(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Global */].url;
    }
    SubcategoryService.prototype.getSubcategories = function () {
        return this._http.get(this.url + 'subcategory')
            .map(function (res) { return res.json(); });
    };
    SubcategoryService.prototype.getSubcategory = function (id) {
        return this._http.get(this.url + 'subcategory/' + id)
            .map(function (res) { return res.json(); });
    };
    SubcategoryService.prototype.addSubcategory = function (subcategory) {
        var json = JSON.stringify(subcategory);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'subcategory', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SubcategoryService.prototype.updateSubcategory = function (id, subcategory) {
        var json = JSON.stringify(subcategory);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.put(this.url + 'subcategory/' + id, json, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    SubcategoryService.prototype.deleteSubcategory = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.delete(this.url + 'subcategory/' + id, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    SubcategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SubcategoryService);
    return SubcategoryService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* Global */].url;
    }
    UserService.prototype.getUser = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        user = user[0];
        return user;
    };
    UserService.prototype.setUser = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    UserService.prototype.getUsers = function () {
        return this._http.get(this.url + 'user')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (user) {
        var json = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'user', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUser = function (id, user) {
        var json = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.put(this.url + 'user/' + id, json, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.saveStorage = function (res) {
        var message = res.message;
        if (message === 'correct login') {
            localStorage.setItem('user', JSON.stringify(res.user));
            this._router.navigate(['/dashboard']);
        }
        else {
            return false;
        }
    };
    UserService.prototype.authenticate = function (user_name, user_password) {
        var user = {
            user_name: user_name,
            user_password: user_password
        };
        var json = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'login', json, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.verifyUser = function () {
        if (localStorage.getItem('user')) {
            return true;
        }
        return false;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map