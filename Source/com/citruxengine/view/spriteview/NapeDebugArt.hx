package com.citruxengine.view.spriteview;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.physics.Nape;

import nape.util.ShapeDebug;

import nme.display.Sprite;
import nme.events.Event;

/**
 * This displays Nape's debug graphics. It does so properly through CitruxEngine's view manager. Nape by default
 * sets visible to false, so you'll need to set the Nape object's visible property to true in order to see the debug graphics. 
 */
class NapeDebugArt extends Sprite {
	
	private var _nape:Nape;
	private var _debugDrawer:ShapeDebug;

	public function new() {

		super();

		this.addEventListener(Event.ADDED_TO_STAGE, _handleAddedToStage);
		this.addEventListener(Event.ENTER_FRAME, _handleEnterFrame);
		this.addEventListener(Event.REMOVED, _destroy);
	}
	
	private function _handleAddedToStage(evt:Event):Void {

		this.removeEventListener(Event.ADDED_TO_STAGE, _handleAddedToStage);

		_nape = cast(CitruxEngine.getInstance().state.getFirstObjectByType(Nape), Nape);
		
		_debugDrawer = new ShapeDebug(stage.stageWidth, stage.stageHeight);
		addChild(_debugDrawer.display);
	}

	private function _handleEnterFrame(evt:Event):Void {
		
		_debugDrawer.clear();
		_debugDrawer.draw(_nape.space);
		_debugDrawer.flush();
	}
	
	private function _destroy(evt:Event):Void {

		this.removeEventListener(Event.ADDED, _handleAddedToStage);
		this.removeEventListener(Event.ENTER_FRAME, _handleEnterFrame);
		this.removeEventListener(Event.REMOVED, _destroy);
	}
	
}
