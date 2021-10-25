export interface UrlList {
    createdAt: string,
    fullURL: string,
    key: string,
    usage: Object,
    totalClicks: number,
    id: number
  }

export interface user{
  name:string,
  email:string,
  dob:Date,
  password:string
}

export interface LoginUser{
  name:string,
  paswword:string
}