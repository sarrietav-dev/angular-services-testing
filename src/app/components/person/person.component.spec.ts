import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PersonComponent } from './person.component';

fdescribe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("shout have an h3 element with 'Hola, PersonComponent'", () => {
    const personDebug = fixture.debugElement;
    const h3Debug = personDebug.query(By.css('h3'));
    const h3: HTMLElement = h3Debug.nativeElement;
    expect(h3.textContent).toBe('Hola, PersonComponent');
  });

  it("should have a p element with 'Soy un parrafo'", () => {
    const personDebug: DebugElement = fixture.debugElement;
    const pDebug: DebugElement = personDebug.query(By.css('p'));
    const personElement: HTMLElement = pDebug.nativeElement;
    expect(personElement?.textContent).toBe('Soy un parrafo');
  });
});
