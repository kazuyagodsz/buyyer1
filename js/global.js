function getParentFrame(frameName){
    var wparent = window.parent; 
    while($(wparent).attr('name') !== frameName){
    	wparent = wparent.parent; 
    	if(wparent.parent == wparent){ return null; }
    }
    return wparent;
}

function showConfirmModal(strFun, strMsg){

	window.parent.$("#dialog-sysparam").attr('title', 'Invalid Input');
	window.parent.$("#dialog-sysparam i").addClass('icon32 icon-color icon-triangle-s confirmIcon');
	window.parent.$("#dialog-sysparam p").text(strMsg);
	window.parent.$("#dialog-sysparam").dialog({
	    resizable : true,
	    height : 200,
	    width : 400,
	    modal : true,
	    buttons : [
		    {
		        html : '<i class="icon icon-black icon-cancel"></i> Ok',
		        "class" : 'btn',
		        click : function(){
			        window.parent.$(this).dialog("close");
		        }
		    }
	    ]
	});

}

function imageFileOnly(e){
	if(!isExtensionValid(e.value, ["jpeg","jpg","bmp","png"])){
		alertError('File type is not supported.');
	    e.value='';
	}
}

function isExtensionValid(filename, extension){
	var ext = (filename.match(/\.([^\.]+)$/)[1] + "").toLowerCase();	
	var valid = false;
	for(var i = 0; i < extension.length; i++){
		if(ext === extension[i].toLowerCase()) valid = true;
	}
	return(valid);
}

function showConfirmRecordReplacement(strFun, data){

	window.parent.$("#dialog-confirm-replace").attr('title', 'Record Replacement ?');
	window.parent.$("#dialog-confirm-replace i").addClass('icon32 icon-color icon-triangle-s confirmIcon');
	window.parent.$("#dialog-confirm-replace p").text(
	        'These items will be permanently replace the record. Are you sure?');

	window.parent.$("#dialog-confirm-replace").dialog({
	    resizable : true,
	    height : 200,
	    width : 400,
	    modal : true,
	    buttons : [
	            {
	                html : '<i class="icon icon-white icon-check"></i> Yes',
	                "class" : 'btn btn-primary',
	                click : function(){
		                window.parent.$(this).dialog("close");
		                var fn = window[strFun];
		                if(typeof fn === 'function'){
			                fn(data);
		                }
	                }
	            }, {
	                html : '<i class="icon icon-black icon-cancel"></i> Cancel',
	                "class" : 'btn',
	                click : function(){
		                window.parent.$(this).dialog("close");
	                }
	            }
	    ]
	});

}

function showConfirm(strFun, data){

	window.parent.$("#dialog-confirm").attr('title', confirmDeleteNoRecoverTitle);
	window.parent.$("#dialog-confirm i").addClass('icon32 icon-color icon-triangle-s confirmIcon');
	window.parent.$("#dialog-confirm p").text(
		ConfirmDeleteNoRecoverMessage);

	window.parent.$("#dialog-confirm").dialog({
	    resizable : true,
	    height : 200,
	    width : 400,
	    modal : true,
	    buttons : [
	            {
	                html : '<i class="icon icon-white icon-trash"></i> Delete',
	                "class" : 'btn btn-primary',
	                click : function(){

		                window.parent.$(this).dialog("close");

		                var fn = window[strFun];
		                if(typeof fn === 'function'){
			                fn(data);
		                }

	                }
	            }, {
	                html : '<i class="icon icon-black icon-cancel"></i> Cancel',
	                "class" : 'btn',
	                click : function(){
		                window.parent.$(this).dialog("close");
	                }
	            }
	    ]
	});

}
function showConfirmDelete(strFun, data){
	window.parent.$("#dialog-confirm").attr('title', 'Delete Record(s)?');
	window.parent.$("#dialog-confirm i").addClass('icon32 icon-color icon-triangle-s confirmIcon');
	window.parent.$("#dialog-confirm p").text('Are you sure you want to permanently delete the record(s)?');

	window.parent.$("#dialog-confirm").dialog({
	    resizable : true,
	    height : 200,
	    width : 400,
	    modal : true,
	    buttons : [
	            {
	                html : '<i class="icon icon-white icon-trash"></i> Delete',
	                "class" : 'btn btn-primary',
	                click : function(){

		                window.parent.$(this).dialog("close");

		                var fn = window[strFun];
		                if(typeof fn === 'function'){
			                fn(data);
		                }

	                }
	            }, {
	                html : '<i class="icon icon-black icon-cancel"></i> Cancel',
	                "class" : 'btn',
	                click : function(){
		                window.parent.$(this).dialog("close");
	                }
	            }
	    ]
	});
}

function alertSuccess(msg, parent){
	var sel = window.parent;
	sel.$("div#alert").removeClass();
	sel.$("div#alert").addClass("alert alert-success");
	sel.$("div#alert p").text(msg);
	sel.$("div#alert i").removeClass();
	sel.$("div#alert i").addClass('icon icon-color icon-check alertIcon');
	sel.$("div#alert").fadeIn();

	sel.$(".close").on('click', function(e){
		sel.$("div#alert").fadeOut();
	});

	setTimeout(function(){
		sel.$("div#alert").fadeOut();
	}, 4000);
}

function alertSuccessDialog(msg, parent){

	$("div#alert").removeClass();
	$("div#alert").addClass("alert alert-success-dialog");
	$("div#alert p").text(msg);
	$("div#alert i").removeClass();
	$("div#alert i").addClass('icon icon-color icon-check alertIcon');
	$("div#alert").fadeIn();
	$("div#alert").css('color', '#000000');

	$(".close").on('click', function(e){
		$("div#alert").fadeOut();
	});

	setTimeout(function(){
		$("div#alert").fadeOut();
	}, 4000);
}

function alertError(msg, parent){
	var sel= window.parent;
	sel.$("div#alert").removeClass();
	sel.$("div#alert").addClass("alert alert-error");
	sel.$("div#alert p").text(msg);
	sel.$("div#alert i").removeClass();
	sel.$("div#alert i").addClass('icon icon-color icon-close alertIcon');
	sel.$("div#alert").fadeIn();
	sel.$(".close").on('click', function(e){
		sel.$("div#alert").fadeOut();
	});

	setTimeout(function(){
		sel.$("div#alert").fadeOut();
	}, 4000);
}

function alertErrorDialog(msg, parent){

	$("div#alert").removeClass();
	$("div#alert").addClass("alert alert-error-dialog");
	$("div#alert p").text(msg);
	$("div#alert i").removeClass();
	$("div#alert i").addClass('icon icon-color icon-close alertIcon');
	$("div#alert").fadeIn();
	$("div#alert").css('color', '#000000');

	$(".close").on('click', function(e){
		$("div#alert").fadeOut();
	});

	setTimeout(function(){
		$("div#alert").fadeOut();
	}, 4000);
}

// auto scaling is implemented
// not deleted to prevent other code that using this function come to stop
function scalling(){
}
function reScalling(x){
}

function changeIframeSrc(url){
	window.parent.$('#mainFrame').attr('src', url);
}

function renderMultiple(id, dataMultiple){

	var optionuser = eval(dataMultiple);

	var multi = '<div class="list-content"><input type="hidden" id="txtMulti' + id + '" name="txtMulti' + id
	        + '" /><input type="hidden" id="txtOption' + id + '" name="txtOption' + id + '" /><select id="selMulti'
	        + id + '" name="selMulti' + id + '" multiple="">';

	$.each(optionuser, function(index, items){
		multi += '<option value="' + items.id + '">' + items.text + '</option>';
	});

	multi += '</select><button id="list-button-clear-'
	        + id
	        + '" type="button" class="btn btn-danger list-button-clear"><i class="icon icon-white icon-trash" /></button></div>';

	return multi;

}

function setColorFontPerRowByIndex(idx, status, style){
	$("#globalTable tbody tr td").each(function(){
		if($(this).index() == idx){
			if($(this).text().toUpperCase() == status){
				$(this.parentNode).addClass(style);
			}
		}
	});
}

function setColorFontPerRowByData(data, idx, status, style){

	$.each(data, function(i, b){
		if(b._aData[idx].toUpperCase() == status){
			var td = $("#globalTable tbody tr")[b.nTr._DT_RowIndex];
			$(td).addClass(style);
		}
	});
}

function messageAlert(){

	var message = $('.message').text().split("*");
	$('.message').text('');
	$('.message').append('<div class="title">' + message[0] + '</div>');
	for(var i = 1, len = message.length; i < len; i++){
		if(message[i] !== undefined){
			$('.message').append('<div class="content">' + message[i] + '</div>');
		}
	}

	if($('.message').attr('data') == 'success'){
		$('.message .title').addClass('text-success');
		$('.message .content').addClass('text-success');
		$('.message').addClass('msgSuccess');		
	}else{
		$('.message .title').addClass('text-error');
		$('.message .content').addClass('text-error');
		$('.message').addClass('msgError');
	}
	
	$('.message').attr('style','display: block;');
	$('.message').fadeIn('slow');

}

function onlyNum(e){

	var key = window.event ? e.keyCode : e.which;

	if((key > 47 && key < 58) || key == 8 || key === 0 || key == 46) return true;

	return false;

}
function onlyPhoneNumbers(evt){
	if(onlyNum(evt) === true) return true;

	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if(charCode == 59 || charCode == 20 || charCode == 45 || charCode == 46 || charCode == 32){
		return true;
	}
	return false;
}

this.vtip = function(){
	this.xOffset = 5; // x distance from mouse
	this.yOffset = 15; // y distance from mouse

	$(".vtip").unbind().hover(function(e){
		this.t = this.title;
		this.title = '';
		this.top = (e.pageY + yOffset);
		this.left = (e.pageX + xOffset);

		$('body').append('<p id="vtip"><img id="vtipArrow" />' + this.t + '</p>');
		$('p#vtip').css("top", this.top + "px").css("left", this.left + "px").fadeIn("slow");

	}, function(){
		this.title = this.t;
		$("p#vtip").fadeOut("slow").remove();
	}).mousemove(function(e){
		this.top = (e.pageY + yOffset);
		this.left = (e.pageX + xOffset);

		$("p#vtip").css("top", this.top + "px").css("left", this.left + "px");
	});

};

// checkbox labeling function
var checkLabel = function(){

	if($(this).is(':checked')){
		$(this).parent().find('span').html('Yes');
		$(this).parent().find('span').removeClass('label-warning');
		$(this).parent().find('span').addClass('label-info');
	}else{
		$(this).parent().find('span').html('No');
		$(this).parent().find('span').addClass('label-warning');
		$(this).parent().find('span').removeClass('label-info');
	}

	$(this).parent().parent().find('span').addClass('label_width');

};

$.fn.checkLabel = checkLabel;

// create dropdown html script
function make_dropdown(className, list, val){

	var selected = "";

	var dropdown = '<select class="' + className + '" style="width:190px;">';
	dropdown += '<option value="" ></option>';
	$.each(list, function(i, select){

		if(val == select.id){
			selected = 'selected="true"';
		}else{
			selected = "";
		}

		dropdown += '<option value="' + select.id + '" ' + selected + ' >' + select.text + '</option>';

	});

	dropdown += "</select>";

	return dropdown;

}

function make_infinite(className, aplaceholder, aurl){

	$("." + className).select2({
	    placeholder : aplaceholder,
	    allowClear : true,
	    minimumInputLength : 1,
	    ajax : {
	        url : aurl,
	        dataType : 'json',
	        quietMillis : 100,
	        data : function(term, page){
		        return {
		            q : term,
		            page_limit : 9,
		            page : page
		        };
	        },
	        results : function(data, page){
		        var more = page < data.totalPage;

		        return {
		            results : data.data,
		            more : more
		        };
	        }
	    },
	    dropdownCssClass : "bigdrop",
	    escapeMarkup : function(m){
		    return m;
	    }
	});

}

function make_calendar_date(className){

	$("." + className).datepicker({
	    changeMonth : true,
	    changeYear : true,
	    dateFormat : 'dd M yy',
	    showAnim : 'slide',
	});

}

function make_input(className, value, addtional){
	return '<input type="text" class="' + className + '" value="' + value + '" ' + addtional + ' />';
}

function make_hidden(className, value, addtional){
	return '<input type="hidden" class="' + className + '" value="' + value + '" ' + addtional + ' />';
}

function make_check(className, value, dataCheck, withLabel){

	var check = "", label = "";

	if(withLabel){

		if(dataCheck == "Y"){
			check = 'checked="true"';
			label = '<span class="label label_width label-info">Yes</span>';
		}else{
			label = '<span class="label label_width label-warning">No</span>';
		}

	}

	return '<input type="checkbox" class="' + className + '" value="' + value + '" ' + check + ' />' + label;

}

function make_check_custom(className, value, dataCheck, withLabel){

	var check = "", label = "";

	if(withLabel){

		if(dataCheck == "Y"){
			check = 'checked="true"';
			label = '<span class="label label_width label-info">Yes</span>';
		}else{
			label = '<span class="label label_width label-warning">No</span>';
		}

	}

	return '<input type="checkbox" class="' + className + '" value="' + value + '" ' + check + ' />' + label;

}

function validEmail(email){
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9._-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function showConfirmChangeScreen(strFun, strMsg){

	window.parent.$("#dialog-sysparam").attr('title', areYouSure);
	window.parent.$("#dialog-sysparam i").addClass('icon32 icon-color icon-triangle-s confirmIcon');
	window.parent.$("#dialog-sysparam p").text(
		confirmLeavePage);

	window.parent.$("#dialog-sysparam").dialog({
	    resizable : true,
	    height : 200,
	    width : 400,
	    modal : true,
	    buttons : [

	            {
	                html : buttonLeavePage,
	                "class" : 'btn',
	                click : function(){

		                window.parent.$(this).dialog("close");

		                var fn = window[strFun];
		                if(typeof fn === 'function'){
			                fn();
		                }

	                }
	            },

	            {
	                html : buttonStayPage,
	                "class" : 'btn btn-primary',
	                click : function(){
		                window.parent.$(this).dialog("close");
	                }
	            }

	    ]
	});
}

function specialCharacter(reg){
	var regex = '^[a-zA-Z 0-9]+$';
	return reg.match(regex);
}

function showConfirmSubmit(strFun, strMsg){
	window.parent.$("#dialog-sysparam").attr('title', areYouSure);
	window.parent.$("#dialog-sysparam i").addClass('icon32 icon-color icon-triangle-s confirmIcon');
	window.parent.$("#dialog-sysparam p").text(strMsg);

	window.parent.$("#dialog-sysparam").dialog({
	    resizable : true,
	    height : 200,
	    width : 400,
	    modal : true,
	    buttons : [

	            {
	                html : buttonSubmit,
	                "class" : 'btn btn-success',
	                click : function(){

		                window.parent.$(this).dialog("close");

		                var fn = window[strFun];
		                if(typeof fn === 'function'){
			                fn();
		                }

	                }
	            },

	            {
	                html : buttonCancel,
	                "class" : 'btn btn-success',
	                click : function(){
		                window.parent.$(this).dialog("close");
	                }
	            }

	    ]
	});
	window.parent.$('.ui-dialog-buttonset').show();
}

function checkSignature(signatureUrl){
	$.ajax({
	    url : signatureUrl,
	    contentType : "application/json",
	    type : "GET",
	    success : function(result){
		    if(jQuery.type(result) === 'boolean'){
			    if(result){
				    showConfirmSubmit('doSubmit', confirmSignatureExists);
			    }else{
				    showConfirmSubmit('doSubmit', confirmSubmitMsg);
			    }
		    }else{
			    alertError(signatureChangedError);
		    }
	    },
	    error : function(errorString){
		    alertError(errorString);
	    }
	});
}

function popUpRepair(strFun, url){
	window.parent.parent.$("#dialog-confirm").attr('title', "Repair");
	window.parent.parent.$("#dialog-confirm p").html(
	        '<iframe id="repairFrame" name="repairFrame" src="' + url
	                + '" width="100%" height="300" scrolling="no" frameborder="1"/>');

	window.parent.parent.$("#dialog-confirm").dialog(
	        {
	            resizable : true,
	            height : 300,
	            width : 800,
	            modal : true,
	            buttons : [
	                    {
	                        html : '<i class="icon icon-black icon-cancel"></i> Close',
	                        "class" : 'btn',
	                        click : function(){
		                        window.parent.parent.$(this).dialog("close");
		                        $("#btnDataRequest").show();
	                        }
	                    },
	                    {
	                        html : '<i class="icon icon-white icon-save"></i> Submit',
	                        "class" : 'btn btn-primary',
	                        click : function(){
		                        $('#repairReason').attr('value',
		                                window.parent.parent.$('#repairFrame').contents().find('#repairReason').val());
		                        window.parent.parent.$(this).dialog("close");

		                        if(typeof strFun === 'function'){
			                        strFun();
		                        }else{
			                        var fn = window[strFun];
			                        if(typeof fn === 'function'){
				                        fn();
			                        }
		                        }
	                        }
	                    }
	            ]
	        });

}

function popUpCancelTransaction(strFun){

	window.parent.parent.$("#dialog-confirm").attr('title', "Cancel Transaction");
	window.parent.parent
	        .$("#dialog-confirm p")
	        .html(
	                'You are about to cancel the standing instruction transaction for being executed. Are you sure to proceed?');

	window.parent.parent.$("#dialog-confirm").dialog({
	    resizable : true,
	    height : 170,
	    width : 400,
	    modal : true,
	    buttons : [
	            {
	                html : '<i class="icon icon-black icon-cancel"></i> Close',
	                "class" : 'btn',
	                click : function(){
		                window.parent.parent.$(this).dialog("close");
	                }
	            }, {
	                html : '<i class="icon icon-white icon-save"></i> Ok',
	                "class" : 'btn btn-primary',
	                click : function(){
		                window.parent.parent.$(this).dialog("close");

		                if(typeof strFun === 'function'){
			                strFun();
		                }else{
			                var fn = window[strFun];
			                if(typeof fn === 'function'){
				                fn();
			                }
		                }
	                }
	            }
	    ]
	});

}

var tempReason = "";
var tempResponseCode = "";
$(document).ready(function(){
	if($("#reason").length > 0 && $("#responseCode").length > 0){
		setInterval(
			function(){
				if(tempReason != $("#reason").val()){
					tempReason = $("#reason").val();
					if(tempResponseCode !== $("#responseCode").val()) $("#responseCode").val("");
				}else if($("#responseCode").val().length - tempResponseCode.length > 3){
					$("#responseCode").val("");
					tempResponseCode = "";
				}else{
					tempResponseCode = $("#responseCode").val();
				}
			},
			1
		);
	}
});

function checkIsButtonRejectClicked(status){
	if(status == 'N'){
		if($('#challengeCodeTag')){
			$('#challengeCodeTag').show();
			$('#responseCodeTag').show();
			$('#inputReason').show();
			$('#btnApprove').hide();
			//prevent autofill
			$("#reason").val("");
			$("#responseCode").val("");

			return true;
		}
	}

	else{
		return false;
	}
}

function checkIsButtonApprovedClicked(status){
	if(status == 'N'){
		if($('#challengeCodeTag')){
			$('#challengeCodeTag').show();
			$('#responseCodeTag').show();
			$('#btnReject').hide();
			//prevent autofill
			$("#reason").val("");
			$("#responseCode").val("");

			return true;
		}
	}

	else{
		return false;
	}
}

function checkIsButtonSubmitClicked(status){
	if(status == 'N' && $('#challengeCodeTag').length > 0){
		if($('#challengeCodeTag')){
			$('#challengeCodeTag').show();
			$('#responseCodeTag').show();
			//prevent autofill
			$("#responseCode").val("");
			return true;
		}
	}else{
		return false;
	}
}

function isBackPT(action, doBackPT, ptID){
	if(action == 'N'){
		changeIframeSrc(doBackPT);
	}

	else{
		changeIframeSrc(detailPTUrl + '?pendingTaskId=' + ptID);
	}
}

(function(){
	var beforePrint = function(){
		for(var i = 1; i <= 12; i++){
			$(".col-sm-" + i).toggleClass("col-sm-" + i, false).toggleClass("col-xs-" + i, true);
			$(".col-md-" + i).toggleClass("col-md-" + i, false).toggleClass("col-xs-" + i, true);
		}
	};
	var afterPrint = function(){
		for(var i = 1; i <= 12; i++){
			$(".col-xs-" + i).toggleClass("col-sm-" + i, true).toggleClass("col-xs-" + i, false);
		}
	};

	if(window.matchMedia){
		var mediaQueryList = window.matchMedia('print');
		if(mediaQueryList != null){
			mediaQueryList.addListener(function(mql){
				if(mql.matches){
					beforePrint();
				}else{
					afterPrint();
				}
			});
		}

	}

	window.onbeforeprint = beforePrint;
	window.onafterprint = afterPrint;
}());

var MIN_AMOUNT = "0";
var ADDITION_DECIMAL = "00";
var SEPERATOR_DECIMAL = ".";
var ZERO = 0;

function onlyCheckDecimal(e, positifLength, decimalLength){
	var key = window.event ? e.keyCode : e.which;
	var price = $(e.target).val() + String.fromCharCode(key);
	var maxLength = positifLength + decimalLength;

	if(key == 8 || key == 0){
		return true;
	}

	var regex = new RegExp("^\\d{0," + positifLength + "}((\\.[0-9]{1," + decimalLength + "})|\\.)?$");

	/**
	 * saat outfocus, jika nilai hanya 100. , maka akan diganti menjadi 100.00
	 */
	if($(e.target).attr("decimal") == undefined){
		if(e.target.id.toString().indexOf("_money") >= 0) {
            $(e.target).focus(moneyFocusEvent(e));
		}
		$(e.target).blur(moneyBlurEvent(e));

		$(e.target).keyup(function(){
            var val = $(this).val();
			var positifLength = $(this).attr("positif");

			// 1. penjagaan angka 0 di depan (contoh: 099 -> 99)
			if(val.length > 1){
				val = returnZeroZeroToZero(val);
			}

			// 2. penjagaan dot
			val = checkDot(val);

			// 3. pencegahan max positif length jika titik decimal di delete
			val = checkPositifLengthPhase2(val, positifLength);

			// 4. pencegahan max decimal length jika titik decimal di delete
			val = checkDecimalLengthPhase2(val, decimalLength);

			// 5. set value
			$(this).val(val);

		});

		$(e.target).attr("positif", positifLength);
		$(e.target).attr("decimal", decimalLength);
	}

	if(regex.test(price) == false){
		return false;
	}else{
	}
}

function moneyFocusEvent(e) {
    console.log('::: moneyFocusEvent');
    $('#' + e.target.id).val(revertMoney($('#' + e.target.id).val()));
}

function moneyBlurEvent(e) {
    console.log('::: moneyBlurEvent');
    $(e.target).blur(function(){
        var p = $(this).val();
        var realId = e.target.id.toString().replace(/_money/, "");
        if(p.length > 0){
            if(p.charAt(p.length - 1) == SEPERATOR_DECIMAL) {
                $(this).val(p + ADDITION_DECIMAL);
                if(e.target.id.toString().indexOf("_money") >= 0) {
                    $('#' + realId).val(p + ADDITION_DECIMAL);
                }
            }
        }
        if(e.target.id.toString().indexOf("_money") >= 0) {
            // $(this).val(p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            var arr = p.toString().split(".");
            $(this).val(arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (arr.length > 1 && arr[1].length > 0 ? ("." + arr[1]) : ''));

            var newVal = revertMoney($(this).val());
            $('#' + realId).val(newVal);
        }
    });
}

function revertMoney(value) {
    if (value === null || value === '' || value === undefined) return '';
    var v = value.toString().replace(/[^\d.]/g, '');
    v = v.slice(0, v.indexOf('.') >= 0 ? v.indexOf('.') + 8 : undefined);
    return v;
}

function makeMoney(value) {
    if (value === null || value === '' || value === undefined) return '';
    var v = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return v;
}

function checkDot(val){
	if(val.length > 0){
		if(val[0] == SEPERATOR_DECIMAL){
			val = "0" + val;
		}
	}

	return val;
}

function checkPositifLengthPhase2(val, positifLength){
	var strs = new Array();
	strs = val.split(SEPERATOR_DECIMAL);

	if(strs.length > 0){
		var p = strs[0];
		if(p.length > positifLength){
			p = p.slice(0, positifLength);
			val = p;
		}
	}

	return val;
}

function checkDecimalLengthPhase2(val, decimalLength){
	var strs = new Array();
	strs = val.split(SEPERATOR_DECIMAL);

	if(strs.length > 1){
		var p = strs[1];
		if(p.length > decimalLength){
			p = p.slice(0, decimalLength);
			val = strs[0] + SEPERATOR_DECIMAL + p;
		}
	}

	return val;
}

function returnZeroZeroToZero(val){
	if(val.length > 1){
		if(val[0] == ZERO && (val[1] == ZERO || val[1] != SEPERATOR_DECIMAL)){
			val = val.slice(1, val.length);
			return returnZeroZeroToZero(val);
		}
	}

	return val;
}

/**
 * digunakan untuk view format number di browser (LABEL)
 */
function formatNumberFromString(numStr){
	if(numStr == null) return "0";
	
	if(typeof numStr == 'number'){
		numStr = numStr.toString();
	}

	var strs = new Array();
	strs = numStr.split(".");

	if(strs.length > 1){
		var positifNum = String(roundingForZero(strs[0]));
		positifNum = String(roundingForPositif(positifNum));
		return positifNum.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + roundingForDecimal(strs[1]);

	}else{
		if(numStr == "" || numStr == "Unlimited"){
			return numStr;

		}else{
			var positifNum = String(roundingForZero(numStr));
			positifNum = String(roundingForPositif(positifNum));
			return positifNum.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); // +
			// ".00";

		}
	}

}

function roundingForPositif(decimalStr){
	var decimalStrFinal = roundingForZero(decimalStr);
	return decimalStrFinal == ZERO ? ZERO : decimalStrFinal;
}

function roundingForZero(decimalStr){
	var parseNum = parseInt(decimalStr);
	return parseNum == ZERO ? ZERO : decimalStr;
}

function roundingForDecimal(decimalStr){
	var decimalStrFinal = roundingForZero(decimalStr);
	return decimalStrFinal == ZERO ? "" : "." + decimalStrFinal;
}

function onlyAlphaNumeric(event){ 
	var keyCode = event.keyCode || event.which;
	var str = String.fromCharCode(event.which);

	if(str === '.'){
		event.preventDefault();
		return false;
	}

	if(keyCode === 8 || keyCode === 32 || keyCode === 46 || (keyCode >= 48 && keyCode <= 57)
	        || (keyCode >= 65 && keyCode <= 90) || (event.which === 0) || (keyCode >= 97 && keyCode <= 122)){
		return true;
	}

	event.preventDefault();
	return false;
}

function onlyAlphaNumericWithoutSpace(event){ 
	var keyCode = event.keyCode || event.which;
	var str = String.fromCharCode(event.which);

	if(str === '.'){
		event.preventDefault();
		return false;
	}

	if(keyCode === 8 || keyCode === 46 || (keyCode >= 48 && keyCode <= 57)
	        || (keyCode >= 65 && keyCode <= 90) || (event.which === 0) || (keyCode >= 97 && keyCode <= 122)){
		return true;
	}

	event.preventDefault();
	return false;
}

function checkNumericAmount(amount){
    return $.isNumeric(amount);
}