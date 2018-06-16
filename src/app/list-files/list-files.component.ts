import { Component, OnInit, ViewChild } from '@angular/core';
import { ListFilesService } from './list-files.service';
import { Files, File } from './list-files.model';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.css']
})
export class ListFilesComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  public listFiles: Array<File> = new Array<File>();
  public listFilesSelected: Array<File> = new Array<File>();
  public fileSelected:File = new File();
  public borderItem = "3px solid blue";

  constructor(private listFilesService: ListFilesService) {
    this.getListFiles();
  }

  ngOnInit() {
  }

  public getListFiles(): void {
    this.listFilesService.getListFiles().subscribe((res: Files) => {
      this.listFiles = res.list;
      console.log("getfile",res);
    });
  }

  private upload(): void {
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('file', fileBrowser.files[0]);
      this.listFilesService.uploadFile(formData).subscribe(res => {
        console.log('upload', res);
        this.getListFiles();
      });
    }
  }

  private deleteFile(file: File): void {
    this.listFilesService.deleteFile(file.id).subscribe(res => {
      console.log('delete', res);
      this.getListFiles();
      this.fileSelected = new File();
    });
  }

  public clickItem(item:File){
    let element = document.getElementById(item.id);
    if(element.style.border==this.borderItem){
      element.style.border="";
      this.listFilesSelected.splice(this.listFilesSelected.indexOf(item), 1);
    }
    else{
      element.style.border=this.borderItem;
      this.listFilesSelected.push(item);
      this.fileSelected = item;
    }
  }

  public downloadFile(file:File) : void{
    if(file.id){
      this.listFilesService.downloadFile(file);
    }
  }

  public updateFile(file:File){
    this.listFilesService.updateFile(file).subscribe();
  }

  public editFile(file:File){
    file.edit = true;
  }
}
