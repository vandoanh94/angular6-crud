export interface IFiles {
    page: number;
    total: number;
    list: Array<IFile>;
}

export interface IFile {
    id: string;
    name: string;
    size: number;
    location: string;
    url: string;
    object_type: string;
    last_modified: string;
    modified_by: string;
}

export class Files {
    page: number;
    total: number;
    list: Array<File>;
}

export class File {
    id: string;
    name: string;
    size: number;
    location: string;
    url: string;
    object_type: string;
    last_modified: string;
    modified_by: string;
    edit:boolean = false;
}



