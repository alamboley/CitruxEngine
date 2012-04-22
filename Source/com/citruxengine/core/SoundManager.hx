package com.citruxengine.core;

import nme.Assets;
import nme.media.Sound;
import nme.media.SoundChannel;
import nme.media.SoundTransform;

class SoundManager {

	public var sounds:Hash<String>;

	public function new() {

		sounds = new Hash<String>();
	}

	/*
	 * The sound is a path to a file
	 */
	public function addSound(id:String, url:String):Void {

		sounds.set(id, url);
	}

	public function removeSound(id:String):Void {

		var currID:String;

		for (currID in sounds) {

			if (currID == id) {
				sounds.remove(id);
				break;
			}
		}
	}

	public function hasSound(id:String):Bool {
		return sounds.exists(id);
	}

	public function playSound(id:String, timesToRepeat:Int = 0, volume:Float = 1.0):Void {

		var soundFactory:Sound = Assets.getSound(sounds.get(id));
		soundFactory.play(0, timesToRepeat);
	}
}