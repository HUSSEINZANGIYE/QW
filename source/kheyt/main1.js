
function avoidLetterCommaSeparate(e){
	var c=",";
	var f=e.value.replace(new RegExp(c,"g"),"");
	var d=regularExpMask(e);
	var b="";var a="";
	while(d.length>3){
		b=d.substring(d.length-3,d.length);
		b=","+b;
		d=d.substring(0,d.length-3);
		a=b+a
	}
	e.value=d+a
}

	function regularExpMask(c){
		var b="";
		for(var a=0;a<c.value.length;a++){
			if(!(isNaN(c.value.charAt(a)))&&(!(c.value.charAt(a)==" "))){
				b=b+c.value.charAt(a)
			}
		}
		c.value=b;
		return b
	}

