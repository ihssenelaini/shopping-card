document.getElementById("actualnumber").value=1
function up(){
    document.getElementById("actualnumber").stepUp(1);
    
}
function down(){
    var nbr=document.getElementById("actualnumber").value
    if(nbr<=1)
    return {}
    document.getElementById("actualnumber").stepDown(1);
    
    // document.getElementById("actualnumber")*=
    
}
produit=()=>
{   var nbr=document.getElementById("actualnumber").value
    var prix1=Number(document.getElementById("prix1").textContent.replace('$',''))
    document.getElementById("prix1").innerHTML=nbr*prix1
}
produit1=()=>
{   var nbr=document.getElementById("actualnumber").value
    var prix1=Number(document.getElementById("prix1").textContent.replace('$',''))
    document.getElementById("prix1").innerHTML=prix1/nbr
}
document.getElementById("secondnumber").value=1
function up2(){
    document.getElementById("secondnumber").stepUp(1);
}
function down2(){
    var nbr=document.getElementById("secondnumber").value
    if(nbr<=1)
    return {}
    document.getElementById("secondnumber").stepDown(1);
}
produit2=()=>
{   var nbr=document.getElementById("secondnumber").value
    var prix2=Number(document.getElementById("prix2").textContent.replace('$',''))
    document.getElementById("prix2").innerHTML=nbr*prix2   }

    produit3=()=>
{   var nbr=document.getElementById("secondnumber").value
    var prix2=Number(document.getElementById("prix2").textContent.replace('$',''))
    document.getElementById("prix2").innerHTML=prix2/(nbr)
}
document.getElementById("thirdnumber").value=1
function up3(){
    document.getElementById("thirdnumber").stepUp(1);

}
function down3(){
    var nbr=document.getElementById("thirdnumber").value
    if(nbr<=1)
    return {}
    document.getElementById("thirdnumber").stepDown(1);
}

produit4=()=>
{   var nbr1=document.getElementById("thirdnumber").value
    var prix3=Number(document.getElementById("prix3").textContent.replace('$',''))
    document.getElementById("prix3").innerHTML=nbr1*prix3  }

    produit5=()=>
    {   var nbr1=document.getElementById("thirdnumber").value
        var prix3=Number(document.getElementById("prix3").textContent.replace('$',''))
        document.getElementById("prix3").innerHTML=prix3/(nbr1)
    }
    