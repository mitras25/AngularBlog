import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLeituraComponent } from './article-leitura.component';

describe('ArticleLeituraComponent', () => {
  let component: ArticleLeituraComponent;
  let fixture: ComponentFixture<ArticleLeituraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleLeituraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLeituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
