import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrarNotaExamenService } from '../../services/registrar_nota_examen/registrar-nota-examen.service';
import { GetExamenIdService } from '../../services/get_examen_id/get-examen-id.service';

@Component({
  selector: 'app-resolver-examen',
  templateUrl: './resolver-examen.component.html',
  styleUrls: ['./resolver-examen.component.scss'],
})
export class ResolverExamenComponent implements OnInit {
  indexactual = 0;

  examen: any;
  id_examen = -1;

  respuestas: any = [];

  formtf: FormGroup;
  formarea: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private rne: RegistrarNotaExamenService, private gex: GetExamenIdService) {
    this.id_examen = Number(this.route.snapshot.paramMap.get('id'));
    this.examen = this.obtenerexamen(this.id_examen);
    this.createForm();
  }

  ngOnInit(): void { }

  createForm(): void {
    this.formtf = this.fb.group({
      answer_res: ['', [Validators.required]],
    });
    this.formarea = this.fb.group({
      answer_res: ['', [Validators.required]],
    });
  }

  obtenerexamen(id: number) {
    this.gex.get_examen_id(id).subscribe((data) => {
      data = data[0];
      data.preguntas = JSON.parse(data.preguntas);
      this.examen = data;
      console.log(this.examen);
    });
  }


  esultimo(): Boolean {
    if (this.indexactual == this.examen.num_preguntas - 1) {
      return true;
    }
    return false;
  }

  calificar(): Number {
    if (this.examen.preguntas[this.indexactual].tipo_respuesta == 2) {
      this.examen.preguntas[this.indexactual].res = this.formtf.controls[
        'answer_res'
      ].value;
      this.formtf.reset();
    } else if (this.examen.preguntas[this.indexactual].tipo_respuesta == 1) {
      this.examen.preguntas[this.indexactual].res = this.formarea.controls[
        'answer_res'
      ].value;
      this.formarea.reset();
    }

    var correctas = 0;

    for (var i = 0; i < this.examen.preguntas.length; i++) {
      switch (this.examen.preguntas[i].tipo_respuesta) {
        case 1:
          this.respuestas.push({ pregunta: this.examen.preguntas[i].pregunta, respuestas: this.examen.preguntas[i].res });
          if (this.examen.preguntas[i].opciones[0].respuesta == this.examen.preguntas[i].res) {
            correctas++;
          }
          break;
        case 2:
          this.respuestas.push({ pregunta: this.examen.preguntas[i].pregunta, respuesta: this.examen.preguntas[i].res });
          if (this.examen.preguntas[i].res != undefined) {
            for (var j = 0; j < this.examen.preguntas[i].opciones.length; j++) {
              if (this.examen.preguntas[i].opciones[j].respuesta == 'Verdadero' && this.examen.preguntas[i].opciones[j].es_correcta == 1 && this.examen.preguntas[i].res == 1) {
                correctas++;
                break;
              } else if (this.examen.preguntas[i].opciones[j].respuesta == 'Falso' && this.examen.preguntas[i].opciones[j].es_correcta == 1 && this.examen.preguntas[i].res == 0) {
                correctas++;
                break;
              }
            }
          }
          break;
        case 0:
          var internas = 0;
          this.respuestas.push({ pregunta: this.examen.preguntas[i].pregunta, respuesta: [] });
          for (var j = 0; j < this.examen.preguntas[i].opciones.length; j++) {
            if (!(this.examen.preguntas[i].opciones[j].res == false || this.examen.preguntas[i].opciones[j].res == undefined)) {
              this.respuestas[this.respuestas.length - 1].respuesta.push(this.examen.preguntas[i].opciones[j].respuesta);
              if (this.examen.preguntas[i].opciones[j].es_correcta == 1 && this.examen.preguntas[i].opciones[j].res == true) {
                internas++;
              } else {
                internas = this.examen.preguntas[i].num_correctas + 1;
                break;
              }
            }
          }
          if (internas == this.examen.preguntas[i].num_correctas) {
            correctas++;
          }
          break;
      }
    }

    var infoexamen: any = {};
    infoexamen.id_usuario = 1;
    infoexamen.id_clase = 1;
    infoexamen.id_examen = this.id_examen;
    infoexamen.nota_examen = Math.round((correctas / this.examen.preguntas.length) * this.examen.valor_examen);
    infoexamen.examen_respuesta = JSON.stringify(this.respuestas);

    this.rne.registrar_nota_examen(infoexamen).subscribe((data) => {
      if (data.affectedRows == 1) {
        console.log('Exito Siuuuuuuu')
      }
    });
    console.log(Math.round((correctas / this.examen.preguntas.length) * 100))
    return Math.round((correctas / this.examen.preguntas.length) * 100);
  }

  siguiente(): void {
    if (this.examen.preguntas[this.indexactual].tipo_respuesta == 2) {
      this.examen.preguntas[this.indexactual].res = this.formtf.controls[
        'answer_res'
      ].value;
      this.formtf.reset();
    } else if (this.examen.preguntas[this.indexactual].tipo_respuesta == 1) {
      this.examen.preguntas[this.indexactual].res = this.formarea.controls[
        'answer_res'
      ].value;
      this.formarea.reset();
    }
    this.indexactual++;
  }
}
