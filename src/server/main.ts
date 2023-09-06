import express from "express";
import ViteExpress from "vite-express";
import { readJsonSync, writeJsonSync, existsSync} from "fs-extra";

const app = express();
const port = 3030;



app.get("/hello/:nom", (req, res) => {
  const nom = req.params.nom;
  const fileName = "hellos.json";
  const existFile = existsSync(fileName);
  if (existFile) {
    
    let contenuDuFichier : string[] =  readJsonSync(fileName);
    contenuDuFichier.push(nom);
    writeJsonSync(fileName,contenuDuFichier );
  }
  else
  {
    writeJsonSync(fileName,[nom]);
  }    
  res.send('Bonjour  '+nom);
});



app.get("/hellos", (_, res) => {
    
 const contenuDuFichier : string[] =  readJsonSync(`hellos.json`);
 
  res.send(JSON.stringify(contenuDuFichier));

});

app.get("/nbreFois", (_, res) => {
  const fileName = "hellos.json";
  const existFile = existsSync(fileName);
  if (existFile) {
    const monFichierHellosObject : string[] =  readJsonSync(`hellos.json`); 
    res.send(monFichierHellosObject.length.toString());
  }
  else
  {
    res.send("le fichier "+ fileName + " n'existe pas ")
  }
   
 
});

app.get("/viderFichier", (_, res) => {
  writeJsonSync(`hellos.json`,[]);  
  let contenuDuFichierObject =  readJsonSync(`hellos.json`);  
  const maString_contenuDuFichierObject = JSON.stringify(contenuDuFichierObject);
  res.send(maString_contenuDuFichierObject);
});


ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}`)
);
