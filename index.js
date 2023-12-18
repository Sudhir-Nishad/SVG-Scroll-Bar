var active=3;
var mncircle=document.querySelectorAll(".mncircle");
var sec=document.querySelectorAll(".second");
var smcircle=document.querySelectorAll(".smcircle");
gsap.to(mncircle[active-1],{
    opacity:0.8
})
gsap.to(sec[active-1],{
    opacity:1
})
gsap.to(smcircle[active-1],{
    opacity:1
})

mncircle.forEach(function(val,index){
    val.addEventListener("click",function(){
        gsap.to("#circle",{
            rotate:(3-(index+1))*10,
            ease:Expo.easeInOut,
            duration:1.2
        })
        greyout();
        gsap.to(this,{
            opacity:0.8
        })
        gsap.to(sec[index],{
            opacity:1,
            ease:Expo.easeInOut,
            duration:1.2
        })
        gsap.to(smcircle[index],{
            opacity:1,
            ease:Expo.easeInOut,
            duration:1.2
        })
    })
})
gsap.to("#circle",{
    rotate: 0,
    ease : Expo.easeInOut,
    duration:2
})
function greyout() {
    gsap.to(mncircle,{
        opacity: 0.2
    })
    gsap.to(sec,{
        opacity:0.3
    })
    gsap.to(smcircle,{
        opacity:0.3
    })
}