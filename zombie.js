class Zombie{
    constructor(x){
        this.damage = 10;
        this.x=x;
        this.rowend =((this.x-(this.x%10)));
        this.time = 0;
        this.noplant=true;
        this.health =50;
        this.rownum =((this.x-(this.x%10)+10)/10)-1;
    }
    move(plant){
        const d = new Date();
        let seconds = d.getSeconds();
        for (let i = 0; i < plant.length; i++) {
            if(this.x===plant[i].pos+1){
                this.noplant=false;
                if(this.time!=seconds){
                    plant[i].health -= this.damage;
                    // console.log();
                    if(plant[i].health<=0) {
                        this.noplant=true;
                    }
                }
            }
            
        }
        if(this.x>this.rowend-9)
        {
            // console.log(seconds)
            if(seconds%2==0&&this.time!=seconds){
                if(this.noplant){
                    this.x--;
                }

            }
        }
        this.time = seconds;
    }
    show(){
        const tempCard =document.getElementById(this.x);
        
        switch (this.health) {
            case 50:
                tempCard.style.backgroundColor= "rgba(255,0 , 42,1)";
                // console.log(50)
                break;          
            case 40:
                // console.log(40)
                tempCard.style.backgroundColor= "rgba(205,10 , 42,1)";
            break;
            case 30:
                // console.log(30)
                tempCard.style.backgroundColor= "rgba(155,30 , 42,1)";
            break;
            case 20:
                // console.log(20)
                tempCard.style.backgroundColor= "rgba(55,70 , 42,1)";
            break;
            case 10:
                // console.log(20)
                tempCard.style.backgroundColor= "rgba(0,70 , 42,1)";
            break;                       
           
        }
        
    }
}