var b = document.querySelector("#cursor-b")
var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    /*crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"*/
    b.style.left = dets.x - 150 +"px"
    b.style.top = dets.y - 150 +"px"

})
// Function to get viewport height for dynamic adjustments
const getViewportHeight = () => window.innerHeight || document.documentElement.clientHeight;

gsap.to("#nav", {
  backgroundColor: "#E8DAEF",
  height: "calc(40vh + 60px)", // Adjust height based on viewport height
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -10%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top 80%", // Adjust end position based on viewport height
    scrub: 2,
  },
});

// Event listener to update animations on viewport resize
window.addEventListener("resize", () => {
  const viewportHeight = getViewportHeight();
  // Update height of #nav based on viewport height
  gsap.set("#nav", { height: `calc(${0.4 * viewportHeight}px + 60px)` });
  // Adjust end position of #main's scrollTrigger based on viewport height
  gsap.set("#main .scrollTrigger", { end: `top ${0.8 * viewportHeight}%` });
});
