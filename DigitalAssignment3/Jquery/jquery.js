var addButton, stuid, stuname, dept, per, grade;

function addStu()
{
    var tr=$('<tr><td>' + stuid.val() +'</td><td>' + stuname.val()+'</td><td>'
     + dept.val()+'</td><td>'+  per.val() + '</td><td>' + grade.val() + '</td></tr>');
    var fn=stuname.val();
    var p=per.val();
    var g=grade.val();
    var s=stuid.val();
    var flag=true;
    if (fn.length>15)
    {
        alert("Name should not exceed 15 characters");
        flag=false;
    }
    if (p<0||p>100)
    {
        alert("Invalid percentage");
        flag=false;
    }
    var pn= /^[0-9]{2}[A-Z]{3}[0-9]{3,4}$/;
    if (pn.test(s))
    {

    }
    else
    {
        alert("Id is not valid");
        flag=false;
    }
    var reg1= /^[A-N]{1}$/;
    if (reg1.test(g))
    {

    }
    else
    {
        alert("Grade is not valid");
        flag=false;
    }
    if (flag==true)
    {
        $('#stu').append(tr);
    }
}

function evaluateChange()
{
    var disable = !stuid.val() || !stuname.val() || !dept.val() || !per.val() || !grade.val();
    addButton.attr('disabled',disable);
}
$(function()
{
    addButton=$('#add');
    stuid=$('#stuid');
    stuname=$('#stuname');
    dept=$('#dept');
    per=$('#per');
    grade=$('#grade');

    addButton.attr('disabled', true);
    stuid.change(evaluateChange);
    stuname.change(evaluateChange);
    dept.change(evaluateChange);
    per.change(evaluateChange);
    grade.change(evaluateChange);
    addButton.click(addStu);
}
);
function hide1()
{
    $('.stu').hide();
}
function show1()
{
    $('.stu').show();
}

