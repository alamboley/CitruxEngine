package com.citruxengine.objects.platformer;

import box2D.common.math.B2Vec2;
import box2D.dynamics.B2Body;

import com.citruxengine.objects.platformer.Platform;
import com.citruxengine.utils.MathVector;

/**
 * A platform that moves between two points. The MovingPlatform has several properties that
 * can customize it.
 * 
 * Properties:
 * speed - The speed at which the moving platform travels. 
 * enabled - Whether or not the MovingPlatform can move, no matter the condition.
 * startX -  The initial starting X position of the MovingPlatform, and the place it returns to when it reaches the end destination.
 * startY -  The initial starting Y position of the MovingPlatform, and the place it returns to when it reaches the end destination.
 * endX -  The ending X position of the MovingPlatform, and the place it returns to when it reaches the start destination.
 * endY -  The ending Y position of the MovingPlatform, and the place it returns to when it reaches the start destination.
 * waitForPassenger - If set to true, MovingPlatform will not move unless there is a passenger. If set to false, it continually moves.
 */	
class MovingPlatform extends Platform {

	public var speed(getSpeed, setSpeed):Float;
	public var enabled(getEnabled, setEnabled):Bool;
	public var waitForPassenger(getWaitForPassenger, setWaitForPassenger):Bool;
	public var startX(getStartX, setStartX):Float;
	public var startY(getStartY, setStartY):Float;
	public var endX(getEndX, setEndX):Float;
	public var endY(getEndY, setEndY):Float;

	private var _start:MathVector;
	private var _end:MathVector;
	private var _forward:Bool;
	private var _passengers:Array<B2Body>;

	var _speed:Float;
	var _enabled:Bool;
	var _waitForPassenger:Bool;

	public function new(name:String, params:Dynamic = null) {

		_start = new MathVector();
		_end = new MathVector();
		_forward = true;
		_passengers = [];

		_speed = 1;
		_enabled = true;
		_waitForPassenger = false;

		super(name, params);
	}

	override public function destroy():Void {

		_passengers = [];

		super.destroy();
	}

	override public function update(timeDelta:Float):Void {

		super.update(timeDelta);

		var velocity:B2Vec2 = _body.getLinearVelocity();

		if ((_waitForPassenger && _passengers.length == 0) || !_enabled) {

			//Platform should not move
			velocity.setZero();
		
		} else {

			var destination:B2Vec2 = new B2Vec2(_end.x, _end.y);
			if (!_forward)
				destination = new B2Vec2(_start.x, _start.y);

			destination.subtract(_body.getPosition());
			velocity = destination;

			if (velocity.length() > _speed / 30) {

				//Still has further to go. Normalize the velocity to the max speed
				velocity.normalize();

			} else {

				//Destination is very close. Switch the travelling direction
				_forward = !_forward;
			}
		}

		_body.setLinearVelocity(velocity);
	}

	override private function defineBody():Void {

		super.defineBody();

		_bodyDef.type = B2Body.b2_kinematicBody;
		_bodyDef.allowSleep = false;
	}

	override public function setX(value:Float):Float {
	
		super.setX(value);

		return _start.x = value / _box2D.scale;
	}

	override public function setY(value:Float):Float {
	
		super.setY(value);

		return _start.y = value / _box2D.scale;
	}

	public function getStartX():Float {
		return _start.x * _box2D.scale;
	}

	public function setStartX(value:Float):Float {
		return _start.x = value / _box2D.scale;
	}

	public function getStartY():Float {
		return _start.y * _box2D.scale;
	}

	public function setStartY(value:Float):Float {
		return _start.y = value / _box2D.scale;
	}

	public function getEndX():Float {
		return _end.x * _box2D.scale;
	}

	public function setEndX(value:Float):Float {
		return _end.x = value / _box2D.scale;
	}

	public function getEndY():Float {
		return _end.y * _box2D.scale;
	}

	public function setEndY(value:Float):Float {
		return _end.y = value / _box2D.scale;
	}

	public function getSpeed():Float {
		return _speed;
	}

	public function setSpeed(value:Float):Float {
		return _speed = value;
	}

	public function getEnabled():Bool {
		return _enabled;
	}

	public function setEnabled(value:Bool):Bool {
		return _enabled = value;
	}

	public function getWaitForPassenger():Bool {
		return _waitForPassenger;
	}

	public function setWaitForPassenger(value:Bool):Bool {
		return _waitForPassenger = value;
	}
}