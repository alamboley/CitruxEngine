package com.citruxengine.view.spriteview;

import aze.display.SparrowTilesheet;
import aze.display.TileClip;
import aze.display.TileLayer;

import nme.display.Sprite;
import nme.events.Event;
import nme.Lib;

class SparrowAnimationSequence extends Sprite {

	private var _tilerLayer:TileLayer;
	private var _fps:Int;

	private var _previousTime:Int;

	public function new(tileSheet:SparrowTilesheet, defaultAnimation:String, fps:Int = 30) {

		super();

		_fps = fps;

		_tilerLayer = new TileLayer(tileSheet);

		_tilerLayer.addChild(new TileClip(defaultAnimation, _fps));

		this.addChild(_tilerLayer.view);

		_previousTime = Lib.getTimer();

		this.addEventListener(Event.ENTER_FRAME, _update);
	}

	public function destroy():Void {

		this.removeChild(_tilerLayer.view);
		this.removeEventListener(Event.ENTER_FRAME, _update);
	}

	public function changeAnimation(animation:String):Void {

		_tilerLayer.addChild(new TileClip(animation, _fps));
		_tilerLayer.removeChildAt(0);
	}

	private function _update(evt:Event):Void {

		_tilerLayer.render();
		
		/*var currentTime:Int = Lib.getTimer ();
		var deltaTime:Int = currentTime - _previousTime;

		_tilerLayer.step(deltaTime);

		_previousTime = currentTime;*/
	}
}