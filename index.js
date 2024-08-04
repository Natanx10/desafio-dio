// Lista de Herois e XP

let Herois = [["Persival ", 1000],
             ["Mardock ", 1679],
             ["Laster ", 2345],
             ["Askay ", 3998],
             ["Blackol ", 4001],
              ["Soleyn ", 5670],
              ["Cedowr ", 6782],
              ["Goltor ", 7663],
              ["X ", 8008],
              ["Atomic ", 9500],
              ["Project ? ", 1000000]]


//Variavel de escolhas

let Escolhido = Herois[6][0]
let Xp = Herois [6][1]
let Nivel = "Fantasma"

//Estrutura de decisão

if (Xp>=1 && Xp <=1000){Nivel="Ferro ";}

else if (Xp>=1001 && Xp <=2000) {Nivel="Bronze ";}

else if (Xp>=2001 && Xp <=3000){Nivel="Prata ";}

else if (Xp>=3001 && Xp <=4000){Nivel="Ouro ";}

else if (Xp>=4001 && Xp <=6000){Nivel="Platina ";}

else if (Xp>=6001 && Xp <=8000){Nivel="Ascendente ";}

else if (Xp>=8001 && Xp <=9000){Nivel="Imortal ";}

else if (Xp>=9001){Nivel="Radiante ";}

  
//Mensagem de saída

console.log("O Heroi com o nome " + Escolhido + "está no nivel " + Nivel)