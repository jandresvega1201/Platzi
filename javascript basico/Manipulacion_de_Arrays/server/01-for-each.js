const letters = ['a','b','c']

for (let i = 0; i < letters.length;i++) {
    const element = letters[i];
    console.log('For ',element)
}

letters.forEach(item => console.log('ForEach',item))