const input = document.getElementById("numberofwords");
const container = document.querySelector(".container");

const generateWord = (n) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < n; ++i) {
    const random = (Math.random() * (letters.length - 1)).toFixed(0);
    text += letters[random];
  }

  return text;
};
// console.log(generateWord(15));

let numberofwords;
const generatePara = () => {
  numberofwords = Number(input.value);

  const para = document.createElement("p");
  let data = " ";

  for (let i = 0; i < numberofwords; ++i) {
    const randomnumber = (Math.random() * 15).toFixed(0);
    data += generateWord(randomnumber);
    data += " ";
  }

  para.innerText = data;

  para.setAttribute("class", "paras");

  container.append(para);
};
