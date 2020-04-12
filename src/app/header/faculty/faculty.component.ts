import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  onsignup(form: NgForm): void {
  console.log(form.value.firstname);
    console.log(form.value.username);
    console.log(form.value.password);
    console.log(form.value.confirmpassword);
    console.log(form.value.email);
    console.log(form.value.phoneno);
    console.log(form.value.batch);
    if (form.invalid) {
      alert("Please check your given details");
    } else if (form.value.password ===  form.value.confirmpassword) {
    this.router.navigate(['/upload']);
     }/*else {
      this.authService.login(form.value.username, form.value.password);
    }*/
}
}