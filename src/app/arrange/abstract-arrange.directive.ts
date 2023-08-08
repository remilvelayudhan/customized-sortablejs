import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'abstract-arrange',
})
export class AbstractArrangeDirective {
  test = 'this is a test';
  constructor(private el: ElementRef, private renderer: Renderer2) { }
 
 
  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent) {
    const target = event.target as HTMLElement;
    this.renderer.addClass(event.target, 'dragging');
    event.dataTransfer?.setData('text/plain', target.innerHTML);
  }

  @HostListener('dragend',['$event']) onDragEnd(event: DragEvent) {
    this.renderer.removeClass(event?.target, 'dragging');
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.renderer.addClass(event?.target, 'drag-over');
  }

  @HostListener('dragleave',['$event'])
  onDragLeave(event: DragEvent) {
    this.renderer.removeClass(event?.target, 'drag-over');
  }


  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    event.preventDefault();
    this.renderer.removeClass(event.target, 'drag-over'); 
    const data = event.dataTransfer?.getData('text/plain');
    if (data) {
      const newItem = document.createElement('div');
      newItem.textContent = data;
      this.renderer.addClass(newItem, 'draggable');
      this.renderer.addClass(newItem, 'list-group-item');
      this.renderer.setAttribute(newItem, 'draggable', 'true'); 
      this.renderer.appendChild(event.target, newItem);

      const originalDraggable = document.querySelector('.dragging');
      originalDraggable && originalDraggable.remove();
      
    }
  }

}
