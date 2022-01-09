
var z=[];
var playerz=[];
var newPlayerz=[];
var primo=[], secondo=[], terzo=[], quarto=[], quinto=[];
var i;
var contenitore;

//indice dell'elemento checkato viene pushato in un array
function addItemIfCheck(){
    var elem=document.getElementById('campo-scelta').children;
    for(i=0; i<43; i++){
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
        {username:"MATTEX", rateo:'1.73', cross:'false', src:'mattex.png'},
        {username:"STEVEX", rateo:'1.33', cross:'true', src:'stevex.png'},
        {username:"FRED", rateo:'1.01', cross:'false', src:'fredzoned.png'},
        {username:"MR.MUS", rateo:'1.03', cross:'false', src:'mrmusta.png'},
        {username:"CURNA", rateo:'1.11', cross:'true', src:'curna.png'},
        {username:"IROB", rateo:'0.33', cross:'false', src:'irobman.png'},
        {username:"TARA", rateo:'1.30', cross:'false', src:'tarantino.png'},
        {username:"PIPPO", rateo:'0.79', cross:'true', src:'pippobaro.png'},
        {username:"BURG", rateo:'0.72', cross:'false', src:'burgspenc.png'},
        {username:"EZIONE", rateo:'1.33', cross:'false', src:'ezione.png'},
        {username:"CAMI", rateo:'0.90', cross:'false', src:'cami.png'},
        {username:"MAYOR", rateo:'0.85', cross:'false', src:'mayor.png'},
        {username:"DARIOC", rateo:'0.96', cross:'false', src:'dariocalci.png'},
        {username:"LUIS10", rateo:'1.02', cross:'true', src:'luis10.png'},
        {username:"DINHO", rateo:'1.02', cross:'true', src:'dinho.png'},
        {username:"FRANKIE", rateo:'1.02', cross:'true', src:'frankie.png'},
        {username:"EDERO", rateo:'1.02', cross:'true', src:'edero.png'},
        {username:"PUCIO", rateo:'1.02', cross:'true', src:'pucio.png'},
        {username:"guest1", rateo:'ND', cross:'false', src:'guest.png'},
        {username:"guest2", rateo:'ND', cross:'false', src:'guest.png'},
        {username:"guest3", rateo:'ND', cross:'false', src:'guest.png'},
        {username:"guest4", rateo:'ND', cross:'false', src:'guest.png'}
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

                    idPara2.value = "testo2";
                    para2.setAttributeNode(idPara2);
                    
                    divblock.appendChild(divteam);
                    divteam.appendChild(img);
                    divteam.appendChild(divteam2);
                    divteam2.appendChild(para);
                    divteam2.appendChild(para2);
                    
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
