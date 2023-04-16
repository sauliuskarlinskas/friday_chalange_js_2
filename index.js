console.clear();
console.log('-------1--------');
function kiekLaiko(h1,min1,h2,min2){
    t1 = (h1*60 + min1);
    t2 = (h2*60 + min2);
    if (t2 > t1){
        t = t2 - t1;
    }else {
        t = t2 + t1 ;
    }
    return Math.floor(t/60) + "val." + (t% 60) +"min.";
}
console.log(kiekLaiko(11,20,19,40));

console.log('-------2--------');

function armsrtongNumb(){
    let numA ='';
    for (number =100; number<= 999; number++){
        let num = number.toString();
        if (number ===num[0]**3 + num[1]**3 +num[2]**3 ){
            numA += `${number}=${num[0] + '^3'} + ${num[1] + '^3' } + ${num[2] + '^3'} \n\r`;
        }
    }
    return numA;
}
console.log(armsrtongNumb());

console.log('-------3--------');

function atstumas(x1, y1, x2, y2){
    x= x2 - x1;
    y= y2 -y1;
    ats = Math.sqrt( x**2 + y**2);
    return ats;
}
console.log('Atstumas tarp tasku = '+atstumas(0,0,0,1));
console.log('Atstumas tarp tasku = '+atstumas(0,0,1,0));
console.log('Atstumas tarp tasku = '+atstumas(-5,0,10,-10));

console.log('-------4--------');

function lygnelyg(num){
    let sk1 = Math.abs(num).toString();
    let lyg = 0;
    let nelyg = 0;
    for (let i=0 ; i < sk1.length; i++){
        if(sk1[i]%2===0){
            lyg = lyg+1;
        }else{
            nelyg = nelyg+1;
        }
    }return 'lyginiu: ' + lyg + '; nelyginiu:' + nelyg;
};
    console.log(lygnelyg(63258));

console.log('-------5--------');

function suma(ilgis,plotis){
    let nuostoliai = ilgis * plotis * 1.05;
    const kaina2 = 1.5;
    let moketi = Math.ceil((nuostoliai / kaina2)) * 23;
    return moketi;
}
console.log(suma(3,4));

console.log('-------6--------');

function minMaxVidurkiai () { 
    vidurkiai = []; 
    for (let i = 0; i < 30; i++) { 
        vidurkiai.push(Math.floor(Math.random() * 10) + 1); 
    }
    let max = Math.max(...vidurkiai); 
    let min = Math.min(...vidurkiai);
    return 'Mokiniu vidurkiai: ' + vidurkiai + ' Auksciausias lygu:' + max + ' Zemiausias lygu: ' + min;
}
console.log(minMaxVidurkiai());

/*const marks = [10, 6, 5, 7, 3, 9, 4, 8, 2, 7, 8, 9, 1, 6, 10, 5, 4, 8, 9, 5, 6, 9, 5, 10, 8, 6, 2, 7, 9, 4];
marks.sort ((a,b) => a - b);
console.log('Blogiausias vidurkis ' + marks [0]+','+ 'geriausias vidurkis ' + marks [29]+'.');*/

console.log('-------7--------');

function monetos(pinigai) {
    visoLitai = Math.abs(pinigai);
    let litai5 = Math.floor(visoLitai / 5);
    let litai2 = Math.floor((visoLitai - litai5 * 5) / 2);
    let litai1 = Math.ceil(visoLitai - litai5 * 5 - litai2 * 2);
    return 'Norint gauti ' + visoLitai + ' litu monetomis, mums reikes ' + litai5 + ' monetu po 5 litus, ' + litai2 + ' monetu po 2 litus ir ' + litai1 + ' monetu po lita.'+ 'Viso '+(litai5 + litai2 +litai1)+' monetos.';
}
console.log(monetos(23));
