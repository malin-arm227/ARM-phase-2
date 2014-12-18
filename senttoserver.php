<?php
//function cmd_exec($cmd, &$stdout, &$stderr, $stdin)
function cmd_exec1($cmd, &$stdout, &$stderr)
{
    $outfile = tempnam(".", "cmd");
    $errfile = tempnam(".", "cmd");
    $descriptorspec = array(
        0 => array("pipe", "r"),
        1 => array("file", $outfile, "w"),
        2 => array("file", $errfile, "w")
    );
    $proc = proc_open($cmd, $descriptorspec, $pipes);
    
    if (!is_resource($proc)) return 255;
	
	//fwrite($pipes[0], $stdin);
	fclose($pipes[0]);

    $exit = proc_close($proc);
    $stdout = file($outfile);
    $stderr = file($errfile);

    unlink($outfile);
    unlink($errfile);
    return $exit;
}
?>

<?php
function cmd_exec2($cmd, &$stdout, &$stderr, $stdin)
//function cmd_exec1($cmd, &$stdout, &$stderr)
{
    $outfile = tempnam(".", "cmd");
    $errfile = tempnam(".", "cmd");
    $descriptorspec = array(
        0 => array("pipe", "r"),
        1 => array("file", $outfile, "w"),
        2 => array("file", $errfile, "w")
    );
    $proc = proc_open($cmd, $descriptorspec, $pipes);
    
    if (!is_resource($proc)) return 255;
	
	fwrite($pipes[0], $stdin);
	fclose($pipes[0]);

    $exit = proc_close($proc);
    $stdout = file($outfile);
    $stderr = file($errfile);

    unlink($outfile);
    unlink($errfile);
    return $exit;
}
?>

<?php

session_start();

$txt1 = ($_GET['in1']);//input text
$txt2 = ($_GET['in2']);//std in
$handle = fopen('armfile.s', 'w');
fwrite($handle, $txt1);

//echo $_POST['standin'];
$out1 = cmd_exec1('arm-linux-gnueabi-gcc -Wall -o armfile armfile.s',$sout1,$err1);

if (sizeof($err1) != 0){
	echo implode("\n",$err1);
}
else{
	//$inputargs = $_POST['standin'];
	
	$result= cmd_exec2("qemu-arm -L /usr/arm-linux-gnueabi armfile",$sout2,$err2,$txt2);
	
	if (sizeof($err2) != 0){
		echo implode("\n",$err2);
	}
	else{
		echo implode("\n",$sout2);
	}
}

shell_exec("rm -f armfile.s");
shell_exec("rm -f armfile");


?>
