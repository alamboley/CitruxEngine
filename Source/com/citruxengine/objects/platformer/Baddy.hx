package com.citruxengine.objects.platformer;

import box2D.common.math.B2Vec2;

import com.citruxengine.objects.PhysicsObject;

class Baddy extends PhysicsObject {

	public var speed(getSpeed, setSpeed):Float;

	var _speed:Float;

	public function new(name:String, params:Dynamic = null) {

		_speed = 1.3;

		super(name, params);
	}

	override public function destroy():Void {

		super.destroy();
	}

	override public function update(timeDelta:Float):Void {

		super.update(timeDelta);

		var velocity:B2Vec2 = _body.getLinearVelocity();

		velocity.x = speed;

		_body.setLinearVelocity(velocity);
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
}