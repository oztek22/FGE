import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  fieldText;
  @Input()
  data;
  @Output()
  fieldValueChange = new EventEmitter<any>();
  @Input()
  get fieldValue() {
    return this.fieldText;
  }
  set fieldValue(val) {
    this.fieldText = val;
    this.fieldValueChange.emit(this.fieldText);
  }

  constructor() { }

  ngOnInit() {
  }

  dropDocument(event) {
    console.log(event);
    if (event.dataTransfer.files) {
      this.readfiles(event.dataTransfer.files);
    }
    this.preventDefault(event);
  }

  preventDefault(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  uploadFile(e) {
    console.log(e.target.files);
    this.readfiles(e.target.files);
  }

  readfiles(files) {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      // files[i].name
      // files[i].size
      // files[i].type
      const reader = new FileReader();
      reader.onload = function(event) {
        // to send base64
        console.log(event.target['result']);
        const fd = new FormData();
        fd.append('fname', files[i].name);
        fd.append('data', event.target['result']);
        // to send blob data
        console.log(fd);
      }
      reader.readAsDataURL(files[i]);
    }
  }

}
