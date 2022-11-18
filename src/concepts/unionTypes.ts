/* 
A union type is similar to Javascripts OR expression. 
It allows you to use two or more types (union members) 
to form a new type that may be any of those types.
*/

function orderProduct(orderId: string | number) {
  console.log('Ordering product with id', orderId);
}

export function runExampleUnionTypes() {
  // 👍
  orderProduct(1);

  // 👍
  orderProduct('123-abc');

  // 👎 Argument is not assignable to string | number
  // orderProduct({ name: 'foo' });
}
