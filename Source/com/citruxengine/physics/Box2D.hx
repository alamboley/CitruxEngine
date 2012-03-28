package com.citruxengine.physics;

import box2D.common.math.B2Vec2;
import box2D.dynamics.B2DebugDraw;
import box2D.dynamics.B2World;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.core.CitruxObject;
import com.citruxengine.view.ISpriteView;

import nme.display.Sprite;

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

	public function new(name:String, params:Dynamic = null) {

		super(name, params);

		visible = false;
		group = 1;
		scale = 30;

		physicsDebug = new Sprite();
		CitruxEngine.getInstance().addChild(physicsDebug);

		world = new B2World(new B2Vec2(0, 0), true);

		var debugDraw = new B2DebugDraw();
		debugDraw.setSprite(physicsDebug);
		debugDraw.setDrawScale(scale);
		debugDraw.setFlags(B2DebugDraw.e_shapeBit);

		world.setDebugDraw(debugDraw);
	}

	override public function destroy():Void {

		//world.destroy(); -> doesn't exist, why ??

		super.destroy();
	}

	override public function update(timeDelta:Float):Void {

		super.update(timeDelta);

		world.step(1 / 20, 8, 8);
		world.drawDebugData();
	}

	public function getWorld():B2World {
		return world;
	}

	public function getScale():Int {
		return scale;
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
		return group;
	}

	public function setGroup(value:Int):Int {
		return group = value;
	}

	public function getVisible():Bool {
		return visible;
	}

	public function setVisible(value:Bool):Bool {
		return visible = value;
	}

	public function getView():Dynamic {
		return view;
	}

	public function setView(value:Dynamic):Dynamic {
		return view = value;
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