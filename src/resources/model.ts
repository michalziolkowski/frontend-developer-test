export interface IUser {
  id: string;
  info: IUserInfo;
  associated?: IUser;
  photos: IImage[];
}

export interface IUserInfo {
  age: number;
  type: string;
  gender: string;
  sexuality: string;
  name: string;
  about: string;
  desires: string[];
  interests: string[];
}

export interface IImage {
  url: string;
  width: number;
  height: number;
}
