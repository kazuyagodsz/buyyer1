var hasLogin = false;
var loginFlag = true;
var forgetFlag = true;
var exist ='';
var theTimer;

var iv = CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
var salt = CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);

$(document).ready(function(){
	$("#salt").val(salt);
	$("#iv").val(iv);

	var isSSOMufg = $("#isSSOMufg").val();
	if(isSSOMufg === 'Y'){
		$('.panel-primary').hide();
		$('.login-footer').hide();
		setTimeout( function(){
			$(".loader-backdrop").show();
			$('#loginForm').attr('action', doLoginSSO);
			document.forms[0].submit();
		}, 2000);
	}

	$('.carousel').each(function(){
        $(this).carousel({
            // pause: 'hover',
			pause: true,
            interval: 4000
        });
    });

	$('.ticker-next').on( 'click', function(e) {
		
		$('.carousel').each(function(){
			$(this).carousel({
				pause: 'hover',
				interval: 4000
			});
		});
	});

	$('.ticker-previous').on( 'click', function(e) {
		
		$('.carousel').each(function(){
			$(this).carousel({
				pause: 'hover',
				interval: 4000
			});
		});
	});

	$(window).resize(function() {
		if(parent.document.getElementById("login").offsetHeight != document.body.offsetHeight + 50){
			$(parent.document.getElementById("login")).height(document.body.offsetHeight + 50);
		}
	});

	$("#corpid").on("change", function(){
		keyWord = "";
	});

	$("#userid").on("change", function(){
		keyWord = "";
	});

	$("#userpass").on("focus", function(){
		setTimeout(function(){$(".tooltip-inner").html(keyWord);},100);
	});

	$("#userpass").on("click", function(){
		setTimeout(function(){$(".tooltip-inner").html(keyWord);},100);
	});

	if($("#lang").val() == '') {
	$("#lang").attr('value', 'in_ID');
	}
	$("#errorStrMsg").attr('value', '');
	$("#errorMessage").attr('value', '');
	$("#dialog-popupate-host-captcha").dialog({
        autoOpen: false
    });
	$('#btnSend').on( 'click', function(e) {
		if(document.getElementById('loginForgotForm').checkValidity())
        {
			var email = $('#emailUser').val();
			var phone = $('#phoneUser').val();
			document.getElementById("alert").remove();
			document.getElementById("mobilePh").style["padding-top"] = "10px";
			document.getElementById("emailUs").style["padding-bottom"] = "10px";

			if (validateEmail(email)) {
				if(validatePhoneNo(phone)){
					$('#corpIdForgotPass').attr('value', $('#corpidForget').val());
					$('#userIdForgotPass').attr('value', $('#useridForget').val());
					$('#email').attr('value', email);
					$('#phone').attr('value', $('#phoneUser').val());
					$("#loginForm").attr('action', sendForgotPassword);
					window.top.pauseCacheInit();
					document.forms[0].submit();
				} else {
					//alertError("Email Structure is not Valid !", true);
					$('#phoneUser').after('<label id="alert" class="error" style="color:crimson;">Phone Number Structure is not Valid !</label>');
					document.getElementById("mobilePh").style["padding-top"] = "unset";
					document.getElementById("emailUs").style["padding-bottom"] = "unset";
				}
			}
			else {
				//alertError("Email Structure is not Valid !", true);
				$('#emailUser').after('<label id="alert" class="error" style="color:crimson;">Email Structure is not Valid !</label>');
				document.getElementById("mobilePh").style["padding-top"] = "unset";
				document.getElementById("emailUs").style["padding-bottom"] = "unset";
			}
        }

	});

	if($('#countLogin').val() > 2){
		exist = 'captcha';
		setTimeout(function(){
			$('#dialog-popupate-host-captcha').dialog('open');
		}, 1000);
	};

	$('#btnSendCaptcha').on( 'click', function(e) {
		checkValidationCaptcha(validateCaptcha);
	});


	$('#extNews1').on( 'click', function(e) {
		showPopup($('#divNews1'));
	});
	$('#extNews2').on( 'click', function(e) {
		showPopup($('#divNews2'));
	});
	$('#extNews3').on( 'click', function(e) {
		showPopup($('#divNews3'));
	});
	$('#extNews4').on( 'click', function(e) {
		showPopup($('#divNews4'));
	});

	$('#log1').on( 'click', function(e) {
		$('#myCarousel1').carousel(0);
		$('.carousel').each(function(){
			
			$(this).carousel({
				pause: 'hover',
				interval: 4000
			});
		});
	});

	$('#log2').on( 'click', function(e) {
		$('#myCarousel1').carousel(1);
		$('.carousel').each(function(){
			
			$(this).carousel({
				pause: 'hover',
				interval: 4000
			});
		});
	});

	$('#log3').on( 'click', function(e) {
		$('#myCarousel1').carousel(2);
		$('.carousel').each(function(){
			
			$(this).carousel({
				pause: 'hover',
				interval: 4000
			});
		});
	});

	$('#log4').on( 'click', function(e) {
		$('#myCarousel1').carousel(3);
		$('.carousel').each(function(){
			
			$(this).carousel({
				pause: 'hover',
				interval: 4000
			});
		});
	});
	
	
	$('#btnSendKaptcha').on( 'click', function(e) {
		checkvalidKaptCha(checkKaptcha);
	});
	
	$('#btnCancel').click(function(){
		$('#dialog-popupate-host').dialog('close');
	});
	
	$('#btnCancelCaptcha').click(function(){
		$('#dialog-popupate-host-captcha').dialog('close');
	});


	var initDownload = 0;
	var resourceSize = 0
	$("#loginForm").on( 'submit', function (e) {
		if(!hasLogin) {
			$('#divSubmit').hide();
			$('#divMsg').show();
            if (localStorage.getItem("initCacheComplete") === 'true') {
                if (exist == '') {
                    if (loginFlag == true) {
                        loginFlag = false;
                        $("#corpId").attr('value', $('#corpid').val());
                        $("#userId").attr('value', $('#userid').val());

                        var userPassCrypto = encrypt(CryptoJS.SHA1($('#userpass').val()).toString());
                        $("#userPassCrypto").attr('value', userPassCrypto);

                        $("#loginForm").attr('action', performLoginExecuteUrl);
                        window.top.pauseCacheInit();
                        document.forms[0].submit();
                    }
                    else {
                        alertError(alertProcessTrx, true);
                    }

                } else {
                    $('#dialog-popupate-host-captcha').dialog('open');
                }
                clearTimeout(theTimer);
            }else{
				hasLogin = true;
	            theTimer = setInterval(function () {
	            	var initCacheComplete = localStorage.getItem("initCacheComplete");
	                initDownload = localStorage.getItem("initDownload");
	                resourceSize = localStorage.getItem("resourceSize");
	                $('#progreesLoad').text("Download Resource "+initDownload+ " Of "+resourceSize);
	                if (initCacheComplete === 'true') {
	                    if (exist == '') {
	                        if (loginFlag == true) {
	                            loginFlag = false;
	                            $("#corpId").attr('value', $('#corpid').val());
	                            $("#userId").attr('value', $('#userid').val());
	
	                            var userPassCrypto = encrypt(CryptoJS.SHA1($('#userpass').val()).toString());
	                            $("#userPassCrypto").attr('value', userPassCrypto);
	
	                            $("#loginForm").attr('action', performLoginExecuteUrl);
	                            window.top.pauseCacheInit();
	                            document.forms[0].submit();
	                        }
	                        else {
	                            alertError(alertProcessTrx, true);
	                        }
	
	                    } else {
	                        $('#dialog-popupate-host-captcha').dialog('open');
	                    }
	                    clearTimeout(theTimer);
	                }
	            }, 50);
			}
		}
    });
	
	$( "#dialog-popupate-host" ).dialog({
		modal: true,
		minHeight: 300,
		minWidth: 500,
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 700
		},
		hide: {
			effect: "explode",
			duration: 500
		},
		
		close: function( event, ui ) {
			$('#populateName').attr('value','');
			$('#populateId').attr('value','');
			$('.tablePopulate').hide();
		},
		
		open: function( event, ui ){
			$('#populateName').attr('value','');
			$('#populateId').attr('value','');
			$('.tablePopulate').hide();
		}
		
	});	
	
	$('#dialog-popupate-host').dialog({position:['center',60]});

	$('#userpass').tooltip({
	    title: "No Key Word"
	});
	
	$('#emailUser').tooltip({
	    title: "No Key Word"
	});

	$('#phoneUser').tooltip({
		title: "No Key Word"
	});

	$('#kaptchaImage').click(function () {
		$(this).hide().attr('src', 'kaptcha.jpg?time=' + new Date().getTime()).fadeIn();
	 });
	
	
	$( "#dialog-popupate-host-captcha" ).dialog({
		modal: true,
		minHeight: 300,
		minWidth: 500,
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 700
		},
		hide: {
			effect: "explode",
			duration: 500
		},
		
		close: function( event, ui ) {
			$('#populateName').attr('value','');
			$('#populateId').attr('value','');
			$('.tablePopulate').hide();
		},
		
		open: function( event, ui ){
			$('#populateName').attr('value','');
			$('#populateId').attr('value','');
			$('.tablePopulate').hide();
		}
		
	});	
	
	$('#dialog-popupate-host-captcha').dialog({position:['center',60]});

})

function enableEmailPhone(){
	if($('#corpidForget').val() != '' && $('#useridForget').val() != ''){
		$('#emailUser').attr("disabled", false);
		$('#phoneUser').attr("disabled", false);
	}
	else{
		$('#emailUser').attr("disabled", true);
		$('#phoneUser').attr("disabled", true);
	}
}

function checkValidationCaptcha(urlCaptcha) {
	$('#recaptcha_response_field').attr('value', $('#recaptcha_response_field').val() );
	$('#recaptcha_challenge_field').attr('value', $('#recaptcha_challenge_field').val() );
	exist = '';
	$.ajax({
		url: urlCaptcha,
		contentType: "application/json",
		type: "POST",
		data: JSON.stringify({"recaptcha_response_field":$('#recaptcha_response_field').val(), "recaptcha_challenge_field":$('#recaptcha_challenge_field').val()}),
		async: false,
		success:function(result)
		{
			
		},
		error:function(jqHQR, error, errorThrown)
	  	{
	  		exist = jqHQR.responseText;
	  	}
	});
	
	if(exist == ''){
		exist = '';
		$('#dialog-popupate-host-captcha').dialog('close');
	}else{
		alertError(exist)
	}
}

function checkvalidKaptCha(urlKaptcha) {
	$('#kaptchaCode').attr('value', $('#kaptchaCode').val() );
	exist = '';
	$.ajax({
		url: urlKaptcha,
		contentType: "application/json",
		type: "POST",
		data: JSON.stringify({"kaptchaCode":$('#kaptchaCode').val()}),
		async: false,
		success:function(result)
		{
			exist = '';
			$('#dialog-popupate-host-captcha').dialog('close');
		},
		error:function(jqHQR, error, errorThrown)
	  	{
			document.getElementById('errorCapcai').innerHTML = 'Captcha does not match !';
			exist = 'Error';
	  	}
	});
}

function hideKeywordTooltip(){
	setTimeout(function(){$(".tooltip").hide();}, 1);
}

function showKeywordTooltip(){
	setTimeout(function(){$(".tooltip").show();}, 100);
}

function validateEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var valid = true;
	
	if (!email.match(regex)) {
		valid = false;
	}
	
	return valid;
}


function validatePhoneNo(phoneNo) {
	var regex = /^[0-9]+$/;
	var valid = true;

	if (!phoneNo.match(regex)) {
		valid = false;
	}

	return valid;
}

function changeLanguage() {
	$("#loginForm").attr('action', changeLanguageUrl);
	window.top.pauseCacheInit();
	document.forms[0].submit();
}

function showHelp() {
	showHelpPopUp(doOpenHelpUrl+'?menuName=loginPage');
}
 
function executeLogin(){
	
	$.ajax({
		url: performLoginUrl,
		contentType: "application/json",
		type: "POST",
		data: JSON.stringify({"corpId":$('#corpId').val(), "userId":$('#userId').val(), "userPass":$('#userPass').val()}),
		success:function(msg)
		{
			
			if (msg == 'success') {
				
				window.location.href = "/corp/secure/main/apps"
				
			} else {
				alertError(msg,true);	
			}
	  	},
	  	error:function(errorString)
	  	{
		 	alertError(errorString.status);
	  	}
	}); 
	
}

var keyWord = "";
function randomKeyWord(){
	if(keyWord !== "") return;
	$.ajax({
		url: randomKeyWordUrl,
		type: "POST",
		data: {corpId: $("#corpid").val(), userId: $("#userid").val()},
		success:function(msg)
		{
			if (msg != null && msg != '') {
				$(".tooltip-inner").html(JSON.parse(msg)[0]);
				keyWord = JSON.parse(msg)[0];
			}
		},
		error:function(errorString)
		{
			alertError(errorString.status)
		}
	}); 
	
}

function randomKeyWordForgotPassword(){
	$.ajax({
		url: randomKeyWordUrl,
		type: "POST",
		data: {corpId: $("#corpidForget").val(), userId: $("#useridForget").val()},
		success:function(msg)
		{	
			$(".tooltip-inner").html(JSON.parse(msg)[0]);
		},
		error:function(errorString)
		{
			alertError(errorString.status)
		}
	}); 
	
}

function checkUrl(urlValidation, dataColl) {
	var isValid = false;
    dataColl.forEach(function(entry) {
        if(urlValidation.indexOf(entry) >= 0) {
            isValid = true;
            return;
        }
    });
    return isValid;
}

//reload parent container when login session expired
if(window.name == "login"){
	$("html").css("display", "block");
}else{
    var urlValidation = '' + window.parent.location;
	if(!checkUrl(urlValidation, ["loginRequest", "performLoginExecute", "changeLanguage"])) {
        window.parent.location.reload();
	} else {
        window.location.replace("/");
	}
}

function init() {
    // Clear forms here
    if(document.getElementById("corpId") != null) document.getElementById("corpId").value = "";
	if(document.getElementById("userId") != null) document.getElementById("userId").value = "";
	if(document.getElementById("userPass") != null) document.getElementById("userPass").value = "";
}
window.onload = init;
	
function DropDown(el) {
	this.dd = el;
	this.placeholder = this.dd.children('span');
	this.opts = this.dd.find('ul.dropdown > li');
	this.val = '';
	this.index = -1;
	this.initEvents();
}

DropDown.prototype = {
	initEvents : function() {
		var obj = this;

		obj.dd.on('click', function(event){
			$(this).toggleClass('active');
			return false;
		});

		obj.opts.on('click',function(){
			var opt = $(this);
			obj.val = opt.text();
			obj.index = opt.index();
			obj.placeholder.text(obj.val);
		});
	},
	getValue : function() {
		return this.val;
	},
	getIndex : function() {
		return this.index;
	}
}

$(function() {

	var dd = new DropDown( $('#dd') );

	$(document).click(function() {
		// all dropdowns
		$('.wrapper-dropdown-3').removeClass('active');
	});

});

function alertError(msg,parent){
	window.$("div#alert").removeClass();
	//window.$("div#alert").addClass("alert alert-error");
	window.$("div#alert p").text(msg);
	window.$("div#alert i").removeClass();
	window.$("div#alert i").addClass('icon icon-color icon-close alertIcon');
	window.$("div#alert").fadeIn();
	
	window.$(".close").on( 'click' , function(e) {
		window.parent.$("div#alert").fadeOut();
	});
	
	setTimeout(function(){
		window.$("div#alert").fadeOut();
	},4000);
}

function showPopup(container){
	var data =$(container).html();
	if(data.length < 20) return;
	$("#dialog-popupnews").html(data);
	$("#dialog-popupnews").dialog({
	    resizable : false,
	    height : 500,
	    width : 1000,
	    modal : true,
	    draggable: false,
	    show: {
			effect: "fade",
			duration: 700
		},
		hide: {
			effect: "fade",
			duration: 500
		},
	    
	});
}

if(typeof enableJSCache !== 'undefined'){
	window.top.initCache(enableJSCache);
}

function showHelpPopUp(url){
	$( "#dialog-confirm" ).attr('title', 'Danamon Cash Connect');
	$( ".ui-dialog-title" ).attr('title', 'Danamon Cash Connect');
	$( ".ui-dialog-title" ).text('Danamon Cash Connect');
	$( "#dialog-confirm i" ).remove();
	$( "#dialog-confirm p" ).html('<iframe name="schemaFrame" id="schemaFrame" src="'+url+'" width="100%" height="420" scrolling="no" frameborder="1"/>');

	$( "#dialog-confirm" ).dialog({
		resizable: false,
		height:500,
		width:1000,
		modal: true
	});
}


function encrypt(plainText){
    var iterationCount = 1000;
    var keySize = 128;
	var saltKey = $('#hashingSalt').val();
    var aesUtil = new AesUtil(keySize, iterationCount);
    var ciphertext = aesUtil.encrypt(salt, iv, saltKey, plainText);

    return ciphertext;

}

function callFirstTimeLogin(){
	$("#loginForm").attr('action', fisrtTimeLogin);
	document.forms[0].submit();
}