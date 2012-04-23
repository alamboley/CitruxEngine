package com.citruxengine.objects;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.core.CitruxObject;
import com.citruxengine.view.ISpriteView;

import nme.display.MovieClip;

/**
 * This is the primary class for creating graphical game objects.
 * You should override this class to create a visible game object such as a Spaceship, Hero, or Backgrounds. This is the equivalent
 * of the Flash Sprite. It has common properties that are required for properly displaying and
 * positioning objects. You can also add your logic to this sprite.
 * 
 * <p>If you'd like to take advantage of Box2D physics, you should extend the PhysicsObject class instead.</p>
 */
class CitruxSprite extends CitruxObject, implements ISpriteView {

	public var x(getX, setX):Float;
	public var y(getY, setY):Float;
	public var width(getWidth, setWidth):Float;
	public var height(getHeight, setHeight):Float;
	public var rotation(getRotation, setRotation):Float;
	public var parallax(getParallax, setParallax):Float;
	public var group(getGroup, setGroup):Int;
	public var visible(getVisible, setVisible):Bool;
	public var view(getView, setView):Dynamic;
	public var animation(getAnimation, setAnimation):String;
	public var inverted(getInverted, setInverted):Bool;
	public var offsetX(getOffsetX, setOffsetX):Float;
	public var offsetY(getOffsetY, setOffsetY):Float;
	public var registration(getRegistration, setRegistration):String;

	var _ce:CitruxEngine<Dynamic>;

	var _x:Float;
	var _y:Float;
	var _rotation:Float;
	var _width:Float;
	var _height:Float;

	var _parallax:Float;
	var _group:Int;
	var _visible:Bool;
	var _offsetX:Float;
	var _offsetY:Float;

	var _inverted:Bool;
	var _animation:String;
	var _view:Dynamic;
	var _registration:String;

	public function new(name:String, params:Dynamic = null) {

		_ce = CitruxEngine.getInstance();

		_x = _y = _rotation = _offsetX = _offsetY = 0;
		_width = _height = 30;

		_group = 0;
		_parallax = 1;
		_visible = true;

		_animation = "";
		_inverted = false;
		_view = MovieClip;
		_registration = "topLeft";

		super(name, params);
	}

	public function getX():Float {
		return _x;
	}

	public function setX(value:Float):Float {
		return _x = value;
	}

	public function getY():Float {
		return _y;
	}

	public function setY(value:Float):Float {
		return _y = value;
	}

	public function getWidth():Float {
		return _width;
	}

	public function setWidth(value:Float):Float {
		return _width = value;
	}

	public function getHeight():Float {
		return _height;
	}

	public function setHeight(value:Float):Float {
		return _height = value;
	}

	public function getRotation():Float {
		return _rotation;
	}

	public function setRotation(value:Float):Float {
		return _rotation = value;
	}

	public function getParallax():Float {
		return _parallax;
	}

	public function setParallax(value:Float):Float {
		return _parallax = value;
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
		return _animation;
	}

	public function setAnimation(value:String):String {
		return _animation = value;
	}

	public function getInverted():Bool {
		return _inverted;
	}

	public function setInverted(value:Bool):Bool {
		return _inverted = value;
	}

	public function getOffsetX():Float {
		return _offsetX;
	}

	public function setOffsetX(value:Float):Float {
		return _offsetX = value;
	}

	public function getOffsetY():Float {
		return _offsetY;
	}

	public function setOffsetY(value:Float):Float {
		return _offsetY = value;
	}

	public function getRegistration():String {
		return _registration;
	}

	public function setRegistration(value:String):String {
		return _registration = value;
	}
}