$(document).ready(function() {

$("appraiseRank").on('change keyup paste', function() {
   	

var appraiseRank = document.getElementById('appraiseRank').value;

var suMappraise = appraiseRank + appraiseMisc + intmod;
  $('#suMappraise').val(Math.floor(strMod));
});