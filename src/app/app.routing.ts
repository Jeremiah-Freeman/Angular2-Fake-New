import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';


const appRoutes: Routes = [

    {
      path: '',
      component: WelcomeComponent
    },

    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'breaking-news',
      component: BreakingNewsComponent
    }

   ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
