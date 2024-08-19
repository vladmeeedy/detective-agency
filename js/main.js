function initCufon() {
  Cufon.replace(
    "#conteiner div.top-big ul li a,#conteiner div.last-bottom a.andmore,#conteiner div.block-middle div.all strong,#conteiner div.block-small div.all strong",
    { fontFamily: "mr", hover: true }
  );
  Cufon.replace(
    "#conteiner div.top-big a.button1,#conteiner div.top-big a.button2,#conteiner div.top-big a.button3,#conteiner div.block-small div.all span,#conteiner div.block-middle div.all span",
    { fontFamily: "mb", hover: true }
  );
}
function initTabs() {
  $("ul.tabs li").click(function () {
    var thisClass = this.className.slice(0, 2);
    $("div.t1").hide();
    $("div.t2").hide();
    $("div.t3").hide();
    $("div.t4").hide();
    $("div.t5").hide();
    $("div." + thisClass).show();
    $("ul.tabs li").removeClass("tab-current");
    $(this).addClass("tab-current");
    return false;
  });
  $("li.t1").click();
  $("ul.tab li").click(function () {
    var thisClass = this.className.slice(0, 2);
    $("div.s1").hide();
    $("div.s2").hide();
    $("div.s3").hide();
    $("div.s4").hide();
    $("div.s5").hide();
    $("div.s6").hide();
    $("div.s7").hide();
    $("div.s8").hide();
    $("div.s9").hide();
    $("div.a1").hide();
    $("div." + thisClass).show();
    $("ul.tab li").removeClass("tab-current");
    $(this).addClass("tab-current");
    return false;
  });
  $("li.s1").click();
}
