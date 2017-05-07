/*Attributes*/
/*
$(document).ready(function() {
var xstrScore = 0;
var xstrMod = 0;
var xdexScore = 0;
var xdexMod = 0;
var xconScore = 0;
var xconMod = 0;
var xintScore = 0;
var xintMod = 0;
var xwisScore = 0;
var xwisMod = 0;
var xchaScore = 0;
var xchaMod = 0;
*/
/*skills*/

/*
var xbalanceMisc = Number('balanceRank');
var xbluffRank = Number('bluffRank');
var xbluffMisc = Number('bluffMisc');
var xclimbRank = Number('climbRank');
var xclimbMisc = Number('climbMisc');
var xconcentrationRank =
var xconcentrationMisc = 
var xcraft1Rank =
var xcraft1Misc =
var xcraft2Rank =
var xcraft2Misc =
var xcraft3Rank =
var xcraft3Misc =
var xdecipherscriptRank =
var xdecipherscriptMisc =
var xdiplomacyRank = 
var xdiplomacyMisc =
var xdisabledeviceRank =
var xdisabledeviceMisc =
var xdisguiseRank = 
var xdisguiseMisc =
var xescapeartistRank =
var xescapeartistMisc = 
var xforgeryRank =
var xforgeryMisc =
var xgatherinformationRank =
var xgatherinformationMisc = 
var xhandleanimalRank =
var xhandleanimalMisc =
var xhealRank =
var xhealMisc =
var xhideRank =
var xhideMisc =
var xintimidateRank =
var xintimidateMisc =
var xjumpRank =
var xjumpMisc =
var xknowledge1Rank =
var xknowledge1Misc =
var xknowledge2Rank =
var xknowledge2Misc =
var xknowledge3Rank =
var xknowledge3Misc =
var xknowledge4Rank =
var xknowledge4Misc =
var xknowledge5Rank =
var xknowledge5Misc =
var xlistenRank =
var xlistenMisc =
var xmovesilentlyRank =
var xmovesilentlyMisc =
var xopenlockRank =
var xopenlockMisc =
var xperform1Rank =
var xperform1Misc =
var xperform2Rank =
var xperform2Misc =
var xperform3Rank =
var xperform3Misc =
var xprofession1Rank =
var xprofession1Misc =
var xprofession2Rank =
var xprofession2Misc =
var xrideRank =
var xrideMisc =
var xsearchRank =
var xsearchMisc =
var xsensemotiveRank =
var xsensemotiveMisc =
var xsleightofhandRank =
var xsleightofhandMisc =
var xspellcraftRank =
var xspellcraftMisc  =
var xspotRank =
var xspotMisc  =
var xsurvivalRank =
var xsurvivalMisc  =
var xswimRank =
var xswimMisc  =
var xtumbleRank =
var xtumbleMisc  =
var xusemagicdeviceRank =
var xusemagicdeviceMisc =
var xuseropeRank =
var xuseropeMisc =
*/
$(document).ready(function() {
console.log('test');
/*ABILITYS MOD CALCULATIONS */
$("#strScore").on('change keyup paste', function() {
strScore = document.getElementById('strScore').value;

strMod = (strScore - 10) / 2;
$('#strMod').val(Math.floor(strMod));
});

$("#dexScore").on('change keyup paste', function() {
dexScore = document.getElementById('dexScore').value;

dexMod = (dexScore - 10) / 2;
  $('#dexMod').val(Math.floor(dexMod));
});

$("#conScore").on('change keyup paste', function() {
conScore = document.getElementById('conScore').value;

conMod = (conScore - 10) / 2;
  $('#conMod').val(Math.floor(conMod));
});

$("#intScore").on('change keyup paste', function() {
intScore = document.getElementById('intScore').value;

intMod = (intScore - 10) / 2;
  $('#intMod').val(Math.floor(intMod));
});

$("#wisScore").on('change keyup paste', function() {
wisScore = document.getElementById('wisScore').value;

wisMod = (wisScore - 10) / 2;
  $('#wisMod').val(Math.floor(wisMod));
});

$("#chaScore").on('change keyup paste', function() {

chaScore = document.getElementById('chaScore').value;

chaMod = (chaScore - 10) / 2;
  $('#chaMod').val(Math.floor(chaMod));

});

/*radioed abilitysMods*/

/*SCRAP
  
  $("#_strMod").on('change keyup paste', function(){
    strMod = document.getElementById('strMod').value;
    $('#_strMod').val(strMod);
  });

  $("#_conMod").on('change keyup paste', function(){
  conMod = document.getElementById('conMod').value;
  $('#_conMod').val(conMod);
  });

 $("#_dexMod").on('change keyup paste', function() {
    dexMod = document.getElementById('dexMod').value;
    $('#_dexMod').val(dexMod);
  });

  $("#_intMod").on('change keyup paste', function() {
    intMod = document.getElementById('intMod').value;
    $('#_intMod').val(intMod);
  });

    $("#_wisMod").on('change keyup paste', function() {
    wisMod = document.getElementById('wisMod').value;
    $('#_wisMod').val(wisMod);
  });

    $("#_chaMod").on('change keyup paste', function() {
    chaMod = document.getElementById('chaMod').value;
    $('#_chaMod').val(chaMod);
  });

*/

  $("#appraise_intMod").on('change keyup paste', function() {
    intMod = document.getElementById('intMod').value;
    $('#appraise_intMod').val(intMod);
  });

    $("#balance_dexMod").on('change keyup paste', function() {
    dexMod = document.getElementById('dexMod').value;
    $('#balance_dexMod').val(dexMod);
  });
  
  $("#bluff_chaMod").on('change keyup paste', function() {
    chaMod = document.getElementById('chaMod').value;
    $('#bluff_chaMod').val(chaMod);
  });

  $("#climb_strMod").on('change keyup paste', function(){
    strMod = document.getElementById('strMod').value;
    $('#climb_strMod').val(strMod);
  });
  
  $("#concentration_conMod").on('change keyup paste', function() {
    conMod = document.getElementById('conMod').value;
    $('#concentration_conMod').val('conMod');
  });
  
  $("#craft1_intMod").on('change keyup paste', function() {
    intMod = document.getElementById('intMod').value;
    $('#craft1_intMod').val('intMod');
  });

  $("#craft2_intMod").on('change keyup paste', function() {
    intMod = document.getElementById('intMod').value;
    $('#craft2_intMod').val('intMod');
  });

  $("#craft3_intMod").on('change keyup paste', function() {
    intMod = document.getElementById('intMod').value;
    $('#craft3_intMod').val('intMod');
  });

  $("#decipherscript_intMod").on('change keyup paste', function() {
    intMod = document.getElementById('intMod').value;
    $('#decipherscript_intMod').val('intMod');
  });
  
/*SUMS*/
var xappraiseRank = Number('appraiseRank');
var xappraiseMisc = Number('appraiseMisc');
var xbalanceRank = Number('balanceRank');

$("#appraiseRank").on('change keyup paste', function() {
    appraiseRank = document.getElementById('appraiseRank').value;
    appraiseSum = xappraiseRank + xappraiseMisc + intMod;
    $('#appraiseSum').val(Math.floor(appraiseSum));
  });

  $("#appraiseMisc").on('change keyup paste', function() {
    appraiseMisc = document.getElementById('appraiseMisc').value;
    appraiseSum = appraiseRank + appraiseMisc + intMod;
    $('#appraiseSum').val(Math.floor(appraiseSum));
  });
});
/*skill list*/






/*var xstrValue = document.getElementById('strScore').value;

if (strValue.length == 0) {
        alert('Please enter a real value in the text box!');
        return;


var xstrMod = (strScore - 10) / 2;
var xdexMod = (dexScore - 10) / 2;
var xconMod = (conScore - 10) / 2;
var xintMod = (intScore - 10) / 2;
var xwisMod = (wisScore - 10) / 2;
var xchaMod = (chaScore - 10) / 2;


});*/