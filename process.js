
/*set of registers*/
var r0,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,sp,lr,pc;
/*put data to data memory*/
var data_array = ["","","",""];
var label_array = ["","","",""];
var address_array = ["00","01","02","03"];

	
function put_data(){
	var data_id = ["d00","d01","d02","d03"];
	var label_id = ["n00","n01","n02","n03"];
	
	for (i=0;i<4;i++){
		if (data_array[i]){
			document.getElementById(data_id[i]).innerHTML=data_array[i];
			document.getElementById(label_id[i]).innerHTML=label_array[i];
		}
	}
}
/*--------------------------------------------------------------------------------------------------------------*/
/*function to assign values to registers in html*/
function put_vals(dest_reg,val_ans){
	if (typeof(val_ans) != String ){
		val_ans = val_ans.toString();
	}
	if (val_ans.indexOf("#") < 0) {
		var val = "#"+val_ans;
		val_ans = val;
	}
	if (dest_reg.indexOf("r0") > -1) { document.getElementById('r0').innerHTML=val_ans; r0 = val_ans;}
	else if (dest_reg.indexOf("r1") > -1) { document.getElementById('r1').innerHTML=val_ans; r1 = val_ans;}
	else if (dest_reg.indexOf("r2") > -1) { document.getElementById('r2').innerHTML=val_ans; r2 = val_ans;}
	else if (dest_reg.indexOf("r3") > -1) { document.getElementById('r3').innerHTML=val_ans; r3 = val_ans;}
	else if (dest_reg.indexOf("r4") > -1) { document.getElementById('r4').innerHTML=val_ans; r4 = val_ans;}
	else if (dest_reg.indexOf("r5") > -1) { document.getElementById('r5').innerHTML=val_ans; r5 = val_ans;}
	else if (dest_reg.indexOf("r6") > -1) { document.getElementById('r6').innerHTML=val_ans; r6 = val_ans;}
	else if (dest_reg.indexOf("r7") > -1) { document.getElementById('r7').innerHTML=val_ans; r7 = val_ans;}
	else if (dest_reg.indexOf("r8") > -1) { document.getElementById('r8').innerHTML=val_ans; r8 = val_ans;}
	else if (dest_reg.indexOf("r9") > -1) { document.getElementById('r9').innerHTML=val_ans; r9 = val_ans;}
	else if (dest_reg.indexOf("r10") > -1) { document.getElementById('r10').innerHTML=val_ans; r10 = val_ans;}
	else if (dest_reg.indexOf("r11") > -1) { document.getElementById('r11').innerHTML=val_ans; r11 = val_ans;}
	else if (dest_reg.indexOf("r12") > -1) { document.getElementById('r12').innerHTML=val_ans; r12 = val_ans;}
	else if (dest_reg.indexOf("sp") > -1) { document.getElementById('sp').innerHTML=val_ans; sp = val_ans;}
	else if (dest_reg.indexOf("lr") > -1) { document.getElementById('lr').innerHTML=val_ans; lr = val_ans;}
	else if (dest_reg.indexOf("pc") > -1) { document.getElementById('pc').innerHTML=val_ans; pc = val_ans;}
}
/*--------------------------------------------------------------------------------------------------------------*/

/*function to assign values to a variable*/
function get_val(src1_reg){
	
	var val1;
		if (src1_reg.indexOf("r0") > -1) val1 = r0;
	else if (src1_reg.indexOf("r1") > -1) val1 = r1;
	else if (src1_reg.indexOf("r2") > -1) val1 = r2;
	else if (src1_reg.indexOf("r3") > -1) val1 = r3;
	else if (src1_reg.indexOf("r4") > -1) val1 = r4;
	else if (src1_reg.indexOf("r5") > -1) val1 = r5;
	else if (src1_reg.indexOf("r6") > -1) val1 = r6;
	else if (src1_reg.indexOf("r7") > -1) val1 = r7;
	else if (src1_reg.indexOf("r8") > -1) val1 = r8;
	else if (src1_reg.indexOf("r9") > -1) val1 = r9;
	else if (src1_reg.indexOf("r10") > -1) val1 = r10;
	else if (src1_reg.indexOf("r11") > -1) val1 = r11;
	else if (src1_reg.indexOf("r12") > -1) val1 = r12;
	else if (src1_reg.indexOf("sp") > -1) val1 = sp;
	else if (src1_reg.indexOf("lr") > -1) val1 = lr;
	else if (src1_reg.indexOf("pc") > -1) val1 = pc;
	
	return val1;
}
/*--------------------------------------------------------------------------------------------------------------*/
/*function to split the line*/
function splittoreg (atr_arr){
	var str = atr_arr.trim();
	var regs_add = str.split(/[\s|,|cmp|mov|add|sub|beq|bne|b|ldr]+/);
	var return_reg  = new Object();
	var k=0;
	//alert(regs_add.length);
	for (j=0;j<regs_add.length;j++){
		if(regs_add[j]) {
			return_reg[k]=regs_add[j];
			k++;
		}
	}
	return return_reg; 
}
/*--------------------------------------------------------------------------------------------------------------*/

/*main function*/
function map_commands()
{	
	/*total executions*/
	var tot_instr = 0;
	
	reset_regs();
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
	
	handle_data(ttarr,no_of_all_lines);
	
	var no_of_lines = document.getElementById('line_number').value;//no. of lines to be executed
	
	if(!no_of_lines) {
		alert("Enter the number of lines");
		return;
	}
	else if(no_of_lines > no_of_all_lines) {
		alert("Number entered exceeds");
		return;
	}
	for (i=0;i<no_of_lines;i++){
		document.getElementById('pc').innerHTML=(i+1);
		document.getElementById('instructions').innerHTML=tot_instr;
		if ((ttarr[i].indexOf("mov") > -1)&(ttarr[i].indexOf(":") < 0)) {
			implement_mov(ttarr[i]);
			tot_instr++;
		}
		else if ((ttarr[i].indexOf("add") > -1)&(ttarr[i].indexOf(":") < 0)) {
			implement_add(ttarr[i]);
			tot_instr++;
		}
		else if ((ttarr[i].indexOf("sub") > -1)&(ttarr[i].indexOf(":") < 0)) {
			implement_sub(ttarr[i]);
			tot_instr++;
		}
		else if ((ttarr[i].indexOf("cmp") > -1)&(ttarr[i].indexOf(":") < 0)) {
			var condition = implement_cmp(ttarr[i]);
			tot_instr++;
			i++;
			var t =implement_conditional_branch(ttarr[i],condition,i);
			//alert("main: "+t);
			if(i!=t) {
				tot_instr++;
				i = t;
			}
			else {i = t}; 
		}
		else if (((ttarr[i].indexOf("b ") > -1)|(ttarr[i].indexOf("b	") > -1))&(ttarr[i].indexOf(":") < 0)) {
			implement_branch(ttarr[i]);
		}
		else if ((ttarr[i].indexOf("ldr") > -1)&(ttarr[i].indexOf(":") < 0)) {
			implement_load(ttarr[i]);
			tot_instr++;
		}
	}
	
	
	
	/*--------------------------------------------------------------------------------------------------------------*/
/*implements the mov command*/
function implement_mov(str){
	//alert("IN move");
	var reg_vals = splittoreg(str);
			
			var register = reg_vals[0];
			//alert("Register: "+register);
			var register_val = reg_vals[1];
			//alert("Value: "+register_val);
			if (register_val.indexOf("#") < 0){
				if (register_val.indexOf("r0") > -1) register_val = r0;
				else if (register_val.indexOf("r1") > -1) register_val = r1;
				else if (register_val.indexOf("r2") > -1) register_val = r2;
				else if (register_val.indexOf("r3") > -1) register_val = r3;
				else if (register_val.indexOf("r4") > -1) register_val = r4;
				else if (register_val.indexOf("r5") > -1) register_val = r5;
				else if (register_val.indexOf("r6") > -1) register_val = r6;
				else if (register_val.indexOf("r7") > -1) register_val = r7;
				else if (register_val.indexOf("r8") > -1) register_val = r8;
				else if (register_val.indexOf("r9") > -1) register_val = r9;
				else if (register_val.indexOf("r10") > -1) register_val = r10;
				else if (register_val.indexOf("r11") > -1) register_val = r11;
				else if (register_val.indexOf("r12") > -1) register_val = r12;
				else if (register_val.indexOf("sp") > -1) register_val = sp;
				else if (register_val.indexOf("lr") > -1) register_val = lr;
				else if (register_val.indexOf("pc") > -1) register_val = pc;
			}
			put_vals(register,register_val);
}
/*--------------------------------------------------------------------------------------------------------------*/
/*implements the add command*/
function implement_add(str){
	var regs = splittoreg(str);
	
	var dest_reg = regs[0];
	var src1_reg = regs[1];
	var src2_reg = regs[2];
	
	var temp = get_val(src1_reg);
	var val1 = drop_hash(temp);
	
	var val2;
	
	if (src2_reg.indexOf("#") > -1){
		val2 = drop_hash(src2_reg);
	}
	else {		
		var temp = get_val(src2_reg);
		val2 = drop_hash(temp);
	}
	var val_ans = val1 + val2;
	put_vals(dest_reg,val_ans);
}
/*--------------------------------------------------------------------------------------------------------------*/
/*implements the sub command*/
function implement_sub(str){
	var regs = splittoreg(str);
	
	var dest_reg = regs[0];
	var src1_reg = regs[1];
	var src2_reg = regs[2];
	
	var temp = get_val(src1_reg);
	var val1 = drop_hash(temp);
	
	var val2;
	
	if (src2_reg.indexOf("#") > -1){
		val2 = drop_hash(src2_reg);
	}
	else {		
		var temp = get_val(src2_reg);
		val2 = drop_hash(temp);
	}
	var val_ans = val1 - val2;
	put_vals(dest_reg,val_ans);
}
/*--------------------------------------------------------------------------------------------------------------*/
/*utiltiy functions*/
function drop_hash(str) { //eg:str = #45
	var num = str.split("#");
	var temp = Number(num[1]);
	return parseInt(temp);
}
/*--------------------------------------------------------------------------------------------------------------*/
function find_label(label_raw){
	//alert(label);
	var label = label_raw+":";
	//alert(label);
	for (i=0;i<ttarr.length;i++){
		if(ttarr[i].indexOf(label) > -1){
			 return(i);
		}
	}
	return -1;
}
/*--------------------------------------------------------------------------------------------------------------*/
/*implements the cmp command*/
function implement_cmp(str) {
	var regs_add = splittoreg(str);
	//var return_val;
	var val1, val2;
	
	var reg_1 = regs_add[0];
	var reg_2 = regs_add[1];
		
	if (reg_1.indexOf("#") < 0){
		var v1 = get_val(reg_1);
		val1 = drop_hash(v1);
	}
	else{
		val1 = drop_hash(reg_1);
	}
	
	if (reg_2.indexOf("#") < 0){
		var v2 = get_val(reg_2);
		val2 = drop_hash(v2);
	}
	else{
		val2 = drop_hash(reg_2);
	}
	if (val1>val2) return 1; 
	else if (val1==val2) return 0;
	else if (val1<val2) return -1;
}
/*--------------------------------------------------------------------------------------------------------------*/
/*implements the conditional branch commands*/
function implement_conditional_branch(str,condition,i) {
	var str1 = str.trim();
	var regs_add = str1.split(/[\s|,]+/);
	
	var command = regs_add[0];
	var label = regs_add[1];
	
	//alert ("Still in fun1");
	/*handling beq*/
	if ((command=="beq")&(condition == 0)){
		//alert("Enter fun2");
		var w = find_label(label);
		//alert("found label: "+w);
		////alert ("Still in fun2");
		return w;
	}
	/*handling bne*/
	else if ((command=="bgt")&(condition > 0)){
		//alert("Enter fun2");
		var w = find_label(label);
		//alert("found label: "+w);
		////alert ("Still in fun2");
		return w;
	}
	else if ((command=="blt")&(condition < 0)){
		//alert("Enter fun2");
		var w = find_label(label);
		//alert("found label: "+w);
		////alert ("Still in fun2");
		return w;
	}
	else {
		//alert("not found: "+i);
		return i;
	}
}
/*--------------------------------------------------------------------------------------------------------------*/
function implement_branch(str){
	var str1 = str.trim();
	var regs_add = str1.split(/[\s|,]+/);
	
	var command = regs_add[0];
	var label = regs_add[1];
	//alert("Command:---"+command+"---");
	//alert("Label:---"+label+"---");
	/*handling b*/
	if (command=="b"){
		//alert("Enter fun2");
		var w = find_label(label);
		alert("found label: "+w);
		////alert ("Still in fun2");
		return w;
	}
	/*handling bl
	else if ((command=="bl")&(condition > 0)){
		//alert("Enter fun2");
		var w = find_label(label);
		alert("found label: "+w);
		////alert ("Still in fun2");
		return w;
	}*/
}
/*--------------------------------------------------------------------------------------------------------------*/
/*implements load instruction*/
function implement_load(strng){
	var str = strng.trim();
	var regs = str.split(/[\s|,]+/);
		
	var dest_reg = regs[1];
	var mem_loc = regs[2];
	
	//alert("---"+dest_reg+"---");
	//alert("---"+mem_loc+"---");
	
	if(mem_loc.indexOf("=") > -1){
		mem_loc = mem_loc.substr(1);
		alert(mem_loc);
		var index_label = label_array.indexOf(mem_loc);
		var index_add = address_array[index_label];
		alert(index_add);
		document.getElementById(dest_reg).innerHTML=index_add;
	}
}
/*handles data memory*/
function handle_data(ttarr,total_lines){
	var i;
	var chck = 0;
	for (i=0;i<ttarr.length;i++){
		if (ttarr[i].indexOf(".data") > -1){
			chck = 1;
			break;
		}
	}
	if (chck==0) return;
	
	var k = i+1;
	var j = 0;
	while ((ttarr[k].indexOf(":") > -1)&(k<total_lines)){
		//alert(ttarr[k]);
		var label_index = ttarr[k].indexOf(":");
		var label = ttarr[k].substr(0,label_index);
		
		var indx = ttarr[k].indexOf(".");
		var substrs = ttarr[k].substr(indx);
		
		label_array[j] = label;
		data_array[j] = substrs;
		k++;
		j++;
	}
	put_data();
}	
/*--------------------------------------------------------------------------------------------------------------*/
}


/*--------------------------------------------------------------------------------------------------------------*/
/*Resets the registers*/
function reset_regs(){
	var regs = ["r0","r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","sp","lr","pc","d00","d01","d02","d03","n00","n01","n02","n03","instructions"];
	for (i=0;i<regs.length;i++){
		document.getElementById(regs[i]).innerHTML="-";
	}
}


