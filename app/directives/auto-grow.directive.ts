import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[autoGrow]', // Will trigger if autoGrow attribute is attached to some element
    host: { // Subscribing to events on this element
        '(focus)': 'onFocus($event)',
        '(blur)': 'onBlur($event)'
    }

})
export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
        
    }

    onFocus() {
        // el.nativeElement gives us access to the DOM element
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200'); 
    }

    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }
}