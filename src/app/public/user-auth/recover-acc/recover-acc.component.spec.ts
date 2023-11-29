import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverAccComponent } from './recover-acc.component';

describe('RecoverAccComponent', () => {
  let component: RecoverAccComponent;
  let fixture: ComponentFixture<RecoverAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverAccComponent]
    });
    fixture = TestBed.createComponent(RecoverAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
