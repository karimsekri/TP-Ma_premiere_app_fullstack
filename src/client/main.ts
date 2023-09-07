




const app = document.querySelector('#app') as HTMLDivElement;

const inputText = document.createElement("input") as HTMLInputElement;
inputText.setAttribute("id", "input");
inputText.setAttribute("type", "text");
inputText.value = "nom ici";

const btnAfficherNom = document.createElement("button") as HTMLButtonElement;
btnAfficherNom.innerText = "Afficher nom";

const btnViderFichier = document.createElement("button") as HTMLButtonElement;
btnViderFichier.innerText = "vider le fichier";

const btnAfficherFichier = document.createElement("button") as HTMLButtonElement;
btnAfficherFichier.innerText = "Afficher le fichier"

const paragraphe = document.createElement("p") as HTMLParagraphElement;

const labelNbreFois = document.createElement("label") as HTMLLabelElement;

app.appendChild(labelNbreFois);
app.appendChild(inputText);
app.appendChild(btnAfficherNom);
app.appendChild(paragraphe);
app.appendChild(btnViderFichier);
app.appendChild(btnAfficherFichier);


btnAfficherFichier.addEventListener("click", async () => {
  const res = await fetch("/hellos/")
  const message = await res.text()
  paragraphe.innerText = message
  onPageLoad()
})



btnAfficherNom.addEventListener("click", async () => {
  const res = await fetch("/hello/"+inputText.value)
  const message = await res.text()
  paragraphe.innerText = message
  onPageLoad()
})

btnViderFichier.addEventListener("click", async () => {
  const res = await fetch("/viderFichier")
  const message = await res.text()
  paragraphe.innerText = message
  onPageLoad()
})

async function onPageLoad(){
  const res = await fetch("/nbreFois")
  const message = await res.text()
  
  labelNbreFois.innerText = message
}

onPageLoad()


