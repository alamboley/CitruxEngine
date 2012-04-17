package com.citruxengine.view.spriteview;

import com.citruxengine.core.CitruxObject;
import com.citruxengine.view.ISpriteView;
import com.citruxengine.view.spriteview.Box2DDebugArt;
import com.citruxengine.view.spriteview.SpriteView;

import nme.Assets;
import nme.display.Bitmap;
import nme.display.DisplayObject;
import nme.display.Sprite;


class SpriteArt extends Sprite {

	public var citruxObject(getCitruxObject, never):ISpriteView;
	public var view(getView, setView):Dynamic;
	public var animation(getAnimation, setAnimation):String;
	public var registration(getRegistration, setRegistration):String;
	public var group(getGroup, setGroup):Int;

	public var content:DisplayObject;

	var _citruxObject:ISpriteView;
	var _view:Dynamic;
	var _animation:String;
	var _registration:String;
	var _group:Int;

	public function new(object:ISpriteView) {

		super();

		_citruxObject = object;

		this.name = cast(_citruxObject, CitruxObject).name;
	}

	public function update(stateView:SpriteView):Void {

		this.scaleX = _citruxObject.inverted ? - 1 : 1;
		//position = object position + (camera position * inverse parallax)
		this.x =  _citruxObject.x + (-stateView.viewRoot.x * (1 - _citruxObject.parallax)) + _citruxObject.offsetX * this.scaleX;
		this.y = _citruxObject.y + (-stateView.viewRoot.y * (1 - _citruxObject.parallax)) + _citruxObject.offsetY;
		this.rotation = _citruxObject.rotation;
		this.visible = _citruxObject.visible;
		registration = _citruxObject.registration;
		view = _citruxObject.view;
		animation = _citruxObject.animation;
		group = _citruxObject.group;
	}

	public function getCitruxObject():ISpriteView {
		return _citruxObject;
	}

	public function getView():Dynamic {
		return _view;
	}

	public function setView(value:Dynamic):Dynamic {

		if (_view == value) {
			return _view;
		}
		_view = value;

		if (_view != null) {

			if (Std.is(_view, String)) {

				// view property is a path to an image?
				var classString:String = _view;
				var suffix:String = classString.substr(classString.length - 4).toLowerCase();
				if (suffix == ".png" || suffix == ".jpg") {

					content = new Bitmap(Assets.getBitmapData(_view));
					this.addChild(content);
				}

			} else if (Std.is(_view, Class)) {

				content = Type.createInstance(_citruxObject.view, []);
				this.addChild(content);

			} else {
				trace("SpriteArt doesn't know how to create a graphic object from the provided CitruxObject " + citruxObject);
			}
		}

		return _view;
	}

	public function getAnimation():String {
		return _animation;
	}

	public function setAnimation(value:String):String {

		if (_animation == value)
			return _animation;

		_animation = value;

		return _animation;
	}

	public function getRegistration():String {
		return _registration;
	}

	public function setRegistration(value:String):String {

		if (_registration == value || content == null)
			return _registration;

		_registration = value;

		if (_registration == "topLeft") {

			content.x = 0;
			content.y = 0;

		} else if (_registration == "center") {

			content.x = -content.width / 2;
			content.y = -content.height / 2;
		}

		return _registration;
	}

	public function getGroup():Int {
		return _group;
	}

	public function setGroup(value:Int):Int {
		return _group = value;
	}
}