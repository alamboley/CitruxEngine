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