import { Component, OnInit } from '@angular/core';
import { faHome, faComment, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faHome = faHome;
  faUSer = faUser;
  faEnvolope = faEnvelope;
  toggle = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate = (event: any) => {
    if(event.target.innerText === 'Contact'){
      return;
    }
    if(event.target.innerText !== 'Project'){
    let tab = event.target.innerText.toLowerCase();
   this.router.navigate([`/${tab}`]);
    } else {
      window.location.href = 'https://github.com/gautamishra';
    }
  }

  navigateMob = (tab: any) => {
    this.openNav();
    
    if(tab === 'project'){
      window.location.href = 'https://github.com/gautamishra';
    } else {
      this.router.navigate([`/${tab}`]);
    }

  }

  openNav = () => {
    this.toggle =!this.toggle;
  }
}
