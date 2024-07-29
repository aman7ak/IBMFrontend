gsap.to("#c-img-para1", {
    x: -515,
    duration:0.5,
    rotate: 0,
    scrollTrigger: {
        trigger: "#abyss-creture",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 20%",
        scrub: 1,
    },
})
gsap.to("#c-img-para2", {
    x: -255,
    duration:0.5,
    rotate: 0,
    scrollTrigger: {
        trigger: "#abyss-creture",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 20%",
        scrub: 1,
    },
})
gsap.to("#c-img-para3", {
    x: 265,
    duration:0.5,
    rotate: 0,
    scrollTrigger: {
        trigger: "#abyss-creture",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 20%",
        scrub: 1,
    },
})
gsap.to("#c-img-para4", {
    x: 525,
    duration:0.5,
    rotate: 0,
    scrollTrigger: {
        trigger: "#abyss-creture",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 20%",
        scrub: 1,
    },
})
gsap.to("#c-img-para5", {
    x: 6,
    duration:0.5,
    rotate: 0,
    scrollTrigger: {
        trigger: "#abyss-creture",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 20%",
        scrub: 1,
    },
})

gsap.to("#shop", {
    transform: "translateX(-50%)",
    scrollTrigger: {
        scroller: "body",
        trigger: "#abyss-tshirt",
        // markers: true,
        start: "top 25%",
        end: "top -5%",
        scrub: 2,
    }
})

gsap.to("#line1",{
    height:"30vw",
    duration:0.5,
    scrollTrigger: {
        trigger: "#threats",
        scroller: "body",
        // markers: true,
        start: "top 25%",
        end: "top 0%",
        scrub: 2,
    },
})

gsap.to("#line2",{
    height:"18vw",
    duration:0.5,
    scrollTrigger: {
        trigger: "#mitigation",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 10%",
        scrub: 2,
    },
})