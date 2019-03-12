import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule,NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
// import { Select2Module,Select2Component } from 'ng2-select2';

import { AngularFileUploaderModule } from "angular-file-uploader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploaderAngular1Component } from './file-uploader-angular1/file-uploader-angular1.component';
import { CustomFileUploadComponent } from './custom-file-upload/custom-file-upload.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { PreviousTravelComponent } from './previous-travel/previous-travel.component';
import { Select2Module } from "ng-select2-component";

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderAngular1Component,
    CustomFileUploadComponent,
    PreviousTravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDatepickerModule,
    Select2Module,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
