import { establishMongoConnection } from '@/util/mongo';
import { createDog } from './create-dog';
import { Dog } from './schema';

beforeAll(async () => {
  await establishMongoConnection();
});

describe('createDog', () => {
  it('Inserts a new doc record', async () => {
    await createDog('Ghost', 'Direwolf', 'White', 100);
    const doc = await Dog.findOne({ name: 'Ghost' });
    expect(doc).not.toBeNull();
  });
});

afterEach(async () => {
  await Dog.deleteMany({});
});
