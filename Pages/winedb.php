<?php

$host = 'localhost';
$port = '5432';
$server = $host . ',' . $port;
$database = 'Wine_App';
$user = 'postgres';
$password = 'georgia1';

$link = mssql_connect ($server, $user, $password);
if (!$link)
{
	die('ERROR: Could not connect: ' . mssql_get_last_message());
}
 
mssql_select_db($database);

$query = 'select * from wine_app';

$result = mssql_query($query);
if (!$result) 
{
	$message = 'ERROR: ' . mssql_get_last_message();
	return $message;
}
else
{
	$i = 0;
	echo '<html><body><table><tr>';
	while ($i < mssql_num_fields($result))
	{
		$meta = mssql_fetch_field($result, $i);
		echo '<td>' . $meta->name . '</td>';
		$i = $i + 1;
	}
	echo '</tr>';
	
	while ( ($row = mssql_fetch_row($result))) 
	{
		$count = count($row);
		$y = 0;
		echo '<tr>';
		while ($y < $count)
		{
			$c_row = current($row);
			echo '<td>' . $c_row . '</td>';
			next($row);
			$y = $y + 1;
		}
		echo '</tr>';
	}
	mssql_free_result($result);
	
	echo '</table></body></html>';
}
?>