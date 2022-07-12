$(document).ready(function () {
  $("#mycaousel").carousel({ interval: 1000 });
  $("#carouselButtons").click(function () {
    if ($("#carouselButtons").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carouselButtons").children("span").removeClass("fa-pause");
      $("#carouselButtons").children("span").addClass("fa-play");
    } else {
      $("#mycarousel").carousel("cycle");
      $("#carouselButtons").children("span").removeClass("fa-play");
      $("#carouselButtons").children("span").addClass("fa-pause");
    }
  });
});
/*
 * No longer required but keeping it anyways
 */
// function login() {
//   $("#loginModal").modal("toggle");
// }
// function reserve() {
//   alert("reservation called");
//   $("#reservationmodal").modal("toggle");
// }
