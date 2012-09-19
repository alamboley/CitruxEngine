package fr.aymericlamboley.test;

import nape.callbacks.CbType;
import nape.callbacks.InteractionCallback;
import nape.geom.Vec2;
import nape.phys.Material;

import com.citruxengine.objects.NapePhysicsObject;

/**
 * @author Aymeric
 */
class ShopsWoman extends NapePhysicsObject {
	
	public static var SHOPSWOMAN:CbType = new CbType();
	
	public var speed:Float = 21;
	public var life:Int = 4;
	public var fighting:Bool = false;

	public function new(name:String, params:Dynamic = null) {
		
		super(name, params);
	}

	override public function destroy():Void {
		
		super.destroy();
	}
		
	override public function update(timeDelta:Float):Void {
		
		super.update(timeDelta);
		
		var velocity:Vec2 = _body.velocity;
		
		velocity.x = -speed;
		
		_body.velocity = velocity;
			
		if (x < 0)
			kill = true;
		
		if (life == 0)
			kill = true;
	}
	
	override private function createBody():Void {
		
		super.createBody();
		
		_body.allowRotation = false;
	}
	
	override private function createMaterial():Void {
		
		_material = new Material(0, 0, 0, 1, 0);
	}
	
	override private function createConstraint():Void {
		
		_body.space = _nape.space;			
		_body.cbTypes.add(SHOPSWOMAN);
	}
		
	override public function handleBeginContact(cb:InteractionCallback):Void {
		trace('contact start');
		
		var self:ShopsWoman = cb.int1.userData.myData;
		var other:NapePhysicsObject = cb.int2.userData.myData;
		
		if (Std.is(other, Block))
			self.fighting = true;
	}
		
	override public function handleEndContact(cb:InteractionCallback):Void {
		trace('contact end');
		var self:ShopsWoman = cb.int1.userData.myData;
		var other:NapePhysicsObject = cb.int2.userData.myData;
		
		if (Std.is(other, Block))
			self.fighting = false;
	}
}
