package com.citruxengine.core;

class CitruxObject {

	public var name:String;
	public var kill:Bool;

	public function new(name:String, params:Dynamic = null) {

		kill = false;

		this.name = name;

		if (params != null) {
			setParams(params);
		}
	}

	public function destroy():Void {

	}

	public function update(timeDelta):Void {

	}

	private function setParams(object:Dynamic):Void {

		for (param in Reflect.fields(object)) {

			try {

				if (Reflect.field(object, param) == "true")
					Reflect.setField(this, param, true);

				else if (Reflect.field(object, param) == "false")
					Reflect.setField(this, param, false);
					
				else
					Reflect.setField(this, param, Reflect.field(object, param));
			
			} catch (e:Dynamic) {

				trace("Warning: The parameter " + param + " does not exist on object : " + name + ", with type : " + this);
			}
		}
	}
}