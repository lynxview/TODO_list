import {
   Component,
   OnInit,
   Output,
   EventEmitter
 } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-formulario-control',
  outputs:['onArticleAdded'],
  templateUrl: './formulario-control.component.html',
  styleUrls: ['./formulario-control.component.css']
})
export class FormularioControlComponent {
  myForm: FormGroup;
  nombre: AbstractControl;
  valor: AbstractControl;
  onArticleAdded: EventEmitter<any>;

  constructor(fb: FormBuilder) {
    this.onArticleAdded = new EventEmitter();
    this.myForm = fb.group({
      'nombre':  ['', Validators.required],
      'valor':  ['', Validators.required],
    });

    this.nombre = this.myForm.controls['nombre'];
    this.valor = this.myForm.controls['valor'];

    this.nombre.valueChanges.subscribe(
      (value: string) => {
        console.log('nombre changed to:', value);
      }
    );

    this.valor.valueChanges.subscribe(
      (value: string) => {
        console.log('valor changed to:', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }

  onSubmit(form: any): void {
    this.onArticleAdded.emit(form);
  }
}
