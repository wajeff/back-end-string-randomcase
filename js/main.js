document.querySelector('#generate').addEventListener('click',makeReq);

async function makeReq(){

  const stringValue = document.querySelector('.inputText').value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector(".returnString").textContent = data.stringValue;
}