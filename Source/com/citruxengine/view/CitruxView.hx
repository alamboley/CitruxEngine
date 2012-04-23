package com.citruxengine.view;

import com.citruxengine.core.CitruxEngine;
import com.citruxengine.math.MathVector;
import com.citruxengine.view.ISpriteView;

import nme.geom.Rectangle;

/**
 * This is an abstract class that is extended by any view managers, such as the SpriteView. It provides default properties
 * and functionality that all game views need, such as camera controls, parallaxing, and graphics object displaying and management.
 * 
 * <p>This is the class by which you will grab a reference to the graphical representations of your CitruxObjects,
 * which will be useful if you need to add mouse event handlers to them, or add graphics effects and filter.</p>
 * 
 * <p>The CitrusView was meant to be extended to support multiple rendering methods, such as blitting. The goal 
 * is to provide as much decoupling as possible of the data/logic from the view.</p> 
 */
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
	
	/**
	 * There is one CitrusView per state, so when a new state is initialized, it creates the view instance.
	 * You can override which type of CitruxView you would like to create via the State.createView() private method.
	 * Thanks to the State class, you have access to traditional display list or blitting
	 */
	public function new(root:Dynamic, viewInterface:Class<ISpriteView>) {
		
		_root = root;
		_viewInterface = viewInterface;

		_viewObjects = new Hash<Dynamic>();

		var ce:CitruxEngine<Dynamic> = CitruxEngine.getInstance();

		cameraLensWidth = ce.stage.width;
		cameraLensHeight = ce.stage.height;

		cameraOffset = new MathVector();
		cameraEasing = new MathVector(0.25, 0.05);
	}

	public function destroy():Void {

	}

	/**
	 * This should be implemented by a CitruxView subclass. The update method's job is to iterate through all the CitruxObjects,
	 * and update their graphical counterparts on every frame. See the SpriteView's implementation of the update() method for
	 * specifics. 
	 */
	public function update():Void {

	}

	/**
	 * The active state automatically calls this method whenever a new CitruxObject is added to it. It uses the CitruxObject
	 * to create the appropriate graphical representation.
	 */
	public function addArt(citruxObject:Dynamic):Void {

		if (!Std.is(citruxObject, _viewInterface))
			return;

		var art:Dynamic = createArt(citruxObject);

		if (art != null) {
			_viewObjects.set(citruxObject, art);
		}
	}

	/**
	 * This is called by the active state whenever a CitruxObject is removed from the state, effectively also removing the
	 * art representation. 
	 */
	public function removeArt(citruxObject:Dynamic):Void {

		if (!Std.is(citruxObject, _viewInterface))
			return;

		destroyArt(citruxObject);
		_viewObjects.remove(citruxObject);
	}

	/**
	 * Gets the graphical representation of a CitruxObject that is being managed by the active state's view.
	 * This is the method that you will want to call to get the art for a CitruxObject.
	 * 
	 * <p>For instance, if you want to perform an action when the user clicks an object, you will want to call
	 * this method to get the MovieClip that is associated with the CitruxObject that you are listening for a click upon.
	 * </p>
	 */
	public function getArt(citruxObject:Dynamic):Dynamic {

		if (!Std.is(citruxObject, _viewInterface)) {

			trace("The object " + citruxObject + " does not have a graphical counterpart because it does not implement " + _viewInterface + ".");
			return null;
		}

		return _viewObjects.get(citruxObject);
	}

	/**
	 * Gets a reference to the CitruxObject associated with the provided art object.
	 * This is useful for instances such as when you need to get the CitruxObject for a graphic that got clicked on or otherwise interacted with.
	 * @param art The graphical object that represents the CitruxObject you want.
	 * @return The CitruxObject associated with the provided art object.
	 */
	public function getObjectFromArt(art:Dynamic):Dynamic {

		for (object in _viewObjects.keys()) {

			if (_viewObjects.get(object) == art)
				return object;
		}

		return null;
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
	private function destroyArt(citruxObject:Dynamic):Void {

	}
}