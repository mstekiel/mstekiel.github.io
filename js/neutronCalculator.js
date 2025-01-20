var value = document.getElementById('input_value');
var unit = document.getElementById('input_unit');


function neutron_calculate() {
	switch (unit.value) {
		case "energy": 
			in_energy = value.value;
			break;
		case "wavevector": 
			in_energy = 2.072124872178741*value.value*value.value;
			break;
		case "wavelength": 
			in_energy = 81.80421103224809/(value.value*value.value);
			break;
		case "velocity": 
			in_energy = 5.227037632104737e-06*value.value*value.value;
			break;
		case "frequency": 
			in_energy =  4.135667730996764*value.value;
			break;
		case "temperature": 
			in_energy =  0.08617333333141594*value.value;
			break;
		default: in_energy = 0;
	}

	// var in_property_holder = document.getElementById('in_property');
	// in_property_holder.innerText = unit.value
	console.log(unit.value)

	precision = value.value.replace(/[^0-9]/gi, "").length
	console.log(precision)
	
	var out = document.getElementById('out_energy');
	out.innerText = Number(in_energy).toPrecision(precision);
	
	var out = document.getElementById('out_wavevector');
	out.innerText = Math.sqrt( in_energy/2.072124872178741 ).toPrecision(precision);
	
	var out = document.getElementById('out_wavelength');
	out.innerText = Math.sqrt( 81.80421103224809 / in_energy).toPrecision(precision);
	
	var out = document.getElementById('out_velocity');
	out.innerText = Math.sqrt( in_energy/5.227037632104737e-06 ).toPrecision(precision);
	
	var out = document.getElementById('out_frequency');
	out.innerText = (in_energy / 4.135667730996764).toPrecision(precision);

	var out = document.getElementById('out_temperature');
	out.innerText = Number( in_energy / 0.08617333333141594).toPrecision(precision);
}