import About, { add } from './About';

it('should add two numbers', () => {
  expect(add(10, 20)).toEqual(30);
})

it('should be available within the app', () => {
  expect(About).toBeDefined();
});
