import { Component, OnInit, Input } from '@angular/core';
import {Student} from "./student.model"
@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // name: string = 'Luke';
  // isJedi: boolean = true;


  @Input()student: Student;
  students:Student[] = [
    {name: 'Luke', isJedi: true, templo: 'Coruscant'},
    {name: 'Leia', isJedi: false},
    {name: 'Han Solo', isJedi: false}
  ];

  constructor() { }

  ngOnInit() {
  }

}
