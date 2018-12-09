export interface IUser {
  id: string;
  localId: string;
  info: IUserInfo;
  associated?: IAssociated;
  photos: IImage[];
}

export interface IAssociated {
  age: number;
  gender: string;
  sexuality: string;
  name: string;
}

export interface IUserInfo {
  age: number;
  type: string;
  gender: string;
  sexuality: string;
  name: string;
  about: string;
  desires?: string[];
  interests?: string[];
}

export interface IImage {
  url: string;
  width: number;
  height: number;
}
