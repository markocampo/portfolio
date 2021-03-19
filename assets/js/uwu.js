
var once_per_session=1
var bool

function get_cookie(Name) {
    var search = Name + "="
    var returnvalue = "";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) { // if cookie exists
            offset += search.length
            // set index of beginning of value
            end = document.cookie.indexOf(";", offset);
            // set index of end of cookie value
            if (end == -1)
                end = document.cookie.length;
            returnvalue=unescape(document.cookie.substring(offset, end))
            }
    }
    return returnvalue;
}

function uwu(){
    var twice;
    var momo = "2499";
    twice = prompt('Enter pin to view page',' ');
    if(twice === momo){
        alert('Correct pin, click ok to enter');
        window.location="index.html";
        return true;
    }
    else {
        window.location="index.html";
        return false;
    }
}

function loadornot(){
    if (get_cookie('protect')===''){
        bool = uwu();
        if(bool === true)
            document.cookie="protect=yes";
    }
}

if (once_per_session===0)
    uwu()
else
    loadornot()