import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resolver-examen',
  templateUrl: './resolver-examen.component.html',
  styleUrls: ['./resolver-examen.component.scss'],
})
export class ResolverExamenComponent implements OnInit {
  indexactual = 0;

  examen: any;
  id_examen = -1;

  formtf: FormGroup;
  formarea: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.id_examen = Number(this.route.snapshot.paramMap.get('id'));
    this.examen = this.obtenerexamen(this.id_examen);
  }

  ngOnInit(): void {}

  createForm(): void {
    this.formtf = this.fb.group({
      answer_res: ['', [Validators.required]],
    });
    this.formarea = this.fb.group({
      answer_res: ['', [Validators.required]],
    });
  }

  obtenerexamen(id: number): any {
    if (id == 1) {
      var examen = {
        id_examen: 66,
        nombre_examen: '1er Parcial',
        id_clase: 1,
        num_preguntas: 4,
        valor_examen: 15,
        fecha: '2020-08-15T06:00:00.000Z',
        estado: 1,
        descripcion: 'este campo es obligatorio',
        preguntas:
          '[{"opciones": [{"respuesta": "lunes", "es_correcta": 1}, {"respuesta": "martes", "es_correcta": 0}, {"respuesta": "miercoles", "es_correcta": 0}, {"respuesta": "ninguna de las anteriores es correcta", "es_correcta": 0}], "pregunta": "¿Que día es hoy?", "num_correctas": 1, "tipo_respuesta": 0}, {"opciones": [{"respuesta": "Overwatch", "es_correcta": 1}, {"respuesta": "COD", "es_correcta": 1}, {"respuesta": "PUBG", "es_correcta": 1}, {"respuesta": "Free Fire", "es_correcta": 0}], "pregunta": "¿Que juego(s) juega Erick?", "num_correctas": 3, "tipo_respuesta": 0}, {"opciones": [{"respuesta": "Alexander", "es_correcta": 1}], "pregunta": "¿Cual es el segundo nombre de Erick", "num_correctas": 1, "tipo_respuesta": 1}, {"opciones": [{"respuesta": "Verdadero", "es_correcta": 1}, {"respuesta": "Falso", "es_correcta": 0}], "pregunta": "¿Sale el semestre?", "num_correctas": 1, "tipo_respuesta": 2}]',
      };
      examen.preguntas = JSON.parse(examen.preguntas);
      return examen;
    }
    return null;
  }

  esultimo(): Boolean {
    if (this.indexactual == this.examen.num_preguntas - 1) {
      return true;
    }
    return false;
  }

  calificar(): Number {
    return -1;
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
