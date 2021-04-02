var pass;
var progress = document.getElementById("progres").value;
var validateonce = false;

function allow() {
    document.getElementById("text").type = "text";
    document.getElementById("not2").style.display = "block";
    document.getElementById("not1").style.display = "none";
    //console.log(document.getElementById("text").type);
}

function colour1() {
    document.getElementById("not1").style.color = "red";

}

function disallow() {
    document.getElementById("text").type = "password";
    document.getElementById("not2").style.display = "none";
    document.getElementById("not1").style.display = "block";
    //console.log(document.getElementById("text").type);
}

function colour2() {
    document.getElementById("not2").style.color = "green";

}

function noc() {
    document.getElementById("not1").style.color = "black";
    document.getElementById("not2").style.color = "black";
}



function validate() {
    if (!validateonce) {
        validateonce = true;
        var Upper = false;
        var Lower = false;
        var Digit = false;
        var Sym = false;
        pass = document.getElementById("text").value;
        console.log(typeof(pass));
        console.log(pass.length);
        if (pass.length <= 0) {
            document.getElementById("curr").style.color = "red";
            document.getElementById("invalid").innerText = " !Please Enter the Password";
            document.getElementById("len1").style.display = "inline";
            document.getElementById("invalidicon").style.display = "inline";
            document.getElementById("len1").style.color = "red";
            document.getElementById("upper1").style.display = "inline";
            document.getElementById("upper1").style.color = "red";
            document.getElementById("lower1").style.display = "inline";
            document.getElementById("lower1").style.color = "red";
            document.getElementById("digit1").style.display = "inline";
            document.getElementById("digit1").style.color = "red";
            document.getElementById("symbol1").style.display = "inline";
            document.getElementById("symbol1").style.color = "red";
            document.getElementById("showprogres").style.display = "block";
            setTimeout(function() {
                alert("Please enter the passowrd");
            }, 400)

        } else if (pass.length <= 7 || pass.length >= 50) {
            progress = progress + 3;
            console.log(progress);
            document.getElementById("invalidicon").style.display = "inline";
            document.getElementById("upper1").style.display = "inline";
            document.getElementById("upper1").style.color = "red";
            document.getElementById("lower1").style.display = "inline";
            document.getElementById("lower1").style.color = "red";
            document.getElementById("digit1").style.display = "inline";
            document.getElementById("digit1").style.color = "red";
            document.getElementById("symbol1").style.display = "inline";
            document.getElementById("symbol1").style.color = "red";
            document.getElementById("len2").style.display = "inline";
            document.getElementById("len2").style.color = "red";
            document.getElementById("lengthtext").style.textDecoration = "line-through";
            document.getElementById("invalid").innerText = "Sorry! Not a valid password! The Length of the password must've length 8-50";
            document.getElementById("showprogres").style.display = "block";
            document.getElementById("progres").value = progress;
            document.getElementById("curr").innerText = " " + progress + "%";
            document.getElementById("curr").style.color = "red";
        } else {
            progress = progress + 20;
            var i;
            var uppervisit = false;
            var lowervisit = false;
            var digitvisit = false;
            var symbolvisit = false;
            document.getElementById("len").style.display = "inline";
            document.getElementById("len").style.color = "green";
            for (i = 0; i < pass.length; i++) {
                var ch = pass.charAt(i);
                var ch1 = pass.charCodeAt(i);
                if ((ch1 >= 33 && ch1 <= 47) || (ch1 >= 58 && ch1 <= 64) || (ch1 >= 123 && ch1 <= 126)) {
                    Sym = true;
                    if (!symbolvisit) {
                        progress = progress + 20;
                        symbolvisit = true;
                    }
                    document.getElementById("symbol").style.display = "inline";
                    document.getElementById("symbol").style.color = "green";

                } else if (!isNaN(ch * 2)) {
                    if (!digitvisit) {
                        progress = progress + 20;
                        digitvisit = true;
                    }
                    Digit = true;
                    document.getElementById("digit").style.display = "inline";
                    document.getElementById("digit").style.color = "green";
                } else if (ch == ch.toUpperCase()) {
                    if (!uppervisit) {
                        progress = progress + 20;
                        uppervisit = true;
                    }
                    Upper = true;
                    document.getElementById("upper").style.display = "inline";
                    document.getElementById("upper").style.color = "green";

                } else if (ch == ch.toLowerCase()) {
                    if (!lowervisit) {
                        progress = progress + 20;
                        lowervisit = true;
                    }
                    Lower = true;
                    document.getElementById("lower").style.display = "inline";
                    document.getElementById("lower").style.color = "green";

                }
            }
            if (Sym && Upper && Lower && Digit) {
                document.getElementById("validicon").style.display = "inline";
                document.getElementById("valid").innerText = "Congratulations!! Your password is strong and valid!";

            } else {
                document.getElementById("invalidicon").style.display = "inline";
                document.getElementById("invalid").innerText = "Sorry!! Not a valid password!";
                if (Upper == false) {

                    document.getElementById("upper2").style.display = "inline";
                    document.getElementById("upper2").style.color = "red";
                    document.getElementById("uppertext").style.textDecoration = "line-through";
                }
                if (Lower == false) {

                    document.getElementById("lower2").style.display = "inline";
                    document.getElementById("lower2").style.color = "red";
                    document.getElementById("lowertext").style.textDecoration = "line-through";
                }
                if (Digit == false) {
                    document.getElementById("digit2").style.display = "inline";
                    document.getElementById("digit2").style.color = "red";
                    document.getElementById("digittext").style.textDecoration = "line-through";
                }
                if (Sym == false) {
                    document.getElementById("symbol2").style.display = "inline";
                    document.getElementById("symbol2").style.color = "red";
                    document.getElementById("symboltext").style.textDecoration = "line-through";
                }


            }
            console.log(progress);
            document.getElementById("showprogres").style.display = "block";
            document.getElementById("progres").value = progress;
            document.getElementById("curr").innerText = " " + progress + "%";
            if (progress <= 80) {
                document.getElementById("curr").style.color = "red";
            } else {
                document.getElementById("curr").style.color = "green";
            }
        }
    }
}

function dis() {
    progress = 0;
    validateonce = false;
    var a = document.getElementById("text");
    a.value = a.defaultValue;
    document.getElementById("valid").innerText = "";
    document.getElementById("validicon").style.display = "none";
    document.getElementById("invalidicon").style.display = "none";
    document.getElementById("invalid").innerText = "";
    document.getElementById("lower").style.display = "none";
    document.getElementById("upper").style.display = "none";
    document.getElementById("digit").style.display = "none";
    document.getElementById("symbol").style.display = "none";
    document.getElementById("len").style.display = "none";
    document.getElementById("lower1").style.display = "none";
    document.getElementById("upper1").style.display = "none";
    document.getElementById("digit1").style.display = "none";
    document.getElementById("symbol1").style.display = "none";
    document.getElementById("len1").style.display = "none";
    document.getElementById("lowertext").style.textDecoration = "none";
    document.getElementById("uppertext").style.textDecoration = "none";
    document.getElementById("digittext").style.textDecoration = "none";
    document.getElementById("symboltext").style.textDecoration = "none";
    document.getElementById("lengthtext").style.textDecoration = "none";
    document.getElementById("showprogres").style.display = "none";
    document.getElementById("len").style.display = "none";
    document.getElementById("lower2").style.display = "none";
    document.getElementById("upper2").style.display = "none";
    document.getElementById("digit2").style.display = "none";
    document.getElementById("symbol2").style.display = "none";
    document.getElementById("len2").style.display = "none";
    document.getElementById("progres").value = progress;
    document.getElementById("curr").innerText = " " + progress + "%";
}