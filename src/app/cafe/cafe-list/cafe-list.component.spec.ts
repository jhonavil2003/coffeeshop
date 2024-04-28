import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeListComponent } from './cafe-list.component';
import {HttpClientModule} from "@angular/common/http";
import {CafeService} from "../service/cafe.service";
import {Cafe} from "../model/Cafe";
import { faker } from '@faker-js/faker';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CafeListComponent],
      providers: [ CafeService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    component.coffees = [
      new Cafe(faker.number.int(), faker.person.fullName(), "Blend", faker.location.state(), faker.lorem.word(), faker.number.int(), faker.image.url()),
      new Cafe(faker.number.int(), faker.person.fullName(), "Blend", faker.location.state(), faker.lorem.word(), faker.number.int(), faker.image.url()),
      new Cafe(faker.number.int(), faker.person.fullName(), "Café de Origen", faker.location.state(), faker.lorem.word(), faker.number.int(), faker.image.url()),

    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it("Table has 3 rows", () => {
    const tbd = debug.query(By.css("tbody"));
    const contentTbd: HTMLElement = tbd.nativeElement;
    const th = debug.query(By.css("thead"));
    const contentTh: HTMLElement = th.nativeElement;

    expect(contentTbd.childElementCount + contentTh.childElementCount).toBe(4);
  });
});
