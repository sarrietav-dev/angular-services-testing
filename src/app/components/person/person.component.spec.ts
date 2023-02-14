import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Person, PersonComponent } from './person.component';

fdescribe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    const person: Person = { name: 'Sebas', height: 1.75, weight: 75 };
    component.person = person;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the name "Sebas"', () => {
    const personDebug = fixture.debugElement;
    const h3Debug = personDebug.query(By.css('h3'));
    const h3: HTMLElement = h3Debug.nativeElement;

    fixture.detectChanges();

    expect(h3.textContent).toContain('Sebas');
  });

  it('should have the height "1.75"', () => {
    const personDebug = fixture.debugElement;
    const pDebug = personDebug.query(By.css('p#altura'));
    const p: HTMLElement = pDebug.nativeElement;

    fixture.detectChanges();

    expect(p.textContent).toContain('1.75');
  });

  it('should have the weight "75"', () => {
    const personDebug = fixture.debugElement;
    const pDebug = personDebug.query(By.css('p#peso'));
    const p: HTMLElement = pDebug.nativeElement;

    fixture.detectChanges();

    expect(p.textContent).toContain('75');
  });

  it('should have the BMI "24.49"', () => {
    const bmi = component.computeBMI(
      component.person.height,
      component.person.weight
    );
    expect(bmi).toBe('Normal weight');
  });

  it('should have the BMI status "Normal weight" in the button', () => {
    const personDebug = fixture.debugElement;
    const buttonDebug = personDebug.query(By.css('button'));
    const button: HTMLButtonElement = buttonDebug.nativeElement;

    buttonDebug.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(button.textContent).toContain('Normal weight');
  });

  it('should return a person when clicked', () => {
    const personDebug = fixture.debugElement;
    const buttonDebug = personDebug.query(By.css('button#chooser'));
    const expectedPerson: Person = { name: 'Sebas', height: 1.75, weight: 75 };
    let selectedPerson: Person | undefined;

    component.onSelected.subscribe((person) => {
      selectedPerson = person;
    });

    buttonDebug.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(selectedPerson).toEqual(expectedPerson);
  });
});
