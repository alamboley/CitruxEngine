package com.citruxengine.objects;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.core.CitruxObject;
import com.citruxengine.physics.Nape;
import com.citruxengine.view.ISpriteView;

import nape.callbacks.CbType;
import nape.callbacks.InteractionCallback;
import nape.callbacks.PreCallback;
import nape.callbacks.PreFlag;
import nape.geom.Vec2;
import nape.phys.Body;
import nape.phys.BodyType;
import nape.phys.Material;
import nape.shape.Circle;
import nape.shape.Polygon;
import nape.shape.Shape;

import nme.display.MovieClip;

/**
 * You should extend this class to take advantage of Nape.
 */
class NapePhysicsObject extends CitruxObject, implements ISpriteView {

	inline public static var PHYSICS_OBJECT:CbType = new CbType();

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
	public var body(getBody, never):Body;

	var _ce:CitruxEngine<Dynamic>;
	var _nape:Nape;
	var _body:Body;
	var _bodyType:BodyType;
	var _material:Material;
	var _shape:Shape;

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
	 * <p>You'll notice that the NapePhysicsObject constructor calls a bunch of functions that start with "define" and "create".
	 * This is how the Nape objects are created. You should override these methods in your own PhysicsObject implementation
	 * if you need additional Nape functionality. Please see provided examples of classes that have overridden
	 * the PhysicsObject.</p>
	 */
	public function new(name:String, params:Dynamic = null) {

		_ce = CitruxEngine.getInstance();
		_nape = cast(_ce.state.getFirstObjectByType(Nape), Nape);

		_x = _y = _rotation = _radius = _offsetX = _offsetY = 0;
		_width = _height = 30;

		_group = 0;
		_parallax = 1;
		_visible = true;

		_animation = "";
		_inverted = false;
		_view = MovieClip;
		_registration = "center";

		super(name, params);

		if (_nape == null) {
			trace("Cannot create NapePhysicsObject when a Nape object has not been added to the state.");
			return ;
		}

		//Override these to customize your Nape initialization. Things must be done in this order.
		defineBody();
		createBody();
		createMaterial();
		createShape();
		createConstraint();
	}

	override public function destroy():Void {

		_nape.space.bodies.remove(_body);

		super.destroy();
	}

	/**
	 * You should override this method to extend the functionality of your physics object. This is where you will 
	 * want to do any velocity/force logic.
	 */	
	override public function update(timeDelta:Float):Void {
	}

	/*public function handleBeginContact(callback:InteractionCallback):Void {

	}

	public function handleEndContact(callback:InteractionCallback):Void {

	}

	public function handlePreContact(callback:PreCallback):PreFlag {
		return PreFlag.ACCEPT;
	}*/

	private function defineBody():Void {

		_bodyType = BodyType.DYNAMIC;
	}
		
	private function createBody():Void {

		_body = new Body(_bodyType, new Vec2(_x, _y));
		_body.userData.myData = this;
		
		_body.rotate(new Vec2(_x, _y), _rotation);
	}

	private function createMaterial():Void {

		_material = new Material(0.2, 1, 1, 1, 0);
	}

	private function createShape():Void {

		if (_radius != 0)
			_shape = new Circle(_radius, null, _material);
		else
			_shape = new Polygon(Polygon.box(_width, _height), _material);
		
		_body.shapes.add(_shape);
	}

	private function createConstraint():Void {

		_body.space = _nape.space;			
		_body.cbTypes.add(PHYSICS_OBJECT);
	}

	public function getX():Float {
		
		if (_body != null)
			return _body.position.x;
		else
			return _x;
	}

	public function setX(value:Float):Float {

		_x = value;

		if(_body != null) {

			var pos:Vec2 = _body.position;
			pos.x = _x;
			_body.position = pos;
		}

		return _x;
	}

	public function getY():Float {
		
		if (_body != null)
			return _body.position.y;
		else
			return _y;
	}

	public function setY(value:Float):Float {

		_y = value;

		if(_body != null) {

			var pos:Vec2 = _body.position;
			pos.y = _y;
			_body.position = pos;
		}

		return _y;
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

	public function getRadius():Float {
		return _radius;
	}

	public function setRadius(value:Float):Float {

		return _radius = value;
	}

	public function getParallax():Float {
		return _parallax;
	}

	public function setParallax(value:Float):Float {
		return _parallax = value;
	}

	public function getRotation():Float {
		
		if (_body != null)
			return _body.rotation * 180 / Math.PI;
		else
			return _rotation * 180 / Math.PI;
	}

	public function setRotation(value:Float):Float {

		_rotation = value * Math.PI / 180;

		if (_body != null)
			_body.rotate(new Vec2(_x, _y), _rotation);

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

	public function getBody():Body {
		return _body;
	}
}