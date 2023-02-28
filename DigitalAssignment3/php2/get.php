<?php
$servername='localhost';
$username='root';
$password='';
$dbname = "demo";
$conn=mysqli_connect($servername,$username,$password,"$dbname");
if(!$conn){
   die('Could not Connect My Sql:' .mysql_error());
}
?>
<html>
    <head>
        <title>
            Bookingid
        </title>
    </head>
    <body>    
<?php
if(count($_POST)>0)
{
    $result= mysqli_query($conn,"SELECT * FROM consumer where BookingId='". $_POST['bid'] . "'");
    if ($result->num_rows!=0)
    {
        $i=0;
        while($row=mysqli_fetch_array($result))
        {
            ?>
            <table>
            <tr>
                <th>Consumerid</th>
                <th>ConsumerName</th>
                <th>ConnectionType</th>
                <th>Bookingid</th>
                <th>DeliveryStatus</th>
            </tr>
            <tr>
                <td><?php echo $row["Consumerid"]; ?></td>
                <td><?php echo $row["ConsumerName"]; ?></td>
                <td><?php echo $row["ConnectionType"]; ?></td>
                <td><?php echo $row["BookingId"]; ?></td>
                <td><?php echo $row["DeliveryStatus"]; ?></td>
            </tr>
            </table>
            <?php
        }
    }
    else
    {
        echo ("NO bookid exists");
    }
}
?>
</body>
</html>