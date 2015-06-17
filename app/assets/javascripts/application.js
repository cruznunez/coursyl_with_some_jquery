// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function disableButton() {
  var button = $(event.target);
  button.prop("disabled", "true");
  button.closest("form").submit();
}

function hideAndDelete() {
  var container = $(event.target).closest(".association.container");
  container.hide();
  container.find(".destroy").prop("checked", 1);
}

function hideLastRow() {
  $("div.row").last().prop("hidden", 1);
}

function showLastRow() {
  $("div.row").last().prop("hidden", 0);
}

function smoothScroll() {
  $('#nav a').on("click", function(){
    var navId = $(this).attr("href");
    $('body').animate({scrollTop: $(navId).offset().top}, 'slow');
    return false;
  });
}

$(smoothScroll);
