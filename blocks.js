function handle_mov(str){
	var register;
	var register_val;
			
	var reg_mov = str.split(" ");
	var reg_s1 = reg_mov[0].split("mov");
	//alert(reg_s1[1]);			
			
	register_val = reg_mov[1];
	var reg_s2 = reg_s1[1].split(",");
	register = reg_s2[0];
	
	return [register,register_val];
}
function map_commands()
{
	/*putting the text to an array*/
	var tt = editor.getValue();
	var ttarr = tt.split("\n");
	
	/*removing comments*/
	for (i=0;i<ttarr.length;i++){
		if (ttarr[i].indexOf("@") > -1) {
			var remove_at = ttarr[i].split("@");
			ttarr.splice(i,1,remove_at[0]);
		}
	}
	var no_of_all_lines = ttarr.length;
	/*block labels inserted to a hashmap*/
	var blocks = new Object();
	
	var i;
	
	for (i=0;i<ttarr.length;i++){
		if (ttarr[i].indexOf(":") > -1){
			blocks[ttarr[i]] = (i+1);//i is the line number
		}
	}
	
	
	/*sets of registers*/
	var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14;
	
	var no_of_lines = document.getElementById('line_number').value;//no. of lines to be executed
	if(!no_of_lines) {
		alert("Enter the number of lines");
		return;
	}
	else if(no_of_lines > no_of_all_lines) {
		alert("Number entered exceeds");
		return;
	}
	//alert("A3");
	for (i=0;i<no_of_lines;i++){
		//alert("A");
		
		if ((ttarr[i].indexOf("mov") > -1)&(ttarr[i].indexOf(":") < 0)) {	
			
			
			var reg_vals = handle_mov(ttarr[i]);
			
			var register = reg_vals[0];
			var register_val = reg_vals[1];
			if (register_val.indexOf("#") < 0){
				if (register_val.indexOf("r1") > -1) register_val = r1;
				else if (register_val.indexOf("r2") > -1) register_val = r2;
				else if (register_val.indexOf("r3") > -1) register_val = r3;
				else if (register_val.indexOf("r4") > -1) register_val = r4;
				else if (register_val.indexOf("r5") > -1) register_val = r5;
			}
			
			if (register.indexOf("r1") > -1) {
					document.getElementById('r1').innerHTML=register_val;
					r1 = register_val;
			}
			else if (register.indexOf("r2") > -1) {
					document.getElementById('r2').innerHTML=register_val;
					r2 = register_val;
			}
			else if (register.indexOf("r3") > -1) {
					document.getElementById('r3').innerHTML=register_val;
					r3 = register_val;
			}
			else if (register.indexOf("r4") > -1) {
					document.getElementById('r4').innerHTML=register_val;
					r4 = register_val;
			}
			else if (register.indexOf("r5") > -1) {
					document.getElementById('r5').innerHTML=register_val;
					r5 = register_val;
			}
			
			//alert(register_val+register);
		}
	}
}
	
