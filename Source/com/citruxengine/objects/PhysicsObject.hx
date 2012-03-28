package com.citruxengine.objects;

import box2D.collision.shapes.B2CircleShape;
import box2D.collision.shapes.B2PolygonShape;
import box2D.collision.shapes.B2Shape;
import box2D.common.math.B2Mat22;
import box2D.common.math.B2Transform;
import box2D.common.math.B2Vec2;
import box2D.dynamics.B2Body;
import box2D.dynamics.B2BodyDef;
import box2D.dynamics.B2Fixture;
import box2D.dynamics.B2FixtureDef;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.core.CitruxObject;
import com.citruxengine.physics.Box2D;
import com.citruxengine.view.ISpriteView;

import nme.display.MovieClip;

class PhysicsObject extends CitruxObject, implements ISpriteView {

	public var x(getX, setX):Float;
	public var y(getY, setY):Float;
	public var parallax(getParallax, setParallax):Float;
	public var rotation(getRotation, setRotation):Float;
	public var group(getGroup, setGroup):Int;
	public var visible(getVisible, setVisible):Bool;
	public var view(getView, setView):Dynamic;
	public var animation(getAnimation, never):String;
	public var inverted(getInverted, never):Bool;
	public var offsetX(getOffsetX, setOffsetX):Float;
	public var offsetY(getOffsetY, setOffsetY):Float;
	public var registration(getRegistration, setRegistration):String;

	public var width(getWidth, setWidth):Float;
	public var height(getHeight, setHeight):Float;
	public var radius(getRadius, setRadius):Float;
	public var body(getBody, never):B2Body;

	public var gravity:Float;

	var _ce:CitruxEngine;
	var _box2D:Box2D;
	var _bodyDef:B2BodyDef;
	var _body:B2Body;
	var _shape:B2Shape;
	var _fixtureDef:B2FixtureDef;
	var _fixture:B2Fixture;
	var _inverted:Bool;
	var _animation:String;

	public function new(name:String, params:Dynamic = null) {

		_ce = CitruxEngine.getInstance();
		_box2D = cast(_ce.state.getFirstObjectByType(Box2D), Box2D);

		gravity = 1.6;
		_inverted = false;
		parallax = 1;
		_animation = "";
		visible = true;
		x = y = radius = rotation = offsetX = offsetY = 0;
		width = 30 * _box2D.scale;
		height = 30 * _box2D.scale;
		group = 0;
		view = MovieClip;
		registration = "center";

		super(name, params);

		if (_box2D == null) {
			trace("Cannot create PhysicsObject when a Box2D object has not been added to the state.");
			return ;
		}

		defineBody();
		createBody();
		createShape();
		defineFixture();
		createFixture();
		defineJoint();
		createJoint();
	}

	override public function destroy():Void {

		//_body.destroy(); -> doesn't exist, why ??
		//_fixtureDef.destroy(); -> doesn't exist, why ??
		//_shape.destroy(); -> doesn't exist, why ??
		//_bodyDef.destroy(); -> doesn't exist, why ??

		super.destroy();
	}

	override public function update(timeDelta:Float):Void {

		if (_bodyDef.type == B2Body.b2_dynamicBody) {

			var velocity:B2Vec2 = _body.getLinearVelocity();
			velocity.y += gravity;
			_body.setLinearVelocity(velocity);
		}
	}

	private function defineBody():Void {

		_bodyDef = new B2BodyDef();
		_bodyDef.type = B2Body.b2_dynamicBody;
		_bodyDef.position.set(x, y);
		_bodyDef.angle = rotation;
	}

	private function createBody():Void {

		_body = _box2D.world.createBody(_bodyDef);
		_body.setUserData(this);
	}

	private function createShape():Void {

		if (radius != 0) {
			_shape = new B2CircleShape();
			_shape.m_radius = radius / _box2D.scale / 2;
		} else {
			_shape = new B2PolygonShape();
			cast(_shape, B2PolygonShape).setAsBox(width / _box2D.scale / 2, height / _box2D.scale / 2);
		}
	}

	private function defineFixture():Void {

		_fixtureDef = new B2FixtureDef();
		_fixtureDef.shape = _shape;
		_fixtureDef.density = 1;
		_fixtureDef.friction = 0.6;
		_fixtureDef.restitution = 0.3;
		//_fixtureDef.filter.categoryBits -> à faire
		//_fixtureDef.filter.maskBits -> à faire
	}

	private function createFixture():Void {

		_fixture = _body.createFixture(_fixtureDef);
	}

	private function defineJoint():Void {

	}

	private function createJoint():Void {

	}

	public function getX():Float {
		
		if (_body != null)
			return _body.getPosition().x * _box2D.scale;
		else
			return x / _box2D.scale;
	}

	public function setX(value:Float):Float {

		x = value / _box2D.scale;

		if(_body != null) {

			var pos:B2Vec2 = _body.getPosition();
			pos.x = x;
			_body.setTransform(new B2Transform(pos, B2Mat22.fromAngle(_body.getAngle())));
		}

		return value;
	}

	public function getY():Float {
		
		if (_body != null)
			return _body.getPosition().y * _box2D.scale;
		else
			return y / _box2D.scale;
	}

	public function setY(value:Float):Float {

		y = value / _box2D.scale;

		if(_body != null) {

			var pos:B2Vec2 = _body.getPosition();
			pos.y = y;
			_body.setTransform(new B2Transform(pos, B2Mat22.fromAngle(_body.getAngle())));
		}

		return value;
	}

	public function getWidth():Float {
		return width;
	}

	public function setWidth(value:Float):Float {
		return width = value / _box2D.scale;
	}

	public function getHeight():Float {
		return height;
	}

	public function setHeight(value:Float):Float {
		return height = value / _box2D.scale;
	}

	public function getRadius():Float {
		return radius;
	}

	public function setRadius(value:Float):Float {
		return radius = value / _box2D.scale;
	}

	public function getParallax():Float {
		return parallax;
	}

	public function setParallax(value:Float):Float {
		return parallax = value;
	}

	public function getRotation():Float {
		
		if (_body != null)
			return _body.getAngle() * 180 / Math.PI;
		else
			return rotation / 180 * Math.PI;
	}

	public function setRotation(value:Float):Float {

		rotation = value * Math.PI / 180;

		if (_body != null)
			_body.setTransform(new B2Transform(_body.getPosition(), B2Mat22.fromAngle(rotation)));

		return rotation;
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
		return _animation;
	}

	public function getInverted():Bool {
		return inverted;
	}

	public function getOffsetX():Float {
		return offsetX;
	}

	public function setOffsetX(value:Float):Float {
		return offsetX = value;
	}

	public function getOffsetY():Float {
		return offsetY;
	}

	public function setOffsetY(value:Float):Float {
		return offsetY = value;
	}

	public function getRegistration():String {
		return registration;
	}

	public function setRegistration(value:String):String {
		return registration = value;
	}

	public function getBody():B2Body {
		return _body;
	}
}