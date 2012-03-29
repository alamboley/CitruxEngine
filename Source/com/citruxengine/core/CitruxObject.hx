package com.citruxengine.core;

/**
 * CitruxObject is simple. Too simple. Despite its simplicity, it is the foundational object that should
 * be used for all game objects you create, such as spaceships, enemies, coins, bosses, and HUD elements.
 * CitruxObject is basically an abstract class that gets added to a State instance.
 * The current State calls update on all CitruxObjects. Also, CitruxObjects are useful because they can be
 * initialized with a params object, which can be created via an object parser/factory. 
 */	

class CitruxObject {

	public var name:String;
	public var kill:Bool;

	private var _initialized:Bool;

	/**
	 * Every CitruxObject needs a name. It helps if it's unique, but it won't blow up if it's not.
	 * Also, you can pass parameters into the constructor as well. Hopefully you'll commonly be
	 * creating CitruxObjects via an editor, which will parse your shit and create the params object for you. 
	 * @param name Name your object.
	 * @param params Any public properties or setters can be assigned values via this object, ex : {x:20, width:30}
	 */	
	public function new(name:String, params:Dynamic = null) {

		kill = false;
		_initialized = false;

		this.name = name;

		if (params != null)
			setParams(params);
		else
			_initialized = true;
	}

	/**
	 * Seriously, dont' forget to release your listeners, signals, and Box2D objects here. Either that or don't ever destroy anything.
	 * Your choice.
	 */	
	public function destroy():Void {

	}

	/**
	 * The current state calls update every tick. This is where all your per-frame logic should go. Set velocities, 
	 * determine animations, change properties, etc. 
	 * @param timeDelta This is a ratio explaining the amount of time that passed in relation to the amount of time that
	 * was supposed to pass. Multiply your stuff by this value to keep your speeds consistent no matter the frame rate. 
	 */	
	public function update(timeDelta):Void {

	}

	/**
	 * The constructor usually calls this.
	 */	
	private function setParams(object:Dynamic):Void {

		for (param in Reflect.fields(object)) {

			try {

				Reflect.callMethod(this, Reflect.field(this, "set" + param.charAt(0).toUpperCase() + param.substr(1)), [Reflect.field(object, param)]);
			
			} catch (e:Dynamic) {

				trace("Warning: The parameter " + param + " does not exist on object : " + name + ", with type : " + this);
			}
		}

		_initialized = true;
	}
}