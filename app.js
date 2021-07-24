
let cs= {target: 'can'};
let confetti = new ConfettiGenerator(cs);
confetti.render();
gsap.from("#bottom", {display: "none",duration: 1,delay:.5, x:200});
gsap.to("#bottom", {dipslay: "block" ,duration: 1, x:0});
gsap.from("#middle", {display: "none" ,duration: 1,delay: 1, y:-200});
gsap.to("#middle", {dipslay: "block" ,duration: 1, y:0});
gsap.from("#top", {display: "none",duration: 1,delay:1.5 , x:-200});
gsap.to("#top", {dipslay: "block" ,duration: 1, x:0});
gsap.from("#candle", {display: "none",duration: 1,delay:1.5 , y:-200});
gsap.to("#candle", {dipslay: "block" ,duration: 1, y:0});