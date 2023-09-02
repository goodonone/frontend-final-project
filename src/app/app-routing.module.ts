import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [{ 
  path: "",
  redirectTo: "/home",
  pathMatch: "full"
},
{
  path: "signin",
  component: SignInComponent
},
{
  path: "signup",
  component: SignUpComponent
},
{
  path: "home",
  component: FrontpageComponent
},
{
  path: "profile/:UserId",
  component: ProfileComponent
},
{
  path: "edit-profile/:UserId",
  component: EditProfileComponent
},
{
  path: "edit-post",
  component: EditPostComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
