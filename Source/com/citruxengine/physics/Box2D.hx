package com.citruxengine.physics;

import box2D.common.math.B2Vec2;
import box2D.dynamics.B2DebugDraw;
import box2D.dynamics.B2World;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.core.CitruxObject;
import com.citruxengine.view.ISpriteView;

import nme.display.Sprite;

/**
 * This is a simple wrapper class that allows you to add a Box2D world to your game's state.
 * Add an instance of this class to your State before you create any phyiscs bodies. It will need to 
 * exist first, or your physics bodies will throw an error when they try to create themselves.
 */
class Box2D extends CitruxObject, implements ISpriteView {

	public var world(getWorld, null):B2World;
	public var scale(getScale, null):Int;

	public var x(getX, never):Float;
	public var y(getY, never):Float;
	public var parallax(getParallax, never):Float;
	public var rotation(getRotation, never):Float;
	public var group(getGroup, setGroup):Int;
	public var visible(getVisible, setVisible):Bool;
	public var view(getView, setView):Dynamic;
	public var animation(getAnimation, never):String;
	public var inverted(getInverted, never):Bool;
	public var offsetX(getOffsetX, never):Float;
	public var offsetY(getOffsetY, never):Float;
	public var registration(getRegistration, never):String;

	private var physicsDebug:Sprite;

	var _world:B2World;
	var _scale:Int;

	var _visible:Bool;
	var _group:Int;
	var _view:Dynamic;

	public function new(name:String, params:Dynamic = null) {

		super(name, params);

		_visible = false;
		_group = 1;
		_scale = 30;

		physicsDebug = new Sprite();
		CitruxEngine.getInstance().addChild(physicsDebug);

		_world = new B2World(new B2Vec2(0, 0), true);

		var debugDraw = new B2DebugDraw();
		debugDraw.setSprite(physicsDebug);
		debugDraw.setDrawScale(_scale);
		debugDraw.setFlags(B2DebugDraw.e_shapeBit);

		//TODO : remove debug view here.

		world.setDebugDraw(debugDraw);
	}

	override public function destroy():Void {

		//world.destroy(); -> doesn't exist, why ??

		super.destroy();
	}

	override public function update(timeDelta:Float):Void {

		super.update(timeDelta);

		_world.step(1 / 20, 8, 8);
		_world.drawDebugData();
	}

	public function getWorld():B2World {
		return _world;
	}

	/**
	 * This is hard to grasp, but Box2D does not use pixels for its physics values. Cutely, it uses meters
	 * and forces us to convert those meter values to pixels by multiplying by 30. If you don't multiple Box2D
	 * values by 30, your objecs will look very small and will appear to move very slowly, if at all.
	 * This is a reference to the scale number by which you must multiply your values to properly display physics objects. 
	 */	
	public function getScale():Int {
		return _scale;
	}

	public function getX():Float {
		return 0;
	}

	public function getY():Float {
		return 0;
	}

	public function getParallax():Float {
		return 1;
	}

	public function getRotation():Float {
		return 0;
	}

	public function getGroup():Int {
		return _group;
	}

	public function setGroup(value:Int):Int {
		return _group = value;
	}

	public function getVisible():Bool {
		return _visible;
	}

	public function setVisible(value:Bool):Bool {
		return _visible = value;
	}

	public function getView():Dynamic {
		return _view;
	}

	public function setView(value:Dynamic):Dynamic {
		return _view = value;
	}

	public function getAnimation():String {
		return "";
	}

	public function getInverted():Bool {
		return false;
	}

	public function getOffsetX():Float {
		return 0;
	}

	public function getOffsetY():Float {
		return 0;
	}

	public function getRegistration():String {
		return "topLeft";
	}
}