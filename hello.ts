import 'reflect-metadata';

@Reflect.metadata('key1', 'value1')
class User {
  @Reflect.metadata('key2', 'value2')
  public username: string | null = null;
}

const user = new User();

const meta1 = Reflect.getMetadata('key1', User);
console.log('meta1:', meta1);

const meta2 = Reflect.getMetadata('key2', user, 'username');
console.log('meta2:', meta2);
