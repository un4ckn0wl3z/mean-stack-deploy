import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { authRouting } from "./auth.routing";

@NgModule({
  declarations:[
    SignupComponent,
    SigninComponent,
    LogoutComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    authRouting
  ]
})
export class AuthModule {


}