package com.citruxengine.view.spriteview;

import box2D.dynamics.B2DebugDraw;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.physics.Box2D;
import com.citruxengine.view.spriteview.SpriteArt;

import nme.display.Sprite;
import nme.events.Event;

class Box2DDebugArt extends Sprite {

	private var _box2D:Box2D;
	private var _debugDraw:B2DebugDraw;

	public function new() {

		super();

		this.addEventListener(Event.ADDED, _handleAddedToParent);
		this.addEventListener(Event.ENTER_FRAME, _handleEnterFrame);
		this.addEventListener(Event.REMOVED, _destroy);
	}

	private function _handleAddedToParent(evt:Event):Void {

		this.removeEventListener(Event.ADDED, _handleAddedToParent);

		_box2D = cast(CitruxEngine.getInstance().state.getFirstObjectByType(Box2D), Box2D);

		_debugDraw = new B2DebugDraw();

		_debugDraw.setSprite(this);
		_debugDraw.setDrawScale(_box2D.scale);
		_debugDraw.setFlags(B2DebugDraw.e_shapeBit|B2DebugDraw.e_jointBit);

		_box2D.world.setDebugDraw(_debugDraw);
	}

	private function _handleEnterFrame(evt:Event):Void {

		_box2D.world.drawDebugData();
	}

	private function _destroy(evt:Event):Void {

		this.removeEventListener(Event.ADDED, _handleAddedToParent);
		this.removeEventListener(Event.ENTER_FRAME, _handleEnterFrame);
		this.removeEventListener(Event.REMOVED, _destroy);
	}
}