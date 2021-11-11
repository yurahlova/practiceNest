import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
  Courses = 1,
  Services = 2,
  Books = 3,
  Products = 4,
}

export class HhData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export class TopPageAdvantages {
  @prop()
  title: string;

  @prop()
  description: string;
}

export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategory, type: () => Number })
  firstLevelCategory: TopLevelCategory;

  @prop()
  secondCategory: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop({ unique: true })
  alias: string;

  @prop({ _id: false, type: () => HhData })
  hh?: HhData;

  @prop({ type: () => [TopPageAdvantages] })
  advantages: TopPageAdvantages[];

  @prop()
  seoText: string;

  @prop()
  tagsTitle: string;

  @prop({ type: () => [String] })
  tags: string[];
}
