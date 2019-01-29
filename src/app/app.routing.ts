import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HotComponent } from "./hot/hot.component";
import { NewComponent } from './new/new.component';
import { ControversialComponent } from './controversial/controversial.component';
import { TopComponent } from './top/top.component';
import { HotdetailComponent } from './hotdetail/hotdetail.component';

const appRoutes: Routes = [
    {
        path: '',
        component: CategoriesComponent
    },
    {
        path: 'hot',
        component: HotComponent
    },
    {
        path: 'hot/:id',
        component: HotdetailComponent
    },
    {
        path: 'new',
        component: NewComponent
    },

    {
        path: 'controversial',
        component: ControversialComponent
    },
    {
        path: 'top',
        component: TopComponent
    },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);