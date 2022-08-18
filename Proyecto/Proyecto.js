let dia_signo_uno = Number(prompt ("Ingrese dia de nacimiento 1 ")) 
let mes1 = Number( prompt ("Ingrese mes de nacimiento 1 "))
let dia_signo_dos = Number( prompt ("Ingrese dia de nacimiento 2 "))
let mes2 = Number( prompt ("Ingrese mes de nacimiento 2 "))
let signouno= ""
let signodos= ""
let compatibilidad = ""

if(dia_signo_uno >=22 && mes1 == 12 ||dia_signo_uno <= 20 && mes1 == 01){
  signouno = "capricornio"
  alert("capricornio") }

  if(dia_signo_uno >=21 && mes1 == 01 ||dia_signo_uno <= 19 && mes1 == 02){
    signouno = "acuario"
    alert("acuario") }

  if(dia_signo_uno >=0 && mes1 == 02 ||dia_signo_uno <= 20 && mes1 == 03){
    signouno = "piscis"
    alert("piscis") }

  if(dia_signo_uno >=21 && mes1 == 03 ||dia_signo_uno <= 20 && mes1 == 04){
    signouno = "aries"
    alert("aries") }  

  if(dia_signo_uno >=21 && mes1 == 04 ||dia_signo_uno <= 21 && mes1 == 05){
    signouno = "tauro"
    alert("tauro") }

  if(dia_signo_uno >=22 && mes1 == 05 ||dia_signo_uno <= 21 && mes1 == 06){
    signouno = "geminis"
    alert("geminis") }

  if(dia_signo_uno >=22 && mes1 == 06 ||dia_signo_uno <= 22 && mes1 == 07){
    signouno = "cancer"
    alert("cancer") }

  if(dia_signo_uno >=23 && mes1 == 07 ||dia_signo_uno <= 22 && mes1 == 08){
    signouno = "leo"
    alert("leo") }  

  if(dia_signo_uno >=23 && mes1 == 08 ||dia_signo_uno <= 22 && mes1 == 09){
    signouno = "virgo"
    alert("virgo") } 
    
  if(dia_signo_uno >=23 && mes1 == 09 ||dia_signo_uno <= 22 && mes1 == 10){
    signouno = "libra"
    alert("libra") }

  if(dia_signo_uno >=23 && mes1 == 10 ||dia_signo_uno <= 22 && mes1 == 11){
    signouno = "escorpio"
    alert("escorpio") }

  if(dia_signo_uno >=23 && mes1 == 11 ||dia_signo_uno <= 21 && mes1 == 12){
    signouno = "sagitario"
    alert("sagitario") }
  
//aqui inicia usuario 2

if(dia_signo_dos >=20 && mes2 == 01 ||dia_signo_dos <= 22 && mes2 == 12){
  signodos = "capricornio"
  alert("capricornio")
}
  if(dia_signo_dos >=21 && mes2 == 01 ||dia_signo_dos <= 19 && mes2 == 02){
    signodos = "acuario"
    alert("acuario") }

  if(dia_signo_dos >=20 && mes2 == 02 ||dia_signo_dos <= 20 && mes2 == 03){
    signodos = "piscis"
    alert("piscis") }
  
  if(dia_signo_dos >=21 && mes2 == 03 ||dia_signo_dos <= 20 && mes2 == 04){
    signodos = "aries"
    alert("aries") }

  if(dia_signo_dos >=21 && mes2 == 04 ||dia_signo_dos <= 21 && mes2 == 05){
    signodos = "tauro"
    alert("tauro") }
  
  if(dia_signo_dos >=22 && mes2 == 05 ||dia_signo_dos <= 21 && mes2 == 06){
    signodos = "geminis"
    alert("geminis") }

  if(dia_signo_dos >=22 && mes2 == 06 ||dia_signo_dos <= 22 && mes2 == 07){
    signodos = "cancer"
    alert("cancer") }

  if(dia_signo_dos >=23 && mes2 == 07 ||dia_signo_dos <= 22 && mes2 == 08){
    signodos = "leo"
    alert("leo") }

  if(dia_signo_dos >=23 && mes2 == 08 ||dia_signo_dos <= 22 && mes2 == 09){
    signodos = "virgo"
    alert("virgo") } 

  if(dia_signo_dos >=23 && mes2 == 09 ||dia_signo_dos <= 22 && mes2 == 10){
    signodos = "libra"
    alert("libra") }

  if(dia_signo_dos >=23 && mes2 == 10 ||dia_signo_dos <= 22 && mes2 == 11){
    signodos = "escorpio"
    alert("escorpio") }

  if(dia_signo_dos >=23 && mes2 == 11 ||dia_signo_dos <= 21 && mes2 == 12){
    signodos = "sagitario"
    alert("sagitario") }

//compatibilidad
if (signouno == signodos) {
  compatibilidad = "son compatibles"
}
if (signouno == "capricornio"){
  if(signodos == "piscis" || signodos == "escorpio" || signodos == "tauro" || signodos == "cancer" || signodos == "virgo" || signodos == "capricornio")
  {alert ("son compatibles")} 
}

if (signouno == "acuario"){
  if(signodos == "geminis" || signodos == "libra" || signodos == "sagitario" || signodos == "leo" || signodos == "acuario" || signodos == "aries")
  {alert ("son compatibles")} 
}

if (signouno == "piscis"){
  if(signodos == "piscis" || signodos == "escorpio" || signodos == "tauro" || signodos == "cancer" || signodos == "capricornio")
  {alert ("son compatibles")} 
}

if (signouno == "aries"){
  if(signodos == "geminis" || signodos == "libra" || signodos == "sagitario" || signodos == "leo" || signodos == "acuario" || signodos == "aries")
  {alert ("son compatibles")} 
}

if (signouno == "tauro"){
  if(signodos == "piscis" || signodos == "escorpio" || signodos == "tauro" || signodos == "cancer" || signodos == "virgo" || signodos == "capricornio")
  {alert ("son compatibles")} 
}

if (signouno == "geminis"){
  if(signodos == "geminis" || signodos == "libra" || signodos == "leo" || signodos == "acuario" || signodos == "aries")
  {alert ("son compatibles")} 
}

if (signouno == "cancer"){
  if(signodos == "piscis" || signodos == "escorpio" || signodos == "tauro" || signodos == "cancer" || signodos == "virgo" || signodos == "capricornio")
  {alert ("son compatibles")} 
}

if (signouno == "leo"){
  if(signodos == "geminis" || signodos == "libra" || signodos == "sagitario" || signodos == "leo" || signodos == "aries")
  {alert ("son compatibles")} 
} 

if (signouno == "virgo"){
  if(signodos == "piscis" || signodos == "escorpio" || signodos == "tauro" || signodos == "cancer" || signodos == "virgo" || signodos == "capricornio")
  {alert ("son compatibles")} 
}

if (signouno == "libra"){
  if(signodos == "geminis" || signodos == "libra" || signodos == "sagitario" || signodos == "leo"|| signodos == "acuario")
  {alert ("son compatibles")} 
}

if (signouno == "escorpio"){
  if(signodos == "piscis" || signodos == "escorpio" || signodos == "tauro"  || signodos == "cancer"|| signodos == "virgo" || signodos == "capricornio")
  {alert ("son compatibles")} 
}

if (signouno == "sagitario"){
  if(signodos == "geminis" || signodos == "libra" || signodos == "sagitario" || signodos == "leo"|| signodos == "acuario"| signodos == "aries")
  {alert ("son compatibles")} 
}