// stats.js r3 - http://github.com/mrdoob/stats.js
var Stats=function(){var h,f,i,e,g,b,j,d,c,a;h=0;f=1000;i=0;e=new Date().getTime();g=e;b=document.createElement("div");b.style.fontFamily="Helvetica, Arial, sans-serif";b.style.fontSize="9px";b.style.backgroundColor="#000020";b.style.opacity="0.9";b.style.width="80px";b.style.paddingTop="2px";j=document.createElement("div");j.style.color="#00ffff";j.style.marginLeft="3px";j.style.marginBottom="3px";j.innerHTML="<strong>FPS</strong>";b.appendChild(j);d=document.createElement("canvas");d.width=74;d.height=30;d.style.display="block";d.style.marginLeft="3px";d.style.marginBottom="3px";b.appendChild(d);c=d.getContext("2d");c.fillStyle="#101030";c.fillRect(0,0,d.width,d.height);a=c.getImageData(0,0,d.width,d.height);return{getDOMElement:function(){return b},update:function(){var l,k;e=new Date().getTime();h+=1;if(e>=g+1000){l=Math.round((h*1000)/(e-g));f=Math.min(f,l);i=Math.max(i,l);j.innerHTML="<strong>"+l+" FPS</strong> ("+f+"-"+i+")";a=c.getImageData(1,0,d.width-1,30);c.putImageData(a,0,0);c.fillStyle="#101030";c.fillRect(d.width-1,0,1,30);k=Math.floor(30-Math.min(30,(l/60)*30));c.fillStyle="#80ffff";c.fillRect(d.width-1,k,1,1);c.fillStyle="#00ffff";c.fillRect(d.width-1,k+1,1,30-k);g=e;h=0}}}};
