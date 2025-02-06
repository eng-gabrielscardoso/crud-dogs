import { model, Schema } from 'mongoose';

export interface IDog {
  name: string;
  breed: string;
  color: string;
  weight: number;
}

const schema = new Schema<IDog>(
  {
    name: String,
    breed: String,
    color: String,
    weight: Number,
  },
  {
    timestamps: true,
  },
);

export const Dog = model<IDog>('Dog', schema, 'dogs');
