import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  btnText:string;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit() {

    this.btnText = "Show";
  }

  showEmployee() {
    this.router.navigate(['/employee-list']);
    this.btnText = this.btnText === "Hide"? "Show" : "Hide";
  }

}
