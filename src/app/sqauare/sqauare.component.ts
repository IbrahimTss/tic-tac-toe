import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqauare',
  templateUrl: './sqauare.component.html',
  styleUrls: ['./sqauare.component.scss']
})
export class SqauareComponent  {
// winner : boolean = false
@Input() random !: 'X' | 'O'  ;

}
