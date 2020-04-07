import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  title ='pro1';
  resData;
  newsData;
 constructor (private http:HttpClient)
 { }

  ngOnInit() 
  {
    let url="http://newsapi.org/v2/top-headlines?country=in&apiKey=19a57321ba864ffc8e7c177434115ccb";
    this.http.get(url)
    .subscribe(res=>
      {
        console.log(res)
        this.resData=res;
        if(this.resData.status=="ok")
      {
          this.newsData=this.resData.articles;
          console.log(this.newsData)
      }
  },err=>
  {
    console.log(err)
  })

}
  }