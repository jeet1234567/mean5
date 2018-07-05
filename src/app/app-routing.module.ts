import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component';
import { OrdersComponent } from './orders/orders.component' 
const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'about',component: AboutComponent},
    { path: 'contact',component: ContactComponent},
    {path: 'news',component: NewsComponent},
    { path: 'user',
        children:[{path:'list',component: UserlistComponent,
                  children:[{path:'details/:name', component:UserComponent}]
                  }]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}