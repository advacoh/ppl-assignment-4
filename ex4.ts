//Q1
export function all<T>(promises : Array<Promise<T>>) : Promise<Array<T>> {

  return new Promise<T[]>( (resolve, reject) => {
    const n = promises.length;
    const results: T[] = new Array(n);
    let completed = 0;
    if (n === 0) {
      resolve([]);
      return;
    }
    promises.forEach((promise, index) => {
      promise
        .then(value => {
          results[index] = value;
          completed++;

          if (completed === n) {
            resolve(results);
          }
        })
        .catch(reject);
      });
    });
}

  
// Q2
export function* Fib1() {
	let a = 1; 
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}


export function* Fib2() {
	const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;

  let n = 1;
  while (true) {
    const fib = Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);
    yield fib;
    n++;
  }
}
