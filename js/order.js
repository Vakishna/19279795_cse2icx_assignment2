$("#itemAdder").click(function() {

    var n = $(".item").length;
    var newItem = n + 1;

    $('<div></div>').attr('id', 'item'+newItem).addClass('item').appendTo("#items");
    var itemLabel = "<label for=\"item" + newItem + "\">Item " + newItem + ": </label>";
    $("#item" + newItem).append(itemLabel);
    var itemList  = "<select id=\"item" + newItem + "\" name=\"item" + newItem + "\"><option id=\"eucalyptusCaesia\" value=\"eucalyptusCaesia\">Eucalyptus Caesia</option><option id=\"eucalyptusPauciflora\" value=\"eucalyptusPauciflora\">Eucalyptus Pauciflora</option><option id=\"corymbiaFicifolia\" value=\"corymbiaFicifolia\">Corymbia Ficifolia</option><option id=\"callistemonCitrinus\" value=\"callistemonCitrinus\">Callistemon Citrinus</option></select>";
    $("#item" + newItem).append(itemList);

});