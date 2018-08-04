import { Component, OnInit } from '@angular/core';
import { MinisterService } from '../services/minister.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-ministers',
  templateUrl: './ministers.component.html',
  styleUrls: ['./ministers.component.css']
})
export class MinistersComponent implements OnInit {
private min : any = {};
  constructor(private ministerService : MinisterService) { }

  ngOnInit() {
  }

  saveMinisterRecord(){
this.ministerService.createEmp(this.min).subscribe(
  (res)=>{
console.log('The res is ',res)
  },
  (err)=>{
console.log('The error is ',err)
  }
)
  }







}
