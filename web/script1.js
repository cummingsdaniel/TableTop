/*Attributes*/
/*
$(document).ready(function() {
var strScore = 0;
var strMod = 0;
var dexScore = 0;
var dexMod = 0;
var conScore = 0;
var conMod = 0;
var intScore = 0;
var intMod = 0;
var wisScore = 0;
var wisMod = 0;
var chaScore = 0;
var chaMod = 0;
*/
/*skills*/
/*
var appraiseRank =0;
var appraiseMisc =0; 
var balanceRank  =0;
var balanceMisc  =0;
var bluffRank  =0;
var bluffMisc  =0;
var climbRank  =0;
var climbMisc  =0;
var concentrationRank =0;
var concentrationMisc =0;  
var craft1Rank =0;
var craft1Misc =0;
var craft2Rank =0;
var craft2Misc =0;
var craft3Rank =0;
var craft3Misc =0;
var decipherscriptRank =0;
var decipherscriptMisc =0;
var diplomacyRank =0;  
var diplomacyMisc =0;
var disabledeviceRank =0;
var disabledeviceMisc =0;
var disguiseRank =0;  
var disguiseMisc =0;
var escapeartistRank =0;
var escapeartistMisc =0;  
var forgeryRank =0;
var forgeryMisc =0;
var gatherinformationRank =0;
var gatherinformationMisc =0;  
var handleanimalRank =0;
var handleanimalMisc =0;
var healRank =0;  
var healMisc =0;
var hideRank =0;
var hideMisc =0;
var intimidateRank =0;
var intimidateMisc =0; 
var jumpRank =0;
var jumpMisc =0;
var knowledge1Rank =0;
var knowledge1Misc =0;
var knowledge2Rank =0;
var knowledge2Misc =0;
var knowledge3Rank =0;
var knowledge3Misc =0;
var knowledge4Rank =0;
var knowledge4Misc =0;
var knowledge5Rank =0;
var knowledge5Misc =0;
var listenRank =0;
var listenMisc =0;
var movesilentlyRank =0;
var movesilentlyMisc =0;
var openlockRank =0;  
var openlockMisc =0;
var perform1Rank =0;
var perform1Misc =0;
var perform2Rank =0;
var perform2Misc =0;
var perform3Rank =0;
var perform3Misc =0;
var profession1Rank =0;
var profession1Misc =0;
var profession2Rank =0;
var profession2Misc =0;
var rideRank =0;  
var rideMisc =0;  
var searchRank =0;
var searchMisc =0;  
var sensemotiveRank =0;
var sensemotiveMisc =0;  
var sleightofhandRank =0;
var sleightofhandMisc =0;
var spellcraftRank =0;
var spellcraftMisc =0;  
var spotRank =0;
var spotMisc =0;  
var survivalRank =0;
var survivalMisc =0;  
var swimRank =0;
var swimMisc =0;  
var tumbleRank =0;
var tumbleMisc =0;  
var usemagicdeviceRank =0;
var usemagicdeviceMisc =0;
var useropeRank =0;  
var useropeMisc =0;  
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
$("#appraiseRank").on('change keyup paste', function() {
    appraiseRank = document.getElementById('appraiseRank').value;
    appraiseSum = appraiseRank + appraiseMisc + intMod;
    $('#appraiseSum').val(Math.floor(appraiseSum));
  });

  $("#appraiseMisc").on('change keyup paste', function() {
    appraiseMisc = document.getElementById('appraiseMisc').value;
    appraiseSum = appraiseRank + appraiseMisc + intMod;
    $('#appraiseSum').val(Math.floor(appraiseSum));
  });
});
/*skill list*/






/*var strValue = document.getElementById('strScore').value;

if (strValue.length == 0) {
        alert('Please enter a real value in the text box!');
        return;


var strMod = (strScore - 10) / 2;
var dexMod = (dexScore - 10) / 2;
var conMod = (conScore - 10) / 2;
var intMod = (intScore - 10) / 2;
var wisMod = (wisScore - 10) / 2;
var chaMod = (chaScore - 10) / 2;


});*/