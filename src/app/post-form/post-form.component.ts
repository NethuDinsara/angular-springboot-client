import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  formData={email:'',phone:'',name:''};
  responseMessage ='';//messgge to display response

  constructor(private apiService: ApiService){}


  onSubmit(){
    this.apiService.postData(this.formData).subscribe({
      next:(response)=>{
        this.responseMessage='Data sent successfully!';
        console.log(response);
      },
      error:(error)=>{
        this.responseMessage='Error sending Data';
        console.error(error);
      }
    });
  }
}
