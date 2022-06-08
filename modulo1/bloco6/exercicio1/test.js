function getMichaelLastName(inputText) {
  const words = inputText.replace(/[?!,]/g, '').split(' ');

  return words.filter((word, i) => {
    return words[i - 1] === 'Michael' && word[0] === word[0].toUpperCase();
  });
}
console.log(getMichaelLastName( "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?"));