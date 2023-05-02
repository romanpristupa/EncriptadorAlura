const texto = document.querySelector(".mensaje");
const botonEncriptar = document.querySelector(".encriptar");
const botonDesencriptar = document.querySelector(".desencriptar");
const campoEncriptado = document.querySelector(".devolucionDatos");
const textArea = document.querySelector("#mensaje");
const botonCopiar = document.querySelector(".copiar");
const copiarTexto = document.querySelector(".textoEncriptado");


let textoOriginal;
let textoEncriptado;

botonEncriptar.addEventListener("click",function(e){
    e.preventDefault();
    textoOriginal=texto.value;
    if(textoOriginal ==""){
        alert("Debe ingresar un texto a encriptar")
    }else{
            encriptar(textoOriginal)
            renderizarElemento(textoEncriptado);
    }
});

function encriptar(texto) {
   textoEncriptado = texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
          
    console.log(textoEncriptado)
}

function renderizarElemento(texto) {
    campoEncriptado.innerHTML = ""    
    campoEncriptado.innerHTML = // html
    `<div class="datosEncriptados">
         <h4 class="textoEncriptado"> ${texto}</h4>
         <input class="copiar" type="submit" value="Copiar">
     </div>`;
     textArea.value = ""
    
    const botonCopiar = document.querySelector(".copiar");
    const copiarTexto = document.querySelector(".textoEncriptado");
    
    botonCopiar.addEventListener("click",function(e){
        copiarAlPortapapeles(copiarTexto.textContent)
        console.log(e)
    })
    
}

botonDesencriptar.addEventListener("click",function(e){
    e.preventDefault();
    textoEncriptado=texto.value;
    if(textoEncriptado ==""){
        alert("Debe ingresar un texto a Desencriptar")
    }else{
            desencriptar(textoEncriptado)
            renderizarElemento(textoOriginal);
    }
})

function desencriptar(texto) {
    textoOriginal = texto.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
}

function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto)
  .then(() => {
    alert('Texto copiado al portapapeles')
  })
  .catch(err => {
    alert('Error al copiar al portapapeles:', err)
  })
    
}

