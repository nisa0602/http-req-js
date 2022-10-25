const form = document.querySelector('#form');
const output = document.querySelector('#output');

async function sendToServer(data){
    const res = await fetch('https://pie.dev/post', {
        method: "POST",
        body: JSON.stringify(data)
    });

    const result = await res.json();

    output.innerHTML = `Nama anda: ${result.json.name}.`
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    output.innerHTML = "Sending...";

    const name = document.querySelector('#input').value;

    sendToServer({name})
})