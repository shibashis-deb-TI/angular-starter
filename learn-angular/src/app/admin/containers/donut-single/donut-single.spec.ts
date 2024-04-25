import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { DonutSingleComponent } from './donut-single.component';
import { DonutService } from '../../services/donut.service';
import { Donut } from '../../models/donut.model';

describe('DonutSingleComponent', () => {
  let component: DonutSingleComponent;
  let fixture: ComponentFixture<DonutSingleComponent>;
  let activatedRoute: ActivatedRoute;
  let router: Router;
  let donutService: DonutService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonutSingleComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } },
        },
        { provide: Router, useValue: {} },
        { provide: DonutService, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutSingleComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    donutService = TestBed.inject(DonutService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize donut and isEdit', () => {
    const donut: Donut = {
      id: '1',
      name: 'Chocolate Donut',
      description: 'ghjkl;',
      icon: 'fghjkl',
      price: 89,
    };
    spyOn(activatedRoute.snapshot.paramMap, 'get').and.returnValue('1');
    spyOn(donutService, 'readOne').and.returnValue(of(donut));

    component.ngOnInit();

    expect(activatedRoute.snapshot.paramMap.get).toHaveBeenCalledWith('id');
    expect(donutService.readOne).toHaveBeenCalledWith('1');
    expect(component.donut).toEqual(donut);
    expect(component.isEdit).toBeUndefined();
  });

  it('should create a new donut', () => {
    const donut: Donut = {
      id: '1',
      name: 'Chocolate Donut',
      description: 'ghjkl;',
      icon: 'fghjkl',
      price: 89,
    };
    spyOn(donutService, 'create').and.returnValue(of(donut));
    spyOn(router, 'navigate');

    component.onCreate(donut);

    expect(donutService.create).toHaveBeenCalledWith(donut);
    expect(router.navigate).toHaveBeenCalledWith(['admin', 'donuts', '1']);
  });

  it('should update an existing donut', () => {
    const donut: Donut = {
      id: '1',
      name: 'Chocolate Donut',
      description: 'ghjkl;',
      icon: 'fghjkl',
      price: 89,
    };
    spyOn(donutService, 'update').and.returnValue(of());
    spyOn(router, 'navigate');

    component.onUpdate(donut);

    expect(donutService.update).toHaveBeenCalledWith(donut);
    expect(router.navigate).toHaveBeenCalledWith(['admin']);
  });

  it('should delete a donut', () => {
    const donut: Donut = {
      id: '1',
      name: 'Chocolate Donut',
      description: 'ghjkl;',
      icon: 'fghjkl',
      price: 89,
    };
    spyOn(donutService, 'delete').and.returnValue(of());
    spyOn(router, 'navigate');

    component.onDelete(donut);

    expect(donutService.delete).toHaveBeenCalledWith(donut);
    expect(router.navigate).toHaveBeenCalledWith(['admin']);
  });
});
