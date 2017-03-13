let displayColorSpread = function(mg, ...colors: string[]){
    for(let i in colors){
        console.log(colors[i]);
    }
}

let msSpr = "Day la thong bao nhe";
let colors = ['Vang', 'Do', 'Tim', 'Xanh'];
displayColorSpread(msSpr,...colors);