function generate(){
    let words=['Fantastic','Wow','Efficient','fast','Innovative','Digital','Dynamic','Awarded'];
    
    let txt=document.getElementById('txt').value;
    let word=words[Math.floor(Math.random()*words.length)];
    document.getElementById('result').innerText=`${word.toUpperCase()} ${txt.toUpperCase()}`;
    
    clr();
    }
    function clr(){
        txt=document.getElementById('txt').value='';
        }

        