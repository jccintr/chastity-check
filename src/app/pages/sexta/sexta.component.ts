import { Component } from '@angular/core';
import { GridPhotosComponent } from '../../components/grid-photos/grid-photos.component';
import sexta from '../../data/sexta';
@Component({
  selector: 'app-sexta',
  imports: [GridPhotosComponent],
  templateUrl: './sexta.component.html',
  styleUrl: './sexta.component.css'
})
export class SextaComponent {
  imagens = sexta;
}
