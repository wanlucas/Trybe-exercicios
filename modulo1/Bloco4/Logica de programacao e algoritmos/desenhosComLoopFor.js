// O desafio consiste em criar diferentes desenhos com o loop for.

const size = 5; // tamanho que servirá para todos os desenhos.

// Desenho 1:

// *****
// *****
// *****
// *****
// *****

for(let line = 0; line < size; line++) {
  let msg = '';

  for(let col = 0; col < size; col++) msg += '*'; 
  console.log(msg);
}

// ____________ // 

// Desenho 2:

// *
// **
// ***
// ****
// *****

for(let line = 0; line < size; line++) {
  let msg = '';

  for(let col = 0; col < line + 1; col++) msg += '*'; 
  console.log(msg);
}

// ____________ // 

// Desenho 3: 

//     *
//    **
//   ***
//  ****
// *****

for(let line = 0; line < size; line++) {
  let msg = '';

  for(let col = 0; col < size; col++) {
    if(col + line >= size - 1) msg += '*'
    else msg += ' ';
  }; 

  console.log(msg);
}

// ____________ // 

// Desenho 4:

//   *
//  ***
// *****

const mid = Math.ceil(size / 2);

for(let line = 1; line <= mid; line++) {
  let msg = '';

  for(let col = 1; col <= size; col++) {
    if(Math.abs(col - mid) < line) msg += '*'
    else msg += ' ';
  };

  console.log(msg);
}

// ____________ // 

// Desenho 5:

//    *
//   * *
//  *   *
// *******

const size2 = size + 2;
const mid2 = Math.ceil(size2 / 2);

for(let line = 1; line <= mid2; line++) {
  let msg = '';

  for(let col = 1; col <= size2; col++) {
    if(Math.abs(col - mid2) == line - 1 || line == mid2)
      msg += '*';
    else msg += ' ';
  };

  console.log(msg);
}
