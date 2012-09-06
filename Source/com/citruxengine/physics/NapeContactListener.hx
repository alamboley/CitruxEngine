package com.citruxengine.physics;

import nape.space.Space;

class NapeContactListener {

	private var _space:Space;

	public function new(space:Space) {

		_space = space;
	}

	public function destroy():Void {
		_space.listeners.clear();
	}
}