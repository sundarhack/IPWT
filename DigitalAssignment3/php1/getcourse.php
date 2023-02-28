<?php
$q=$_GET["q"];$xmlDoc = new DOMDocument();
$xmlDoc->load("courses.xml");$x=$xmlDoc->getElementsByTagName('Title');
for ($i=0;$i<=$x->length-1;$i++)
{
    if ($x->item($i)->nodeType==1)
    {
        if ($x->item($i)->childNodes->item(0)->nodeValue == $q)
		{ 
			$y=($x->item($i)->parentNode);
		}
    }
}
$course=($y->childNodes);for ($i=0;$i<$course->length;$i++)
{ 
	//Process only element nodes
	if ($course->item($i)->nodeType==1)
	{ 
		echo($course->item($i)->nodeName);
		echo(": ");
		echo($course->item($i)->childNodes->item(0)->nodeValue);
		echo("<br />");
	} 
}
?>