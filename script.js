

const dadjoke = async () =>{
  try{
  const response = await fetch('https://icanhazdadjoke.com/',{headers:{Accept:'application/json'}});
  const data = await response.json();
  return data.joke;
  } catch(e){
    alert("ERROR, no joke/or wrong api/ "+e);
    return ('NO jokes available..')
  }
}

const displayBox = document.querySelector('#box');
const btn = document.querySelector('button');

btn.addEventListener('click',async ()=>{
  const joke = await dadjoke();
  displayBox.innerHTML = '';
  const h3 = document.createElement('h3');
  h3.textContent = joke;
  displayBox.appendChild(h3);
})