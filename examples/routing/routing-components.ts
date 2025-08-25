import { Component } from "@angular/core";
import { Routes } from "@angular/router";

@Component({
    selector: 'app-home',
    template: ''
})
export class HomeComponent {

}

@Component({
    selector: 'app-product-list',
    template: ''
})
export class ProductListComponent {

}

@Component({
    selector: 'app-product-detail',
    template: ''
})
export class ProductDetailComponent {

}

@Component({
    selector: 'app-user',
    template: ''
})
export class UserComponent {

}

@Component({
    selector: 'app-user-security',
    template: ''
})
export class UserSecurityComponent {

}

@Component({
    selector: 'app-user-profile',
    template: ''
})
export class UserProfileComponent {

}

@Component({
    selector: 'app-not-found',
    template: ''
})
export class NotFoundComponent {

}

export const userRoutes: Routes = [
    {
        path: 'security',
        component: UserSecurityComponent
    },
    {
        path: 'profile',
        component: UserProfileComponent
    }
]
