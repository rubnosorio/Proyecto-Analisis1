import { Component, OnInit } from '@angular/core';
import { SelectTareaService } from "../../services/select-tarea/select-tarea.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-tarea',
  templateUrl: './select-tarea.component.html',
  styleUrls: ['./select-tarea.component.scss']
})
export class SelectTareaComponent implements OnInit {

  constructor(private selectTareaService: SelectTareaService) {
    this.selectTareaService.getTareas(1,1).subscribe((res:any)=>{
      console.log(res);
    });
   }

  ngOnInit(): void {
  }

}
