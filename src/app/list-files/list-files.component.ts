import { Component, OnInit, ViewChild } from '@angular/core';
import { ListFilesService } from './list-files.service';
import { Files, File } from './list-files.model';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.css']
})
export class ListFilesComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  public listFiles: Array<File> = new Array<File>();

  constructor(private listFilesService: ListFilesService) {
  }

  ngOnInit() {
  }

  public getListFiles(): void {
    this.listFilesService.getListFiles().subscribe((res: Files) => {
      this.listFiles = res.list;
    });
  }

  private upload(): void {
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('file', fileBrowser.files[0]);
      this.listFilesService.uploadFile(formData).subscribe(res => {
        console.log('upload', res);
      });
    }
  }

  private deleteFile(file: File): void {
    file = new File();
    file.id = '5b238a9ca7b11b0001405d4e';
    this.listFilesService.deleteFile(file.id).subscribe(res => {
      console.log('delete', res);
    });
  }
}
