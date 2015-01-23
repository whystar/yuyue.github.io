<script type="text/javascript">
var caution = false 
function caculate(){
    function setcookie(name, value, expires, path, domain, secure) { 

        var curcookie = name + "=" + escape(value) + 
        ((expires) ? "; expires=" + expires.togmtstring() : "") + 
        ((path) ? "; path=" + path : "") + 
        ((domain) ? "; domain=" + domain : "") + 
        ((secure) ? "; secure" : "") 
        if (!caution || (name + "=" + escape(value)).length <= 4000) 
        document.cookie = curcookie 
        else 
        if (confirm("cookie exceeds 4kb and will be cut!")) 
        document.cookie = curcookie 
        } 
        function getcookie(name) { 
        var prefix = name + "=" 
        var cookiestartindex = document.cookie.indexof(prefix) 
        if (cookiestartindex == -1) 
        return null 
        var cookieendindex = document.cookie.indexof(";", cookiestartindex + prefix.length) 
        if (cookieendindex == -1) 
        cookieendindex = document.cookie.length 
        return unescape(document.cookie.substring(cookiestartindex + prefix.length, cookieendindex)) 
        } 
        function deletecookie(name, path, domain) { 
        if (getcookie(name)) { 
        document.cookie = name + "=" + 
        ((path) ? "; path=" + path : "") + 
        ((domain) ? "; domain=" + domain : "") + 
        "; expires=thu, 01-jan-70 00:00:01 gmt" 
        } 
        } 
        function fixdate(date) { 
        var base = new date(0) 
        var skew = base.gettime() 
        if (skew > 0) 
        date.settime(date.gettime() - skew) 
        } 
        var now = new date() 
        fixdate(now) 
        now.settime(now.gettime() + 365 * 24 * 60 * 60 * 1000) 
        var visits = getcookie("counter") 
        if (!visits) 
        visits = 1 
        else 
        visits = parseint(visits) + 1 
        setcookie("counter", visits, now) 
        document.write("欢迎光临，这是您第 <font color=red>" + visits + "</font> 次访问网站！") 
return visits
}
</script> 
