package com.citruxengine.view;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.utils.MathVector;
import com.citruxengine.view.ISpriteView;

import nme.geom.Rectangle;

class CitruxView  {

	//Camera properties
	/**
	 * The thing that the camera will follow. 
	 */
	public var cameraTarget:Dynamic;

	/**
	 * The distance from the top-left corner of the screen that the camera should offset the target. 
	 */
	public var cameraOffset:MathVector;

	/**
	 * A value between 0 and 1 that specifies the speed at which the camera catches up to the target.
	 * 0 makes the camera not follow the target at all and 1 makes the camera follow the target exactly. 
	 */
	public var cameraEasing:MathVector;

	/**
	 * A rectangle specifying the minimum and maximum area that the camera is allowed to follow the target in. 
	 */
	public var cameraBounds:Rectangle;

	/**
	 * The width of the visible game screen. This will usually be the same as your stage width unless your game has a border.
	 */
	public var cameraLensWidth:Float;

	/**
	 * The height of the visible game screen. This will usually be the same as your stage width unless your game has a border.
	 */
	 public var cameraLensHeight:Float;

	 private var _viewObjects:Hash<Dynamic>;
	 private var _root:Dynamic;
	 private var _viewInterface:Class<ISpriteView>;
	
	public function new(root:Dynamic, viewInterface:Class<ISpriteView>) {
		
		_root = root;
		_viewInterface = viewInterface;

		_viewObjects = new Hash<Dynamic>();

		var ce:CitruxEngine = CitruxEngine.getInstance();

		cameraLensWidth = ce.stage.width;
		cameraLensHeight = ce.stage.height;

		cameraOffset = new MathVector();
		cameraEasing = new MathVector(0.25, 0.05);
	}

	public function destroy():Void {

	}

	public function update():Void {

	}

	public function addArt(citruxObject:Dynamic):Void {

		if (!Std.is(citruxObject, _viewInterface))
			return;

		var art:Dynamic = createArt(citruxObject);

		if (art != null) {
			_viewObjects.set(citruxObject, art);
		}
	}

	/**
	 * This is a non-critical helper function that allows you to quickly set all the available camera properties in one place. 
	 * @param target The thing that the camera should follow.
	 * @param offset The distance from the upper-left corner that you want the camera to be offset from the target.
	 * @param bounds The rectangular bounds that the camera should not extend beyond.
	 * @param easing The x and y percentage of distance that the camera will travel toward the target per tick. Lower numbers are slower. The number should not go beyond 1.
	 */
	public function setupCamera(target:Dynamic, offset:MathVector, bounds:Rectangle, easing:MathVector):Void {

		cameraTarget = target;
		cameraOffset = offset;
		cameraBounds = bounds;
		cameraEasing = easing;
	}

	/**
	 * A CitruxView subclass will extend this method to provide specifics on how to create the graphical representation of a CitruxObject.
	 * @param object The object for which to create the art.
	 * @return The art object.
	 */
	private function createArt(citruxObject:Dynamic):Dynamic {
		return null;
	}

	/**
	 * A CitruxView subclass will extend this method to update the graphical representation for each CitruxObject.
	 * @param object A CitruxObject whose graphical counterpart needs to be updated.
	 * @param art The graphics object that will be updated based on the provided CitruxObject.
	 */
	private function updateArt(citruxObject:Dynamic, art:Dynamic):Void {

	}

	/**
	 * A CitruxView subclass will extend this method to destroy the art associated with the provided CitruxObject. 
	 */
	public function destroyArt(citruxObject:Dynamic):Void {

	}
}