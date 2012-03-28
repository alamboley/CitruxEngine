package com.citruxengine.core;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.core.CitruxObject;

import nme.display.Sprite;

/**
 * @author Aymeric Lamboley
 */
class State extends Sprite {

	private var _ce:CitruxEngine;

	private var _objects:Array<CitruxObject>;

	public function new() {

		super();

		_ce = CitruxEngine.getInstance();

		_objects = new Array<CitruxObject>();
	}

	public function destroy():Void {

	}

	public function initialize():Void {
		
	}

	public function update(timeDelta:Float):Void {

		var garbage:Array<CitruxObject> = [];
		var n:Int = _objects.length;

		for (i in 0...n) {

			var object:CitruxObject = _objects[i];
			if (object.kill == true)
				garbage.push(object);
			else
				object.update(timeDelta);
		}

		n = garbage.length;

		for (i in 0...n) {

			var garbageObject:CitruxObject = garbage[i];
			_objects.splice(Lambda.indexOf(_objects,garbageObject), 1);
			garbageObject.destroy();
		}
	}

	public function add(object:CitruxObject):CitruxObject {

		_objects.push(object);

		return object;
	}

	public function remove(object:CitruxObject):Void {

		object.kill = true;
	}

	public function getObjectByName(name:String):CitruxObject {

		for (object in _objects) {
			if (object.name == name)
				return object;
		}

		return null;
	}

	public function getFirstObjectByType(type:Class<Dynamic>):CitruxObject {

		for (object in _objects) {
			if (Std.is(object, type))
				return object;
		}

		return null;
	}

	public function getObjectsByType(type:Class<Dynamic>):Array<CitruxObject> {

		var objects:Array<CitruxObject> = new Array<CitruxObject>();
		for (object in _objects) {
			if (Std.is(object, type))
				objects.push(object);
		}

		return objects;
	}
}
