import { Dog } from './schema';

export const createDog = async (
  name: string,
  breed: string,
  color: string,
  weight: number,
) => {
  const doc = new Dog({
    breed,
    color,
    name,
    weight,
  });
  await doc.save();
  return {
    breed: doc.breed,
    color: doc.color,
    name: doc.name,
    weight: doc.weight,
  };
};
