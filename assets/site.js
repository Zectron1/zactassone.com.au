(function(){
var y=document.getElementById('y');if(y)y.textContent=new Date().getFullYear();
var head=document.querySelector('.site-head');
function onScroll(){if(head)head.classList.toggle('scrolled',window.scrollY>8)}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
var btn=document.querySelector('.menu-btn'),nav=document.getElementById('main-nav');
if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');btn.textContent=o?'Close':'Menu'});
nav.addEventListener('click',function(e){if(e.target.tagName==='A'&&nav.classList.contains('open')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.textContent='Menu'}})}
var links=document.querySelectorAll('#main-nav a[href^="/#"]');
if('IntersectionObserver' in window&&links.length){var map={};links.forEach(function(a){map[a.getAttribute('href').slice(2)]=a});
 var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.remove('active')});var a=map[e.target.id];if(a)a.classList.add('active')}})},{rootMargin:'-45% 0px -50% 0px'});
 Object.keys(map).forEach(function(id){var el=document.getElementById(id);if(el)so.observe(el)});}
var els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
 els.forEach(function(el){io.observe(el)});
}else{els.forEach(function(el){el.classList.add('in')})}
var cs=document.querySelectorAll('[data-count]');
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var el=e.target,to=parseFloat(el.dataset.count),fr=parseFloat(el.dataset.from||0),dec=parseInt(el.dataset.dec||0),t0=null;
  function step(t){if(!t0)t0=t;var p=Math.min((t-t0)/1200,1),v=fr+(to-fr)*(1-Math.pow(1-p,3));el.textContent=v.toFixed(dec);if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)})},{threshold:.6});
 cs.forEach(function(el){co.observe(el)});}
var forms=document.querySelectorAll('form[data-hs]');
forms.forEach(function(f){
 var started=Date.now();
 f.addEventListener('submit',function(ev){
  ev.preventDefault();
  var st=f.querySelector('.status'),b=f.querySelector('button');
  if(f.querySelector('[name=company_site]').value){st.textContent='Thanks, your message has been sent.';st.className='status ok';f.reset();return}
  if(Date.now()-started<2500){st.textContent='Please take a moment and try again.';st.className='status err';return}
  var email=f.email.value.trim(),msg=f.message.value.trim();
  if(!email||!msg){st.textContent='Please add your email and a message.';st.className='status err';return}
  b.disabled=true;st.textContent='Sending...';st.className='status';
  var body={submittedAt:Date.now(),fields:[
   {objectTypeId:'0-1',name:'firstname',value:f.firstname.value.trim()},
   {objectTypeId:'0-1',name:'lastname',value:f.lastname.value.trim()},
   {objectTypeId:'0-1',name:'email',value:email},
   {objectTypeId:'0-1',name:'message',value:msg}],
   context:{pageUri:location.href,pageName:document.title}};
  fetch('https://api-ap1.hsforms.com/submissions/v3/integration/submit/443280882/89b36fc0-e3d5-421a-a1e0-f503abd51d28',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})
  .then(function(r){if(!r.ok)throw new Error(r.status);st.textContent="Thanks! Your message is on its way and I'll get back to you soon.";st.className='status ok';f.reset()})
  .catch(function(){st.innerHTML='Sorry, that didn’t send. Please email <a href="mailto:zac@zactassone.com.au">zac@zactassone.com.au</a>.';st.className='status err'})
  .finally(function(){b.disabled=false});
 });
});
})();
