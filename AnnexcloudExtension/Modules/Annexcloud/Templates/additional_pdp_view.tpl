{{#if loadAnnexIntegration}}
<div>
    <script src="https://s23.socialannex.com/v4/js/s23-main-curl.js"></script>
    <div id="sa_s23_qa_count"></div>
    <div id="s23_total_questions"></div>
    <div id="socialannex"></div>
    <script type="text/javascript">//<![CDATA[
    if ("{{siteId}}" != "") {
        var p_dtl = '{{prodDtlImg}}';
        console.log(p_dtl);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("socialannex").innerHTML = this.responseText;
            }
        };
        var p_url = window.location.href;
        var p_name = "{{AcProdName}}";//MANDATORY
        var sa_p_img_url = "{{AcProdImg}}";//MANDATORY
        var sa_p_price = "{{AcProdPrice}}";//[MANDATORY]
        var product_id = "{{AcProdId}}";//MANDATORY

        xhttp.open("GET", "https://s23.socialannex.com/v4/process/get_data_curl.php?siteID={{siteId}}&sa_p_img_url=" + sa_p_img_url + "&sa_p_url=" + window.location.href + "&sa_p_price=" + sa_p_price + "&sa_p_name=" + p_name + "&sa_p_id=" + product_id, true
    )
        ;
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();

        window.s23AsyncInit = function () {
            var buildProductDetails = {
                sa_p_url: window.location.href + "/" + p_name,
                sa_p_img_url: sa_p_img_url,
                sa_p_name: p_name,
                sa_p_id: product_id,
                sa_p_price: sa_p_price
            }
            S23Obj.init({
                siteID: {{siteId}},
                saGetProdDetails: buildProductDetails
            });
            S23Obj.targetId = 'socialannex';
        };
    }
    </script>


    <div id="socialannex-reviewrating-top"></div>
    <div id="socialannex-reviewrating-bottom"></div>
    <script type="text/javascript">//<![CDATA[
    if ("{{siteId}}" != "") {
        //FOR RNR
        var p_name = "{{AcProdName}}";
        var sa_p_img_url = "{{AcProdImg}}";
        var sa_s22_product_code = "{{AcProdId}}"; //Pass the specific product code
        var sa_uni = sa_uni || [];
        sa_uni.push(['sa_pg', {{pageId}}]);
        var cssId = 'myCss';  // you could encode the css path itself to generate id..
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://cdn.socialannex.com/partner/{{siteId}}/28/{{templateId}}/css/saStyle.css';
        link.media = 'screen';
        head.appendChild(link);
        (function () {
            function sa_async_load() {
                var sa = document.createElement('script');
                sa.id = "saUniversal";
                sa.type = 'text/javascript';
                sa.async = true;
                sa.src = 'https://cdn.socialannex.com/partner/{{siteId}}/universal.js';
                var sax = document.getElementsByTagName('script')[0];
                sax.parentNode.insertBefore(sa, sax);
            }

            sa_async_load();
        })();

        (function () {
            function loadRARmodule() {
                var sar = document.createElement('script');
                sar.type = 'text/javascript';
                sar.async = true;
                sar.id = "s28_jquery";
                sar.src = '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
                var saxr = document.getElementsByTagName('script')[0];
                saxr.parentNode.insertBefore(sar, saxr);
                if (document.getElementById('socialannex-reviewrating-bottom')) {
                    var sar = document.createElement('script');
                    sar.type = 'text/javascript';
                    sar.async = true;
                    sar.id = "s28-main.js";
                    sar.src = '//cdn.socialannex.com/partner/{{siteId}}/s28-main.js';
                    var saxr = document.getElementsByTagName('script')[0];
                    saxr.parentNode.insertBefore(sar, saxr);
                }
                if (document.getElementById("s28-war-preview")) {
                    document.getElementById("s28-war-preview").setAttribute("data-display", "true");
                }
            }

            loadRARmodule();
        })();


        var Base64 = {


            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",


            encode: function (input) {
                var output = "";
                var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                var i = 0;

                input = Base64._utf8_encode(input);

                while (i < input.length) {

                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;

                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }

                    output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

                }

                return output;
            },


            decode: function (input) {
                var output = "";
                var chr1, chr2, chr3;
                var enc1, enc2, enc3, enc4;
                var i = 0;

                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                while (i < input.length) {

                    enc1 = this._keyStr.indexOf(input.charAt(i++));
                    enc2 = this._keyStr.indexOf(input.charAt(i++));
                    enc3 = this._keyStr.indexOf(input.charAt(i++));
                    enc4 = this._keyStr.indexOf(input.charAt(i++));

                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;

                    output = output + String.fromCharCode(chr1);

                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }

                }

                output = Base64._utf8_decode(output);

                return output;

            },

            _utf8_encode: function (string) {
                string = string.replace(/\r\n/g, "\n");
                var utftext = "";

                for (var n = 0; n < string.length; n++) {

                    var c = string.charCodeAt(n);

                    if (c < 128) {
                        utftext += String.fromCharCode(c);
                    }
                    else if ((c > 127) && (c < 2048)) {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                    else {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }

                }

                return utftext;
            },

            _utf8_decode: function (utftext) {
                var string = "";
                var i = 0;
                var c = c1 = c2 = 0;

                while (i < utftext.length) {

                    c = utftext.charCodeAt(i);

                    if (c < 128) {
                        string += String.fromCharCode(c);
                        i++;
                    }
                    else if ((c > 191) && (c < 224)) {
                        c2 = utftext.charCodeAt(i + 1);
                        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                        i += 2;
                    }
                    else {
                        c2 = utftext.charCodeAt(i + 1);
                        c3 = utftext.charCodeAt(i + 2);
                        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                        i += 3;
                    }

                }

                return string;
            }

        }


        var sa_uni = sa_uni || [];
        sa_uni.push(['sa_pg', {{pageId}}]);
        var sa_s28_review_form = '0';
        var sa_s28_load_onlyform = '0';
        var sa_s28_email = "";

        var sa_s28_first_name = "";

        var sa_s28_last_name = "";

        var sa_s28_user_location = "PASS_LOGGED_USER_LOCATION";
        var sa_s28_location = window.location.href;
        var sa_s28_template_id = "{{templateId}}";//[MANDATORY]
        var siteid = "{{siteId}}";//[MANDATORY]
        var sa_s28_product_id = "{{AcProdId}}";//[MANDATORY]
        var sa_s28_product_name = "{{AcProdName}}";//[MANDATORY]


        var sa_s28_product_image_url = sa_p_img_url;//MANDATORY
        var sa_s28_product_price = "{{AcProdPrice}}";//[MANDATORY]
        var sa_s28_product_url = window.location.href;//[MANDATORY]
        (function () {
            function sa_async_load() {
                var sa = document.createElement('script');
                sa.type = 'text/javascript';
                sa.async = true;
                sa.src = '//cdn.socialannex.com/partner/{{siteId}}/universal.js';
                var sax = document.getElementsByTagName('script')[0];
                sax.parentNode.insertBefore(sa, sax);
            }

            if (window.attachEvent) {
                window.attachEvent('onload', sa_async_load);
            }
            else {
                window.addEventListener('load', sa_async_load, false);
            }
        })();

        var data = '{"config":{"siteId":"{{siteId}}","templateId":"{{templateId}}","currentPageUrl":"' + encodeURIComponent(window.location.href) + '"},"productId":"{{AcProdId}}"}';
// console.log(data);
// var encode = Base64.encode(data);
// encode = "parameter="+encode+"&isParamEncode=1"
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                // alert(json.topContent);
                $('#socialannex-reviewrating-top').html(function () {
                    return json.topContent;
                });
                $('#socialannex-reviewrating-bottom').html(function () {
                    return json.bottomContent;
                });

            }
        };
        xhttp.open("POST", "https://s28.socialannex.com/v2.0/review/getReviews", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("parameter=" + data);
// END FOR RNR
    }
    </script>
</div>
{{/if}}