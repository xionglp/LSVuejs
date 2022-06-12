function add(a1: number, a2: number): number;
function add(a1: string, a2: string): string;

function add(a1: any, a2: any): any {
  if (typeof a1 === 'number' && typeof a2 === 'number') {
    return a1 + a2;
  } else if (typeof a1 === 'string' && typeof a2 === 'string') {
    return a1 + a2;
  }

  return null
}

console.log(add(10, 30))
console.log(add("aaa", "bbb"))

export {}