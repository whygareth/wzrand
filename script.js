
var z=[];
var playerz=[];
var newPlayerz=[];
var primo=[], secondo=[], terzo=[], quarto=[], quinto=[];
var i;
var contenitore;

//indice dell'elemento checkato viene pushato in un array
function addItemIfCheck(){
    var elem=document.getElementById('campo-scelta').children;
    for(i=0; i<35; i++){
        if (i==0){      
            if (elem[i].checked == true){
                z.push(i);
                }
            }
        else if (elem[i].checked == true){
            z.push(i/2);
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
        {username:"mattex", rateo:'1.73', cross:'false', src:'mattex.png'},
        {username:"stevex", rateo:'1.33', cross:'true', src:'stevex.png'},
        {username:"fred", rateo:'1.01', cross:'false', src:'fredzoned.png'},
        {username:"musta", rateo:'1.03', cross:'false', src:'mustache.png'},
        {username:"curna", rateo:'1.11', cross:'true', src:'curna.png'},
        {username:"irob", rateo:'0.33', cross:'false', src:'irobman.png'},
        {username:"tara", rateo:'1.30', cross:'false', src:'tarantino.png'},
        {username:"pippo", rateo:'0.79', cross:'true', src:'pippobaro.png'},
        {username:"burg", rateo:'0.72', cross:'false', src:'burgspencer.png'},
        {username:"ezione", rateo:'1.16', cross:'false', src:'ezione.png'},
        {username:"cami", rateo:'0.90', cross:'false', src:'camikaze.png'},
        {username:"mayor", rateo:'0.85', cross:'false', src:'mayor.png'},
        {username:"darioc", rateo:'0.96', cross:'false', src:'tarantino.png'},
        {username:"luis10", rateo:'1.02', cross:'true', src:'pippobaro.png'},
        {username:"guest1", rateo:'ND', cross:'false', src:'guest.png'},
        {username:"guest2", rateo:'ND', cross:'false', src:'guest.png'},
        {username:"guest3", rateo:'ND', cross:'false', src:'guest.png'},
        ], newPlayerz);
              
        
//chiama funzioni 
function gestioneEventi(){
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
                for (i=0;i<team.length;i++){

                    var divteam = document.createElement("div");
                    var idAttr = document.createAttribute("class");

                    var img = document.createElement("img");
                    var srcAttr = document.createAttribute("src");
                    var idImg = document.createAttribute("class");
            
                    var para = document.createElement("p");
                    var idPara = document.createAttribute("class");
    
                    var para2 = document.createElement("p");
                    var idPara2 = document.createAttribute("class");
           
                    idAttr.value = "theteam";
                    divteam.setAttributeNode(idAttr);

                    srcAttr.value = team[i].src;
                    img.setAttributeNode(srcAttr);
                    idImg.value = "idplayer";
                    img.setAttributeNode(idImg);
            
                    idPara.value = "testo";
                    para.setAttributeNode(idPara);

                    idPara2.value = "testo2";
                    para2.setAttributeNode(idPara2);
                    
                    mainDiv.appendChild(divteam);
                    divteam.appendChild(img);
                    divteam.appendChild(para);
                    divteam.appendChild(para2);
                    
                    para.innerHTML = team[i].username;
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
