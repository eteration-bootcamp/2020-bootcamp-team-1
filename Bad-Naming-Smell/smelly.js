function val(v,c,a,b,e,l,bl) 
{
let r=true;
if(null===v||''===v){
r=false;
}
if(l<a||l>b){
r=false;
}
var d=c.split(',')
if(v.includes(bl)){
r=false;
}
if(null!==e){
 r=false;
}
if(d[0].includes("uc")){
r = v.match(/^(?=.*[A-Z]).+$/);
}
if(d[0].includes("lc")){
r= v.match(/^(?=.*[a-z]).+$/);
}
if(d[0].includes("nm")){
r= v.match(/^(?=.*\d).+$/);    
}
if(d[0].includes("ch")){
r= v.match(/^[0-9a-z]+$/)
}
if(bl.some(w=>v.includes(w))){
r=false;
}
return r;
}