
var audio=document.getElementById("audio");
var abtn=document.getElementById("audiobtn");
var pbtn=document.getElementById("pbtn");
var timeheader=document.getElementById("timeheader");
var qndiv=document.getElementById("qndiv");
var timeout=document.getElementById("timeout");
var passagebtn=document.getElementById("passagebtn");
var fifteen=document.getElementById("fivet");
var confirm1=document.getElementById("confirm");
var username=document.getElementById("name");
var comment=document.getElementById("comment");
var one=document.getElementById("first");
var second=document.getElementById("second");
var twenty=document.getElementById('twenty');
var confirmhead=document.getElementById('confirmhead');
var splash=document.getElementById('splash');
var offline=document.getElementById('offline');
var retry=document.getElementById('retry');
document.addEventListener('DOMContentLoaded',function (e) {
    setTimeout(() => {
        splash.setAttribute('class','none');
    }, 500);
})
window.addEventListener('offline',function (e) {
    offline.removeAttribute('class');
    
});
retry.addEventListener('click',function (e) {
    window.location.reload("heck");
});
var student;
var dyslexia=0;
var dyscalculia=0;
var dysgraphia=0;
var dyspraxia=0;
var autism=0;
var adhd=0;
//Turning points

var nbtn=document.getElementById("btn");
var f=document.getElementById("first");
var prei=document.getElementById("leftic");
var nexi=document.getElementById("rightic");

pbtn.addEventListener('click',previous);
nbtn.addEventListener('click',next);
var con=document.getElementById("container");
var div=con.querySelectorAll("[flag=true]")

var len=div.length;

console.log(div);
function next(e)
{
    console.log("mascara");
    for(var i=0;i<len;i++)
    {
        if(div[i].hasAttribute("one")){
           
        
            
                var temp=i+1;
                if(i==len-1)
                    temp=0;
                
                console.log(div[i]);
                div[i].removeAttribute("one");
                div[i].setAttribute('class','zero');
                div[temp].setAttribute('class','one');
                div[temp].setAttribute("one","hello");
                console.log(div[temp]);
                break;
        }
        
    }
    
    
}
function previous(e)
{
   
    console.log("Jingunamani");
    for(var i=0;i<len;i++)
    {
        if(div[i].hasAttribute("one")){
            
         
            var temp=i-1;
    
            if(i==0)
                temp=len-1;
        
            console.log(div[i]);
            div[i].removeAttribute("one");
            div[i].setAttribute('class','zero');
            div[temp].setAttribute('class','one');
            div[temp].setAttribute('one','hello');
            
            console.log(div[temp]);
            break;

        }
    }

}

console.log(student);
var namecomments=['Cool name&#128526;','Pretty name&#128525','Awful name&#129396;'];
var ivec=0;
var jvec=0;
var temp;
//Validating name
confirm1.addEventListener('click',function(e) {
    temp=username.value;
    if(temp.search(/[^A-Za-z\s]/)==-1)
    {
        if (temp.length>2 && temp.length<17)
        {
            student=temp;
            console.log(student);
            comment.innerHTML=namecomments[Math.floor(Math.random()*3)];
            comment.style.color="blue";
            confirmhead.innerText="Hey "+student+" click the submit button to finish your test";
            prei.style.visibility="hidden";
            nexi.style.visibility="hidden";
            
            setTimeout(function () {
                 //One
                one.removeAttribute('one');
                one.setAttribute('class','zero');
                second.setAttribute('class','one');
                second.setAttribute('one','hello');
               
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
                
            },2000);
        }
        else
        {
            comment.innerText="Name should be greater than 2 and lesser than 17";
            comment.style.color="red";
            
           
        }
    }
    else
    {
        comment.innerText="Enter a valid name";
        comment.style.color="red";
    }
  
});

//Validating Fine or Not Fine

var fnfs=document.querySelectorAll('input[name="fnf"]');
var comment2=document.getElementById("comment2");
var third=document.getElementById("third");
var fnfvalue;
//ivec=0;
for (const fnf of fnfs) {
    fnf.addEventListener('click',function() {
        fnfvalue=fnf.value;
        console.log(fnfvalue);
        if (fnf.value=="fine") {
            console.log("theivam valvadhu yenge");
            comment2.innerHTML="That's good&#128074;";
            comment2.style.color="blue";
        
            
        }
        else
        {
            comment2.innerHTML="Just chill,hear some music..&#127911;";
            comment2.style.color="blue";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
                //Two
                second.removeAttribute('one');
                second.setAttribute('class','zero');
                third.setAttribute('class','one');
                third.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
                console.log('vangana vankamana');
                console.log(second);
                
                
            
        }, 2000);        
    });
}      

//Friend Validation
var fr1=document.querySelectorAll('input[name="fr1"]');
var comment3=document.getElementById("comment3");
var fourth=document.getElementById("fourth");
var frhead=document.getElementById("frhead");
var friendvalue;
var tempvalue;
for (const fr of fr1) {
    fr.addEventListener('click',function() {
            friendvalue=fr.value;
            if (fr.value=="fyes") {
                comment3.innerHTML="Cool...&#128526;"
                comment3.style.color="blue";
                prei.style.visibility="hidden";
                nexi.style.visibility="hidden";
               setTimeout(() => {
                
                console.log("theivam valvadhu yenge");
               //Creating lover window
                third.innerHTML='<h1 id="lovehead" style="font-size: 1.5rem;position:relative;top:5%;text-align: center;">Do you ever love someone&#128151;?</h1><br>'+
               
                '<div style="text-align: center; position: relative;">'+
                '<input type="radio" name="love1"value="lyes"  style=" width: 0.7rem;height: 0.7rem;"/>'+
                '<label for="lyes" style="font-size:0.8rem;">Yes</label>&nbsp;&nbsp;'+
                '<input type="radio" name="love1"value="lno" style=" width: 0.7rem;height: 0.7rem;"/>'+
                '<label for="lno" style="font-size: 0.8rem;">No</label>'+
                '</div>'+
                '<p style="font-size: 1rem;text-align: center;position: relative;"id="comment4"></p>'
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
                
                //Lover Validation
                var love1=document.querySelectorAll('input[name="love1"]');
                for (const love of love1) {
                    love.addEventListener('click',function () {
                        if (love.value=="lyes") {
                            prei.style.visibility="hidden";
                            nexi.style.visibility="hidden";
                            comment4.innerHTML="Ok the next question going to be tough &#129308;&#129307;";
                            comment4.style.color="blue";
                            //Creating prefer window
                            setTimeout(() => {
                                third.innerHTML='<h1 id="lovehead" style="font-size: 1.5rem;position:relative;top:5%;text-align: center;">Who do you prefer:Lover or Friend</h1><br>'+
                                '<div style="text-align: center; position: relative;">'+
                                '<input type="radio" name="prefer1"value="lover"  style=" width: 0.7rem;height: 0.7rem;"/>'+
                                '<label for="lover" style="font-size:0.8rem;">Lover</label>&nbsp;&nbsp;'+
                                '<input type="radio" name="prefer1"value="friend" style=" width: 0.7rem;height: 0.7rem;"/>'+
                                '<label for="friend" style="font-size: 0.8rem;">Friend</label>'+
                                '</div>'+
                                '<p style="font-size: 1rem;text-align: center;position: relative;"id="comment5"></p>' 
                                prei.style.visibility="visible";
                                nexi.style.visibility="visible";
                                var prefer1=document.querySelectorAll('input[name="prefer1"]');
                                var comment5=document.getElementById("comment5");
                                for (const prefer of prefer1) {
                                    prefer.addEventListener('click',function() {
                                        if (prefer.value=="lover") {
                                            tempvalue=3;
                                            comment5.innerHTML="Nothing to say...&#129296;";
                                            comment5.style.color="red"; 
                                            prei.style.visibility="hidden";
                                            nexi.style.visibility="hidden";
                                            setTimeout(() => {
                                           
                                                    //Third
                                                    third.removeAttribute('one');
                                                    third.setAttribute('class','zero');
                                                    fourth.setAttribute('class','one');
                                                    fourth.setAttribute('one','hello');
                                                    prei.style.visibility="visible";
                                                    nexi.style.visibility="visible";
                                                 
                                            }, 2000);   
                                        }
                                        else
                                        {
                                            tempvalue=3;
                                            comment5.innerHTML="Attaboy...&#128526;!";
                                            comment5.style.color="blue";
                                            prei.style.visibility="hidden";
                                            nexi.style.visibility="hidden";
                                            setTimeout(() => {
                                                    //four
                                                    third.removeAttribute('one');
                                                    third.setAttribute('class','zero');
                                                    fourth.setAttribute('class','one');
                                                    fourth.setAttribute('one','hello');
                                                    prei.style.visibility="visible";
                                                    nexi.style.visibility="visible";
                                                
                                            }, 2000);
                                        } 
                                    });
                                    
                                }
                            }, 2000);
                        }
                        else
                        {
                            tempvalue=2;
                            console.log("hi");
                            comment4.innerHTML="That's good for you &#128293;";
                            comment4.style.color="blue";
                            prei.style.visibility="hidden";
                            nexi.style.visibility="hidden";
                            setTimeout(() => {
                                    //five
                                    third.removeAttribute('one');
                                    third.setAttribute('class','zero');
                                    fourth.setAttribute('class','one');
                                    fourth.setAttribute('one','hello');
                                    prei.style.visibility="visible";
                                    nexi.style.visibility="visible";
                                 
                            }, 2000);                
                          
                        }
                    });
                }
               }, 1000);
            }
            else
            {
                tempvalue='1friend';
                
                comment3.innerHTML="Horrible to Hear&#128580;";
                comment3.style.color="red";
                prei.style.visibility="hidden";
                nexi.style.visibility="hidden";
            setTimeout(() => {
                
                    //six
                    third.removeAttribute('one');
                    third.setAttribute('class','zero');
                    fourth.setAttribute('class','one');
                    fourth.setAttribute('one','hello');
                    prei.style.visibility="visible";
                    nexi.style.visibility="visible";
                
            }, 2000);  
            }
    });
}      
//Validation of shapes
var shapes=document.querySelectorAll('input[name="shapes"]');
var shapevalue;
var five=document.getElementById("five");
for (const shape of shapes) {
    shape.addEventListener('click',function() {
        shapevalue=shape.value;
        if (shapevalue!="rectangle") {
            shapevalue='norect';
        }
        console.log(shapevalue);
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
          
                fourth.removeAttribute('one');
                fourth.setAttribute('class','zero');
                five.setAttribute('class','one');
                five.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
            
        }, 2000);  
    })
}

//Validation of colors

var colors=document.querySelectorAll('input[name="colour"]');
var colorvalue;
var six=document.getElementById("six");
for (const color of colors) {
    color.addEventListener('click',function() {
        colorvalue=color.value;
        if (colorvalue!="pink") {
            colorvalue='nopink';
        }
        console.log(colorvalue);
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
            
                five.removeAttribute('one');
                five.setAttribute('class','zero');
                six.setAttribute('class','one');
                six.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
        }, 2000);  
    })
}

//Validation of Fruit
var confirm2=document.getElementById('confirm2');
var fruit=document.getElementById('fruit');
var seven=document.getElementById('seven');
var comment6=document.getElementById('comment6');
var fruitname;
confirm2.addEventListener('click',function(e) {
    var temp2=fruit.value;
    temp2=temp2.toLowerCase();
    if(temp2.search(/[^A-Za-z\s]/)==-1)
    {
        if (temp2.length>2 && temp2.length<10)
        {
            fruitname=temp2;
            if (fruitname=='banana'||fruitname=='bannana') {
                comment6.innerHTML="That's cool go on... &#128526;";
                comment6.style.color="blue";
            }
            else
            {
                if (fruitname!='danana') {
                    fruitname='nobanana';
                    console.log('heck');
                }
                
                comment6.innerText="Ok,go on...";
                comment6.style.color="blue";
            }
            prei.style.visibility="hidden";
            nexi.style.visibility="hidden";
            setTimeout(function () {
           
                    six.removeAttribute('one');
                    six.setAttribute('class','zero');
                    seven.setAttribute('class','one');
                    seven.setAttribute('one','hello');
                    prei.style.visibility="visible";
                    nexi.style.visibility="visible";
                

            },2000);
        }
        else
        {
            comment6.innerText="Fruit name should be greater than 2 and less than 10";
            comment6.style.color="red";
            
           
        }
    }
    else
    {
        comment6.innerText="Alphabet only allowed";
        comment6.style.color="red";
    }
});

//Validation of clock;
var eight=document.getElementById("eight");
var clocks=document.querySelectorAll('input[name="clock"]');
var clockvalue;

for (const clock of clocks) {
    clock.addEventListener('click',function() {
        clockvalue=clock.value;
        if (clockvalue!="240") {
            clockvalue="not240";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
     
                seven.removeAttribute('one');
                seven.setAttribute('class','zero');
                eight.setAttribute('class','one');
                eight.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
           
        }, 2000);  
    })
}


//Validation of Math

var maths=document.querySelectorAll('input[name="math"]');
var mathvalue;
var nine=document.getElementById("nine");
for (const math of maths) {
    math.addEventListener('click',function() {
        mathvalue=math.value;
        console.log(mathvalue);
        if (mathvalue!="2") {
            mathvalue='no2';
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";        
        setTimeout(() => {
   
                eight.removeAttribute('one');
                eight.setAttribute('class','zero');
                nine.setAttribute('class','one');
                nine.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
                        
           
        }, 2000);  
    })
}

//Validation for voice word
var ten=document.getElementById('ten');
var k=0;
var speakword=document.getElementById("speakword");
var wordheader=document.getElementById("wordheader");
var wordresult;

var SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
var voicecomments=['Cool voice&#128526;','Pretty voice&#128525','Awful voice &#129396;'];
var recognition =new SpeechRecognition();  
var d=0;
var voi=voicecomments[Math.floor(Math.random()*3)];
recognition.onstart=function(){
   
    console.log("startedD");
    var comment9=document.getElementById('comment9');
    comment9.innerText="Recognition started,speak now...";
    comment9.style.color="blue";
     
      
    //recognition.stop();
    //start();
};

recognition.onend=function(event) {
    console.log("hi");
    if (k==1) {
        console.log("we get a result");
            
    }
    else
    {
        comment9.innerText="Just talk something...";
        comment9.style.color="red";
    }
}
recognition.onerror=function () {
    console.log("error");
    comment9.innerText="Something went wrong!,Try again";
    comment9.style.color="red";
}

recognition.onresult=function(event)
{
    
    //console.log(event);
    console.log("i am result bro");
    var transcript1 = event.results[0][0].transcript;
    k=1;
      
    //console.log(transcript);
    transcript1=transcript1.toLowerCase();
    if (transcript1.indexOf("helicopter")==0) {
        wordresult='2word';
    
        speakword.style.visibility="hidden";
        wordheader.style.visibility="hidden";
        comment9.innerHTML="You pronounced correctly and you have a "+voi;
        comment9.style.top="-20%";
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
  
                nine.removeAttribute('one');
                nine.setAttribute('class','zero');
                ten.setAttribute('class','one');
                ten.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
            
           
        }, 2500);
    }
    else
    {
       
        if (d==0) {
            comment9.innerText="Try again,you are pronouncing wrong";
            comment9.style.colo="red";
            d++;
        }
        else
        {
            wordresult='1word'; 
            speakword.style.visibility="hidden";
            wordheader.style.visibility="hidden";
            comment9.innerText="Ok...Try next one";
            comment9.style.color="blue";
            comment9.style.top="-20%";
            
            prei.style.visibility="hidden";
            nexi.style.visibility="hidden";
            setTimeout(() => {
       
                    nine.removeAttribute('one');
                    nine.setAttribute('class','zero');
                    ten.setAttribute('class','one');
                    ten.setAttribute('one','hello');
                    prei.style.visibility="visible";
                    nexi.style.visibility="visible";
                
            
            }, 2500);
                
        }
        
        
    }
};



var sword=document.getElementById("speakword");
sword.addEventListener('click',start)
function start()
{
    recognition.start();

}

    
//Voice recogonition sentence
var eleven=document.getElementById('eleven');
var j=0;
var speaksen=document.getElementById("speaksen");
var senheader=document.getElementById("senheader");
var senresult;
var recognition1=new SpeechRecognition();  
var d=0;

recognition1.onstart=function(){
    
    console.log("startedrgd");
    var comment10=document.getElementById("comment10");
    comment10.innerText="Recognition started,speak now...";
    comment10.style.color="blue";
     
      
    //recognition.stop();
    //start();
};

recognition1.onend=function(event) {
    console.log("hi");
    if (j==1) {
        console.log("we get a result");
    }
    else
    {
        comment10.innerText="Just talk something...";
        comment10.style.color="red";
    }
}
recognition1.onerror=function () {
    console.log("error");
    comment10.innerText="Something went wrong!,Try again";
    comment10.style.color="red";
}

recognition1.onresult=function(event)
{
    
    //console.log(event);

    console.log("i am result bro");
    var transcript2 = event.results[0][0].transcript;
    j=1;
    senresult='1sen';
    console.log(transcript2);
    transcript2=transcript2.toLowerCase();
    transcript2=transcript2.split(" ").join("");
    if (transcript2.indexOf("catsatonthemat")==0) {
        senresult='2sen';
        console.log('coot');
        speaksen.style.visibility="hidden";
        senheader.style.visibility="hidden";
        comment10.innerHTML="You pronounced correctly and you have a "+voi;
        comment10.style.top="-20%";
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
       
                ten.removeAttribute('one');
                ten.setAttribute('class','zero');
                eleven.setAttribute('class','one');
                eleven.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
            
            
        }, 2500);
    }
    else
    {
       
        if (d==0) {
            comment10.innerText="Try again,you are pronouncing wrong";
            comment10.style.color="red";
            d++;
        }
        else
        {
            
            speaksen.style.visibility="hidden";
            senheader.style.visibility="hidden";
            comment10.innerText="Ok...Try next one";
            comment10.style.color="blue";
            comment10.style.top="-20%";
            prei.style.visibility="hidden";
            nexi.style.visibility="hidden";
            setTimeout(() => {
       
                    ten.removeAttribute('one');
                    ten.setAttribute('class','zero');
                    eleven.setAttribute('class','one');
                    eleven.setAttribute('one','hello');
                    prei.style.visibility="visible";
                    nexi.style.visibility="visible";
                
            }, 2500);
                
        }
        
        
    }
};




speaksen.addEventListener('click',start1)
function start1()
{
    recognition1.start();

}





//Validation of nine
var confirm3=document.getElementById("confirm3");
var no=document.getElementById('num');
var comment7=document.getElementById('comment7');
var ninevalue;
var twelve=document.getElementById('twelve');
confirm3.addEventListener('click',function(e) {
    var temp3=no.value;
    if (temp3.length<1 || temp3.length>5) {
        comment7.innerText="Number length should be less than 5 and greater than 1";
        comment7.style.color="red";
    }
    else
    {
        if (isNaN(temp3)==0) {
            ninevalue=temp3;
            console.log(ninevalue);
            if (ninevalue%10==9) {
                comment7.innerHTML="Cool &#128526;,Try next one";
                comment7.style.color="blue";
            }
            else if (ninevalue%10==6) {
                ninevalue='noniness';
                comment7.innerHTML="Cool &#128526;,Try next one";
               comment7.style.color="blue";
            }
            else
            {
                
                comment7.innerText="Ok..Try next one";
                comment7.style.color="blue";
            }
            prei.style.visibility="hidden";
            nexi.style.visibility="hidden";
            setTimeout(() => {
       
                    //seventeen
                    eleven.removeAttribute('one');
                    eleven.setAttribute('class','zero');
                    twelve.setAttribute('class','one');
                    twelve.setAttribute('one','hello');
                    prei.style.visibility="visible";
                    nexi.style.visibility="visible";
            
            }, 2000);  

        }
        else
        {
            comment7.innerText="I asked for number";
            comment7.style.color="red";
        }
    }
});

//Validation for stress
var stress=document.querySelectorAll('input[name="stress"]');
var stressvalue;
var thirt=document.getElementById("thirt");
var comment8=document.getElementById('comment8');
for (const stres of stress) {
    stres.addEventListener('click',function() {
        stressvalue=stres.value;
        console.log(stressvalue);
        if (stressvalue=="syes") {
            comment8.innerHTML="Spend some time with friends...&#129311";
            comment8.style.color="blue";
        }
        else
        {
            comment8.innerHTML="You are not a human&#129302;";
            comment8.style.color="red";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
        
                twelve.removeAttribute('one');
                twelve.setAttribute('class','zero');
                thirt.setAttribute('class','one');
                thirt.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
            
        }, 2000);  
    })
}

//Validation for Hug
var hug=document.querySelectorAll('input[name="hug"]');
var hugvalue;
var fourt=document.getElementById("fourt");
var comment9=document.getElementById('comment9');
var hugcomment=document.getElementById('hugcomment');
for (const hugg of hug) {
    hugg.addEventListener('click',function() {
        hugvalue=hugg.value;
        if (hugvalue=="hugno") {
           
            hugcomment.innerText="That's ok";
            hugcomment.style.color="blue";
        }
        else
        {
            hugcomment.innerHTML="That's nice&#128522;";
            hugcomment.style.color="blue";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
     
                thirt.removeAttribute('one');
                thirt.setAttribute('class','zero');
                fourt.setAttribute('class','one');
                fourt.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
            

        }, 2000);  
    })
}

//Validation for sentence text
qndiv.style.display='none';
timeout.style.display='none';
console.log(abtn);
var avalue;
abtn.addEventListener('click',play);
var auname=document.getElementById('auname');
var confirm4=document.getElementById('confirm4');
var comment11=document.getElementById('comment11');
var fivet=document.getElementById('fivet');
console.log(audio);
function play(e)
{
    audio.play();
}
confirm4.addEventListener('click',function (e) {
    var temp4=auname.value;
    //console.log(temp4);
    if(temp4.search(/[^A-Za-z\s]/)==-1)
    {
        if (temp4.length>7 && temp4.length<15)
        {
            avalue=temp4;
            avalue=avalue.toLowerCase(avalue);
            avalue=avalue.split(" ").join("");
            comment11.innerHTML="Cool &#128526;...Try next one";
            comment11.style.color="blue";
            if (avalue!="boxwithfox") {
                avalue='nobox'
                console.log("Lost stars");
            }
            prei.style.visibility="hidden";
            nexi.style.visibility="hidden";
            setTimeout(function () {
           
                    fourt.removeAttribute('one');
                    fourt.setAttribute('class','zero');
                    fivet.setAttribute('class','one');
                    fivet.setAttribute('one','hello');
                    prei.style.visibility="visible";
                    nexi.style.visibility="visible";
                 
            },2000);
        }
        else
        {
            comment11.innerText="Sentence should be greater than 6 and lesser than 15";
            comment11.style.color="red";
            
           
        }
    }
    else
    {
        comment11.innerText="Enter a valid sentence";
        comment11.style.color="red";
    }
    
})



//timeout


let sec='60';
var min='2';
console.log(sec.length);
var compvalue;
var compvalue1;
var sixteen=document.getElementById('sixteen');
passagebtn.onclick=function () {
    passagebtn.style.display='none';
    qndiv.style.display='block';
    timeout.style.display='block';
    qndiv.style.font
    
    myin=setInterval(() => {
        var lens=sec.length;
        sec--;
        if(sec==9)
            timeout.innerHTML=min+':'+'0'+sec;
        else if(lens==1)
            timeout.innerHTML=min+':'+'0'+sec;
        else
            timeout.innerHTML=min+':'+sec;
        
        if(sec==0)
        {
            
            if(min!=0)
                min--;
            timeout.innerHTML=min+':'+'0'+sec;
            sec='60'
            
        }
    
        sec=''+sec+'';
        console.log(min);
        console.log(sec);
        stop();
    }, 1000);
}
function stop()
{
    if (min==0) 
        timeout.style.color='red';      
    
    if(min==0 && sec==60)
    {
        clearInterval(myin);
        timeheader.style.display='none';
        timeout.style.display='none';
        qndiv.style.display='none';
        var div='<h1 style="font-size: 1.2rem;position:relative;top:3%;text-align: center;">Answer the question</h1>'+
        '<h3 style="font-size:0.9rem;position:relative;top:1%;text-align:center;"id="bqn1">Bruce wayne is a...</h3>'+
        '<div id="richdiv" style="text-align: center; position: relative; top:-1%;">'+
        '<input type="radio" name="bruce1" value="milli"  style=" width: 0.7rem;height: 0.7rem;"/>'+
        '<label for="milli" style="font-size:0.8rem;">Millionarie</label>&nbsp;&nbsp;'+
        '<input type="radio" name="bruce1"value="billi" style=" width: 0.7rem;height: 0.7rem;"/>'+
        '<label for="billi" style="font-size: 0.8rem;">Billionarie</label>'+
        '</div>'+
        '<h3 style="font-size:0.9rem;position:relative;top:1%;text-align:center;visibility:hidden;"id="bqn2">Name of the superhero mention in the passage</h3>'+
        '<div style="text-align: center; position: relative; top:-1%;visibility:hidden;"id="superdiv">'+
        '<input type="radio" name="bruce2" value="batman"  style=" width: 0.7rem;height: 0.7rem;"/>'+
        '<label for="batman" style="font-size:0.8rem;">Batman</label>&nbsp;&nbsp;'+
        '<input type="radio" name="bruce2"value="billi" style=" width: 0.7rem;height: 0.7rem;"/>'+
        '<label for="ironman" style="font-size: 0.8rem;">Ironman</label>'+
        '</div>'+
        
        '<p style="font-size: 1rem;text-align: center; position:relative;top:1%;"id="batcomment"></p>';
        
        fifteen.innerHTML=div;
        var batradio=document.querySelectorAll('input[name="bruce1"]');
        var batdiv1=document.getElementById('richdiv'); 
        var batqn1=document.getElementById('bqn1');
        console.log(batdiv1);
        var batqn2=document.getElementById('bqn2');
        var batdiv2=document.getElementById('superdiv');
        console.log(batdiv2);
        for (const bat of batradio) {
            bat.addEventListener('click',function() {
                compvalue=bat.value;
                console.log(bat.value);
                
                if (bat.value=="milli") {
                   
                    
                }
                console.log("hi");
                prei.style.visibility="hidden";
                nexi.style.visibility="hidden";
                setTimeout(() => {
                    batdiv1.style.display='none';
                    batqn1.style.display='none';
                    batqn2.style.visibility='visible';
                    batdiv2.style.visibility='visible';
                    prei.style.visibility="visible";
                    nexi.style.visibility="visible";
                    var batradio2=document.querySelectorAll('input[name="bruce2"]');
                    for (const bat1 of batradio2) {
                        bat1.addEventListener('click',function () {
                            console.log(bat1.value);
                            compvalue1=bat1.value;
                            var batcomment=document.getElementById('batcomment');
                            if (bat1.value=="batman") {
                                batcomment.innerHTML="&#129415;"+'  '+'Forever';
                                
                                console.log("HI");
                                prei.style.visibility="hidden";
                                nexi.style.visibility="hidden";
                                setTimeout(() => {
                                   
                            
                                        fivet.removeAttribute('one');
                                        fivet.setAttribute('class','zero');
                                        sixteen.setAttribute('class','one');
                                        sixteen.setAttribute('one','hello');
                                        prei.style.visibility="visible";
                                        nexi.style.visibility="visible";
                                    
                                }, 2500);
                            }
                            else
                            {
                                
                                batcomment.innerHTML="That's cool go on... &#128526;";
                                batcomment.style.color="blue";
                               
                                console.log("I think you don't like batman");
                                prei.style.visibility="hidden";
                                nexi.style.visibility="hidden";
                                setTimeout(() => {
                       
                                        fivet.removeAttribute('one');
                                        fivet.setAttribute('class','zero');
                                        sixteen.setAttribute('class','one');
                                        sixteen.setAttribute('one','hello');
                                        prei.style.visibility="visible";
                                        nexi.style.visibility="visible";
                                    
                                }, 2000);
                            }
                        });
                    }

                }, 2500);


            });
        }        
        
        
    }

}       

//Hand validation
var showbtn=document.getElementById('show');
var hand=document.getElementById('hand');
var seventeen=document.getElementById('seventeen');
var flags=0;
var handvalue;
var facecomments=['Cool face','Pretty face','Awful face'];
var fc=facecomments[Math.floor(Math.random()*3)];
showbtn.addEventListener('click',function click(e) {
    hand.style.visibility="hidden";
    showbtn.style.visibility="hidden";


    var camera=
    
    '<video id="video" style="width:400%;height:auto;position:relative;left:-150%;top:15%;object-fit:contain;"></video>'+
    
    '<h3 id="handcomment"style="position:relative;top:15%;font-size:1rem;text-align:center;"></h3>';
    sixteen.innerHTML=camera;
    navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;
    var lmodel;
    var temp=0;
    const video = document.getElementById('video');
    console.log(handTrack);
    console.log(navigator.getUserMedia);
    handTrack.startVideo(video).then(status=>{
        if(status)
        {
            navigator.getUserMedia({video:true},stream=>{
                
                video.srcObject=stream;
                
                var calldetect=setInterval(detect,1000);
                setTimeout(() => {
                    clearInterval(calldetect);
                    handTrack.stopVideo();
                    if (stream!=null) {
                        stream.getTracks().map(function(val){
                            val.stop();
                        });
                    }
                    video.style.visibility="hidden";
                    console.log(temp);
                    if (temp<5) {
                        console.log("hellods");
                        //setTimeout(() => {
                           
                            if(flags<1)
                            {
                                flags++;
                                console.log("h1");
                                sixteen.innerHTML="<h1 style='font-size: 1rem;position:relative;top:20%;text-align: center;'>Not recogonized</h1>"+
                                                   '<input type="button" value="Try Again" id="try">';
                                var trybtn=document.getElementById('try');
                                trybtn.addEventListener('click',function (e) {
                                    click();
                                });
                            } 
                            else{
                                sixteen.innerHTML="<h1 style='font-size: 1rem;position:relative;top:20%;text-align: center;color:blue;'>Cool move on... &#128526;</h1>";
                                handvalue='1hand';
                                //write here  
                                
                                prei.style.visibility="hidden";
                                nexi.style.visibility="hidden";
                                setTimeout(() => {
                              
                                        sixteen.removeAttribute('one');
                                        sixteen.setAttribute('class','zero');
                                        seventeen.setAttribute('class','one');
                                        seventeen.setAttribute('one','hello');
                                        prei.style.visibility="visible";
                                        nexi.style.visibility="visible";
                                    
                                }, 1500);     
                            }   
                       // },500);
                        
                    }
                    else
                    {

                        handvalue='-1hand';
                        sixteen.innerHTML="<h1 style='font-size: 1rem;position:relative;top:20%;text-align: center;color:blue;'>Cool move on... &#128526;</h1>";
                        
                        prei.style.visibility="hidden";
                        nexi.style.visibility="hidden";
                        setTimeout(() => {
                         
                                sixteen.removeAttribute('one');
                                sixteen.setAttribute('class','zero');
                                seventeen.setAttribute('class','one');
                                seventeen.setAttribute('one','hello');
                                prei.style.visibility="visible";
                                nexi.style.visibility="visible";
                        }, 1500);
                    }
                }, 10000);


            },err=>{
                sixteen.innerHTML="<h1 style='font-size: 1rem;position:relative;top:20%;text-align: center;color:red;'>Something went wrong,Try again</h1>"+
                                '<input type="button" value="Try Again" id="try2">';
                                var trybtn2=document.getElementById('try2');
                                trybtn2.addEventListener('click',function (e) {
                                    click();
                                });
            });
        }
        
    });
            
    function detect()
    {
        lmodel.detect(video).then(predictions=>
        {
                console.log(predictions);

            if (predictions[0]["label"]=="face") {
                handcomment.innerText="Avoid your"+' '+fc;
                handcomment.style.color="red";

            }
            if (predictions[0]["label"]=="open") {
                handcomment.innerText="Recogonizing..."
                handcomment.style.color="blue";
                temp++;
            }
            
        });
        
        
    }
        
    handTrack.load().then(model => { 
        lmodel=model;
        
    }); 


});

//Audio to Voice
var listen=document.getElementById('Listen');
var speaks=document.getElementById('speaks');
var lr=document.getElementById('l/r');
var listenvalue;
var audio2=document.getElementById('audio2');
var eighteen=document.getElementById('eighteen');
listen.addEventListener('click',function(e){
    audio2.play();
});
var a=0;
var speaks=document.getElementById("speaks");
var SpeechRecognition= SpeechRecognition ||webkitSpeechRecognition;
var recognition2 =new SpeechRecognition();  
var d=0;
recognition2.onstart=function(){
   
    var comment12=document.getElementById('comment12');
    comment12.innerText="Recognition started,speak now...";
    comment12.style.color="blue";
    
    //recognition.stop();
    //start();
};

recognition2.onend=function(event) {
    console.log("hi");
    if (a==1) {
        console.log("we get a result");
    }
    else
    {
        comment12.innerText="Just talk something...";
        comment12.style.color="red";
    }
}
recognition2.onerror=function (err) {
    console.error(err);
    comment12.innerText="Something went wrong!,Try again";
    comment12.style.color="red";
}

recognition2.onresult=function(event)
{
  
    //console.log(event);
    console.log("i am result bro");
    var transcript3 = event.results[0][0].transcript;
    a=1;
    listenvalue=1;
    console.log(transcript3);
    transcript3=transcript3.toLowerCase();
    transcript3=transcript3.split(" ").join("");
    if (transcript3.indexOf("helloworld")==0) {
        listenvalue=2;
        listen.style.visibility="hidden";
        speaks.style.visibility="hidden";
        lr.style.visibility="hidden";
        comment12.innerText="You pronounced correctly ";
        comment12.style.top="-9%";
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
       
                seventeen.removeAttribute('one');
                seventeen.setAttribute('class','zero');
                eighteen.setAttribute('class','one');
                eighteen.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
            
        }, 1500);
    }
    else
    {
        listenvalue='1listen';
        if (d==0) {
            comment12.innerText="Try again,you are pronouncing wrong";
            comment12.style.color="red";
            d++;
        }
        else
        {
            listen.style.visibility="hidden";
            speaks.style.visibility="hidden";
            lr.style.visibility="hidden";
            comment12.innerText="Ok...Try next one";
            comment12.style.color="blue";
            comment12.style.top="-9%";
            prei.style.visibility="hidden";
            nexi.style.visibility="hidden";
            setTimeout(() => {
           
                    seventeen.removeAttribute('one');
                    seventeen.setAttribute('class','zero');
                    eighteen.setAttribute('class','one');
                    eighteen.setAttribute('one','hello');
                    prei.style.visibility="visible";
                    nexi.style.visibility="visible";
                
            }, 1500);    
        }
        
        
    }
};
speaks.addEventListener('click',start2)
function start2()
{
    recognition2.start();
     
}
//Audio and Read
var eightone=document.getElementById('eightone');
var lrbtn=document.getElementById('lrbtn');
var lread=document.getElementById('l/read');
var reader=document.getElementById('reader');
var lionvalue;
var birdvalue;
var ooo=0;
console.log(reader);
var chirp=document.getElementById('chirp')
lrbtn.addEventListener('click',function xname(e) {
    lrbtn.style.visibility="hidden";
    chirp.play();
    reader.style.visibility="visible";
    setTimeout(() => {
        lread.style.visibility="hidden";
        reader.style.visibility="hidden";
        var hiddendiv=document.getElementById('hiddendiv');
        hiddendiv.style.visibility="visible";
        
        hiddendiv.style.textAlign="center";
        function conn() {
            eighteen.innerHTML='<h1 style="font-size: 1.3rem;position:relative;top:5%;text-align: center;">Yesterday I saw a lion kiss a ______</h1>'+
                                '<div style="text-align: center; position: relative; top:8%;">'+
                                '<input type="radio" name="lion" value="Lioness"  style=" width: 0.7rem;height: 0.7rem;"/>'+
                                '<label for="Lioness" style="font-size:0.8rem;">Lioness</label>&nbsp;&nbsp;'+
                                '<input type="radio" name="lion"value="Deer" style=" width: 0.7rem;height: 0.7rem;"/>'+
                                '<label for="Deer" style="font-size: 0.8rem;">Deer</label>'+
                                '</div>'+           
                                '<p style="font-size: 0.9rem;text-align: center; position:relative;top:9%;left: 1%;"id="lioncomment"></p>';
                                var lioncomment=document.getElementById('lioncomment');
                                var lionnames=document.querySelectorAll('input[name="lion"]');
            for (const lionname of lionnames) {
                lionname.addEventListener('click',function () {
                    lionvalue=lionname.value;
                    if (lionname.value=="Lioness") {
                        lioncomment.innerHTML='Lion'+'&#128151;'+'Lioness';
                        lioncomment.style.color="blue";
                    }
                    else
                    {
                        lioncomment.innerHTML="Thats's cool &#128526;";
                        lioncomment.style.color="blue";
                        
                    }
                    prei.style.visibility="hidden";
                    nexi.style.visibility="hidden";
                    setTimeout(() => {
                        eighteen.innerHTML='<h1 style="font-size: 1.3rem;position:relative;top:5%;text-align: center;">________ chirping outside the window</h1>'+
                        '<div style="text-align: center; position: relative; top:8%;">'+
                                '<input type="radio" name="birds" value="lbirds"  style=" width: 0.7rem;height: 0.7rem;"/>'+
                                '<label for="lbirds" style="font-size:0.8rem;">Love Birds</label>&nbsp;&nbsp;'+
                                '<input type="radio" name="birds"value="parrot" style=" width: 0.7rem;height: 0.7rem;"/>'+
                                '<label for="parrot" style="font-size: 0.8rem;">Parrot</label>'+
                                '</div>'+           
                        '<p style="font-size: 0.9rem;text-align: center; position:relative;top:9%;left: 1%;"id="birdcomment"></p>';
                                
                        prei.style.visibility="visible";
                        nexi.style.visibility="visible";
                        var birdcomment=document.getElementById('birdcomment');
                        var birds=document.querySelectorAll('input[name="birds"]');
                        for (const bird of birds) {
                            
                            bird.addEventListener('click',function () {
                                birdvalue=bird.value;
                                if (birdvalue!="lbirds") {
                                   
                                    birdcomment.innerHTML="Cool move on... &#128526;";
                                    birdcomment.style.color="blue";
                                }
                                else
                                {
                                    birdcomment.innerHTML='&#128151;'+''+'&#128151;';
                                    birdcomment.style.color="blue";
                                }
                                prei.style.visibility="hidden";
                                nexi.style.visibility="hidden";
                                setTimeout(() => {
                              
                                        eighteen.removeAttribute('one');
                                        eighteen.setAttribute('class','zero');
                                        eightone.setAttribute('class','one');
                                        eightone.setAttribute('one','hello');
                                        prei.style.visibility="visible";
                                        nexi.style.visibility="visible";
                                    
                                }, 2000);              
                            });
                        }    
                        
                    }, 2000);
                    
                });
            }
        }

        if (ooo==0) {
            hiddendiv.innerHTML='<input type="button" value="Try again" id="why"></br></br>'+
            ' <input type="button" value="Continue" id="continue">';
            var why=document.getElementById('why');
            var continues=document.getElementById('continue');
            continues.addEventListener('click',conn);
            why.addEventListener('click',function (e) {
                hiddendiv.innerHTML=" ";
                hiddendiv.style.visibility="hidden";
                lread.style.visibility="visible";
                //reader.style.visibility="visible";
                lrbtn.style.visibility="visible";
                ooo=1;
            });
        }
        else
        {
            
            conn();
        }
        
    
    }, 2500);


});
//Eighteenone
var eighttwo=document.getElementById('eighttwo');
var naturevalue;
var naturecomment=document.getElementById('naturecomment');
var natures=document.querySelectorAll('[name="nature"]');
for (const nature of natures) {
    nature.addEventListener('click',function (e) {
        naturevalue=nature.value;
        if (nature.value=="Yesnature") {
            naturecomment.innerHTML="That's cool... &#128526;";
            naturecomment.style.color="blue";
        }
        else
        {
            naturecomment.innerHTML="I think you don't know the actual meaning of nature&#128566;";
            naturecomment.style.color="blue";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
        
                eightone.removeAttribute('one');
                eightone.setAttribute('class','zero');
                eighttwo.setAttribute('class','one');
                eighttwo.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
            
        }, 2500);      
    }); 
}
//Eighttwo
var cyclecomment=document.getElementById('cyclecomment');
var eightthree=document.getElementById('eightthree');
var cycles=document.querySelectorAll('[name="cycle"]');
var cyclevalue;
for (const cycle of cycles) {
    cycle.addEventListener('click',function (e) {
        cyclevalue=cycle.value;
        if (cycle.value!="Yesby") {
          
            cyclecomment.innerText="Ok..go on";
            cyclecomment.style.color="blue";
           
            
        }
        else
        {
            cyclecomment.innerHTML="That's cool... &#128526;";
            cyclecomment.style.color="blue";
            if (naturevalue=="Nonature") {
                cyclecomment.innerHTML="then..what just go outside and interact with nature alone &#128693;";
                cyclecomment.style.color="blue";
            }
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
       
                eighttwo.removeAttribute('one');
                eighttwo.setAttribute('class','zero');
                eightthree.setAttribute('class','one');
                eightthree.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
            
        }, 2500);      
    }); 
}
//Eightthree
var nineteen=document.getElementById('nineteen');
var shoes=document.querySelectorAll('[name="shoe"]');
var shoevalue;
var shoecomment=document.getElementById('shoecomment');
for (const shoe of shoes) {
    shoe.addEventListener('click',function (e) {
        shoevalue=shoe.value;
        if (shoe.value!="Yesshoe") {
            
            if (cyclevalue=="Noby") {
                shoecomment.innerText="Ok go on...";
            
            }
            else
            {
                shoecomment.innerHTML="That's not a big matter you will learn soon&#128077;";
                
            }
            shoecomment.style.color="blue";
        }
        else
        {
            shoecomment.innerHTML="That's cool &#128526;"
            shoecomment.style.color="blue";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
          
                eightthree.removeAttribute('one');
                eightthree.setAttribute('class','zero');
                nineteen.setAttribute('class','one');
                nineteen.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";
            
        },2500);      
    }); 
}
//Nineteen


var teach=document.getElementById('teach');
var bridge=document.getElementById('bridge');
var count=0;

var voice=document.getElementById('voice');
bridge.addEventListener('click',function (e) {
   console.log(wordresult);
    var variables=[student,tempvalue,fnfvalue,shapevalue,colorvalue,fruitname,clockvalue,mathvalue,wordresult,senresult,ninevalue,stressvalue,hugvalue,avalue,compvalue,compvalue1,handvalue,listenvalue,lionvalue,birdvalue,naturevalue,cyclevalue,shoevalue];    
    for (const variable of variables) {
        
        if (variable==undefined) {
            count++;
            //break;
            
        }
        //Dyslexia...
        else if (variable=='danana') {
            dyslexia++
        }
        else if (variable=='milli') {
            dyslexia++
        }
        else if (variable=='ironman') {
            dyslexia++;
        }
        else if (variable=='1word') {
            dyslexia+=3;
           
        }
        else if(variable=='2word')
        {
            dyslexia-=2;
        }
        else if(variable=='1sen')
        {
            dyslexia+=3;
        }
        else if (variable=='2sen') {
            dyslexia-=2;
        }
        
        else if(variable=='noniness'){
            dyslexia++;
        }
        //Dyscalculia
        else if (variable=='norect') {
            dyscalculia++;
        }
        else if(variable=='nopink')
        {
            dyscalculia++;
        }
        else if(variable=='not240')
        {
            dyscalculia++;
        }
        else if(variable=='no2')
        {
            dyscalculia++;
        }
        //Dysgraphia
        else if (variable=='nobanana') {
            dysgraphia++;
        }
        else if (variable=='nobox') {
            dysgraphia++;
        }
        //Dyspraxia
        else if(variable=='Noby')
        {
            dyspraxia++;   
        }
        else if (variable=='Noshoe') {
            dyspraxia++;
        }
        //Autism
        else if (variable=='1friend') {
            autism++;
        }
        else if (variable=='hugno') {
            autism++;
        }
        else if (variable=='1hand') {
            autism+=3;
            adhd++;
        }
        else if(variable=='-1hand')
        {
            autism-=2;
        }
        
        else if(variable=='1listen')
        {
            autism++;
        }
        
        //Adhd
        else if (variable=='Lioness') {
            adhd++;
        }
        else if (variable=='parrot') {
            adhd++;
        }
    }
    console.log(count);
    if (count==0) {
        setTimeout(() => {
            prei.style.visibility="hidden";
            nexi.style.visibility="hidden";
            nineteen.removeAttribute('one');
            nineteen.setAttribute('class','zero');
            twenty.setAttribute('class','one');
            twenty.setAttribute('one','hello');
            
        }, 200);
      
        var teachdiv=con.querySelectorAll("[flags=false]");
        pbtn.addEventListener('click',previous2);
        nbtn.addEventListener('click',next2);
    
        var tlen=teachdiv.length;
        console.log(tlen);
        function next2(e)
        {
            console.log("mascara");
            for(var i=0;i<tlen;i++)
            {
                if(teachdiv[i].hasAttribute("one")){
                    var temp2=i+1;
                        console.log(teachdiv[0]);
                        console.log(i);
                        if(i==tlen-1)
                            temp2=0;
                        
                        console.log(teachdiv[i]);
                        teachdiv[i].removeAttribute("one");
                        teachdiv[i].setAttribute('class','zero');
                        teachdiv[temp2].setAttribute('class','one');
                        teachdiv[temp2].setAttribute("one","hello");
                        console.log(teachdiv[temp2]);
                        break;
                }
                
            }
            
            
        }
        function previous2(e)
        {
        
            console.log("Jingunamani");
            for(var i=0;i<tlen;i++)
            {
                if(teachdiv[i].hasAttribute("one")){
                    
                
                    var temp2=i-1;
            
                    if(i==0)
                        temp2=tlen-1;
                
                    console.log(teachdiv[i]);
                    teachdiv[i].removeAttribute("one");
                    teachdiv[i].setAttribute('class','zero');
                    teachdiv[temp2].setAttribute('class','one');
                    teachdiv[temp2].setAttribute('one','hello');
                    console.log(teachdiv[temp2]);
                    break;
    
                }
            }
    
        }
            
    }
    else
    {

        voice.innerText="Answer all the questions";
        voice.style.color="red";
        setTimeout(() => {
            voice.innerText="";
        }, 2000);
        count=0;
    }
    
});


//Teacher/Relatives
//Turning points for teacher
//started
//Dysgraphia

var started=document.getElementById('Started');
var twentyone=document.getElementById('twentyone');
var dysgvalue;

started.addEventListener('click',function (e) {
    

    pbtn.style.visibility="hidden";
    teach.style.visibility="hidden";
    prei.style.visibility="visible";
    nexi.style.visibility="visible";
 
    twenty.innerHTML=' <h1 style="font-size: 1.2rem;position:relative;top:5%;text-align: center;">Do the kid have poor handwriting and poor spacing</h1>'+
                    '<div style="text-align: center; position: relative; top:8%;">'+
                    '<input type="radio" name="handwri" value="Yeshand"  style=" width: 0.7rem;height: 0.7rem;"/>'+
                    '<label for="Yeshand" style="font-size:0.8rem;">Yes</label>&nbsp;&nbsp;'+
                    '<input type="radio" name="handwri"value="Nohand" style=" width: 0.7rem;height: 0.7rem;"/>'+
                    '<label for="Nohand" style="font-size: 0.8rem;">No</label>'+
                    '</div>'+        
                    
                    '<p style="font-size: 1.1rem;text-align: center;position:relative;top:10%;"id="tcoment1"></p>';
    var tcoment1=document.getElementById('tcoment1');
    var hands=document.querySelectorAll('input[name="handwri"]');
    for (const hand of hands) {
        hand.addEventListener('click',function () {
            if (hand.value=="Yeshand") {
                prei.style.visibility="hidden";
                nexi.style.visibility="hidden";
                
                tcoment1.innerHTML="Help the kid to improve his handwriting&#128591";
                tcoment1.style.color="blue";
                setTimeout(() => {
                    twenty.innerHTML=' <h1 style="font-size: 1.2rem;position:relative;top:5%;text-align: center;">Do the kid has difficulty in holding a pen while writing&#9997;</h1>'+
                                    '<div style="text-align: center; position: relative; top:8%;">'+
                                    '<input type="radio" name="hold" value="Yeshold"  style=" width: 0.7rem;height: 0.7rem;"/>'+
                                    '<label for="Yeshold" style="font-size:0.8rem;">Yes</label>&nbsp;&nbsp;&nbsp;'+
                                    '<input type="radio" name="hold"value="Nohold" style=" width: 0.7rem;height: 0.7rem;"/>'+
                                    '<label for="Nohold" style="font-size: 0.8rem;">No</label>'+
                                    '</div>'+
                                    '<p style="font-size: 0.9rem;text-align: center;position:relative;top:10%;"id="tcoment2"></p>';
                                    prei.style.visibility="visible";
                                    nexi.style.visibility="visible";
                    var tcoment2=document.getElementById("tcoment2");

                    var holds=document.querySelectorAll('input[name="hold"]');
                    for (const hold of holds) {
                        hold.addEventListener('click',function () {
                            if (hold.value=="Yeshold") {
                                prei.style.visibility="hidden";
                                nexi.style.visibility="hidden";
                                
                                tcoment2.innerHTML="I think the kid has bad motor skills,help the kid to develop his motor skills&#128591;";
                                tcoment2.style.color="blue";
                                setTimeout(() => {
                                    twenty.innerHTML=' <h1 style="font-size: 1.2rem;position:relative;top:5%;text-align: center;">Do the kid has difficulty in coloring or avoid coloring</h1>'+
                                    '<div style="text-align: center; position: relative; top:8%;">'+
                                    '<input type="radio" name="kidcolor" value="Yescolor"  style=" width: 0.7rem;height: 0.7rem;"/>'+
                                    '<label for="Yescolor" style="font-size:0.8rem;">Yes</label>&nbsp;&nbsp;&nbsp;'+
                                    '<input type="radio" name="kidcolor"value="Nocolor" style=" width: 0.7rem;height: 0.7rem;"/>'+
                                    '<label for="Nocolor" style="font-size: 0.8rem;">No</label>'+
                                    '</div>'+
                                    '<p style="font-size: 0.9rem;text-align: center;position:relative;top:10%;"id="tcoment3"></p>';
                                    prei.style.visibility="visible";
                                    nexi.style.visibility="visible";
                                    tcoment3=document.getElementById('tcoment3');
                                    var kidcolors=document.querySelectorAll('input[name="kidcolor"]');
                                    for (const kidcolor of kidcolors) {
                                        kidcolor.addEventListener('click',function () {
                                            console.log("inniya thanimaye");
                                            if (kidcolor.value=="Yescolor") {
                                                
                                                dysgvalue='4dysg';
                                                tcoment3.innerHTML="Give the kid a picture and ask them to color it daily&#128591;";
                                                tcoment3.style.color="blue";
                                                prei.style.visibility="hidden";
                                                nexi.style.visibility="hidden";
                                                setTimeout(() => {
                                                
                                                        twenty.removeAttribute('one');
                                                        twenty.setAttribute('class','zero');
                                                        twentyone.setAttribute('class','one');
                                                        twentyone.setAttribute('one','hello');
                                                        prei.style.visibility="visible";
                                                        nexi.style.visibility="visible";
                                                    
                                                }, 2500);  
                                            }
                                            else
                                            {
                                                tcoment3.innerHTML="Ok go on..&#128526";
                                                tcoment3.style.color="blue";
                                                dysgvalue='3dysg';
                                                prei.style.visibility="hidden";
                                                nexi.style.visibility="hidden";
                                                setTimeout(() => {
                                                   
                                                        twenty.removeAttribute('one');
                                                        twenty.setAttribute('class','zero');
                                                        twentyone.setAttribute('class','one');
                                                        twentyone.setAttribute('one','hello');
                                                        prei.style.visibility="visible";
                                                        nexi.style.visibility="visible";
                                                    
                                                }, 2000);       
                                            }
                                        });
                                    }
                                }, 2500);
                                    
                            }
                            else
                            {
                                tcoment2.innerHTML="Ok go on..&#128526";
                                tcoment2.style.color="blue";
                                dysgvalue='2dysg';
                                prei.style.visibility="hidden";
                                nexi.style.visibility="hidden";
                                setTimeout(() => {
                                   
                                        twenty.removeAttribute('one');
                                        twenty.setAttribute('class','zero');
                                        twentyone.setAttribute('class','one');
                                        twentyone.setAttribute('one','hello');
                                        prei.style.visibility="visible";
                                        nexi.style.visibility="visible";
                                    
                                }, 1500);  
                            }
                        });
                    }


                },2500);
            }       
            else
            {
                tcoment1.innerHTML="Ok go on..&#128526";
                tcoment1.style.color="blue";
                dysgvalue='1dysg';
                prei.style.visibility="hidden";
                nexi.style.visibility="hidden";
                setTimeout(() => {
                    
                        //24
                        twenty.removeAttribute('one');
                        twenty.setAttribute('class','zero');
                        twentyone.setAttribute('class','one');
                        twentyone.setAttribute('one','hello');
                        prei.style.visibility="visible";
                        nexi.style.visibility="visible";                
                    
                }, 1500);  
            }
        });
    }
});
//ADHD
var twentytwo=document.getElementById('twentytwo');
var sits=document.querySelectorAll('input[name="sit"]');
var tcoment4=document.getElementById('tcoment4');
var adhdvalue;
for (const sit of sits) {
    sit.addEventListener('click',function () {
        if (sit.value=="Yessit") 
        {
            
            tcoment4.style.color="blue";
            tcoment4.innerHTML="Advice the kid to sit in one place	&#128578";
            
            prei.style.visibility="hidden";
            nexi.style.visibility="hidden";
            setTimeout(() => {
                twentyone.innerHTML=' <h1 style="font-size: 1.2rem;position:relative;top:5%;text-align: center;">Do the kid disturbs others in the class</h1>'+
                                        '<div style="text-align: center; position: relative; top:8%;">'+
                                        '<input type="radio" name="disturb" value="yesdisturb"  style=" width: 0.7rem;height: 0.7rem;"/>'+
                                        '<label for="yesdisturb" style="font-size:0.8rem;">Yes</label>&nbsp;&nbsp;&nbsp;'+
                                        '<input type="radio" name="disturb"value="nodisturb" style=" width: 0.7rem;height: 0.7rem;"/>'+
                                        '<label for="nodisturb" style="font-size: 0.8rem;">No</label>'+
                                        '</div>'+
                                        '<p style="font-size: 1rem;position:relative;top:8%;text-align: center;"id="tcoment5"></p>';
                                        var tcoment5=document.getElementById('tcoment5');
                                        
                                    
                                    prei.style.visibility="visible";
                                    nexi.style.visibility="visible";
                var disturbs=document.querySelectorAll('input[name="disturb"]');
                for (const disturb of disturbs) {
                    disturb.addEventListener('click',function (e) {
                        if (disturb.value=="yesdisturb") {
                           

                           prei.style.visibility="hidden";
                            nexi.style.visibility="hidden";
                            tcoment5.style.color="blue";
                            tcoment5.innerHTML="Discuss the behaviour with the child";
                            setTimeout(() => {
                                twentyone.innerHTML=' <h1 style="font-size: 1.1rem;position:relative;top:5%;text-align: center;">Do the kid be in motion especially while in silence surrounding</h1>'+
                                '<div style="text-align: center; position: relative; top:8%;">'+
                                '<input type="radio" name="motion" value="yesmotion"  style=" width: 0.7rem;height: 0.7rem;"/>'+
                                '<label for="yesmotion" style="font-size:0.8rem;">Yes</label>&nbsp;&nbsp;&nbsp;'+
                                '<input type="radio" name="motion"value="nodisturb" style=" width: 0.7rem;height: 0.7rem;"/>'+
                                '<label for="nomotion" style="font-size: 0.8rem;">No</label>'+

                                '</div>'+
                                '<p style="font-size: 1rem;position:relative;top:8%;text-align: center;"id="tcoment6"></p>';
                                var tcoment6=document.getElementById('tcoment6');

                                prei.style.visibility="visible";
                                nexi.style.visibility="visible";
                                var motions=document.querySelectorAll('input[name="motion"]');
                                for (const motion of motions) 
                                {
                                    motion.addEventListener('click',function (e) {
                                    if (motion.value=="yesmotion") {
                                             
                                            adhdvalue='4adhd';
                                            prei.style.visibility="hidden";
                                            nexi.style.visibility="hidden";
                                            tcoment6.style.color="blue";
                                            tcoment6.innerHTML="It's all the  sign of ADHD,so control the child&#128578;";
                                            setTimeout(() => {
                                             
                                                    //24
                                                    twentyone.removeAttribute('one');
                                                    twentyone.setAttribute('class','zero');
                                                    twentytwo.setAttribute('class','one');
                                                    twentytwo.setAttribute('one','hello');
                                                    prei.style.visibility="visible";
                                                    nexi.style.visibility="visible";
                                                
                                            }, 1500);      
                                    } 
                                    else
                                    {
                                            adhdvalue='3adhd';
                                            prei.style.visibility="hidden";
                                            nexi.style.visibility="hidden";
                                            tcoment6.style.color="black";
                                            tcoment6.innerHTML="&#128526;";
                                            setTimeout(() => {
                                           
                                                    twentyone.removeAttribute('one');
                                                    twentyone.setAttribute('class','zero');
                                                    twentytwo.setAttribute('class','one');
                                                    twentytwo.setAttribute('one','hello');
                                                    prei.style.visibility="visible";
                                                    nexi.style.visibility="visible";
                                                
                                            }, 1500);
                                    }
                                    });
                                }
                            }, 1000);
                            
                        }
                        else
                        {
                            adhdvalue='2adhd';
                            prei.style.visibility="hidden";
                            nexi.style.visibility="hidden";
                            tcoment5.style.color="black";
                            tcoment5.innerHTML="&#128526;";
                            setTimeout(() => {
                     
                                    //24
                                    twentyone.removeAttribute('one');
                                    twentyone.setAttribute('class','zero');
                                    twentytwo.setAttribute('class','one');
                                    twentytwo.setAttribute('one','hello');
                                    prei.style.visibility="visible";
                                    nexi.style.visibility="visible";
                                
                            }, 1500);   
                        }
                    });    
                }
                
            },1000);
            
        }
        else
        {
            adhdvalue='1adhd';
            prei.style.visibility="hidden";
            nexi.style.visibility="hidden";
            tcoment4.style.color="black";
            tcoment4.innerHTML="&#128526;";

            setTimeout(() => {
              
                    twentyone.removeAttribute('one');
                    twentyone.setAttribute('class','zero');
                    twentytwo.setAttribute('class','one');
                    twentytwo.setAttribute('one','hello');
                    prei.style.visibility="visible";
                    nexi.style.visibility="visible";
                
            }, 1500);             
        }
    });
}

//Autism
//Hand flicking
var handflick;
var tcomment8=document.getElementById('tcomment8');
var twentythree=document.getElementById('twentythree');
var toes=document.querySelectorAll('input[name="toe"]');
for (const toe of toes) {
    toe.addEventListener('click',function (e) {
        handflick=toe.value;
        if (toe.value=="Yestoe") {
            
            tcomment8.style.color="blue";
            
            tcomment8.innerHTML="Tell the kid to press something like a ball&#127952;";
           
        }
        else
        {
            handflick='Notoe';
            tcomment8.style.color="black";
            
            tcomment8.innerHTML="&#128374;";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
        
                twentytwo.removeAttribute('one');
                twentytwo.setAttribute('class','zero');
                twentythree.setAttribute('class','one');
                twentythree.setAttribute('one','hello');
                prei.style.visibility="visible";
                 nexi.style.visibility="visible";                       
            
        }, 1500);  

    });
}
//Eye-contact
var tcomment9=document.getElementById('tcomment9');
var twentyfour=document.getElementById('twentyfour');
var eyevalue;
var eyes=document.querySelectorAll('input[name="eye"]');
for (const eye of eyes) {
    
    eye.addEventListener('click',function (e) {
        eyevalue=eye.value;
        if (eye.value=="Yese") {
            
            tcomment9.style.color="blue";
            tcomment9.innerHTML="prompt the kid by lightly touching his chin to look towards youtwen&#128064;";
            
        }
        else
        {
            tcomment9.style.color="black";
            tcomment9.innerHTML="&#128374;";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
          
                twentythree.removeAttribute('one');
                twentythree.setAttribute('class','zero');
                twentyfour.setAttribute('class','one');
                twentyfour.setAttribute('one','hello');
                prei.style.visibility="visible";
                 nexi.style.visibility="visible";
            
        }, 2000);  

    });
}
//Mingle
var twentyfive=document.getElementById('twentyfive');
tcomment10=document.getElementById('tcomment10');
var minvalue;
var mins=document.querySelectorAll('input[name="min"]');
for (const min of mins) {
    
    min.addEventListener('click',function (e) {
        minvalue=min.value;
        if (min.value=="Yesm") {
            
            tcomment10.style.color="blue";
            tcomment10.innerHTML="Just go and have a talk with the kid&#128522";
        }
        else
        {
            tcomment10.innerHTML="&#128526;";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
       
                twentyfour.removeAttribute('one');
                twentyfour.setAttribute('class','zero');
                twentyfive.setAttribute('class','one');
                twentyfive.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";                        
            
        }, 1500);  

    });
}
//Droping
var twentysix=document.getElementById('twentysix');
var dropvalue;
var drops=document.querySelectorAll('input[name="drop"]');
var tcomment11=document.getElementById('tcomment11');
for (const drop of drops) {
    drop.addEventListener('click',function (e) {
        dropvalue=drop.value;
        if (drop.value=="Yesd") {
            
            tcomment11.style.color="blue";
            tcomment11.innerHTML="Ok go on...";
        }
        else
        {
            tcomment11.innerHTML="&#128526;";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {

                twentyfive.removeAttribute('one');
                twentyfive.setAttribute('class','zero');
                twentysix.setAttribute('class','one');
                twentysix.setAttribute('one','hello');
                prei.style.visibility="visible";
                 nexi.style.visibility="visible";                       
            
        }, 1500);  

    });
}

//Clumsy
var twentyseven=document.getElementById('twentyseven');
var clumvalue;
var tcomment12=document.getElementById('tcomment12');
var clumsys=document.querySelectorAll('input[name="clumsy"]');
for (const clumsy of clumsys) {
    clumsy.addEventListener('click',function (e) {
        clumvalue=clumsy.value;
        if (clumsy.value=="Yesclum") {
            
            tcomment12.style.color="blue";
            tcomment12.innerHTML="Ok go on...";
        }
        else
        {
            tcomment12.innerHTML="&#128526;";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
      
                twentysix.removeAttribute('one');
                twentysix.setAttribute('class','zero');
                twentyseven.setAttribute('class','one');
                twentyseven.setAttribute('one','hello');
                prei.style.visibility="visible";
                 nexi.style.visibility="visible";                       
            
        }, 1500);  

    });
}
//Posture
var twentyeight=document.getElementById('twentyeight');
var posturevalue;
var postures=document.querySelectorAll('input[name="posture"]');
var tcomment13=document.getElementById('tcomment13');
for (const posture of postures) {
    posture.addEventListener('click',function (e) {
        posturevalue=posture.value;
        if (posture.value=="Yespos") {
            
            tcomment13.style.color="blue";
            tcomment13.innerHTML="Ok go on...";
        }
        else
        {
            tcomment13.innerHTML="&#128526;";
        }
        prei.style.visibility="hidden";
        nexi.style.visibility="hidden";
        setTimeout(() => {
     
                twentyseven.removeAttribute('one');
                twentyseven.setAttribute('class','zero');
                twentyeight.setAttribute('class','one');
                twentyeight.setAttribute('one','hello');
                prei.style.visibility="visible";
                nexi.style.visibility="visible";                        
            
        }, 1500);  

    });
}
//Submit
var twentynine=document.getElementById('twentynine');
var submit=document.getElementById('submit');
var mamvoice=document.getElementById('mamvoice');
var count2=0;
submit.addEventListener('click',function (e) {

    var vathivalues=[dysgvalue,adhdvalue,handflick,eyevalue,minvalue,dropvalue,clumvalue,posturevalue];
    for (const vathivalue of vathivalues) {
        
        if (vathivalue==undefined) {
               count2++;
        }
        //Dysgraphia
        else if(vathivalue=='2dysg')
        {
            dysgraphia++;
        }
        else if (vathivalue=='3dysg') {
            dysgraphia+=3;
        }
        else if (vathivalue=='4dysg') {
            dysgraphia+=5;
        }
        //Adhd
        else if(vathivalue=='2adhd')
        {
            adhd++;
        }
        else if(vathivalue=='3adhd')
        {
            adhd+=3;
        }
        else if(vathivalue=='4adhd')
        {
            adhd+=5;
        }
        else if(vathivalue=='Yestoe')
        {
            autism+=2;
        }
        else if (vathivalue=='Notoe') {
            autism-=2;
        }
        else if (vathivalue=='Yese') {
            autism++;
        }
        else if(vathivalue=='Yesm')
        {
            autism++;
        }
        //Dyspraxia
        else if (vathivalue=='Yesd') {
            dyspraxia+=2;
        }
        else if (vathivalue=='Yesclum') {
            dyspraxia+=2;
        }
        else if(vathivalue=='Yespos'){
            dyspraxia++;
        }



    }
    console.log(count2);
    if (count2==0) {
        
        setTimeout(() => {
           
                //24
            prei.style.visibility="hidden";
            nexi.style.visibility="hidden";
            twentyeight.removeAttribute('one');
            twentyeight.setAttribute('class','zero');
            twentynine.setAttribute('class','one');
            twentynine.setAttribute('one','hello');
            var disorders=[dyslexia,dyscalculia,dysgraphia,dyspraxia,autism,adhd];
            
            for (let ia= 0; ia < disorders.length; ia++) {
                if (diorders[ia]<0) {
                    disorders[ia]=0;
                }    
                
            }
           
            console.log(dyslexia);
            console.log(dyscalculia);
            console.log(dysgraphia);
            console.log(dyspraxia);
            console.log(autism);
            console.log(adhd);
            dyslexia=Math.round(dyslexia/9*100)+'1';
            dyscalculia=Math.round(dyscalculia/4*100)+'2';
            dysgraphia=Math.round(dysgraphia/7*100)+'3';
            dyspraxia=Math.round(dyspraxia/7*100)+'4';
            autism=Math.round(autism/10*100)+'5';
            adhd=Math.round(adhd/8*100)+'6';
            var finalfounddisease=[];
            finaldis=[dyslexia,dyscalculia,dysgraphia,dyspraxia,autism,adhd];
            var readab='good';
            var writeab='good';
            var mathkno='good';
            var bal='good';
            var attend='more';
            var finall='are normal';
            var heck=0;
            for (const final of finaldis) {
                console.log(final);

                if (final/10>45) {
                    console.log(final);
                    if (final%10==1) {
                        finalfounddisease.push('Dyslexia');
                        readab='bad';
                        if (heck==0) {
                            finall="having Dyslexia";
                        }
                        else
                            finall+=",Dyslexia";
                        heck=1;

                    }
                    else if (final%10==2) {
                        finalfounddisease.push('Dyscalculia');
                        mathkno='bad';
                        if (heck==0) {
                            finall="having Dyscalculia";
                        }
                        else
                            finall+=",Dyscalculia";
                        heck=1;
                    }
                    else if (final%10==3) {
                        finalfounddisease.push('Dysgraphia');
                        writeab='bad';
                        if (heck==0) {
                            finall="having Dysgraphia";
                        }
                        else
                            finall+=",Dysgraphia";
                        heck=1;
                    }
                    else if (final%10==4) {
                        finalfounddisease.push('Dyspraxia');
                        bal='bad';
                        if (heck==0) {
                            finall="having Dyspraxia";
                        }
                        else
                            finall+=",Dyspraxia";
                        heck=1;
                    }
                    else if (final%10==5) {
                        finalfounddisease.push('Autism');
                        if (heck==0) {
                            finall="having Autism";
                        }
                        else
                            finall+=",Autism";
                        heck=1;
                    }
                    else if (final%10==6) {
                        finalfounddisease.push('ADHD');
                        attend='less';
                        if (heck==0) {
                            finall="having ADHD";
                        }
                        else
                            finall+=",ADHD";
                        heck=1;
                    }
                }
            }
            
            var headofname=document.getElementById('headofname');
            var content=document.getElementById('content');
            headofname.innerText="Dear"+' '+student+',';
            var percentage=document.getElementById('percentage');
            percentage.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;You having"+" "+readab+" "+"reading ability,"+" "+writeab+" writing ability,"+" "+mathkno+" "+"math knowledge,having a"+" "+bal+" "+"balance, you are"+" "+attend+" "+"attendive,Finally you "+" "+finall;
            var container=document.getElementById('container');
            
                        
            
        
            
            console.log('vangana vankamana');
                
        }, 500);  
    }
    else
    {
        mamvoice.innerText="Answer all the questions";
        mamvoice.style.color="red";
        setTimeout(() => {
            mamvoice.innerText="";
        }, 2000);
        count2=0;
    }

});
//Retest
var retest=document.getElementById('retest');
retest.addEventListener('click',function reload(e) {
    window.location.reload("heck");
})