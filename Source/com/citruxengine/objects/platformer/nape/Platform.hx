package com.citruxengine.objects.platformer.nape;

import nape.callbacks.CbType;
import nape.callbacks.InteractionType;
import nape.callbacks.PreCallback;
import nape.callbacks.PreFlag;
import nape.callbacks.PreListener;
import nape.geom.Vec2;
import nape.phys.BodyType;

import com.citruxengine.objects.NapePhysicsObject;

/**
 * A Platform is a rectangular object that is meant to be stood on. It can be given any position, width, height, or rotation to suit your level's needs.
 * You can make your platform a "one-way" or "cloud" platform so that you can jump on from underneath (collision is only applied when coming from above it).
 * 
 * There are two ways of adding graphics for your platform. You can give your platform a graphic just like you would any other object (by passing a graphical
 * class into the view property) or you can leave your platform invisible and line it up with your backgrounds for a more custom look.
 */
class Platform extends NapePhysicsObject {

	inline public static var ONEWAY_PLATFORM:CbType = new CbType();

	public function new(name:String, params:Dynamic = null) {

		super(name, params);
	}
	
	override private function defineBody():Void {

		_bodyType = BodyType.STATIC;
	}
}