import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderAngular1Component } from './file-uploader-angular1.component';

describe('FileUploaderAngular1Component', () => {
  let component: FileUploaderAngular1Component;
  let fixture: ComponentFixture<FileUploaderAngular1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploaderAngular1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderAngular1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
