package com.citruxengine.physics;

import nape.callbacks.CbEvent;
import nape.callbacks.CbType;
import nape.callbacks.InteractionCallback;
import nape.callbacks.InteractionListener;
import nape.callbacks.InteractionType;
import nape.space.Space;

class NapeContactListener {

	private var _space:Space;

	public function new(space:Space) {

		_space = space;
	}

	public function destroy():Void {
		_space.listeners.clear();
	}

	public function onInteractionBegin(cb:InteractionCallback):Void {
		
		cb.int1.userData.myData.handleBeginContact(cb);
		cb.int2.userData.myData.handleBeginContact(cb);
	}

	public function onInteractionEnd(cb:InteractionCallback):Void {

		cb.int1.userData.myData.handleBeginContact(cb);
		cb.int2.userData.myData.handleBeginContact(cb);
	}

}