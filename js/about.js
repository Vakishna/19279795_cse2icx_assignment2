var jarrod = false;
var daisy = false;
var ivy = false;
var ren = false;

$("#jarrod").click(function () {
    $("#daisyDesc").hide();
    $("#ivyDesc").hide();
    $("#renDesc").hide();
    daisy = false;
    ivy = false;
    ren = false;

    if (jarrod == false) {
        $("#jarrodDesc").show();        
        jarrod = true;
    } else {
        $("#jarrodDesc").hide();
        jarrod = false;
    }   
});

$('#daisy').click(function () {
    $("#jarrodDesc").hide();
    $("#ivyDesc").hide();
    $("#renDesc").hide();
    jarrod = false;
    ivy = false;
    ren = false;

    if (daisy == false) {
        $("#daisyDesc").show();
        daisy = true;
    } else {
        $("#daisyDesc").hide();
        daisy = false;
    }   
});

$("#ivy").click(function () {
    $("#jarrodDesc").hide();
    $("#daisyDesc").hide();
    $("#renDesc").hide();
    jarrod = false;
    daisy = false;
    ren = false;
    
    if (ivy == false) {
        $("#ivyDesc").show();
        ivy = true;
    } else {
        $("#ivyDesc").hide();
        ivy = false;
    }
});

$("#ren").click(function () {
    $("#jarrodDesc").hide();
    $("#daisyDesc").hide();    
    $("#ivyDesc").hide(); 
    jarrod = false;
    daisy = false;
    ivy = false;
    
    if (ren == false) {
        $("#renDesc").show();
        ren = true;
    } else {
        $("#renDesc").hide();
        ren = false;
    }
});


