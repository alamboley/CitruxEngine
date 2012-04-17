package com.citruxengine.view.spriteview;

import com.citruxengine.view.CitruxView;
import com.citruxengine.view.ISpriteView;
import com.citruxengine.view.spriteview.SpriteArt;

import nme.display.Sprite;

class SpriteView extends CitruxView {

	public var viewRoot(getViewRoot, never):Sprite;

	var _viewRoot:Sprite;

	public function new(root:Sprite) {

		super(root, ISpriteView);

		_viewRoot = new Sprite();
		root.addChild(_viewRoot);
	}

	public function getViewRoot():Sprite {
		return _viewRoot;
	}

	override public function update():Void {

		super.update();

		//Update Camera
		if (cameraTarget != null) {

			var diffX:Float = (-cameraTarget.getX() + cameraOffset.x) - _viewRoot.x;
			var diffY:Float = (-cameraTarget.getY() + cameraOffset.y) - _viewRoot.y;
			var velocityX:Float = diffX * cameraEasing.x;
			var velocityY:Float = diffY * cameraEasing.y;
			_viewRoot.x += velocityX;
			_viewRoot.y += velocityY;
			
			//Constrain to camera bounds
			if (cameraBounds != null) {

				if (-_viewRoot.x <= cameraBounds.left || cameraBounds.width < cameraLensWidth)
					_viewRoot.x = -cameraBounds.left;
				else if (-_viewRoot.x + cameraLensWidth >= cameraBounds.right)
					_viewRoot.x = -cameraBounds.right + cameraLensWidth;
				
				if (-_viewRoot.y <= cameraBounds.top || cameraBounds.height < cameraLensHeight)
					_viewRoot.y = -cameraBounds.top;
				else if (-_viewRoot.y + cameraLensHeight >= cameraBounds.bottom)
					_viewRoot.y = -cameraBounds.bottom + cameraLensHeight;
			}
		}

		//Update art positions
		for (sprite in _viewObjects.iterator()) {

			sprite = cast(sprite, SpriteArt);

			if (sprite.group != sprite.citruxObject.group)
				_updateGroupForSprite(sprite);

			sprite.update(this);
		}
	}

	override private function createArt(citruxObject:Dynamic):Dynamic {

		var viewObject:ISpriteView = cast(citruxObject, ISpriteView);

		var art:SpriteArt = new SpriteArt(viewObject);

		//Perform an initial update
		art.update(this);
		
		_updateGroupForSprite(art);

		return art;
	}

	override private function destroyArt(citruxObject:Dynamic):Void {

		var spriteArt:SpriteArt = _viewObjects.get(citruxObject);
		spriteArt.parent.removeChild(spriteArt);
	}

	private function _updateGroupForSprite(sprite:SpriteArt):Void {

		//Create the container sprite (group) if it has not been created yet.
		while (sprite.group >= _viewRoot.numChildren)
			_viewRoot.addChild(new Sprite());

		//Add the sprite to the appropriate group
		cast(_viewRoot.getChildAt(sprite.group), Sprite).addChild(sprite);
	}
}