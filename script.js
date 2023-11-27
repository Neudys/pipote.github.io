let Mostrar = document.querySelector(".Mostrar");
let cont = document.querySelector(".div__div--1")



Mostrar.addEventListener("click", (e)=>{
    cont.innerHTML = '<div class="Div__Div--1">11R22.5 CARRETERA <b>12,600</b></div>'
    cont.innerHTML += '<div class="Div__Div--2">11R22.5 COMBINADA <b>12,800</b></div>'
    cont.innerHTML += '<div class="Div__Div--3">11R24.5 CARRETERA <b>12,600</b></div>'
    cont.innerHTML += '<div class="Div__Div--4">11R24.5 COMBINADA <b>12,800</b></div>'
    cont.innerHTML += '<div class="Div__Div--5">12R22.5 CARRETERA <b>14,200</b></div>'
    cont.innerHTML += '<div class="Div__Div--6">12R22.5 COMBINADA <b>14,200</b></div>'
    cont.innerHTML += '<div class="Div__Div--7">315/80R22.5 CARRETERA <b>13,400</b></div>'
    cont.innerHTML += '<div class="Div__Div--8">315/80R22.5 COMBINADA <b>13,600</b></div>'
    cont.innerHTML += '<div class="Div__Div--8">ARO 22.5 REFORZADO<b>8,200</b></div>'
    cont.innerHTML += '<div class="Div__Div--8">ARO 24.5 REFORZADO <b>8,800</b></div>'
    cont.innerHTML += '<div class="Div__Div--8">ARO ALUMINIO 24.5 <b>14,600</b></div>'
    cont.innerHTML += '<div class="Div__Div--8">1200R24 COMBINADA <b>15,800</b></div>'
})
