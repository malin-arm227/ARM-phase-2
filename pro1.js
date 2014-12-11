/*set of registers and stack space*/
var r0,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,sp,lr,pc,
	i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15;
	

r0 = "err",r1 = "err",r2 = "err",r3 = "err",r4 = "err",r5 = "err",r6 = "err",r7 = "err",r8 = "err",r9 = "err",r10 = "err",r11 = "err",
r12 = "err",i0 = "err",i1 = "err",i2 = "err",i3 = "err",i4 = "err",i5 = "err",i6 = "err",i7 = "err",
i8 = "err",i9 = "err",i10 = "err",i11 = "err",i12 = "err",i13 = "err",i14 = "err",i15 = "err";

/*starting stack pointer*/

put_vals("sp",15);
put_vals("lr",100);

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
function put_vals(dest_reg,val_ans_given){//val_ans_given is a number
	
	var val_ans;
	if (document.getElementById('format_hex').checked){
		val_ans = val_ans_given.toString(16);
	}
	else if (document.getElementById('format_bin').checked){
		val_ans = val_ans_given.toString(2);
	}
	else {
		val_ans = val_ans_given.toString();
	}
	alert(dest_reg);
	if (dest_reg.indexOf("r0") > -1) { document.getElementById('r0').innerHTML=val_ans; r0 = val_ans_given;}
	else if (dest_reg.indexOf("r11") > -1) { document.getElementById('r11').innerHTML=val_ans; r11 = val_ans_given;}
	else if (dest_reg.indexOf("r12") > -1) { document.getElementById('r12').innerHTML=val_ans; r12 = val_ans_given;}
	else if (dest_reg.indexOf("r3") > -1) { document.getElementById('r3').innerHTML=val_ans; r3 = val_ans_given;}
	else if (dest_reg.indexOf("r4") > -1) { document.getElementById('r4').innerHTML=val_ans; r4 = val_ans_given;}
	else if (dest_reg.indexOf("r5") > -1) { document.getElementById('r5').innerHTML=val_ans; r5 = val_ans_given;}
	else if (dest_reg.indexOf("r6") > -1) { document.getElementById('r6').innerHTML=val_ans; r6 = val_ans_given;}
	else if (dest_reg.indexOf("r7") > -1) { document.getElementById('r7').innerHTML=val_ans; r7 = val_ans_given;}
	else if (dest_reg.indexOf("r8") > -1) { document.getElementById('r8').innerHTML=val_ans; r8 = val_ans_given;}
	else if (dest_reg.indexOf("r9") > -1) { document.getElementById('r9').innerHTML=val_ans; r9 = val_ans_given;}
	else if (dest_reg.indexOf("r10") > -1) { document.getElementById('r10').innerHTML=val_ans; r10 = val_ans_given;}
	else if (dest_reg.indexOf("r1") > -1) { document.getElementById('r11').innerHTML=val_ans; r11 = val_ans_given;}
	else if (dest_reg.indexOf("r2") > -1) { document.getElementById('r12').innerHTML=val_ans; r12 = val_ans_given;}
	else if (dest_reg.indexOf("sp") > -1) { document.getElementById('sp').innerHTML=val_ans; sp = val_ans_given; }
	else if (dest_reg.indexOf("lr") > -1) { document.getElementById('lr').innerHTML=val_ans; lr = val_ans_given;}
	else if (dest_reg.indexOf("pc") > -1) { document.getElementById('pc').innerHTML=val_ans; pc = val_ans_given;}
	
	else if (dest_reg.indexOf("i0") > -1) { document.getElementById('i0').innerHTML=val_ans; i0 = val_ans_given;}
	else if (dest_reg.indexOf("i11") > -1) { document.getElementById('i11').innerHTML=val_ans; i1 = val_ans_given;}
	else if (dest_reg.indexOf("i2") > -1) { document.getElementById('i2').innerHTML=val_ans; i2 = val_ans_given;}
	else if (dest_reg.indexOf("i3") > -1) { document.getElementById('i3').innerHTML=val_ans; i3 = val_ans_given;}
	else if (dest_reg.indexOf("i15") > -1) { document.getElementById('i15').innerHTML=val_ans; i11 = val_ans_given;alert("i11"+i11);}
	else if (dest_reg.indexOf("i1") > -1) { document.getElementById('i1').innerHTML=val_ans; i15 = val_ans_given;alert("i15"+i15);}
}
/*--------------------------------------------------------------------------------------------------------------*/

/*function to assign values to a variable*/
function get_val(src_reg){//returns an integer
	var val1;
	
	if (src_reg.indexOf("r0") > -1) {val1 = r0;}
	else if (src_reg.indexOf("r1") > -1) {val1 = r1;}
	else if (src_reg.indexOf("r2") > -1) {val1 = r2;}
	else if (src_reg.indexOf("r3") > -1) {val1 = r3;}
	else if (src_reg.indexOf("r4") > -1) {val1 = r4;}
	else if (src_reg.indexOf("r5") > -1) {val1 = r5;}
	else if (src_reg.indexOf("r6") > -1) {val1 = r6;}
	else if (src_reg.indexOf("r7") > -1) {val1 = r7;}
	else if (src_reg.indexOf("r8") > -1) {val1 = r8;}
	else if (src_reg.indexOf("r9") > -1) {val1 = r9;}
	else if (src_reg.indexOf("r10") > -1) {val1 = r10;}
	else if (src_reg.indexOf("r11") > -1) {val1 = r11;}
	else if (src_reg.indexOf("r12") > -1) {val1 = r12;}
	else if (src_reg.indexOf("sp") > -1) {val1 = sp;}
	else if (src_reg.indexOf("lr") > -1) {val1 = lr;}
	else if (src_reg.indexOf("pc") > -1) {val1 = pc;}
	
	else if (src_reg.indexOf("i0") > -1) {val1 = i0;}
	else if (src_reg.indexOf("i1") > -1) {val1 = i1;}
	else if (src_reg.indexOf("i2") > -1) {val1 = i2;}
	else if (src_reg.indexOf("i3") > -1) {val1 = i3;}
	else if (src_reg.indexOf("i4") > -1) {val1 = i4;}
	else if (src_reg.indexOf("i5") > -1) {val1 = i5;}
	else if (src_reg.indexOf("i6") > -1) {val1 = i6;}
	else if (src_reg.indexOf("i7") > -1) {val1 = i7;}
	else if (src_reg.indexOf("i8") > -1) {val1 = i8;}
	else if (src_reg.indexOf("i9") > -1) {val1 = i9;}
	else if (src_reg.indexOf("i10") > -1) {val1 = i10;}
	else if (src_reg.indexOf("i11") > -1) {val1 = i11;}
	else if (src_reg.indexOf("i12") > -1) {val1 = i12;}
	else if (src_reg.indexOf("i13") > -1) {val1 = i13;}
	else if (src_reg.indexOf("i14") > -1) {val1 = i14;}
	else if (src_reg.indexOf("i15") > -1) {val1 = i15;}
	
	return val1;
}
/*--------------------------------------------------------------------------------------------------------------*/
/*function to split the line*/
function splittoreg (atr_arr){
	var str = atr_arr.trim();
	var regs_add = str.split(/[\s|,|cmp|mov|add|sub|beq|bne|b]+/);
	var return_reg  = new Object();
	var k=0;

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
	
	//to_bin();
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
		var err1 = "----Error1----\nEnter the number of lines";
		document.getElementById('out').innerHTML = err1;
		return;
	}
	else if(no_of_lines > no_of_all_lines) {
		var err2 = "----Error2----\nNumber entered exceeds number of lines";
		document.getElementById('out').innerHTML = err2;
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
			if(i!=t) {
				tot_instr++;
				i = t;
			}
			else {i = t}; 
		}
		else if (((ttarr[i].indexOf("b ") > -1)|(ttarr[i].indexOf("b	") > -1)|(ttarr[i].indexOf("bl") > -1))&(ttarr[i].indexOf(":") < 0)) {
			implement_branch(ttarr[i],(i+1));
			tot_instr++;
		}
		else if ((ttarr[i].indexOf("ldr") > -1)&(ttarr[i].indexOf(":") < 0)) {
			implement_load(ttarr[i]);
			tot_instr++;
		}
		else if ((ttarr[i].indexOf("str") > -1)&(ttarr[i].indexOf(":") < 0)) {
			implement_store(ttarr[i]);
			tot_instr++;
		}
	}
	
	
	
/*--------------------------------------------------------------------------------------------------------------*/
/*implements the mov command*/
function implement_mov(str1){
	
	var str = str1.trim();
	var regs_add = str.split(/[\s|,]+/);
			
			var register = regs_add[1];
			var register_val = regs_add[2];
			
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
			var reggit = drop_hash(register_val);
			put_vals(register,reggit);
}
/*--------------------------------------------------------------------------------------------------------------*/
/*implements the add command*/
function implement_add(str){
	
	if (str.indexOf("sp") > -1){
		handle_sp(str,1);
		return;
	}
	
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
	
	if (str.indexOf("sp") > -1){
		handle_sp(str,0);
		return;
	}
	
	var regs = splittoreg(str);
	var dest_reg = regs[0];
	var src1_reg = regs[1];
	var src2_reg = regs[2];

	if (dest_reg=="sp") {
		sub_sp();
		return;
	}
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
/*handle_sp*/
function handle_sp(str,bit){
	var str1 = str.trim();
	var regs = str1.split(/[\s|,]+/);
	
	var command = regs[0];
	var dest_reg = regs[1];
	var src1_reg = regs[2];
	var src2_reg = regs[3];
		
	var val2 = drop_hash(src2_reg);
	
	var val1 = get_val(src1_reg);
	
	var dest_numb;
	
	if (bit==0) dest_numb = val1 - val2;
	else if (bit==1) dest_numb = val1 + val2;
	
	put_vals('sp',dest_numb);
}
/*--------------------------------------------------------------------------------------------------------------*/
/////*utiltiy functions******//////
/*function to convert string number to number*/
function drop_hash(str) { 
	
	if (typeof(str) != "string"){
		return str;
	}
	else{
		if  (str.indexOf("#") > -1) {
			var num = str.split("#");
			var temp = Number(num[1]);
			return parseInt(temp);
		}
		else {
			var temp = Number(str);
			return parseInt(temp);
		}
	}
}
/*--------------------------------------------------------------------------------------------------------------*/
/*function to find_label*/
function find_label(label_raw){
	var label = label_raw+":";
	
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
	
	/*handling beq*/
	if ((command=="bne")&(condition != 0)){
		var w = find_label(label);
		//alert("found label: "+w);
		////alert ("Still in fun2");
		return w;
	}
	else if ((command=="beq")&(condition == 0)){
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
		return i;
}
/*--------------------------------------------------------------------------------------------------------------*/
function implement_branch(str,line){
	var str1 = str.trim();
	var regs_add = str1.split(/[\s|,]+/);
	
	var command = regs_add[0];
	var label = regs_add[1];
	
	/*handling b*/
	if (command=="b"){
		var w = find_label(label);
		return w;
	}
	
	/*handling bl*/
	else if ((command=="bl")){
		document.getElementById('lr').innerHTML=(line+1);
		return line;
	}
}

/*--------------------------------------------------------------------------------------------------------------*/
/*implements load instruction*/
function implement_load(strng){
	var str = strng.trim();
	var regs = str.split(/[\s|,]+/);
		
	var dest_reg = regs[1];
	var mem_loc = regs[2];
	
	if(mem_loc.indexOf("=") > -1){
		
		mem_loc = mem_loc.substr(1);
		var index_label = label_array.indexOf(mem_loc);
		var index_add = address_array[index_label];
		document.getElementById(dest_reg).innerHTML=index_add;
		return;
	}
	else if (mem_loc.indexOf("[") > -1) {
		var dest_reg = regs[1];
		var mem1 = regs[2];
		var val1 = regs[3];
		
		var mem_loc = mem1.split("[");
		var mem_val = val1.split("]")
	 
		var sp_val = get_val(mem_loc);
		var val = drop_hash(mem_val[0]);
	
		var sp_new = sp_val + val;
		var stack_id = "i"+sp_new.toString();
		
		var value_to_be_stored = get_val(stack_id);
		put_vals(dest_reg,value_to_be_stored);
	}
} 
/*--------------------------------------------------------------------------------------------------------------*/
/*implements store instruction*/
function implement_store(strng){
	
	var str = strng.trim();
	var regs = str.split(/[\s|,]+/);
		
	var dest_reg = regs[1];
	var mem1 = regs[2];
	var val1 = regs[3];
	
	var mem_loc = mem1.split("[");
	var mem_val = val1.split("]")
	
	var sp_val = get_val(mem_loc);
	var val = drop_hash(mem_val[0]);
	
	var sp_new = sp_val + val;
	
	
	var stack_id = "i"+sp_new.toString();
	alert(stack_id);
	
	var value_to_be_stored = get_val(dest_reg);
	alert(value_to_be_stored);
	put_vals(stack_id,value_to_be_stored);
	
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
	while (k<total_lines){
		//alert(ttarr[k]);
		if ((ttarr[k].indexOf(":") > -1)){
			var label_index = ttarr[k].indexOf(":");
			var label = ttarr[k].substr(0,label_index);
		
			var indx = ttarr[k].indexOf(".");
			var substrs = ttarr[k].substr(indx);
		
			label_array[j] = label;
			data_array[j] = substrs;
			
			j++;
		}
		k++;
	}
	put_data();
}	
/*--------------------------------------------------------------------------------------------------------------*/
}


/*--------------------------------------------------------------------------------------------------------------*/
/*Resets the registers*/
function reset_regs(){
	put_vals("sp",15);
	put_vals("lr",100);
	var all_regs = ["r0","r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","pc","d00","d01","d02","d03","n00","n01","n02","n03","instructions"];
	for (i=0;i<all_regs.length;i++){
		put_vals(all_regs[i],"");
	}
	r0 = "err",r1 = "err",r2 = "err",r3 = "err",r4 = "err",r5 = "err",r6 = "err",r7 = "err",r8 = "err",r9 = "err",r10 = "err",r11 = "err",
	r12 = "err",pc = "err",i0 = "err",i1 = "err",i2 = "err",i3 = "err",i4 = "err",i5 = "err",i6 = "err",i7 = "err",
	i8 = "err",i9 = "err",i10 = "err",i11 = "err",i12 = "err",i13 = "err",i14 = "err",i15 = "err";
}


function change_format(){
	var r;
	if (document.getElementById('format_hex').checked) {
		r = 16;
	}
	else if (document.getElementById('format_bin').checked) {
		r = 2;
	}
	else if (document.getElementById('format_dec').checked) {
		r = 10;
	}
	
	var all_regs = ["r0","r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","sp","lr","pc"];
	
	for (i=0;i<all_regs.length;i++){
		var t = get_val(all_regs[i]);
		if (t != "err") {
			var tt = t.toString(r);
			document.getElementById(all_regs[i]).innerHTML=tt;
		}
	}
}	
	

