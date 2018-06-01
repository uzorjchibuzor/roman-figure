let textArea = document.querySelector('#text-area'),
inputArea = document.querySelector('#to-convert'),
convert = document.querySelector('#convert-button');

convert.addEventListener('click', () => {

  let num = inputArea.value;

  let result = "";

  let numMap = [
    { limit: 1000, value: "M" },
    { limit: 900, value: "CM" },
    { limit: 500, value: "D" },
    { limit: 400, value: "CD" },
    { limit: 100, value: "C" },
    { limit: 90, value: "XC" },
    { limit: 50, value: "L" },
    { limit: 40, value: "XL" },
    { limit: 10, value: "X" },
    { limit: 9, value: "IX" },
    { limit: 5, value: "V" },
    { limit: 4, value: "IV" },
    { limit: 1, value: "I" }
  ];

  for(let index = 0; index < numMap.length; index++) {
      let value = numMap[index].value,
          limit = numMap[index].limit;
      while(num >= limit) {
        result += value;
        num -= limit;
      }
  }

  console.log(result);

 
  textArea.textContent = 'Your Roman Numeral is ' + result;
});
