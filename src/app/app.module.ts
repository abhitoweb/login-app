import { BrowserModule } from '@angular/platform-browser';//
import { NgModule } from '@angular/core';//
import { FormsModule } from '@angular/forms';//
import { HttpModule } from '@angular/http';//

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';//
import { UserService} from './user.service';
import { FactoryService} from './factory.service';
import { AuthGuard} from './auth.guard';
import { UserComponent } from './user/user.component';
import { NoDataComponent } from './no-data/no-data.component';
import { ProductComponent } from './product/product.component';
const appRoute:Routes=[
  { path:  '',  component:LoginComponent},
  { path:'dashboard', canActivate : [AuthGuard], component:DashboardComponent},
  { path:'user',
    pathMatch:'prefix',//'full'
     //component: UserComponent,
     children:[
       {path: ':name',component: UserComponent},
       {path: ':name/:id', component: UserComponent}
     ]
  },
  { path:'**', component: NoDataComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    NoDataComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,//
    FormsModule,//
    HttpModule,//
    RouterModule.forRoot(appRoute)//

  ],
  providers: [UserService, AuthGuard, FactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
