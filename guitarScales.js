const button = document.getElementById("button");
const scale = document.getElementById("scale");
const type = document.getElementById("type");
let div = document.getElementById("div");

button.onclick = function (){
    if(type.value === "OneStringE"){
        if (scale.value === "C"){
            div.innerHTML = `<img src="CScale-E.png">`;
        }
        else if(scale.value === "D"){
            div.innerHTML = `<img src="DScale-E.png">`;
        }
        else if(scale.value === "E"){
            div.innerHTML = `<img src="EScale-E.png">`;
        }
        else if(scale.value === "F"){
            div.innerHTML = `<img src="FScale-E.png">`;
        }
        else if(scale.value === "G"){
            div.innerHTML = `<img src="GScale-E.png">`;
        }
        else if(scale.value === "A"){
            div.innerHTML = `<img src="AScale-E.png">`;
        }
        else if(scale.value === "B"){
            div.innerHTML = `<img src="BScale-E.png">`;
        }
        else if(scale.value === "CD"){
            div.innerHTML = `<img src="CDScale-E.png">`;
        }
        else if(scale.value === "DE"){
            div.innerHTML = `<img src="DEScale-E.png">`;
        }
        else if(scale.value === "FG"){
            div.innerHTML = `<img src="FGScale-E.png">`;
        }
        else if(scale.value === "GA"){
            div.innerHTML = `<img src="GAScale-E.png">`;
        }
        else {
            div.innerHTML = `<img src="ABScale-E.png">`;
        }
    }
    else if(type.value === "OneStringA"){
        if (scale.value === "C"){
            div.innerHTML = `<img src="CScale-A.png">`;
        }
        else if(scale.value === "D"){
            div.innerHTML = `<img src="DScale-A.png">`;
        }
        else if(scale.value === "E"){
            div.innerHTML = `<img src="EScale-A.png">`;
        }
        else if(scale.value === "F"){
            div.innerHTML = `<img src="FScale-A.png">`;
        }
        else if(scale.value === "G"){
            div.innerHTML = `<img src="GScale-A.png">`;
        }
        else if(scale.value === "A"){
            div.innerHTML = `<img src="AScale-A.png">`;
        }
        else if(scale.value === "B"){
            div.innerHTML = `<img src="BScale-A.png">`;
        }
        else if(scale.value === "CD"){
            div.innerHTML = `<img src="CDScale-A.png">`;
        }
        else if(scale.value === "DE"){
            div.innerHTML = `<img src="DEScale-A.png">`;
        }
        else if(scale.value === "FG"){
            div.innerHTML = `<img src="FGScale-A.png">`;
        }
        else if(scale.value === "GA"){
            div.innerHTML = `<img src="GAScale-A.png">`;
        }
        else {
            div.innerHTML = `<img src="ABScale-A.png">`;
        }
    }
    else if(type.value === "OneStringD"){
        if (scale.value === "C"){
            div.innerHTML = `<img src="CScale-D.png">`;
        }
        else if(scale.value === "D"){
            div.innerHTML = `<img src="DScale-D.png">`;
        }
        else if(scale.value === "E"){
            div.innerHTML = `<img src="EScale-D.png">`;
        }
        else if(scale.value === "F"){
            div.innerHTML = `<img src="FScale-D.png">`;
        }
        else if(scale.value === "G"){
            div.innerHTML = `<img src="GScale-D.png">`;
        }
        else if(scale.value === "A"){
            div.innerHTML = `<img src="AScale-D.png">`;
        }
        else if(scale.value === "B"){
            div.innerHTML = `<img src="BScale-D.png">`;
        }
        else if(scale.value === "CD"){
            div.innerHTML = `<img src="CDScale-D.png">`;
        }
        else if(scale.value === "DE"){
            div.innerHTML = `<img src="DEScale-D.png">`;
        }
        else if(scale.value === "FG"){
            div.innerHTML = `<img src="FGScale-D.png">`;
        }
        else if(scale.value === "GA"){
            div.innerHTML = `<img src="GAScale-D.png">`;
        }
        else {
            div.innerHTML = `<img src="ABScale-D.png">`;
        }
    }
    else if(type.value === "OneStringG"){
        if (scale.value === "C"){
            div.innerHTML = `<img src="CScale-G.png">`;
        }
        else if(scale.value === "D"){
            div.innerHTML = `<img src="DScale-G.png">`;
        }
        else if(scale.value === "E"){
            div.innerHTML = `<img src="EScale-G.png">`;
        }
        else if(scale.value === "F"){
            div.innerHTML = `<img src="FScale-G.png">`;
        }
        else if(scale.value === "G"){
            div.innerHTML = `<img src="GScale-G.png">`;
        }
        else if(scale.value === "A"){
            div.innerHTML = `<img src="AScale-G.png">`;
        }
        else if(scale.value === "B"){
            div.innerHTML = `<img src="BScale-G.png">`;
        }
        else if(scale.value === "CD"){
            div.innerHTML = `<img src="CDScale-G.png">`;
        }
        else if(scale.value === "DE"){
            div.innerHTML = `<img src="DEScale-G.png">`;
        }
        else if(scale.value === "FG"){
            div.innerHTML = `<img src="FGScale-G.png">`;
        }
        else if(scale.value === "GA"){
            div.innerHTML = `<img src="GAScale-G.png">`;
        }
        else {
            div.innerHTML = `<img src="ABScale-G.png">`;
        }
    }
    else if(type.value === "OneStringB"){
        if (scale.value === "C"){
            div.innerHTML = `<img src="CScale-B.png">`;
        }
        else if(scale.value === "D"){
            div.innerHTML = `<img src="DScale-B.png">`;
        }
        else if(scale.value === "E"){
            div.innerHTML = `<img src="EScale-B.png">`;
        }
        else if(scale.value === "F"){
            div.innerHTML = `<img src="FScale-B.png">`;
        }
        else if(scale.value === "G"){
            div.innerHTML = `<img src="GScale-B.png">`;
        }
        else if(scale.value === "A"){
            div.innerHTML = `<img src="AScale-B.png">`;
        }
        else if(scale.value === "B"){
            div.innerHTML = `<img src="BScale-B.png">`;
        }
        else if(scale.value === "CD"){
            div.innerHTML = `<img src="CDScale-B.png">`;
        }
        else if(scale.value === "DE"){
            div.innerHTML = `<img src="DEScale-B.png">`;
        }
        else if(scale.value === "FG"){
            div.innerHTML = `<img src="FGScale-B.png">`;
        }
        else if(scale.value === "GA"){
            div.innerHTML = `<img src="GAScale-B.png">`;
        }
        else {
            div.innerHTML = `<img src="ABScale-B.png">`;
        }
    }
    else{
        if (scale.value === "C"){
            div.innerHTML = `<img src="CScale-Full.png">`;
        }
        else if(scale.value === "D"){
            div.innerHTML = `<img src="DScale-Full.png">`;
        }
        else if(scale.value === "E"){
            div.innerHTML = `<img src="EScale-Full.png">`;
        }
        else if(scale.value === "F"){
            div.innerHTML = `<img src="FScale-Full.png">`;
        }
        else if(scale.value === "G"){
            div.innerHTML = `<img src="GScale-Full.png">`;
        }
        else if(scale.value === "A"){
            div.innerHTML = `<img src="AScale-Full.png">`;
        }
        else if(scale.value === "B"){
            div.innerHTML = `<img src="BScale-Full.png">`;
        }
        else if(scale.value === "CD"){
            div.innerHTML = `<img src="CDScale-Full.png">`;
        }
        else if(scale.value === "DE"){
            div.innerHTML = `<img src="DEScale-Full.png">`;
        }
        else if(scale.value === "FG"){
            div.innerHTML = `<img src="FGScale-Full.png">`;
        }
        else if(scale.value === "GA"){
            div.innerHTML = `<img src="GAScale-Full.png">`;
        }
        else {
            div.innerHTML = `<img src="ABScale-Full.png">`;
        }
    }
}
