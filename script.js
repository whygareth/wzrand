
var z=[];
var playerz=[];
var newPlayerz=[];
var primo=[], secondo=[], terzo=[], quarto=[], quinto=[];
var i;
var contenitore;

//indice dell'elemento checkato viene pushato in un array
function addItemIfCheck(){



    var elemMod=document.querySelectorAll('.singlePlayer');
    var i;
    for(i=0; i<elemMod.length; i++){
         if(elemMod[i].children[0].checked == true){
            z.push(i);
         }
    }
}

class Randomizza {
    constructor(arrayRan, arrayPlay, newarr) {
        this.arrayRan = arrayRan;
        this.arrayPlay = arrayPlay;
        this.newarr = newarr;
        }
    
    ifCheckedAddObject(arrayRan, arrayPlay, newarr){
        for (i=0;i<arrayRan.length;i++){
            var temp=arrayRan[i];
            newarr.push(arrayPlay[temp]);
            }
            return (newarr);
        }

    randomizeObj(newarr){
        for (i = 0; i < newarr.length; i++) {
            var x = newarr[i];
            var y = Math.floor(Math.random() * (i + 1));
            newarr[i] = newarr[y];
            newarr[y] = x;
            }
            return(newarr);
        }

//il randomizzatore funziona

    casualDivi(newarr){
        switch (true){
            case (newarr.length<5):
                window.location.reload();
                break;
            
            case ((newarr.length>4)&&(newarr.length<9)):
                primo = newarr.slice(0,(Math.floor(newarr.length/2)));
                secondo = newarr.slice((Math.floor(newarr.length/2)),newarr.length);
                break;
            case ((newarr.length>8)&&(newarr.length<11)):
                primo=newarr.slice(0,(Math.floor(newarr.length/3)));
                secondo=newarr.slice((Math.floor(newarr.length/3)),(Math.floor(newarr.length/3))*2);
                terzo=newarr.slice(((Math.floor(newarr.length/3))*2), newarr.length);
                break;
            case (newarr.length==11):
                primo=newarr.slice(0,(Math.floor(newarr.length/3)));
                secondo=newarr.slice((Math.floor(newarr.length/3)),(((Math.floor(newarr.length/3))*2)+1));
                terzo=newarr.slice((((Math.floor(newarr.length/3))*2)+1), newarr.length);
                break;
            case (newarr.length==12):
                primo=newarr.slice(0,(Math.floor(newarr.length/3)));
                secondo=newarr.slice((Math.floor(newarr.length/3)),((Math.floor(newarr.length/3))*2));
                terzo=newarr.slice(((Math.floor(newarr.length/3))*2), newarr.length);
                break;
            case ((newarr.length>12)&&(newarr.length<15)):
                primo=newarr.slice(0,(Math.floor(newarr.length/4)));
                secondo=newarr.slice((Math.floor(newarr.length/4)),(Math.round(newarr.length/2)));  //qui c'è round
                terzo=newarr.slice((Math.round(newarr.length/2)),(((Math.floor(newarr.length/4))*3)+1));
                quarto=newarr.slice((((Math.floor(newarr.length/4))*3)+1), newarr.length );
                break;
            case (newarr.length==15):
                primo=newarr.slice(0,(Math.floor(newarr.length/5)));
                secondo=newarr.slice((Math.floor(newarr.length/5)),((Math.floor(newarr.length/5))*2));
                terzo=newarr.slice(((Math.floor(newarr.length/5))*2),((Math.floor(newarr.length/5))*3));
                quarto=newarr.slice(((Math.floor(newarr.length/5))*3),((Math.floor(newarr.length/5))*4));
                quinto=newarr.slice(((Math.floor(newarr.length/5))*4),newarr.length);
                break; 
        }
    }

}

    var stamplayerz = new Randomizza(z, playerz=[
        {username:"MATTEX", rateo:'1.87', epit:'Tastierino Matto', src:'mattex.png'},
        {username:"STEVEX", rateo:'0.98', epit:'The Turkish Padbreaker', src:'steve.png'},
        {username:"FRED", rateo:'1.02', epit:'Mattex 🖤', src:'fred.png'},
        {username:"MR.MUS", rateo:'1.09', epit:'Mr Musclown', src:'mrmusta.png'},
        {username:"CURNA", rateo:'1.34', epit:'Buona continuazione', src:'curnar.png'},
        {username:"IROB", rateo:'0.32', epit:'The Infrascher', src:'rob.png'},
        {username:"TARA", rateo:'1.35', epit:'Not from Taranto', src:'taranta.png'},
        {username:"PIPPO", rateo:'0.79', epit:'Exotic Man', src:'pippobaro.png'},
        {username:"BURG", rateo:'0.52', epit:'Fake Roze', src:'burgspenc.png'},
        {username:"EZIONE", rateo:'clown', epit:'Capitan Scammesia', src:'lami.png'},
        {username:"CAMI", rateo:'0.88', epit:'8325165', src:'cami.png'},
        {username:"MAYOR", rateo:'0.63', epit:'Sindaco di Rebirth', src:'mayor.png'},
        {username:"DARIOC", rateo:'1.00', epit:'Avvocato di Verdansk', src:'dariocalci.png'},
        {username:"LUIS10", rateo:'1.02', epit:'Sergente di Cavalieri', src:'luis10.png'},
        {username:"DINHO", rateo:'0.67', epit:'Conosco molto bene', src:'dinho.png'},
        {username:"FRANKIE", rateo:'0.68', epit:'Wrong Pippo', src:'frankie.png'},
        {username:"EDERO", rateo:'0.24', epit:'Quiet voice', src:'edero.png'},
        {username:"PUCIO", rateo:'1.00', epit:'Crazy Runner', src:'pucio.png'},
        {username:"KARMA", rateo:'1.00', epit:'Oh fante!', src:'karma.png'},
        {username:"guest1", rateo:'ND', epit:'Random Player', src:'guest.png'},
        {username:"guest2", rateo:'ND', epit:'Random Player', src:'guest.png'},
        {username:"guest3", rateo:'ND', epit:'Random Player', src:'guest.png'},
        {username:"guest4", rateo:'ND', epit:'Random Player', src:'guest.png'},
        {username:"guest5", rateo:'ND', epit:'Random Player', src:'guest.png'},
        ], newPlayerz);
              
        
//chiama funzioni 
function gestioneEventi(){
    var nasconderePlayerz=document.getElementById('campo123');
    nasconderePlayerz.classList.add('hiddenPlayerz');
    addItemIfCheck();
    console.log(z);
    stamplayerz.ifCheckedAddObject(z,playerz, newPlayerz);
    console.log(z, playerz, newPlayerz);
    stamplayerz.randomizeObj(newPlayerz)
    stamplayerz.casualDivi(newPlayerz);
    console.log(primo, secondo, terzo);
    creaSquad();
}  


    function createTeam(team){
        if  (team.length>1){
            switch (true){
                case (team==primo): 
                    var mainDiv = document.getElementById("contenitore");
                    var titolo = document.createElement("p");
                    var idtit = document.createAttribute("class");
                    idtit.value = "titolo";
                    titolo.setAttributeNode(idtit);
                    mainDiv.appendChild(titolo);
                    titolo.innerHTML = "Team#1";
                break;
                case (team==secondo):
                    var mainDiv = document.getElementById("contenitore2");
                    var titolo = document.createElement("p");
                    var idtit = document.createAttribute("class");
                    idtit.value = "titolo";
                    titolo.setAttributeNode(idtit);
                    mainDiv.appendChild(titolo);
                    titolo.innerHTML = "Team#2";
                break;
                case (team==terzo):
                    var mainDiv = document.getElementById("contenitore3");
                    var titolo = document.createElement("p");
                    var idtit = document.createAttribute("class");
                    idtit.value = "titolo";
                    titolo.setAttributeNode(idtit);
                    mainDiv.appendChild(titolo);
                    titolo.innerHTML = "Team#3";
                break;
                case (team==quarto):
                    var mainDiv = document.getElementById("contenitore4");
                    var titolo = document.createElement("p");
                    var idtit = document.createAttribute("class");
                    idtit.value = "titolo";
                    titolo.setAttributeNode(idtit);
                    mainDiv.appendChild(titolo);
                    titolo.innerHTML = "Team#4";
                break;
                case (team==quinto):
                    var mainDiv = document.getElementById("contenitore5");
                    var titolo = document.createElement("p");
                    var idtit = document.createAttribute("class");
                    idtit.value = "titolo";
                    titolo.setAttributeNode(idtit);
                    mainDiv.appendChild(titolo);
                    titolo.innerHTML = "Team#5";
                break;
                }

                var divblock = document.createElement("div");
                var bloccoExt = document.createAttribute("class");
                mainDiv.appendChild(divblock);
                
                for (i=0;i<team.length;i++){

                    var divteam = document.createElement("div");
                    var idAttr = document.createAttribute("class");

                    var img = document.createElement("img");
                    var srcAttr = document.createAttribute("src");
                    var idImg = document.createAttribute("class");
            
                    var divteam2 = document.createElement("div");
                    var idAttr2 = document.createAttribute("class");

                    var para = document.createElement("p");
                    var idPara = document.createAttribute("class");
    
                    var para2 = document.createElement("p");
                    var idPara2 = document.createAttribute("class");

                    var para3 = document.createElement("p");
                    var idPara3 = document.createAttribute("class");
           
                    bloccoExt.value = "bloccoext";
                    divblock.setAttributeNode(bloccoExt);

                    idAttr.value = "theteam";
                    divteam.setAttributeNode(idAttr);

                    idAttr2.value = "thetext";
                    divteam2.setAttributeNode(idAttr2);

                    srcAttr.value = team[i].src;
                    img.setAttributeNode(srcAttr);
                    idImg.value = "idplayer";
                    img.setAttributeNode(idImg);
            
                    idPara.value = "testo";
                    para.setAttributeNode(idPara);

                    idPara3.value = "testo3";
                    para3.setAttributeNode(idPara3);

                    idPara2.value = "testo2";
                    para2.setAttributeNode(idPara2);
                    
                    divblock.appendChild(divteam);
                    divteam.appendChild(img);
                    divteam.appendChild(divteam2);
                    divteam2.appendChild(para);
                    divteam2.appendChild(para3);
                    divteam2.appendChild(para2);
                    
                    para.innerHTML = team[i].username;
                    para3.innerHTML = team[i].epit;
                    para2.innerHTML = "rateo: " + team[i].rateo;
                    }
                }
            }
            
            function creaSquad(){
                createTeam(primo);
                createTeam(secondo);
                createTeam(terzo);
                createTeam(quarto);
                createTeam(quinto);
            }

            function pulisci(){
                window.location.reload();
            }
