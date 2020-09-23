
var d=document;function acceptTerm(){if(!d.getElementById('accept').checked)
{d.getElementById('acceptext').style.color="red";alert('لطفا گزینه "با آگاهی کامل مفاد مندرجات فوق را تایید می کنم" را علامت زده و سپس کلید تایید را فشار دهید.');return;}
var term=d.getElementById('form');var desc=d.getElementById('desc');var user=d.getElementById('user');term.style.display='none';term.style.visibility='hidden';desc.style.display='';desc.style.visibility='visible';user.style.display='';user.style.visibility='visible';}
function cMC(vmc)
{var mc;mc=vmc.value;if(mc.length==10)
{if(mc=='0000000000'||mc=='2222222222'||mc=='3333333333'||mc=='4444444444'||mc=='5555555555'||mc=='6666666666'||mc=='7777777777'||mc=='8888888888'||mc=='9999999999')
{alert('کد ملی صحیح نمی باشد');vmc.focus();return false;}
c=parseInt(mc.charAt(9));n=parseInt(mc.charAt(0))*10+
parseInt(mc.charAt(1))*9+
parseInt(mc.charAt(2))*8+
parseInt(mc.charAt(3))*7+
parseInt(mc.charAt(4))*6+
parseInt(mc.charAt(5))*5+
parseInt(mc.charAt(6))*4+
parseInt(mc.charAt(7))*3+
parseInt(mc.charAt(8))*2;r=n-parseInt(n/11)*11;if((r==0&&r==c)||(r==1&&c==1)||(r>1&&c==11-r))
{return true;}
else
{alert('کد ملی صحیح نمی باشد');vmc.focus();return false;}}
else
{alert('ده رقم كد ملی را وارد نمایید');vmc.focus();return false;}}
var fkey="050f259f0e50c11fd52140f2fa9acd31";function rcpt()
{var dt=new Date().getTime();d.getElementById('scpt').src="kernel/cpt/"+dt;}
function hcrd(){var cardInput=d.getElementById('cardInput');var bnkInput=d.getElementById('bnkInput');if(cardInput.style.visibility=='hidden'){bnkInput.style.display='none';bnkInput.style.visibility='hidden';cardInput.style.display='';cardInput.style.visibility='visible';}else{bnkInput.style.display='';bnkInput.style.visibility='visible';cardInput.style.display='none';cardInput.style.visibility='hidden';}}
function nextFocus(obj,next){if(obj.value.length==4){d.getElementById(next).focus();}}
function checkBid(obj){if(obj.value.length<1){jAlert('شماره حساب كمتر از 1 رقم قابل قبول نیست');obj.focus();return false;}else{return true;}}
function checkCard(){var cd1=d.getElementById('cardid1');var cd2=d.getElementById('cardid2');var cd3=d.getElementById('cardid3');var cd4=d.getElementById('cardid4');var compare=cd1.value+''+cd2.value;var compareToken=compare.substring(0,6);if(compareToken!=603799&&compareToken!=610433&&compareToken!=603769&&compareToken!=627353&&compareToken!=622106&&compareToken!=627412&&compareToken!=627760&&compareToken!=589463&&compareToken!=639347&&compareToken!=927961&&compareToken!=603770&&compareToken!=628023&&compareToken!=589210&&compareToken!=627648&&compareToken!=627488&&compareToken!=636214&&compareToken!=606373&&compareToken!=639607&&compareToken!=627381&&compareToken!=639346&&compareToken!=621986)
{alert('شماره کارت معتبر نیست');return false;}else{if(cd1.value.length<4||cd2.value.length<4||cd3.value.length<4||cd4.value.length<4){alert('شماره كارت را تصحیح كنید');return false;}else{return true;}}}
function printIt()
{var content=d.getElementById('acc');var printLink=document.getElementById('aprint');printLink.style.display='none';w=window.open('about:blank');var extra='<br/><br/><div style="position: absolute;left: 50%;width: 400px;margin-left: -200px;padding:10px;font-family:Tahoma,arial"><center><h3>وزارت رفاه و تامین اجتماعی</h3><h4>سامانه ثبت حساب خانوار</h4></center><div style="padding:15px;border: 1px solid #000;text-align:right;">'+content.innerHTML+'</div></div>';w.document.open();w.document.write("<html>"+extra);w.document.writeln("<script>window.print()</"+"script>");w.document.writeln("</html>");w.document.close();w.close();}
var dn=1;var dependents=new Array;function addDependent(dlist,ssn,home_y,home_n){var ihs=0;if(!cMC(d.getElementById(ssn)))
{return false;}
if(!$('#'+home_y).is(':checked')&&!$('#'+home_n).is(':checked'))
{jAlert('خطا: وضعیت مالکیت واحد مسکونی را معین کنید');return false;}else{if($('#'+home_y).is(':checked'))
{ihs=1;}}
if($('#'+ssn).val()==$('#ssn').val())
{jAlert('این کد ملی قبلا افزوده شده');return false;}
for(i=0;i<dependents.length;i++)
{if(dependents[i]==$('#'+ssn).val())
{jAlert('این کد ملی قبلا افزوده شده');return false;}}
$.ajax({type:"POST",async:false,dataType:"json",headers:{'X-Requested-With':'refahi','X-Token':$('#token').val()},url:"checkDependent.html",data:{ssn:$('#'+ssn).val(),token:$('#token').val(),xsrf:$('#xsrf').val(),sssn:$('#ssn').val(),acc:$('#acc').val()}}).done(function(msg){if(msg.stt==0)
{alert("خطا: "+msg.msg);}else{var rn=dn+1;if(ihs)
{var tr='<tr><td>'+rn+'</td><td>'+$('#'+ssn).val()+'<input type="hidden" name="dssn_'+dn+'" id="dssn_'+dn+'" value="'+$('#'+ssn).val()+'"/></td><td>'+msg.msg+'</td><td><input type="radio" name="hso'+dn+'" id="hso_y_'+dn+'" value="1" checked/></td><td><input type="radio" name="hso'+dn+'" id="hso_n_'+dn+'" value="0" /></td></tr>';}
else
{var tr='<tr><td>'+rn+'</td><td>'+$('#'+ssn).val()+'<input type="hidden" name="dssn_'+dn+'" id="dssn_'+dn+'" value="'+$('#'+ssn).val()+'"/></td><td>'+msg.msg+'</td><td><input type="radio" name="hso'+dn+'" id="hso_y_'+dn+'" value="1"/></td><td><input type="radio" name="hso'+dn+'" id="hso_n_'+dn+'" value="0" checked/></td></tr>';}
$('#'+dlist+' tr:last').after(tr);dependents[dn-1]=$('#'+ssn).val();$('#dcnt').val(dn);dn++;$('#'+ssn).val('');$('#'+home_y).prop("checked",false);$('#'+home_n).prop("checked",false);}});}
function addDependent2(ssn,home_y,home_n,depnam){var ihs=0;var cssn=$('#'+ssn).val();if($('#'+ssn).is('[readonly]'))
{return false;}
if(!cMC(d.getElementById(ssn)))
{return false;}
if($('#'+ssn).val()==$('#ssn').val())
{jAlert('این کد ملی قبلا افزوده شده');return false;}
for(i=0;i<dependents.length;i++)
{if(dependents[i]==$('#'+ssn).val())
{jAlert('این کد ملی قبلا افزوده شده');return false;}}
$.ajax({type:"POST",async:false,dataType:"json",headers:{'X-Requested-With':'refahi','X-Token':$('#token').val()},url:"checkDependent.html",data:{ssn:$('#'+ssn).val(),token:$('#token').val(),xsrf:$('#xsrf').val(),sssn:$('#ssn').val(),acc:$('#acc').val()}}).done(function(msg){if(msg.stt==0)
{alert("خطا: "+msg.msg);}else{var rn=dn+1;dependents[dn-1]=$('#'+ssn).val();$('#'+depnam).html(msg.msg);$('#'+ssn).attr("readonly","readonly");$('#dcnt').val(dn);dn++;}});}