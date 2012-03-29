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

				Reflect.callMethod(this, Reflect.field(this, "set" + param.charAt(0).toUpperCase() + param.substr(1)), [Reflect.field(object, param)]);
			
			} catch (e:Dynamic) {

				trace("Warning: The parameter " + param + " does not exist on object : " + name + ", with type : " + this);
			}
		}
	}
}