package com.citruxengine.physics;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.core.CitruxObject;
import com.citruxengine.physics.NapeContactListener;
import com.citruxengine.view.ISpriteView;
import com.citruxengine.view.spriteview.NapeDebugArt;

import nape.geom.Vec2;
import nape.space.Space;

import nme.display.Sprite;

/**
 * This is a simple wrapper class that allows you to add a Nape world to your game's state.
 * Add an instance of this class to your State before you create any phyiscs bodies. It will need to 
 * exist first, or your physics bodies will throw an error when they try to create themselves.
 */
class Nape extends CitruxObject, implements ISpriteView {

	public var space(getSpace, never):Space;
	public var gravity(getGravity, setGravity):Vec2;

	public var x(getX, never):Float;
	public var y(getY, never):Float;
	public var parallax(getParallax, never):Float;
	public var rotation(getRotation, never):Float;
	public var group(getGroup, setGroup):Int;
	public var visible(getVisible, setVisible):Bool;
	public var view(getView, never):Dynamic;
	public var animation(getAnimation, never):String;
	public var inverted(getInverted, never):Bool;
	public var offsetX(getOffsetX, never):Float;
	public var offsetY(getOffsetY, never):Float;
	public var registration(getRegistration, never):String;

	private var _contactListener:NapeContactListener;

	var _space:Space;
	var _scale:Int;
	var _gravity:Vec2;

	var _visible:Bool;
	var _group:Int;
	var _view:Dynamic;

	public function new(name:String, params:Dynamic = null) {

		_visible = false;
		_group = 1;
		_gravity = new Vec2(0, 150);
		_view = NapeDebugArt;

		super(name, params);

		_space = new Space(_gravity);
		_contactListener = new NapeContactListener(_space);
	}

	override public function destroy():Void {

		_space.clear();
		_contactListener.destroy();

		super.destroy();
	}

	override public function update(timeDelta:Float):Void {

		super.update(timeDelta);

		// 0.05 = 1 / 20
		_space.step(0.05, 8, 8);
	}

	public function getSpace():Space {
		return _space;
	}
	
	public function getGravity():Vec2 {
		return _gravity;
	}

	public function setGravity(value:Vec2):Vec2 {
		return _gravity = value;
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