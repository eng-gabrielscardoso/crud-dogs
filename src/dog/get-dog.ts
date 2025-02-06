import { Dog } from './schema';

export const getDog = async (dogId: string) => {
  const doc = await Dog.findById(dogId);

  if (!doc) throw Error('Dog not found with given ID');

  return {
    id: doc.id,
    breed: doc.breed,
    color: doc.color,
    name: doc.name,
    weight: doc.weight,
  };
};
