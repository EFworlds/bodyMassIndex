
function imgDiv(url, div_id){
    var el = document.getElementById(div_id);
    var img = new Image();
    img.onload = function(){
        el.style.width = img.width+'px';
        el.style.height = (img.height + 20) + "px";
        el.innerHTML = '<img src='+url+' style="margin:0" width="'+img.width+'" height="'+img.height+'"/>';
    }
    img.src = url;

}

function bmindex(){
    let bmi = document.getElementById("inp_weight").value / (document.getElementById
    ("inp_height").value / 100) ** 2;
    let resultString = '';
   let imgUrl = "";
   
   
   
    if (bmi <= 17){
        resultString =  'Выраженный дефицит массы тела';
        imgDiv( './assets/images/1f.jpg', 'img_div');
        imgDiv( './assets/images/1m.jpg', 'img_div1');
    }else if (bmi <= 19.5){
        resultString =  'Недостаточная (дефицит) масса тела';
        imgDiv( './assets/images/2f.jpg', 'img_div');
        imgDiv( './assets/images/2m.jpg', 'img_div1');
    }else if (bmi <= 22){
        resultString =  'Норма';
        imgDiv( './assets/images/3f.jpg', 'img_div');
        imgDiv( './assets/images/3m.jpg', 'img_div1');
    }else if (bmi <= 25){
        resultString =  'Высокий нормальный вес';
        imgDiv( './assets/images/4f.jpg', 'img_div');
        imgDiv( './assets/images/4m.jpg', 'img_div1');
    }else if (bmi <= 30){
        resultString =  'Избыточная масса тела';
        imgDiv( './assets/images/5f.jpg', 'img_div');
        imgDiv( './assets/images/5m.jpg', 'img_div1');
    }else {
        resultString =  'Ожирение';
        imgDiv( './assets/images/grave.png', 'img_div');
        imgDiv( './assets/images/6m.jpg', 'img_div1');

    }
    document.getElementById("result").innerHTML = resultString;
   
    
}

