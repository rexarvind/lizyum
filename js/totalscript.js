
$(window).load(function () {
	 //alert("test");
    width1 =  ($(".container").width());
	// alert(width1);
	var windowwith1 = $(window).width(), divWidth=0;
	var getwidth1 = ((windowwith1 - width1) / 2);
	$('.fullpage').css({'marginLeft':(-getwidth1)+'px'});
	$('.fullpage').css({'marginRight':(-getwidth1)+'px'});
	$('.fullpage-content').css({'marginLeft':(-getwidth1)+'px'});
	$('.fullpage-content').css({'marginRight':(-getwidth1)+'px'});
	$('.fullpage-content').css({'paddingLeft':(getwidth1)+'px'});
	$('.fullpage-content').css({'paddingRight':(getwidth1)+'px'});
	$('.container-left').css({'paddingLeft':(getwidth1)+'px'});
	$('.container-right').css({'paddingRight':(getwidth1)+'px'});
});

var width = $(window).width();
$(window).resize(function(){
	width2 =  ($(".container").width());
	var windowwith2 = $(window).width(), divWidth=0;
	var getwidth2 = ((windowwith2 - width2) / 2);
	$('.fullpage').css({'marginLeft':(-getwidth2)+'px'});
	$('.fullpage').css({'marginRight':(-getwidth2)+'px'});
	$('.fullpage-content').css({'marginLeft':(-getwidth2)+'px'});
	$('.fullpage-content').css({'marginRight':(-getwidth2)+'px'});
	$('.fullpage-content').css({'paddingLeft':(getwidth2)+'px'});
	$('.fullpage-content').css({'paddingRight':(getwidth2)+'px'});
	$('.container-left').css({'paddingLeft':(getwidth2)+'px'});
	$('.container-right').css({'paddingRight':(getwidth2)+'px'});

});


$(document).ready(function(){
  var img = $("#exampleImage1");
var configObject = {
  sourceUrl: img.attr("data-videourl"),
  triggerElement: "#" + img.attr("id"),
  progressCallback: function() {
    console.log("Callback Invoked.");
  }
};
var videoBuild = new YoutubeOverlayModule(configObject);
  videoBuild.activateDeployment();

  
  });
  
$(document).ready(function(){
  var img = $("#exampleImage2");
var configObject = {
  sourceUrl: img.attr("data-videourl"),
  triggerElement: "#" + img.attr("id"),
  progressCallback: function() {
    console.log("Callback Invoked.");
  }
};
var videoBuild = new YoutubeOverlayModule(configObject);
  videoBuild.activateDeployment();

  
  });
  
$(document).ready(function(){
  var img = $("#exampleImages3");
var configObject = {
  sourceUrl: img.attr("data-videourl"),
  triggerElement: "#" + img.attr("id"),
  progressCallback: function() {
    console.log("Callback Invoked.");
  }
};
var videoBuild = new YoutubeOverlayModule(configObject);
  videoBuild.activateDeployment();

  
  });
  
 $(document).ready(function(){
  var img = $("#exampleImages4");
var configObject = {
  sourceUrl: img.attr("data-videourl"),
  triggerElement: "#" + img.attr("id"),
  progressCallback: function() {
    console.log("Callback Invoked.");
  }
};
var videoBuild = new YoutubeOverlayModule(configObject);
  videoBuild.activateDeployment();

  
  });
  


	

   $(document).ready(function(){
        $('#time-picker').datetimepicker({
            "allowInputToggle": true,
            "showClose": true,
            "showClear": true,
            "showTodayButton": true,
            "format": "HH:mm",
        });
        $('#date-picker').datetimepicker({
            "allowInputToggle": true,
            "showClose": true,
            "showClear": true,
            "showTodayButton": true,
            "format": "MM/DD/YYYY",
        });
    });


$(document).ready(function(){

});



$(document).ready(function() {
     $('#submit-1').click(function() {
		$('#form-box1').animate({ height: 'toggle'}, 200);	  
		$('#form-box2').addClass('active')
     });
	 
	 $('#submit-2').click(function() {
		$('#form-box2').animate({ height: 'toggle'}, 200);	  
		$('#form-box3').addClass('active')
     });
	 $('#submit-3').click(function() {
		$('#form-box3').animate({ height: 'toggle'}, 200);	  
		$('#form-box4').addClass('active')
     });
	 $('#submit-4').click(function() {
		$('#form-box4').animate({ height: 'toggle'}, 200);	  
		$('#form-box5').addClass('active')
     });
	 $('#submit-5').click(function() {
		$('#form-box5').animate({ height: 'toggle'}, 200);	  
		$('#form-box6').addClass('active')
     });
	 $('#submit-6').click(function() {
		$('#form-box6').animate({ height: 'toggle'}, 200);	  
		$('#form-box7').addClass('active')
     });	
	 $('#submit-7').click(function() {
		$('#form-box7').animate({ height: 'toggle'}, 200);	  
		$('#form-box8').addClass('active')
     }); 
	 $('#submit-8').click(function() {
		$('#form-box8').animate({ height: 'toggle'}, 200);	  
		$('#form-box9').addClass('active')
     });
	 $('#submit-9').click(function() {
		$('#form-box9').animate({ height: 'toggle'}, 200);	  
		$('#form-box10').addClass('active')
     });
	  $('#submit-10').click(function() {
		$('#form-box10').animate({ height: 'toggle'}, 200);	  
		$('#form-box11').addClass('active')
     });
	 
	 
	 $('#back-btn-1').click(function() {
		$('#form-box1').animate({ height: 'toggle'}, 200);	
		$('#form-box1').addClass('active');  
		$('#form-box2').removeClass('active');
     });
	  
	   $('#back-btn-2').click(function() {
		$('#form-box2').animate({ height: 'toggle'}, 200);	
		$('#form-box2').addClass('active');  
		$('#form-box3').removeClass('active');
     });
	 
	  $('#back-btn-3').click(function() {
		$('#form-box3').animate({ height: 'toggle'}, 200);	
		$('#form-box3').addClass('active');  
		$('#form-box4').removeClass('active');
     });
	 
	 $('#back-btn-4').click(function() {
		$('#form-box4').animate({ height: 'toggle'}, 200);	
		$('#form-box4').addClass('active');  
		$('#form-box5').removeClass('active');
     });
	 
	 $('#back-btn-5').click(function() {
		$('#form-box5').animate({ height: 'toggle'}, 200);	
		$('#form-box5').addClass('active');  
		$('#form-box6').removeClass('active');
     });
	 
	 $('#back-btn-6').click(function() {
		$('#form-box6, #form-box6').animate({ height: 'toggle'}, 200);	
		$('#form-box6').addClass('active');  
		$('#form-box7').removeClass('active');
     });
	 $('#back-btn-7').click(function() {
		$('#form-box7').animate({ height: 'toggle'}, 200);	
		$('#form-box7').addClass('active');  
		$('#form-box8').removeClass('active');
     });
	 
	 $('#back-btn-8').click(function() {
		$('#form-box8').animate({ height: 'toggle'}, 200);	
		$('#form-box8').addClass('active');  
		$('#form-box9').removeClass('active');
     });
	 
	 $('#back-btn-9').click(function() {
		$('#form-box9').animate({ height: 'toggle'}, 200);	
		$('#form-box9').addClass('active');  
		$('#form-box10').removeClass('active');
     });
	 
	 $('#back-btn-10').click(function() {
		$('#form-box10').animate({ height: 'toggle'}, 200);	
		$('#form-box10').addClass('active');  
		$('#form-box11').removeClass('active');
     });
	 $('#back-btn-11').click(function() {
		$('#form-box11').animate({ height: 'toggle'}, 200);	
		$('#form-box11').addClass('active');  
		$('#form-box12').removeClass('active');
     });
	 
	});
