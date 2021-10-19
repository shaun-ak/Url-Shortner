import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShortnerService } from '../shortner.service';
import { UrlList } from '../modal';

@Component({
  selector: 'app-short-url-screen',
  templateUrl: './short-url-screen.component.html',
  styleUrls: ['./short-url-screen.component.css']
})
export class ShortUrlScreenComponent implements OnInit {
  textValue={};
  url="";
  urlForm:FormGroup;

  constructor(private router: Router,private urlService:ShortnerService) { 
    this.urlForm= new FormGroup({
      'urlLink': new FormControl('', [Validators.required])
    })

  }

  ngOnInit(): void {
  }
  randomStr(len:number, arr:Array<string>) {
      var ans = '';
      for (var i = len; i > 0; i--) {
          ans += 
            arr[Math.floor(Math.random() * arr.length)];
      }
      return ans;
  }
  shorten(){
    let Url = this.randomStr;
    this.url = "UrlShortener/" + Url(4,['0','1','2','3','4','5','6','7','8','9','a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z']);
    this.textValue=this.urlForm.value;
    Object.keys(this.urlForm.controls).forEach(field => {
      const control = this.urlForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });


    if(this.urlForm.valid && this.urlForm.dirty){
      let longURL = this.urlForm.value.urlLink;
      this.textValue = longURL;
      console.log(this.textValue);
      this.urlService.saveURL(this.create(longURL,this.url)).subscribe((data) => {
          console.log(data);
      },() => {
        alert("Something Went Wrong!")
      })
    }
  }

  create(longURL: string, shortURL: string): UrlList {
    return ({
      createdAt: new Date().toString().slice(4,15).toUpperCase(),
      fullURL: longURL,
      key: shortURL,
      usage: {},
      totalClicks: 0,
      id: 0
    });
  }

  redirectTo(){
    window.open(this.urlForm.value.urlLink);
  }
}
