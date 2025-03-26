// // gsap.to("#one", {
// //   width: "100%",
// //   ease: Expo.easeInOut,
// //   duration: 2,
// // });
// document.querySelectorAll(".image-container").forEach(function (ele) {

// });
gsap.to(".image-container", {
  ease: Expo.easeInOut,
  width: "100%",
  duration: 4,
  stagger: 2,
});
gsap.to(".text h1", {
  //delay: 2,
  ease: Expo.easeInOut,
  duration: 4,
  stagger: 2,
  top: "-150%",
});
