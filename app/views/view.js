function View(devices){
	var devicesInput = $('#devices'),
		devicesTypeInput = $('#devicesType'),
		devicesModelInput  = $('#devicesModel'),
		infoOrderWatch;
	
devicesInput.append('<option value=' + devices.devicesList[0].type + '>' + devices.devicesList[0].type + '</option>');

//Generating devices options	
	for (var i = 1; i < devices.devicesList.length; i++){
			var flagDevices = false;	
	    for(var j = 0; j < devicesInput.children().length; j++){
			if (devicesInput.children()[j].getAttribute("value") === devices.devicesList[i]["type"]){
				flagDevices = true;
			}	
		}
		if (!flagDevices){
			devicesInput.append('<option value=' + devices.devicesList[i]["type"] + '>' + devices.devicesList[i]["type"] + '</option>');
		}
	}	

//Generating types of devices regards to the chosed device
	
	$('input[list="devices"]').click(function(){
		$('input[list="devices"]').val("");
		$('input[list="devicesType"]').val("");
    	$('input[list="devicesModel"]').val("");
    	removeOptions(devicesTypeInput);
    	removeOptions(devicesModelInput);
    	infoOrderWatch = null;
	});
	
    $('input[list="devices"]').change(function(){
    	for (var i = 0; i < devices.devicesList.length; i++){
			var flagDevices = false;	
		    for(var j = 0; j < devicesTypeInput.children().length; j++){
		    	if (devicesTypeInput.children()[j]){
					if (devicesTypeInput.children()[j].getAttribute("value") === devices.devicesList[i]["name"]){
						flagDevices = true;
					}
				}			
			}

			if (!flagDevices && devices.devicesList[i]["type"] === $('input[list="devices"]').val()){
				devicesTypeInput.append('<option value=' + devices.devicesList[i]["name"] + '>' + devices.devicesList[i]["name"] + '</option>');
			}
		}	
    });  

//Generating models of devices regards to the choosen device && types
    $('input[list="devicesType"]').change(function(){
        
    	for (var i = 0; i < devices.devicesList.length; i++){
			var flagDevices = false;	
		    for(var j = 0; j < devicesModelInput.children().length; j++){
		    	if (devicesModelInput.children()[j]){
					if (devicesModelInput.children()[j].getAttribute("value") === devices.devicesList[i]["model"]){
						flagDevices = true;
					}
				}			
			}
			
			if (!flagDevices && devices.devicesList[i]["name"] === $('input[list="devicesType"]').val()){
					var str = devices.devicesList[i]["model"].split(' ').join('_');
				devicesModelInput.append('<option value='+ str+'>');
			}
		}	
    });
//Action on click buttob "Добавить в корзину"
    $(".addToCart").click(function(){
    	infoOrderWatch = devices.addToCart($('input[list="devices"]').val(), $('input[list="devicesType"]').val(), $('input[list="devicesModel"]').val(), $('.login').val(), $('.password').val());
    	if(!infoOrderWatch){
  			alert("Заполните все поля формы !");
  		}else{

  			if (!$("table").hasClass('open')){
  				$("table").toggleClass('open');
  				$("table").removeClass('close');
  			}

  			var table = document.querySelector(".table tbody");
  			table.innerHTML ="";
  			fillTable(table, devices.devicesCart);	
  		}
    });
//Action on click buttob "Просмотреть""
    $(".watch").click(function(event){
  		if(!infoOrderWatch){
  			$(".modal-title").text("Добавьте заказ в корзину!");
  		}else{
    		$('.modal-body').html(infoOrderWatch);
  		}	
    }); 
//Action on click buttob "Оплатить"
    $('.payment').click(function(){
    	if(!devices.devicesCart.length){
  			$(".modal-title").text("Добавьте заказ в корзину!");
  		}else{
  			$('.modal-title').text("Что пойдет на сервер ?");
    		$('.modal-body').text(JSON.stringify(devices.devicesCart));
  		}
    });

    function removeOptions(input){
    	for( var i = 0; i < input.children().length; i++){
    		input.children()[i].remove();
    	}
    }

    function clearTable(table){
    	while(table.lastchild){
    		table.removeChild(table.lastchild);
    	}
    }

    function fillTable(table, orders){
    	for( var i = 0 ; i < orders.length; i++){
    		var tr = document.createElement('tr');
    		tr.innerHTML = '<tr><td>' + orders[i].type + '</td><td>' + orders[i].name + '</td><td>' + orders[i].model + '</td>' 
    			+ '<td>' + orders[i].price + '</td><td>' + orders[i].login + '</td></tr>';
    		table.appendChild(tr);
    	}
    } 
}