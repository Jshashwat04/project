      document.getElementById("demo1").addEventListener("click", myFunction1);

    function myFunction1() {
        document.getElementById("demo1").style.background = "#fc636b";
        document.getElementById("demo2").style.background = "#fff";
        document.getElementById("demo3").style.background = "#fff";
        document.getElementById("demo4").style.background = "#fff";
        document.getElementById("demoB").style.display = "none";
        document.getElementById("demoA").style.display = "block";
        document.getElementById("demoC").style.display = "none";
        document.getElementById("demoD").style.display = "none";
        document.getElementById("caret1").style.display = "inline";
        document.getElementById("caret2").style.display = "none";
        document.getElementById("caret3").style.display = "none";
        document.getElementById("caret4").style.display = "none";
    }



        document.getElementById("demo2").addEventListener("click", myFunction2);

    function myFunction2() {
        document.getElementById("demo2").style.background = "#fc636b";
        document.getElementById("demo1").style.background = "#fff";
        document.getElementById("demo3").style.background = "#fff";
        document.getElementById("demo4").style.background = "#fff";
        document.getElementById("demoB").style.display = "block";
        document.getElementById("demoA").style.display = "none";
        document.getElementById("demoC").style.display = "none";
        document.getElementById("demoD").style.display = "none";
        document.getElementById("caret2").style.display = "inline";
        document.getElementById("caret1").style.display = "none";
        document.getElementById("caret3").style.display = "none";
        document.getElementById("caret4").style.display = "none";
    }



    document.getElementById("demo3").addEventListener("click", myFunction3);

    function myFunction3() {
        document.getElementById("demo3").style.background = "#fc636b";
        document.getElementById("demo2").style.background = "#fff";
        document.getElementById("demo1").style.background = "#fff";
        document.getElementById("demo4").style.background = "#fff";
        document.getElementById("demoB").style.display = "none";
        document.getElementById("demoA").style.display = "none";
        document.getElementById("demoC").style.display = "block";
        document.getElementById("demoD").style.display = "none";
        document.getElementById("caret3").style.display = "inline";
        document.getElementById("caret2").style.display = "none";
        document.getElementById("caret1").style.display = "none";
        document.getElementById("caret4").style.display = "none";
    }




    document.getElementById("demo4").addEventListener("click", myFunction4);

    function myFunction4() {
        document.getElementById("demo4").style.background = "#fc636b";
        document.getElementById("demo2").style.background = "#fff";
        document.getElementById("demo3").style.background = "#fff";
        document.getElementById("demo1").style.background = "#fff";
        document.getElementById("demoB").style.display = "none";
        document.getElementById("demoA").style.display = "none";
        document.getElementById("demoC").style.display = "none";
        document.getElementById("demoD").style.display = "block";
        document.getElementById("caret4").style.display = "inline";
        document.getElementById("caret2").style.display = "none";
        document.getElementById("caret3").style.display = "none";
        document.getElementById("caret1").style.display = "none";
    }




    document.getElementById("mens").addEventListener("click", myFunction5);

    function myFunction5() {
        document.getElementById("menu1").style.display = "block";
        
    }

    document.querySelector("body").addEventListener("focusout", myFunction6);

    function myFunction6() {
        document.getElementById("menu1").style.display = "none";
        document.getElementById("menu2").style.display = "none";
        
    }

    document.getElementById("womens").addEventListener("click", myFunction8);

    function myFunction8() {
        document.getElementById("menu2").style.display = "block";
        
    }

    document.querySelector("body").addEventListener("focusout", myFunction7);

    function myFunction7() {
        document.getElementById("menu2").style.display = "none";
        
    }

    