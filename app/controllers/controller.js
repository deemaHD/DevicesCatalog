function Controller(devicesArray){
	var devices = new Devices(devicesArray);
	var view = new View(devices);
}