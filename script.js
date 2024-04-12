// function locoScrollTrigger() {
//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);

//   // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//   });


//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();

// }
// locoScrollTrigger();
gsap.registerPlugin(ScrollTrigger);


function page1Animation() {
  var tl = gsap.timeline();
  var casa = document.querySelector("#casa");
  var obsidiana = document.querySelector("#obs");
  var jalisco = document.querySelector("#bottom #jal");
  var mexico = document.querySelector("#bottom #mex");
  // var logo = document.querySelector("#page1 .logoMain");
  var arrow = document.querySelector("#scroll-down-arrow");

  tl.from(casa, {
    y: -50,
    opacity: 0,
    duration: .5,
    delay: 0.2,
    stagger: 0.2
  })

  tl.from(obsidiana, {
    y: 50,
    opacity: 0,
    duration: .5,
    delay: 0.2,
    stagger: 0.2
  })

  tl.from(jalisco, {
    opacity: 0,
    duration: .5,
    delay: 0.2,
    stagger: 0.2
  })

  tl.from(mexico, {
    opacity: 0,
    duration: .5,
    delay: 0.2,
    stagger: 0.2
  })

  tl.from(arrow, {
    opacity: 0,
    duration: .5,
    delay: 0.2,
    stagger: 0.2
  })
}
page1Animation();

function page1Fade() {
  var page1 = document.querySelector("#page1");
  var fadeElems = document.querySelectorAll("#elems");

  fadeElems.forEach(function (element) {
    gsap.to(element, {
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      scrollTrigger: {
        trigger: element,
        scroller: "body",
        markers: false,
        start: "top 0",
        end: "bottom 20%",
        scrub: true,
      }
    })
  })
}
page1Fade();


function page2Animation() {
  var page2 = document.querySelector("#page2");
  var texts = document.querySelectorAll("#page2-top");
  var image = document.querySelector("#page2-img img");

  var tl = gsap.timeline();

  // Animate the page2 element upwards
  tl.to(page2, {
    y: -250,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: page2,
      scrub: true,
    }
  });

  // Animate the texts elements to go up as well
  texts.forEach(function (elem) {
    tl.to(elem, {
      y: -150,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: elem,
        scrub: true,
      }
    });
  });

  tl.to(image, {
    scale: 1.01,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: page2,
      scrub: true,
    }
  })
}
page2Animation();



function page3Animation() {
  var container = document.querySelector("#page3-img");
  var pageUp = document.querySelector("#page3-dets");
  var page3 = document.querySelector("#page3");
  var tl = gsap.timeline();

  tl.to(container, {
    y: 100,
    duration: 0.5,
    delay: 0.2,
    scrollTrigger: {
      trigger: container,
      scrub: true,
    }
  })

  tl.to(pageUp, {
    y: -200,
    duration: 0.5,
    delay: 0.2,
    scrollTrigger: {
      trigger: pageUp,
      scrub: true,
    }
  })
}
page3Animation();

function page3ClickAnimation() {
  var page3 = document.querySelector("#page3-dets");
  var contents = document.querySelectorAll(".page3-about .details");
  var texts = document.querySelectorAll(".about-text *");
  var links = document.querySelectorAll("#page3-center h1");
  var dot = document.querySelector("#page3-center #dot");
  var tl = gsap.timeline();
  var backgroundColors = ["#CFC7B5", "#87947B", "#6B382F"];
  var colors = ["#736D62", "#37402F", "#000000"];
  var dotPositions = ["calc(25% + 0.5vw)", "calc(50% + 0.5vw)", "calc(73.5% + 0.5vw)"];

  var activeStyle = {
    color: "black",
    opacity: 1
  };

  var inactiveStyle = {
    color: "gray",
    opacity: 0.7
  };

  // Initially set all links to inactive style
  links.forEach(function (link) {
    gsap.set(link, inactiveStyle);
  });

  links.forEach(function (elem, index) {
    elem.addEventListener("click", function () {
      // Hide all contents
      gsap.to(contents, {
        opacity: 0,
        duration: 0.5,
      });

      // Show the clicked content with animation
      gsap.to(contents[index], {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        color: colors[index],
      });

      // Set all links to inactive style
      links.forEach(function (link) {
        gsap.to(link, {
          color: inactiveStyle.color,
          opacity: inactiveStyle.opacity,
          duration: 0.1
        });
      });

      // Set clicked link to active style
      gsap.to(elem, {
        color: activeStyle.color,
        opacity: activeStyle.opacity,
        duration: 0.1
      });

      gsap.to(page3, {
        backgroundColor: backgroundColors[index],
        duration: 0.5,
      })

      texts.forEach(function (text) {
        gsap.to(text, {
          color: colors[index],
          duration: 0.5,
        })
      })

      gsap.to(dot, {
        left: dotPositions[index],
        backgroundColor: colors[index],
        duration: 0.5,
        ease: "power2.inOut",
      })
    });
  });
}
page3ClickAnimation();

// var page4 = document.querySelector("#page4");
// var page4Head = document.querySelectorAll("#page4-head *");
// var left = document.querySelector("#media-left");
// var center = document.querySelector("#media-center img");
// var video = document.querySelectorAll("#page4-media #video");
// var tl = gsap.timeline();

// page4Head.forEach(function(head){
//   gsap.from(head,{
//     opacity:0,
//     duration:1,
//     delay:0.5,
//     stagger: 0.2
//   })

//   tl.from(center,{
//     opacity:0,
//     delay:1
//   })
//   tl.from()
// })