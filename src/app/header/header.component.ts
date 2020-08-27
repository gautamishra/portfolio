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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate = (event: any) => {
    let tab = event.target.innerText.toLowerCase();
   this.router.navigate([`/${tab}`]);
  }
}
