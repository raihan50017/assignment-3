function feetToMile(feet){
    if(feet<0){
        return "Warning! distance cannot be negative";
    }
    var mile=feet/5280;
    return mile;
}

function woodCalculator(chair,table,bed){
    if(chair<0||table<0||bed<0){
        return "Warning! quantity of table, chair, bed couldn't be negative.";
    }
    var woodChair=chair;
    var woodTable=table*3;
    var woodBed=bed*5;
    var woodTotal=woodChair+woodTable+woodBed;
    return woodTotal;
}

function brickCalculator(floor){
    if(floor<0){
        return "Warning! number of floor cannot be negative";
    }
    var feetTotal=0;
    var brickTotal=0;
    for(var i=1;i<=floor;i++){
        if(i>=1&&i<=10){
            feetTotal=feetTotal+15;
        }
        else if(i>=11&&i<=20){
            feetTotal=feetTotal+12;
        }
        else{
            feetTotal=feetTotal+10;
        }
    }
    brickTotal=feetTotal*1000;
    return brickTotal;
}

function tinyFriend(names){
    if(names==""){
        return "Warning! your array is empty";
    }
    var min=names[0].length;
    var smallName=names[0];
    for(var i=0;i<names.length;i++){
        if(min>names[i].length){
            min=names[i].length;
            smallName=names[i];
        }
    }
    return smallName;
}