function Devices(devices){

	var that = this;

	this.devicesList = devices;
	
	this.devicesCart= [];

	this.addToCart = function (type, name, model, login, password){
    	var order = {};
    		order.type = type;
    		order.name = name;
    		order.model = model;
    		order.login = login;
    		order.password = password;
    		order.characteristics;
    		order.price;
		    	for (var i = 0; i < this.devicesList.length; i++){

					if (type === this.devicesList[i].type && name === this.devicesList[i].name && model === this.devicesList[i].model.split(" ").join('_')){
						order.characteristics = this.devicesList[i].info;
						order.price = this.devicesList[i].price;
					} 			
				}    			
    		
			if(order.type && order.name && order.model && order.login && order.password && order.characteristics && order.price){
				this.devicesCart.push(order);

    			return	"<b>Товар:</b><br>" + order.type + ' ' + order.name + ' ' + order.model 

    			+ '<br> <b>Характеристики:</b><br>' + order.characteristics + "<br> <b>Цена:</b> " + order.price + ' грн';
			}else{
				return undefined;
			}
    }
}