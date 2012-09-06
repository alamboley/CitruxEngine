package fr.aymericlamboley.test;

import nape.callbacks.InteractionCallback;
import nape.phys.Material;

import com.citruxengine.objects.platformer.nape.Platform;

import flash.events.TimerEvent;
import flash.utils.Timer;

/**
 * @author Aymeric
 */
class Block extends Platform {
	
	public var life:UInt = 2;
	
	public var timerHurt:Timer;

	public function new(name:String, params:Dynamic = null) {
		
		super(name, params);
		
		timerHurt = new Timer(1000);
		timerHurt.addEventListener(TimerEvent.TIMER, _removeLife);
	}
	
	override public function destroy():Void {
		
		timerHurt.removeEventListener(TimerEvent.TIMER, _removeLife);
		timerHurt = null;
		
		super.destroy();
	}

	override public function update(timeDelta:Float):Void {
		
		super.update(timeDelta);
		
		if (life == 0)
			kill = true;
	}

	override private function createMaterial():Void {
		
		_material = new Material(0, 0, 0, 1, 0);
	}
	
	override public function handleBeginContact(cb:InteractionCallback):Void {
		
		if (Std.is(cb.int1.userData.myData, ShopsWoman)) {
			
			if (!cb.int2.userData.myData.timerHurt.running)
				cb.int2.userData.myData.timerHurt.start();
		}
	}
	
	override public function handleEndContact(cb:InteractionCallback):Void {
		
		if (Std.is(cb.int1.userData.myData, ShopsWoman)) {
			
			if (cb.int2.userData.myData.timerHurt)
				cb.int2.userData.myData.timerHurt.stop();
		}
	}
	
	private function _removeLife(tEvt:TimerEvent):Void {
		life--;
	}
}
