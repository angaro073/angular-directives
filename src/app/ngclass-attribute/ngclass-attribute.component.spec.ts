import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { NgclassAttributeComponent } from './ngclass-attribute.component';

describe('NgclassAttributeComponent', () => {

  let component: NgclassAttributeComponent;
  let fixture: ComponentFixture<NgclassAttributeComponent>;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [NgclassAttributeComponent]}).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('should toggle isClicked when the button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(component.isClicked).toBe(false);
    button.click();
    fixture.detectChanges();
    expect(component.isClicked).toBe(true);
    button.click();
    fixture.detectChanges();
    expect(component.isClicked).toBe(false);
  });
  it('should apply text with a green background when isClicked is true', () => {
    const h3Element = fixture.nativeElement.querySelector('h3');
    expect(h3Element.classList.contains('text-darkgreen')).toBe(false);
    component.isClicked = true;
    fixture.detectChanges();
    expect(h3Element.classList.contains('text-darkgreen')).toBe(true);
  });
});