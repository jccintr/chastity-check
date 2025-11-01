import { Component,Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  imports: [],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css'
})
export class LightboxComponent {
  @Input() imageUrl: string = '';
  @Input() isOpen: boolean = false;

  @Output() close = new EventEmitter<void>();

  closeLightbox() {
    this.close.emit();
  }

  // Fechar ao clicar fora da imagem
  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    if (this.isOpen) {
      this.closeLightbox();
    }
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('lightbox-overlay')) {
      this.closeLightbox();
    }
  }

}
