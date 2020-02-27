
/*        - - - LEVEL SYSTEM - - -         */

class Level{
    constructor(currentExp){
        this.currentExp = currentExp;
        this.lvlUp = false;
        calculateLevel(currentExp);
    }

    calculateLevel(currentExp){
        this.currentLevel = Math.cbrt(currentExp*(5/4));
        this.expUntilNextLevel = (4*(Math.pow(3, currentLevel+1)/5)) - currentExp;
        this.expSinceLastLevel = currentExp - (4*(Math.pow(3, currentLevel)/5));
        this.totalExpUntilNextLevel = (4*(Math.pow(3, currentLevel+1)/5)) - (4*(Math.pow(3, currentLevel)/5));
        this.percentUntilNextLevel = (int) ((this.expSinceLastLevel/this.totalExpUntilNextLevel)*100);
    }
  
    getCurrentExp(){
        return this.currentExp;
    }

    getCurrentLevel(){
        return this.currentLevel;
    }

    getExpUntilNextLevel(){
        return this.expUntilNextLevel;
    }
    
    expGained(exp){
        curLvl = this.currentLevel; 
        this.currentExp += exp;
        calculateLevel(this.currentExp);
        if(curLvl != this.currentLevel) this.lvlUp = true;
    }

    displayLevel(){
        document.write("You currently have " + this.expSinceLastLevel + ".");
        document.write("You have " + this.expUntilNextLevel + " left to go.");
        if(!this.lvlUp){
            document.write("You are " + this.percentUntilNextLevel + "% of the way there.");
        }
        else{
            document.write("You are now Level " + this.currentLevel + "! Congrats!!");
        } 
    }
}