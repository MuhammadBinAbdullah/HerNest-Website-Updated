
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navlinks');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const subject=encodeURIComponent('HerNest Solutions — Project Enquiry');const body=encodeURIComponent(
`Name: ${data.get('name')}\nBusiness: ${data.get('business')}\nEmail: ${data.get('email')}\nCountry: ${data.get('country')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('details')}`
);const status=document.querySelector('.form-status');status.textContent='Your email app will open with your enquiry ready to send to hello@hernestsolutions.com.';window.location.href=`mailto:hello@hernestsolutions.com?subject=${subject}&body=${body}`;});}
