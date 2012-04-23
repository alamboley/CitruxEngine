package com.citruxengine.objects;

import box2D.collision.B2Manifold;
import box2D.collision.shapes.B2CircleShape;
import box2D.collision.shapes.B2PolygonShape;
import box2D.collision.shapes.B2Shape;
import box2D.common.math.B2Mat22;
import box2D.common.math.B2Transform;
import box2D.common.math.B2Vec2;
import box2D.dynamics.B2Body;
import box2D.dynamics.B2BodyDef;
import box2D.dynamics.B2ContactImpulse;
import box2D.dynamics.B2Fixture;
import box2D.dynamics.B2FixtureDef;
import box2D.dynamics.contacts.B2Contact;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.core.CitruxObject;
import com.citruxengine.physics.Box2D;
import com.citruxengine.view.ISpriteView;

import nme.display.MovieClip;

/**
 * You should extend this class to take advantage of Box2D. This class provides template methods for defining
 * and creating Box2D bodies, fixtures, shapes, and joints. If you are not familiar with Box2D, you should first
 * learn about it via the <a href="http://www.box2d.org/manual.html">Box2D Manual</a>.
 */
class PhysicsObject extends CitruxObject, implements ISpriteView {

	public var x(getX, setX):Float;
	public var y(getY, setY):Float;
	public var rotation(getRotation, setRotation):Float;
	public var parallax(getParallax, setParallax):Float;
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

	/**
	 * The speed at which this object will be affected by gravity. 
	 */
	public var gravity:Float;

	var _ce:CitruxEngine<Dynamic>;
	var _box2D:Box2D;
	var _bodyDef:B2BodyDef;
	var _body:B2Body;
	var _shape:B2Shape;
	var _fixtureDef:B2FixtureDef;
	var _fixture:B2Fixture;

	var _x:Float;
	var _y:Float;
	var _rotation:Float;
	var _width:Float;
	var _height:Float;
	var _radius:Float;

	var _parallax:Float;
	var _group:Int;
	var _visible:Bool;
	var _offsetX:Float;
	var _offsetY:Float;

	var _inverted:Bool;
	var _animation:String;
	var _view:Dynamic;
	var _registration:String;

	/**
	 * Creates an instance of a PhysicsObject. Natively, this object does not default to any graphical representation,
	 * so you will need to set the "view" property in the params parameter.
	 * 
	 * <p>You'll notice that the PhysicsObject constructor calls a bunch of functions that start with "define" and "create".
	 * This is how the Box2D objects are created. You should override these methods in your own PhysicsObject implementation
	 * if you need additional Box2D functionality. Please see provided examples of classes that have overridden
	 * the PhysicsObject.</p>
	 */
	public function new(name:String, params:Dynamic = null) {

		_ce = CitruxEngine.getInstance();
		_box2D = cast(_ce.state.getFirstObjectByType(Box2D), Box2D);

		gravity = 1.6;

		_x = _y = _rotation = _radius = _offsetX = _offsetY = 0;
		_width = _height = 1;

		_group = 0;
		_parallax = 1;
		_visible = true;

		_animation = "";
		_inverted = false;
		_view = MovieClip;
		_registration = "center";

		super(name, params);

		if (_box2D == null) {
			trace("Cannot create PhysicsObject when a Box2D object has not been added to the state.");
			return ;
		}

		//Override these to customize your Box2D initialization. Things must be done in this order.
		defineBody();
		createBody();
		createShape();
		defineFixture();
		createFixture();
		defineJoint();
		createJoint();
	}

	override public function destroy():Void {

		_body.DestroyFixture(_fixture);
		_box2D.world.destroyBody(_body);

		super.destroy();
	}

	/**
	 * You should override this method to extend the functionality of your physics object. This is where you will 
	 * want to do any velocity/force logic. By default, this method also updates the gravitatonal effect on the object.
	 * I have chosen to implement gravity in each individual object instead of globally via Box2D so that it is easy
	 * to create objects that defy gravity (like birds or bullets). This is difficult to do naturally in Box2D. Instead,
	 * you can simply set your PhysicsObject's gravity property to 0, and baddabing: no gravity. 
	 */	
	override public function update(timeDelta:Float):Void {

		if (_bodyDef.type == B2Body.b2_dynamicBody) {

			var velocity:B2Vec2 = _body.getLinearVelocity();
			velocity.y += gravity;
			_body.setLinearVelocity(velocity);
		}
	}

	public function handleBeginContact(contact:B2Contact):Void {

	}

	public function handleEndContact(contact:B2Contact):Void {

	}

	public function handlePreSolve(contact:B2Contact, oldManifold:B2Manifold):Void {

	}

	public function handlePostSolve(contact:B2Contact, impulse:B2ContactImpulse):Void {

	}

	/**
	 * This method will often need to be overriden to provide additional definition to the Box2D body object. 
	 */
	private function defineBody():Void {

		_bodyDef = new B2BodyDef();
		_bodyDef.type = B2Body.b2_dynamicBody;
		_bodyDef.position.set(_x, _y);
		_bodyDef.angle = _rotation;
	}

	/**
	 * This method will often need to be overriden to customize the Box2D body object. 
	 */	
	private function createBody():Void {

		_body = _box2D.world.createBody(_bodyDef);
		_body.setUserData(this);
	}

	/**
	 * This method will often need to be overriden to customize the Box2D shape object.
	 * The PhysicsObject creates a rectangle by default if the radius is not defined, but you can replace this method's
	 * definition and instead create a custom shape, such as a line or circle.
	 */	
	private function createShape():Void {

		if (_radius != 0) {
			_shape = new B2CircleShape();
			_shape.m_radius = _radius / 2;
		} else {
			_shape = new B2PolygonShape();
			cast(_shape, B2PolygonShape).setAsBox(_width / 2, _height / 2);
		}
	}

	/**
	 * This method will often need to be overriden to provide additional definition to the Box2D fixture object. 
	 */
	private function defineFixture():Void {

		_fixtureDef = new B2FixtureDef();
		_fixtureDef.shape = _shape;
		_fixtureDef.density = 1;
		_fixtureDef.friction = 0.6;
		_fixtureDef.restitution = 0.3;
		//_fixtureDef.filter.categoryBits -> TO DO
		//_fixtureDef.filter.maskBits -> TO DO
	}

	/**
	 * This method will often need to be overriden to customize the Box2D fixture object. 
	 */	
	private function createFixture():Void {

		_fixture = _body.createFixture(_fixtureDef);
	}

	/**
	 * This method will often need to be overriden to provide additional definition to the Box2D joint object.
	 * A joint is not automatically created, because joints require two bodies. Therefore, if you need to create a joint,
	 * you will also need to create additional bodies, fixtures and shapes, and then also instantiate a new b2JointDef
	 * and b2Joint object.
	 */
	private function defineJoint():Void {

	}

	/**
	 * This method will often need to be overriden to customize the Box2D joint object. 
	 * A joint is not automatically created, because joints require two bodies. Therefore, if you need to create a joint,
	 * you will also need to create additional bodies, fixtures and shapes, and then also instantiate a new b2JointDef
	 * and b2Joint object.
	 */
	private function createJoint():Void {

	}

	public function getX():Float {
		
		if (_body != null)
			return _body.getPosition().x * _box2D.scale;
		else
			return _x * _box2D.scale;
	}

	public function setX(value:Float):Float {

		_x = value / _box2D.scale;

		if(_body != null) {

			var pos:B2Vec2 = _body.getPosition();
			pos.x = _x;
			_body.setTransform(new B2Transform(pos, B2Mat22.fromAngle(_body.getAngle())));
		}

		return _x;
	}

	public function getY():Float {
		
		if (_body != null)
			return _body.getPosition().y * _box2D.scale;
		else
			return _y * _box2D.scale;
	}

	public function setY(value:Float):Float {

		_y = value / _box2D.scale;

		if(_body != null) {

			var pos:B2Vec2 = _body.getPosition();
			pos.y = _y;
			_body.setTransform(new B2Transform(pos, B2Mat22.fromAngle(_body.getAngle())));
		}

		return _y;
	}

	public function getWidth():Float {
		return _width * _box2D.scale;
	}

	public function setWidth(value:Float):Float {

		if (_initialized)
			trace("Warning: You cannot set width on object : " + name + ", type : " + this + ", after it has been created . Please set it in the constructor.");

		return _width = value / _box2D.scale;
	}

	public function getHeight():Float {
		return _height * _box2D.scale;
	}

	public function setHeight(value:Float):Float {

		if (_initialized)
			trace("Warning: You cannot set height on object : " + name + ", type : " + this + ", after it has been created . Please set it in the constructor.");

		return _height = value / _box2D.scale;
	}

	public function getRadius():Float {
		return _radius * _box2D.scale;
	}

	public function setRadius(value:Float):Float {

		if (_initialized)
			trace("Warning: You cannot set radius on object : " + name + ", type : " + this + ", after it has been created . Please set it in the constructor.");

		return _radius = value / _box2D.scale;
	}

	public function getParallax():Float {
		return _parallax;
	}

	public function setParallax(value:Float):Float {
		return _parallax = value;
	}

	public function getRotation():Float {
		
		if (_body != null)
			return _body.getAngle() * 180 / Math.PI;
		else
			return _rotation * 180 / Math.PI;
	}

	public function setRotation(value:Float):Float {

		_rotation = value * Math.PI / 180;

		if (_body != null)
			_body.setTransform(new B2Transform(_body.getPosition(), B2Mat22.fromAngle(_rotation)));

		return _rotation;
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

	public function getInverted():Bool {
		return _inverted;
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

	public function getBody():B2Body {
		return _body;
	}
}