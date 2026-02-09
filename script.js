const params = new URLSearchParams(window.location.search);

let output = "";

for (const [key, value] of params) {
  output += `<p><strong>${key}:</strong> ${value}</p>`;
}

document.getElementById("results").innerHTML = output;
