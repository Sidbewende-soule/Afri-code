import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nosservices } from './nosservices';

describe('Nosservices', () => {
  let component: Nosservices;
  let fixture: ComponentFixture<Nosservices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nosservices],
    }).compileComponents();

    fixture = TestBed.createComponent(Nosservices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
