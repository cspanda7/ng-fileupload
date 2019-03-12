import { Component, OnInit } from '@angular/core';
import {ContentModel} from 'src/app/content.model'
import {UploadRequestModel} from 'src/app/upload-request.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-custom-file-upload',
  templateUrl: './custom-file-upload.component.html',
  styleUrls: ['./custom-file-upload.component.scss']
})
export class CustomFileUploadComponent implements OnInit {
  content:ContentModel
  UploadRequest:UploadRequestModel
  employee:{
    id:string,
    name:string
  }
  constructor(private http:HttpClient) {}

  ngOnInit() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept':'application/json',
      "Access-Control-Allow-Credentials":"true",
      'Access-Control-Allow-Origin':'*',
      "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
      "ServiceUser":"liteimmidartdms@immidart.com",
      "ServicePassword":"password",
      "Access-Control-Allow-Headers":"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,ServiceUser,ServicePassword"
     });
     this.employee={id:'1',name:'chandra'}
     let options = { headers: headers };
     this.http
     .post('http://localhost:64125/ImmidartDMS/V1/employee', this.employee,options)
     .subscribe(
       data  => {
       console.log("POST Request is successful ", data);
       },
       error  => {      
       console.log("Error", error);   
       });
  }
  fileChange(event) {   
    debugger;
    let fileList: FileList = event.target.files;  
    if(fileList.length > 0) {  
    let file: File = fileList[0];   
    let fileSize:number=fileList[0].size;  
    // let content:ContentModel;
    // content.BinaryData=fileList;
    // content.MimeType=fileList[0].type;

    let fileDetails={
    'dtRequest':{
      'User':{
        'Name':'chandra'
      },
      'DocumentDetail':{
        'DocumentType':fileList[0].type,
        'Category':'Category1',
        'FileName':fileList[0].name,
        'IsPrivate':true,
        'FileType':fileList[0].type
      },
      'Content':{
        'MimeType':fileList[0].type,
        'BinaryData':file
      }
    }
  }

    // var fileDetails =
    //  `<UploadRequestModel>
    //     <User><Name> ${'user1'}</Name></User>
    //     <DocumentDetail>
    //        <Category>${'Category1'}</Category>
    //        <DocumentType>${fileList[0].type}</DocumentType>
    //        <FileName>${fileList[0].name}</FileName>
    //        <FileType>${fileList[0].type}</FileType>
    //        <IsPrivate>true</IsPrivate>
    //     </DocumentDetail>
    //     <Content>
    //        <MimeType>image/jpeg</MimeType>
    //        <BinaryData>${file}</BinaryData>
    //     </Content>
    // </UploadRequestModel>`;

    let formData:FormData = new FormData();  
    let Response =JSON.parse(JSON.stringify(fileDetails));  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept':'application/json',
      "Access-Control-Allow-Credentials":"true",
      'Access-Control-Allow-Origin':'*',
      "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
      "ServiceUser":"liteimmidartdms@immidart.com",
      "ServicePassword":"password",
      "Access-Control-Allow-Headers":"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,ServiceUser,ServicePassword"
     });

    let options = { headers: headers };
    console.log(Response);
    //formData.append('dtRequest',Response);
    formData.append('myKey1', 'some value 1');
    formData.append('myKey1', 'some value 2');
    formData.append('myKey3', 'sadsd');
    this.http
    .post('http://localhost:64125/ImmidartDMS/V1/Upload', formData,options)
    .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {      
      console.log("Error", error);   
      });
    // formData.append('ClientId', this.clientId);  
    // formData.append('NetworkOrgID',this.networkContract.NetworkOrgID);  
    // formData.append('DocumentType','ClientContractDoc');  
    }
  }
}
