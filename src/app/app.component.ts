import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.form.patchValue({
    //   userdata:{
    //     username:suggestedName
    //   }
    // });

    this.signupForm.form.setValue({
      userdata:{
        username:suggestedName,
        email:'ayoub@outlook.fr'
      },
      secret:'pet',
      questionAnswer:'test',
      gender:'male'
    })
  }
  user={
    username:'',
    email:'',
    secret:'',
    questionAnswer:'',
    gender:''
  }
  bydefault='teacher';
  answer='';
  genders=['male','female'];
  @ViewChild('f') signupForm:NgForm;
  submitted=false;
  onsubmit(){
    this.submitted=true;
    this.user.username=this.signupForm.value.userdata.username;
    this.user.email=this.signupForm.value.userdata.email;
    this.user.secret=this.signupForm.value.secret;
    this.user.questionAnswer=this.signupForm.value.questionAnswer;
    this.user.gender=this.signupForm.value.gender;

    this.signupForm.reset(); //vider les champs

  }

}
