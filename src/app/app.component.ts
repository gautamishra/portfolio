import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';


const placeholderText = ['GAUTAM MISHRA' , 'FULLSTACK', 'FREELANCER'];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'portfolio';
  width = 20;
  isDecreaing = false;
  maxWidth = 0;
  @ViewChild('place') placeText : ElementRef;
  val = '';
  current = 0;
  constructor() {
   
  }

  ngOnInit() {
  }

  checkWidth = () => {
    setInterval(()=> {
      if(!this.isDecreaing && this.width >= this.maxWidth ){
        this.isDecreaing = true;
      }
      if(this.isDecreaing  && this.width <= 0){
        this.isDecreaing= false;
      }
      this.width += this.isDecreaing ? -20 : 20;
      if(this.width <= 0){
        this.current = this.current++/3;
        this.val = placeholderText[1];
        this.getUpdatedWidth();
      }
      
    }, 80);
  }

  ngAfterViewInit() {
    this.val = placeholderText[0];
   this.getUpdatedWidth();
  }

  getUpdatedWidth() {
    this.width = 20;
    const rect = this.placeText.nativeElement.getBoundingClientRect();
    this.maxWidth = Math.round(rect.left + rect.width);
    this
    console.log(rect);
    // this.checkWidth();
  }
  
}
