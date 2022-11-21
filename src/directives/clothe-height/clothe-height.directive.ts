import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

/**
 * DIRECTIVE: Used to set the height in out clothe component name
 */
@Directive({
  selector: '[appClotheHeight]',
})
export class ClotheHeightDirective {
  /**
   * Lenght of the materials array, used to calc height of component
   */
  lenght!: number;
  /**
   * Flag used to know if is collapsed or not
   */
  flag!: boolean;

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2
  ) {}
  /**
   * Selected materials variable
   */
  @Input('materials')
  set testHeight(e: number) {
    this.lenght = e;
    this.collapseAndPaint();
  }

  /**
   * Inputs the flag
   */
  @Input('collapse')
  set collapse(flag: boolean) {
    this.flag = flag;
    this.collapseAndPaint();
  }

  /**
   * Calcs the height of the component, the color if is empty, and collapses it.
   */
  collapseAndPaint() {
    if (this.flag) {
      if (this.lenght > 0) {
        this.renderer.setStyle(
          this.el.nativeElement,
          'height',
          `${this.calcHeight(this.lenght)}px`
        );
        this.renderer.setStyle(
          this.el.nativeElement,
          'backgroundColor',
          '#C6DFFF'
        );
        this.renderer.setStyle(this.el.nativeElement, 'color', '#1968F8');
      } else {
        this.renderer.setStyle(
          this.el.nativeElement,
          'backgroundColor',
          '#F5F5F5'
        );
        this.renderer.setStyle(this.el.nativeElement, 'color', '#9F9F9F');
      }
    } else {
      if (this.lenght > 0) {
        this.renderer.setStyle(this.el.nativeElement, 'height', `40px`);
        this.renderer.setStyle(
          this.el.nativeElement,
          'backgroundColor',
          '#C6DFFF'
        );
        this.renderer.setStyle(this.el.nativeElement, 'color', '#1968F8');
      } else {
        this.renderer.setStyle(
          this.el.nativeElement,
          'backgroundColor',
          '#F5F5F5'
        );
        this.renderer.setStyle(this.el.nativeElement, 'color', '#9F9F9F');
      }
    }
  }

  /**
   * Calcs target height
   */
  private calcHeight(lenght: number): number {
    return (lenght + 1) * 50 - 10;
  }
}
