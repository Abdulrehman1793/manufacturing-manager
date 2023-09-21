import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { UnitOfMeasure } from '../models/uom';

@Injectable()
export class UomService extends EntityCollectionServiceBase<UnitOfMeasure> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('UOM', serviceElementsFactory);
  }
}
