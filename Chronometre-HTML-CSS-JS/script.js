//Les variables dont on a besoins
var sp, btn_start, btn_stop, t, ms, s, mn, h;
//fonction pour initialiser les variables quand la page se charge
window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    h=0, min=0,s=0,ms=0;
}
//mettre en place le compteur
function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms=0;
        s+=1;
    }
    if(s == 60){
        s=0;
        min+=1
    }
    if(min == 60){
        min=0;
        h+=1;
    }
    //insertion des valeurs dans les span
    sp[2].innerHTML = h + "h";
    sp[3].innerHTML = min + "min";
    sp[4].innerHTML = s + "s";
    sp[5].innerHTML = ms + "ms";
}
//mettre en place la fonction du boutton start
function start(){
    //cette ligne execute la fonction tout les 100 ms
    t = setInterval(update_chrono,100);
    btn_start.disabled = true;
}
//mettre en place la fonction du boutton stop
function stop(){
    clearInterval(t);//suppression de l'interval t que nous avions créer
    btn_start.disabled = false;
}
//Initialiser les valeurs du compteur
function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    h=0, min=0,s=0,ms=0;
    //Insérer des nouvelles valeur dans les spans
    sp[2].innerHTML = h + "h";
    sp[3].innerHTML = min + "min";
    sp[4].innerHTML = s + "s";
    sp[5].innerHTML = ms + "ms";
}