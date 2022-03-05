class Peeshooter{
    constructor(x){
        this.health = 50;
        this.pos=x;
        this.x=x;
        this.rowend =((this.x-(this.x%10)+10));
        this.rownum = this.rowend/10;
        this.damage = 10;
        this.x+=1;
    }
    move(){
        if(this.x<this.rowend){

            this.x+=1;
        }
        
    }
    check(zmb){
        for (let i = 0; i < zmb.length; i++) {
            if(this.x>=zmb[i].x){
                if(this.rownum===zmb[i].rownum){
                    zmb[i].health -= this.damage;
                    this.x =this.pos+1;
                }
                
            }
        }
        
    }
    show(){
        const pcrd =document.getElementById(this.pos);
        pcrd.style.backgroundColor= "greenyellow";
        const tempCard =document.getElementById(this.x);
        tempCard.style.backgroundColor= "green";
        if(this.x===this.rowend){
            this.x =this.pos;//-=9; 
        }
    }   
}