import { plainToInstance } from 'class-transformer';
import 'reflect-metadata';

export class ShipMod {
  id!: string;
  jsonType!: string;
  name!: string;
  description!: string;
  icon!: string;

  isHaveSModEffect!: boolean;

  frigateCost!: number;
  destroyerCost!: number;
  cruiserCost!: number;
  capitalCost!: number;

  frigateDescription!: string;
  destroyerDescription!: string;
  cruiserDescription!: string;
  capitalDescription!: string;

  frigateSDescription!: string;
  destroyerSDescription!: string;
  cruiserSDescription!: string;
  capitalSDescription!: string;

  tags!: string[];
  uiTags!: string[];

  static deserialize(object: object) {
    return plainToInstance(ShipMod, object);
  }
}