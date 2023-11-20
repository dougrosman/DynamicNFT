import { camelCase } from "lodash";
import "p5";
import { ethers } from "ethers";

console.log(camelCase("hello world!"));

console.log("now i just need to import p5...");
console.log('ok')

document.getElementsByTagName(
  "body"
)[0].style.backgroundColor = `rgb(${Math.floor(
  Math.random() * 256
)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

let contract;
let signer;
let contractWithSigner;

main();

async function main() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  contract = new ethers.Contract(contractAddress, contractABI, provider);
  contractWithSigner = contract.connect(signer);

  /////// ADD YOUR CODE BELOW THIS LINE ///////

  console.log(contractWithSigner);
  console.log(await provider.getBlockNumber());

  myNum.textContent = await contract.num();

  increaseNum.addEventListener("click", () => {
    contractWithSigner.increaseNum();
  });

  contract.on("NumSet", (_num, _msg) => {
    console.log(_num);
    console.log(_msg);
    myNum.textContent = _num;
  });
}



const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(127);
  };

  p.draw = () => {
    p.ellipse(p.width / 2, p.height / 2, 10, 10);
  };
};

new p5(sketch);
