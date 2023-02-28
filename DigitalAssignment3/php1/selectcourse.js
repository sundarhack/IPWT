var xmlHttp
function sendCollege(str)
{
    xmlHttp=GetXmlHttpObject()
    if (xmlHttp==null)
    {
        alert("Browser does not support HTTP Request")
        return
    }
    var url="getcourse.php"
    url=url+"?q="+str;
    xmlHttp.onreadystatechange=stateChanged
    xmlHttp.open("GET",url,true)
    xmlHttp.send(null)
}
function stateChanged()
{
    if (xmlHttp.readyState==4||xmlHttp.readyState=="complete")
    {
        document.getElementById("a1").innerHTML=xmlHttp.responseText
    }
}
function GetXmlHttpObject()
{
	var xmlHttp=null;
    xmlHttp=new XMLHttpRequest();
	return xmlHttp;
}
