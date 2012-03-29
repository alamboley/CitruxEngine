package com.citruxengine.objects.platformer;

import box2D.common.math.B2Vec2;

import com.citruxengine.objects.PhysicsObject;

/**
 * This is a common example of a side-scrolling bad guy. He has limited logic, basically
 * only turning around when he hits a wall.
 * 
 * When controlling collision interactions between two objects, such as a Hero and Baddy,
 * I like to let each object perform its own actions, not control one object's action from the other object.
 * For example, the Hero doesn't contain the logic for killing the Baddy, and the Baddy doesn't contain the
 * logic for making the hero "Spring" when he kills him. 
 */
class Baddy extends PhysicsObject {

	public var speed(getSpeed, setSpeed):Float;
	public var startingDirection(getStartingDirection, setStartingDirection):String;
	public var leftBound(getLeftBound, setLeftBound):Int;
	public var rightBound(getRightBound, setRightBound):Int;

	private var _hurt:Bool;
	private var _lastTimeTurnedAround:Float;

	var _speed:Float;
	var _startingDirection:String;
	var _leftBound:Int;
	var _rightBound:Int;

	public function new(name:String, params:Dynamic = null) {

		_speed = 1.3;
		_startingDirection = "left";
		_leftBound = -10000;
		_rightBound = 10000;

		super(name, params);

		if (_startingDirection == "left")
			_inverted = true;

		_hurt = false;
		_lastTimeTurnedAround = 0;
	}

	override public function destroy():Void {

		super.destroy();
	}

	override public function update(timeDelta:Float):Void {

		super.update(timeDelta);

		var position:B2Vec2 = _body.getPosition();

		//Turn around when they pass their left/right bounds
		if ((_inverted && position.x * 30 < _leftBound) || (!_inverted && position.x * 30 > _rightBound))
			turnAround();

		var velocity:B2Vec2 = _body.getLinearVelocity();

		if (!_hurt)
			velocity.x = _inverted ? -speed : speed;

		_body.setLinearVelocity(velocity);

		updateAnimation();
	}

	public function hurt():Void {

		_hurt = true;
	}

	public function turnAround():Void {

		_inverted = !_inverted;
		_lastTimeTurnedAround = Date.now().getTime();
	}

	private function updateAnimation():Void {

		_animation = _hurt ? "die" : "walk";
	}

	private function endHurtState():Void {

		_hurt = false;
		kill = true;
	}

	override private function createBody():Void {

		super.createBody();

		_body.setFixedRotation(true);
	}

	public function getSpeed():Float {
		return _speed;
	}

	public function setSpeed(value:Float):Float {
		return _speed = value;
	}

	public function getStartingDirection():String {
		return _startingDirection;
	}

	public function setStartingDirection(value:String):String {
		return _startingDirection = value;
	}

	public function getLeftBound():Int {
		return _leftBound;
	}

	public function setLeftBound(value:Int):Int {
		return _leftBound = value;
	}

	public function getRightBound():Int {
		return _rightBound;
	}

	public function setRightBound(value:Int):Int {
		return _rightBound = value;
	}
}