function create_mem(){
	
	var twt = editor.getValue();
	var ttarr = twt.split("\n");
	
	/*removing comments*/
	for (i=0;i<ttarr.length;i++){
		if (ttarr[i].indexOf("@") > -1) {
			var remove_at = ttarr[i].split("@");
			ttarr.splice(i,1,remove_at[0]);
		}
	}
	
	var instr_array = new Array(ttarr.length);
	var address_array = new Array(ttarr.length);
	var printing_array = new Array(ttarr.length);
	
	var stringg = new Array(ttarr.length);
	
	for (i=0;i<ttarr.length;i++){
		stringg[i] = ttarr[i].trim();
	}
	
	for (i=0;i<instr_array.length;i++){
		instr_array[i] = "err";
		address_array[i] = "err";
		printing_array[i] = "";
	}
	
	var i1 = stringg.indexOf(".global main");
	var i2 = stringg.indexOf(".data");
	var j=0;
	for (i=(i1+1);i<i2;i++){
		//var stringg = ttarwr[i];
		if (stringg[i] != "") {
			
				instr_array[j] = stringg[i];
				var add_loc1 = j*4;
				var add_loc2 = add_loc1.toString(16);
				address_array[j] = add_loc2;
				j++;
			
		}
	}
	
	var ui = 0;
	
	for (i=0;i<instr_array.length;i++){
		if (address_array[i] != "err"){
			//alert(instr_array[i]);
			var y = dec_ins_mem(instr_array[i],instr_array);
			var u = print_ins(address_array[i],y[0],y[1]);
			
			printing_array[i] = u;
			if (u!="") ui++;		
		}
	}
	
	//document.getElementById('inmem').innerHTML = printing_array_final;
	var fnal_str = "";
	for (i=0;i<ui;i++){
		fnal_str = fnal_str+printing_array[i]+"";
	}
		edinm.setValue(fnal_str);
		//edinm.setValue(printing_array_final[2]);
	return [instr_array,address_array,ttarr,ui];
}



function dec_ins_mem (str,instr_array){
	
	function find_label(label_raw){
		var label = label_raw+":";
		
		if (label == "printf:") {return 100;}
		else if (label == "scanf:") {return 200;}
		
		for (i=0;i<ttarr.length;i++){
			if(ttarr[i].indexOf(label) > -1){
				return(i);
			}
		}
		return -1;
	}
	
	
	var instr = str.trim();
	
	if ((instr.indexOf("mov") > -1)&(instr.indexOf(":") < 0)) {
			
			
			var regs_add = instr.split(/[\s|,]+/);
			
			var register = regs_add[1];
			var register_val = regs_add[2];
			
			var t = dp_dec ("1101",register,"00",register_val);
			var q = "mov	"+register+", "+register_val;
			return [t,q];
		}
		else if ((instr.indexOf("add") > -1)&(instr.indexOf(":") < 0)) {
			
			var regs_add = instr.split(/[\s|,]+/);
			//alert("mov");
			var dest_reg = regs_add[1];
			var src1_reg = regs_add[2];
			var src2_reg = regs_add[3];
			
			var t = dp_dec ("0100",dest_reg,src1_reg,src2_reg);
			var q = "add	"+dest_reg+", "+src1_reg+", "+src2_reg;
			return [t,q];
		}
		else if ((instr.indexOf("sub") > -1)&(instr.indexOf(":") < 0)) {
			
			var regs_add = instr.split(/[\s|,]+/);
			//alert("mov");
			var dest_reg = regs_add[1];
			var src1_reg = regs_add[2];
			var src2_reg = regs_add[3];
			
			var t = dp_dec ("0010",dest_reg,src1_reg,src2_reg);
			
			var q = "sub	"+dest_reg+", "+src1_reg+", "+src2_reg;
			return [t,q];
			
		}
		else if ((instr.indexOf("cmp") > -1)&(instr.indexOf(":") < 0)) {
			
			var regs_add = instr.split(/[\s|,]+/);
			//alert("mov");
			var src1_reg = regs_add[1];
			var src2_reg = regs_add[2];
			
			var t = dp_dec ("1010",src1_reg,"00",src2_reg); 
			
			var q = "cmp	"+src1_reg+", "+src2_reg;
			return [t,q];
			
		}
		else if ((instr.indexOf("b ") > -1)|(instr.indexOf("b	") > -1)&(instr.indexOf(":") < 0)) {
			var t = "00000000000000000000000000000000";
			var q = "b b b b b b";
			return [t,q];		
		}
		else if ((instr.indexOf("bl") > -1)&(instr.indexOf(":") < 0)) {
			var t = "00000000000000000000000000000000";
			var q = "bl bl bl bl bl bl";
			return [t,q];		
		}
		else if ((instr.indexOf("ldr") > -1)&(instr.indexOf(":") < 0)) {
			var t = dt_dec("00000000", "111111", "111111", "011001");
			var q = "ldr ldr ldr";
			return [t,q];
		}
		else if ((instr.indexOf("str") > -1)&(instr.indexOf(":") < 0)) {
			var t = "00000000000000000000000000000000";
			var q = "str str str";
			return [t,q];
		}
		else {
			var t = "00000000000000000000000000000000";
			var q = instr;
			return [t,q];
		}
}

function dp_dec (op,dest_reg,src1_reg,src2_reg){
		var cond = 14;
		var f = "00";
		var s = "0";
		
		if (dest_reg=="pc") dest_reg="15";
		else if (dest_reg=="lr") dest_reg="14";
		else if (dest_reg=="sp") dest_reg="13";
		
		if (src1_reg=="pc") src1_reg="15";
		else if (src1_reg=="lr") src1_reg="14";
		else if (src1_reg=="sp") src1_reg="13";
		
		if (src2_reg=="pc") src2_reg="15";
		else if (src2_reg=="lr") src2_reg="14";
		else if (src2_reg=="sp") src2_reg="13";
		
		var rd_temp1 = dest_reg.substr(1);//rd field
		var rd_temp2 = parseInt(rd_temp1);
		var rd = extend_string(rd_temp2.toString(2),"0",4);
		
		
		
		var rn_temp1 = src1_reg.substr(1);//rn field
		var rn_temp2 = parseInt(rn_temp1);
		var rn = extend_string(rn_temp2.toString(2),"0",4);
		
		var i="0";//immediate field
		var op2_temp1;
		
		if (src2_reg.indexOf("#") > -1){
			op2_temp1 = drop_hash(src2_reg);
			i ="1";
		}
		else {		
			var op2_temp = src2_reg.substr(1);
			op2_temp1 = parseInt(op2_temp);
		}
		
		var op2 = extend_string(op2_temp1.toString(2),"0",12);
		
		var dec_ins = cond.toString(2)+f+i+op+s+rn+rd+op2;
		
		return (dec_ins);
}

function dt_dec(Rn, Rd, operand2, opCode){ 

	var cond = 14;
	var F = "01";
	
	var format = cond.toString(2) + F + opCode + Rn + Rd + operand2;
	
	return format;
};


function extend_string(str,copy_bit,no_of_bits){
	while (str.length<no_of_bits){
		str = copy_bit + str;
	}
	return str; 
}

function print_ins(add,ins,str){
	
	var add_long = extend_string(add,"0",8);
	
	var print_this = add_long+" : "+ins+" || "+str+"\n";
	
	return print_this;
}
