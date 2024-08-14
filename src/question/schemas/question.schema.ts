import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema()
export class Cat {
  @Prop({ required: true })
  title: string;

  @Prop()
  desc: number;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
