﻿var BA_FUNC_EXTENTION={ill:function(){return document.documentElement.innerHTML.indexOf("lazyload")},sCN:"class",sWT:"width",sHT:"height",sPX:"px",sASA:"allowScriptAccess",sQLT:"quality",sWM:"wmode",sFVS:"flashvars",sALG:"align",sWB:"www.bloggerads.net",oT:[],oIA:{BSPId:0,eAP:0,hP:0,cP:0,AC:"",AA:"",EAC:"",reqUpdate:false},UpdateArticle:function(afa,afaH,afaC){with(this){if(oIA.reqUpdate)oIA.AC.innerHTML=oIA.AA+oIA.EAC;var f=function(){if(this.at==4)(ucfad_async=window.ucfad_async||[]).push({})};
setTimeout(function(){dEC(afa,f);dEC(afaH,f);dEC(afaC,f)},300)}},dIM:function(u){this.gCE("img",{src:u+"?c="+this.sAE},"")},dOIM:function(u){this.gCE("img",{src:u.replace("[timestamp]",(new Date).getTime())},"")},iAry:function(o){return Object.prototype.toString.call(o)==="[object Array]"},eXT:function(t){t.dEC(this,function(a){t[a]=this==window?null:this})},gKV:function(k,v){var ts=this;with(ts)if(arguments.length==2)return k+'="'+v+'" ';else{var s="";dEC(k,function(ks){s+=gKV(/undefined/.test(ts[ks])?
ks:ts[ks],this)});return s}},rA:function(adsMaterialArray){var aa="";with(this){if(adsMaterialArray.length==0)return;ad=gAD();ad.className="Ba_Ad";if(sFID==2&&isContent=="0")ad.style.width="160px";dEC(adsMaterialArray,function(i){aa+=gADB(this,i,adsMaterialArray.length,isContent,sFID)});pAD(aa);setTimeout(function(){var m=sIM;if(iAry(m)&&m.length>0)dEC(m,function(){dIM(this)});dEC(adsMaterialArray,function(i){if(this.oim.length>0)dOIM(this.oim)})},sIMD)}},sIA:function(){with(this){var h=window.location.hostname;
var pixnet=/pixnet.net/i,blogspot=/blogspot./i,xuite=/xuite.net/i;if(h.match(pixnet)){oIA.AC=gBI("article-content-inner");oIA.BSPId=1;if(oIA.AC!=null){oIA.eAP=oIA.AC.innerHTML.indexOf('<div class="author-profile')-25;if(oIA.eAP<0)oIA.eAP=oIA.AC.innerHTML.length;oIA.hP=oIA.eAP/2;oIA.cP=oIA.hP/3*2;oIA.EAC=oIA.AC.innerHTML.substring(oIA.eAP);oIA.AA=oIA.AC.innerHTML.substring(0,oIA.eAP)}}else if(h.match(blogspot)){oIA.AC=gBC("post-body")[0];oIA.BSPId=2;if(oIA.AC!=null){oIA.AA=oIA.AC.innerHTML;oIA.hP=
oIA.AA.length/2;oIA.cP=oIA.hP/3*2}}else if(h.match(xuite)){oIA.AC=gBI("content_all");oIA.BSPId=3;if(oIA.AC!=null&&oIA.AC.innerHTML.indexOf("https://www.youtube.com/embed/")==-1){oIA.eAP=oIA.AC.innerHTML.indexOf('<ins class="rmax"')-16;if(oIA.eAP<0)oIA.eAP=oIA.AC.innerHTML.length;oIA.hP=oIA.eAP/2;oIA.cP=oIA.hP/3*2;oIA.EAC=oIA.AC.innerHTML.substring(oIA.eAP);oIA.AA=oIA.AC.innerHTML.substring(0,oIA.eAP)}}}},rAH:function(adsMaterialArray){with(this){if(ill()>-1&&oIA.BSPId==2)return;if(adsMaterialArray.length==
0)return;if(gBI("BA_AD_1")!=null)return;if(oIA.BSPId==3&&(gBI("BA_AD_1")!=null||gBI("BA_AD1")!=null))return;if(oIA.hP==0)return;var aa='<div id="BA_AD_1" class="Ba_Ad" style="margin: 12px 0 12px 0;">';dEC(adsMaterialArray,function(i){aa+=gADB(this,i,adsMaterialArray.length,"0",1)});aa+="</div>";if(ill()>-1&&oIA.BSPId==1){var e=document.createElement("div");e.innerHTML=aa;gBI("article-content-inner").appendChild(e)}else{oIA.reqUpdate=true;var tags=["p>","<br>","<br/>","<br />","div>"];var sEndOrig=
oIA.AA.substring(oIA.hP),sEnd="";for(var i=0;i<tags.length;i++)if(sEndOrig.indexOf(tags[i])>0){sEnd=sEndOrig.replace(tags[i],tags[i]+aa);break}oIA.AA=oIA.AA.substring(0,oIA.hP)+sEnd}setTimeout(function(){var m=sIMH;if(iAry(m)&&m.length>0)dEC(m,function(){dIM(this)});dEC(adsMaterialArray,function(i){if(this.oim.length>0)dOIM(this.oim)})},sIMD)}},rAC:function(adsMaterialArray){with(this){if(ill()>-1&&oIA.BSPId==2)return;if(adsMaterialArray.length==0)return;if(gBI("BA_AD1")!=null)return;if(oIA.BSPId==
3&&(gBI("BA_AD_1")!=null||gBI("BA_AD1")!=null))return;if(oIA.cP==0)return;var aa='<div id="BA_AD1" class="Ba_Ad" style="margin: 12px 0 12px 0;">';dEC(adsMaterialArray,function(i){aa+=gADB(this,i,adsMaterialArray.length,"1",sFID)});aa+="</div>";if(ill()>-1&&oIA.BSPId==1){var e=document.createElement("div");e.innerHTML=aa;gBI("article-content-inner").appendChild(e)}else{oIA.reqUpdate=true;var tags=["p>","<br>","<br/>","<br />","div>"];var sEndOrig=oIA.AA.substring(oIA.cP),sEnd="";for(var i=0;i<tags.length;i++)if(sEndOrig.indexOf(tags[i])>
0){sEnd=sEndOrig.replace(tags[i],tags[i]+aa);break}oIA.AA=oIA.AA.substring(0,oIA.cP)+sEnd}setTimeout(function(){var m=sIMC;if(iAry(m)&&m.length>0)dEC(m,function(){dIM(this)});dEC(adsMaterialArray,function(i){if(this.oim.length>0)dOIM(this.oim)})},sIMD)}},gADB:function(ad,i,ml,isc,csFID){with(this){var rd="",pi=Math.random().toString().replace(".",""),id="ba_ad_"+pi,w=0,h=0,ew=0,eh=0,isExp=ad.ei!="",eid=id+"_E",mgn="";switch(csFID){case "2":if(isc=="1")if(ad.as==8)mgn="Mg_R_1";else mgn="Mg_R_5";else mgn=
"Mg_B_5";break;case "1":if(ad.as==4)mgn="Mg_B_1";else if(ad.as==2)mgn="Mg_R_5";break}switch(ad.as){case 1:w=450,h=120;break;case 2:w=320,h=100;break;case 3:w=728,h=90;break;case 4:w=468,h=60;break;case 5:w=160,h=290;break;case 6:w=160,h=600;break;case 7:w=336,h=280;break;case 8:w=300,h=250;break}if(isExp)switch(ad.es){case "1":ew=430,eh=250;break;case "2":ew=700,eh=300;break;case "3":ew=900,eh=450;break;case "4":ew=248,eh=450;break}if(ad.p.indexOf("/")==0&&ad.p.indexOf("//")!=0)ad.p=sSC+"/"+sMD+ad.p;
if(ad.ei.indexOf("/")==0&&ad.ei.indexOf("//")!=0)ad.ei=sSC+"/"+sMD+ad.ei;if(isExp){rd+="<div id="+eid+' class="AdBox_Expand Ad_'+ew+"x"+eh+'" onmouseover="'+sAE+".ShowExpand('"+eid+"', "+ew+", "+eh+');" onmouseout="'+sAE+".HideExpand('"+eid+"');\""+(ew>=900?' onclick="'+sAE+".HideExpand('"+eid+"');\"":"")+">";if(ew>=900)rd+='<div class="Ad">';switch(ad.eat){case "0":break;case "1":rd+='<a href="'+ad.ct+'" target="_blank"><img src="'+ad.ei+'" border="0" /></a>';break;case "2":rd+=gSWF(ad.ei,"getlink="+
eURI(ad.ct),ew,eh);break;case "3":rd+=gIF(ad.ei+"?clickTAG="+eURI(ad.ct)+"&r="+eURI(eREF)+"&mid="+sMID,ew,eh);break}rd+="</div>";if(ew>=900)rd+="</div>"}rd+="<div id="+id+' class="AdItem Ad_'+w+"x"+h+(isc=="1"?" Float_L":"")+(i!=ml-1?" "+mgn:"")+(isExp?'" onmouseover="'+sAE+".ShowExpand('"+eid+"', "+ew+", "+eh+', 1);" onmouseout="'+sAE+".HideExpand('"+eid+"');\">":'">');rd+='<div class="AdBox">';switch(ad.at){case 1:if(csFID==2)rd+='<a href="'+ad.ct+'" target="_blank"><img src="'+ad.p+'" border="0" /></a>';
else if(csFID==1){var ifid=id+"_"+Math.random().toString().replace(".","");rd+=gIF(sSC+"/"+sMD+"/Apps/ifpic.min.html?img="+eURI(ad.p)+"&clickTAG="+eURI(ad.ct)+"&r="+eURI(eREF),w,h,ifid);window["oBALazyLoadId"].push(ifid)}break;case 2:rd+=gSWF(ad.p,"getlink="+eURI(ad.ct),w,h);break;case 3:var ifid=id+"_"+Math.random().toString().replace(".","");rd+=gIF(ad.p+"?clickTAG="+eURI(ad.ct)+"&r="+eURI(eREF)+"&mid="+sMID,w,h,ifid);window["oBALazyLoadId"].push(ifid);break;case 4:var unitId="";switch(ad.as){case 3:unitId=
"ad-6AAAABE734968D2F67D47D6BAE8992";break;case 6:unitId="ad-9A222727AD3E7BEDF446A3D6632DD74A";break;case 7:unitId="ad-7EEEE96244BA9B7027AD7A243BE99E";break;case 8:unitId="ad-D2333E9DE6B989460D349AD98DE466A4";break}rd+='<ins class="ucfad_async" style="display:inline-block;width:'+w+"px;height:"+h+'px" data-ad_unit_id="'+unitId+'" data-impr="'+ad.purl+'"></ins>';break;default:break}rd+='</div><div class="Tag"><a href="http://'+sWB+'" title="BloggerAds \u90e8\u843d\u683c\u884c\u92b7" target="_blank">BloggerAds \u90e8\u843d\u683c\u884c\u92b7</a></div></div>';
return rd}},gIF:function(s,w,h,id){var _t=this;with(_t){var v={sWT:w,sHT:h,"lz-src":s,frameborder:0,border:0,cellspacing:0,allowtransparency:true,scrolling:"no"};if(id!=null)v.id=id;return tB("iframe",gKV(v))}},gSWF:function(p,f,w,h){with(this){var sa="always",q="high",wm="opaque",ag="middle",pm=function(k,v){return tB("PARAM",gKV({NAME:k,VALUE:v}))};return tB("object",gKV({classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",codebase:"http://fpdownload.adobe.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0",
sWT:w,sHT:h,sALG:ag}),pm(sASA,sa)+pm("movie",p)+pm(sQLT,q)+pm(sWM,wm)+pm(sFVS,f)+tB("embed",gKV({src:p,sFVS:f,sWT:w,sHT:h,sWM:wm,sQLT:q,sALG:ag,sASA:sa,type:"application/x-shockwave-flash",pluginspage:"http://adobe.com/go/getflashplayer"})))}},gO:function(o){var l=o.offsetLeft||0,t=o.offsetTop||0;if(o.offsetParent)while(o==o.offsetParent){l+=o.offsetLeft||0;t+=o.offsetTop||0}else{l+=o.x;t+=o.y}return{l:l,t:t}},cTM:function(i){with(this){clearTimeout(oT[i]);oT[i]=null}},ShowExpand:function(i,ew,eh,
r){with(this){if(oT[i]!=null)cTM(i);var t,l,o=gBI(i),os=gO(gBI(i.replace("_E","")));if(sFID=="1"&&ew<900){var b=oD.body,T=oD.documentElement;var height=Math.max(b.scrollHeight,b.offsetHeight,T.clientHeight,T.scrollHeight,T.offsetHeight)-os.t;if(height<eh)o.style.marginTop=-eh+"px";else o.style.marginTop="120px"}else if(sFID=="2"&&ew<900){l=os.l-ew<0?160:-ew;if(ew==248&&eh==450)t=0;else t=(290-eh)/2;o.style.marginTop=t+"px";o.style.marginLeft=l+"px"}if(o.className.indexOf(" Ad_Show")<0)o.className+=
" Ad_Show";var f=o.querySelector("iframe");if(f!=undefined&&r==1)f.src=f.getAttribute("lz-src")}},HideExpand:function(i){with(this)oT[i]=setTimeout(function(){var o=gBI(i);o.className=o.className.replace(" Ad_Show","");var f=o.querySelector("iframe");if(f!=undefined)f.removeAttribute("src")},800)},detectLazyLoad:function(){with(this){var d=[];window["oBALazyLoadId"].forEach(function(l){var f=document.getElementById(l);var w=f.getAttribute("width")/2;var h=f.getAttribute("height")/2;if(BA_cV(f,w,h)){f.src=
f.getAttribute("lz-src");f.removeAttribute("lz-src");d.push(l)}});d.forEach(function(l){for(var i=window["oBALazyLoadId"].length-1;i>=0;i--)if(window["oBALazyLoadId"][i]===l){window["oBALazyLoadId"].splice(i,1);break}})}}};
var BA_cV=function(elm,w,h){h=h||0;w=w||0;var r=elm.getBoundingClientRect();var vH=Math.max(document.documentElement.clientHeight,window.innerHeight);var vW=Math.max(document.documentElement.clientWidth,window.innerWidth);var above=r.bottom-h<0;var below=r.top-vH+h>=0;var left=r.left>w-w*2&&r.left+w<vW;return!above&&!below&&left};