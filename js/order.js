function Arrange() {
    var i = 1;   
    $('#items').children('div').each(function () {
        $(this).attr('id', 'item'+i+'Div');
        $(this).children('label').attr('for', "item"+i);
        $(this).children('label').text("Item " + i + ": ");
        $(this).children('button').attr('id', 'removeItem' + i);
        $(this).children('select').attr('id', "item"+i);
        $(this).children('select').attr('name', "item"+i);
        i++;
    });
}


$("#itemAdder").click(function() {
    var n = $(".item").length;
    var newItem = n + 1;

    $('<div></div>').attr('id', 'item'+newItem+'Div').addClass('item').appendTo("#items");
    var itemLabel = "<label for=\"item" + newItem + "\">Item " + newItem + ": </label>";
    $("#item"+newItem+'Div').append(itemLabel);

    var optEucalyptusCaesia = "<option id=\"eucalyptusCaesia\" value=\"eucalyptusCaesia\">Eucalyptus Caesia</option>";
    var optEucalytusPauciflora = "<option id=\"eucalyptusPauciflora\" value=\"eucalyptusPauciflora\">Eucalyptus Pauciflora</option>";
    var optCorymbiaFicifolia = "<option id=\"corymbiaFicifolia\" value=\"corymbiaFicifolia\">Corymbia Ficifolia</option>";
    var optCallistemonCitrinus = "<option id=\"callistemonCitrinus\" value=\"callistemonCitrinus\">Callistemon Citrinus</option>";
    var optHardenbergiaViolacea = "<option id=\"hardenbergiaViolacea\" value=\"hardenbergiaViolacea\">Hardenbergia Violacea</option>";
    var optPoaLabillardierei = "<option id=\"poaLabillardierei\" value=\"poaLabillardierei\">Poa Labillardierei</option>";
    var optAcaciaPycnantha = "<option id=\"acaciaPycnantha\" value=\"acaciaPycnantha\">Acacia Pycnantha</option>";
    var optSyzygiumSmithii = "<option id=\"syzygiumSmithii\" value=\"syzygiumSmithii\">Syzygium Smithii</option>";
    var optCorreaFederationBellXMannii = "<option id=\"correaFederationBellXMannii\" value=\"correaFederationBellXMannii\">Canberra Bells</option>";
    var optGrevilliaFirecracker = "<option id=\"grevilliaFirecracker\" value=\"grevilliaFirecracker\">Grevillia Firecracker</option>";
    var optGrevilliaRobusta = "<option id=\"grevilliaRobusta\" value=\"grevilliaRobusta\">Grevillia Robusta</option>";
    var optTelopeaSpeciosissima = "<option id=\"telopeaSpeciosissima\" value=\"telopeaSpeciosissima\">Telopea Speciosissima</option>"
    var optBoroniaSerrulata = "<option id=\"boroniaSerrulata\" value=\"boroniaSerrulata\">Boronia Serrulata</option>";
    var optAnigozanthosFlavidus = "<option id=\"anigozanthosFlavidus\" value=\"anigozanthosFlavidus\">Anigozanthos Flavidus</option>";
    var optAngophoraCostata = "<option id=\"angophoraCostata\" value=\"angophoraCostata\">Angophora Costata</option>";

    var itemList  = "<select id=\"item" + newItem + "\"name=\"item" + newItem + "\"></select>";

    $("#item"+newItem+'Div').append(itemList);
    $("#item" + newItem).append(optEucalyptusCaesia);
    $("#item" + newItem).append(optEucalytusPauciflora);
    $("#item" + newItem).append(optCorymbiaFicifolia);
    $("#item" + newItem).append(optCallistemonCitrinus);
    $("#item" + newItem).append(optHardenbergiaViolacea);
    $("#item" + newItem).append(optPoaLabillardierei);
    $("#item" + newItem).append(optAcaciaPycnantha);
    $("#item" + newItem).append(optSyzygiumSmithii);
    $("#item" + newItem).append(optCorreaFederationBellXMannii);
    $("#item" + newItem).append(optGrevilliaFirecracker);
    $("#item" + newItem).append(optGrevilliaRobusta);
    $("#item" + newItem).append(optTelopeaSpeciosissima);
    $("#item" + newItem).append(optBoroniaSerrulata);
    $("#item" + newItem).append(optAnigozanthosFlavidus);
    $("#item" + newItem).append(optAngophoraCostata);


    $("#item"+newItem+'Div').append("<button id=\"removeItem"+newItem + "\"" +  "class=\"removeItem\"" + " type=\"button\">Remove</button>");

    $("#removeItem"+newItem).on('click', function () {
        var par = $(this).parent().attr('id');
        $("#" + par).remove();
        Arrange();
    });
});


