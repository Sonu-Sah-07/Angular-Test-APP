import { Component, OnInit } from '@angular/core';
import { PersonDetailService } from '../person-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  personData : any;

  constructor(private personService : PersonDetailService, private router : Router) { }

  ngOnInit(): void {
    this.personService.getPerson().subscribe(res=>{
      this.personData = res;
      console.log(res);
    })
  }

  edit(index:number){
    console.log(this.personData[index])
    this.router.navigate(["/add-person",index])
  }

}
