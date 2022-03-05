let scorespan = document.getElementById("light");
let light=150;
let zombietime = 5000;
let numofelements = 50;
let numPlants =0;
let Plants = [] ;
let Zombies = [];
let gameOn = true; 
let selectedPlant = "";
let isPlantSelected =false;
const peeshooter = document.getElementById("peeshooter");
peeshooter.addEventListener("click",()=>{
    selPlant("peeshooter");
});
setup();

function selPlant(col){
    selected = col;
    selectedPlant = col;
    isPlantSelected =true;
}
function setup()
{
    const grid =document.querySelector(".grid");
    grid.innerHTML="";
    for (let i = 1; i <= numofelements; i++) 
    {
        const card = document.createElement("div");
        card.classList.add("card")    ;
        grid.append(card);
        card.id =  i;
        // card.innerText=i;
        card.addEventListener("click",()=>{
            if(isPlantSelected){
                // selPlant
                const cost = getCost();
                // console.log(cost);
                if((light-cost)>=0)
                {
                    
                    scorespan.innerText=light;
                    placePlant(card.id,cost);
                }

            }
        });
    }
 //---------------------------------------------------------------
 cntloop();
 newZ();
}
function refresh(){
    for (let i = 1; i <= numofelements; i++) 
    {
        document.getElementById(i).style.backgroundColor="white";
    }
}
function cntloop(){
    refresh();
    scorespan.innerText = light;
    update();
    setTimeout(cntloop, 200);
}
function newZ(){
    const ps = new Zombie((Math.ceil(Math.random()*(numofelements/10)))*10);
    Zombies.push(ps);
    setTimeout(newZ, zombietime);
}
function  placePlant(loc,cost){
    light-=cost;
    selectedPlant = "";
    isPlantSelected =false;
    const ps = new Peeshooter(parseInt(loc));
    Plants.push(ps);
    numPlants++;
}
function update(){
    
    for (let i = 0; i < Plants.length; i++) {
        
        Plants[i].show();
        Plants[i].move();
        Plants[i].check(Zombies);
        if(Plants[i].health<=0){
            Plants.splice(i,1);
        }
    }
    for (let i = 0; i < Zombies.length; i++) {
        Zombies[i].show();
        Zombies[i].move(Plants);
        if(Zombies[i].health<=0){
            light += 20;
            Zombies.splice(i,1);
        }
    }
    
}
function getCost(){
    
    switch (selectedPlant) {
        case "peeshooter":
            return 50 ;
    
        default:
            break;
    }
}