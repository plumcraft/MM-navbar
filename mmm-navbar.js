/* Weather-Button */


Module.register("mmm-navbar",{

	getScripts: function(){
		return ["modules/mmm-navbar/jquery-3.1.1.js"];
	},
	getStyles: function(){
		return ["weather-icons.css", "mmm-navbar.css", "font-awesome.css"];
	},
	notificationReceived: function(notification, payload, sender){
		if (notification === 'DOM_OBJECTS_CREATED'){
			MM.getModules().exceptModule(this).exceptWithClass('clock').enumerate(function(module){
				module.hide(1000, function(){
				});
			});
		}
	},
	getDom: function(){

		var wrapper = document.createElement("div");
		
		var weatherhidden = true;
		var calendarhidden = true;
		var newshidden = true;

		var weatherbutton = document.createElement("span");
		var calendarbutton = document.createElement("span");
		var newsbutton = document.createElement("span");

		wrapper.className = "center";
		weatherbutton.className = "wi wi-day-rain-mix navbar";
		calendarbutton.className = "fa fa-calendar navbar";	
		newsbutton.className = "fa fa-newspaper-o navbar";		

		var weather = MM.getModules().withClass('mmm-wunderground');
		var calendar = MM.getModules().withClass('calendar');
		var news = MM.getModules().withClass('newsfeed');
	
		wrapper.appendChild(weatherbutton);		
		wrapper.appendChild(calendarbutton);
		wrapper.appendChild(newsbutton);
	
		$(weatherbutton).on("click", function(){
			if(weatherhidden){
				weather[0].show();
				weatherhidden = false;
			}else{
				weather[0].hide();
				weatherhidden = true;
			}
		});

		$(calendarbutton).on("click", function(){
			if(calendarhidden){
				calendar[0].show();
				calendarhidden = false;
			}else{
				calendar[0].hide();
				calendarhidden = true;
			}
		});

		$(newsbutton).on("click", function(){
			if(newshidden){
				news[0].show();
				newshidden = false;
			}else{
				news[0].hide();
				newshidden = true;
			}
		});


		return wrapper;				
		
		Log.info("NavigationBar created");


	}


});	


