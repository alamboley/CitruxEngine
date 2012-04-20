package com.citruxengine.utils;

import com.citruxengine.core.CitruxObject;

import format.swf.MovieClip;

class ObjectMaker {

	public function new() {

	}

	/**
	 * You can pass a custom-created MovieClip object into this method to auto-create CitruxObjects.
	 * This method looks at all the children of the MovieClip you passed in, and creates a CitruxObject with the
	 * x, y, width, height, name, and rotation of the of MovieClip.
	 * 
	 * <p>In order for this to properly create a CitruxObject from a MovieClip, the MovieClip needs to have a variable
	 * called <code>classPath</code> on it, which will provide, in String form, the full
	 * package and class name of the CitruxObject that it is supposed to create (such as "myGame.MyHero"). You can specify
	 * this in frame 1 of the MovieClip asset in Flash.</p>
	 * 
	 * <p>You can also initialize your CitruxObject's parameters by creating a "params" variable (of type Object)
	 * on your MovieClip. The "params" object will be passed into the newly created CitruxObject.</p>
	 * 
	 * <p>So, within the first frame of each child-MovieClip of the "layout" MovieClip,
	 * you should specify something like the following:</p>
	 * 
	 * <p><code>var classPath="com.citruxengine.objects.platformer.Hero";</code></p>
	 * 
	 * <p><code>var params={view: "Patch.swf", jumpHeight: 14};</code></p>
	 */
	 static public function FromMovieClip(mc:MovieClip, addToCurrentState:Bool = true):Array<CitruxObject> {

	 	var a:Array<CitruxObject> = [];
	 	var child:MovieClip;

	 	for (i in 0...mc.numChildren) {

	 		child = cast(mc.getChildAt(i), MovieClip);

	 		// TODO : find a way to access code inside movieclips!

	 		for (param in Reflect.fields(child)) {

	 		}

	 		if (child != null) {

	 			//trace(Reflect.field(child.getChildAt(0), "className"));
	 			//trace(child.classname);
	 			//var objectClass:Class<Dynamic> = Type.getClass(getDefinitionByName(child.classname));
	 		}
	 	}

	 	return a;
	 }
}