<div>
<div id="socialannex_dashboard"></div>
<script type="text/javascript">
var sa_emailid = "{{email}}";

var data = "user_email={{email}}";
var sa_siteid = "{{siteId}}";
var sa_access_token = "{{accesstoken}}";
var xhr = new XMLHttpRequest();
//xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://s15.socialannex.net/apiv2/user/"+sa_siteid+"/"+sa_emailid+"?access_token="+sa_access_token);
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.send(data);

var sa_uni = sa_uni || [];
sa_uni.push(['sa_pg', '5']);
function sa_async_load() 
{
	//console.log("In function");
  var sa = document.createElement('script');
  sa.type = 'text/javascript';sa.async = true;
  sa.src = 'https://cdn.socialannex.com/partner/{{siteId}}/universal.js';
  var sax = document.getElementsByTagName('script')[0];
  sax.parentNode.insertBefore(sa, sax);
  }
  sa_async_load();
</script>
    
</div>
