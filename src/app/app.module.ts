import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';  // Forms
import { RouterModule, Routes } from '@angular/router'; // Routes
import { AuthGuard } from './guards/auth.guard'; // Route Guard



import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AddPostComponent } from './add-post/add-post.component';

const appRoutes:Routes = [
  {path:"", component:LoginComponent},
  {path:"blog", component:BlogComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthGuard]},
  {path:"edit", component:EditPostComponent},
  {path:"add", component:AddPostComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    LoginComponent,
    DashboardComponent,
    EditPostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
