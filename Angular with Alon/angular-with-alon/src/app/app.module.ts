// modules, services etc. //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DalService } from './services/dal-service.service';
import { UserDetailsService } from './services/user-details.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// components //
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TasksComponent,
    PostsComponent,
    CommentsComponent,
    UserDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DalService,
    UserDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
