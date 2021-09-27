$(function(){
    $(".c").blur(update);

    function update(){
        console.log("update 진입");

        var v1 = $("#c1").val();
        var v2 = $("#c2").val();
        var v3 = $("#c3").val();
        var p1 = 2500*v1;
        var p2 = 3000*v2;
        var p3 = 4500*v3;
        $("#c1Price").val(p1);
        $("#c2Price").val(p2);
        $("#c3Price").val(p3);

        v1 = isNaN(v1)? 0 : v1*1;
        v2 = isNaN(v2)? 0 : v2*1;
        v3 = isNaN(v3)? 0 : v3*1;
        $("#cTotalCnt").val(v1+v2+v3);
        p1 = isNaN(p1)? 0 : p1;
        p2 = isNaN(p2)? 0 : p2;
        p3 = isNaN(p3)? 0 : p3;
        $("#cTotalPrice").val(p1+p2+p3);
    }
});
