import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-infos-complementaires',
  templateUrl: './infos-complementaires.component.html',
  styleUrls: ['./infos-complementaires.component.scss']
})
export class InfosComplementairesComponent implements OnInit {

  @Input() myForm: FormGroup;
  constructor(
  ) { }

  ngOnInit() {
    this.myForm.addControl("aeronautique" , new FormControl());
    this.myForm.addControl("astronomie" , new FormControl());
  }

}


