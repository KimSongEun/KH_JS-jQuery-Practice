window.onload = function(){
    // document.getElementById("c1").onkeyup = update;
    // document.getElementById("c2").onkeyup = update;
    // document.getElementById("c3").onkeyup = update;
    document.getElementById("c1").onblur = update;
    document.getElementById("c2").onblur = update;
    document.getElementById("c3").onblur = update;

    function update(){
        console.log("update진입");

        // var cEles = document.getElementsByClassName("c");
        // for (var e in cEles) {
        //     console.log(e) 
        // } // e는 인덱스가 나온다?

        var v1 = document.getElementById("c1").value;
        var v2 = document.getElementById("c2").value;
        var v3 = document.getElementById("c3").value;
        var p1 = 2500 * v1;
        var p2 = 3000 * v2;
        var p3 = 4500 * v3;

        document.getElementById("c1Price").value = p1;
        document.getElementById("c2Price").value = p2;
        document.getElementById("c3Price").value = p3;
        
        v1 = isNaN(v1)? 0 : v1*1;
        v2 = isNaN(v2)? 0 : v2*1;
        v3 = isNaN(v3)? 0 : v3*1;
        // v1 = typeof(v1)!=Number ? 0 : v1; // Number가 아니라 "2"이런식으로 들어간다. (String 형태)
        // v2 = typeof(v2)!=Number ? 0 : v2;
        // v3 = typeof(v3)!=Number ? 0 : v3;
        document.getElementById("cTotalCnt").value = v1+v2+v3;
        p1 = isNaN(p1)? 0 : p1;
        p2 = isNaN(p2)? 0 : p2;
        p3 = isNaN(p3)? 0 : p3;
        document.getElementById("cTotalPrice").value = p1+p2+p3;
    }
};