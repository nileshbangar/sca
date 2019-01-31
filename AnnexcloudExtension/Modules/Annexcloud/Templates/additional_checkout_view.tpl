<div>
	<div id="ac-reward" name="ac-reward" class="cart-summary-subtotal" />
						
<script type="text/javascript">
if("{{siteId}}"!=""){
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function acRewardFunction(rewardid)
{
	console.log(rewardid);
	//setCookie("acrwd", rewardid, 2);
	var data = "reward_id="+rewardid+"&reason=claim";

var xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
  var obj = JSON.parse(this.responseText);
  
    //console.log(this.responseText);
	document.getElementById("promocode").value = obj["reward_code"];
	document.getElementsByClassName("cart-promocode-form-summary-button-apply-promocode")[0].click();
	//setCookie("acrwd", "", 2);
  }
});

xhr.open("PUT", "https://s15.socialannex.net/apiv2/points/{{siteId}}/{{email}}?access_token={{accesstoken}}",true);
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.send(data);
	
	
}
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	var selrwd="";
	selrwd = getCookie("acrwd");
	var acddl = '<select id="acclaim"  onchange="acRewardFunction(this.value)"><option value="">--Select--</option>';
	
     var obj = JSON.parse(this.responseText);
	 if(obj["error_code"]=="0")
	 {
	 for(var k=0;k<obj["data"].length;k++) 
	 { 
		//console.log(obj["data"][k]["reward_id"]); 
		if(selrwd==obj["data"][k]["reward_id"])
		{
			acddl +='<option value='+obj["data"][k]["reward_id"]+' selected>'+obj["data"][k]["reward_name"]+'</option>';
		}
		else
		{
		acddl +='<option value='+obj["data"][k]["reward_id"]+'>'+obj["data"][k]["reward_name"]+'</option>';
		}
	 }
	 acddl +="</select>";
	document.getElementById("ac-reward").innerHTML = acddl;
	 }
	 else
	 {
		document.getElementById("ac-reward").innerHTML ="";
	 }
	 
	 //document.getElementById("ac-reward").innerHTML = this.responseText;
    }
	else
	{
		document.getElementById("ac-reward").innerHTML ="";
	}
	
  };
  xhttp.open("GET", "https://s15.socialannex.net/apiv2/reward/{{siteId}}/{{email}}?access_token={{accesstoken}}", true);
  xhttp.send();
  }
</script>
	<!--<marquee direction="down" width="250" height="200" behavior="alternate" style="border:solid">
        <marquee behavior="alternate">
            Social Login
        </marquee>
    </marquee>-->
</div>	