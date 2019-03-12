import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader-angular1',
  templateUrl: './file-uploader-angular1.component.html',
  styleUrls: ['./file-uploader-angular1.component.scss']
})
export class FileUploaderAngular1Component implements OnInit {
   afuConfig = {
    uploadAPI: {
      url:"http://localhost:64125/ImmidartDMS/V1/Upload",
      headers: {
        'Content-Type':'application/json; charset=utf-8',
        // "Authorization" : `Bearer ${token}`
        "DMSServiceUser":"liteimmidartdms@immidart.com",
        "DMSServicePassword":"password",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"*",
        "Access-Control-Allow-Headers":"*"
         }
    },
    multiple:"true" ,
    formatsAllowed:".jpg,.png,.pdf" ,
    maxSize:"5", 
    ApiResponse:"DocUpload($event)",
    hideProgressBar:"false"
  };
  constructor() { }

  ngOnInit() {
 
  }
  DocUpload(upload:any){
    console.log(upload);
  }

}
