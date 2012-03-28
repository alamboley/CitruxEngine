$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof box2D=='undefined') box2D = {}
if(!box2D.dynamics) box2D.dynamics = {}
if(!box2D.dynamics.joints) box2D.dynamics.joints = {}
box2D.dynamics.joints.B2Joint = function(def) {
	if( def === $_ ) return;
	this.m_edgeA = new box2D.dynamics.joints.B2JointEdge();
	this.m_edgeB = new box2D.dynamics.joints.B2JointEdge();
	this.m_localCenterA = new box2D.common.math.B2Vec2();
	this.m_localCenterB = new box2D.common.math.B2Vec2();
	box2D.common.B2Settings.b2Assert(def.bodyA != def.bodyB);
	this.m_type = def.type;
	this.m_prev = null;
	this.m_next = null;
	this.m_bodyA = def.bodyA;
	this.m_bodyB = def.bodyB;
	this.m_collideConnected = def.collideConnected;
	this.m_islandFlag = false;
	this.m_userData = def.userData;
}
box2D.dynamics.joints.B2Joint.__name__ = ["box2D","dynamics","joints","B2Joint"];
box2D.dynamics.joints.B2Joint.create = function(def,allocator) {
	var joint = null;
	switch(def.type) {
	case box2D.dynamics.joints.B2Joint.e_distanceJoint:
		joint = new box2D.dynamics.joints.B2DistanceJoint((function($this) {
			var $r;
			var $t = def;
			if(Std["is"]($t,box2D.dynamics.joints.B2DistanceJointDef)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		break;
	case box2D.dynamics.joints.B2Joint.e_mouseJoint:
		joint = new box2D.dynamics.joints.B2MouseJoint((function($this) {
			var $r;
			var $t = def;
			if(Std["is"]($t,box2D.dynamics.joints.B2MouseJointDef)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		break;
	case box2D.dynamics.joints.B2Joint.e_prismaticJoint:
		joint = new box2D.dynamics.joints.B2PrismaticJoint((function($this) {
			var $r;
			var $t = def;
			if(Std["is"]($t,box2D.dynamics.joints.B2PrismaticJointDef)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		break;
	case box2D.dynamics.joints.B2Joint.e_revoluteJoint:
		joint = new box2D.dynamics.joints.B2RevoluteJoint((function($this) {
			var $r;
			var $t = def;
			if(Std["is"]($t,box2D.dynamics.joints.B2RevoluteJointDef)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		break;
	case box2D.dynamics.joints.B2Joint.e_pulleyJoint:
		joint = new box2D.dynamics.joints.B2PulleyJoint((function($this) {
			var $r;
			var $t = def;
			if(Std["is"]($t,box2D.dynamics.joints.B2PulleyJointDef)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		break;
	case box2D.dynamics.joints.B2Joint.e_gearJoint:
		joint = new box2D.dynamics.joints.B2GearJoint((function($this) {
			var $r;
			var $t = def;
			if(Std["is"]($t,box2D.dynamics.joints.B2GearJointDef)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		break;
	case box2D.dynamics.joints.B2Joint.e_lineJoint:
		joint = new box2D.dynamics.joints.B2LineJoint((function($this) {
			var $r;
			var $t = def;
			if(Std["is"]($t,box2D.dynamics.joints.B2LineJointDef)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		break;
	case box2D.dynamics.joints.B2Joint.e_weldJoint:
		joint = new box2D.dynamics.joints.B2WeldJoint((function($this) {
			var $r;
			var $t = def;
			if(Std["is"]($t,box2D.dynamics.joints.B2WeldJointDef)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		break;
	case box2D.dynamics.joints.B2Joint.e_frictionJoint:
		joint = new box2D.dynamics.joints.B2FrictionJoint((function($this) {
			var $r;
			var $t = def;
			if(Std["is"]($t,box2D.dynamics.joints.B2FrictionJointDef)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		break;
	default:
	}
	return joint;
}
box2D.dynamics.joints.B2Joint.destroy = function(joint,allocator) {
}
box2D.dynamics.joints.B2Joint.prototype.getType = function() {
	return this.m_type;
}
box2D.dynamics.joints.B2Joint.prototype.getAnchorA = function() {
	return null;
}
box2D.dynamics.joints.B2Joint.prototype.getAnchorB = function() {
	return null;
}
box2D.dynamics.joints.B2Joint.prototype.getReactionForce = function(inv_dt) {
	return null;
}
box2D.dynamics.joints.B2Joint.prototype.getReactionTorque = function(inv_dt) {
	return 0.0;
}
box2D.dynamics.joints.B2Joint.prototype.getBodyA = function() {
	return this.m_bodyA;
}
box2D.dynamics.joints.B2Joint.prototype.getBodyB = function() {
	return this.m_bodyB;
}
box2D.dynamics.joints.B2Joint.prototype.getNext = function() {
	return this.m_next;
}
box2D.dynamics.joints.B2Joint.prototype.getUserData = function() {
	return this.m_userData;
}
box2D.dynamics.joints.B2Joint.prototype.setUserData = function(data) {
	this.m_userData = data;
}
box2D.dynamics.joints.B2Joint.prototype.isActive = function() {
	return this.m_bodyA.isActive() && this.m_bodyB.isActive();
}
box2D.dynamics.joints.B2Joint.prototype.initVelocityConstraints = function(step) {
}
box2D.dynamics.joints.B2Joint.prototype.solveVelocityConstraints = function(step) {
}
box2D.dynamics.joints.B2Joint.prototype.finalizeVelocityConstraints = function() {
}
box2D.dynamics.joints.B2Joint.prototype.solvePositionConstraints = function(baumgarte) {
	return false;
}
box2D.dynamics.joints.B2Joint.prototype.m_type = null;
box2D.dynamics.joints.B2Joint.prototype.m_prev = null;
box2D.dynamics.joints.B2Joint.prototype.m_next = null;
box2D.dynamics.joints.B2Joint.prototype.m_edgeA = null;
box2D.dynamics.joints.B2Joint.prototype.m_edgeB = null;
box2D.dynamics.joints.B2Joint.prototype.m_bodyA = null;
box2D.dynamics.joints.B2Joint.prototype.m_bodyB = null;
box2D.dynamics.joints.B2Joint.prototype.m_islandFlag = null;
box2D.dynamics.joints.B2Joint.prototype.m_collideConnected = null;
box2D.dynamics.joints.B2Joint.prototype.m_userData = null;
box2D.dynamics.joints.B2Joint.prototype.m_localCenterA = null;
box2D.dynamics.joints.B2Joint.prototype.m_localCenterB = null;
box2D.dynamics.joints.B2Joint.prototype.m_invMassA = null;
box2D.dynamics.joints.B2Joint.prototype.m_invMassB = null;
box2D.dynamics.joints.B2Joint.prototype.m_invIA = null;
box2D.dynamics.joints.B2Joint.prototype.m_invIB = null;
box2D.dynamics.joints.B2Joint.prototype.__class__ = box2D.dynamics.joints.B2Joint;
box2D.dynamics.joints.B2MouseJoint = function(def) {
	if( def === $_ ) return;
	box2D.dynamics.joints.B2Joint.call(this,def);
	this.K = new box2D.common.math.B2Mat22();
	this.K1 = new box2D.common.math.B2Mat22();
	this.K2 = new box2D.common.math.B2Mat22();
	this.m_localAnchor = new box2D.common.math.B2Vec2();
	this.m_target = new box2D.common.math.B2Vec2();
	this.m_impulse = new box2D.common.math.B2Vec2();
	this.m_mass = new box2D.common.math.B2Mat22();
	this.m_C = new box2D.common.math.B2Vec2();
	this.m_target.setV(def.target);
	var tX = this.m_target.x - this.m_bodyB.m_xf.position.x;
	var tY = this.m_target.y - this.m_bodyB.m_xf.position.y;
	var tMat = this.m_bodyB.m_xf.R;
	this.m_localAnchor.x = tX * tMat.col1.x + tY * tMat.col1.y;
	this.m_localAnchor.y = tX * tMat.col2.x + tY * tMat.col2.y;
	this.m_maxForce = def.maxForce;
	this.m_impulse.setZero();
	this.m_frequencyHz = def.frequencyHz;
	this.m_dampingRatio = def.dampingRatio;
	this.m_beta = 0.0;
	this.m_gamma = 0.0;
}
box2D.dynamics.joints.B2MouseJoint.__name__ = ["box2D","dynamics","joints","B2MouseJoint"];
box2D.dynamics.joints.B2MouseJoint.__super__ = box2D.dynamics.joints.B2Joint;
for(var k in box2D.dynamics.joints.B2Joint.prototype ) box2D.dynamics.joints.B2MouseJoint.prototype[k] = box2D.dynamics.joints.B2Joint.prototype[k];
box2D.dynamics.joints.B2MouseJoint.prototype.getAnchorA = function() {
	return this.m_target;
}
box2D.dynamics.joints.B2MouseJoint.prototype.getAnchorB = function() {
	return this.m_bodyB.getWorldPoint(this.m_localAnchor);
}
box2D.dynamics.joints.B2MouseJoint.prototype.getReactionForce = function(inv_dt) {
	return new box2D.common.math.B2Vec2(inv_dt * this.m_impulse.x,inv_dt * this.m_impulse.y);
}
box2D.dynamics.joints.B2MouseJoint.prototype.getReactionTorque = function(inv_dt) {
	return 0.0;
}
box2D.dynamics.joints.B2MouseJoint.prototype.getTarget = function() {
	return this.m_target;
}
box2D.dynamics.joints.B2MouseJoint.prototype.setTarget = function(target) {
	if(this.m_bodyB.isAwake() == false) this.m_bodyB.setAwake(true);
	this.m_target = target;
}
box2D.dynamics.joints.B2MouseJoint.prototype.getMaxForce = function() {
	return this.m_maxForce;
}
box2D.dynamics.joints.B2MouseJoint.prototype.setMaxForce = function(maxForce) {
	this.m_maxForce = maxForce;
}
box2D.dynamics.joints.B2MouseJoint.prototype.getFrequency = function() {
	return this.m_frequencyHz;
}
box2D.dynamics.joints.B2MouseJoint.prototype.setFrequency = function(hz) {
	this.m_frequencyHz = hz;
}
box2D.dynamics.joints.B2MouseJoint.prototype.getDampingRatio = function() {
	return this.m_dampingRatio;
}
box2D.dynamics.joints.B2MouseJoint.prototype.setDampingRatio = function(ratio) {
	this.m_dampingRatio = ratio;
}
box2D.dynamics.joints.B2MouseJoint.prototype.K = null;
box2D.dynamics.joints.B2MouseJoint.prototype.K1 = null;
box2D.dynamics.joints.B2MouseJoint.prototype.K2 = null;
box2D.dynamics.joints.B2MouseJoint.prototype.initVelocityConstraints = function(step) {
	var b = this.m_bodyB;
	var mass = b.getMass();
	var omega = 2.0 * Math.PI * this.m_frequencyHz;
	var d = 2.0 * mass * this.m_dampingRatio * omega;
	var k = mass * omega * omega;
	this.m_gamma = step.dt * (d + step.dt * k);
	this.m_gamma = this.m_gamma != 0?1 / this.m_gamma:0.0;
	this.m_beta = step.dt * k * this.m_gamma;
	var tMat;
	tMat = b.m_xf.R;
	var rX = this.m_localAnchor.x - b.m_sweep.localCenter.x;
	var rY = this.m_localAnchor.y - b.m_sweep.localCenter.y;
	var tX = tMat.col1.x * rX + tMat.col2.x * rY;
	rY = tMat.col1.y * rX + tMat.col2.y * rY;
	rX = tX;
	var invMass = b.m_invMass;
	var invI = b.m_invI;
	this.K1.col1.x = invMass;
	this.K1.col2.x = 0.0;
	this.K1.col1.y = 0.0;
	this.K1.col2.y = invMass;
	this.K2.col1.x = invI * rY * rY;
	this.K2.col2.x = -invI * rX * rY;
	this.K2.col1.y = -invI * rX * rY;
	this.K2.col2.y = invI * rX * rX;
	this.K.setM(this.K1);
	this.K.addM(this.K2);
	this.K.col1.x += this.m_gamma;
	this.K.col2.y += this.m_gamma;
	this.K.getInverse(this.m_mass);
	this.m_C.x = b.m_sweep.c.x + rX - this.m_target.x;
	this.m_C.y = b.m_sweep.c.y + rY - this.m_target.y;
	b.m_angularVelocity *= 0.98;
	this.m_impulse.x *= step.dtRatio;
	this.m_impulse.y *= step.dtRatio;
	b.m_linearVelocity.x += invMass * this.m_impulse.x;
	b.m_linearVelocity.y += invMass * this.m_impulse.y;
	b.m_angularVelocity += invI * (rX * this.m_impulse.y - rY * this.m_impulse.x);
}
box2D.dynamics.joints.B2MouseJoint.prototype.solveVelocityConstraints = function(step) {
	var b = this.m_bodyB;
	var tMat;
	var tX;
	var tY;
	tMat = b.m_xf.R;
	var rX = this.m_localAnchor.x - b.m_sweep.localCenter.x;
	var rY = this.m_localAnchor.y - b.m_sweep.localCenter.y;
	tX = tMat.col1.x * rX + tMat.col2.x * rY;
	rY = tMat.col1.y * rX + tMat.col2.y * rY;
	rX = tX;
	var CdotX = b.m_linearVelocity.x + -b.m_angularVelocity * rY;
	var CdotY = b.m_linearVelocity.y + b.m_angularVelocity * rX;
	tMat = this.m_mass;
	tX = CdotX + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
	tY = CdotY + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
	var impulseX = -(tMat.col1.x * tX + tMat.col2.x * tY);
	var impulseY = -(tMat.col1.y * tX + tMat.col2.y * tY);
	var oldImpulseX = this.m_impulse.x;
	var oldImpulseY = this.m_impulse.y;
	this.m_impulse.x += impulseX;
	this.m_impulse.y += impulseY;
	var maxImpulse = step.dt * this.m_maxForce;
	if(this.m_impulse.lengthSquared() > maxImpulse * maxImpulse) this.m_impulse.multiply(maxImpulse / this.m_impulse.length());
	impulseX = this.m_impulse.x - oldImpulseX;
	impulseY = this.m_impulse.y - oldImpulseY;
	b.m_linearVelocity.x += b.m_invMass * impulseX;
	b.m_linearVelocity.y += b.m_invMass * impulseY;
	b.m_angularVelocity += b.m_invI * (rX * impulseY - rY * impulseX);
}
box2D.dynamics.joints.B2MouseJoint.prototype.solvePositionConstraints = function(baumgarte) {
	return true;
}
box2D.dynamics.joints.B2MouseJoint.prototype.m_localAnchor = null;
box2D.dynamics.joints.B2MouseJoint.prototype.m_target = null;
box2D.dynamics.joints.B2MouseJoint.prototype.m_impulse = null;
box2D.dynamics.joints.B2MouseJoint.prototype.m_mass = null;
box2D.dynamics.joints.B2MouseJoint.prototype.m_C = null;
box2D.dynamics.joints.B2MouseJoint.prototype.m_maxForce = null;
box2D.dynamics.joints.B2MouseJoint.prototype.m_frequencyHz = null;
box2D.dynamics.joints.B2MouseJoint.prototype.m_dampingRatio = null;
box2D.dynamics.joints.B2MouseJoint.prototype.m_beta = null;
box2D.dynamics.joints.B2MouseJoint.prototype.m_gamma = null;
box2D.dynamics.joints.B2MouseJoint.prototype.__class__ = box2D.dynamics.joints.B2MouseJoint;
if(!box2D.collision) box2D.collision = {}
box2D.collision.B2ContactPoint = function(p) {
	if( p === $_ ) return;
	this.position = new box2D.common.math.B2Vec2();
	this.velocity = new box2D.common.math.B2Vec2();
	this.normal = new box2D.common.math.B2Vec2();
	this.id = new box2D.collision.B2ContactID();
}
box2D.collision.B2ContactPoint.__name__ = ["box2D","collision","B2ContactPoint"];
box2D.collision.B2ContactPoint.prototype.shape1 = null;
box2D.collision.B2ContactPoint.prototype.shape2 = null;
box2D.collision.B2ContactPoint.prototype.position = null;
box2D.collision.B2ContactPoint.prototype.velocity = null;
box2D.collision.B2ContactPoint.prototype.normal = null;
box2D.collision.B2ContactPoint.prototype.separation = null;
box2D.collision.B2ContactPoint.prototype.friction = null;
box2D.collision.B2ContactPoint.prototype.restitution = null;
box2D.collision.B2ContactPoint.prototype.id = null;
box2D.collision.B2ContactPoint.prototype.__class__ = box2D.collision.B2ContactPoint;
IntHash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.keys = function() {
	var a = new Array();
	for( x in this.h ) a.push(x);
	return a.iterator();
}
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}};
}
IntHash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{" == null?"null":"{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i == null?"null":i;
		s.b[s.b.length] = " => " == null?"null":" => ";
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.b[s.b.length] = ", " == null?"null":", ";
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
IntHash.prototype.__class__ = IntHash;
if(typeof com=='undefined') com = {}
if(!com.citruxengine) com.citruxengine = {}
if(!com.citruxengine.core) com.citruxengine.core = {}
com.citruxengine.core.CitruxObject = function(name,params) {
	if( name === $_ ) return;
	this.kill = false;
	this.name = name;
	if(params != null) this.setParams(params);
}
com.citruxengine.core.CitruxObject.__name__ = ["com","citruxengine","core","CitruxObject"];
com.citruxengine.core.CitruxObject.prototype.name = null;
com.citruxengine.core.CitruxObject.prototype.kill = null;
com.citruxengine.core.CitruxObject.prototype.destroy = function() {
}
com.citruxengine.core.CitruxObject.prototype.update = function(timeDelta) {
}
com.citruxengine.core.CitruxObject.prototype.setParams = function(object) {
	var _g = 0, _g1 = Reflect.fields(object);
	while(_g < _g1.length) {
		var param = _g1[_g];
		++_g;
		try {
			if(Reflect.field(object,param) == "true") Reflect.setField(this,param,true); else if(Reflect.field(object,param) == "false") Reflect.setField(this,param,false); else Reflect.setField(this,param,Reflect.field(object,param));
		} catch( e ) {
			haxe.Log.trace("Warning: The parameter " + param + " does not exist on object : " + this.name + ", with type : " + this,{ fileName : "CitruxObject.hx", lineNumber : 44, className : "com.citruxengine.core.CitruxObject", methodName : "setParams"});
		}
	}
}
com.citruxengine.core.CitruxObject.prototype.__class__ = com.citruxengine.core.CitruxObject;
if(!com.citruxengine.view) com.citruxengine.view = {}
com.citruxengine.view.ISpriteView = function() { }
com.citruxengine.view.ISpriteView.__name__ = ["com","citruxengine","view","ISpriteView"];
com.citruxengine.view.ISpriteView.prototype.x = null;
com.citruxengine.view.ISpriteView.prototype.y = null;
com.citruxengine.view.ISpriteView.prototype.parallax = null;
com.citruxengine.view.ISpriteView.prototype.rotation = null;
com.citruxengine.view.ISpriteView.prototype.group = null;
com.citruxengine.view.ISpriteView.prototype.visible = null;
com.citruxengine.view.ISpriteView.prototype.view = null;
com.citruxengine.view.ISpriteView.prototype.animation = null;
com.citruxengine.view.ISpriteView.prototype.inverted = null;
com.citruxengine.view.ISpriteView.prototype.offsetX = null;
com.citruxengine.view.ISpriteView.prototype.offsetY = null;
com.citruxengine.view.ISpriteView.prototype.registration = null;
com.citruxengine.view.ISpriteView.prototype.getX = null;
com.citruxengine.view.ISpriteView.prototype.getY = null;
com.citruxengine.view.ISpriteView.prototype.getParallax = null;
com.citruxengine.view.ISpriteView.prototype.getRotation = null;
com.citruxengine.view.ISpriteView.prototype.getGroup = null;
com.citruxengine.view.ISpriteView.prototype.getVisible = null;
com.citruxengine.view.ISpriteView.prototype.getView = null;
com.citruxengine.view.ISpriteView.prototype.getAnimation = null;
com.citruxengine.view.ISpriteView.prototype.getInverted = null;
com.citruxengine.view.ISpriteView.prototype.getOffsetX = null;
com.citruxengine.view.ISpriteView.prototype.getOffsetY = null;
com.citruxengine.view.ISpriteView.prototype.getRegistration = null;
com.citruxengine.view.ISpriteView.prototype.__class__ = com.citruxengine.view.ISpriteView;
if(!com.citruxengine.objects) com.citruxengine.objects = {}
com.citruxengine.objects.PhysicsObject = function(name,params) {
	if( name === $_ ) return;
	this._ce = com.citruxengine.core.CitruxEngine.getInstance();
	this._box2D = (function($this) {
		var $r;
		var $t = $this._ce.getState().getFirstObjectByType(com.citruxengine.physics.Box2D);
		if(Std["is"]($t,com.citruxengine.physics.Box2D)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	this.gravity = 1.6;
	this._inverted = false;
	this.setParallax(1);
	this._animation = "";
	this.setVisible(true);
	this.setX(this.setY(this.setRadius(this.setRotation(this.setOffsetX(this.setOffsetY(0))))));
	this.setWidth(30 * this._box2D.getScale());
	this.setHeight(30 * this._box2D.getScale());
	this.setGroup(0);
	this.setView(jeash.display.MovieClip);
	this.setRegistration("center");
	com.citruxengine.core.CitruxObject.call(this,name,params);
	if(this._box2D == null) {
		haxe.Log.trace("Cannot create PhysicsObject when a Box2D object has not been added to the state.",{ fileName : "PhysicsObject.hx", lineNumber : 73, className : "com.citruxengine.objects.PhysicsObject", methodName : "new"});
		return;
	}
	this.defineBody();
	this.createBody();
	this.createShape();
	this.defineFixture();
	this.createFixture();
	this.defineJoint();
	this.createJoint();
}
com.citruxengine.objects.PhysicsObject.__name__ = ["com","citruxengine","objects","PhysicsObject"];
com.citruxengine.objects.PhysicsObject.__super__ = com.citruxengine.core.CitruxObject;
for(var k in com.citruxengine.core.CitruxObject.prototype ) com.citruxengine.objects.PhysicsObject.prototype[k] = com.citruxengine.core.CitruxObject.prototype[k];
com.citruxengine.objects.PhysicsObject.prototype.x = null;
com.citruxengine.objects.PhysicsObject.prototype.y = null;
com.citruxengine.objects.PhysicsObject.prototype.parallax = null;
com.citruxengine.objects.PhysicsObject.prototype.rotation = null;
com.citruxengine.objects.PhysicsObject.prototype.group = null;
com.citruxengine.objects.PhysicsObject.prototype.visible = null;
com.citruxengine.objects.PhysicsObject.prototype.view = null;
com.citruxengine.objects.PhysicsObject.prototype.animation = null;
com.citruxengine.objects.PhysicsObject.prototype.inverted = null;
com.citruxengine.objects.PhysicsObject.prototype.offsetX = null;
com.citruxengine.objects.PhysicsObject.prototype.offsetY = null;
com.citruxengine.objects.PhysicsObject.prototype.registration = null;
com.citruxengine.objects.PhysicsObject.prototype.width = null;
com.citruxengine.objects.PhysicsObject.prototype.height = null;
com.citruxengine.objects.PhysicsObject.prototype.radius = null;
com.citruxengine.objects.PhysicsObject.prototype.body = null;
com.citruxengine.objects.PhysicsObject.prototype.gravity = null;
com.citruxengine.objects.PhysicsObject.prototype._ce = null;
com.citruxengine.objects.PhysicsObject.prototype._box2D = null;
com.citruxengine.objects.PhysicsObject.prototype._bodyDef = null;
com.citruxengine.objects.PhysicsObject.prototype._body = null;
com.citruxengine.objects.PhysicsObject.prototype._shape = null;
com.citruxengine.objects.PhysicsObject.prototype._fixtureDef = null;
com.citruxengine.objects.PhysicsObject.prototype._fixture = null;
com.citruxengine.objects.PhysicsObject.prototype._inverted = null;
com.citruxengine.objects.PhysicsObject.prototype._animation = null;
com.citruxengine.objects.PhysicsObject.prototype.destroy = function() {
	com.citruxengine.core.CitruxObject.prototype.destroy.call(this);
}
com.citruxengine.objects.PhysicsObject.prototype.update = function(timeDelta) {
	if(this._bodyDef.type == box2D.dynamics.B2Body.b2_dynamicBody) {
		var velocity = this._body.getLinearVelocity();
		velocity.y += this.gravity;
		this._body.setLinearVelocity(velocity);
	}
}
com.citruxengine.objects.PhysicsObject.prototype.defineBody = function() {
	this._bodyDef = new box2D.dynamics.B2BodyDef();
	this._bodyDef.type = box2D.dynamics.B2Body.b2_dynamicBody;
	this._bodyDef.position.set(this.getX(),this.getY());
	this._bodyDef.angle = this.getRotation();
}
com.citruxengine.objects.PhysicsObject.prototype.createBody = function() {
	this._body = this._box2D.getWorld().createBody(this._bodyDef);
	this._body.setUserData(this);
}
com.citruxengine.objects.PhysicsObject.prototype.createShape = function() {
	if(this.getRadius() != 0) {
		this._shape = new box2D.collision.shapes.B2CircleShape();
		this._shape.m_radius = this.getRadius() / this._box2D.getScale() / 2;
	} else {
		this._shape = new box2D.collision.shapes.B2PolygonShape();
		((function($this) {
			var $r;
			var $t = $this._shape;
			if(Std["is"]($t,box2D.collision.shapes.B2PolygonShape)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).setAsBox(this.getWidth() / this._box2D.getScale() / 2,this.getHeight() / this._box2D.getScale() / 2);
	}
}
com.citruxengine.objects.PhysicsObject.prototype.defineFixture = function() {
	this._fixtureDef = new box2D.dynamics.B2FixtureDef();
	this._fixtureDef.shape = this._shape;
	this._fixtureDef.density = 1;
	this._fixtureDef.friction = 0.6;
	this._fixtureDef.restitution = 0.3;
}
com.citruxengine.objects.PhysicsObject.prototype.createFixture = function() {
	this._fixture = this._body.createFixture(this._fixtureDef);
}
com.citruxengine.objects.PhysicsObject.prototype.defineJoint = function() {
}
com.citruxengine.objects.PhysicsObject.prototype.createJoint = function() {
}
com.citruxengine.objects.PhysicsObject.prototype.getX = function() {
	if(this._body != null) return this._body.getPosition().x * this._box2D.getScale(); else return this.x / this._box2D.getScale();
}
com.citruxengine.objects.PhysicsObject.prototype.setX = function(value) {
	this.x = value / this._box2D.getScale();
	if(this._body != null) {
		var pos = this._body.getPosition();
		pos.x = this.getX();
		this._body.setTransform(new box2D.common.math.B2Transform(pos,box2D.common.math.B2Mat22.fromAngle(this._body.getAngle())));
	}
	return value;
}
com.citruxengine.objects.PhysicsObject.prototype.getY = function() {
	if(this._body != null) return this._body.getPosition().y * this._box2D.getScale(); else return this.y / this._box2D.getScale();
}
com.citruxengine.objects.PhysicsObject.prototype.setY = function(value) {
	this.y = value / this._box2D.getScale();
	if(this._body != null) {
		var pos = this._body.getPosition();
		pos.y = this.getY();
		this._body.setTransform(new box2D.common.math.B2Transform(pos,box2D.common.math.B2Mat22.fromAngle(this._body.getAngle())));
	}
	return value;
}
com.citruxengine.objects.PhysicsObject.prototype.getWidth = function() {
	return this.width;
}
com.citruxengine.objects.PhysicsObject.prototype.setWidth = function(value) {
	return this.width = value / this._box2D.getScale();
}
com.citruxengine.objects.PhysicsObject.prototype.getHeight = function() {
	return this.height;
}
com.citruxengine.objects.PhysicsObject.prototype.setHeight = function(value) {
	return this.height = value / this._box2D.getScale();
}
com.citruxengine.objects.PhysicsObject.prototype.getRadius = function() {
	return this.radius;
}
com.citruxengine.objects.PhysicsObject.prototype.setRadius = function(value) {
	return this.radius = value / this._box2D.getScale();
}
com.citruxengine.objects.PhysicsObject.prototype.getParallax = function() {
	return this.parallax;
}
com.citruxengine.objects.PhysicsObject.prototype.setParallax = function(value) {
	return this.parallax = value;
}
com.citruxengine.objects.PhysicsObject.prototype.getRotation = function() {
	if(this._body != null) return this._body.getAngle() * 180 / Math.PI; else return this.rotation / 180 * Math.PI;
}
com.citruxengine.objects.PhysicsObject.prototype.setRotation = function(value) {
	this.rotation = value * Math.PI / 180;
	if(this._body != null) this._body.setTransform(new box2D.common.math.B2Transform(this._body.getPosition(),box2D.common.math.B2Mat22.fromAngle(this.getRotation())));
	return this.getRotation();
}
com.citruxengine.objects.PhysicsObject.prototype.getGroup = function() {
	return this.group;
}
com.citruxengine.objects.PhysicsObject.prototype.setGroup = function(value) {
	return this.group = value;
}
com.citruxengine.objects.PhysicsObject.prototype.getVisible = function() {
	return this.visible;
}
com.citruxengine.objects.PhysicsObject.prototype.setVisible = function(value) {
	return this.visible = value;
}
com.citruxengine.objects.PhysicsObject.prototype.getView = function() {
	return this.view;
}
com.citruxengine.objects.PhysicsObject.prototype.setView = function(value) {
	return this.view = value;
}
com.citruxengine.objects.PhysicsObject.prototype.getAnimation = function() {
	return this._animation;
}
com.citruxengine.objects.PhysicsObject.prototype.getInverted = function() {
	return this.inverted;
}
com.citruxengine.objects.PhysicsObject.prototype.getOffsetX = function() {
	return this.offsetX;
}
com.citruxengine.objects.PhysicsObject.prototype.setOffsetX = function(value) {
	return this.offsetX = value;
}
com.citruxengine.objects.PhysicsObject.prototype.getOffsetY = function() {
	return this.offsetY;
}
com.citruxengine.objects.PhysicsObject.prototype.setOffsetY = function(value) {
	return this.offsetY = value;
}
com.citruxengine.objects.PhysicsObject.prototype.getRegistration = function() {
	return this.registration;
}
com.citruxengine.objects.PhysicsObject.prototype.setRegistration = function(value) {
	return this.registration = value;
}
com.citruxengine.objects.PhysicsObject.prototype.getBody = function() {
	return this._body;
}
com.citruxengine.objects.PhysicsObject.prototype.__class__ = com.citruxengine.objects.PhysicsObject;
com.citruxengine.objects.PhysicsObject.__interfaces__ = [com.citruxengine.view.ISpriteView];
box2D.dynamics.B2ContactListener = function(p) {
}
box2D.dynamics.B2ContactListener.__name__ = ["box2D","dynamics","B2ContactListener"];
box2D.dynamics.B2ContactListener.prototype.beginContact = function(contact) {
}
box2D.dynamics.B2ContactListener.prototype.endContact = function(contact) {
}
box2D.dynamics.B2ContactListener.prototype.preSolve = function(contact,oldManifold) {
}
box2D.dynamics.B2ContactListener.prototype.postSolve = function(contact,impulse) {
}
box2D.dynamics.B2ContactListener.prototype.__class__ = box2D.dynamics.B2ContactListener;
if(!com.citruxengine.objects.platformer) com.citruxengine.objects.platformer = {}
com.citruxengine.objects.platformer.Platform = function(name,params) {
	if( name === $_ ) return;
	this._oneWay = false;
	com.citruxengine.objects.PhysicsObject.call(this,name,params);
}
com.citruxengine.objects.platformer.Platform.__name__ = ["com","citruxengine","objects","platformer","Platform"];
com.citruxengine.objects.platformer.Platform.__super__ = com.citruxengine.objects.PhysicsObject;
for(var k in com.citruxengine.objects.PhysicsObject.prototype ) com.citruxengine.objects.platformer.Platform.prototype[k] = com.citruxengine.objects.PhysicsObject.prototype[k];
com.citruxengine.objects.platformer.Platform.prototype._oneWay = null;
com.citruxengine.objects.platformer.Platform.prototype.destroy = function() {
	com.citruxengine.objects.PhysicsObject.prototype.destroy.call(this);
}
com.citruxengine.objects.platformer.Platform.prototype.defineBody = function() {
	com.citruxengine.objects.PhysicsObject.prototype.defineBody.call(this);
	this._bodyDef.type = box2D.dynamics.B2Body.b2_staticBody;
}
com.citruxengine.objects.platformer.Platform.prototype.defineFixture = function() {
	com.citruxengine.objects.PhysicsObject.prototype.defineFixture.call(this);
	this._fixtureDef.restitution = 0;
}
com.citruxengine.objects.platformer.Platform.prototype.createFixture = function() {
	com.citruxengine.objects.PhysicsObject.prototype.createFixture.call(this);
}
com.citruxengine.objects.platformer.Platform.prototype.beginContact = function(contact) {
}
com.citruxengine.objects.platformer.Platform.prototype.endContact = function(contact) {
}
com.citruxengine.objects.platformer.Platform.prototype.preSolve = function(contact,oldManifold) {
}
com.citruxengine.objects.platformer.Platform.prototype.postSolve = function(contact,impulse) {
}
com.citruxengine.objects.platformer.Platform.prototype.__class__ = com.citruxengine.objects.platformer.Platform;
com.citruxengine.objects.platformer.Platform.__interfaces__ = [box2D.dynamics.B2ContactListener];
box2D.collision.ClipVertex = function(p) {
	if( p === $_ ) return;
	this.v = new box2D.common.math.B2Vec2();
	this.id = new box2D.collision.B2ContactID();
}
box2D.collision.ClipVertex.__name__ = ["box2D","collision","ClipVertex"];
box2D.collision.ClipVertex.prototype.set = function(other) {
	this.v.setV(other.v);
	this.id.set(other.id);
}
box2D.collision.ClipVertex.prototype.v = null;
box2D.collision.ClipVertex.prototype.id = null;
box2D.collision.ClipVertex.prototype.__class__ = box2D.collision.ClipVertex;
if(!box2D.common) box2D.common = {}
if(!box2D.common.math) box2D.common.math = {}
box2D.common.math.B2Transform = function(pos,r) {
	if( pos === $_ ) return;
	this.position = new box2D.common.math.B2Vec2();
	this.R = new box2D.common.math.B2Mat22();
	if(pos != null) {
		this.position.setV(pos);
		this.R.setM(r);
	}
}
box2D.common.math.B2Transform.__name__ = ["box2D","common","math","B2Transform"];
box2D.common.math.B2Transform.prototype.initialize = function(pos,r) {
	this.position.setV(pos);
	this.R.setM(r);
}
box2D.common.math.B2Transform.prototype.setIdentity = function() {
	this.position.setZero();
	this.R.setIdentity();
}
box2D.common.math.B2Transform.prototype.set = function(x) {
	this.position.setV(x.position);
	this.R.setM(x.R);
}
box2D.common.math.B2Transform.prototype.getAngle = function() {
	return Math.atan2(this.R.col1.y,this.R.col1.x);
}
box2D.common.math.B2Transform.prototype.position = null;
box2D.common.math.B2Transform.prototype.R = null;
box2D.common.math.B2Transform.prototype.__class__ = box2D.common.math.B2Transform;
if(typeof jeash=='undefined') jeash = {}
if(!jeash.errors) jeash.errors = {}
jeash.errors.Error = function(message,id) {
	if( message === $_ ) return;
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
}
jeash.errors.Error.__name__ = ["jeash","errors","Error"];
jeash.errors.Error.prototype.errorID = null;
jeash.errors.Error.prototype.message = null;
jeash.errors.Error.prototype.name = null;
jeash.errors.Error.prototype.getStackTrace = function() {
	return haxe.Stack.toString(haxe.Stack.exceptionStack());
}
jeash.errors.Error.prototype.toString = function() {
	if(this.message != null) return this.message; else return "Error";
}
jeash.errors.Error.prototype.__class__ = jeash.errors.Error;
box2D.dynamics.B2Fixture = function(p) {
	if( p === $_ ) return;
	this.m_filter = new box2D.dynamics.B2FilterData();
	this.m_aabb = new box2D.collision.B2AABB();
	this.m_userData = null;
	this.m_body = null;
	this.m_next = null;
	this.m_shape = null;
	this.m_density = 0.0;
	this.m_friction = 0.0;
	this.m_restitution = 0.0;
}
box2D.dynamics.B2Fixture.__name__ = ["box2D","dynamics","B2Fixture"];
box2D.dynamics.B2Fixture.prototype.getType = function() {
	return this.m_shape.getType();
}
box2D.dynamics.B2Fixture.prototype.getShape = function() {
	return this.m_shape;
}
box2D.dynamics.B2Fixture.prototype.setSensor = function(sensor) {
	if(this.m_isSensor == sensor) return;
	this.m_isSensor = sensor;
	if(this.m_body == null) return;
	var edge = this.m_body.getContactList();
	while(edge != null) {
		var contact = edge.contact;
		var fixtureA = contact.getFixtureA();
		var fixtureB = contact.getFixtureB();
		if(fixtureA == this || fixtureB == this) contact.setSensor(fixtureA.isSensor() || fixtureB.isSensor());
		edge = edge.next;
	}
}
box2D.dynamics.B2Fixture.prototype.isSensor = function() {
	return this.m_isSensor;
}
box2D.dynamics.B2Fixture.prototype.setFilterData = function(filter) {
	this.m_filter = filter.copy();
	if(this.m_body != null) return;
	var edge = this.m_body.getContactList();
	while(edge != null) {
		var contact = edge.contact;
		var fixtureA = contact.getFixtureA();
		var fixtureB = contact.getFixtureB();
		if(fixtureA == this || fixtureB == this) contact.flagForFiltering();
		edge = edge.next;
	}
}
box2D.dynamics.B2Fixture.prototype.getFilterData = function() {
	return this.m_filter.copy();
}
box2D.dynamics.B2Fixture.prototype.getBody = function() {
	return this.m_body;
}
box2D.dynamics.B2Fixture.prototype.getNext = function() {
	return this.m_next;
}
box2D.dynamics.B2Fixture.prototype.getUserData = function() {
	return this.m_userData;
}
box2D.dynamics.B2Fixture.prototype.SetUserData = function(data) {
	this.m_userData = data;
}
box2D.dynamics.B2Fixture.prototype.testPoint = function(p) {
	return this.m_shape.testPoint(this.m_body.getTransform(),p);
}
box2D.dynamics.B2Fixture.prototype.rayCast = function(output,input) {
	return this.m_shape.rayCast(output,input,this.m_body.getTransform());
}
box2D.dynamics.B2Fixture.prototype.getMassData = function(massData) {
	if(massData == null) massData = new box2D.collision.shapes.B2MassData();
	this.m_shape.computeMass(massData,this.m_density);
	return massData;
}
box2D.dynamics.B2Fixture.prototype.setDensity = function(density) {
	this.m_density = density;
}
box2D.dynamics.B2Fixture.prototype.getDensity = function() {
	return this.m_density;
}
box2D.dynamics.B2Fixture.prototype.getFriction = function() {
	return this.m_friction;
}
box2D.dynamics.B2Fixture.prototype.setFriction = function(friction) {
	this.m_friction = friction;
}
box2D.dynamics.B2Fixture.prototype.getRestitution = function() {
	return this.m_restitution;
}
box2D.dynamics.B2Fixture.prototype.setRestitution = function(restitution) {
	this.m_restitution = restitution;
}
box2D.dynamics.B2Fixture.prototype.getAABB = function() {
	return this.m_aabb;
}
box2D.dynamics.B2Fixture.prototype.create = function(body,xf,def) {
	this.m_userData = def.userData;
	this.m_friction = def.friction;
	this.m_restitution = def.restitution;
	this.m_body = body;
	this.m_next = null;
	this.m_filter = def.filter.copy();
	this.m_isSensor = def.isSensor;
	this.m_shape = def.shape.copy();
	this.m_density = def.density;
}
box2D.dynamics.B2Fixture.prototype.destroy = function() {
	this.m_shape = null;
}
box2D.dynamics.B2Fixture.prototype.createProxy = function(broadPhase,xf) {
	this.m_shape.computeAABB(this.m_aabb,xf);
	this.m_proxy = broadPhase.createProxy(this.m_aabb,this);
}
box2D.dynamics.B2Fixture.prototype.destroyProxy = function(broadPhase) {
	if(this.m_proxy == null) return;
	broadPhase.destroyProxy(this.m_proxy);
	this.m_proxy = null;
}
box2D.dynamics.B2Fixture.prototype.synchronize = function(broadPhase,transform1,transform2) {
	if(this.m_proxy == null) return;
	var aabb1 = new box2D.collision.B2AABB();
	var aabb2 = new box2D.collision.B2AABB();
	this.m_shape.computeAABB(aabb1,transform1);
	this.m_shape.computeAABB(aabb2,transform2);
	this.m_aabb.combine(aabb1,aabb2);
	var displacement = box2D.common.math.B2Math.subtractVV(transform2.position,transform1.position);
	broadPhase.moveProxy(this.m_proxy,this.m_aabb,displacement);
}
box2D.dynamics.B2Fixture.prototype.m_massData = null;
box2D.dynamics.B2Fixture.prototype.m_aabb = null;
box2D.dynamics.B2Fixture.prototype.m_density = null;
box2D.dynamics.B2Fixture.prototype.m_next = null;
box2D.dynamics.B2Fixture.prototype.m_body = null;
box2D.dynamics.B2Fixture.prototype.m_shape = null;
box2D.dynamics.B2Fixture.prototype.m_friction = null;
box2D.dynamics.B2Fixture.prototype.m_restitution = null;
box2D.dynamics.B2Fixture.prototype.m_proxy = null;
box2D.dynamics.B2Fixture.prototype.m_filter = null;
box2D.dynamics.B2Fixture.prototype.m_isSensor = null;
box2D.dynamics.B2Fixture.prototype.m_userData = null;
box2D.dynamics.B2Fixture.prototype.__class__ = box2D.dynamics.B2Fixture;
if(!jeash.display) jeash.display = {}
jeash.display.InterpolationMethod = { __ename__ : ["jeash","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] }
jeash.display.InterpolationMethod.RGB = ["RGB",0];
jeash.display.InterpolationMethod.RGB.toString = $estr;
jeash.display.InterpolationMethod.RGB.__enum__ = jeash.display.InterpolationMethod;
jeash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
jeash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
jeash.display.InterpolationMethod.LINEAR_RGB.__enum__ = jeash.display.InterpolationMethod;
box2D.common.math.B2Sweep = function(p) {
	if( p === $_ ) return;
	this.localCenter = new box2D.common.math.B2Vec2();
	this.c0 = new box2D.common.math.B2Vec2();
	this.c = new box2D.common.math.B2Vec2();
}
box2D.common.math.B2Sweep.__name__ = ["box2D","common","math","B2Sweep"];
box2D.common.math.B2Sweep.prototype.set = function(other) {
	this.localCenter.setV(other.localCenter);
	this.c0.setV(other.c0);
	this.c.setV(other.c);
	this.a0 = other.a0;
	this.a = other.a;
	this.t0 = other.t0;
}
box2D.common.math.B2Sweep.prototype.copy = function() {
	var copy = new box2D.common.math.B2Sweep();
	copy.localCenter.setV(this.localCenter);
	copy.c0.setV(this.c0);
	copy.c.setV(this.c);
	copy.a0 = this.a0;
	copy.a = this.a;
	copy.t0 = this.t0;
	return copy;
}
box2D.common.math.B2Sweep.prototype.getTransform = function(xf,alpha) {
	xf.position.x = (1.0 - alpha) * this.c0.x + alpha * this.c.x;
	xf.position.y = (1.0 - alpha) * this.c0.y + alpha * this.c.y;
	var angle = (1.0 - alpha) * this.a0 + alpha * this.a;
	xf.R.set(angle);
	var tMat = xf.R;
	xf.position.x -= tMat.col1.x * this.localCenter.x + tMat.col2.x * this.localCenter.y;
	xf.position.y -= tMat.col1.y * this.localCenter.x + tMat.col2.y * this.localCenter.y;
}
box2D.common.math.B2Sweep.prototype.advance = function(t) {
	if(this.t0 < t && 1.0 - this.t0 > Number.MIN_VALUE) {
		var alpha = (t - this.t0) / (1.0 - this.t0);
		this.c0.x = (1.0 - alpha) * this.c0.x + alpha * this.c.x;
		this.c0.y = (1.0 - alpha) * this.c0.y + alpha * this.c.y;
		this.a0 = (1.0 - alpha) * this.a0 + alpha * this.a;
		this.t0 = t;
	}
}
box2D.common.math.B2Sweep.prototype.localCenter = null;
box2D.common.math.B2Sweep.prototype.c0 = null;
box2D.common.math.B2Sweep.prototype.c = null;
box2D.common.math.B2Sweep.prototype.a0 = null;
box2D.common.math.B2Sweep.prototype.a = null;
box2D.common.math.B2Sweep.prototype.t0 = null;
box2D.common.math.B2Sweep.prototype.__class__ = box2D.common.math.B2Sweep;
box2D.dynamics.B2ContactManager = function(p) {
	if( p === $_ ) return;
	this.m_world = null;
	this.m_contactCount = 0;
	this.m_contactFilter = box2D.dynamics.B2ContactFilter.b2_defaultFilter;
	this.m_contactListener = box2D.dynamics.B2ContactListener.b2_defaultListener;
	this.m_contactFactory = new box2D.dynamics.contacts.B2ContactFactory(this.m_allocator);
	this.m_broadPhase = new box2D.collision.B2DynamicTreeBroadPhase();
}
box2D.dynamics.B2ContactManager.__name__ = ["box2D","dynamics","B2ContactManager"];
box2D.dynamics.B2ContactManager.prototype.addPair = function(proxyUserDataA,proxyUserDataB) {
	var fixtureA = (function($this) {
		var $r;
		var $t = proxyUserDataA;
		if(Std["is"]($t,box2D.dynamics.B2Fixture)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	var fixtureB = (function($this) {
		var $r;
		var $t = proxyUserDataB;
		if(Std["is"]($t,box2D.dynamics.B2Fixture)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	var bodyA = fixtureA.getBody();
	var bodyB = fixtureB.getBody();
	if(bodyA == bodyB) return;
	var edge = bodyB.getContactList();
	while(edge != null) {
		if(edge.other == bodyA) {
			var fA = edge.contact.getFixtureA();
			var fB = edge.contact.getFixtureB();
			if(fA == fixtureA && fB == fixtureB) return;
			if(fA == fixtureB && fB == fixtureA) return;
		}
		edge = edge.next;
	}
	if(bodyB.shouldCollide(bodyA) == false) return;
	if(this.m_contactFilter.shouldCollide(fixtureA,fixtureB) == false) return;
	var c = this.m_contactFactory.create(fixtureA,fixtureB);
	fixtureA = c.getFixtureA();
	fixtureB = c.getFixtureB();
	bodyA = fixtureA.m_body;
	bodyB = fixtureB.m_body;
	c.m_prev = null;
	c.m_next = this.m_world.m_contactList;
	if(this.m_world.m_contactList != null) this.m_world.m_contactList.m_prev = c;
	this.m_world.m_contactList = c;
	c.m_nodeA.contact = c;
	c.m_nodeA.other = bodyB;
	c.m_nodeA.prev = null;
	c.m_nodeA.next = bodyA.m_contactList;
	if(bodyA.m_contactList != null) bodyA.m_contactList.prev = c.m_nodeA;
	bodyA.m_contactList = c.m_nodeA;
	c.m_nodeB.contact = c;
	c.m_nodeB.other = bodyA;
	c.m_nodeB.prev = null;
	c.m_nodeB.next = bodyB.m_contactList;
	if(bodyB.m_contactList != null) bodyB.m_contactList.prev = c.m_nodeB;
	bodyB.m_contactList = c.m_nodeB;
	++this.m_world.m_contactCount;
	return;
}
box2D.dynamics.B2ContactManager.prototype.findNewContacts = function() {
	this.m_broadPhase.updatePairs($closure(this,"addPair"));
}
box2D.dynamics.B2ContactManager.prototype.destroy = function(c) {
	var fixtureA = c.getFixtureA();
	var fixtureB = c.getFixtureB();
	var bodyA = fixtureA.getBody();
	var bodyB = fixtureB.getBody();
	if(c.isTouching()) this.m_contactListener.endContact(c);
	if(c.m_prev != null) c.m_prev.m_next = c.m_next;
	if(c.m_next != null) c.m_next.m_prev = c.m_prev;
	if(c == this.m_world.m_contactList) this.m_world.m_contactList = c.m_next;
	if(c.m_nodeA.prev != null) c.m_nodeA.prev.next = c.m_nodeA.next;
	if(c.m_nodeA.next != null) c.m_nodeA.next.prev = c.m_nodeA.prev;
	if(c.m_nodeA == bodyA.m_contactList) bodyA.m_contactList = c.m_nodeA.next;
	if(c.m_nodeB.prev != null) c.m_nodeB.prev.next = c.m_nodeB.next;
	if(c.m_nodeB.next != null) c.m_nodeB.next.prev = c.m_nodeB.prev;
	if(c.m_nodeB == bodyB.m_contactList) bodyB.m_contactList = c.m_nodeB.next;
	this.m_contactFactory.destroy(c);
	--this.m_contactCount;
}
box2D.dynamics.B2ContactManager.prototype.collide = function() {
	var c = this.m_world.m_contactList;
	while(c != null) {
		var fixtureA = c.getFixtureA();
		var fixtureB = c.getFixtureB();
		var bodyA = fixtureA.getBody();
		var bodyB = fixtureB.getBody();
		if(bodyA.isAwake() == false && bodyB.isAwake() == false) {
			c = c.getNext();
			continue;
		}
		if((c.m_flags & box2D.dynamics.contacts.B2Contact.e_filterFlag) != 0) {
			if(bodyB.shouldCollide(bodyA) == false) {
				var cNuke = c;
				c = cNuke.getNext();
				this.destroy(cNuke);
				continue;
			}
			if(this.m_contactFilter.shouldCollide(fixtureA,fixtureB) == false) {
				var cNuke = c;
				c = cNuke.getNext();
				this.destroy(cNuke);
				continue;
			}
			c.m_flags &= ~box2D.dynamics.contacts.B2Contact.e_filterFlag;
		}
		var proxyA = fixtureA.m_proxy;
		var proxyB = fixtureB.m_proxy;
		var overlap = this.m_broadPhase.testOverlap(proxyA,proxyB);
		if(overlap == false) {
			var cNuke = c;
			c = cNuke.getNext();
			this.destroy(cNuke);
			continue;
		}
		c.update(this.m_contactListener);
		c = c.getNext();
	}
}
box2D.dynamics.B2ContactManager.prototype.m_world = null;
box2D.dynamics.B2ContactManager.prototype.m_broadPhase = null;
box2D.dynamics.B2ContactManager.prototype.m_contactList = null;
box2D.dynamics.B2ContactManager.prototype.m_contactCount = null;
box2D.dynamics.B2ContactManager.prototype.m_contactFilter = null;
box2D.dynamics.B2ContactManager.prototype.m_contactListener = null;
box2D.dynamics.B2ContactManager.prototype.m_contactFactory = null;
box2D.dynamics.B2ContactManager.prototype.m_allocator = null;
box2D.dynamics.B2ContactManager.prototype.__class__ = box2D.dynamics.B2ContactManager;
if(typeof haxe=='undefined') haxe = {}
if(!haxe.xml) haxe.xml = {}
haxe.xml.Filter = { __ename__ : ["haxe","xml","Filter"], __constructs__ : ["FInt","FBool","FEnum","FReg"] }
haxe.xml.Filter.FInt = ["FInt",0];
haxe.xml.Filter.FInt.toString = $estr;
haxe.xml.Filter.FInt.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FBool = ["FBool",1];
haxe.xml.Filter.FBool.toString = $estr;
haxe.xml.Filter.FBool.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FEnum = function(values) { var $x = ["FEnum",2,values]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Filter.FReg = function(matcher) { var $x = ["FReg",3,matcher]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Attrib = { __ename__ : ["haxe","xml","Attrib"], __constructs__ : ["Att"] }
haxe.xml.Attrib.Att = function(name,filter,defvalue) { var $x = ["Att",0,name,filter,defvalue]; $x.__enum__ = haxe.xml.Attrib; $x.toString = $estr; return $x; }
haxe.xml.Rule = { __ename__ : ["haxe","xml","Rule"], __constructs__ : ["RNode","RData","RMulti","RList","RChoice","ROptional"] }
haxe.xml.Rule.RNode = function(name,attribs,childs) { var $x = ["RNode",0,name,attribs,childs]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RData = function(filter) { var $x = ["RData",1,filter]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RMulti = function(rule,atLeastOne) { var $x = ["RMulti",2,rule,atLeastOne]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RList = function(rules,ordered) { var $x = ["RList",3,rules,ordered]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RChoice = function(choices) { var $x = ["RChoice",4,choices]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.ROptional = function(rule) { var $x = ["ROptional",5,rule]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
if(!haxe.xml._Check) haxe.xml._Check = {}
haxe.xml._Check.CheckResult = { __ename__ : ["haxe","xml","_Check","CheckResult"], __constructs__ : ["CMatch","CMissing","CExtra","CElementExpected","CDataExpected","CExtraAttrib","CMissingAttrib","CInvalidAttrib","CInvalidData","CInElement"] }
haxe.xml._Check.CheckResult.CMatch = ["CMatch",0];
haxe.xml._Check.CheckResult.CMatch.toString = $estr;
haxe.xml._Check.CheckResult.CMatch.__enum__ = haxe.xml._Check.CheckResult;
haxe.xml._Check.CheckResult.CMissing = function(r) { var $x = ["CMissing",1,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtra = function(x) { var $x = ["CExtra",2,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CElementExpected = function(name,x) { var $x = ["CElementExpected",3,name,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CDataExpected = function(x) { var $x = ["CDataExpected",4,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtraAttrib = function(att,x) { var $x = ["CExtraAttrib",5,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CMissingAttrib = function(att,x) { var $x = ["CMissingAttrib",6,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidAttrib = function(att,x,f) { var $x = ["CInvalidAttrib",7,att,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidData = function(x,f) { var $x = ["CInvalidData",8,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInElement = function(x,r) { var $x = ["CInElement",9,x,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
EReg = function(r,opt) {
	if( r === $_ ) return;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return this.r.m != null;
}
EReg.prototype.matched = function(n) {
	return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length};
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.add(this.matchedLeft());
		buf.add(f(this));
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s == null?"null":s;
	return buf.b.join("");
}
EReg.prototype.__class__ = EReg;
haxe.xml.Check = function() { }
haxe.xml.Check.__name__ = ["haxe","xml","Check"];
haxe.xml.Check.isBlank = function(x) {
	return x.nodeType == Xml.PCData && haxe.xml.Check.blanks.match(x.getNodeValue()) || x.nodeType == Xml.Comment;
}
haxe.xml.Check.filterMatch = function(s,f) {
	var $e = (f);
	switch( $e[1] ) {
	case 0:
		return haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FReg(new EReg("[0-9]+","")));
	case 1:
		return haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FEnum(["true","false","0","1"]));
	case 2:
		var values = $e[2];
		var _g = 0;
		while(_g < values.length) {
			var v = values[_g];
			++_g;
			if(s == v) return true;
		}
		return false;
	case 3:
		var r = $e[2];
		return r.match(s);
	}
}
haxe.xml.Check.isNullable = function(r) {
	var $e = (r);
	switch( $e[1] ) {
	case 2:
		var one = $e[3], r1 = $e[2];
		return one != true || haxe.xml.Check.isNullable(r1);
	case 3:
		var rl = $e[2];
		var _g = 0;
		while(_g < rl.length) {
			var r1 = rl[_g];
			++_g;
			if(!haxe.xml.Check.isNullable(r1)) return false;
		}
		return true;
	case 4:
		var rl = $e[2];
		var _g = 0;
		while(_g < rl.length) {
			var r1 = rl[_g];
			++_g;
			if(haxe.xml.Check.isNullable(r1)) return true;
		}
		return false;
	case 1:
		return false;
	case 0:
		return false;
	case 5:
		return true;
	}
}
haxe.xml.Check.check = function(x,r) {
	var $e = (r);
	switch( $e[1] ) {
	case 0:
		var childs = $e[4], attribs = $e[3], name = $e[2];
		if(x.nodeType != Xml.Element || x.getNodeName() != name) return haxe.xml._Check.CheckResult.CElementExpected(name,x);
		var attribs1 = attribs == null?new Array():attribs.copy();
		var $it0 = x.attributes();
		while( $it0.hasNext() ) {
			var xatt = $it0.next();
			var found = false;
			var _g = 0;
			while(_g < attribs1.length) {
				var att = attribs1[_g];
				++_g;
				var $e = (att);
				switch( $e[1] ) {
				case 0:
					var defvalue = $e[4], filter = $e[3], name1 = $e[2];
					if(xatt != name1) continue;
					if(filter != null && !haxe.xml.Check.filterMatch(x.get(xatt),filter)) return haxe.xml._Check.CheckResult.CInvalidAttrib(name1,x,filter);
					attribs1.remove(att);
					found = true;
					break;
				}
			}
			if(!found) return haxe.xml._Check.CheckResult.CExtraAttrib(xatt,x);
		}
		var _g = 0;
		while(_g < attribs1.length) {
			var att = attribs1[_g];
			++_g;
			var $e = (att);
			switch( $e[1] ) {
			case 0:
				var defvalue = $e[4], name1 = $e[2];
				if(defvalue == null) return haxe.xml._Check.CheckResult.CMissingAttrib(name1,x);
				break;
			}
		}
		if(childs == null) childs = haxe.xml.Rule.RList([]);
		var m = haxe.xml.Check.checkList(x.iterator(),childs);
		if(m != haxe.xml._Check.CheckResult.CMatch) return haxe.xml._Check.CheckResult.CInElement(x,m);
		var _g = 0;
		while(_g < attribs1.length) {
			var att = attribs1[_g];
			++_g;
			var $e = (att);
			switch( $e[1] ) {
			case 0:
				var defvalue = $e[4], name1 = $e[2];
				x.set(name1,defvalue);
				break;
			}
		}
		return haxe.xml._Check.CheckResult.CMatch;
	case 1:
		var filter = $e[2];
		if(x.nodeType != Xml.PCData && x.nodeType != Xml.CData) return haxe.xml._Check.CheckResult.CDataExpected(x);
		if(filter != null && !haxe.xml.Check.filterMatch(x.getNodeValue(),filter)) return haxe.xml._Check.CheckResult.CInvalidData(x,filter);
		return haxe.xml._Check.CheckResult.CMatch;
	case 4:
		var choices = $e[2];
		if(choices.length == 0) throw "No choice possible";
		var _g = 0;
		while(_g < choices.length) {
			var c = choices[_g];
			++_g;
			if(haxe.xml.Check.check(x,c) == haxe.xml._Check.CheckResult.CMatch) return haxe.xml._Check.CheckResult.CMatch;
		}
		return haxe.xml.Check.check(x,choices[0]);
	case 5:
		var r1 = $e[2];
		return haxe.xml.Check.check(x,r1);
	default:
		throw "Unexpected " + Std.string(r);
	}
}
haxe.xml.Check.checkList = function(it,r) {
	var $e = (r);
	switch( $e[1] ) {
	case 3:
		var ordered = $e[3], rules = $e[2];
		var rules1 = rules.copy();
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var found = false;
			var _g = 0;
			while(_g < rules1.length) {
				var r1 = rules1[_g];
				++_g;
				var m = haxe.xml.Check.checkList([x].iterator(),r1);
				if(m == haxe.xml._Check.CheckResult.CMatch) {
					found = true;
					var $e = (r1);
					switch( $e[1] ) {
					case 2:
						var one = $e[3], rsub = $e[2];
						if(one) {
							var i;
							var _g2 = 0, _g1 = rules1.length;
							while(_g2 < _g1) {
								var i1 = _g2++;
								if(rules1[i1] == r1) rules1[i1] = haxe.xml.Rule.RMulti(rsub);
							}
						}
						break;
					default:
						rules1.remove(r1);
					}
					break;
				} else if(ordered && !haxe.xml.Check.isNullable(r1)) return m;
			}
			if(!found) return haxe.xml._Check.CheckResult.CExtra(x);
		}
		var _g = 0;
		while(_g < rules1.length) {
			var r1 = rules1[_g];
			++_g;
			if(!haxe.xml.Check.isNullable(r1)) return haxe.xml._Check.CheckResult.CMissing(r1);
		}
		return haxe.xml._Check.CheckResult.CMatch;
	case 2:
		var one = $e[3], r1 = $e[2];
		var found = false;
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.checkList([x].iterator(),r1);
			if(m != haxe.xml._Check.CheckResult.CMatch) return m;
			found = true;
		}
		if(one && !found) return haxe.xml._Check.CheckResult.CMissing(r1);
		return haxe.xml._Check.CheckResult.CMatch;
	default:
		var found = false;
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.check(x,r);
			if(m != haxe.xml._Check.CheckResult.CMatch) return m;
			found = true;
			break;
		}
		if(!found) {
			switch( (r)[1] ) {
			case 5:
				break;
			default:
				return haxe.xml._Check.CheckResult.CMissing(r);
			}
		}
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			return haxe.xml._Check.CheckResult.CExtra(x);
		}
		return haxe.xml._Check.CheckResult.CMatch;
	}
}
haxe.xml.Check.makeWhere = function(path) {
	if(path.length == 0) return "";
	var s = "In ";
	var first = true;
	var _g = 0;
	while(_g < path.length) {
		var x = path[_g];
		++_g;
		if(first) first = false; else s += ".";
		s += x.getNodeName();
	}
	return s + ": ";
}
haxe.xml.Check.makeString = function(x) {
	if(x.nodeType == Xml.Element) return "element " + x.getNodeName();
	var s = x.getNodeValue().split("\r").join("\\r").split("\n").join("\\n").split("\t").join("\\t");
	if(s.length > 20) return s.substr(0,17) + "...";
	return s;
}
haxe.xml.Check.makeRule = function(r) {
	var $e = (r);
	switch( $e[1] ) {
	case 0:
		var name = $e[2];
		return "element " + name;
	case 1:
		return "data";
	case 2:
		var r1 = $e[2];
		return haxe.xml.Check.makeRule(r1);
	case 3:
		var rules = $e[2];
		return haxe.xml.Check.makeRule(rules[0]);
	case 4:
		var choices = $e[2];
		return haxe.xml.Check.makeRule(choices[0]);
	case 5:
		var r1 = $e[2];
		return haxe.xml.Check.makeRule(r1);
	}
}
haxe.xml.Check.makeError = function(m,path) {
	if(path == null) path = new Array();
	var $e = (m);
	switch( $e[1] ) {
	case 0:
		throw "assert";
		break;
	case 1:
		var r = $e[2];
		return haxe.xml.Check.makeWhere(path) + "Missing " + haxe.xml.Check.makeRule(r);
	case 2:
		var x = $e[2];
		return haxe.xml.Check.makeWhere(path) + "Unexpected " + haxe.xml.Check.makeString(x);
	case 3:
		var x = $e[3], name = $e[2];
		return haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while expected element " + name;
	case 4:
		var x = $e[2];
		return haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while data expected";
	case 5:
		var x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "unexpected attribute " + att;
	case 6:
		var x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "missing required attribute " + att;
	case 7:
		var f = $e[4], x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "invalid attribute value for " + att;
	case 8:
		var f = $e[3], x = $e[2];
		return haxe.xml.Check.makeWhere(path) + "invalid data format for " + haxe.xml.Check.makeString(x);
	case 9:
		var m1 = $e[3], x = $e[2];
		path.push(x);
		return haxe.xml.Check.makeError(m1,path);
	}
}
haxe.xml.Check.checkNode = function(x,r) {
	var m = haxe.xml.Check.checkList([x].iterator(),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
haxe.xml.Check.checkDocument = function(x,r) {
	if(x.nodeType != Xml.Document) throw "Document expected";
	var m = haxe.xml.Check.checkList(x.iterator(),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
haxe.xml.Check.prototype.__class__ = haxe.xml.Check;
box2D.common.math.B2Vec2 = function(x_,y_) {
	if( x_ === $_ ) return;
	if(y_ == null) y_ = 0;
	if(x_ == null) x_ = 0;
	this.x = x_;
	this.y = y_;
}
box2D.common.math.B2Vec2.__name__ = ["box2D","common","math","B2Vec2"];
box2D.common.math.B2Vec2.make = function(x_,y_) {
	return new box2D.common.math.B2Vec2(x_,y_);
}
box2D.common.math.B2Vec2.prototype.setZero = function() {
	this.x = 0.0;
	this.y = 0.0;
}
box2D.common.math.B2Vec2.prototype.set = function(x_,y_) {
	if(y_ == null) y_ = 0;
	if(x_ == null) x_ = 0;
	this.x = x_;
	this.y = y_;
}
box2D.common.math.B2Vec2.prototype.setV = function(v) {
	this.x = v.x;
	this.y = v.y;
}
box2D.common.math.B2Vec2.prototype.getNegative = function() {
	return new box2D.common.math.B2Vec2(-this.x,-this.y);
}
box2D.common.math.B2Vec2.prototype.negativeSelf = function() {
	this.x = -this.x;
	this.y = -this.y;
}
box2D.common.math.B2Vec2.prototype.copy = function() {
	return new box2D.common.math.B2Vec2(this.x,this.y);
}
box2D.common.math.B2Vec2.prototype.add = function(v) {
	this.x += v.x;
	this.y += v.y;
}
box2D.common.math.B2Vec2.prototype.subtract = function(v) {
	this.x -= v.x;
	this.y -= v.y;
}
box2D.common.math.B2Vec2.prototype.multiply = function(a) {
	this.x *= a;
	this.y *= a;
}
box2D.common.math.B2Vec2.prototype.mulM = function(A) {
	var tX = this.x;
	this.x = A.col1.x * tX + A.col2.x * this.y;
	this.y = A.col1.y * tX + A.col2.y * this.y;
}
box2D.common.math.B2Vec2.prototype.mulTM = function(A) {
	var tX = box2D.common.math.B2Math.dot(this,A.col1);
	this.y = box2D.common.math.B2Math.dot(this,A.col2);
	this.x = tX;
}
box2D.common.math.B2Vec2.prototype.crossVF = function(s) {
	var tX = this.x;
	this.x = s * this.y;
	this.y = -s * tX;
}
box2D.common.math.B2Vec2.prototype.crossFV = function(s) {
	var tX = this.x;
	this.x = -s * this.y;
	this.y = s * tX;
}
box2D.common.math.B2Vec2.prototype.minV = function(b) {
	this.x = this.x < b.x?this.x:b.x;
	this.y = this.y < b.y?this.y:b.y;
}
box2D.common.math.B2Vec2.prototype.maxV = function(b) {
	this.x = this.x > b.x?this.x:b.x;
	this.y = this.y > b.y?this.y:b.y;
}
box2D.common.math.B2Vec2.prototype.abs = function() {
	if(this.x < 0) this.x = -this.x;
	if(this.y < 0) this.y = -this.y;
}
box2D.common.math.B2Vec2.prototype.length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}
box2D.common.math.B2Vec2.prototype.lengthSquared = function() {
	return this.x * this.x + this.y * this.y;
}
box2D.common.math.B2Vec2.prototype.normalize = function() {
	var length = Math.sqrt(this.x * this.x + this.y * this.y);
	if(length < Number.MIN_VALUE) return 0.0;
	var invLength = 1.0 / length;
	this.x *= invLength;
	this.y *= invLength;
	return length;
}
box2D.common.math.B2Vec2.prototype.isValid = function() {
	return box2D.common.math.B2Math.isValid(this.x) && box2D.common.math.B2Math.isValid(this.y);
}
box2D.common.math.B2Vec2.prototype.x = null;
box2D.common.math.B2Vec2.prototype.y = null;
box2D.common.math.B2Vec2.prototype.__class__ = box2D.common.math.B2Vec2;
if(!jeash.events) jeash.events = {}
jeash.events.IEventDispatcher = function() { }
jeash.events.IEventDispatcher.__name__ = ["jeash","events","IEventDispatcher"];
jeash.events.IEventDispatcher.prototype.addEventListener = null;
jeash.events.IEventDispatcher.prototype.dispatchEvent = null;
jeash.events.IEventDispatcher.prototype.hasEventListener = null;
jeash.events.IEventDispatcher.prototype.removeEventListener = null;
jeash.events.IEventDispatcher.prototype.willTrigger = null;
jeash.events.IEventDispatcher.prototype.__class__ = jeash.events.IEventDispatcher;
jeash.events.EventDispatcher = function(target) {
	if( target === $_ ) return;
	if(target != null) this.jeashTarget = target; else this.jeashTarget = this;
	this.jeashEventMap = [];
}
jeash.events.EventDispatcher.__name__ = ["jeash","events","EventDispatcher"];
jeash.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
jeash.events.EventDispatcher.prototype.jeashTarget = null;
jeash.events.EventDispatcher.prototype.jeashEventMap = null;
jeash.events.EventDispatcher.prototype.getList = function(type) {
	return this.jeashEventMap[type];
}
jeash.events.EventDispatcher.prototype.setList = function(type,list) {
	this.jeashEventMap[type] = list;
}
jeash.events.EventDispatcher.prototype.existList = function(type) {
	return this.jeashEventMap[type] != undefined;
}
jeash.events.EventDispatcher.prototype.addEventListener = function(type,inListener,useCapture,inPriority,useWeakReference) {
	var capture = useCapture == null?false:useCapture;
	var priority = inPriority == null?0:inPriority;
	var list = this.getList(type);
	if(!this.existList(type)) {
		list = new Array();
		this.setList(type,list);
	}
	var l = new jeash.events.Listener(inListener,capture,priority);
	list.push(l);
}
jeash.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	if(event.target == null) event.target = this.jeashTarget;
	var list = this.getList(event.type);
	var capture = event.eventPhase == jeash.events.EventPhase.CAPTURING_PHASE;
	if(this.existList(event.type)) {
		list.sort(jeash.events.EventDispatcher.compareListeners);
		var idx = 0;
		while(idx < list.length) {
			var listener = list[idx];
			if(listener.mUseCapture == capture) {
				listener.dispatchEvent(event);
				if(event.jeashGetIsCancelledNow()) return true;
			}
			if(idx < list.length && listener != list[idx]) {
			} else idx++;
		}
		return true;
	}
	return false;
}
jeash.events.EventDispatcher.prototype.hasEventListener = function(type) {
	return this.existList(type);
}
jeash.events.EventDispatcher.prototype.removeEventListener = function(type,listener,inCapture) {
	if(!this.existList(type)) return;
	var list = this.getList(type);
	var capture = inCapture == null?false:inCapture;
	var _g1 = 0, _g = list.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(list[i].Is(listener,capture)) {
			list.splice(i,1);
			return;
		}
	}
}
jeash.events.EventDispatcher.prototype.toString = function() {
	return "[ " + this.__name__ + " ]";
}
jeash.events.EventDispatcher.prototype.willTrigger = function(type) {
	return this.hasEventListener(type);
}
jeash.events.EventDispatcher.prototype.__class__ = jeash.events.EventDispatcher;
jeash.events.EventDispatcher.__interfaces__ = [jeash.events.IEventDispatcher];
jeash.display.IBitmapDrawable = function() { }
jeash.display.IBitmapDrawable.__name__ = ["jeash","display","IBitmapDrawable"];
jeash.display.IBitmapDrawable.prototype.drawToSurface = null;
jeash.display.IBitmapDrawable.prototype.__class__ = jeash.display.IBitmapDrawable;
jeash.display.DisplayObject = function(p) {
	if( p === $_ ) return;
	this.parent = null;
	jeash.events.EventDispatcher.call(this,null);
	this.jeashSetX(this.jeashSetY(0));
	this.jeashScaleX = this.jeashScaleY = 1.0;
	this.alpha = 1.0;
	this.jeashSetRotation(0.0);
	this.__swf_depth = 0;
	this.mMatrix = new jeash.geom.Matrix();
	this.mFullMatrix = new jeash.geom.Matrix();
	this.mMask = null;
	this.mMaskingObj = null;
	this.mBoundsRect = new jeash.geom.Rectangle();
	this.mGraphicsBounds = null;
	this.mMaskHandle = null;
	this.name = "DisplayObject " + jeash.display.DisplayObject.mNameID++;
	this.jeashSetVisible(true);
}
jeash.display.DisplayObject.__name__ = ["jeash","display","DisplayObject"];
jeash.display.DisplayObject.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.display.DisplayObject.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.display.DisplayObject.prototype.x = null;
jeash.display.DisplayObject.prototype.y = null;
jeash.display.DisplayObject.prototype.scaleX = null;
jeash.display.DisplayObject.prototype.scaleY = null;
jeash.display.DisplayObject.prototype.rotation = null;
jeash.display.DisplayObject.prototype.accessibilityProperties = null;
jeash.display.DisplayObject.prototype.alpha = null;
jeash.display.DisplayObject.prototype.name = null;
jeash.display.DisplayObject.prototype.cacheAsBitmap = null;
jeash.display.DisplayObject.prototype.width = null;
jeash.display.DisplayObject.prototype.height = null;
jeash.display.DisplayObject.prototype.visible = null;
jeash.display.DisplayObject.prototype.opaqueBackground = null;
jeash.display.DisplayObject.prototype.mouseX = null;
jeash.display.DisplayObject.prototype.mouseY = null;
jeash.display.DisplayObject.prototype.parent = null;
jeash.display.DisplayObject.prototype.stage = null;
jeash.display.DisplayObject.prototype.scrollRect = null;
jeash.display.DisplayObject.prototype.mask = null;
jeash.display.DisplayObject.prototype.filters = null;
jeash.display.DisplayObject.prototype.blendMode = null;
jeash.display.DisplayObject.prototype.loaderInfo = null;
jeash.display.DisplayObject.prototype.__swf_depth = null;
jeash.display.DisplayObject.prototype.transform = null;
jeash.display.DisplayObject.prototype.mBoundsDirty = null;
jeash.display.DisplayObject.prototype.mMtxChainDirty = null;
jeash.display.DisplayObject.prototype.mMtxDirty = null;
jeash.display.DisplayObject.prototype.mBoundsRect = null;
jeash.display.DisplayObject.prototype.mGraphicsBounds = null;
jeash.display.DisplayObject.prototype.mScale9Grid = null;
jeash.display.DisplayObject.prototype.mMatrix = null;
jeash.display.DisplayObject.prototype.mFullMatrix = null;
jeash.display.DisplayObject.prototype.jeashX = null;
jeash.display.DisplayObject.prototype.jeashY = null;
jeash.display.DisplayObject.prototype.jeashScaleX = null;
jeash.display.DisplayObject.prototype.jeashScaleY = null;
jeash.display.DisplayObject.prototype.jeashRotation = null;
jeash.display.DisplayObject.prototype.jeashVisible = null;
jeash.display.DisplayObject.prototype.mScrollRect = null;
jeash.display.DisplayObject.prototype.mOpaqueBackground = null;
jeash.display.DisplayObject.prototype.mMask = null;
jeash.display.DisplayObject.prototype.mMaskingObj = null;
jeash.display.DisplayObject.prototype.mMaskHandle = null;
jeash.display.DisplayObject.prototype.jeashFilters = null;
jeash.display.DisplayObject.prototype.toString = function() {
	return this.name;
}
jeash.display.DisplayObject.prototype.jeashDoAdded = function(inObj) {
	if(inObj == this) {
		var evt = new jeash.events.Event(jeash.events.Event.ADDED,true,false);
		evt.target = inObj;
		this.dispatchEvent(evt);
	}
	var evt = new jeash.events.Event(jeash.events.Event.ADDED_TO_STAGE,false,false);
	evt.target = inObj;
	this.dispatchEvent(evt);
}
jeash.display.DisplayObject.prototype.jeashDoRemoved = function(inObj) {
	if(inObj == this) {
		var evt = new jeash.events.Event(jeash.events.Event.REMOVED,true,false);
		evt.target = inObj;
		this.dispatchEvent(evt);
	}
	var evt = new jeash.events.Event(jeash.events.Event.REMOVED_FROM_STAGE,false,false);
	evt.target = inObj;
	this.dispatchEvent(evt);
	var gfx = this.jeashGetGraphics();
	if(gfx != null) jeash.Lib.jeashRemoveSurface(gfx.jeashSurface);
}
jeash.display.DisplayObject.prototype.DoMouseEnter = function() {
}
jeash.display.DisplayObject.prototype.DoMouseLeave = function() {
}
jeash.display.DisplayObject.prototype.jeashSetParent = function(parent) {
	if(parent == this.parent) return;
	this.mMtxChainDirty = true;
	if(this.parent != null) {
		this.parent.__removeChild(this);
		this.parent.jeashInvalidateBounds();
	}
	if(parent != null) parent.jeashInvalidateBounds();
	if(this.parent == null && parent != null) {
		this.parent = parent;
		this.jeashDoAdded(this);
	} else if(this.parent != null && parent == null) {
		this.parent = parent;
		this.jeashDoRemoved(this);
	} else this.parent = parent;
}
jeash.display.DisplayObject.prototype.GetStage = function() {
	return jeash.Lib.jeashGetStage();
}
jeash.display.DisplayObject.prototype.AsContainer = function() {
	return null;
}
jeash.display.DisplayObject.prototype.GetScrollRect = function() {
	if(this.mScrollRect == null) return null;
	return this.mScrollRect.clone();
}
jeash.display.DisplayObject.prototype.jeashAsInteractiveObject = function() {
	return null;
}
jeash.display.DisplayObject.prototype.SetScrollRect = function(inRect) {
	this.mScrollRect = inRect;
	return this.GetScrollRect();
}
jeash.display.DisplayObject.prototype.hitTestObject = function(obj) {
	return false;
}
jeash.display.DisplayObject.prototype.hitTestPoint = function(x,y,shapeFlag) {
	var bounding_box = shapeFlag == null?true:!shapeFlag;
	return true;
}
jeash.display.DisplayObject.prototype.localToGlobal = function(point) {
	if(this.parent == null) return new jeash.geom.Point(this.jeashGetX() + point.x,this.jeashGetY() + point.y); else {
		point.x = point.x + this.jeashGetX();
		point.y = point.y + this.jeashGetY();
		return this.parent.localToGlobal(point);
	}
}
jeash.display.DisplayObject.prototype.jeashGetMouseX = function() {
	return this.globalToLocal(new jeash.geom.Point(this.GetStage().jeashGetMouseX(),0)).x;
}
jeash.display.DisplayObject.prototype.jeashSetMouseX = function(x) {
	return null;
}
jeash.display.DisplayObject.prototype.jeashGetMouseY = function() {
	return this.globalToLocal(new jeash.geom.Point(0,this.GetStage().jeashGetMouseY())).y;
}
jeash.display.DisplayObject.prototype.jeashSetMouseY = function(y) {
	return null;
}
jeash.display.DisplayObject.prototype.GetTransform = function() {
	return new jeash.geom.Transform(this);
}
jeash.display.DisplayObject.prototype.SetTransform = function(trans) {
	this.mMatrix = trans.jeashGetMatrix().clone();
	return trans;
}
jeash.display.DisplayObject.prototype.getFullMatrix = function(childMatrix) {
	if(childMatrix == null) return this.mFullMatrix.clone(); else return childMatrix.mult(this.mFullMatrix);
}
jeash.display.DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {
	if(this.mMtxDirty || this.mMtxChainDirty) this.jeashValidateMatrix();
	if(this.mBoundsDirty) this.BuildBounds();
	var mtx = this.mFullMatrix.clone();
	mtx.concat(targetCoordinateSpace.mFullMatrix.clone().invert());
	var rect = this.mBoundsRect.transform(mtx);
	return rect;
}
jeash.display.DisplayObject.prototype.getRect = function(targetCoordinateSpace) {
	return null;
}
jeash.display.DisplayObject.prototype.globalToLocal = function(inPos) {
	return this.mFullMatrix.clone().invert().transformPoint(inPos);
}
jeash.display.DisplayObject.prototype.jeashGetNumChildren = function() {
	return 0;
}
jeash.display.DisplayObject.prototype.jeashGetMatrix = function() {
	return this.mMatrix.clone();
}
jeash.display.DisplayObject.prototype.jeashSetMatrix = function(inMatrix) {
	this.mMatrix = inMatrix.clone();
	return inMatrix;
}
jeash.display.DisplayObject.prototype.jeashGetGraphics = function() {
	return null;
}
jeash.display.DisplayObject.prototype.GetOpaqueBackground = function() {
	return this.mOpaqueBackground;
}
jeash.display.DisplayObject.prototype.SetOpaqueBackground = function(inBG) {
	this.mOpaqueBackground = inBG;
	return this.mOpaqueBackground;
}
jeash.display.DisplayObject.prototype.GetBackgroundRect = function() {
	if(this.mGraphicsBounds == null) {
		var gfx = this.jeashGetGraphics();
		if(gfx != null) this.mGraphicsBounds = gfx.jeashExtent.clone();
	}
	return this.mGraphicsBounds;
}
jeash.display.DisplayObject.prototype.jeashInvalidateBounds = function() {
	this.mBoundsDirty = true;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
}
jeash.display.DisplayObject.prototype.jeashInvalidateMatrix = function(local) {
	if(local == null) local = false;
	this.mMtxChainDirty = this.mMtxChainDirty || !local;
	this.mMtxDirty = this.mMtxDirty || local;
}
jeash.display.DisplayObject.prototype.jeashValidateMatrix = function() {
	if(this.mMtxDirty || this.mMtxChainDirty && this.parent != null) {
		if(this.mMtxChainDirty && this.parent != null) this.parent.jeashValidateMatrix();
		if(this.mMtxDirty) {
			this.mMatrix.b = this.mMatrix.c = this.mMatrix.tx = this.mMatrix.ty = 0;
			this.mMatrix.a = this.jeashScaleX;
			this.mMatrix.d = this.jeashScaleY;
			var rad = this.jeashRotation * Math.PI / 180.0;
			if(rad != 0.0) this.mMatrix.rotate(rad);
			this.mMatrix.tx = this.jeashX;
			this.mMatrix.ty = this.jeashY;
		}
		if(this.parent != null) this.mFullMatrix = this.parent.getFullMatrix(this.mMatrix); else this.mFullMatrix = this.mMatrix;
		this.mMtxDirty = this.mMtxChainDirty = false;
	}
}
jeash.display.DisplayObject.prototype.jeashRender = function(parentMatrix,inMask) {
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		if(gfx.jeashIsTile || !this.jeashVisible) return;
		if(this.mMtxDirty || this.mMtxChainDirty) this.jeashValidateMatrix();
		var m = this.mFullMatrix.clone();
		if(this.jeashFilters != null && (gfx.jeashChanged || inMask != null)) {
			gfx.jeashRender(inMask,m);
			var _g = 0, _g1 = this.jeashFilters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.jeashApplyFilter(gfx.jeashSurface);
			}
		} else gfx.jeashRender(inMask,m);
		m.tx = m.tx + gfx.jeashExtent.x * m.a + gfx.jeashExtent.y * m.c;
		m.ty = m.ty + gfx.jeashExtent.x * m.b + gfx.jeashExtent.y * m.d;
		if(inMask != null) jeash.Lib.jeashDrawToSurface(gfx.jeashSurface,inMask,m,(this.parent != null?this.parent.alpha:1) * this.alpha); else {
			jeash.Lib.jeashSetSurfaceTransform(gfx.jeashSurface,m);
			jeash.Lib.jeashSetSurfaceOpacity(gfx.jeashSurface,(this.parent != null?this.parent.alpha:1) * this.alpha);
		}
	} else if(this.mMtxDirty || this.mMtxChainDirty) this.jeashValidateMatrix();
}
jeash.display.DisplayObject.prototype.drawToSurface = function(inSurface,matrix,colorTransform,blendMode,clipRect,smoothing) {
	if(matrix == null) matrix = new jeash.geom.Matrix();
	this.jeashRender(matrix,inSurface);
}
jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint = function(point) {
	if(!this.jeashGetVisible()) return null;
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		var local = this.globalToLocal(point);
		switch( (this.GetStage().jeashPointInPathMode)[1] ) {
		case 0:
			if(local.x < 0 || local.y < 0 || local.x * this.jeashGetScaleX() > this.jeashGetWidth() || local.y * this.jeashGetScaleY() > this.jeashGetHeight()) return null;
			if(gfx.jeashHitTest(local.x,local.y)) return this;
			break;
		case 1:
			if(local.x < 0 || local.y < 0 || local.x * this.jeashGetScaleX() > this.jeashGetWidth() || local.y * this.jeashGetScaleY() > this.jeashGetHeight()) return null;
			if(gfx.jeashHitTest(local.x * this.jeashGetScaleX(),local.y * this.jeashGetScaleY())) return this;
			break;
		}
	}
	return null;
}
jeash.display.DisplayObject.prototype.GetMask = function() {
	return this.mMask;
}
jeash.display.DisplayObject.prototype.SetMask = function(inMask) {
	if(this.mMask != null) this.mMask.mMaskingObj = null;
	this.mMask = inMask;
	if(this.mMask != null) this.mMask.mMaskingObj = this;
	return this.mMask;
}
jeash.display.DisplayObject.prototype.jeashSetFilters = function(filters) {
	if(filters == null) this.jeashFilters = null; else {
		this.jeashFilters = new Array();
		var _g = 0;
		while(_g < filters.length) {
			var filter = filters[_g];
			++_g;
			this.jeashFilters.push(filter.clone());
		}
	}
	return filters;
}
jeash.display.DisplayObject.prototype.jeashGetFilters = function() {
	if(this.jeashFilters == null) return [];
	var result = new Array();
	var _g = 0, _g1 = this.jeashFilters;
	while(_g < _g1.length) {
		var filter = _g1[_g];
		++_g;
		result.push(filter.clone());
	}
	return result;
}
jeash.display.DisplayObject.prototype.BuildBounds = function() {
	var gfx = this.jeashGetGraphics();
	if(gfx == null) this.mBoundsRect = new jeash.geom.Rectangle(this.jeashGetX(),this.jeashGetY(),0,0); else {
		this.mBoundsRect = gfx.jeashExtent.clone();
		gfx.mBoundsDirty = false;
		if(this.mScale9Grid != null) {
			this.mBoundsRect.width *= this.jeashGetScaleX();
			this.mBoundsRect.height *= this.jeashGetScaleY();
		}
	}
	this.mBoundsDirty = false;
}
jeash.display.DisplayObject.prototype.GetScreenBounds = function() {
	if(this.mBoundsDirty) this.BuildBounds();
	return this.mBoundsRect.clone();
}
jeash.display.DisplayObject.prototype.GetFocusObjects = function(outObjs) {
}
jeash.display.DisplayObject.prototype.__BlendIndex = function() {
	return this.blendMode == null?jeash.display.Graphics.BLEND_NORMAL:this.blendMode[1];
}
jeash.display.DisplayObject.prototype.jeashGetInteractiveObjectStack = function(outStack) {
	var io = this.jeashAsInteractiveObject();
	if(io != null) outStack.push(io);
	if(this.parent != null) this.parent.jeashGetInteractiveObjectStack(outStack);
}
jeash.display.DisplayObject.prototype.jeashFireEvent = function(event) {
	var stack = [];
	if(this.parent != null) this.parent.jeashGetInteractiveObjectStack(stack);
	var l = stack.length;
	if(l > 0) {
		event.jeashSetPhase(jeash.events.EventPhase.CAPTURING_PHASE);
		stack.reverse();
		var _g = 0;
		while(_g < stack.length) {
			var obj = stack[_g];
			++_g;
			event.currentTarget = obj;
			obj.dispatchEvent(event);
			if(event.jeashGetIsCancelled()) return;
		}
	}
	event.jeashSetPhase(jeash.events.EventPhase.AT_TARGET);
	event.currentTarget = this;
	this.dispatchEvent(event);
	if(event.jeashGetIsCancelled()) return;
	if(event.bubbles) {
		event.jeashSetPhase(jeash.events.EventPhase.BUBBLING_PHASE);
		stack.reverse();
		var _g = 0;
		while(_g < stack.length) {
			var obj = stack[_g];
			++_g;
			event.currentTarget = obj;
			obj.dispatchEvent(event);
			if(event.jeashGetIsCancelled()) return;
		}
	}
}
jeash.display.DisplayObject.prototype.jeashBroadcast = function(event) {
	this.dispatchEvent(event);
}
jeash.display.DisplayObject.prototype.jeashAddToStage = function() {
	var gfx = this.jeashGetGraphics();
	if(gfx != null) jeash.Lib.jeashAppendSurface(gfx.jeashSurface);
}
jeash.display.DisplayObject.prototype.jeashInsertBefore = function(obj) {
	var gfx1 = this.jeashGetGraphics();
	var gfx2 = obj.jeashIsOnStage()?obj.jeashGetGraphics():null;
	if(gfx1 != null) {
		if(gfx2 != null) jeash.Lib.jeashAppendSurface(gfx1.jeashSurface,gfx2.jeashSurface); else jeash.Lib.jeashAppendSurface(gfx1.jeashSurface);
	}
}
jeash.display.DisplayObject.prototype.jeashIsOnStage = function() {
	var gfx = this.jeashGetGraphics();
	if(gfx != null) return jeash.Lib.jeashIsOnStage(gfx.jeashSurface);
	return false;
}
jeash.display.DisplayObject.prototype.jeashGetVisible = function() {
	return this.jeashVisible;
}
jeash.display.DisplayObject.prototype.jeashSetVisible = function(visible) {
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		if(gfx.jeashSurface != null) jeash.Lib.jeashSetSurfaceVisible(gfx.jeashSurface,visible);
	}
	this.jeashVisible = visible;
	return visible;
}
jeash.display.DisplayObject.prototype.jeashGetHeight = function() {
	this.BuildBounds();
	return this.jeashScaleY * this.mBoundsRect.height;
}
jeash.display.DisplayObject.prototype.jeashSetHeight = function(inHeight) {
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	var h = this.mBoundsRect.height;
	if(this.jeashScaleY * h != inHeight) {
		if(h <= 0) return 0;
		this.jeashScaleY = inHeight / h;
		this.jeashInvalidateMatrix(true);
	}
	return inHeight;
}
jeash.display.DisplayObject.prototype.jeashGetWidth = function() {
	if(this.mBoundsDirty) this.BuildBounds();
	return this.jeashScaleX * this.mBoundsRect.width;
}
jeash.display.DisplayObject.prototype.jeashSetWidth = function(inWidth) {
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	var w = this.mBoundsRect.width;
	if(this.jeashScaleX * w != inWidth) {
		if(w <= 0) return 0;
		this.jeashScaleX = inWidth / w;
		this.jeashInvalidateMatrix(true);
	}
	return inWidth;
}
jeash.display.DisplayObject.prototype.jeashGetX = function() {
	return this.jeashX;
}
jeash.display.DisplayObject.prototype.jeashGetY = function() {
	return this.jeashY;
}
jeash.display.DisplayObject.prototype.jeashSetX = function(n) {
	this.jeashInvalidateMatrix(true);
	this.jeashX = n;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	return n;
}
jeash.display.DisplayObject.prototype.jeashSetY = function(n) {
	this.jeashInvalidateMatrix(true);
	this.jeashY = n;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	return n;
}
jeash.display.DisplayObject.prototype.jeashGetScaleX = function() {
	return this.jeashScaleX;
}
jeash.display.DisplayObject.prototype.jeashGetScaleY = function() {
	return this.jeashScaleY;
}
jeash.display.DisplayObject.prototype.jeashSetScaleX = function(inS) {
	if(this.jeashScaleX == inS) return inS;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	this.jeashScaleX = inS;
	return inS;
}
jeash.display.DisplayObject.prototype.jeashSetScaleY = function(inS) {
	if(this.jeashScaleY == inS) return inS;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	this.jeashScaleY = inS;
	return inS;
}
jeash.display.DisplayObject.prototype.jeashSetRotation = function(n) {
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	this.jeashRotation = n;
	return n;
}
jeash.display.DisplayObject.prototype.jeashGetRotation = function() {
	return this.jeashRotation;
}
jeash.display.DisplayObject.prototype.__class__ = jeash.display.DisplayObject;
jeash.display.DisplayObject.__interfaces__ = [jeash.display.IBitmapDrawable];
jeash.display.InteractiveObject = function(p) {
	if( p === $_ ) return;
	jeash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.jeashSetTabIndex(0);
	this.name = "InteractiveObject";
}
jeash.display.InteractiveObject.__name__ = ["jeash","display","InteractiveObject"];
jeash.display.InteractiveObject.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.InteractiveObject.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.InteractiveObject.prototype.doubleClickEnabled = null;
jeash.display.InteractiveObject.prototype.focusRect = null;
jeash.display.InteractiveObject.prototype.mouseEnabled = null;
jeash.display.InteractiveObject.prototype.tabEnabled = null;
jeash.display.InteractiveObject.prototype.tabIndex = null;
jeash.display.InteractiveObject.prototype.jeashDoubleClickEnabled = null;
jeash.display.InteractiveObject.prototype.jeashTabIndex = null;
jeash.display.InteractiveObject.prototype.toString = function() {
	return this.name;
}
jeash.display.InteractiveObject.prototype.OnKey = function(inKey) {
}
jeash.display.InteractiveObject.prototype.jeashAsInteractiveObject = function() {
	return this;
}
jeash.display.InteractiveObject.prototype.jeashGetTabIndex = function() {
	return this.jeashTabIndex;
}
jeash.display.InteractiveObject.prototype.jeashSetTabIndex = function(inIndex) {
	this.jeashTabIndex = inIndex;
	return inIndex;
}
jeash.display.InteractiveObject.prototype.jeashGetObjectUnderPoint = function(point) {
	if(!this.mouseEnabled) return null; else return jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint.call(this,point);
}
jeash.display.InteractiveObject.prototype.__class__ = jeash.display.InteractiveObject;
jeash.display.DisplayObjectContainer = function(p) {
	if( p === $_ ) return;
	this.jeashChildren = new Array();
	this.mLastSetupObjs = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	jeash.display.InteractiveObject.call(this);
	this.name = "DisplayObjectContainer " + jeash.display.DisplayObject.mNameID++;
}
jeash.display.DisplayObjectContainer.__name__ = ["jeash","display","DisplayObjectContainer"];
jeash.display.DisplayObjectContainer.__super__ = jeash.display.InteractiveObject;
for(var k in jeash.display.InteractiveObject.prototype ) jeash.display.DisplayObjectContainer.prototype[k] = jeash.display.InteractiveObject.prototype[k];
jeash.display.DisplayObjectContainer.prototype.jeashChildren = null;
jeash.display.DisplayObjectContainer.prototype.mLastSetupObjs = null;
jeash.display.DisplayObjectContainer.prototype.numChildren = null;
jeash.display.DisplayObjectContainer.prototype.mouseChildren = null;
jeash.display.DisplayObjectContainer.prototype.tabChildren = null;
jeash.display.DisplayObjectContainer.prototype.AsContainer = function() {
	return this;
}
jeash.display.DisplayObjectContainer.prototype.jeashBroadcast = function(event) {
	var i = 0;
	if(this.jeashChildren.length > 0) while(true) {
		var child = this.jeashChildren[i];
		child.jeashBroadcast(event);
		if(i >= this.jeashChildren.length) break;
		if(this.jeashChildren[i] == child) {
			i++;
			if(i >= this.jeashChildren.length) break;
		}
	}
	this.dispatchEvent(event);
}
jeash.display.DisplayObjectContainer.prototype.BuildBounds = function() {
	jeash.display.InteractiveObject.prototype.BuildBounds.call(this);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		if(obj.jeashGetVisible()) {
			var r = obj.getBounds(this);
			if(r.width != 0 || r.height != 0) {
				if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone(); else this.mBoundsRect.extendBounds(r);
			}
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashInvalidateMatrix = function(local) {
	if(local == null) local = false;
	if(this.mMtxChainDirty == false && this.mMtxDirty == false) {
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.jeashInvalidateMatrix();
		}
	}
	this.mMtxChainDirty = this.mMtxChainDirty || !local;
	this.mMtxDirty = this.mMtxDirty || local;
}
jeash.display.DisplayObjectContainer.prototype.jeashDoAdded = function(inObj) {
	jeash.display.InteractiveObject.prototype.jeashDoAdded.call(this,inObj);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var child = _g1[_g];
		++_g;
		child.jeashDoAdded(inObj);
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashDoRemoved = function(inObj) {
	jeash.display.InteractiveObject.prototype.jeashDoRemoved.call(this,inObj);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var child = _g1[_g];
		++_g;
		child.jeashDoRemoved(inObj);
	}
}
jeash.display.DisplayObjectContainer.prototype.GetBackgroundRect = function() {
	var r = jeash.display.InteractiveObject.prototype.GetBackgroundRect.call(this);
	if(r != null) r = r.clone();
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		if(obj.jeashGetVisible()) {
			var o = obj.GetBackgroundRect();
			if(o != null) {
				var trans = o.transform(obj.mMatrix);
				if(r == null || r.width == 0 || r.height == 0) r = trans; else if(trans.width != 0 && trans.height != 0) r.extendBounds(trans);
			}
		}
	}
	return r;
}
jeash.display.DisplayObjectContainer.prototype.GetFocusObjects = function(outObjs) {
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		obj.GetFocusObjects(outObjs);
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashGetNumChildren = function() {
	return this.jeashChildren.length;
}
jeash.display.DisplayObjectContainer.prototype.jeashRender = function(inParentMatrix,inMask) {
	if(!this.jeashGetVisible()) return;
	jeash.display.InteractiveObject.prototype.jeashRender.call(this,inParentMatrix,inMask);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		if(obj.jeashGetVisible()) obj.jeashRender(this.mFullMatrix,inMask);
	}
}
jeash.display.DisplayObjectContainer.prototype.addChild = function(object) {
	if(object == this) throw "Adding to self";
	if(object.parent == this) {
		this.setChildIndex(object,this.jeashChildren.length - 1);
		return object;
	}
	if(this.jeashIsOnStage()) object.jeashAddToStage();
	this.jeashChildren.push(object);
	object.jeashSetParent(this);
	return object;
}
jeash.display.DisplayObjectContainer.prototype.jeashAddToStage = function() {
	jeash.display.InteractiveObject.prototype.jeashAddToStage.call(this);
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.jeashChildren[i].jeashAddToStage();
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashInsertBefore = function(obj) {
	jeash.display.InteractiveObject.prototype.jeashInsertBefore.call(this,obj);
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.jeashChildren[i].jeashAddToStage();
	}
}
jeash.display.DisplayObjectContainer.prototype.addChildAt = function(obj,index) {
	if(index > this.jeashChildren.length || index < 0) throw "Invalid index position " + index;
	if(obj.parent == this) {
		this.setChildIndex(obj,index);
		return;
	}
	if(index == this.jeashChildren.length) {
		this.jeashChildren.push(obj);
		if(this.jeashIsOnStage()) obj.jeashAddToStage();
	} else {
		if(this.jeashIsOnStage()) obj.jeashInsertBefore(this.jeashChildren[index]);
		this.jeashChildren.insert(index,obj);
	}
	obj.jeashSetParent(this);
}
jeash.display.DisplayObjectContainer.prototype.contains = function(child) {
	if(child == null) return false;
	if(this == child) return true;
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var c = _g1[_g];
		++_g;
		if(c == child) return true;
	}
	return false;
}
jeash.display.DisplayObjectContainer.prototype.getChildAt = function(index) {
	if(index >= 0 && index < this.jeashChildren.length) return this.jeashChildren[index];
	throw "getChildAt : index out of bounds " + index + "/" + this.jeashChildren.length;
	return null;
}
jeash.display.DisplayObjectContainer.prototype.getChildByName = function(inName) {
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i].name == inName) return this.jeashChildren[i];
	}
	return null;
}
jeash.display.DisplayObjectContainer.prototype.getChildIndex = function(child) {
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i] == child) return i;
	}
	return -1;
}
jeash.display.DisplayObjectContainer.prototype.removeChild = function(child) {
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i] == child) {
			child.jeashSetParent(null);
			return;
		}
	}
	throw "removeChild : none found?";
}
jeash.display.DisplayObjectContainer.prototype.removeChildAt = function(inI) {
	this.jeashChildren[inI].jeashSetParent(null);
	return this.jeashChildren[inI];
}
jeash.display.DisplayObjectContainer.prototype.__removeChild = function(child) {
	var i = this.getChildIndex(child);
	if(i >= 0) this.jeashChildren.splice(i,1);
}
jeash.display.DisplayObjectContainer.prototype.setChildIndex = function(child,index) {
	if(index > this.jeashChildren.length) throw "Invalid index position " + index;
	var s = null;
	var orig = this.getChildIndex(child);
	if(orig < 0) {
		var msg = "setChildIndex : object " + child.name + " not found.";
		if(child.parent == this) {
			var realindex = -1;
			var _g1 = 0, _g = this.jeashChildren.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this.jeashChildren[i] == child) {
					realindex = i;
					break;
				}
			}
			if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in jeashChildren array!";
		}
		throw msg;
	}
	if(index < orig) {
		var i = orig;
		while(i > index) {
			this.swapChildren(this.jeashChildren[i],this.jeashChildren[i - 1]);
			i--;
		}
	} else if(orig < index) {
		var i = orig;
		while(i < index) {
			this.swapChildren(this.jeashChildren[i],this.jeashChildren[i + 1]);
			i++;
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashSwapSurface = function(c1,c2) {
	if(this.jeashChildren[c1] == null) throw "Null element at index " + c1 + " length " + this.jeashChildren.length;
	if(this.jeashChildren[c2] == null) throw "Null element at index " + c2 + " length " + this.jeashChildren.length;
	var gfx1 = this.jeashChildren[c1].jeashGetGraphics();
	var gfx2 = this.jeashChildren[c2].jeashGetGraphics();
	if(gfx1 != null && gfx2 != null) jeash.Lib.jeashSwapSurface(gfx1.jeashSurface,gfx2.jeashSurface);
}
jeash.display.DisplayObjectContainer.prototype.swapChildren = function(child1,child2) {
	var c1 = -1;
	var c2 = -1;
	var swap;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i] == child1) c1 = i; else if(this.jeashChildren[i] == child2) c2 = i;
	}
	if(c1 != -1 && c2 != -1) {
		swap = this.jeashChildren[c1];
		this.jeashChildren[c1] = this.jeashChildren[c2];
		this.jeashChildren[c2] = swap;
		swap = null;
		this.jeashSwapSurface(c1,c2);
	}
}
jeash.display.DisplayObjectContainer.prototype.swapChildrenAt = function(child1,child2) {
	var swap = this.jeashChildren[child1];
	this.jeashChildren[child1] = this.jeashChildren[child2];
	this.jeashChildren[child2] = swap;
	swap = null;
}
jeash.display.DisplayObjectContainer.prototype.jeashGetObjectUnderPoint = function(point) {
	if(!this.jeashGetVisible()) return null;
	var l = this.jeashChildren.length - 1;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		var result = this.jeashChildren[l - i].jeashGetObjectUnderPoint(point);
		if(result != null) return result;
	}
	return jeash.display.InteractiveObject.prototype.jeashGetObjectUnderPoint.call(this,point);
}
jeash.display.DisplayObjectContainer.prototype.getObjectsUnderPoint = function(point) {
	var result = new Array();
	this.jeashGetObjectsUnderPoint(point,result);
	return result;
}
jeash.display.DisplayObjectContainer.prototype.jeashGetObjectsUnderPoint = function(point,stack) {
	var l = this.jeashChildren.length - 1;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		var result = this.jeashChildren[l - i].jeashGetObjectUnderPoint(point);
		if(result != null) stack.push(result);
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashSetFilters = function(filters) {
	jeash.display.InteractiveObject.prototype.jeashSetFilters.call(this,filters);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		obj.jeashSetFilters(filters);
	}
	return filters;
}
jeash.display.DisplayObjectContainer.prototype.jeashSetVisible = function(visible) {
	jeash.display.InteractiveObject.prototype.jeashSetVisible.call(this,visible);
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i].jeashIsOnStage()) this.jeashChildren[i].jeashSetVisible(visible);
	}
	return visible;
}
jeash.display.DisplayObjectContainer.prototype.__class__ = jeash.display.DisplayObjectContainer;
jeash.display.Sprite = function(p) {
	if( p === $_ ) return;
	jeash.Lib.jeashGetCanvas();
	this.jeashGraphics = new jeash.display.Graphics();
	if(this.jeashGraphics != null) this.jeashGraphics.owner = this;
	jeash.display.DisplayObjectContainer.call(this);
	this.buttonMode = false;
	this.name = "Sprite " + jeash.display.DisplayObject.mNameID++;
	this.jeashGraphics.jeashSurface.id = this.name;
}
jeash.display.Sprite.__name__ = ["jeash","display","Sprite"];
jeash.display.Sprite.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Sprite.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Sprite.prototype.jeashGraphics = null;
jeash.display.Sprite.prototype.graphics = null;
jeash.display.Sprite.prototype.useHandCursor = null;
jeash.display.Sprite.prototype.buttonMode = null;
jeash.display.Sprite.prototype.dropTarget = null;
jeash.display.Sprite.prototype.jeashCursorCallbackOver = null;
jeash.display.Sprite.prototype.jeashCursorCallbackOut = null;
jeash.display.Sprite.prototype.jeashDropTarget = null;
jeash.display.Sprite.prototype.startDrag = function(lockCenter,bounds) {
	if(this.GetStage() != null) this.GetStage().jeashStartDrag(this,lockCenter,bounds);
}
jeash.display.Sprite.prototype.stopDrag = function() {
	if(this.GetStage() != null) {
		this.GetStage().jeashStopDrag(this);
		var l = this.parent.jeashChildren.length - 1;
		var obj = this.GetStage();
		var _g1 = 0, _g = this.parent.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.parent.jeashChildren[l - i].jeashGetObjectUnderPoint(new jeash.geom.Point(this.GetStage().jeashGetMouseX(),this.GetStage().jeashGetMouseY()));
			if(result != null) obj = result;
		}
		if(obj != this) this.jeashDropTarget = obj; else this.jeashDropTarget = this.GetStage();
	}
}
jeash.display.Sprite.prototype.jeashGetGraphics = function() {
	return this.jeashGraphics;
}
jeash.display.Sprite.prototype.jeashSetUseHandCursor = function(cursor) {
	if(cursor == this.useHandCursor) return cursor;
	if(this.jeashCursorCallbackOver != null) this.removeEventListener(jeash.events.MouseEvent.ROLL_OVER,this.jeashCursorCallbackOver);
	if(this.jeashCursorCallbackOut != null) this.removeEventListener(jeash.events.MouseEvent.ROLL_OUT,this.jeashCursorCallbackOut);
	if(!cursor) jeash.Lib.jeashSetCursor(false); else {
		this.jeashCursorCallbackOver = function(_) {
			jeash.Lib.jeashSetCursor(true);
		};
		this.jeashCursorCallbackOut = function(_) {
			jeash.Lib.jeashSetCursor(false);
		};
		this.addEventListener(jeash.events.MouseEvent.ROLL_OVER,this.jeashCursorCallbackOver);
		this.addEventListener(jeash.events.MouseEvent.ROLL_OUT,this.jeashCursorCallbackOut);
	}
	this.useHandCursor = cursor;
	return cursor;
}
jeash.display.Sprite.prototype.jeashGetDropTarget = function() {
	return this.jeashDropTarget;
}
jeash.display.Sprite.prototype.__class__ = jeash.display.Sprite;
com.citruxengine.core.State = function(p) {
	if( p === $_ ) return;
	jeash.display.Sprite.call(this);
	this._ce = com.citruxengine.core.CitruxEngine.getInstance();
	this._objects = new Array();
}
com.citruxengine.core.State.__name__ = ["com","citruxengine","core","State"];
com.citruxengine.core.State.__super__ = jeash.display.Sprite;
for(var k in jeash.display.Sprite.prototype ) com.citruxengine.core.State.prototype[k] = jeash.display.Sprite.prototype[k];
com.citruxengine.core.State.prototype._ce = null;
com.citruxengine.core.State.prototype._objects = null;
com.citruxengine.core.State.prototype.destroy = function() {
}
com.citruxengine.core.State.prototype.initialize = function() {
}
com.citruxengine.core.State.prototype.update = function(timeDelta) {
	var garbage = [];
	var n = this._objects.length;
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		var object = this._objects[i];
		if(object.kill == true) garbage.push(object); else object.update(timeDelta);
	}
	n = garbage.length;
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		var garbageObject = garbage[i];
		this._objects.splice(Lambda.indexOf(this._objects,garbageObject),1);
		garbageObject.destroy();
	}
}
com.citruxengine.core.State.prototype.add = function(object) {
	this._objects.push(object);
	return object;
}
com.citruxengine.core.State.prototype.remove = function(object) {
	object.kill = true;
}
com.citruxengine.core.State.prototype.getObjectByName = function(name) {
	var _g = 0, _g1 = this._objects;
	while(_g < _g1.length) {
		var object = _g1[_g];
		++_g;
		if(object.name == name) return object;
	}
	return null;
}
com.citruxengine.core.State.prototype.getFirstObjectByType = function(type) {
	var _g = 0, _g1 = this._objects;
	while(_g < _g1.length) {
		var object = _g1[_g];
		++_g;
		if(Std["is"](object,type)) return object;
	}
	return null;
}
com.citruxengine.core.State.prototype.getObjectsByType = function(type) {
	var objects = new Array();
	var _g = 0, _g1 = this._objects;
	while(_g < _g1.length) {
		var object = _g1[_g];
		++_g;
		if(Std["is"](object,type)) objects.push(object);
	}
	return objects;
}
com.citruxengine.core.State.prototype.__class__ = com.citruxengine.core.State;
box2D.dynamics.joints.B2Jacobian = function(p) {
	if( p === $_ ) return;
	this.linearA = new box2D.common.math.B2Vec2();
	this.linearB = new box2D.common.math.B2Vec2();
}
box2D.dynamics.joints.B2Jacobian.__name__ = ["box2D","dynamics","joints","B2Jacobian"];
box2D.dynamics.joints.B2Jacobian.prototype.linearA = null;
box2D.dynamics.joints.B2Jacobian.prototype.angularA = null;
box2D.dynamics.joints.B2Jacobian.prototype.linearB = null;
box2D.dynamics.joints.B2Jacobian.prototype.angularB = null;
box2D.dynamics.joints.B2Jacobian.prototype.setZero = function() {
	this.linearA.setZero();
	this.angularA = 0.0;
	this.linearB.setZero();
	this.angularB = 0.0;
}
box2D.dynamics.joints.B2Jacobian.prototype.set = function(x1,a1,x2,a2) {
	this.linearA.setV(x1);
	this.angularA = a1;
	this.linearB.setV(x2);
	this.angularB = a2;
}
box2D.dynamics.joints.B2Jacobian.prototype.compute = function(x1,a1,x2,a2) {
	return this.linearA.x * x1.x + this.linearA.y * x1.y + this.angularA * a1 + (this.linearB.x * x2.x + this.linearB.y * x2.y) + this.angularB * a2;
}
box2D.dynamics.joints.B2Jacobian.prototype.__class__ = box2D.dynamics.joints.B2Jacobian;
jeash.events.Listener = function(inListener,inUseCapture,inPriority) {
	if( inListener === $_ ) return;
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = jeash.events.Listener.sIDs++;
}
jeash.events.Listener.__name__ = ["jeash","events","Listener"];
jeash.events.Listener.prototype.mListner = null;
jeash.events.Listener.prototype.mUseCapture = null;
jeash.events.Listener.prototype.mPriority = null;
jeash.events.Listener.prototype.mID = null;
jeash.events.Listener.prototype.Is = function(inListener,inCapture) {
	return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
}
jeash.events.Listener.prototype.dispatchEvent = function(event) {
	this.mListner(event);
}
jeash.events.Listener.prototype.__class__ = jeash.events.Listener;
box2D.dynamics.joints.B2RevoluteJoint = function(def) {
	if( def === $_ ) return;
	box2D.dynamics.joints.B2Joint.call(this,def);
	this.K = new box2D.common.math.B2Mat22();
	this.K1 = new box2D.common.math.B2Mat22();
	this.K2 = new box2D.common.math.B2Mat22();
	this.K3 = new box2D.common.math.B2Mat22();
	this.impulse3 = new box2D.common.math.B2Vec3();
	this.impulse2 = new box2D.common.math.B2Vec2();
	this.reduced = new box2D.common.math.B2Vec2();
	this.m_localAnchor1 = new box2D.common.math.B2Vec2();
	this.m_localAnchor2 = new box2D.common.math.B2Vec2();
	this.m_impulse = new box2D.common.math.B2Vec3();
	this.m_mass = new box2D.common.math.B2Mat33();
	this.m_localAnchor1.setV(def.localAnchorA);
	this.m_localAnchor2.setV(def.localAnchorB);
	this.m_referenceAngle = def.referenceAngle;
	this.m_impulse.setZero();
	this.m_motorImpulse = 0.0;
	this.m_lowerAngle = def.lowerAngle;
	this.m_upperAngle = def.upperAngle;
	this.m_maxMotorTorque = def.maxMotorTorque;
	this.m_motorSpeed = def.motorSpeed;
	this.m_enableLimit = def.enableLimit;
	this.m_enableMotor = def.enableMotor;
	this.m_limitState = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
}
box2D.dynamics.joints.B2RevoluteJoint.__name__ = ["box2D","dynamics","joints","B2RevoluteJoint"];
box2D.dynamics.joints.B2RevoluteJoint.__super__ = box2D.dynamics.joints.B2Joint;
for(var k in box2D.dynamics.joints.B2Joint.prototype ) box2D.dynamics.joints.B2RevoluteJoint.prototype[k] = box2D.dynamics.joints.B2Joint.prototype[k];
box2D.dynamics.joints.B2RevoluteJoint.prototype.getAnchorA = function() {
	return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.getAnchorB = function() {
	return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.getReactionForce = function(inv_dt) {
	return new box2D.common.math.B2Vec2(inv_dt * this.m_impulse.x,inv_dt * this.m_impulse.y);
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.getReactionTorque = function(inv_dt) {
	return inv_dt * this.m_impulse.z;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.getJointAngle = function() {
	return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.getJointSpeed = function() {
	return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.isLimitEnabled = function() {
	return this.m_enableLimit;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.enableLimit = function(flag) {
	this.m_enableLimit = flag;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.getLowerLimit = function() {
	return this.m_lowerAngle;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.getUpperLimit = function() {
	return this.m_upperAngle;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.setLimits = function(lower,upper) {
	this.m_lowerAngle = lower;
	this.m_upperAngle = upper;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.isMotorEnabled = function() {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	return this.m_enableMotor;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.enableMotor = function(flag) {
	this.m_enableMotor = flag;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.setMotorSpeed = function(speed) {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	this.m_motorSpeed = speed;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.getMotorSpeed = function() {
	return this.m_motorSpeed;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.setMaxMotorTorque = function(torque) {
	this.m_maxMotorTorque = torque;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.getMotorTorque = function() {
	return this.m_maxMotorTorque;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.K = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.K1 = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.K2 = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.K3 = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.initVelocityConstraints = function(step) {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var tMat;
	var tX;
	if(this.m_enableMotor || this.m_enableLimit) {
	}
	tMat = bA.m_xf.R;
	var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
	var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
	tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = bB.m_xf.R;
	var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
	var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var m1 = bA.m_invMass;
	var m2 = bB.m_invMass;
	var i1 = bA.m_invI;
	var i2 = bB.m_invI;
	this.m_mass.col1.x = m1 + m2 + r1Y * r1Y * i1 + r2Y * r2Y * i2;
	this.m_mass.col2.x = -r1Y * r1X * i1 - r2Y * r2X * i2;
	this.m_mass.col3.x = -r1Y * i1 - r2Y * i2;
	this.m_mass.col1.y = this.m_mass.col2.x;
	this.m_mass.col2.y = m1 + m2 + r1X * r1X * i1 + r2X * r2X * i2;
	this.m_mass.col3.y = r1X * i1 + r2X * i2;
	this.m_mass.col1.z = this.m_mass.col3.x;
	this.m_mass.col2.z = this.m_mass.col3.y;
	this.m_mass.col3.z = i1 + i2;
	this.m_motorMass = 1.0 / (i1 + i2);
	if(this.m_enableMotor == false) this.m_motorImpulse = 0.0;
	if(this.m_enableLimit) {
		var jointAngle = bB.m_sweep.a - bA.m_sweep.a - this.m_referenceAngle;
		if(box2D.common.math.B2Math.abs(this.m_upperAngle - this.m_lowerAngle) < 2.0 * box2D.common.B2Settings.b2_angularSlop) this.m_limitState = box2D.dynamics.joints.B2Joint.e_equalLimits; else if(jointAngle <= this.m_lowerAngle) {
			if(this.m_limitState != box2D.dynamics.joints.B2Joint.e_atLowerLimit) this.m_impulse.z = 0.0;
			this.m_limitState = box2D.dynamics.joints.B2Joint.e_atLowerLimit;
		} else if(jointAngle >= this.m_upperAngle) {
			if(this.m_limitState != box2D.dynamics.joints.B2Joint.e_atUpperLimit) this.m_impulse.z = 0.0;
			this.m_limitState = box2D.dynamics.joints.B2Joint.e_atUpperLimit;
		} else {
			this.m_limitState = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
			this.m_impulse.z = 0.0;
		}
	} else this.m_limitState = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
	if(step.warmStarting) {
		this.m_impulse.x *= step.dtRatio;
		this.m_impulse.y *= step.dtRatio;
		this.m_motorImpulse *= step.dtRatio;
		var PX = this.m_impulse.x;
		var PY = this.m_impulse.y;
		bA.m_linearVelocity.x -= m1 * PX;
		bA.m_linearVelocity.y -= m1 * PY;
		bA.m_angularVelocity -= i1 * (r1X * PY - r1Y * PX + this.m_motorImpulse + this.m_impulse.z);
		bB.m_linearVelocity.x += m2 * PX;
		bB.m_linearVelocity.y += m2 * PY;
		bB.m_angularVelocity += i2 * (r2X * PY - r2Y * PX + this.m_motorImpulse + this.m_impulse.z);
	} else {
		this.m_impulse.setZero();
		this.m_motorImpulse = 0.0;
	}
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.impulse3 = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.impulse2 = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.reduced = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.solveVelocityConstraints = function(step) {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var tMat;
	var tX;
	var newImpulse;
	var r1X;
	var r1Y;
	var r2X;
	var r2Y;
	var v1 = bA.m_linearVelocity;
	var w1 = bA.m_angularVelocity;
	var v2 = bB.m_linearVelocity;
	var w2 = bB.m_angularVelocity;
	var m1 = bA.m_invMass;
	var m2 = bB.m_invMass;
	var i1 = bA.m_invI;
	var i2 = bB.m_invI;
	if(this.m_enableMotor && this.m_limitState != box2D.dynamics.joints.B2Joint.e_equalLimits) {
		var Cdot = w2 - w1 - this.m_motorSpeed;
		var impulse = this.m_motorMass * -Cdot;
		var oldImpulse = this.m_motorImpulse;
		var maxImpulse = step.dt * this.m_maxMotorTorque;
		this.m_motorImpulse = box2D.common.math.B2Math.clamp(this.m_motorImpulse + impulse,-maxImpulse,maxImpulse);
		impulse = this.m_motorImpulse - oldImpulse;
		w1 -= i1 * impulse;
		w2 += i2 * impulse;
	}
	if(this.m_enableLimit && this.m_limitState != box2D.dynamics.joints.B2Joint.e_inactiveLimit) {
		tMat = bA.m_xf.R;
		r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
		r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
		r1X = tX;
		tMat = bB.m_xf.R;
		r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
		r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
		r2X = tX;
		var Cdot1X = v2.x + -w2 * r2Y - v1.x - -w1 * r1Y;
		var Cdot1Y = v2.y + w2 * r2X - v1.y - w1 * r1X;
		var Cdot2 = w2 - w1;
		this.m_mass.solve33(this.impulse3,-Cdot1X,-Cdot1Y,-Cdot2);
		if(this.m_limitState == box2D.dynamics.joints.B2Joint.e_equalLimits) this.m_impulse.add(this.impulse3); else if(this.m_limitState == box2D.dynamics.joints.B2Joint.e_atLowerLimit) {
			newImpulse = this.m_impulse.z + this.impulse3.z;
			if(newImpulse < 0.0) {
				this.m_mass.solve22(this.reduced,-Cdot1X,-Cdot1Y);
				this.impulse3.x = this.reduced.x;
				this.impulse3.y = this.reduced.y;
				this.impulse3.z = -this.m_impulse.z;
				this.m_impulse.x += this.reduced.x;
				this.m_impulse.y += this.reduced.y;
				this.m_impulse.z = 0.0;
			}
		} else if(this.m_limitState == box2D.dynamics.joints.B2Joint.e_atUpperLimit) {
			newImpulse = this.m_impulse.z + this.impulse3.z;
			if(newImpulse > 0.0) {
				this.m_mass.solve22(this.reduced,-Cdot1X,-Cdot1Y);
				this.impulse3.x = this.reduced.x;
				this.impulse3.y = this.reduced.y;
				this.impulse3.z = -this.m_impulse.z;
				this.m_impulse.x += this.reduced.x;
				this.m_impulse.y += this.reduced.y;
				this.m_impulse.z = 0.0;
			}
		}
		v1.x -= m1 * this.impulse3.x;
		v1.y -= m1 * this.impulse3.y;
		w1 -= i1 * (r1X * this.impulse3.y - r1Y * this.impulse3.x + this.impulse3.z);
		v2.x += m2 * this.impulse3.x;
		v2.y += m2 * this.impulse3.y;
		w2 += i2 * (r2X * this.impulse3.y - r2Y * this.impulse3.x + this.impulse3.z);
	} else {
		tMat = bA.m_xf.R;
		r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
		r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
		r1X = tX;
		tMat = bB.m_xf.R;
		r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
		r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
		r2X = tX;
		var CdotX = v2.x + -w2 * r2Y - v1.x - -w1 * r1Y;
		var CdotY = v2.y + w2 * r2X - v1.y - w1 * r1X;
		this.m_mass.solve22(this.impulse2,-CdotX,-CdotY);
		this.m_impulse.x += this.impulse2.x;
		this.m_impulse.y += this.impulse2.y;
		v1.x -= m1 * this.impulse2.x;
		v1.y -= m1 * this.impulse2.y;
		w1 -= i1 * (r1X * this.impulse2.y - r1Y * this.impulse2.x);
		v2.x += m2 * this.impulse2.x;
		v2.y += m2 * this.impulse2.y;
		w2 += i2 * (r2X * this.impulse2.y - r2Y * this.impulse2.x);
	}
	bA.m_linearVelocity.setV(v1);
	bA.m_angularVelocity = w1;
	bB.m_linearVelocity.setV(v2);
	bB.m_angularVelocity = w2;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.solvePositionConstraints = function(baumgarte) {
	var oldLimitImpulse;
	var C;
	var tMat;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var angularError = 0.0;
	var positionError = 0.0;
	var tX;
	var impulseX;
	var impulseY;
	if(this.m_enableLimit && this.m_limitState != box2D.dynamics.joints.B2Joint.e_inactiveLimit) {
		var angle = bB.m_sweep.a - bA.m_sweep.a - this.m_referenceAngle;
		var limitImpulse = 0.0;
		if(this.m_limitState == box2D.dynamics.joints.B2Joint.e_equalLimits) {
			C = box2D.common.math.B2Math.clamp(angle - this.m_lowerAngle,-box2D.common.B2Settings.b2_maxAngularCorrection,box2D.common.B2Settings.b2_maxAngularCorrection);
			limitImpulse = -this.m_motorMass * C;
			angularError = box2D.common.math.B2Math.abs(C);
		} else if(this.m_limitState == box2D.dynamics.joints.B2Joint.e_atLowerLimit) {
			C = angle - this.m_lowerAngle;
			angularError = -C;
			C = box2D.common.math.B2Math.clamp(C + box2D.common.B2Settings.b2_angularSlop,-box2D.common.B2Settings.b2_maxAngularCorrection,0.0);
			limitImpulse = -this.m_motorMass * C;
		} else if(this.m_limitState == box2D.dynamics.joints.B2Joint.e_atUpperLimit) {
			C = angle - this.m_upperAngle;
			angularError = C;
			C = box2D.common.math.B2Math.clamp(C - box2D.common.B2Settings.b2_angularSlop,0.0,box2D.common.B2Settings.b2_maxAngularCorrection);
			limitImpulse = -this.m_motorMass * C;
		}
		bA.m_sweep.a -= bA.m_invI * limitImpulse;
		bB.m_sweep.a += bB.m_invI * limitImpulse;
		bA.synchronizeTransform();
		bB.synchronizeTransform();
	}
	tMat = bA.m_xf.R;
	var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
	var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
	tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = bB.m_xf.R;
	var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
	var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var CX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
	var CY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
	var CLengthSquared = CX * CX + CY * CY;
	var CLength = Math.sqrt(CLengthSquared);
	positionError = CLength;
	var invMass1 = bA.m_invMass;
	var invMass2 = bB.m_invMass;
	var invI1 = bA.m_invI;
	var invI2 = bB.m_invI;
	var k_allowedStretch = 10.0 * box2D.common.B2Settings.b2_linearSlop;
	if(CLengthSquared > k_allowedStretch * k_allowedStretch) {
		var uX = CX / CLength;
		var uY = CY / CLength;
		var k = invMass1 + invMass2;
		var m = 1.0 / k;
		impulseX = m * -CX;
		impulseY = m * -CY;
		var k_beta = 0.5;
		bA.m_sweep.c.x -= k_beta * invMass1 * impulseX;
		bA.m_sweep.c.y -= k_beta * invMass1 * impulseY;
		bB.m_sweep.c.x += k_beta * invMass2 * impulseX;
		bB.m_sweep.c.y += k_beta * invMass2 * impulseY;
		CX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
		CY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
	}
	this.K1.col1.x = invMass1 + invMass2;
	this.K1.col2.x = 0.0;
	this.K1.col1.y = 0.0;
	this.K1.col2.y = invMass1 + invMass2;
	this.K2.col1.x = invI1 * r1Y * r1Y;
	this.K2.col2.x = -invI1 * r1X * r1Y;
	this.K2.col1.y = -invI1 * r1X * r1Y;
	this.K2.col2.y = invI1 * r1X * r1X;
	this.K3.col1.x = invI2 * r2Y * r2Y;
	this.K3.col2.x = -invI2 * r2X * r2Y;
	this.K3.col1.y = -invI2 * r2X * r2Y;
	this.K3.col2.y = invI2 * r2X * r2X;
	this.K.setM(this.K1);
	this.K.addM(this.K2);
	this.K.addM(this.K3);
	this.K.solve(box2D.dynamics.joints.B2RevoluteJoint.tImpulse,-CX,-CY);
	impulseX = box2D.dynamics.joints.B2RevoluteJoint.tImpulse.x;
	impulseY = box2D.dynamics.joints.B2RevoluteJoint.tImpulse.y;
	bA.m_sweep.c.x -= bA.m_invMass * impulseX;
	bA.m_sweep.c.y -= bA.m_invMass * impulseY;
	bA.m_sweep.a -= bA.m_invI * (r1X * impulseY - r1Y * impulseX);
	bB.m_sweep.c.x += bB.m_invMass * impulseX;
	bB.m_sweep.c.y += bB.m_invMass * impulseY;
	bB.m_sweep.a += bB.m_invI * (r2X * impulseY - r2Y * impulseX);
	bA.synchronizeTransform();
	bB.synchronizeTransform();
	return positionError <= box2D.common.B2Settings.b2_linearSlop && angularError <= box2D.common.B2Settings.b2_angularSlop;
}
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_localAnchor1 = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_localAnchor2 = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_impulse = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_motorImpulse = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_mass = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_motorMass = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_enableMotor = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_maxMotorTorque = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_motorSpeed = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_enableLimit = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_referenceAngle = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_lowerAngle = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_upperAngle = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.m_limitState = null;
box2D.dynamics.joints.B2RevoluteJoint.prototype.__class__ = box2D.dynamics.joints.B2RevoluteJoint;
box2D.dynamics.joints.B2JointDef = function(p) {
	if( p === $_ ) return;
	this.type = box2D.dynamics.joints.B2Joint.e_unknownJoint;
	this.userData = null;
	this.bodyA = null;
	this.bodyB = null;
	this.collideConnected = false;
}
box2D.dynamics.joints.B2JointDef.__name__ = ["box2D","dynamics","joints","B2JointDef"];
box2D.dynamics.joints.B2JointDef.prototype.type = null;
box2D.dynamics.joints.B2JointDef.prototype.userData = null;
box2D.dynamics.joints.B2JointDef.prototype.bodyA = null;
box2D.dynamics.joints.B2JointDef.prototype.bodyB = null;
box2D.dynamics.joints.B2JointDef.prototype.collideConnected = null;
box2D.dynamics.joints.B2JointDef.prototype.__class__ = box2D.dynamics.joints.B2JointDef;
box2D.dynamics.joints.B2GearJointDef = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.joints.B2JointDef.call(this);
	this.type = box2D.dynamics.joints.B2Joint.e_gearJoint;
	this.joint1 = null;
	this.joint2 = null;
	this.ratio = 1.0;
}
box2D.dynamics.joints.B2GearJointDef.__name__ = ["box2D","dynamics","joints","B2GearJointDef"];
box2D.dynamics.joints.B2GearJointDef.__super__ = box2D.dynamics.joints.B2JointDef;
for(var k in box2D.dynamics.joints.B2JointDef.prototype ) box2D.dynamics.joints.B2GearJointDef.prototype[k] = box2D.dynamics.joints.B2JointDef.prototype[k];
box2D.dynamics.joints.B2GearJointDef.prototype.joint1 = null;
box2D.dynamics.joints.B2GearJointDef.prototype.joint2 = null;
box2D.dynamics.joints.B2GearJointDef.prototype.ratio = null;
box2D.dynamics.joints.B2GearJointDef.prototype.__class__ = box2D.dynamics.joints.B2GearJointDef;
box2D.collision.IBroadPhase = function() { }
box2D.collision.IBroadPhase.__name__ = ["box2D","collision","IBroadPhase"];
box2D.collision.IBroadPhase.prototype.createProxy = null;
box2D.collision.IBroadPhase.prototype.destroyProxy = null;
box2D.collision.IBroadPhase.prototype.moveProxy = null;
box2D.collision.IBroadPhase.prototype.testOverlap = null;
box2D.collision.IBroadPhase.prototype.getUserData = null;
box2D.collision.IBroadPhase.prototype.getFatAABB = null;
box2D.collision.IBroadPhase.prototype.getProxyCount = null;
box2D.collision.IBroadPhase.prototype.updatePairs = null;
box2D.collision.IBroadPhase.prototype.query = null;
box2D.collision.IBroadPhase.prototype.rayCast = null;
box2D.collision.IBroadPhase.prototype.validate = null;
box2D.collision.IBroadPhase.prototype.rebalance = null;
box2D.collision.IBroadPhase.prototype.__class__ = box2D.collision.IBroadPhase;
box2D.dynamics.joints.B2MouseJointDef = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.joints.B2JointDef.call(this);
	this.target = new box2D.common.math.B2Vec2();
	this.type = box2D.dynamics.joints.B2Joint.e_mouseJoint;
	this.maxForce = 0.0;
	this.frequencyHz = 5.0;
	this.dampingRatio = 0.7;
}
box2D.dynamics.joints.B2MouseJointDef.__name__ = ["box2D","dynamics","joints","B2MouseJointDef"];
box2D.dynamics.joints.B2MouseJointDef.__super__ = box2D.dynamics.joints.B2JointDef;
for(var k in box2D.dynamics.joints.B2JointDef.prototype ) box2D.dynamics.joints.B2MouseJointDef.prototype[k] = box2D.dynamics.joints.B2JointDef.prototype[k];
box2D.dynamics.joints.B2MouseJointDef.prototype.target = null;
box2D.dynamics.joints.B2MouseJointDef.prototype.maxForce = null;
box2D.dynamics.joints.B2MouseJointDef.prototype.frequencyHz = null;
box2D.dynamics.joints.B2MouseJointDef.prototype.dampingRatio = null;
box2D.dynamics.joints.B2MouseJointDef.prototype.__class__ = box2D.dynamics.joints.B2MouseJointDef;
if(!jeash.text) jeash.text = {}
jeash.text.Font = function(p) {
	if( p === $_ ) return;
	this.jeashMetrics = [];
	this.jeashFontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(jeash.text.Font.jeashFontData == null) {
		jeash.text.Font.jeashFontData = [];
		jeash.text.Font.jeashFontData["Bitstream_Vera_Sans"] = jeash.text.Font.DEFAULT_FONT_DATA;
	}
	this.jeashSetFontName(className == "jeash.text.Font"?"Bitstream_Vera_Sans":className.split(".").pop());
}
jeash.text.Font.__name__ = ["jeash","text","Font"];
jeash.text.Font.jeashFontData = null;
jeash.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	var sans = new jeash.text.Font();
	sans.jeashSetFontName("Bitstream_Vera_Sans");
	sans.fontStyle = jeash.text.FontStyle.REGULAR;
	sans.fontType = jeash.text.FontType.DEVICE;
	return [sans];
}
jeash.text.Font.registerFont = function(font) {
}
jeash.text.Font.jeashOfResource = function(name) {
	var data = haxe.Resource.getString(name);
	if(data == null) throw "Resource data for string '" + name + "' not found.";
	jeash.text.Font.jeashFontData[name] = haxe.Resource.getString(name);
}
jeash.text.Font.prototype.fontName = null;
jeash.text.Font.prototype.fontStyle = null;
jeash.text.Font.prototype.fontType = null;
jeash.text.Font.prototype.jeashMetrics = null;
jeash.text.Font.prototype.jeashGlyphData = null;
jeash.text.Font.prototype.jeashFontScale = null;
jeash.text.Font.prototype.hasGlyph = function() {
	return false;
}
jeash.text.Font.prototype.jeashSetScale = function(scale) {
	this.jeashFontScale = scale / 1024;
}
jeash.text.Font.prototype.jeashGetAdvance = function(inGlyph,height) {
	var m = this.jeashMetrics[inGlyph];
	if(m == null) this.jeashMetrics[inGlyph] = m = Std["int"](this.jeashGlyphData.get(inGlyph)._width * this.jeashFontScale);
	if(m == null) return 0;
	return m;
}
jeash.text.Font.prototype.jeashRender = function(graphics,inChar,inX,inY,inOutline) {
	var index = 0;
	var glyph = this.jeashGlyphData.get(inChar);
	var commands = glyph.commands;
	var data = glyph.data;
	var _g = 0;
	while(_g < commands.length) {
		var c = commands[_g];
		++_g;
		switch(c) {
		case 1:
			graphics.moveTo(inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale);
			break;
		case 2:
			graphics.lineTo(inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale);
			break;
		case 3:
			graphics.curveTo(inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale,inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale);
			break;
		}
	}
}
jeash.text.Font.prototype.jeashSetFontName = function(name) {
	this.fontName = name;
	if(jeash.text.Font.jeashFontData[this.fontName] == null) try {
		jeash.text.Font.jeashOfResource(name);
	} catch( e ) {
		jeash.Lib.trace("Glyph data for font '" + name + "' does not exist, defaulting to '" + "Bitstream_Vera_Sans" + "'.");
		this.fontName = "Bitstream_Vera_Sans";
	}
	this.jeashGlyphData = haxe.Unserializer.run(jeash.text.Font.jeashFontData[this.fontName]);
	return name;
}
jeash.text.Font.prototype.__class__ = jeash.text.Font;
jeash.text.TextFormatAlign = { __ename__ : ["jeash","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
jeash.text.TextFormatAlign.LEFT = ["LEFT",0];
jeash.text.TextFormatAlign.LEFT.toString = $estr;
jeash.text.TextFormatAlign.LEFT.__enum__ = jeash.text.TextFormatAlign;
jeash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
jeash.text.TextFormatAlign.RIGHT.toString = $estr;
jeash.text.TextFormatAlign.RIGHT.__enum__ = jeash.text.TextFormatAlign;
jeash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
jeash.text.TextFormatAlign.JUSTIFY.toString = $estr;
jeash.text.TextFormatAlign.JUSTIFY.__enum__ = jeash.text.TextFormatAlign;
jeash.text.TextFormatAlign.CENTER = ["CENTER",3];
jeash.text.TextFormatAlign.CENTER.toString = $estr;
jeash.text.TextFormatAlign.CENTER.__enum__ = jeash.text.TextFormatAlign;
box2D.collision.B2RayCastOutput = function(p) {
	if( p === $_ ) return;
	this.normal = new box2D.common.math.B2Vec2();
}
box2D.collision.B2RayCastOutput.__name__ = ["box2D","collision","B2RayCastOutput"];
box2D.collision.B2RayCastOutput.prototype.normal = null;
box2D.collision.B2RayCastOutput.prototype.fraction = null;
box2D.collision.B2RayCastOutput.prototype.__class__ = box2D.collision.B2RayCastOutput;
if(!jeash.geom) jeash.geom = {}
jeash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if( in_a === $_ ) return;
	this.a = in_a == null?1.0:in_a;
	this.b = in_b == null?0.0:in_b;
	this.c = in_c == null?0.0:in_c;
	this.d = in_d == null?1.0:in_d;
	this.tx = in_tx == null?0.0:in_tx;
	this.ty = in_ty == null?0.0:in_ty;
}
jeash.geom.Matrix.__name__ = ["jeash","geom","Matrix"];
jeash.geom.Matrix.prototype.a = null;
jeash.geom.Matrix.prototype.b = null;
jeash.geom.Matrix.prototype.c = null;
jeash.geom.Matrix.prototype.d = null;
jeash.geom.Matrix.prototype.tx = null;
jeash.geom.Matrix.prototype.ty = null;
jeash.geom.Matrix.prototype.clone = function() {
	return new jeash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
}
jeash.geom.Matrix.prototype.createGradientBox = function(in_width,in_height,rotation,in_tx,in_ty) {
	this.a = in_width / 1638.4;
	this.d = in_height / 1638.4;
	if(rotation != null && rotation != 0.0) {
		var cos = Math.cos(rotation);
		var sin = Math.sin(rotation);
		this.b = sin * this.d;
		this.c = -sin * this.a;
		this.a *= cos;
		this.d *= cos;
	} else this.b = this.c = 0;
	this.tx = in_tx != null?in_tx + in_width / 2:in_width / 2;
	this.ty = in_ty != null?in_ty + in_height / 2:in_height / 2;
}
jeash.geom.Matrix.prototype.setRotation = function(inTheta,inScale) {
	var scale = inScale == null?1.0:inScale;
	this.a = Math.cos(inTheta) * scale;
	this.c = Math.sin(inTheta) * scale;
	this.b = -this.c;
	this.d = this.a;
}
jeash.geom.Matrix.prototype.invert = function() {
	var norm = this.a * this.d - this.b * this.c;
	if(norm == 0) {
		this.a = this.b = this.c = this.d = 0;
		this.tx = -this.tx;
		this.ty = -this.ty;
	} else {
		norm = 1.0 / norm;
		var a1 = this.d * norm;
		this.d = this.a * norm;
		this.a = a1;
		this.b *= -norm;
		this.c *= -norm;
		var tx1 = -this.a * this.tx - this.c * this.ty;
		this.ty = -this.b * this.tx - this.d * this.ty;
		this.tx = tx1;
	}
	return this;
}
jeash.geom.Matrix.prototype.transformPoint = function(inPos) {
	return new jeash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
}
jeash.geom.Matrix.prototype.translate = function(inDX,inDY) {
	this.tx += inDX;
	this.ty += inDY;
}
jeash.geom.Matrix.prototype.rotate = function(inTheta) {
	var cos = Math.cos(inTheta);
	var sin = Math.sin(inTheta);
	var a1 = this.a * cos - this.b * sin;
	this.b = this.a * sin + this.b * cos;
	this.a = a1;
	var c1 = this.c * cos - this.d * sin;
	this.d = this.c * sin + this.d * cos;
	this.c = c1;
	var tx1 = this.tx * cos - this.ty * sin;
	this.ty = this.tx * sin + this.ty * cos;
	this.tx = tx1;
}
jeash.geom.Matrix.prototype.scale = function(inSX,inSY) {
	this.a *= inSX;
	this.b *= inSY;
	this.c *= inSX;
	this.d *= inSY;
	this.tx *= inSX;
	this.ty *= inSY;
}
jeash.geom.Matrix.prototype.concat = function(m) {
	var a1 = this.a * m.a + this.b * m.c;
	this.b = this.a * m.b + this.b * m.d;
	this.a = a1;
	var c1 = this.c * m.a + this.d * m.c;
	this.d = this.c * m.b + this.d * m.d;
	this.c = c1;
	var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
	this.ty = this.tx * m.b + this.ty * m.d + m.ty;
	this.tx = tx1;
}
jeash.geom.Matrix.prototype.mult = function(m) {
	var result = new jeash.geom.Matrix();
	result.a = this.a * m.a + this.b * m.c;
	result.b = this.a * m.b + this.b * m.d;
	result.c = this.c * m.a + this.d * m.c;
	result.d = this.c * m.b + this.d * m.d;
	result.tx = this.tx * m.a + this.ty * m.c + m.tx;
	result.ty = this.tx * m.b + this.ty * m.d + m.ty;
	return result;
}
jeash.geom.Matrix.prototype.identity = function() {
	this.a = 1;
	this.b = 0;
	this.c = 0;
	this.d = 1;
	this.tx = 0;
	this.ty = 0;
}
jeash.geom.Matrix.prototype.toMozString = function() {
	return "matrix(" + this.a.toFixed(4) + ", " + this.b.toFixed(4) + ", " + this.c.toFixed(4) + ", " + this.d.toFixed(4) + ", " + this.tx.toFixed(4) + "px, " + this.ty.toFixed(4) + "px)";
}
jeash.geom.Matrix.prototype.toString = function() {
	return "matrix(" + this.a.toFixed(4) + ", " + this.b.toFixed(4) + ", " + this.c.toFixed(4) + ", " + this.d.toFixed(4) + ", " + this.tx.toFixed(4) + ", " + this.ty.toFixed(4) + ")";
}
jeash.geom.Matrix.prototype.__class__ = jeash.geom.Matrix;
if(!box2D.dynamics.contacts) box2D.dynamics.contacts = {}
box2D.dynamics.contacts.B2ContactEdge = function(p) {
}
box2D.dynamics.contacts.B2ContactEdge.__name__ = ["box2D","dynamics","contacts","B2ContactEdge"];
box2D.dynamics.contacts.B2ContactEdge.prototype.other = null;
box2D.dynamics.contacts.B2ContactEdge.prototype.contact = null;
box2D.dynamics.contacts.B2ContactEdge.prototype.prev = null;
box2D.dynamics.contacts.B2ContactEdge.prototype.next = null;
box2D.dynamics.contacts.B2ContactEdge.prototype.__class__ = box2D.dynamics.contacts.B2ContactEdge;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
box2D.dynamics.joints.B2DistanceJointDef = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.joints.B2JointDef.call(this);
	this.localAnchorA = new box2D.common.math.B2Vec2();
	this.localAnchorB = new box2D.common.math.B2Vec2();
	this.type = box2D.dynamics.joints.B2Joint.e_distanceJoint;
	this.length = 1.0;
	this.frequencyHz = 0.0;
	this.dampingRatio = 0.0;
}
box2D.dynamics.joints.B2DistanceJointDef.__name__ = ["box2D","dynamics","joints","B2DistanceJointDef"];
box2D.dynamics.joints.B2DistanceJointDef.__super__ = box2D.dynamics.joints.B2JointDef;
for(var k in box2D.dynamics.joints.B2JointDef.prototype ) box2D.dynamics.joints.B2DistanceJointDef.prototype[k] = box2D.dynamics.joints.B2JointDef.prototype[k];
box2D.dynamics.joints.B2DistanceJointDef.prototype.initialize = function(bA,bB,anchorA,anchorB) {
	this.bodyA = bA;
	this.bodyB = bB;
	this.localAnchorA.setV(this.bodyA.getLocalPoint(anchorA));
	this.localAnchorB.setV(this.bodyB.getLocalPoint(anchorB));
	var dX = anchorB.x - anchorA.x;
	var dY = anchorB.y - anchorA.y;
	this.length = Math.sqrt(dX * dX + dY * dY);
	this.frequencyHz = 0.0;
	this.dampingRatio = 0.0;
}
box2D.dynamics.joints.B2DistanceJointDef.prototype.localAnchorA = null;
box2D.dynamics.joints.B2DistanceJointDef.prototype.localAnchorB = null;
box2D.dynamics.joints.B2DistanceJointDef.prototype.length = null;
box2D.dynamics.joints.B2DistanceJointDef.prototype.frequencyHz = null;
box2D.dynamics.joints.B2DistanceJointDef.prototype.dampingRatio = null;
box2D.dynamics.joints.B2DistanceJointDef.prototype.__class__ = box2D.dynamics.joints.B2DistanceJointDef;
Hash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	} catch( e ) {
		for(var i in this.h) if( i == key ) return true;
		return false;
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{" == null?"null":"{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i == null?"null":i;
		s.b[s.b.length] = " => " == null?"null":" => ";
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.b[s.b.length] = ", " == null?"null":", ";
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
if(typeof nme=='undefined') nme = {}
if(!nme.installer) nme.installer = {}
nme.installer.Assets = function() { }
nme.installer.Assets.__name__ = ["nme","installer","Assets"];
nme.installer.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	switch(id) {
	}
	return null;
}
nme.installer.Assets.getBytes = function(id) {
	switch(id) {
	}
	return null;
}
nme.installer.Assets.getFont = function(id) {
	switch(id) {
	}
	return null;
}
nme.installer.Assets.getSound = function(id) {
	switch(id) {
	}
	return null;
}
nme.installer.Assets.getText = function(id) {
	switch(id) {
	}
	return null;
}
nme.installer.Assets.prototype.__class__ = nme.installer.Assets;
box2D.collision.B2TOIInput = function(p) {
	if( p === $_ ) return;
	this.proxyA = new box2D.collision.B2DistanceProxy();
	this.proxyB = new box2D.collision.B2DistanceProxy();
	this.sweepA = new box2D.common.math.B2Sweep();
	this.sweepB = new box2D.common.math.B2Sweep();
}
box2D.collision.B2TOIInput.__name__ = ["box2D","collision","B2TOIInput"];
box2D.collision.B2TOIInput.prototype.proxyA = null;
box2D.collision.B2TOIInput.prototype.proxyB = null;
box2D.collision.B2TOIInput.prototype.sweepA = null;
box2D.collision.B2TOIInput.prototype.sweepB = null;
box2D.collision.B2TOIInput.prototype.tolerance = null;
box2D.collision.B2TOIInput.prototype.__class__ = box2D.collision.B2TOIInput;
box2D.dynamics.contacts.B2Contact = function(p) {
	if( p === $_ ) return;
	this.m_nodeA = new box2D.dynamics.contacts.B2ContactEdge();
	this.m_nodeB = new box2D.dynamics.contacts.B2ContactEdge();
	this.m_manifold = new box2D.collision.B2Manifold();
	this.m_oldManifold = new box2D.collision.B2Manifold();
}
box2D.dynamics.contacts.B2Contact.__name__ = ["box2D","dynamics","contacts","B2Contact"];
box2D.dynamics.contacts.B2Contact.prototype.getManifold = function() {
	return this.m_manifold;
}
box2D.dynamics.contacts.B2Contact.prototype.getWorldManifold = function(worldManifold) {
	var bodyA = this.m_fixtureA.getBody();
	var bodyB = this.m_fixtureB.getBody();
	var shapeA = this.m_fixtureA.getShape();
	var shapeB = this.m_fixtureB.getShape();
	worldManifold.initialize(this.m_manifold,bodyA.getTransform(),shapeA.m_radius,bodyB.getTransform(),shapeB.m_radius);
}
box2D.dynamics.contacts.B2Contact.prototype.isTouching = function() {
	return (this.m_flags & box2D.dynamics.contacts.B2Contact.e_touchingFlag) == box2D.dynamics.contacts.B2Contact.e_touchingFlag;
}
box2D.dynamics.contacts.B2Contact.prototype.isContinuous = function() {
	return (this.m_flags & box2D.dynamics.contacts.B2Contact.e_continuousFlag) == box2D.dynamics.contacts.B2Contact.e_continuousFlag;
}
box2D.dynamics.contacts.B2Contact.prototype.setSensor = function(sensor) {
	if(sensor) this.m_flags |= box2D.dynamics.contacts.B2Contact.e_sensorFlag; else this.m_flags &= ~box2D.dynamics.contacts.B2Contact.e_sensorFlag;
}
box2D.dynamics.contacts.B2Contact.prototype.isSensor = function() {
	return (this.m_flags & box2D.dynamics.contacts.B2Contact.e_sensorFlag) == box2D.dynamics.contacts.B2Contact.e_sensorFlag;
}
box2D.dynamics.contacts.B2Contact.prototype.setEnabled = function(flag) {
	if(flag) this.m_flags |= box2D.dynamics.contacts.B2Contact.e_enabledFlag; else this.m_flags &= ~box2D.dynamics.contacts.B2Contact.e_enabledFlag;
}
box2D.dynamics.contacts.B2Contact.prototype.isEnabled = function() {
	return (this.m_flags & box2D.dynamics.contacts.B2Contact.e_enabledFlag) == box2D.dynamics.contacts.B2Contact.e_enabledFlag;
}
box2D.dynamics.contacts.B2Contact.prototype.getNext = function() {
	return this.m_next;
}
box2D.dynamics.contacts.B2Contact.prototype.getFixtureA = function() {
	return this.m_fixtureA;
}
box2D.dynamics.contacts.B2Contact.prototype.getFixtureB = function() {
	return this.m_fixtureB;
}
box2D.dynamics.contacts.B2Contact.prototype.flagForFiltering = function() {
	this.m_flags |= box2D.dynamics.contacts.B2Contact.e_filterFlag;
}
box2D.dynamics.contacts.B2Contact.prototype.reset = function(fixtureA,fixtureB) {
	this.m_flags = box2D.dynamics.contacts.B2Contact.e_enabledFlag;
	if(fixtureA == null || fixtureB == null) {
		this.m_fixtureA = null;
		this.m_fixtureB = null;
		return;
	}
	if(fixtureA.isSensor() || fixtureB.isSensor()) this.m_flags |= box2D.dynamics.contacts.B2Contact.e_sensorFlag;
	var bodyA = fixtureA.getBody();
	var bodyB = fixtureB.getBody();
	if(bodyA.getType() != box2D.dynamics.B2Body.b2_dynamicBody || bodyA.isBullet() || bodyB.getType() != box2D.dynamics.B2Body.b2_dynamicBody || bodyB.isBullet()) this.m_flags |= box2D.dynamics.contacts.B2Contact.e_continuousFlag;
	this.m_fixtureA = fixtureA;
	this.m_fixtureB = fixtureB;
	this.m_manifold.m_pointCount = 0;
	this.m_prev = null;
	this.m_next = null;
	this.m_nodeA.contact = null;
	this.m_nodeA.prev = null;
	this.m_nodeA.next = null;
	this.m_nodeA.other = null;
	this.m_nodeB.contact = null;
	this.m_nodeB.prev = null;
	this.m_nodeB.next = null;
	this.m_nodeB.other = null;
}
box2D.dynamics.contacts.B2Contact.prototype.update = function(listener) {
	var tManifold = this.m_oldManifold;
	this.m_oldManifold = this.m_manifold;
	this.m_manifold = tManifold;
	this.m_flags |= box2D.dynamics.contacts.B2Contact.e_enabledFlag;
	var touching = false;
	var wasTouching = (this.m_flags & box2D.dynamics.contacts.B2Contact.e_touchingFlag) == box2D.dynamics.contacts.B2Contact.e_touchingFlag;
	var bodyA = this.m_fixtureA.m_body;
	var bodyB = this.m_fixtureB.m_body;
	var aabbOverlap = this.m_fixtureA.m_aabb.testOverlap(this.m_fixtureB.m_aabb);
	if((this.m_flags & box2D.dynamics.contacts.B2Contact.e_sensorFlag) != 0) {
		if(aabbOverlap) {
			var shapeA = this.m_fixtureA.getShape();
			var shapeB = this.m_fixtureB.getShape();
			var xfA = bodyA.getTransform();
			var xfB = bodyB.getTransform();
			touching = box2D.collision.shapes.B2Shape.testOverlap(shapeA,xfA,shapeB,xfB);
		}
		this.m_manifold.m_pointCount = 0;
	} else {
		if(bodyA.getType() != box2D.dynamics.B2Body.b2_dynamicBody || bodyA.isBullet() || bodyB.getType() != box2D.dynamics.B2Body.b2_dynamicBody || bodyB.isBullet()) this.m_flags |= box2D.dynamics.contacts.B2Contact.e_continuousFlag; else this.m_flags &= ~box2D.dynamics.contacts.B2Contact.e_continuousFlag;
		if(aabbOverlap) {
			this.evaluate();
			touching = this.m_manifold.m_pointCount > 0;
			var _g1 = 0, _g = this.m_manifold.m_pointCount;
			while(_g1 < _g) {
				var i = _g1++;
				var mp2 = this.m_manifold.m_points[i];
				mp2.m_normalImpulse = 0.0;
				mp2.m_tangentImpulse = 0.0;
				var id2 = mp2.m_id;
				var _g3 = 0, _g2 = this.m_oldManifold.m_pointCount;
				while(_g3 < _g2) {
					var j = _g3++;
					var mp1 = this.m_oldManifold.m_points[j];
					if(mp1.m_id.getKey() == id2.getKey()) {
						mp2.m_normalImpulse = mp1.m_normalImpulse;
						mp2.m_tangentImpulse = mp1.m_tangentImpulse;
						break;
					}
				}
			}
		} else this.m_manifold.m_pointCount = 0;
		if(touching != wasTouching) {
			bodyA.setAwake(true);
			bodyB.setAwake(true);
		}
	}
	if(touching) this.m_flags |= box2D.dynamics.contacts.B2Contact.e_touchingFlag; else this.m_flags &= ~box2D.dynamics.contacts.B2Contact.e_touchingFlag;
	if(wasTouching == false && touching == true) listener.beginContact(this);
	if(wasTouching == true && touching == false) listener.endContact(this);
	if((this.m_flags & box2D.dynamics.contacts.B2Contact.e_sensorFlag) == 0) listener.preSolve(this,this.m_oldManifold);
}
box2D.dynamics.contacts.B2Contact.prototype.evaluate = function() {
}
box2D.dynamics.contacts.B2Contact.prototype.computeTOI = function(sweepA,sweepB) {
	box2D.dynamics.contacts.B2Contact.s_input.proxyA.set(this.m_fixtureA.getShape());
	box2D.dynamics.contacts.B2Contact.s_input.proxyB.set(this.m_fixtureB.getShape());
	box2D.dynamics.contacts.B2Contact.s_input.sweepA = sweepA;
	box2D.dynamics.contacts.B2Contact.s_input.sweepB = sweepB;
	box2D.dynamics.contacts.B2Contact.s_input.tolerance = box2D.common.B2Settings.b2_linearSlop;
	return box2D.collision.B2TimeOfImpact.timeOfImpact(box2D.dynamics.contacts.B2Contact.s_input);
}
box2D.dynamics.contacts.B2Contact.prototype.m_flags = null;
box2D.dynamics.contacts.B2Contact.prototype.m_prev = null;
box2D.dynamics.contacts.B2Contact.prototype.m_next = null;
box2D.dynamics.contacts.B2Contact.prototype.m_nodeA = null;
box2D.dynamics.contacts.B2Contact.prototype.m_nodeB = null;
box2D.dynamics.contacts.B2Contact.prototype.m_fixtureA = null;
box2D.dynamics.contacts.B2Contact.prototype.m_fixtureB = null;
box2D.dynamics.contacts.B2Contact.prototype.m_manifold = null;
box2D.dynamics.contacts.B2Contact.prototype.m_oldManifold = null;
box2D.dynamics.contacts.B2Contact.prototype.m_toi = null;
box2D.dynamics.contacts.B2Contact.prototype.__class__ = box2D.dynamics.contacts.B2Contact;
box2D.dynamics.contacts.B2EdgeAndCircleContact = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.contacts.B2Contact.call(this);
}
box2D.dynamics.contacts.B2EdgeAndCircleContact.__name__ = ["box2D","dynamics","contacts","B2EdgeAndCircleContact"];
box2D.dynamics.contacts.B2EdgeAndCircleContact.__super__ = box2D.dynamics.contacts.B2Contact;
for(var k in box2D.dynamics.contacts.B2Contact.prototype ) box2D.dynamics.contacts.B2EdgeAndCircleContact.prototype[k] = box2D.dynamics.contacts.B2Contact.prototype[k];
box2D.dynamics.contacts.B2EdgeAndCircleContact.create = function(allocator) {
	return new box2D.dynamics.contacts.B2EdgeAndCircleContact();
}
box2D.dynamics.contacts.B2EdgeAndCircleContact.destroy = function(contact,allocator) {
}
box2D.dynamics.contacts.B2EdgeAndCircleContact.prototype.reset = function(fixtureA,fixtureB) {
	box2D.dynamics.contacts.B2Contact.prototype.reset.call(this,fixtureA,fixtureB);
}
box2D.dynamics.contacts.B2EdgeAndCircleContact.prototype.evaluate = function() {
	var bA = this.m_fixtureA.getBody();
	var bB = this.m_fixtureB.getBody();
	this.b2CollideEdgeAndCircle(this.m_manifold,(function($this) {
		var $r;
		var $t = $this.m_fixtureA.getShape();
		if(Std["is"]($t,box2D.collision.shapes.B2EdgeShape)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),bA.m_xf,(function($this) {
		var $r;
		var $t = $this.m_fixtureB.getShape();
		if(Std["is"]($t,box2D.collision.shapes.B2CircleShape)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),bB.m_xf);
}
box2D.dynamics.contacts.B2EdgeAndCircleContact.prototype.b2CollideEdgeAndCircle = function(manifold,edge,xf1,circle,xf2) {
}
box2D.dynamics.contacts.B2EdgeAndCircleContact.prototype.__class__ = box2D.dynamics.contacts.B2EdgeAndCircleContact;
box2D.dynamics.joints.B2RevoluteJointDef = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.joints.B2JointDef.call(this);
	this.localAnchorA = new box2D.common.math.B2Vec2();
	this.localAnchorB = new box2D.common.math.B2Vec2();
	this.type = box2D.dynamics.joints.B2Joint.e_revoluteJoint;
	this.localAnchorA.set(0.0,0.0);
	this.localAnchorB.set(0.0,0.0);
	this.referenceAngle = 0.0;
	this.lowerAngle = 0.0;
	this.upperAngle = 0.0;
	this.maxMotorTorque = 0.0;
	this.motorSpeed = 0.0;
	this.enableLimit = false;
	this.enableMotor = false;
}
box2D.dynamics.joints.B2RevoluteJointDef.__name__ = ["box2D","dynamics","joints","B2RevoluteJointDef"];
box2D.dynamics.joints.B2RevoluteJointDef.__super__ = box2D.dynamics.joints.B2JointDef;
for(var k in box2D.dynamics.joints.B2JointDef.prototype ) box2D.dynamics.joints.B2RevoluteJointDef.prototype[k] = box2D.dynamics.joints.B2JointDef.prototype[k];
box2D.dynamics.joints.B2RevoluteJointDef.prototype.initialize = function(bA,bB,anchor) {
	this.bodyA = bA;
	this.bodyB = bB;
	this.localAnchorA = this.bodyA.getLocalPoint(anchor);
	this.localAnchorB = this.bodyB.getLocalPoint(anchor);
	this.referenceAngle = this.bodyB.getAngle() - this.bodyA.getAngle();
}
box2D.dynamics.joints.B2RevoluteJointDef.prototype.localAnchorA = null;
box2D.dynamics.joints.B2RevoluteJointDef.prototype.localAnchorB = null;
box2D.dynamics.joints.B2RevoluteJointDef.prototype.referenceAngle = null;
box2D.dynamics.joints.B2RevoluteJointDef.prototype.enableLimit = null;
box2D.dynamics.joints.B2RevoluteJointDef.prototype.lowerAngle = null;
box2D.dynamics.joints.B2RevoluteJointDef.prototype.upperAngle = null;
box2D.dynamics.joints.B2RevoluteJointDef.prototype.enableMotor = null;
box2D.dynamics.joints.B2RevoluteJointDef.prototype.motorSpeed = null;
box2D.dynamics.joints.B2RevoluteJointDef.prototype.maxMotorTorque = null;
box2D.dynamics.joints.B2RevoluteJointDef.prototype.__class__ = box2D.dynamics.joints.B2RevoluteJointDef;
jeash.display.IGraphicsFill = function() { }
jeash.display.IGraphicsFill.__name__ = ["jeash","display","IGraphicsFill"];
jeash.display.IGraphicsFill.prototype.jeashGraphicsFillType = null;
jeash.display.IGraphicsFill.prototype.__class__ = jeash.display.IGraphicsFill;
jeash.display.IGraphicsData = function() { }
jeash.display.IGraphicsData.__name__ = ["jeash","display","IGraphicsData"];
jeash.display.IGraphicsData.prototype.jeashGraphicsDataType = null;
jeash.display.IGraphicsData.prototype.__class__ = jeash.display.IGraphicsData;
jeash.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if( type === $_ ) return;
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.GRADIENT;
	this.jeashGraphicsFillType = jeash.display.GraphicsFillType.GRADIENT_FILL;
}
jeash.display.GraphicsGradientFill.__name__ = ["jeash","display","GraphicsGradientFill"];
jeash.display.GraphicsGradientFill.prototype.alphas = null;
jeash.display.GraphicsGradientFill.prototype.colors = null;
jeash.display.GraphicsGradientFill.prototype.focalPointRatio = null;
jeash.display.GraphicsGradientFill.prototype.interpolationMethod = null;
jeash.display.GraphicsGradientFill.prototype.matrix = null;
jeash.display.GraphicsGradientFill.prototype.ratios = null;
jeash.display.GraphicsGradientFill.prototype.spreadMethod = null;
jeash.display.GraphicsGradientFill.prototype.type = null;
jeash.display.GraphicsGradientFill.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsGradientFill.prototype.jeashGraphicsFillType = null;
jeash.display.GraphicsGradientFill.prototype.__class__ = jeash.display.GraphicsGradientFill;
jeash.display.GraphicsGradientFill.__interfaces__ = [jeash.display.IGraphicsFill,jeash.display.IGraphicsData];
jeash.display.StageAlign = { __ename__ : ["jeash","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
jeash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
jeash.display.StageAlign.TOP_RIGHT.toString = $estr;
jeash.display.StageAlign.TOP_RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
jeash.display.StageAlign.TOP_LEFT.toString = $estr;
jeash.display.StageAlign.TOP_LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.TOP = ["TOP",2];
jeash.display.StageAlign.TOP.toString = $estr;
jeash.display.StageAlign.TOP.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.RIGHT = ["RIGHT",3];
jeash.display.StageAlign.RIGHT.toString = $estr;
jeash.display.StageAlign.RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.LEFT = ["LEFT",4];
jeash.display.StageAlign.LEFT.toString = $estr;
jeash.display.StageAlign.LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
jeash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
jeash.display.StageAlign.BOTTOM_RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
jeash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
jeash.display.StageAlign.BOTTOM_LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM = ["BOTTOM",7];
jeash.display.StageAlign.BOTTOM.toString = $estr;
jeash.display.StageAlign.BOTTOM.__enum__ = jeash.display.StageAlign;
box2D.dynamics.contacts.B2ContactFactory = function(allocator) {
	if( allocator === $_ ) return;
	this.m_allocator = allocator;
	this.initializeRegisters();
}
box2D.dynamics.contacts.B2ContactFactory.__name__ = ["box2D","dynamics","contacts","B2ContactFactory"];
box2D.dynamics.contacts.B2ContactFactory.prototype.addType = function(createFcn,destroyFcn,type1,type2) {
	this.m_registers[type1][type2].createFcn = createFcn;
	this.m_registers[type1][type2].destroyFcn = destroyFcn;
	this.m_registers[type1][type2].primary = true;
	if(type1 != type2) {
		this.m_registers[type2][type1].createFcn = createFcn;
		this.m_registers[type2][type1].destroyFcn = destroyFcn;
		this.m_registers[type2][type1].primary = false;
	}
}
box2D.dynamics.contacts.B2ContactFactory.prototype.initializeRegisters = function() {
	this.m_registers = new Array();
	var _g1 = 0, _g = box2D.collision.shapes.B2Shape.e_shapeTypeCount;
	while(_g1 < _g) {
		var i = _g1++;
		this.m_registers[i] = new Array();
		var _g3 = 0, _g2 = box2D.collision.shapes.B2Shape.e_shapeTypeCount;
		while(_g3 < _g2) {
			var j = _g3++;
			this.m_registers[i][j] = new box2D.dynamics.contacts.B2ContactRegister();
		}
	}
	this.addType(box2D.dynamics.contacts.B2CircleContact.create,box2D.dynamics.contacts.B2CircleContact.destroy,box2D.collision.shapes.B2Shape.e_circleShape,box2D.collision.shapes.B2Shape.e_circleShape);
	this.addType(box2D.dynamics.contacts.B2PolyAndCircleContact.create,box2D.dynamics.contacts.B2PolyAndCircleContact.destroy,box2D.collision.shapes.B2Shape.e_polygonShape,box2D.collision.shapes.B2Shape.e_circleShape);
	this.addType(box2D.dynamics.contacts.B2PolygonContact.create,box2D.dynamics.contacts.B2PolygonContact.destroy,box2D.collision.shapes.B2Shape.e_polygonShape,box2D.collision.shapes.B2Shape.e_polygonShape);
	this.addType(box2D.dynamics.contacts.B2EdgeAndCircleContact.create,box2D.dynamics.contacts.B2EdgeAndCircleContact.destroy,box2D.collision.shapes.B2Shape.e_edgeShape,box2D.collision.shapes.B2Shape.e_circleShape);
	this.addType(box2D.dynamics.contacts.B2PolyAndEdgeContact.create,box2D.dynamics.contacts.B2PolyAndEdgeContact.destroy,box2D.collision.shapes.B2Shape.e_polygonShape,box2D.collision.shapes.B2Shape.e_edgeShape);
}
box2D.dynamics.contacts.B2ContactFactory.prototype.create = function(fixtureA,fixtureB) {
	var type1 = fixtureA.getType();
	var type2 = fixtureB.getType();
	var reg = this.m_registers[type1][type2];
	var c;
	if(reg.pool != null) {
		c = reg.pool;
		reg.pool = c.m_next;
		reg.poolCount--;
		c.reset(fixtureA,fixtureB);
		return c;
	}
	var createFcn = reg.createFcn;
	if(createFcn != null) {
		if(reg.primary) {
			c = createFcn(this.m_allocator);
			c.reset(fixtureA,fixtureB);
			return c;
		} else {
			c = createFcn(this.m_allocator);
			c.reset(fixtureB,fixtureA);
			return c;
		}
	} else return null;
}
box2D.dynamics.contacts.B2ContactFactory.prototype.destroy = function(contact) {
	if(contact.m_manifold.m_pointCount > 0) {
		contact.m_fixtureA.m_body.setAwake(true);
		contact.m_fixtureB.m_body.setAwake(true);
	}
	var type1 = contact.m_fixtureA.getType();
	var type2 = contact.m_fixtureB.getType();
	var reg = this.m_registers[type1][type2];
	reg.poolCount++;
	contact.m_next = reg.pool;
	reg.pool = contact;
	var destroyFcn = reg.destroyFcn;
	destroyFcn(contact,this.m_allocator);
}
box2D.dynamics.contacts.B2ContactFactory.prototype.m_registers = null;
box2D.dynamics.contacts.B2ContactFactory.prototype.m_allocator = null;
box2D.dynamics.contacts.B2ContactFactory.prototype.__class__ = box2D.dynamics.contacts.B2ContactFactory;
jeash.events.Event = function(inType,inBubbles,inCancelable) {
	if( inType === $_ ) return;
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.jeashIsCancelled = false;
	this.jeashIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = jeash.events.EventPhase.AT_TARGET;
}
jeash.events.Event.__name__ = ["jeash","events","Event"];
jeash.events.Event.prototype.bubbles = null;
jeash.events.Event.prototype.cancelable = null;
jeash.events.Event.prototype.eventPhase = null;
jeash.events.Event.prototype.target = null;
jeash.events.Event.prototype.currentTarget = null;
jeash.events.Event.prototype.type = null;
jeash.events.Event.prototype.jeashIsCancelled = null;
jeash.events.Event.prototype.jeashIsCancelledNow = null;
jeash.events.Event.prototype.jeashSetPhase = function(phase) {
	this.eventPhase = phase;
}
jeash.events.Event.prototype.jeashGetIsCancelled = function() {
	return this.jeashIsCancelled;
}
jeash.events.Event.prototype.jeashGetIsCancelledNow = function() {
	return this.jeashIsCancelledNow;
}
jeash.events.Event.prototype.clone = function() {
	return new jeash.events.Event(this.type,this.bubbles,this.cancelable);
}
jeash.events.Event.prototype.stopImmediatePropagation = function() {
	this.jeashIsCancelledNow = this.jeashIsCancelled = true;
}
jeash.events.Event.prototype.stopPropagation = function() {
	this.jeashIsCancelled = true;
}
jeash.events.Event.prototype.toString = function() {
	return "Event";
}
jeash.events.Event.prototype.__class__ = jeash.events.Event;
jeash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey) {
	if( type === $_ ) return;
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.charCode = inCharCode == null?0:inCharCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.altKey = inAltKey == null?false:inAltKey;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
}
jeash.events.KeyboardEvent.__name__ = ["jeash","events","KeyboardEvent"];
jeash.events.KeyboardEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.KeyboardEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.KeyboardEvent.prototype.keyCode = null;
jeash.events.KeyboardEvent.prototype.charCode = null;
jeash.events.KeyboardEvent.prototype.keyLocation = null;
jeash.events.KeyboardEvent.prototype.ctrlKey = null;
jeash.events.KeyboardEvent.prototype.altKey = null;
jeash.events.KeyboardEvent.prototype.shiftKey = null;
jeash.events.KeyboardEvent.prototype.__class__ = jeash.events.KeyboardEvent;
box2D.collision.B2Manifold = function(p) {
	if( p === $_ ) return;
	this.m_pointCount = 0;
	this.m_points = new Array();
	var _g1 = 0, _g = box2D.common.B2Settings.b2_maxManifoldPoints;
	while(_g1 < _g) {
		var i = _g1++;
		this.m_points[i] = new box2D.collision.B2ManifoldPoint();
	}
	this.m_localPlaneNormal = new box2D.common.math.B2Vec2();
	this.m_localPoint = new box2D.common.math.B2Vec2();
}
box2D.collision.B2Manifold.__name__ = ["box2D","collision","B2Manifold"];
box2D.collision.B2Manifold.prototype.reset = function() {
	var _g1 = 0, _g = box2D.common.B2Settings.b2_maxManifoldPoints;
	while(_g1 < _g) {
		var i = _g1++;
		this.m_points[i].reset();
	}
	this.m_localPlaneNormal.setZero();
	this.m_localPoint.setZero();
	this.m_type = 0;
	this.m_pointCount = 0;
}
box2D.collision.B2Manifold.prototype.set = function(m) {
	this.m_pointCount = m.m_pointCount;
	var _g1 = 0, _g = box2D.common.B2Settings.b2_maxManifoldPoints;
	while(_g1 < _g) {
		var i = _g1++;
		this.m_points[i].set(m.m_points[i]);
	}
	this.m_localPlaneNormal.setV(m.m_localPlaneNormal);
	this.m_localPoint.setV(m.m_localPoint);
	this.m_type = m.m_type;
}
box2D.collision.B2Manifold.prototype.copy = function() {
	var copy = new box2D.collision.B2Manifold();
	copy.set(this);
	return copy;
}
box2D.collision.B2Manifold.prototype.m_points = null;
box2D.collision.B2Manifold.prototype.m_localPlaneNormal = null;
box2D.collision.B2Manifold.prototype.m_localPoint = null;
box2D.collision.B2Manifold.prototype.m_type = null;
box2D.collision.B2Manifold.prototype.m_pointCount = null;
box2D.collision.B2Manifold.prototype.__class__ = box2D.collision.B2Manifold;
box2D.collision.B2SimplexVertex = function(p) {
}
box2D.collision.B2SimplexVertex.__name__ = ["box2D","collision","B2SimplexVertex"];
box2D.collision.B2SimplexVertex.prototype.set = function(other) {
	this.wA.setV(other.wA);
	this.wB.setV(other.wB);
	this.w.setV(other.w);
	this.a = other.a;
	this.indexA = other.indexA;
	this.indexB = other.indexB;
}
box2D.collision.B2SimplexVertex.prototype.wA = null;
box2D.collision.B2SimplexVertex.prototype.wB = null;
box2D.collision.B2SimplexVertex.prototype.w = null;
box2D.collision.B2SimplexVertex.prototype.a = null;
box2D.collision.B2SimplexVertex.prototype.indexA = null;
box2D.collision.B2SimplexVertex.prototype.indexB = null;
box2D.collision.B2SimplexVertex.prototype.__class__ = box2D.collision.B2SimplexVertex;
jeash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	if( in_font === $_ ) return;
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
}
jeash.text.TextFormat.__name__ = ["jeash","text","TextFormat"];
jeash.text.TextFormat.prototype.align = null;
jeash.text.TextFormat.prototype.blockIndent = null;
jeash.text.TextFormat.prototype.bold = null;
jeash.text.TextFormat.prototype.bullet = null;
jeash.text.TextFormat.prototype.color = null;
jeash.text.TextFormat.prototype.display = null;
jeash.text.TextFormat.prototype.font = null;
jeash.text.TextFormat.prototype.indent = null;
jeash.text.TextFormat.prototype.italic = null;
jeash.text.TextFormat.prototype.kerning = null;
jeash.text.TextFormat.prototype.leading = null;
jeash.text.TextFormat.prototype.leftMargin = null;
jeash.text.TextFormat.prototype.letterSpacing = null;
jeash.text.TextFormat.prototype.rightMargin = null;
jeash.text.TextFormat.prototype.size = null;
jeash.text.TextFormat.prototype.tabStops = null;
jeash.text.TextFormat.prototype.target = null;
jeash.text.TextFormat.prototype.underline = null;
jeash.text.TextFormat.prototype.url = null;
jeash.text.TextFormat.prototype.__class__ = jeash.text.TextFormat;
jeash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if( type === $_ ) return;
	if(inText == null) inText = "";
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
}
jeash.events.IOErrorEvent.__name__ = ["jeash","events","IOErrorEvent"];
jeash.events.IOErrorEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.IOErrorEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.IOErrorEvent.prototype.text = null;
jeash.events.IOErrorEvent.prototype.__class__ = jeash.events.IOErrorEvent;
jeash.display.CapsStyle = { __ename__ : ["jeash","display","CapsStyle"], __constructs__ : ["NONE","ROUND","SQUARE"] }
jeash.display.CapsStyle.NONE = ["NONE",0];
jeash.display.CapsStyle.NONE.toString = $estr;
jeash.display.CapsStyle.NONE.__enum__ = jeash.display.CapsStyle;
jeash.display.CapsStyle.ROUND = ["ROUND",1];
jeash.display.CapsStyle.ROUND.toString = $estr;
jeash.display.CapsStyle.ROUND.__enum__ = jeash.display.CapsStyle;
jeash.display.CapsStyle.SQUARE = ["SQUARE",2];
jeash.display.CapsStyle.SQUARE.toString = $estr;
jeash.display.CapsStyle.SQUARE.__enum__ = jeash.display.CapsStyle;
box2D.dynamics.B2ContactFilter = function(p) {
}
box2D.dynamics.B2ContactFilter.__name__ = ["box2D","dynamics","B2ContactFilter"];
box2D.dynamics.B2ContactFilter.prototype.shouldCollide = function(fixtureA,fixtureB) {
	var filter1 = fixtureA.getFilterData();
	var filter2 = fixtureB.getFilterData();
	if(filter1.groupIndex == filter2.groupIndex && filter1.groupIndex != 0) return filter1.groupIndex > 0;
	var collide = (filter1.maskBits & filter2.categoryBits) != 0 && (filter1.categoryBits & filter2.maskBits) != 0;
	return collide;
}
box2D.dynamics.B2ContactFilter.prototype.rayCollide = function(userData,fixture) {
	if(userData == null) return true;
	return this.shouldCollide((function($this) {
		var $r;
		var $t = userData;
		if(Std["is"]($t,box2D.dynamics.B2Fixture)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),fixture);
}
box2D.dynamics.B2ContactFilter.prototype.__class__ = box2D.dynamics.B2ContactFilter;
jeash.display.JointStyle = { __ename__ : ["jeash","display","JointStyle"], __constructs__ : ["MITER","ROUND","BEVEL"] }
jeash.display.JointStyle.MITER = ["MITER",0];
jeash.display.JointStyle.MITER.toString = $estr;
jeash.display.JointStyle.MITER.__enum__ = jeash.display.JointStyle;
jeash.display.JointStyle.ROUND = ["ROUND",1];
jeash.display.JointStyle.ROUND.toString = $estr;
jeash.display.JointStyle.ROUND.__enum__ = jeash.display.JointStyle;
jeash.display.JointStyle.BEVEL = ["BEVEL",2];
jeash.display.JointStyle.BEVEL.toString = $estr;
jeash.display.JointStyle.BEVEL.__enum__ = jeash.display.JointStyle;
box2D.dynamics.B2FilterData = function(p) {
	if( p === $_ ) return;
	this.categoryBits = 1;
	this.maskBits = 65535;
	this.groupIndex = 0;
}
box2D.dynamics.B2FilterData.__name__ = ["box2D","dynamics","B2FilterData"];
box2D.dynamics.B2FilterData.prototype.copy = function() {
	var copy = new box2D.dynamics.B2FilterData();
	copy.categoryBits = this.categoryBits;
	copy.maskBits = this.maskBits;
	copy.groupIndex = this.groupIndex;
	return copy;
}
box2D.dynamics.B2FilterData.prototype.categoryBits = null;
box2D.dynamics.B2FilterData.prototype.maskBits = null;
box2D.dynamics.B2FilterData.prototype.groupIndex = null;
box2D.dynamics.B2FilterData.prototype.__class__ = box2D.dynamics.B2FilterData;
box2D.dynamics.joints.B2FrictionJoint = function(def) {
	if( def === $_ ) return;
	box2D.dynamics.joints.B2Joint.call(this,def);
	this.m_localAnchorA = new box2D.common.math.B2Vec2();
	this.m_localAnchorB = new box2D.common.math.B2Vec2();
	this.m_linearMass = new box2D.common.math.B2Mat22();
	this.m_linearImpulse = new box2D.common.math.B2Vec2();
	this.m_localAnchorA.setV(def.localAnchorA);
	this.m_localAnchorB.setV(def.localAnchorB);
	this.m_linearMass.setZero();
	this.m_angularMass = 0.0;
	this.m_linearImpulse.setZero();
	this.m_angularImpulse = 0.0;
	this.m_maxForce = def.maxForce;
	this.m_maxTorque = def.maxTorque;
}
box2D.dynamics.joints.B2FrictionJoint.__name__ = ["box2D","dynamics","joints","B2FrictionJoint"];
box2D.dynamics.joints.B2FrictionJoint.__super__ = box2D.dynamics.joints.B2Joint;
for(var k in box2D.dynamics.joints.B2Joint.prototype ) box2D.dynamics.joints.B2FrictionJoint.prototype[k] = box2D.dynamics.joints.B2Joint.prototype[k];
box2D.dynamics.joints.B2FrictionJoint.prototype.getAnchorA = function() {
	return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
}
box2D.dynamics.joints.B2FrictionJoint.prototype.getAnchorB = function() {
	return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}
box2D.dynamics.joints.B2FrictionJoint.prototype.getReactionForce = function(inv_dt) {
	return new box2D.common.math.B2Vec2(inv_dt * this.m_linearImpulse.x,inv_dt * this.m_linearImpulse.y);
}
box2D.dynamics.joints.B2FrictionJoint.prototype.getReactionTorque = function(inv_dt) {
	return inv_dt * this.m_angularImpulse;
}
box2D.dynamics.joints.B2FrictionJoint.prototype.setMaxForce = function(force) {
	this.m_maxForce = force;
}
box2D.dynamics.joints.B2FrictionJoint.prototype.getMaxForce = function() {
	return this.m_maxForce;
}
box2D.dynamics.joints.B2FrictionJoint.prototype.setMaxTorque = function(torque) {
	this.m_maxTorque = torque;
}
box2D.dynamics.joints.B2FrictionJoint.prototype.getMaxTorque = function() {
	return this.m_maxTorque;
}
box2D.dynamics.joints.B2FrictionJoint.prototype.initVelocityConstraints = function(step) {
	var tMat;
	var tX;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	tMat = bA.m_xf.R;
	var rAX = this.m_localAnchorA.x - bA.m_sweep.localCenter.x;
	var rAY = this.m_localAnchorA.y - bA.m_sweep.localCenter.y;
	tX = tMat.col1.x * rAX + tMat.col2.x * rAY;
	rAY = tMat.col1.y * rAX + tMat.col2.y * rAY;
	rAX = tX;
	tMat = bB.m_xf.R;
	var rBX = this.m_localAnchorB.x - bB.m_sweep.localCenter.x;
	var rBY = this.m_localAnchorB.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * rBX + tMat.col2.x * rBY;
	rBY = tMat.col1.y * rBX + tMat.col2.y * rBY;
	rBX = tX;
	var mA = bA.m_invMass;
	var mB = bB.m_invMass;
	var iA = bA.m_invI;
	var iB = bB.m_invI;
	var K = new box2D.common.math.B2Mat22();
	K.col1.x = mA + mB;
	K.col2.x = 0.0;
	K.col1.y = 0.0;
	K.col2.y = mA + mB;
	K.col1.x += iA * rAY * rAY;
	K.col2.x += -iA * rAX * rAY;
	K.col1.y += -iA * rAX * rAY;
	K.col2.y += iA * rAX * rAX;
	K.col1.x += iB * rBY * rBY;
	K.col2.x += -iB * rBX * rBY;
	K.col1.y += -iB * rBX * rBY;
	K.col2.y += iB * rBX * rBX;
	K.getInverse(this.m_linearMass);
	this.m_angularMass = iA + iB;
	if(this.m_angularMass > 0.0) this.m_angularMass = 1.0 / this.m_angularMass;
	if(step.warmStarting) {
		this.m_linearImpulse.x *= step.dtRatio;
		this.m_linearImpulse.y *= step.dtRatio;
		this.m_angularImpulse *= step.dtRatio;
		var P = this.m_linearImpulse;
		bA.m_linearVelocity.x -= mA * P.x;
		bA.m_linearVelocity.y -= mA * P.y;
		bA.m_angularVelocity -= iA * (rAX * P.y - rAY * P.x + this.m_angularImpulse);
		bB.m_linearVelocity.x += mB * P.x;
		bB.m_linearVelocity.y += mB * P.y;
		bB.m_angularVelocity += iB * (rBX * P.y - rBY * P.x + this.m_angularImpulse);
	} else {
		this.m_linearImpulse.setZero();
		this.m_angularImpulse = 0.0;
	}
}
box2D.dynamics.joints.B2FrictionJoint.prototype.solveVelocityConstraints = function(step) {
	var tMat;
	var tX;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var vA = bA.m_linearVelocity;
	var wA = bA.m_angularVelocity;
	var vB = bB.m_linearVelocity;
	var wB = bB.m_angularVelocity;
	var mA = bA.m_invMass;
	var mB = bB.m_invMass;
	var iA = bA.m_invI;
	var iB = bB.m_invI;
	tMat = bA.m_xf.R;
	var rAX = this.m_localAnchorA.x - bA.m_sweep.localCenter.x;
	var rAY = this.m_localAnchorA.y - bA.m_sweep.localCenter.y;
	tX = tMat.col1.x * rAX + tMat.col2.x * rAY;
	rAY = tMat.col1.y * rAX + tMat.col2.y * rAY;
	rAX = tX;
	tMat = bB.m_xf.R;
	var rBX = this.m_localAnchorB.x - bB.m_sweep.localCenter.x;
	var rBY = this.m_localAnchorB.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * rBX + tMat.col2.x * rBY;
	rBY = tMat.col1.y * rBX + tMat.col2.y * rBY;
	rBX = tX;
	var maxImpulse;
	var Cdot = wB - wA;
	var impulse = -this.m_angularMass * Cdot;
	var oldImpulse = this.m_angularImpulse;
	maxImpulse = step.dt * this.m_maxTorque;
	this.m_angularImpulse = box2D.common.math.B2Math.clamp(this.m_angularImpulse + impulse,-maxImpulse,maxImpulse);
	impulse = this.m_angularImpulse - oldImpulse;
	wA -= iA * impulse;
	wB += iB * impulse;
	var CdotX = vB.x - wB * rBY - vA.x + wA * rAY;
	var CdotY = vB.y + wB * rBX - vA.y - wA * rAX;
	var impulseV = box2D.common.math.B2Math.mulMV(this.m_linearMass,new box2D.common.math.B2Vec2(-CdotX,-CdotY));
	var oldImpulseV = this.m_linearImpulse.copy();
	this.m_linearImpulse.add(impulseV);
	maxImpulse = step.dt * this.m_maxForce;
	if(this.m_linearImpulse.lengthSquared() > maxImpulse * maxImpulse) {
		this.m_linearImpulse.normalize();
		this.m_linearImpulse.multiply(maxImpulse);
	}
	impulseV = box2D.common.math.B2Math.subtractVV(this.m_linearImpulse,oldImpulseV);
	vA.x -= mA * impulseV.x;
	vA.y -= mA * impulseV.y;
	wA -= iA * (rAX * impulseV.y - rAY * impulseV.x);
	vB.x += mB * impulseV.x;
	vB.y += mB * impulseV.y;
	wB += iB * (rBX * impulseV.y - rBY * impulseV.x);
	bA.m_angularVelocity = wA;
	bB.m_angularVelocity = wB;
}
box2D.dynamics.joints.B2FrictionJoint.prototype.solvePositionConstraints = function(baumgarte) {
	return true;
}
box2D.dynamics.joints.B2FrictionJoint.prototype.m_localAnchorA = null;
box2D.dynamics.joints.B2FrictionJoint.prototype.m_localAnchorB = null;
box2D.dynamics.joints.B2FrictionJoint.prototype.m_linearMass = null;
box2D.dynamics.joints.B2FrictionJoint.prototype.m_angularMass = null;
box2D.dynamics.joints.B2FrictionJoint.prototype.m_linearImpulse = null;
box2D.dynamics.joints.B2FrictionJoint.prototype.m_angularImpulse = null;
box2D.dynamics.joints.B2FrictionJoint.prototype.m_maxForce = null;
box2D.dynamics.joints.B2FrictionJoint.prototype.m_maxTorque = null;
box2D.dynamics.joints.B2FrictionJoint.prototype.__class__ = box2D.dynamics.joints.B2FrictionJoint;
box2D.collision.B2DynamicTreeNode = function(p) {
	if( p === $_ ) return;
	this.aabb = new box2D.collision.B2AABB();
	this.id = box2D.collision.B2DynamicTreeNode.currentID++;
}
box2D.collision.B2DynamicTreeNode.__name__ = ["box2D","collision","B2DynamicTreeNode"];
box2D.collision.B2DynamicTreeNode.prototype.id = null;
box2D.collision.B2DynamicTreeNode.prototype.isLeaf = function() {
	return this.child1 == null;
}
box2D.collision.B2DynamicTreeNode.prototype.userData = null;
box2D.collision.B2DynamicTreeNode.prototype.aabb = null;
box2D.collision.B2DynamicTreeNode.prototype.parent = null;
box2D.collision.B2DynamicTreeNode.prototype.child1 = null;
box2D.collision.B2DynamicTreeNode.prototype.child2 = null;
box2D.collision.B2DynamicTreeNode.prototype.__class__ = box2D.collision.B2DynamicTreeNode;
haxe.Int32 = function() { }
haxe.Int32.__name__ = ["haxe","Int32"];
haxe.Int32.make = function(a,b) {
	return a << 16 | b;
}
haxe.Int32.ofInt = function(x) {
	return x | 0;
}
haxe.Int32.clamp = function(x) {
	return x | 0;
}
haxe.Int32.toInt = function(x) {
	if((x >> 30 & 1) != x >>> 31) throw "Overflow " + x;
	return x;
}
haxe.Int32.toNativeInt = function(x) {
	return x;
}
haxe.Int32.add = function(a,b) {
	return a + b | 0;
}
haxe.Int32.sub = function(a,b) {
	return a - b | 0;
}
haxe.Int32.mul = function(a,b) {
	return a * b | 0;
}
haxe.Int32.div = function(a,b) {
	return Std["int"](a / b);
}
haxe.Int32.mod = function(a,b) {
	return a % b;
}
haxe.Int32.shl = function(a,b) {
	return a << b;
}
haxe.Int32.shr = function(a,b) {
	return a >> b;
}
haxe.Int32.ushr = function(a,b) {
	return a >>> b;
}
haxe.Int32.and = function(a,b) {
	return a & b;
}
haxe.Int32.or = function(a,b) {
	return a | b;
}
haxe.Int32.xor = function(a,b) {
	return a ^ b;
}
haxe.Int32.neg = function(a) {
	return -a;
}
haxe.Int32.isNeg = function(a) {
	return a < 0;
}
haxe.Int32.isZero = function(a) {
	return a == 0;
}
haxe.Int32.complement = function(a) {
	return ~a;
}
haxe.Int32.compare = function(a,b) {
	return a - b;
}
haxe.Int32.ucompare = function(a,b) {
	if(a < 0) return b < 0?~b - ~a:1;
	return b < 0?-1:a - b;
}
haxe.Int32.prototype.__class__ = haxe.Int32;
box2D.common.B2Color = function(rr,gg,bb) {
	if( rr === $_ ) return;
	this._r = Std["int"](255 * box2D.common.math.B2Math.clamp(rr,0.0,1.0));
	this._g = Std["int"](255 * box2D.common.math.B2Math.clamp(gg,0.0,1.0));
	this._b = Std["int"](255 * box2D.common.math.B2Math.clamp(bb,0.0,1.0));
}
box2D.common.B2Color.__name__ = ["box2D","common","B2Color"];
box2D.common.B2Color.prototype.set = function(rr,gg,bb) {
	this._r = Std["int"](255 * box2D.common.math.B2Math.clamp(rr,0.0,1.0));
	this._g = Std["int"](255 * box2D.common.math.B2Math.clamp(gg,0.0,1.0));
	this._b = Std["int"](255 * box2D.common.math.B2Math.clamp(bb,0.0,1.0));
}
box2D.common.B2Color.prototype.r = null;
box2D.common.B2Color.prototype.g = null;
box2D.common.B2Color.prototype.b = null;
box2D.common.B2Color.prototype.color = null;
box2D.common.B2Color.prototype.setR = function(rr) {
	return this._r = Std["int"](255 * box2D.common.math.B2Math.clamp(rr,0.0,1.0));
}
box2D.common.B2Color.prototype.setG = function(gg) {
	return this._g = Std["int"](255 * box2D.common.math.B2Math.clamp(gg,0.0,1.0));
}
box2D.common.B2Color.prototype.setB = function(bb) {
	return this._b = Std["int"](255 * box2D.common.math.B2Math.clamp(bb,0.0,1.0));
}
box2D.common.B2Color.prototype.getColor = function() {
	return this._r << 16 | this._g << 8 | this._b;
}
box2D.common.B2Color.prototype._r = null;
box2D.common.B2Color.prototype._g = null;
box2D.common.B2Color.prototype._b = null;
box2D.common.B2Color.prototype.__class__ = box2D.common.B2Color;
jeash.display.GraphicsPathWinding = { __ename__ : ["jeash","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] }
jeash.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
jeash.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
jeash.display.GraphicsPathWinding.EVEN_ODD.__enum__ = jeash.display.GraphicsPathWinding;
jeash.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
jeash.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
jeash.display.GraphicsPathWinding.NON_ZERO.__enum__ = jeash.display.GraphicsPathWinding;
box2D.collision.Features = function(p) {
}
box2D.collision.Features.__name__ = ["box2D","collision","Features"];
box2D.collision.Features.prototype.referenceEdge = null;
box2D.collision.Features.prototype.getReferenceEdge = function() {
	return this._referenceEdge;
}
box2D.collision.Features.prototype.setReferenceEdge = function(value) {
	this._referenceEdge = value;
	this._m_id._key = this._m_id._key & -256 | this._referenceEdge & 255;
	return value;
}
box2D.collision.Features.prototype._referenceEdge = null;
box2D.collision.Features.prototype.incidentEdge = null;
box2D.collision.Features.prototype.getIncidentEdge = function() {
	return this._incidentEdge;
}
box2D.collision.Features.prototype.setIncidentEdge = function(value) {
	this._incidentEdge = value;
	this._m_id._key = this._m_id._key & -65281 | this._incidentEdge << 8 & 65280;
	return value;
}
box2D.collision.Features.prototype._incidentEdge = null;
box2D.collision.Features.prototype.incidentVertex = null;
box2D.collision.Features.prototype.getIncidentVertex = function() {
	return this._incidentVertex;
}
box2D.collision.Features.prototype.setIncidentVertex = function(value) {
	this._incidentVertex = value;
	this._m_id._key = this._m_id._key & -16711681 | this._incidentVertex << 16 & 16711680;
	return value;
}
box2D.collision.Features.prototype._incidentVertex = null;
box2D.collision.Features.prototype.flip = null;
box2D.collision.Features.prototype.getFlip = function() {
	return this._flip;
}
box2D.collision.Features.prototype.setFlip = function(value) {
	this._flip = value;
	this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & -16777216;
	return value;
}
box2D.collision.Features.prototype._flip = null;
box2D.collision.Features.prototype._m_id = null;
box2D.collision.Features.prototype.__class__ = box2D.collision.Features;
jeash.text.FontStyle = { __ename__ : ["jeash","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
jeash.text.FontStyle.REGULAR = ["REGULAR",0];
jeash.text.FontStyle.REGULAR.toString = $estr;
jeash.text.FontStyle.REGULAR.__enum__ = jeash.text.FontStyle;
jeash.text.FontStyle.ITALIC = ["ITALIC",1];
jeash.text.FontStyle.ITALIC.toString = $estr;
jeash.text.FontStyle.ITALIC.__enum__ = jeash.text.FontStyle;
jeash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
jeash.text.FontStyle.BOLD_ITALIC.toString = $estr;
jeash.text.FontStyle.BOLD_ITALIC.__enum__ = jeash.text.FontStyle;
jeash.text.FontStyle.BOLD = ["BOLD",3];
jeash.text.FontStyle.BOLD.toString = $estr;
jeash.text.FontStyle.BOLD.__enum__ = jeash.text.FontStyle;
haxe.Resource = function() { }
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.content = null;
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
}
haxe.Resource.getString = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.Unserializer.run(x.data);
			return b.toString();
		}
	}
	return null;
}
haxe.Resource.getBytes = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe.io.Bytes.ofString(x.str);
			return haxe.Unserializer.run(x.data);
		}
	}
	return null;
}
haxe.Resource.prototype.__class__ = haxe.Resource;
box2D.dynamics.joints.B2LineJointDef = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.joints.B2JointDef.call(this);
}
box2D.dynamics.joints.B2LineJointDef.__name__ = ["box2D","dynamics","joints","B2LineJointDef"];
box2D.dynamics.joints.B2LineJointDef.__super__ = box2D.dynamics.joints.B2JointDef;
for(var k in box2D.dynamics.joints.B2JointDef.prototype ) box2D.dynamics.joints.B2LineJointDef.prototype[k] = box2D.dynamics.joints.B2JointDef.prototype[k];
box2D.dynamics.joints.B2LineJointDef.prototype.b2LineJointDef = function() {
	this.localAnchorA = new box2D.common.math.B2Vec2();
	this.localAnchorB = new box2D.common.math.B2Vec2();
	this.localAxisA = new box2D.common.math.B2Vec2();
	this.type = box2D.dynamics.joints.B2Joint.e_lineJoint;
	this.localAxisA.set(1.0,0.0);
	this.enableLimit = false;
	this.lowerTranslation = 0.0;
	this.upperTranslation = 0.0;
	this.enableMotor = false;
	this.maxMotorForce = 0.0;
	this.motorSpeed = 0.0;
}
box2D.dynamics.joints.B2LineJointDef.prototype.initialize = function(bA,bB,anchor,axis) {
	this.bodyA = bA;
	this.bodyB = bB;
	this.localAnchorA = this.bodyA.getLocalPoint(anchor);
	this.localAnchorB = this.bodyB.getLocalPoint(anchor);
	this.localAxisA = this.bodyA.getLocalVector(axis);
}
box2D.dynamics.joints.B2LineJointDef.prototype.localAnchorA = null;
box2D.dynamics.joints.B2LineJointDef.prototype.localAnchorB = null;
box2D.dynamics.joints.B2LineJointDef.prototype.localAxisA = null;
box2D.dynamics.joints.B2LineJointDef.prototype.enableLimit = null;
box2D.dynamics.joints.B2LineJointDef.prototype.lowerTranslation = null;
box2D.dynamics.joints.B2LineJointDef.prototype.upperTranslation = null;
box2D.dynamics.joints.B2LineJointDef.prototype.enableMotor = null;
box2D.dynamics.joints.B2LineJointDef.prototype.maxMotorForce = null;
box2D.dynamics.joints.B2LineJointDef.prototype.motorSpeed = null;
box2D.dynamics.joints.B2LineJointDef.prototype.__class__ = box2D.dynamics.joints.B2LineJointDef;
jeash.display.GraphicsDataType = { __ename__ : ["jeash","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
jeash.display.GraphicsDataType.STROKE = ["STROKE",0];
jeash.display.GraphicsDataType.STROKE.toString = $estr;
jeash.display.GraphicsDataType.STROKE.__enum__ = jeash.display.GraphicsDataType;
jeash.display.GraphicsDataType.SOLID = ["SOLID",1];
jeash.display.GraphicsDataType.SOLID.toString = $estr;
jeash.display.GraphicsDataType.SOLID.__enum__ = jeash.display.GraphicsDataType;
jeash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
jeash.display.GraphicsDataType.GRADIENT.toString = $estr;
jeash.display.GraphicsDataType.GRADIENT.__enum__ = jeash.display.GraphicsDataType;
jeash.display.GraphicsDataType.PATH = ["PATH",3];
jeash.display.GraphicsDataType.PATH.toString = $estr;
jeash.display.GraphicsDataType.PATH.__enum__ = jeash.display.GraphicsDataType;
if(!jeash.media) jeash.media = {}
jeash.media.SoundChannel = function(p) {
	if( p === $_ ) return;
	jeash.events.EventDispatcher.call(this,this);
	this.ChannelId = -1;
	this.leftPeak = 0.;
	this.position = 0.;
	this.rightPeak = 0.;
	this.jeashAudioCurrentLoop = 1;
	this.jeashAudioTotalLoops = 1;
}
jeash.media.SoundChannel.__name__ = ["jeash","media","SoundChannel"];
jeash.media.SoundChannel.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.media.SoundChannel.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.media.SoundChannel.jeashCreate = function(src,startTime,loops,sndTransform,removeRef) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	var channel = new jeash.media.SoundChannel();
	channel.jeashAudio = js.Lib.document.createElement("audio");
	channel.jeashRemoveRef = removeRef;
	channel.jeashAudio.addEventListener("ended",$closure(channel,"__onSoundChannelFinished"),false);
	channel.jeashAudio.addEventListener("seeked",$closure(channel,"__onSoundSeeked"),false);
	if(loops > 0) {
		channel.jeashAudioTotalLoops = loops;
		channel.jeashAudio.loop = true;
	}
	channel.jeashStartTime = startTime;
	if(startTime > 0.) {
		var onLoad = null;
		onLoad = function(_) {
			channel.jeashAudio.currentTime = channel.jeashStartTime;
			channel.jeashAudio.play();
			channel.jeashAudio.removeEventListener("canplaythrough",onLoad,false);
		};
		channel.jeashAudio.addEventListener("canplaythrough",onLoad,false);
	} else channel.jeashAudio.autoplay = true;
	channel.jeashAudio.src = src;
	return channel;
}
jeash.media.SoundChannel.prototype.ChannelId = null;
jeash.media.SoundChannel.prototype.leftPeak = null;
jeash.media.SoundChannel.prototype.position = null;
jeash.media.SoundChannel.prototype.rightPeak = null;
jeash.media.SoundChannel.prototype.soundTransform = null;
jeash.media.SoundChannel.prototype.jeashAudioCurrentLoop = null;
jeash.media.SoundChannel.prototype.jeashAudioTotalLoops = null;
jeash.media.SoundChannel.prototype.jeashRemoveRef = null;
jeash.media.SoundChannel.prototype.jeashStartTime = null;
jeash.media.SoundChannel.prototype.jeashAudio = null;
jeash.media.SoundChannel.prototype.stop = function() {
	if(this.jeashAudio != null) {
		this.jeashAudio.pause();
		this.jeashAudio = null;
		if(this.jeashRemoveRef != null) this.jeashRemoveRef();
	}
}
jeash.media.SoundChannel.prototype.__setSoundTransform = function(v) {
	return this.soundTransform = v;
}
jeash.media.SoundChannel.prototype.__onSoundSeeked = function(evt) {
	if(this.jeashAudioCurrentLoop >= this.jeashAudioTotalLoops) {
		this.jeashAudio.loop = false;
		this.stop();
	} else this.jeashAudioCurrentLoop++;
}
jeash.media.SoundChannel.prototype.__onSoundChannelFinished = function(evt) {
	if(this.jeashAudioCurrentLoop >= this.jeashAudioTotalLoops) {
		this.jeashAudio.removeEventListener("ended",$closure(this,"__onSoundChannelFinished"),false);
		this.jeashAudio.removeEventListener("seeked",$closure(this,"__onSoundSeeked"),false);
		this.jeashAudio = null;
		var evt1 = new jeash.events.Event(jeash.events.Event.COMPLETE);
		evt1.target = this;
		this.dispatchEvent(evt1);
		if(this.jeashRemoveRef != null) this.jeashRemoveRef();
	} else {
		this.jeashAudio.currentTime = this.jeashStartTime;
		this.jeashAudio.play();
	}
}
jeash.media.SoundChannel.prototype.__class__ = jeash.media.SoundChannel;
box2D.dynamics.joints.B2PulleyJoint = function(def) {
	if( def === $_ ) return;
	box2D.dynamics.joints.B2Joint.call(this,def);
	this.m_groundAnchor1 = new box2D.common.math.B2Vec2();
	this.m_groundAnchor2 = new box2D.common.math.B2Vec2();
	this.m_localAnchor1 = new box2D.common.math.B2Vec2();
	this.m_localAnchor2 = new box2D.common.math.B2Vec2();
	this.m_u1 = new box2D.common.math.B2Vec2();
	this.m_u2 = new box2D.common.math.B2Vec2();
	var tMat;
	var tX;
	var tY;
	this.m_ground = this.m_bodyA.m_world.m_groundBody;
	this.m_groundAnchor1.x = def.groundAnchorA.x - this.m_ground.m_xf.position.x;
	this.m_groundAnchor1.y = def.groundAnchorA.y - this.m_ground.m_xf.position.y;
	this.m_groundAnchor2.x = def.groundAnchorB.x - this.m_ground.m_xf.position.x;
	this.m_groundAnchor2.y = def.groundAnchorB.y - this.m_ground.m_xf.position.y;
	this.m_localAnchor1.setV(def.localAnchorA);
	this.m_localAnchor2.setV(def.localAnchorB);
	this.m_ratio = def.ratio;
	this.m_constant = def.lengthA + this.m_ratio * def.lengthB;
	this.m_maxLength1 = box2D.common.math.B2Math.min(def.maxLengthA,this.m_constant - this.m_ratio * box2D.dynamics.joints.B2PulleyJoint.b2_minPulleyLength);
	this.m_maxLength2 = box2D.common.math.B2Math.min(def.maxLengthB,(this.m_constant - box2D.dynamics.joints.B2PulleyJoint.b2_minPulleyLength) / this.m_ratio);
	this.m_impulse = 0.0;
	this.m_limitImpulse1 = 0.0;
	this.m_limitImpulse2 = 0.0;
}
box2D.dynamics.joints.B2PulleyJoint.__name__ = ["box2D","dynamics","joints","B2PulleyJoint"];
box2D.dynamics.joints.B2PulleyJoint.__super__ = box2D.dynamics.joints.B2Joint;
for(var k in box2D.dynamics.joints.B2Joint.prototype ) box2D.dynamics.joints.B2PulleyJoint.prototype[k] = box2D.dynamics.joints.B2Joint.prototype[k];
box2D.dynamics.joints.B2PulleyJoint.prototype.getAnchorA = function() {
	return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
}
box2D.dynamics.joints.B2PulleyJoint.prototype.getAnchorB = function() {
	return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
}
box2D.dynamics.joints.B2PulleyJoint.prototype.getReactionForce = function(inv_dt) {
	return new box2D.common.math.B2Vec2(inv_dt * this.m_impulse * this.m_u2.x,inv_dt * this.m_impulse * this.m_u2.y);
}
box2D.dynamics.joints.B2PulleyJoint.prototype.getReactionTorque = function(inv_dt) {
	return 0.0;
}
box2D.dynamics.joints.B2PulleyJoint.prototype.getGroundAnchorA = function() {
	var a = this.m_ground.m_xf.position.copy();
	a.add(this.m_groundAnchor1);
	return a;
}
box2D.dynamics.joints.B2PulleyJoint.prototype.getGroundAnchorB = function() {
	var a = this.m_ground.m_xf.position.copy();
	a.add(this.m_groundAnchor2);
	return a;
}
box2D.dynamics.joints.B2PulleyJoint.prototype.getLength1 = function() {
	var p = this.m_bodyA.getWorldPoint(this.m_localAnchor1);
	var sX = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
	var sY = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
	var dX = p.x - sX;
	var dY = p.y - sY;
	return Math.sqrt(dX * dX + dY * dY);
}
box2D.dynamics.joints.B2PulleyJoint.prototype.getLength2 = function() {
	var p = this.m_bodyB.getWorldPoint(this.m_localAnchor2);
	var sX = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
	var sY = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
	var dX = p.x - sX;
	var dY = p.y - sY;
	return Math.sqrt(dX * dX + dY * dY);
}
box2D.dynamics.joints.B2PulleyJoint.prototype.getRatio = function() {
	return this.m_ratio;
}
box2D.dynamics.joints.B2PulleyJoint.prototype.initVelocityConstraints = function(step) {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var tMat;
	tMat = bA.m_xf.R;
	var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
	var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
	var tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = bB.m_xf.R;
	var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
	var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var p1X = bA.m_sweep.c.x + r1X;
	var p1Y = bA.m_sweep.c.y + r1Y;
	var p2X = bB.m_sweep.c.x + r2X;
	var p2Y = bB.m_sweep.c.y + r2Y;
	var s1X = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
	var s1Y = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
	var s2X = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
	var s2Y = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
	this.m_u1.set(p1X - s1X,p1Y - s1Y);
	this.m_u2.set(p2X - s2X,p2Y - s2Y);
	var length1 = this.m_u1.length();
	var length2 = this.m_u2.length();
	if(length1 > box2D.common.B2Settings.b2_linearSlop) this.m_u1.multiply(1.0 / length1); else this.m_u1.setZero();
	if(length2 > box2D.common.B2Settings.b2_linearSlop) this.m_u2.multiply(1.0 / length2); else this.m_u2.setZero();
	var C = this.m_constant - length1 - this.m_ratio * length2;
	if(C > 0.0) {
		this.m_state = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
		this.m_impulse = 0.0;
	} else this.m_state = box2D.dynamics.joints.B2Joint.e_atUpperLimit;
	if(length1 < this.m_maxLength1) {
		this.m_limitState1 = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
		this.m_limitImpulse1 = 0.0;
	} else this.m_limitState1 = box2D.dynamics.joints.B2Joint.e_atUpperLimit;
	if(length2 < this.m_maxLength2) {
		this.m_limitState2 = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
		this.m_limitImpulse2 = 0.0;
	} else this.m_limitState2 = box2D.dynamics.joints.B2Joint.e_atUpperLimit;
	var cr1u1 = r1X * this.m_u1.y - r1Y * this.m_u1.x;
	var cr2u2 = r2X * this.m_u2.y - r2Y * this.m_u2.x;
	this.m_limitMass1 = bA.m_invMass + bA.m_invI * cr1u1 * cr1u1;
	this.m_limitMass2 = bB.m_invMass + bB.m_invI * cr2u2 * cr2u2;
	this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
	this.m_limitMass1 = 1.0 / this.m_limitMass1;
	this.m_limitMass2 = 1.0 / this.m_limitMass2;
	this.m_pulleyMass = 1.0 / this.m_pulleyMass;
	if(step.warmStarting) {
		this.m_impulse *= step.dtRatio;
		this.m_limitImpulse1 *= step.dtRatio;
		this.m_limitImpulse2 *= step.dtRatio;
		var P1X = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x;
		var P1Y = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y;
		var P2X = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x;
		var P2Y = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y;
		bA.m_linearVelocity.x += bA.m_invMass * P1X;
		bA.m_linearVelocity.y += bA.m_invMass * P1Y;
		bA.m_angularVelocity += bA.m_invI * (r1X * P1Y - r1Y * P1X);
		bB.m_linearVelocity.x += bB.m_invMass * P2X;
		bB.m_linearVelocity.y += bB.m_invMass * P2Y;
		bB.m_angularVelocity += bB.m_invI * (r2X * P2Y - r2Y * P2X);
	} else {
		this.m_impulse = 0.0;
		this.m_limitImpulse1 = 0.0;
		this.m_limitImpulse2 = 0.0;
	}
}
box2D.dynamics.joints.B2PulleyJoint.prototype.solveVelocityConstraints = function(step) {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var tMat;
	tMat = bA.m_xf.R;
	var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
	var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
	var tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = bB.m_xf.R;
	var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
	var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var v1X;
	var v1Y;
	var v2X;
	var v2Y;
	var P1X;
	var P1Y;
	var P2X;
	var P2Y;
	var Cdot;
	var impulse;
	var oldImpulse;
	if(this.m_state == box2D.dynamics.joints.B2Joint.e_atUpperLimit) {
		v1X = bA.m_linearVelocity.x + -bA.m_angularVelocity * r1Y;
		v1Y = bA.m_linearVelocity.y + bA.m_angularVelocity * r1X;
		v2X = bB.m_linearVelocity.x + -bB.m_angularVelocity * r2Y;
		v2Y = bB.m_linearVelocity.y + bB.m_angularVelocity * r2X;
		Cdot = -(this.m_u1.x * v1X + this.m_u1.y * v1Y) - this.m_ratio * (this.m_u2.x * v2X + this.m_u2.y * v2Y);
		impulse = this.m_pulleyMass * -Cdot;
		oldImpulse = this.m_impulse;
		this.m_impulse = box2D.common.math.B2Math.max(0.0,this.m_impulse + impulse);
		impulse = this.m_impulse - oldImpulse;
		P1X = -impulse * this.m_u1.x;
		P1Y = -impulse * this.m_u1.y;
		P2X = -this.m_ratio * impulse * this.m_u2.x;
		P2Y = -this.m_ratio * impulse * this.m_u2.y;
		bA.m_linearVelocity.x += bA.m_invMass * P1X;
		bA.m_linearVelocity.y += bA.m_invMass * P1Y;
		bA.m_angularVelocity += bA.m_invI * (r1X * P1Y - r1Y * P1X);
		bB.m_linearVelocity.x += bB.m_invMass * P2X;
		bB.m_linearVelocity.y += bB.m_invMass * P2Y;
		bB.m_angularVelocity += bB.m_invI * (r2X * P2Y - r2Y * P2X);
	}
	if(this.m_limitState1 == box2D.dynamics.joints.B2Joint.e_atUpperLimit) {
		v1X = bA.m_linearVelocity.x + -bA.m_angularVelocity * r1Y;
		v1Y = bA.m_linearVelocity.y + bA.m_angularVelocity * r1X;
		Cdot = -(this.m_u1.x * v1X + this.m_u1.y * v1Y);
		impulse = -this.m_limitMass1 * Cdot;
		oldImpulse = this.m_limitImpulse1;
		this.m_limitImpulse1 = box2D.common.math.B2Math.max(0.0,this.m_limitImpulse1 + impulse);
		impulse = this.m_limitImpulse1 - oldImpulse;
		P1X = -impulse * this.m_u1.x;
		P1Y = -impulse * this.m_u1.y;
		bA.m_linearVelocity.x += bA.m_invMass * P1X;
		bA.m_linearVelocity.y += bA.m_invMass * P1Y;
		bA.m_angularVelocity += bA.m_invI * (r1X * P1Y - r1Y * P1X);
	}
	if(this.m_limitState2 == box2D.dynamics.joints.B2Joint.e_atUpperLimit) {
		v2X = bB.m_linearVelocity.x + -bB.m_angularVelocity * r2Y;
		v2Y = bB.m_linearVelocity.y + bB.m_angularVelocity * r2X;
		Cdot = -(this.m_u2.x * v2X + this.m_u2.y * v2Y);
		impulse = -this.m_limitMass2 * Cdot;
		oldImpulse = this.m_limitImpulse2;
		this.m_limitImpulse2 = box2D.common.math.B2Math.max(0.0,this.m_limitImpulse2 + impulse);
		impulse = this.m_limitImpulse2 - oldImpulse;
		P2X = -impulse * this.m_u2.x;
		P2Y = -impulse * this.m_u2.y;
		bB.m_linearVelocity.x += bB.m_invMass * P2X;
		bB.m_linearVelocity.y += bB.m_invMass * P2Y;
		bB.m_angularVelocity += bB.m_invI * (r2X * P2Y - r2Y * P2X);
	}
}
box2D.dynamics.joints.B2PulleyJoint.prototype.solvePositionConstraints = function(baumgarte) {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var tMat;
	var s1X = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
	var s1Y = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
	var s2X = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
	var s2Y = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
	var r1X;
	var r1Y;
	var r2X;
	var r2Y;
	var p1X;
	var p1Y;
	var p2X;
	var p2Y;
	var length1;
	var length2;
	var C;
	var impulse;
	var oldImpulse;
	var oldLimitPositionImpulse;
	var tX;
	var linearError = 0.0;
	if(this.m_state == box2D.dynamics.joints.B2Joint.e_atUpperLimit) {
		tMat = bA.m_xf.R;
		r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
		r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
		r1X = tX;
		tMat = bB.m_xf.R;
		r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
		r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
		r2X = tX;
		p1X = bA.m_sweep.c.x + r1X;
		p1Y = bA.m_sweep.c.y + r1Y;
		p2X = bB.m_sweep.c.x + r2X;
		p2Y = bB.m_sweep.c.y + r2Y;
		this.m_u1.set(p1X - s1X,p1Y - s1Y);
		this.m_u2.set(p2X - s2X,p2Y - s2Y);
		length1 = this.m_u1.length();
		length2 = this.m_u2.length();
		if(length1 > box2D.common.B2Settings.b2_linearSlop) this.m_u1.multiply(1.0 / length1); else this.m_u1.setZero();
		if(length2 > box2D.common.B2Settings.b2_linearSlop) this.m_u2.multiply(1.0 / length2); else this.m_u2.setZero();
		C = this.m_constant - length1 - this.m_ratio * length2;
		linearError = box2D.common.math.B2Math.max(linearError,-C);
		C = box2D.common.math.B2Math.clamp(C + box2D.common.B2Settings.b2_linearSlop,-box2D.common.B2Settings.b2_maxLinearCorrection,0.0);
		impulse = -this.m_pulleyMass * C;
		p1X = -impulse * this.m_u1.x;
		p1Y = -impulse * this.m_u1.y;
		p2X = -this.m_ratio * impulse * this.m_u2.x;
		p2Y = -this.m_ratio * impulse * this.m_u2.y;
		bA.m_sweep.c.x += bA.m_invMass * p1X;
		bA.m_sweep.c.y += bA.m_invMass * p1Y;
		bA.m_sweep.a += bA.m_invI * (r1X * p1Y - r1Y * p1X);
		bB.m_sweep.c.x += bB.m_invMass * p2X;
		bB.m_sweep.c.y += bB.m_invMass * p2Y;
		bB.m_sweep.a += bB.m_invI * (r2X * p2Y - r2Y * p2X);
		bA.synchronizeTransform();
		bB.synchronizeTransform();
	}
	if(this.m_limitState1 == box2D.dynamics.joints.B2Joint.e_atUpperLimit) {
		tMat = bA.m_xf.R;
		r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
		r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
		r1X = tX;
		p1X = bA.m_sweep.c.x + r1X;
		p1Y = bA.m_sweep.c.y + r1Y;
		this.m_u1.set(p1X - s1X,p1Y - s1Y);
		length1 = this.m_u1.length();
		if(length1 > box2D.common.B2Settings.b2_linearSlop) {
			this.m_u1.x *= 1.0 / length1;
			this.m_u1.y *= 1.0 / length1;
		} else this.m_u1.setZero();
		C = this.m_maxLength1 - length1;
		linearError = box2D.common.math.B2Math.max(linearError,-C);
		C = box2D.common.math.B2Math.clamp(C + box2D.common.B2Settings.b2_linearSlop,-box2D.common.B2Settings.b2_maxLinearCorrection,0.0);
		impulse = -this.m_limitMass1 * C;
		p1X = -impulse * this.m_u1.x;
		p1Y = -impulse * this.m_u1.y;
		bA.m_sweep.c.x += bA.m_invMass * p1X;
		bA.m_sweep.c.y += bA.m_invMass * p1Y;
		bA.m_sweep.a += bA.m_invI * (r1X * p1Y - r1Y * p1X);
		bA.synchronizeTransform();
	}
	if(this.m_limitState2 == box2D.dynamics.joints.B2Joint.e_atUpperLimit) {
		tMat = bB.m_xf.R;
		r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
		r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
		r2X = tX;
		p2X = bB.m_sweep.c.x + r2X;
		p2Y = bB.m_sweep.c.y + r2Y;
		this.m_u2.set(p2X - s2X,p2Y - s2Y);
		length2 = this.m_u2.length();
		if(length2 > box2D.common.B2Settings.b2_linearSlop) {
			this.m_u2.x *= 1.0 / length2;
			this.m_u2.y *= 1.0 / length2;
		} else this.m_u2.setZero();
		C = this.m_maxLength2 - length2;
		linearError = box2D.common.math.B2Math.max(linearError,-C);
		C = box2D.common.math.B2Math.clamp(C + box2D.common.B2Settings.b2_linearSlop,-box2D.common.B2Settings.b2_maxLinearCorrection,0.0);
		impulse = -this.m_limitMass2 * C;
		p2X = -impulse * this.m_u2.x;
		p2Y = -impulse * this.m_u2.y;
		bB.m_sweep.c.x += bB.m_invMass * p2X;
		bB.m_sweep.c.y += bB.m_invMass * p2Y;
		bB.m_sweep.a += bB.m_invI * (r2X * p2Y - r2Y * p2X);
		bB.synchronizeTransform();
	}
	return linearError < box2D.common.B2Settings.b2_linearSlop;
}
box2D.dynamics.joints.B2PulleyJoint.prototype.m_ground = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_groundAnchor1 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_groundAnchor2 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_localAnchor1 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_localAnchor2 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_u1 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_u2 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_constant = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_ratio = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_maxLength1 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_maxLength2 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_pulleyMass = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_limitMass1 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_limitMass2 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_impulse = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_limitImpulse1 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_limitImpulse2 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_state = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_limitState1 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.m_limitState2 = null;
box2D.dynamics.joints.B2PulleyJoint.prototype.__class__ = box2D.dynamics.joints.B2PulleyJoint;
if(!box2D.collision.shapes) box2D.collision.shapes = {}
box2D.collision.shapes.B2Shape = function(p) {
	if( p === $_ ) return;
	this.m_type = box2D.collision.shapes.B2Shape.e_unknownShape;
	this.m_radius = box2D.common.B2Settings.b2_linearSlop;
}
box2D.collision.shapes.B2Shape.__name__ = ["box2D","collision","shapes","B2Shape"];
box2D.collision.shapes.B2Shape.testOverlap = function(shape1,transform1,shape2,transform2) {
	var input = new box2D.collision.B2DistanceInput();
	input.proxyA = new box2D.collision.B2DistanceProxy();
	input.proxyA.set(shape1);
	input.proxyB = new box2D.collision.B2DistanceProxy();
	input.proxyB.set(shape2);
	input.transformA = transform1;
	input.transformB = transform2;
	input.useRadii = true;
	var simplexCache = new box2D.collision.B2SimplexCache();
	simplexCache.count = 0;
	var output = new box2D.collision.B2DistanceOutput();
	box2D.collision.B2Distance.distance(output,simplexCache,input);
	return output.distance < 10.0 * Number.MIN_VALUE;
}
box2D.collision.shapes.B2Shape.prototype.copy = function() {
	return null;
}
box2D.collision.shapes.B2Shape.prototype.set = function(other) {
	this.m_radius = other.m_radius;
}
box2D.collision.shapes.B2Shape.prototype.getType = function() {
	return this.m_type;
}
box2D.collision.shapes.B2Shape.prototype.testPoint = function(xf,p) {
	return false;
}
box2D.collision.shapes.B2Shape.prototype.rayCast = function(output,input,transform) {
	return false;
}
box2D.collision.shapes.B2Shape.prototype.computeAABB = function(aabb,xf) {
}
box2D.collision.shapes.B2Shape.prototype.computeMass = function(massData,density) {
}
box2D.collision.shapes.B2Shape.prototype.computeSubmergedArea = function(normal,offset,xf,c) {
	return 0;
}
box2D.collision.shapes.B2Shape.prototype.m_type = null;
box2D.collision.shapes.B2Shape.prototype.m_radius = null;
box2D.collision.shapes.B2Shape.prototype.__class__ = box2D.collision.shapes.B2Shape;
box2D.collision.shapes.B2EdgeShape = function(v1,v2) {
	if( v1 === $_ ) return;
	box2D.collision.shapes.B2Shape.call(this);
	this.s_supportVec = new box2D.common.math.B2Vec2();
	this.m_v1 = new box2D.common.math.B2Vec2();
	this.m_v2 = new box2D.common.math.B2Vec2();
	this.m_coreV1 = new box2D.common.math.B2Vec2();
	this.m_coreV2 = new box2D.common.math.B2Vec2();
	this.m_normal = new box2D.common.math.B2Vec2();
	this.m_direction = new box2D.common.math.B2Vec2();
	this.m_cornerDir1 = new box2D.common.math.B2Vec2();
	this.m_cornerDir2 = new box2D.common.math.B2Vec2();
	this.m_type = box2D.collision.shapes.B2Shape.e_edgeShape;
	this.m_prevEdge = null;
	this.m_nextEdge = null;
	this.m_v1 = v1;
	this.m_v2 = v2;
	this.m_direction.set(this.m_v2.x - this.m_v1.x,this.m_v2.y - this.m_v1.y);
	this.m_length = this.m_direction.normalize();
	this.m_normal.set(this.m_direction.y,-this.m_direction.x);
	this.m_coreV1.set(-box2D.common.B2Settings.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x,-box2D.common.B2Settings.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y);
	this.m_coreV2.set(-box2D.common.B2Settings.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x,-box2D.common.B2Settings.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y);
	this.m_cornerDir1 = this.m_normal;
	this.m_cornerDir2.set(-this.m_normal.x,-this.m_normal.y);
}
box2D.collision.shapes.B2EdgeShape.__name__ = ["box2D","collision","shapes","B2EdgeShape"];
box2D.collision.shapes.B2EdgeShape.__super__ = box2D.collision.shapes.B2Shape;
for(var k in box2D.collision.shapes.B2Shape.prototype ) box2D.collision.shapes.B2EdgeShape.prototype[k] = box2D.collision.shapes.B2Shape.prototype[k];
box2D.collision.shapes.B2EdgeShape.prototype.testPoint = function(transform,p) {
	return false;
}
box2D.collision.shapes.B2EdgeShape.prototype.rayCast = function(output,input,transform) {
	var tMat;
	var rX = input.p2.x - input.p1.x;
	var rY = input.p2.y - input.p1.y;
	tMat = transform.R;
	var v1X = transform.position.x + (tMat.col1.x * this.m_v1.x + tMat.col2.x * this.m_v1.y);
	var v1Y = transform.position.y + (tMat.col1.y * this.m_v1.x + tMat.col2.y * this.m_v1.y);
	var nX = transform.position.y + (tMat.col1.y * this.m_v2.x + tMat.col2.y * this.m_v2.y) - v1Y;
	var nY = -(transform.position.x + (tMat.col1.x * this.m_v2.x + tMat.col2.x * this.m_v2.y) - v1X);
	var k_slop = 100.0 * Number.MIN_VALUE;
	var denom = -(rX * nX + rY * nY);
	if(denom > k_slop) {
		var bX = input.p1.x - v1X;
		var bY = input.p1.y - v1Y;
		var a = bX * nX + bY * nY;
		if(0.0 <= a && a <= input.maxFraction * denom) {
			var mu2 = -rX * bY + rY * bX;
			if(-k_slop * denom <= mu2 && mu2 <= denom * (1.0 + k_slop)) {
				a /= denom;
				output.fraction = a;
				var nLen = Math.sqrt(nX * nX + nY * nY);
				output.normal.x = nX / nLen;
				output.normal.y = nY / nLen;
				return true;
			}
		}
	}
	return false;
}
box2D.collision.shapes.B2EdgeShape.prototype.computeAABB = function(aabb,transform) {
	var tMat = transform.R;
	var v1X = transform.position.x + (tMat.col1.x * this.m_v1.x + tMat.col2.x * this.m_v1.y);
	var v1Y = transform.position.y + (tMat.col1.y * this.m_v1.x + tMat.col2.y * this.m_v1.y);
	var v2X = transform.position.x + (tMat.col1.x * this.m_v2.x + tMat.col2.x * this.m_v2.y);
	var v2Y = transform.position.y + (tMat.col1.y * this.m_v2.x + tMat.col2.y * this.m_v2.y);
	if(v1X < v2X) {
		aabb.lowerBound.x = v1X;
		aabb.upperBound.x = v2X;
	} else {
		aabb.lowerBound.x = v2X;
		aabb.upperBound.x = v1X;
	}
	if(v1Y < v2Y) {
		aabb.lowerBound.y = v1Y;
		aabb.upperBound.y = v2Y;
	} else {
		aabb.lowerBound.y = v2Y;
		aabb.upperBound.y = v1Y;
	}
}
box2D.collision.shapes.B2EdgeShape.prototype.computeMass = function(massData,density) {
	massData.mass = 0;
	massData.center.setV(this.m_v1);
	massData.I = 0;
}
box2D.collision.shapes.B2EdgeShape.prototype.computeSubmergedArea = function(normal,offset,xf,c) {
	var v0 = new box2D.common.math.B2Vec2(normal.x * offset,normal.y * offset);
	var v1 = box2D.common.math.B2Math.mulX(xf,this.m_v1);
	var v2 = box2D.common.math.B2Math.mulX(xf,this.m_v2);
	var d1 = box2D.common.math.B2Math.dot(normal,v1) - offset;
	var d2 = box2D.common.math.B2Math.dot(normal,v2) - offset;
	if(d1 > 0) {
		if(d2 > 0) return 0; else {
			v1.x = -d2 / (d1 - d2) * v1.x + d1 / (d1 - d2) * v2.x;
			v1.y = -d2 / (d1 - d2) * v1.y + d1 / (d1 - d2) * v2.y;
		}
	} else if(d2 > 0) {
		v2.x = -d2 / (d1 - d2) * v1.x + d1 / (d1 - d2) * v2.x;
		v2.y = -d2 / (d1 - d2) * v1.y + d1 / (d1 - d2) * v2.y;
	} else {
	}
	c.x = (v0.x + v1.x + v2.x) / 3;
	c.y = (v0.y + v1.y + v2.y) / 3;
	return 0.5 * ((v1.x - v0.x) * (v2.y - v0.y) - (v1.y - v0.y) * (v2.x - v0.x));
}
box2D.collision.shapes.B2EdgeShape.prototype.getLength = function() {
	return this.m_length;
}
box2D.collision.shapes.B2EdgeShape.prototype.getVertex1 = function() {
	return this.m_v1;
}
box2D.collision.shapes.B2EdgeShape.prototype.getVertex2 = function() {
	return this.m_v2;
}
box2D.collision.shapes.B2EdgeShape.prototype.getCoreVertex1 = function() {
	return this.m_coreV1;
}
box2D.collision.shapes.B2EdgeShape.prototype.getCoreVertex2 = function() {
	return this.m_coreV2;
}
box2D.collision.shapes.B2EdgeShape.prototype.getNormalVector = function() {
	return this.m_normal;
}
box2D.collision.shapes.B2EdgeShape.prototype.getDirectionVector = function() {
	return this.m_direction;
}
box2D.collision.shapes.B2EdgeShape.prototype.getCorner1Vector = function() {
	return this.m_cornerDir1;
}
box2D.collision.shapes.B2EdgeShape.prototype.getCorner2Vector = function() {
	return this.m_cornerDir2;
}
box2D.collision.shapes.B2EdgeShape.prototype.corner1IsConvex = function() {
	return this.m_cornerConvex1;
}
box2D.collision.shapes.B2EdgeShape.prototype.corner2IsConvex = function() {
	return this.m_cornerConvex2;
}
box2D.collision.shapes.B2EdgeShape.prototype.getFirstVertex = function(xf) {
	var tMat = xf.R;
	return new box2D.common.math.B2Vec2(xf.position.x + (tMat.col1.x * this.m_coreV1.x + tMat.col2.x * this.m_coreV1.y),xf.position.y + (tMat.col1.y * this.m_coreV1.x + tMat.col2.y * this.m_coreV1.y));
}
box2D.collision.shapes.B2EdgeShape.prototype.getNextEdge = function() {
	return this.m_nextEdge;
}
box2D.collision.shapes.B2EdgeShape.prototype.getPrevEdge = function() {
	return this.m_prevEdge;
}
box2D.collision.shapes.B2EdgeShape.prototype.s_supportVec = null;
box2D.collision.shapes.B2EdgeShape.prototype.support = function(xf,dX,dY) {
	var tMat = xf.R;
	var v1X = xf.position.x + (tMat.col1.x * this.m_coreV1.x + tMat.col2.x * this.m_coreV1.y);
	var v1Y = xf.position.y + (tMat.col1.y * this.m_coreV1.x + tMat.col2.y * this.m_coreV1.y);
	var v2X = xf.position.x + (tMat.col1.x * this.m_coreV2.x + tMat.col2.x * this.m_coreV2.y);
	var v2Y = xf.position.y + (tMat.col1.y * this.m_coreV2.x + tMat.col2.y * this.m_coreV2.y);
	if(v1X * dX + v1Y * dY > v2X * dX + v2Y * dY) {
		this.s_supportVec.x = v1X;
		this.s_supportVec.y = v1Y;
	} else {
		this.s_supportVec.x = v2X;
		this.s_supportVec.y = v2Y;
	}
	return this.s_supportVec;
}
box2D.collision.shapes.B2EdgeShape.prototype.setPrevEdge = function(edge,core,cornerDir,convex) {
	this.m_prevEdge = edge;
	this.m_coreV1 = core;
	this.m_cornerDir1 = cornerDir;
	this.m_cornerConvex1 = convex;
}
box2D.collision.shapes.B2EdgeShape.prototype.setNextEdge = function(edge,core,cornerDir,convex) {
	this.m_nextEdge = edge;
	this.m_coreV2 = core;
	this.m_cornerDir2 = cornerDir;
	this.m_cornerConvex2 = convex;
}
box2D.collision.shapes.B2EdgeShape.prototype.m_v1 = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_v2 = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_coreV1 = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_coreV2 = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_length = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_normal = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_direction = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_cornerDir1 = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_cornerDir2 = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_cornerConvex1 = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_cornerConvex2 = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_nextEdge = null;
box2D.collision.shapes.B2EdgeShape.prototype.m_prevEdge = null;
box2D.collision.shapes.B2EdgeShape.prototype.__class__ = box2D.collision.shapes.B2EdgeShape;
box2D.common.math.B2Vec3 = function(x,y,z) {
	if( x === $_ ) return;
	if(z == null) z = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.z = z;
}
box2D.common.math.B2Vec3.__name__ = ["box2D","common","math","B2Vec3"];
box2D.common.math.B2Vec3.prototype.setZero = function() {
	this.x = this.y = this.z = 0.0;
}
box2D.common.math.B2Vec3.prototype.set = function(x,y,z) {
	this.x = x;
	this.y = y;
	this.z = z;
}
box2D.common.math.B2Vec3.prototype.setV = function(v) {
	this.x = v.x;
	this.y = v.y;
	this.z = v.z;
}
box2D.common.math.B2Vec3.prototype.getNegative = function() {
	return new box2D.common.math.B2Vec3(-this.x,-this.y,-this.z);
}
box2D.common.math.B2Vec3.prototype.negativeSelf = function() {
	this.x = -this.x;
	this.y = -this.y;
	this.z = -this.z;
}
box2D.common.math.B2Vec3.prototype.copy = function() {
	return new box2D.common.math.B2Vec3(this.x,this.y,this.z);
}
box2D.common.math.B2Vec3.prototype.add = function(v) {
	this.x += v.x;
	this.y += v.y;
	this.z += v.z;
}
box2D.common.math.B2Vec3.prototype.subtract = function(v) {
	this.x -= v.x;
	this.y -= v.y;
	this.z -= v.z;
}
box2D.common.math.B2Vec3.prototype.multiply = function(a) {
	this.x *= a;
	this.y *= a;
	this.z *= a;
}
box2D.common.math.B2Vec3.prototype.x = null;
box2D.common.math.B2Vec3.prototype.y = null;
box2D.common.math.B2Vec3.prototype.z = null;
box2D.common.math.B2Vec3.prototype.__class__ = box2D.common.math.B2Vec3;
if(!haxe.io) haxe.io = {}
haxe.io.Bytes = function(length,b) {
	if( length === $_ ) return;
	this.length = length;
	this.b = b;
}
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.cca(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype.length = null;
haxe.io.Bytes.prototype.b = null;
haxe.io.Bytes.prototype.get = function(pos) {
	return this.b[pos];
}
haxe.io.Bytes.prototype.set = function(pos,v) {
	this.b[pos] = v & 255;
}
haxe.io.Bytes.prototype.blit = function(pos,src,srcpos,len) {
	if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	if(b1 == b2 && pos > srcpos) {
		var i = len;
		while(i > 0) {
			i--;
			b1[i + pos] = b2[i + srcpos];
		}
		return;
	}
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		b1[i + pos] = b2[i + srcpos];
	}
}
haxe.io.Bytes.prototype.sub = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	return new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
}
haxe.io.Bytes.prototype.compare = function(other) {
	var b1 = this.b;
	var b2 = other.b;
	var len = this.length < other.length?this.length:other.length;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		if(b1[i] != b2[i]) return b1[i] - b2[i];
	}
	return this.length - other.length;
}
haxe.io.Bytes.prototype.readString = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var s = "";
	var b = this.b;
	var fcc = String.fromCharCode;
	var i = pos;
	var max = pos + len;
	while(i < max) {
		var c = b[i++];
		if(c < 128) {
			if(c == 0) break;
			s += fcc(c);
		} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
			var c2 = b[i++];
			s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
		} else {
			var c2 = b[i++];
			var c3 = b[i++];
			s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
		}
	}
	return s;
}
haxe.io.Bytes.prototype.toString = function() {
	return this.readString(0,this.length);
}
haxe.io.Bytes.prototype.toHex = function() {
	var s = new StringBuf();
	var chars = [];
	var str = "0123456789abcdef";
	var _g1 = 0, _g = str.length;
	while(_g1 < _g) {
		var i = _g1++;
		chars.push(str.charCodeAt(i));
	}
	var _g1 = 0, _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = this.b[i];
		s.b[s.b.length] = String.fromCharCode(chars[c >> 4]);
		s.b[s.b.length] = String.fromCharCode(chars[c & 15]);
	}
	return s.b.join("");
}
haxe.io.Bytes.prototype.getData = function() {
	return this.b;
}
haxe.io.Bytes.prototype.__class__ = haxe.io.Bytes;
jeash.display.GradientType = { __ename__ : ["jeash","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] }
jeash.display.GradientType.RADIAL = ["RADIAL",0];
jeash.display.GradientType.RADIAL.toString = $estr;
jeash.display.GradientType.RADIAL.__enum__ = jeash.display.GradientType;
jeash.display.GradientType.LINEAR = ["LINEAR",1];
jeash.display.GradientType.LINEAR.toString = $estr;
jeash.display.GradientType.LINEAR.__enum__ = jeash.display.GradientType;
jeash.display.LineScaleMode = { __ename__ : ["jeash","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
jeash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
jeash.display.LineScaleMode.HORIZONTAL.toString = $estr;
jeash.display.LineScaleMode.HORIZONTAL.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.NONE = ["NONE",1];
jeash.display.LineScaleMode.NONE.toString = $estr;
jeash.display.LineScaleMode.NONE.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.NORMAL = ["NORMAL",2];
jeash.display.LineScaleMode.NORMAL.toString = $estr;
jeash.display.LineScaleMode.NORMAL.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
jeash.display.LineScaleMode.VERTICAL.toString = $estr;
jeash.display.LineScaleMode.VERTICAL.__enum__ = jeash.display.LineScaleMode;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return s.substr(r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return s.substr(0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype.__class__ = StringTools;
jeash.display.StageQuality = function() { }
jeash.display.StageQuality.__name__ = ["jeash","display","StageQuality"];
jeash.display.StageQuality.prototype.__class__ = jeash.display.StageQuality;
if(!com.citruxengine.physics) com.citruxengine.physics = {}
com.citruxengine.physics.Box2D = function(name,params) {
	if( name === $_ ) return;
	com.citruxengine.core.CitruxObject.call(this,name,params);
	this.setVisible(false);
	this.setGroup(1);
	this.scale = 30;
	this.physicsDebug = new jeash.display.Sprite();
	com.citruxengine.core.CitruxEngine.getInstance().addChild(this.physicsDebug);
	this.world = new box2D.dynamics.B2World(new box2D.common.math.B2Vec2(0,0),true);
	var debugDraw = new box2D.dynamics.B2DebugDraw();
	debugDraw.setSprite(this.physicsDebug);
	debugDraw.setDrawScale(this.getScale());
	debugDraw.setFlags(box2D.dynamics.B2DebugDraw.e_shapeBit);
	this.getWorld().setDebugDraw(debugDraw);
}
com.citruxengine.physics.Box2D.__name__ = ["com","citruxengine","physics","Box2D"];
com.citruxengine.physics.Box2D.__super__ = com.citruxengine.core.CitruxObject;
for(var k in com.citruxengine.core.CitruxObject.prototype ) com.citruxengine.physics.Box2D.prototype[k] = com.citruxengine.core.CitruxObject.prototype[k];
com.citruxengine.physics.Box2D.prototype.world = null;
com.citruxengine.physics.Box2D.prototype.scale = null;
com.citruxengine.physics.Box2D.prototype.x = null;
com.citruxengine.physics.Box2D.prototype.y = null;
com.citruxengine.physics.Box2D.prototype.parallax = null;
com.citruxengine.physics.Box2D.prototype.rotation = null;
com.citruxengine.physics.Box2D.prototype.group = null;
com.citruxengine.physics.Box2D.prototype.visible = null;
com.citruxengine.physics.Box2D.prototype.view = null;
com.citruxengine.physics.Box2D.prototype.animation = null;
com.citruxengine.physics.Box2D.prototype.inverted = null;
com.citruxengine.physics.Box2D.prototype.offsetX = null;
com.citruxengine.physics.Box2D.prototype.offsetY = null;
com.citruxengine.physics.Box2D.prototype.registration = null;
com.citruxengine.physics.Box2D.prototype.physicsDebug = null;
com.citruxengine.physics.Box2D.prototype.destroy = function() {
	com.citruxengine.core.CitruxObject.prototype.destroy.call(this);
}
com.citruxengine.physics.Box2D.prototype.update = function(timeDelta) {
	com.citruxengine.core.CitruxObject.prototype.update.call(this,timeDelta);
	this.getWorld().step(1 / 20,8,8);
	this.getWorld().drawDebugData();
}
com.citruxengine.physics.Box2D.prototype.getWorld = function() {
	return this.world;
}
com.citruxengine.physics.Box2D.prototype.getScale = function() {
	return this.scale;
}
com.citruxengine.physics.Box2D.prototype.getX = function() {
	return 0;
}
com.citruxengine.physics.Box2D.prototype.getY = function() {
	return 0;
}
com.citruxengine.physics.Box2D.prototype.getParallax = function() {
	return 1;
}
com.citruxengine.physics.Box2D.prototype.getRotation = function() {
	return 0;
}
com.citruxengine.physics.Box2D.prototype.getGroup = function() {
	return this.group;
}
com.citruxengine.physics.Box2D.prototype.setGroup = function(value) {
	return this.group = value;
}
com.citruxengine.physics.Box2D.prototype.getVisible = function() {
	return this.visible;
}
com.citruxengine.physics.Box2D.prototype.setVisible = function(value) {
	return this.visible = value;
}
com.citruxengine.physics.Box2D.prototype.getView = function() {
	return this.view;
}
com.citruxengine.physics.Box2D.prototype.setView = function(value) {
	return this.view = value;
}
com.citruxengine.physics.Box2D.prototype.getAnimation = function() {
	return "";
}
com.citruxengine.physics.Box2D.prototype.getInverted = function() {
	return false;
}
com.citruxengine.physics.Box2D.prototype.getOffsetX = function() {
	return 0;
}
com.citruxengine.physics.Box2D.prototype.getOffsetY = function() {
	return 0;
}
com.citruxengine.physics.Box2D.prototype.getRegistration = function() {
	return "topLeft";
}
com.citruxengine.physics.Box2D.prototype.__class__ = com.citruxengine.physics.Box2D;
com.citruxengine.physics.Box2D.__interfaces__ = [com.citruxengine.view.ISpriteView];
jeash.display.Tilesheet = function(bitmapData) {
	if( bitmapData === $_ ) return;
	this.jeashSurface = bitmapData.clone().mTextureBuffer;
	this.jeashBitmapData = bitmapData;
	this.jeashTileRects = [];
	this.jeashTileHotspots = [];
}
jeash.display.Tilesheet.__name__ = ["jeash","display","Tilesheet"];
jeash.display.Tilesheet.prototype.jeashTileRects = null;
jeash.display.Tilesheet.prototype.jeashTileHotspots = null;
jeash.display.Tilesheet.prototype.jeashSurface = null;
jeash.display.Tilesheet.prototype.jeashBitmapData = null;
jeash.display.Tilesheet.prototype.addTileRect = function(rect,hotspot) {
	this.jeashTileRects.push(rect.clone());
	if(hotspot != null) this.jeashTileHotspots.push(hotspot.clone()); else this.jeashTileHotspots.push(new jeash.geom.Point((rect.width - rect.x) / 2,(rect.height - rect.y) / 2));
}
jeash.display.Tilesheet.prototype.__class__ = jeash.display.Tilesheet;
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	};
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
if(!box2D.dynamics.controllers) box2D.dynamics.controllers = {}
box2D.dynamics.controllers.B2Controller = function() { }
box2D.dynamics.controllers.B2Controller.__name__ = ["box2D","dynamics","controllers","B2Controller"];
box2D.dynamics.controllers.B2Controller.prototype.step = function(step) {
}
box2D.dynamics.controllers.B2Controller.prototype.draw = function(debugDraw) {
}
box2D.dynamics.controllers.B2Controller.prototype.addBody = function(body) {
	var edge = new box2D.dynamics.controllers.B2ControllerEdge();
	edge.controller = this;
	edge.body = body;
	edge.nextBody = this.m_bodyList;
	edge.prevBody = null;
	this.m_bodyList = edge;
	if(edge.nextBody != null) edge.nextBody.prevBody = edge;
	this.m_bodyCount++;
	edge.nextController = body.m_controllerList;
	edge.prevController = null;
	body.m_controllerList = edge;
	if(edge.nextController != null) edge.nextController.prevController = edge;
	body.m_controllerCount++;
}
box2D.dynamics.controllers.B2Controller.prototype.removeBody = function(body) {
	var edge = body.m_controllerList;
	while(edge != null && edge.controller != this) edge = edge.nextController;
	if(edge.prevBody != null) edge.prevBody.nextBody = edge.nextBody;
	if(edge.nextBody != null) edge.nextBody.prevBody = edge.prevBody;
	if(edge.nextController != null) edge.nextController.prevController = edge.prevController;
	if(edge.prevController != null) edge.prevController.nextController = edge.nextController;
	if(this.m_bodyList == edge) this.m_bodyList = edge.nextBody;
	if(body.m_controllerList == edge) body.m_controllerList = edge.nextController;
	body.m_controllerCount--;
	this.m_bodyCount--;
}
box2D.dynamics.controllers.B2Controller.prototype.clear = function() {
	while(this.m_bodyList != null) this.removeBody(this.m_bodyList.body);
}
box2D.dynamics.controllers.B2Controller.prototype.getNext = function() {
	return this.m_next;
}
box2D.dynamics.controllers.B2Controller.prototype.getWorld = function() {
	return this.m_world;
}
box2D.dynamics.controllers.B2Controller.prototype.getBodyList = function() {
	return this.m_bodyList;
}
box2D.dynamics.controllers.B2Controller.prototype.m_next = null;
box2D.dynamics.controllers.B2Controller.prototype.m_prev = null;
box2D.dynamics.controllers.B2Controller.prototype.m_bodyList = null;
box2D.dynamics.controllers.B2Controller.prototype.m_bodyCount = null;
box2D.dynamics.controllers.B2Controller.prototype.m_world = null;
box2D.dynamics.controllers.B2Controller.prototype.__class__ = box2D.dynamics.controllers.B2Controller;
jeash.display.IGraphicsPath = function() { }
jeash.display.IGraphicsPath.__name__ = ["jeash","display","IGraphicsPath"];
jeash.display.IGraphicsPath.prototype.__class__ = jeash.display.IGraphicsPath;
jeash.display.GraphicsPath = function(commands,data,winding) {
	if( commands === $_ ) return;
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.PATH;
}
jeash.display.GraphicsPath.__name__ = ["jeash","display","GraphicsPath"];
jeash.display.GraphicsPath.prototype.commands = null;
jeash.display.GraphicsPath.prototype.data = null;
jeash.display.GraphicsPath.prototype.winding = null;
jeash.display.GraphicsPath.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsPath.prototype.curveTo = function(controlX,controlY,anchorX,anchorY) {
	if(this.commands != null && this.data != null) {
		this.commands.push(3);
		this.data.push(anchorX);
		this.data.push(anchorY);
		this.data.push(controlX);
		this.data.push(controlY);
	}
}
jeash.display.GraphicsPath.prototype.lineTo = function(x,y) {
	if(this.commands != null && this.data != null) {
		this.commands.push(2);
		this.data.push(x);
		this.data.push(y);
	}
}
jeash.display.GraphicsPath.prototype.moveTo = function(x,y) {
	if(this.commands != null && this.data != null) {
		this.commands.push(1);
		this.data.push(x);
		this.data.push(y);
	}
}
jeash.display.GraphicsPath.prototype.__class__ = jeash.display.GraphicsPath;
jeash.display.GraphicsPath.__interfaces__ = [jeash.display.IGraphicsPath,jeash.display.IGraphicsData];
box2D.collision.B2SimplexCache = function(p) {
	if( p === $_ ) return;
	this.indexA = new Array();
	this.indexB = new Array();
}
box2D.collision.B2SimplexCache.__name__ = ["box2D","collision","B2SimplexCache"];
box2D.collision.B2SimplexCache.prototype.metric = null;
box2D.collision.B2SimplexCache.prototype.count = null;
box2D.collision.B2SimplexCache.prototype.indexA = null;
box2D.collision.B2SimplexCache.prototype.indexB = null;
box2D.collision.B2SimplexCache.prototype.__class__ = box2D.collision.B2SimplexCache;
box2D.collision.B2DistanceInput = function(p) {
}
box2D.collision.B2DistanceInput.__name__ = ["box2D","collision","B2DistanceInput"];
box2D.collision.B2DistanceInput.prototype.proxyA = null;
box2D.collision.B2DistanceInput.prototype.proxyB = null;
box2D.collision.B2DistanceInput.prototype.transformA = null;
box2D.collision.B2DistanceInput.prototype.transformB = null;
box2D.collision.B2DistanceInput.prototype.useRadii = null;
box2D.collision.B2DistanceInput.prototype.__class__ = box2D.collision.B2DistanceInput;
box2D.collision.B2DistanceOutput = function(p) {
	if( p === $_ ) return;
	this.pointA = new box2D.common.math.B2Vec2();
	this.pointB = new box2D.common.math.B2Vec2();
}
box2D.collision.B2DistanceOutput.__name__ = ["box2D","collision","B2DistanceOutput"];
box2D.collision.B2DistanceOutput.prototype.pointA = null;
box2D.collision.B2DistanceOutput.prototype.pointB = null;
box2D.collision.B2DistanceOutput.prototype.distance = null;
box2D.collision.B2DistanceOutput.prototype.iterations = null;
box2D.collision.B2DistanceOutput.prototype.__class__ = box2D.collision.B2DistanceOutput;
box2D.collision.B2SeparationFunction = function(p) {
	if( p === $_ ) return;
	this.m_localPoint = new box2D.common.math.B2Vec2();
	this.m_axis = new box2D.common.math.B2Vec2();
}
box2D.collision.B2SeparationFunction.__name__ = ["box2D","collision","B2SeparationFunction"];
box2D.collision.B2SeparationFunction.prototype.initialize = function(cache,proxyA,transformA,proxyB,transformB) {
	this.m_proxyA = proxyA;
	this.m_proxyB = proxyB;
	var count = cache.count;
	box2D.common.B2Settings.b2Assert(0 < count && count < 3);
	var localPointA = new box2D.common.math.B2Vec2();
	var localPointA1;
	var localPointA2;
	var localPointB = new box2D.common.math.B2Vec2();
	var localPointB1;
	var localPointB2;
	var pointAX;
	var pointAY;
	var pointBX;
	var pointBY;
	var normalX;
	var normalY;
	var tMat;
	var tVec;
	var s;
	var sgn;
	if(count == 1) {
		this.m_type = box2D.collision.B2SeparationFunction.e_points;
		localPointA = this.m_proxyA.getVertex(cache.indexA[0]);
		localPointB = this.m_proxyB.getVertex(cache.indexB[0]);
		tVec = localPointA;
		tMat = transformA.R;
		pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		tVec = localPointB;
		tMat = transformB.R;
		pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		this.m_axis.x = pointBX - pointAX;
		this.m_axis.y = pointBY - pointAY;
		this.m_axis.normalize();
	} else if(cache.indexB[0] == cache.indexB[1]) {
		this.m_type = box2D.collision.B2SeparationFunction.e_faceA;
		localPointA1 = this.m_proxyA.getVertex(cache.indexA[0]);
		localPointA2 = this.m_proxyA.getVertex(cache.indexA[1]);
		localPointB = this.m_proxyB.getVertex(cache.indexB[0]);
		this.m_localPoint.x = 0.5 * (localPointA1.x + localPointA2.x);
		this.m_localPoint.y = 0.5 * (localPointA1.y + localPointA2.y);
		this.m_axis = box2D.common.math.B2Math.crossVF(box2D.common.math.B2Math.subtractVV(localPointA2,localPointA1),1.0);
		this.m_axis.normalize();
		tVec = this.m_axis;
		tMat = transformA.R;
		normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		tVec = this.m_localPoint;
		tMat = transformA.R;
		pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		tVec = localPointB;
		tMat = transformB.R;
		pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		s = (pointBX - pointAX) * normalX + (pointBY - pointAY) * normalY;
		if(s < 0.0) this.m_axis.negativeSelf();
	} else if(cache.indexA[0] == cache.indexA[0]) {
		this.m_type = box2D.collision.B2SeparationFunction.e_faceB;
		localPointB1 = this.m_proxyB.getVertex(cache.indexB[0]);
		localPointB2 = this.m_proxyB.getVertex(cache.indexB[1]);
		localPointA = this.m_proxyA.getVertex(cache.indexA[0]);
		this.m_localPoint.x = 0.5 * (localPointB1.x + localPointB2.x);
		this.m_localPoint.y = 0.5 * (localPointB1.y + localPointB2.y);
		this.m_axis = box2D.common.math.B2Math.crossVF(box2D.common.math.B2Math.subtractVV(localPointB2,localPointB1),1.0);
		this.m_axis.normalize();
		tVec = this.m_axis;
		tMat = transformB.R;
		normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		tVec = this.m_localPoint;
		tMat = transformB.R;
		pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		tVec = localPointA;
		tMat = transformA.R;
		pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		s = (pointAX - pointBX) * normalX + (pointAY - pointBY) * normalY;
		if(s < 0.0) this.m_axis.negativeSelf();
	} else {
		localPointA1 = this.m_proxyA.getVertex(cache.indexA[0]);
		localPointA2 = this.m_proxyA.getVertex(cache.indexA[1]);
		localPointB1 = this.m_proxyB.getVertex(cache.indexB[0]);
		localPointB2 = this.m_proxyB.getVertex(cache.indexB[1]);
		var pA = box2D.common.math.B2Math.mulX(transformA,localPointA);
		var dA = box2D.common.math.B2Math.mulMV(transformA.R,box2D.common.math.B2Math.subtractVV(localPointA2,localPointA1));
		var pB = box2D.common.math.B2Math.mulX(transformB,localPointB);
		var dB = box2D.common.math.B2Math.mulMV(transformB.R,box2D.common.math.B2Math.subtractVV(localPointB2,localPointB1));
		var a = dA.x * dA.x + dA.y * dA.y;
		var e = dB.x * dB.x + dB.y * dB.y;
		var r = box2D.common.math.B2Math.subtractVV(dB,dA);
		var c = dA.x * r.x + dA.y * r.y;
		var f = dB.x * r.x + dB.y * r.y;
		var b = dA.x * dB.x + dA.y * dB.y;
		var denom = a * e - b * b;
		s = 0.0;
		if(denom != 0.0) s = box2D.common.math.B2Math.clamp((b * f - c * e) / denom,0.0,1.0);
		var t = (b * s + f) / e;
		if(t < 0.0) {
			t = 0.0;
			s = box2D.common.math.B2Math.clamp((b - c) / a,0.0,1.0);
		}
		localPointA = new box2D.common.math.B2Vec2();
		localPointA.x = localPointA1.x + s * (localPointA2.x - localPointA1.x);
		localPointA.y = localPointA1.y + s * (localPointA2.y - localPointA1.y);
		localPointB = new box2D.common.math.B2Vec2();
		localPointB.x = localPointB1.x + s * (localPointB2.x - localPointB1.x);
		localPointB.y = localPointB1.y + s * (localPointB2.y - localPointB1.y);
		if(s == 0.0 || s == 1.0) {
			this.m_type = box2D.collision.B2SeparationFunction.e_faceB;
			this.m_axis = box2D.common.math.B2Math.crossVF(box2D.common.math.B2Math.subtractVV(localPointB2,localPointB1),1.0);
			this.m_axis.normalize();
			this.m_localPoint = localPointB;
			tVec = this.m_axis;
			tMat = transformB.R;
			normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
			normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
			tVec = this.m_localPoint;
			tMat = transformB.R;
			pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
			pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
			tVec = localPointA;
			tMat = transformA.R;
			pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
			pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
			sgn = (pointAX - pointBX) * normalX + (pointAY - pointBY) * normalY;
			if(s < 0.0) this.m_axis.negativeSelf();
		} else {
			this.m_type = box2D.collision.B2SeparationFunction.e_faceA;
			this.m_axis = box2D.common.math.B2Math.crossVF(box2D.common.math.B2Math.subtractVV(localPointA2,localPointA1),1.0);
			this.m_localPoint = localPointA;
			tVec = this.m_axis;
			tMat = transformA.R;
			normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
			normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
			tVec = this.m_localPoint;
			tMat = transformA.R;
			pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
			pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
			tVec = localPointB;
			tMat = transformB.R;
			pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
			pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
			sgn = (pointBX - pointAX) * normalX + (pointBY - pointAY) * normalY;
			if(s < 0.0) this.m_axis.negativeSelf();
		}
	}
}
box2D.collision.B2SeparationFunction.prototype.evaluate = function(transformA,transformB) {
	var axisA;
	var axisB;
	var localPointA;
	var localPointB;
	var pointA;
	var pointB;
	var seperation;
	var normal;
	switch(this.m_type) {
	case box2D.collision.B2SeparationFunction.e_points:
		axisA = box2D.common.math.B2Math.mulTMV(transformA.R,this.m_axis);
		axisB = box2D.common.math.B2Math.mulTMV(transformB.R,this.m_axis.getNegative());
		localPointA = this.m_proxyA.getSupportVertex(axisA);
		localPointB = this.m_proxyB.getSupportVertex(axisB);
		pointA = box2D.common.math.B2Math.mulX(transformA,localPointA);
		pointB = box2D.common.math.B2Math.mulX(transformB,localPointB);
		seperation = (pointB.x - pointA.x) * this.m_axis.x + (pointB.y - pointA.y) * this.m_axis.y;
		return seperation;
	case box2D.collision.B2SeparationFunction.e_faceA:
		normal = box2D.common.math.B2Math.mulMV(transformA.R,this.m_axis);
		pointA = box2D.common.math.B2Math.mulX(transformA,this.m_localPoint);
		axisB = box2D.common.math.B2Math.mulTMV(transformB.R,normal.getNegative());
		localPointB = this.m_proxyB.getSupportVertex(axisB);
		pointB = box2D.common.math.B2Math.mulX(transformB,localPointB);
		seperation = (pointB.x - pointA.x) * normal.x + (pointB.y - pointA.y) * normal.y;
		return seperation;
	case box2D.collision.B2SeparationFunction.e_faceB:
		normal = box2D.common.math.B2Math.mulMV(transformB.R,this.m_axis);
		pointB = box2D.common.math.B2Math.mulX(transformB,this.m_localPoint);
		axisA = box2D.common.math.B2Math.mulTMV(transformA.R,normal.getNegative());
		localPointA = this.m_proxyA.getSupportVertex(axisA);
		pointA = box2D.common.math.B2Math.mulX(transformA,localPointA);
		seperation = (pointA.x - pointB.x) * normal.x + (pointA.y - pointB.y) * normal.y;
		return seperation;
	default:
		box2D.common.B2Settings.b2Assert(false);
		return 0.0;
	}
}
box2D.collision.B2SeparationFunction.prototype.m_proxyA = null;
box2D.collision.B2SeparationFunction.prototype.m_proxyB = null;
box2D.collision.B2SeparationFunction.prototype.m_type = null;
box2D.collision.B2SeparationFunction.prototype.m_localPoint = null;
box2D.collision.B2SeparationFunction.prototype.m_axis = null;
box2D.collision.B2SeparationFunction.prototype.__class__ = box2D.collision.B2SeparationFunction;
box2D.collision.B2TimeOfImpact = function() { }
box2D.collision.B2TimeOfImpact.__name__ = ["box2D","collision","B2TimeOfImpact"];
box2D.collision.B2TimeOfImpact.timeOfImpact = function(input) {
	++box2D.collision.B2TimeOfImpact.b2_toiCalls;
	var proxyA = input.proxyA;
	var proxyB = input.proxyB;
	var sweepA = input.sweepA;
	var sweepB = input.sweepB;
	box2D.common.B2Settings.b2Assert(sweepA.t0 == sweepB.t0);
	box2D.common.B2Settings.b2Assert(1.0 - sweepA.t0 > Number.MIN_VALUE);
	var radius = proxyA.m_radius + proxyB.m_radius;
	var tolerance = input.tolerance;
	var alpha = 0.0;
	var k_maxIterations = 1000;
	var iter = 0;
	var target = 0.0;
	box2D.collision.B2TimeOfImpact.s_cache.count = 0;
	box2D.collision.B2TimeOfImpact.s_distanceInput.useRadii = false;
	while(true) {
		sweepA.getTransform(box2D.collision.B2TimeOfImpact.s_xfA,alpha);
		sweepB.getTransform(box2D.collision.B2TimeOfImpact.s_xfB,alpha);
		box2D.collision.B2TimeOfImpact.s_distanceInput.proxyA = proxyA;
		box2D.collision.B2TimeOfImpact.s_distanceInput.proxyB = proxyB;
		box2D.collision.B2TimeOfImpact.s_distanceInput.transformA = box2D.collision.B2TimeOfImpact.s_xfA;
		box2D.collision.B2TimeOfImpact.s_distanceInput.transformB = box2D.collision.B2TimeOfImpact.s_xfB;
		box2D.collision.B2Distance.distance(box2D.collision.B2TimeOfImpact.s_distanceOutput,box2D.collision.B2TimeOfImpact.s_cache,box2D.collision.B2TimeOfImpact.s_distanceInput);
		if(box2D.collision.B2TimeOfImpact.s_distanceOutput.distance <= 0.0) {
			alpha = 1.0;
			break;
		}
		box2D.collision.B2TimeOfImpact.s_fcn.initialize(box2D.collision.B2TimeOfImpact.s_cache,proxyA,box2D.collision.B2TimeOfImpact.s_xfA,proxyB,box2D.collision.B2TimeOfImpact.s_xfB);
		var separation = box2D.collision.B2TimeOfImpact.s_fcn.evaluate(box2D.collision.B2TimeOfImpact.s_xfA,box2D.collision.B2TimeOfImpact.s_xfB);
		if(separation <= 0.0) {
			alpha = 1.0;
			break;
		}
		if(iter == 0) {
			if(separation > radius) target = box2D.common.math.B2Math.max(radius - tolerance,0.75 * radius); else target = box2D.common.math.B2Math.max(separation - tolerance,0.02 * radius);
		}
		if(separation - target < 0.5 * tolerance) {
			if(iter == 0) {
				alpha = 1.0;
				break;
			}
			break;
		}
		var newAlpha = alpha;
		var x1 = alpha;
		var x2 = 1.0;
		var f1 = separation;
		sweepA.getTransform(box2D.collision.B2TimeOfImpact.s_xfA,x2);
		sweepB.getTransform(box2D.collision.B2TimeOfImpact.s_xfB,x2);
		var f2 = box2D.collision.B2TimeOfImpact.s_fcn.evaluate(box2D.collision.B2TimeOfImpact.s_xfA,box2D.collision.B2TimeOfImpact.s_xfB);
		if(f2 >= target) {
			alpha = 1.0;
			break;
		}
		var rootIterCount = 0;
		while(true) {
			var x;
			if((rootIterCount & 1) != 0) x = x1 + (target - f1) * (x2 - x1) / (f2 - f1); else x = 0.5 * (x1 + x2);
			sweepA.getTransform(box2D.collision.B2TimeOfImpact.s_xfA,x);
			sweepB.getTransform(box2D.collision.B2TimeOfImpact.s_xfB,x);
			var f = box2D.collision.B2TimeOfImpact.s_fcn.evaluate(box2D.collision.B2TimeOfImpact.s_xfA,box2D.collision.B2TimeOfImpact.s_xfB);
			if(box2D.common.math.B2Math.abs(f - target) < 0.025 * tolerance) {
				newAlpha = x;
				break;
			}
			if(f > target) {
				x1 = x;
				f1 = f;
			} else {
				x2 = x;
				f2 = f;
			}
			++rootIterCount;
			++box2D.collision.B2TimeOfImpact.b2_toiRootIters;
			if(rootIterCount == 50) break;
		}
		box2D.collision.B2TimeOfImpact.b2_toiMaxRootIters = Std["int"](box2D.common.math.B2Math.max(box2D.collision.B2TimeOfImpact.b2_toiMaxRootIters,rootIterCount));
		if(newAlpha < (1.0 + 100.0 * Number.MIN_VALUE) * alpha) break;
		alpha = newAlpha;
		iter++;
		++box2D.collision.B2TimeOfImpact.b2_toiIters;
		if(iter == k_maxIterations) break;
	}
	box2D.collision.B2TimeOfImpact.b2_toiMaxIters = Std["int"](box2D.common.math.B2Math.max(box2D.collision.B2TimeOfImpact.b2_toiMaxIters,iter));
	return alpha;
}
box2D.collision.B2TimeOfImpact.prototype.__class__ = box2D.collision.B2TimeOfImpact;
box2D.dynamics.joints.B2WeldJoint = function(def) {
	if( def === $_ ) return;
	box2D.dynamics.joints.B2Joint.call(this,def);
	this.m_localAnchorA = new box2D.common.math.B2Vec2();
	this.m_localAnchorB = new box2D.common.math.B2Vec2();
	this.m_impulse = new box2D.common.math.B2Vec3();
	this.m_mass = new box2D.common.math.B2Mat33();
	this.m_localAnchorA.setV(def.localAnchorA);
	this.m_localAnchorB.setV(def.localAnchorB);
	this.m_referenceAngle = def.referenceAngle;
	this.m_impulse.setZero();
	this.m_mass = new box2D.common.math.B2Mat33();
}
box2D.dynamics.joints.B2WeldJoint.__name__ = ["box2D","dynamics","joints","B2WeldJoint"];
box2D.dynamics.joints.B2WeldJoint.__super__ = box2D.dynamics.joints.B2Joint;
for(var k in box2D.dynamics.joints.B2Joint.prototype ) box2D.dynamics.joints.B2WeldJoint.prototype[k] = box2D.dynamics.joints.B2Joint.prototype[k];
box2D.dynamics.joints.B2WeldJoint.prototype.getAnchorA = function() {
	return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
}
box2D.dynamics.joints.B2WeldJoint.prototype.getAnchorB = function() {
	return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}
box2D.dynamics.joints.B2WeldJoint.prototype.getReactionForce = function(inv_dt) {
	return new box2D.common.math.B2Vec2(inv_dt * this.m_impulse.x,inv_dt * this.m_impulse.y);
}
box2D.dynamics.joints.B2WeldJoint.prototype.getReactionTorque = function(inv_dt) {
	return inv_dt * this.m_impulse.z;
}
box2D.dynamics.joints.B2WeldJoint.prototype.initVelocityConstraints = function(step) {
	var tMat;
	var tX;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	tMat = bA.m_xf.R;
	var rAX = this.m_localAnchorA.x - bA.m_sweep.localCenter.x;
	var rAY = this.m_localAnchorA.y - bA.m_sweep.localCenter.y;
	tX = tMat.col1.x * rAX + tMat.col2.x * rAY;
	rAY = tMat.col1.y * rAX + tMat.col2.y * rAY;
	rAX = tX;
	tMat = bB.m_xf.R;
	var rBX = this.m_localAnchorB.x - bB.m_sweep.localCenter.x;
	var rBY = this.m_localAnchorB.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * rBX + tMat.col2.x * rBY;
	rBY = tMat.col1.y * rBX + tMat.col2.y * rBY;
	rBX = tX;
	var mA = bA.m_invMass;
	var mB = bB.m_invMass;
	var iA = bA.m_invI;
	var iB = bB.m_invI;
	this.m_mass.col1.x = mA + mB + rAY * rAY * iA + rBY * rBY * iB;
	this.m_mass.col2.x = -rAY * rAX * iA - rBY * rBX * iB;
	this.m_mass.col3.x = -rAY * iA - rBY * iB;
	this.m_mass.col1.y = this.m_mass.col2.x;
	this.m_mass.col2.y = mA + mB + rAX * rAX * iA + rBX * rBX * iB;
	this.m_mass.col3.y = rAX * iA + rBX * iB;
	this.m_mass.col1.z = this.m_mass.col3.x;
	this.m_mass.col2.z = this.m_mass.col3.y;
	this.m_mass.col3.z = iA + iB;
	if(step.warmStarting) {
		this.m_impulse.x *= step.dtRatio;
		this.m_impulse.y *= step.dtRatio;
		this.m_impulse.z *= step.dtRatio;
		bA.m_linearVelocity.x -= mA * this.m_impulse.x;
		bA.m_linearVelocity.y -= mA * this.m_impulse.y;
		bA.m_angularVelocity -= iA * (rAX * this.m_impulse.y - rAY * this.m_impulse.x + this.m_impulse.z);
		bB.m_linearVelocity.x += mB * this.m_impulse.x;
		bB.m_linearVelocity.y += mB * this.m_impulse.y;
		bB.m_angularVelocity += iB * (rBX * this.m_impulse.y - rBY * this.m_impulse.x + this.m_impulse.z);
	} else this.m_impulse.setZero();
}
box2D.dynamics.joints.B2WeldJoint.prototype.solveVelocityConstraints = function(step) {
	var tMat;
	var tX;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var vA = bA.m_linearVelocity;
	var wA = bA.m_angularVelocity;
	var vB = bB.m_linearVelocity;
	var wB = bB.m_angularVelocity;
	var mA = bA.m_invMass;
	var mB = bB.m_invMass;
	var iA = bA.m_invI;
	var iB = bB.m_invI;
	tMat = bA.m_xf.R;
	var rAX = this.m_localAnchorA.x - bA.m_sweep.localCenter.x;
	var rAY = this.m_localAnchorA.y - bA.m_sweep.localCenter.y;
	tX = tMat.col1.x * rAX + tMat.col2.x * rAY;
	rAY = tMat.col1.y * rAX + tMat.col2.y * rAY;
	rAX = tX;
	tMat = bB.m_xf.R;
	var rBX = this.m_localAnchorB.x - bB.m_sweep.localCenter.x;
	var rBY = this.m_localAnchorB.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * rBX + tMat.col2.x * rBY;
	rBY = tMat.col1.y * rBX + tMat.col2.y * rBY;
	rBX = tX;
	var Cdot1X = vB.x - wB * rBY - vA.x + wA * rAY;
	var Cdot1Y = vB.y + wB * rBX - vA.y - wA * rAX;
	var Cdot2 = wB - wA;
	var impulse = new box2D.common.math.B2Vec3();
	this.m_mass.solve33(impulse,-Cdot1X,-Cdot1Y,-Cdot2);
	this.m_impulse.add(impulse);
	vA.x -= mA * impulse.x;
	vA.y -= mA * impulse.y;
	wA -= iA * (rAX * impulse.y - rAY * impulse.x + impulse.z);
	vB.x += mB * impulse.x;
	vB.y += mB * impulse.y;
	wB += iB * (rBX * impulse.y - rBY * impulse.x + impulse.z);
	bA.m_angularVelocity = wA;
	bB.m_angularVelocity = wB;
}
box2D.dynamics.joints.B2WeldJoint.prototype.solvePositionConstraints = function(baumgarte) {
	var tMat;
	var tX;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	tMat = bA.m_xf.R;
	var rAX = this.m_localAnchorA.x - bA.m_sweep.localCenter.x;
	var rAY = this.m_localAnchorA.y - bA.m_sweep.localCenter.y;
	tX = tMat.col1.x * rAX + tMat.col2.x * rAY;
	rAY = tMat.col1.y * rAX + tMat.col2.y * rAY;
	rAX = tX;
	tMat = bB.m_xf.R;
	var rBX = this.m_localAnchorB.x - bB.m_sweep.localCenter.x;
	var rBY = this.m_localAnchorB.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * rBX + tMat.col2.x * rBY;
	rBY = tMat.col1.y * rBX + tMat.col2.y * rBY;
	rBX = tX;
	var mA = bA.m_invMass;
	var mB = bB.m_invMass;
	var iA = bA.m_invI;
	var iB = bB.m_invI;
	var C1X = bB.m_sweep.c.x + rBX - bA.m_sweep.c.x - rAX;
	var C1Y = bB.m_sweep.c.y + rBY - bA.m_sweep.c.y - rAY;
	var C2 = bB.m_sweep.a - bA.m_sweep.a - this.m_referenceAngle;
	var k_allowedStretch = 10.0 * box2D.common.B2Settings.b2_linearSlop;
	var positionError = Math.sqrt(C1X * C1X + C1Y * C1Y);
	var angularError = box2D.common.math.B2Math.abs(C2);
	if(positionError > k_allowedStretch) {
		iA *= 1.0;
		iB *= 1.0;
	}
	this.m_mass.col1.x = mA + mB + rAY * rAY * iA + rBY * rBY * iB;
	this.m_mass.col2.x = -rAY * rAX * iA - rBY * rBX * iB;
	this.m_mass.col3.x = -rAY * iA - rBY * iB;
	this.m_mass.col1.y = this.m_mass.col2.x;
	this.m_mass.col2.y = mA + mB + rAX * rAX * iA + rBX * rBX * iB;
	this.m_mass.col3.y = rAX * iA + rBX * iB;
	this.m_mass.col1.z = this.m_mass.col3.x;
	this.m_mass.col2.z = this.m_mass.col3.y;
	this.m_mass.col3.z = iA + iB;
	var impulse = new box2D.common.math.B2Vec3();
	this.m_mass.solve33(impulse,-C1X,-C1Y,-C2);
	bA.m_sweep.c.x -= mA * impulse.x;
	bA.m_sweep.c.y -= mA * impulse.y;
	bA.m_sweep.a -= iA * (rAX * impulse.y - rAY * impulse.x + impulse.z);
	bB.m_sweep.c.x += mB * impulse.x;
	bB.m_sweep.c.y += mB * impulse.y;
	bB.m_sweep.a += iB * (rBX * impulse.y - rBY * impulse.x + impulse.z);
	bA.synchronizeTransform();
	bB.synchronizeTransform();
	return positionError <= box2D.common.B2Settings.b2_linearSlop && angularError <= box2D.common.B2Settings.b2_angularSlop;
}
box2D.dynamics.joints.B2WeldJoint.prototype.m_localAnchorA = null;
box2D.dynamics.joints.B2WeldJoint.prototype.m_localAnchorB = null;
box2D.dynamics.joints.B2WeldJoint.prototype.m_referenceAngle = null;
box2D.dynamics.joints.B2WeldJoint.prototype.m_impulse = null;
box2D.dynamics.joints.B2WeldJoint.prototype.m_mass = null;
box2D.dynamics.joints.B2WeldJoint.prototype.__class__ = box2D.dynamics.joints.B2WeldJoint;
jeash.display.LoaderInfo = function(p) {
	if( p === $_ ) return;
	jeash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
}
jeash.display.LoaderInfo.__name__ = ["jeash","display","LoaderInfo"];
jeash.display.LoaderInfo.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.display.LoaderInfo.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.display.LoaderInfo.create = function(ldr) {
	var li = new jeash.display.LoaderInfo();
	li.loader = ldr;
	return li;
}
jeash.display.LoaderInfo.prototype.bytes = null;
jeash.display.LoaderInfo.prototype.bytesLoaded = null;
jeash.display.LoaderInfo.prototype.bytesTotal = null;
jeash.display.LoaderInfo.prototype.childAllowsParent = null;
jeash.display.LoaderInfo.prototype.content = null;
jeash.display.LoaderInfo.prototype.contentType = null;
jeash.display.LoaderInfo.prototype.frameRate = null;
jeash.display.LoaderInfo.prototype.height = null;
jeash.display.LoaderInfo.prototype.loader = null;
jeash.display.LoaderInfo.prototype.loaderURL = null;
jeash.display.LoaderInfo.prototype.parameters = null;
jeash.display.LoaderInfo.prototype.parentAllowsChild = null;
jeash.display.LoaderInfo.prototype.sameDomain = null;
jeash.display.LoaderInfo.prototype.sharedEvents = null;
jeash.display.LoaderInfo.prototype.url = null;
jeash.display.LoaderInfo.prototype.width = null;
jeash.display.LoaderInfo.prototype.__class__ = jeash.display.LoaderInfo;
box2D.collision.B2DynamicTree = function(p) {
	if( p === $_ ) return;
	this.m_root = null;
	this.m_freeList = null;
	this.m_path = 0;
	this.m_insertionCount = 0;
}
box2D.collision.B2DynamicTree.__name__ = ["box2D","collision","B2DynamicTree"];
box2D.collision.B2DynamicTree.prototype.createProxy = function(aabb,userData) {
	var node = this.allocateNode();
	var extendX = box2D.common.B2Settings.b2_aabbExtension;
	var extendY = box2D.common.B2Settings.b2_aabbExtension;
	node.aabb.lowerBound.x = aabb.lowerBound.x - extendX;
	node.aabb.lowerBound.y = aabb.lowerBound.y - extendY;
	node.aabb.upperBound.x = aabb.upperBound.x + extendX;
	node.aabb.upperBound.y = aabb.upperBound.y + extendY;
	node.userData = userData;
	this.insertLeaf(node);
	return node;
}
box2D.collision.B2DynamicTree.prototype.destroyProxy = function(proxy) {
	this.removeLeaf(proxy);
	this.freeNode(proxy);
}
box2D.collision.B2DynamicTree.prototype.moveProxy = function(proxy,aabb,displacement) {
	box2D.common.B2Settings.b2Assert(proxy.isLeaf());
	if(proxy.aabb.contains(aabb)) return false;
	this.removeLeaf(proxy);
	var extendX = box2D.common.B2Settings.b2_aabbExtension + box2D.common.B2Settings.b2_aabbMultiplier * (displacement.x > 0?displacement.x:-displacement.x);
	var extendY = box2D.common.B2Settings.b2_aabbExtension + box2D.common.B2Settings.b2_aabbMultiplier * (displacement.y > 0?displacement.y:-displacement.y);
	proxy.aabb.lowerBound.x = aabb.lowerBound.x - extendX;
	proxy.aabb.lowerBound.y = aabb.lowerBound.y - extendY;
	proxy.aabb.upperBound.x = aabb.upperBound.x + extendX;
	proxy.aabb.upperBound.y = aabb.upperBound.y + extendY;
	this.insertLeaf(proxy);
	return true;
}
box2D.collision.B2DynamicTree.prototype.rebalance = function(iterations) {
	if(this.m_root == null) return;
	var _g = 0;
	while(_g < iterations) {
		var i = _g++;
		var node = this.m_root;
		var bit = 0;
		while(node.isLeaf() == false) {
			node = (this.m_path >> bit & 1) != 0?node.child2:node.child1;
			bit = bit + 1 & 31;
		}
		++this.m_path;
		this.removeLeaf(node);
		this.insertLeaf(node);
	}
}
box2D.collision.B2DynamicTree.prototype.getFatAABB = function(proxy) {
	return proxy.aabb;
}
box2D.collision.B2DynamicTree.prototype.getUserData = function(proxy) {
	return proxy.userData;
}
box2D.collision.B2DynamicTree.prototype.query = function(callbackMethod,aabb) {
	if(this.m_root == null) return;
	var stack = new Array();
	var count = 0;
	stack[count++] = this.m_root;
	while(count > 0) {
		var node = stack[--count];
		if(node.aabb.testOverlap(aabb)) {
			if(node.isLeaf()) {
				var proceed = callbackMethod(node);
				if(!proceed) return;
			} else {
				stack[count++] = node.child1;
				stack[count++] = node.child2;
			}
		}
	}
}
box2D.collision.B2DynamicTree.prototype.rayCast = function(callbackMethod,input) {
	if(this.m_root == null) return;
	var p1 = input.p1;
	var p2 = input.p2;
	var r = box2D.common.math.B2Math.subtractVV(p1,p2);
	r.normalize();
	var v = box2D.common.math.B2Math.crossFV(1.0,r);
	var abs_v = box2D.common.math.B2Math.absV(v);
	var maxFraction = input.maxFraction;
	var segmentAABB = new box2D.collision.B2AABB();
	var tX;
	var tY;
	tX = p1.x + maxFraction * (p2.x - p1.x);
	tY = p1.y + maxFraction * (p2.y - p1.y);
	segmentAABB.lowerBound.x = Math.min(p1.x,tX);
	segmentAABB.lowerBound.y = Math.min(p1.y,tY);
	segmentAABB.upperBound.x = Math.max(p1.x,tX);
	segmentAABB.upperBound.y = Math.max(p1.y,tY);
	var stack = new Array();
	var count = 0;
	stack[count++] = this.m_root;
	while(count > 0) {
		var node = stack[--count];
		if(node.aabb.testOverlap(segmentAABB) == false) continue;
		var c = node.aabb.getCenter();
		var h = node.aabb.getExtents();
		var separation = Math.abs(v.x * (p1.x - c.x) + v.y * (p1.y - c.y)) - abs_v.x * h.x - abs_v.y * h.y;
		if(separation > 0.0) continue;
		if(node.isLeaf()) {
			var subInput = new box2D.collision.B2RayCastInput();
			subInput.p1 = input.p1;
			subInput.p2 = input.p2;
			subInput.maxFraction = input.maxFraction;
			maxFraction = callbackMethod(subInput,node);
			if(maxFraction == 0.0) return;
			tX = p1.x + maxFraction * (p2.x - p1.x);
			tY = p1.y + maxFraction * (p2.y - p1.y);
			segmentAABB.lowerBound.x = Math.min(p1.x,tX);
			segmentAABB.lowerBound.y = Math.min(p1.y,tY);
			segmentAABB.upperBound.x = Math.max(p1.x,tX);
			segmentAABB.upperBound.y = Math.max(p1.y,tY);
		} else {
			stack[count++] = node.child1;
			stack[count++] = node.child2;
		}
	}
}
box2D.collision.B2DynamicTree.prototype.allocateNode = function() {
	if(this.m_freeList != null) {
		var node = this.m_freeList;
		this.m_freeList = node.parent;
		node.parent = null;
		node.child1 = null;
		node.child2 = null;
		return node;
	}
	return new box2D.collision.B2DynamicTreeNode();
}
box2D.collision.B2DynamicTree.prototype.freeNode = function(node) {
	node.parent = this.m_freeList;
	this.m_freeList = node;
}
box2D.collision.B2DynamicTree.prototype.insertLeaf = function(leaf) {
	++this.m_insertionCount;
	if(this.m_root == null) {
		this.m_root = leaf;
		this.m_root.parent = null;
		return;
	}
	var center = leaf.aabb.getCenter();
	var sibling = this.m_root;
	if(sibling.isLeaf() == false) do {
		var child1 = sibling.child1;
		var child2 = sibling.child2;
		var norm1 = Math.abs((child1.aabb.lowerBound.x + child1.aabb.upperBound.x) / 2 - center.x) + Math.abs((child1.aabb.lowerBound.y + child1.aabb.upperBound.y) / 2 - center.y);
		var norm2 = Math.abs((child2.aabb.lowerBound.x + child2.aabb.upperBound.x) / 2 - center.x) + Math.abs((child2.aabb.lowerBound.y + child2.aabb.upperBound.y) / 2 - center.y);
		if(norm1 < norm2) sibling = child1; else sibling = child2;
	} while(sibling.isLeaf() == false);
	var node1 = sibling.parent;
	var node2 = this.allocateNode();
	node2.parent = node1;
	node2.userData = null;
	node2.aabb.combine(leaf.aabb,sibling.aabb);
	if(node1 != null) {
		if(sibling.parent.child1 == sibling) node1.child1 = node2; else node1.child2 = node2;
		node2.child1 = sibling;
		node2.child2 = leaf;
		sibling.parent = node2;
		leaf.parent = node2;
		do {
			if(node1.aabb.contains(node2.aabb)) break;
			node1.aabb.combine(node1.child1.aabb,node1.child2.aabb);
			node2 = node1;
			node1 = node1.parent;
		} while(node1 != null);
	} else {
		node2.child1 = sibling;
		node2.child2 = leaf;
		sibling.parent = node2;
		leaf.parent = node2;
		this.m_root = node2;
	}
}
box2D.collision.B2DynamicTree.prototype.removeLeaf = function(leaf) {
	if(leaf == this.m_root) {
		this.m_root = null;
		return;
	}
	var node2 = leaf.parent;
	var node1 = node2.parent;
	var sibling;
	if(node2.child1 == leaf) sibling = node2.child2; else sibling = node2.child1;
	if(node1 != null) {
		if(node1.child1 == node2) node1.child1 = sibling; else node1.child2 = sibling;
		sibling.parent = node1;
		this.freeNode(node2);
		while(node1 != null) {
			var oldAABB = node1.aabb;
			node1.aabb = new box2D.collision.B2AABB();
			node1.aabb.combine(node1.child1.aabb,node1.child2.aabb);
			if(oldAABB.contains(node1.aabb)) break;
			node1 = node1.parent;
		}
	} else {
		this.m_root = sibling;
		sibling.parent = null;
		this.freeNode(node2);
	}
}
box2D.collision.B2DynamicTree.prototype.m_root = null;
box2D.collision.B2DynamicTree.prototype.m_freeList = null;
box2D.collision.B2DynamicTree.prototype.m_path = null;
box2D.collision.B2DynamicTree.prototype.m_insertionCount = null;
box2D.collision.B2DynamicTree.prototype.__class__ = box2D.collision.B2DynamicTree;
box2D.dynamics.contacts.B2PositionSolverManifold = function(p) {
	if( p === $_ ) return;
	this.m_normal = new box2D.common.math.B2Vec2();
	this.m_separations = new Array();
	this.m_points = new Array();
	var _g1 = 0, _g = box2D.common.B2Settings.b2_maxManifoldPoints;
	while(_g1 < _g) {
		var i = _g1++;
		this.m_points[i] = new box2D.common.math.B2Vec2();
	}
}
box2D.dynamics.contacts.B2PositionSolverManifold.__name__ = ["box2D","dynamics","contacts","B2PositionSolverManifold"];
box2D.dynamics.contacts.B2PositionSolverManifold.prototype.initialize = function(cc) {
	box2D.common.B2Settings.b2Assert(cc.pointCount > 0);
	var i;
	var clipPointX;
	var clipPointY;
	var tMat;
	var tVec;
	var planePointX;
	var planePointY;
	switch(cc.type) {
	case box2D.collision.B2Manifold.e_circles:
		tMat = cc.bodyA.m_xf.R;
		tVec = cc.localPoint;
		var pointAX = cc.bodyA.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var pointAY = cc.bodyA.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		tMat = cc.bodyB.m_xf.R;
		tVec = cc.points[0].localPoint;
		var pointBX = cc.bodyB.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var pointBY = cc.bodyB.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		var dX = pointBX - pointAX;
		var dY = pointBY - pointAY;
		var d2 = dX * dX + dY * dY;
		if(d2 > Number.MIN_VALUE * Number.MIN_VALUE) {
			var d = Math.sqrt(d2);
			this.m_normal.x = dX / d;
			this.m_normal.y = dY / d;
		} else {
			this.m_normal.x = 1.0;
			this.m_normal.y = 0.0;
		}
		this.m_points[0].x = 0.5 * (pointAX + pointBX);
		this.m_points[0].y = 0.5 * (pointAY + pointBY);
		this.m_separations[0] = dX * this.m_normal.x + dY * this.m_normal.y - cc.radius;
		break;
	case box2D.collision.B2Manifold.e_faceA:
		tMat = cc.bodyA.m_xf.R;
		tVec = cc.localPlaneNormal;
		this.m_normal.x = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		this.m_normal.y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		tMat = cc.bodyA.m_xf.R;
		tVec = cc.localPoint;
		planePointX = cc.bodyA.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		planePointY = cc.bodyA.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		tMat = cc.bodyB.m_xf.R;
		var _g1 = 0, _g = cc.pointCount;
		while(_g1 < _g) {
			var i1 = _g1++;
			tVec = cc.points[i1].localPoint;
			clipPointX = cc.bodyB.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
			clipPointY = cc.bodyB.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
			this.m_separations[i1] = (clipPointX - planePointX) * this.m_normal.x + (clipPointY - planePointY) * this.m_normal.y - cc.radius;
			this.m_points[i1].x = clipPointX;
			this.m_points[i1].y = clipPointY;
		}
		break;
	case box2D.collision.B2Manifold.e_faceB:
		tMat = cc.bodyB.m_xf.R;
		tVec = cc.localPlaneNormal;
		this.m_normal.x = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		this.m_normal.y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		tMat = cc.bodyB.m_xf.R;
		tVec = cc.localPoint;
		planePointX = cc.bodyB.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		planePointY = cc.bodyB.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		tMat = cc.bodyA.m_xf.R;
		var _g1 = 0, _g = cc.pointCount;
		while(_g1 < _g) {
			var i1 = _g1++;
			tVec = cc.points[i1].localPoint;
			clipPointX = cc.bodyA.m_xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
			clipPointY = cc.bodyA.m_xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
			this.m_separations[i1] = (clipPointX - planePointX) * this.m_normal.x + (clipPointY - planePointY) * this.m_normal.y - cc.radius;
			this.m_points[i1].set(clipPointX,clipPointY);
		}
		this.m_normal.x *= -1;
		this.m_normal.y *= -1;
		break;
	}
}
box2D.dynamics.contacts.B2PositionSolverManifold.prototype.m_normal = null;
box2D.dynamics.contacts.B2PositionSolverManifold.prototype.m_points = null;
box2D.dynamics.contacts.B2PositionSolverManifold.prototype.m_separations = null;
box2D.dynamics.contacts.B2PositionSolverManifold.prototype.__class__ = box2D.dynamics.contacts.B2PositionSolverManifold;
box2D.collision.B2WorldManifold = function(p) {
	if( p === $_ ) return;
	this.m_normal = new box2D.common.math.B2Vec2();
	this.m_points = new Array();
	var _g1 = 0, _g = box2D.common.B2Settings.b2_maxManifoldPoints;
	while(_g1 < _g) {
		var i = _g1++;
		this.m_points[i] = new box2D.common.math.B2Vec2();
	}
}
box2D.collision.B2WorldManifold.__name__ = ["box2D","collision","B2WorldManifold"];
box2D.collision.B2WorldManifold.prototype.initialize = function(manifold,xfA,radiusA,xfB,radiusB) {
	if(manifold.m_pointCount == 0) return;
	var i;
	var tVec;
	var tMat;
	var normalX;
	var normalY;
	var planePointX;
	var planePointY;
	var clipPointX;
	var clipPointY;
	switch(manifold.m_type) {
	case box2D.collision.B2Manifold.e_circles:
		tMat = xfA.R;
		tVec = manifold.m_localPoint;
		var pointAX = xfA.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		var pointAY = xfA.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		tMat = xfB.R;
		tVec = manifold.m_points[0].m_localPoint;
		var pointBX = xfB.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		var pointBY = xfB.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		var dX = pointBX - pointAX;
		var dY = pointBY - pointAY;
		var d2 = dX * dX + dY * dY;
		if(d2 > Number.MIN_VALUE * Number.MIN_VALUE) {
			var d = Math.sqrt(d2);
			this.m_normal.x = dX / d;
			this.m_normal.y = dY / d;
		} else {
			this.m_normal.x = 1;
			this.m_normal.y = 0;
		}
		var cAX = pointAX + radiusA * this.m_normal.x;
		var cAY = pointAY + radiusA * this.m_normal.y;
		var cBX = pointBX - radiusB * this.m_normal.x;
		var cBY = pointBY - radiusB * this.m_normal.y;
		this.m_points[0].x = 0.5 * (cAX + cBX);
		this.m_points[0].y = 0.5 * (cAY + cBY);
		break;
	case box2D.collision.B2Manifold.e_faceA:
		tMat = xfA.R;
		tVec = manifold.m_localPlaneNormal;
		normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		tMat = xfA.R;
		tVec = manifold.m_localPoint;
		planePointX = xfA.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		planePointY = xfA.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		this.m_normal.x = normalX;
		this.m_normal.y = normalY;
		var _g1 = 0, _g = manifold.m_pointCount;
		while(_g1 < _g) {
			var i1 = _g1++;
			tMat = xfB.R;
			tVec = manifold.m_points[i1].m_localPoint;
			clipPointX = xfB.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
			clipPointY = xfB.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
			this.m_points[i1].x = clipPointX + 0.5 * (radiusA - (clipPointX - planePointX) * normalX - (clipPointY - planePointY) * normalY - radiusB) * normalX;
			this.m_points[i1].y = clipPointY + 0.5 * (radiusA - (clipPointX - planePointX) * normalX - (clipPointY - planePointY) * normalY - radiusB) * normalY;
		}
		break;
	case box2D.collision.B2Manifold.e_faceB:
		tMat = xfB.R;
		tVec = manifold.m_localPlaneNormal;
		normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		tMat = xfB.R;
		tVec = manifold.m_localPoint;
		planePointX = xfB.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		planePointY = xfB.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		this.m_normal.x = -normalX;
		this.m_normal.y = -normalY;
		var _g1 = 0, _g = manifold.m_pointCount;
		while(_g1 < _g) {
			var i1 = _g1++;
			tMat = xfA.R;
			tVec = manifold.m_points[i1].m_localPoint;
			clipPointX = xfA.position.x + tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
			clipPointY = xfA.position.y + tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
			this.m_points[i1].x = clipPointX + 0.5 * (radiusB - (clipPointX - planePointX) * normalX - (clipPointY - planePointY) * normalY - radiusA) * normalX;
			this.m_points[i1].y = clipPointY + 0.5 * (radiusB - (clipPointX - planePointX) * normalX - (clipPointY - planePointY) * normalY - radiusA) * normalY;
		}
		break;
	}
}
box2D.collision.B2WorldManifold.prototype.m_normal = null;
box2D.collision.B2WorldManifold.prototype.m_points = null;
box2D.collision.B2WorldManifold.prototype.__class__ = box2D.collision.B2WorldManifold;
box2D.common.B2Settings = function() { }
box2D.common.B2Settings.__name__ = ["box2D","common","B2Settings"];
box2D.common.B2Settings.b2MixFriction = function(friction1,friction2) {
	return Math.sqrt(friction1 * friction2);
}
box2D.common.B2Settings.b2MixRestitution = function(restitution1,restitution2) {
	return restitution1 > restitution2?restitution1:restitution2;
}
box2D.common.B2Settings.b2Assert = function(a) {
	if(!a) throw "Assertion Failed";
}
box2D.common.B2Settings.prototype.__class__ = box2D.common.B2Settings;
box2D.dynamics.contacts.B2ContactSolver = function(p) {
	if( p === $_ ) return;
	this.m_step = new box2D.dynamics.B2TimeStep();
	this.m_constraints = new Array();
}
box2D.dynamics.contacts.B2ContactSolver.__name__ = ["box2D","dynamics","contacts","B2ContactSolver"];
box2D.dynamics.contacts.B2ContactSolver.prototype.initialize = function(step,contacts,contactCount,allocator) {
	var contact;
	this.m_step.set(step);
	this.m_allocator = allocator;
	var i;
	var tVec;
	var tMat;
	this.m_constraintCount = contactCount;
	while(this.m_constraints.length < this.m_constraintCount) this.m_constraints[this.m_constraints.length] = new box2D.dynamics.contacts.B2ContactConstraint();
	var _g = 0;
	while(_g < contactCount) {
		var i1 = _g++;
		contact = contacts[i1];
		var fixtureA = contact.m_fixtureA;
		var fixtureB = contact.m_fixtureB;
		var shapeA = fixtureA.m_shape;
		var shapeB = fixtureB.m_shape;
		var radiusA = shapeA.m_radius;
		var radiusB = shapeB.m_radius;
		var bodyA = fixtureA.m_body;
		var bodyB = fixtureB.m_body;
		var manifold = contact.getManifold();
		var friction = box2D.common.B2Settings.b2MixFriction(fixtureA.getFriction(),fixtureB.getFriction());
		var restitution = box2D.common.B2Settings.b2MixRestitution(fixtureA.getRestitution(),fixtureB.getRestitution());
		var vAX = bodyA.m_linearVelocity.x;
		var vAY = bodyA.m_linearVelocity.y;
		var vBX = bodyB.m_linearVelocity.x;
		var vBY = bodyB.m_linearVelocity.y;
		var wA = bodyA.m_angularVelocity;
		var wB = bodyB.m_angularVelocity;
		box2D.common.B2Settings.b2Assert(manifold.m_pointCount > 0);
		box2D.dynamics.contacts.B2ContactSolver.s_worldManifold.initialize(manifold,bodyA.m_xf,radiusA,bodyB.m_xf,radiusB);
		var normalX = box2D.dynamics.contacts.B2ContactSolver.s_worldManifold.m_normal.x;
		var normalY = box2D.dynamics.contacts.B2ContactSolver.s_worldManifold.m_normal.y;
		var cc = this.m_constraints[i1];
		cc.bodyA = bodyA;
		cc.bodyB = bodyB;
		cc.manifold = manifold;
		cc.normal.x = normalX;
		cc.normal.y = normalY;
		cc.pointCount = manifold.m_pointCount;
		cc.friction = friction;
		cc.restitution = restitution;
		cc.localPlaneNormal.x = manifold.m_localPlaneNormal.x;
		cc.localPlaneNormal.y = manifold.m_localPlaneNormal.y;
		cc.localPoint.x = manifold.m_localPoint.x;
		cc.localPoint.y = manifold.m_localPoint.y;
		cc.radius = radiusA + radiusB;
		cc.type = manifold.m_type;
		var _g2 = 0, _g1 = cc.pointCount;
		while(_g2 < _g1) {
			var k = _g2++;
			var cp = manifold.m_points[k];
			var ccp = cc.points[k];
			ccp.normalImpulse = cp.m_normalImpulse;
			ccp.tangentImpulse = cp.m_tangentImpulse;
			ccp.localPoint.setV(cp.m_localPoint);
			var rAX = ccp.rA.x = box2D.dynamics.contacts.B2ContactSolver.s_worldManifold.m_points[k].x - bodyA.m_sweep.c.x;
			var rAY = ccp.rA.y = box2D.dynamics.contacts.B2ContactSolver.s_worldManifold.m_points[k].y - bodyA.m_sweep.c.y;
			var rBX = ccp.rB.x = box2D.dynamics.contacts.B2ContactSolver.s_worldManifold.m_points[k].x - bodyB.m_sweep.c.x;
			var rBY = ccp.rB.y = box2D.dynamics.contacts.B2ContactSolver.s_worldManifold.m_points[k].y - bodyB.m_sweep.c.y;
			var rnA = rAX * normalY - rAY * normalX;
			var rnB = rBX * normalY - rBY * normalX;
			rnA *= rnA;
			rnB *= rnB;
			var kNormal = bodyA.m_invMass + bodyB.m_invMass + bodyA.m_invI * rnA + bodyB.m_invI * rnB;
			ccp.normalMass = 1.0 / kNormal;
			var kEqualized = bodyA.m_mass * bodyA.m_invMass + bodyB.m_mass * bodyB.m_invMass;
			kEqualized += bodyA.m_mass * bodyA.m_invI * rnA + bodyB.m_mass * bodyB.m_invI * rnB;
			ccp.equalizedMass = 1.0 / kEqualized;
			var tangentX = normalY;
			var tangentY = -normalX;
			var rtA = rAX * tangentY - rAY * tangentX;
			var rtB = rBX * tangentY - rBY * tangentX;
			rtA *= rtA;
			rtB *= rtB;
			var kTangent = bodyA.m_invMass + bodyB.m_invMass + bodyA.m_invI * rtA + bodyB.m_invI * rtB;
			ccp.tangentMass = 1.0 / kTangent;
			ccp.velocityBias = 0.0;
			var tX = vBX + -wB * rBY - vAX - -wA * rAY;
			var tY = vBY + wB * rBX - vAY - wA * rAX;
			var vRel = cc.normal.x * tX + cc.normal.y * tY;
			if(vRel < -box2D.common.B2Settings.b2_velocityThreshold) ccp.velocityBias += -cc.restitution * vRel;
		}
		if(cc.pointCount == 2) {
			var ccp1 = cc.points[0];
			var ccp2 = cc.points[1];
			var invMassA = bodyA.m_invMass;
			var invIA = bodyA.m_invI;
			var invMassB = bodyB.m_invMass;
			var invIB = bodyB.m_invI;
			var rn1A = ccp1.rA.x * normalY - ccp1.rA.y * normalX;
			var rn1B = ccp1.rB.x * normalY - ccp1.rB.y * normalX;
			var rn2A = ccp2.rA.x * normalY - ccp2.rA.y * normalX;
			var rn2B = ccp2.rB.x * normalY - ccp2.rB.y * normalX;
			var k11 = invMassA + invMassB + invIA * rn1A * rn1A + invIB * rn1B * rn1B;
			var k22 = invMassA + invMassB + invIA * rn2A * rn2A + invIB * rn2B * rn2B;
			var k12 = invMassA + invMassB + invIA * rn1A * rn2A + invIB * rn1B * rn2B;
			var k_maxConditionNumber = 100.0;
			if(k11 * k11 < k_maxConditionNumber * (k11 * k22 - k12 * k12)) {
				cc.K.col1.set(k11,k12);
				cc.K.col2.set(k12,k22);
				cc.K.getInverse(cc.normalMass);
			} else cc.pointCount = 1;
		}
	}
}
box2D.dynamics.contacts.B2ContactSolver.prototype.initVelocityConstraints = function(step) {
	var tVec;
	var tVec2;
	var tMat;
	var _g1 = 0, _g = this.m_constraintCount;
	while(_g1 < _g) {
		var i = _g1++;
		var c = this.m_constraints[i];
		var bodyA = c.bodyA;
		var bodyB = c.bodyB;
		var invMassA = bodyA.m_invMass;
		var invIA = bodyA.m_invI;
		var invMassB = bodyB.m_invMass;
		var invIB = bodyB.m_invI;
		var normalX = c.normal.x;
		var normalY = c.normal.y;
		var tangentX = normalY;
		var tangentY = -normalX;
		var tX;
		var j;
		var tCount;
		if(step.warmStarting) {
			tCount = c.pointCount;
			var _g2 = 0;
			while(_g2 < tCount) {
				var j1 = _g2++;
				var ccp = c.points[j1];
				ccp.normalImpulse *= step.dtRatio;
				ccp.tangentImpulse *= step.dtRatio;
				var PX = ccp.normalImpulse * normalX + ccp.tangentImpulse * tangentX;
				var PY = ccp.normalImpulse * normalY + ccp.tangentImpulse * tangentY;
				bodyA.m_angularVelocity -= invIA * (ccp.rA.x * PY - ccp.rA.y * PX);
				bodyA.m_linearVelocity.x -= invMassA * PX;
				bodyA.m_linearVelocity.y -= invMassA * PY;
				bodyB.m_angularVelocity += invIB * (ccp.rB.x * PY - ccp.rB.y * PX);
				bodyB.m_linearVelocity.x += invMassB * PX;
				bodyB.m_linearVelocity.y += invMassB * PY;
			}
		} else {
			tCount = c.pointCount;
			var _g2 = 0;
			while(_g2 < tCount) {
				var j1 = _g2++;
				var ccp2 = c.points[j1];
				ccp2.normalImpulse = 0.0;
				ccp2.tangentImpulse = 0.0;
			}
		}
	}
}
box2D.dynamics.contacts.B2ContactSolver.prototype.solveVelocityConstraints = function() {
	var j;
	var ccp;
	var rAX;
	var rAY;
	var rBX;
	var rBY;
	var dvX;
	var dvY;
	var vn;
	var vt;
	var lambda;
	var maxFriction;
	var newImpulse;
	var PX;
	var PY;
	var dX;
	var dY;
	var P1X;
	var P1Y;
	var P2X;
	var P2Y;
	var tMat;
	var tVec;
	var _g1 = 0, _g = this.m_constraintCount;
	while(_g1 < _g) {
		var i = _g1++;
		var c = this.m_constraints[i];
		var bodyA = c.bodyA;
		var bodyB = c.bodyB;
		var wA = bodyA.m_angularVelocity;
		var wB = bodyB.m_angularVelocity;
		var vA = bodyA.m_linearVelocity;
		var vB = bodyB.m_linearVelocity;
		var invMassA = bodyA.m_invMass;
		var invIA = bodyA.m_invI;
		var invMassB = bodyB.m_invMass;
		var invIB = bodyB.m_invI;
		var normalX = c.normal.x;
		var normalY = c.normal.y;
		var tangentX = normalY;
		var tangentY = -normalX;
		var friction = c.friction;
		var tX;
		var _g3 = 0, _g2 = c.pointCount;
		while(_g3 < _g2) {
			var j1 = _g3++;
			ccp = c.points[j1];
			dvX = vB.x - wB * ccp.rB.y - vA.x + wA * ccp.rA.y;
			dvY = vB.y + wB * ccp.rB.x - vA.y - wA * ccp.rA.x;
			vt = dvX * tangentX + dvY * tangentY;
			lambda = ccp.tangentMass * -vt;
			maxFriction = friction * ccp.normalImpulse;
			newImpulse = box2D.common.math.B2Math.clamp(ccp.tangentImpulse + lambda,-maxFriction,maxFriction);
			lambda = newImpulse - ccp.tangentImpulse;
			PX = lambda * tangentX;
			PY = lambda * tangentY;
			vA.x -= invMassA * PX;
			vA.y -= invMassA * PY;
			wA -= invIA * (ccp.rA.x * PY - ccp.rA.y * PX);
			vB.x += invMassB * PX;
			vB.y += invMassB * PY;
			wB += invIB * (ccp.rB.x * PY - ccp.rB.y * PX);
			ccp.tangentImpulse = newImpulse;
		}
		var tCount = c.pointCount;
		if(c.pointCount == 1) {
			ccp = c.points[0];
			dvX = vB.x + -wB * ccp.rB.y - vA.x - -wA * ccp.rA.y;
			dvY = vB.y + wB * ccp.rB.x - vA.y - wA * ccp.rA.x;
			vn = dvX * normalX + dvY * normalY;
			lambda = -ccp.normalMass * (vn - ccp.velocityBias);
			newImpulse = ccp.normalImpulse + lambda;
			newImpulse = newImpulse > 0?newImpulse:0.0;
			lambda = newImpulse - ccp.normalImpulse;
			PX = lambda * normalX;
			PY = lambda * normalY;
			vA.x -= invMassA * PX;
			vA.y -= invMassA * PY;
			wA -= invIA * (ccp.rA.x * PY - ccp.rA.y * PX);
			vB.x += invMassB * PX;
			vB.y += invMassB * PY;
			wB += invIB * (ccp.rB.x * PY - ccp.rB.y * PX);
			ccp.normalImpulse = newImpulse;
		} else {
			var cp1 = c.points[0];
			var cp2 = c.points[1];
			var aX = cp1.normalImpulse;
			var aY = cp2.normalImpulse;
			var dv1X = vB.x - wB * cp1.rB.y - vA.x + wA * cp1.rA.y;
			var dv1Y = vB.y + wB * cp1.rB.x - vA.y - wA * cp1.rA.x;
			var dv2X = vB.x - wB * cp2.rB.y - vA.x + wA * cp2.rA.y;
			var dv2Y = vB.y + wB * cp2.rB.x - vA.y - wA * cp2.rA.x;
			var vn1 = dv1X * normalX + dv1Y * normalY;
			var vn2 = dv2X * normalX + dv2Y * normalY;
			var bX = vn1 - cp1.velocityBias;
			var bY = vn2 - cp2.velocityBias;
			tMat = c.K;
			bX -= tMat.col1.x * aX + tMat.col2.x * aY;
			bY -= tMat.col1.y * aX + tMat.col2.y * aY;
			var k_errorTol = 0.001;
			var _g2 = 0;
			while(_g2 < 1) {
				var i1 = _g2++;
				tMat = c.normalMass;
				var xX = -(tMat.col1.x * bX + tMat.col2.x * bY);
				var xY = -(tMat.col1.y * bX + tMat.col2.y * bY);
				if(xX >= 0.0 && xY >= 0.0) {
					dX = xX - aX;
					dY = xY - aY;
					P1X = dX * normalX;
					P1Y = dX * normalY;
					P2X = dY * normalX;
					P2Y = dY * normalY;
					vA.x -= invMassA * (P1X + P2X);
					vA.y -= invMassA * (P1Y + P2Y);
					wA -= invIA * (cp1.rA.x * P1Y - cp1.rA.y * P1X + cp2.rA.x * P2Y - cp2.rA.y * P2X);
					vB.x += invMassB * (P1X + P2X);
					vB.y += invMassB * (P1Y + P2Y);
					wB += invIB * (cp1.rB.x * P1Y - cp1.rB.y * P1X + cp2.rB.x * P2Y - cp2.rB.y * P2X);
					cp1.normalImpulse = xX;
					cp2.normalImpulse = xY;
					break;
				}
				xX = -cp1.normalMass * bX;
				xY = 0.0;
				vn1 = 0.0;
				vn2 = c.K.col1.y * xX + bY;
				if(xX >= 0.0 && vn2 >= 0.0) {
					dX = xX - aX;
					dY = xY - aY;
					P1X = dX * normalX;
					P1Y = dX * normalY;
					P2X = dY * normalX;
					P2Y = dY * normalY;
					vA.x -= invMassA * (P1X + P2X);
					vA.y -= invMassA * (P1Y + P2Y);
					wA -= invIA * (cp1.rA.x * P1Y - cp1.rA.y * P1X + cp2.rA.x * P2Y - cp2.rA.y * P2X);
					vB.x += invMassB * (P1X + P2X);
					vB.y += invMassB * (P1Y + P2Y);
					wB += invIB * (cp1.rB.x * P1Y - cp1.rB.y * P1X + cp2.rB.x * P2Y - cp2.rB.y * P2X);
					cp1.normalImpulse = xX;
					cp2.normalImpulse = xY;
					break;
				}
				xX = 0.0;
				xY = -cp2.normalMass * bY;
				vn1 = c.K.col2.x * xY + bX;
				vn2 = 0.0;
				if(xY >= 0.0 && vn1 >= 0.0) {
					dX = xX - aX;
					dY = xY - aY;
					P1X = dX * normalX;
					P1Y = dX * normalY;
					P2X = dY * normalX;
					P2Y = dY * normalY;
					vA.x -= invMassA * (P1X + P2X);
					vA.y -= invMassA * (P1Y + P2Y);
					wA -= invIA * (cp1.rA.x * P1Y - cp1.rA.y * P1X + cp2.rA.x * P2Y - cp2.rA.y * P2X);
					vB.x += invMassB * (P1X + P2X);
					vB.y += invMassB * (P1Y + P2Y);
					wB += invIB * (cp1.rB.x * P1Y - cp1.rB.y * P1X + cp2.rB.x * P2Y - cp2.rB.y * P2X);
					cp1.normalImpulse = xX;
					cp2.normalImpulse = xY;
					break;
				}
				xX = 0.0;
				xY = 0.0;
				vn1 = bX;
				vn2 = bY;
				if(vn1 >= 0.0 && vn2 >= 0.0) {
					dX = xX - aX;
					dY = xY - aY;
					P1X = dX * normalX;
					P1Y = dX * normalY;
					P2X = dY * normalX;
					P2Y = dY * normalY;
					vA.x -= invMassA * (P1X + P2X);
					vA.y -= invMassA * (P1Y + P2Y);
					wA -= invIA * (cp1.rA.x * P1Y - cp1.rA.y * P1X + cp2.rA.x * P2Y - cp2.rA.y * P2X);
					vB.x += invMassB * (P1X + P2X);
					vB.y += invMassB * (P1Y + P2Y);
					wB += invIB * (cp1.rB.x * P1Y - cp1.rB.y * P1X + cp2.rB.x * P2Y - cp2.rB.y * P2X);
					cp1.normalImpulse = xX;
					cp2.normalImpulse = xY;
					break;
				}
				break;
			}
		}
		bodyA.m_angularVelocity = wA;
		bodyB.m_angularVelocity = wB;
	}
}
box2D.dynamics.contacts.B2ContactSolver.prototype.finalizeVelocityConstraints = function() {
	var _g1 = 0, _g = this.m_constraintCount;
	while(_g1 < _g) {
		var i = _g1++;
		var c = this.m_constraints[i];
		var m = c.manifold;
		var _g3 = 0, _g2 = c.pointCount;
		while(_g3 < _g2) {
			var j = _g3++;
			var point1 = m.m_points[j];
			var point2 = c.points[j];
			point1.m_normalImpulse = point2.normalImpulse;
			point1.m_tangentImpulse = point2.tangentImpulse;
		}
	}
}
box2D.dynamics.contacts.B2ContactSolver.prototype.solvePositionConstraints = function(baumgarte) {
	var minSeparation = 0.0;
	var _g1 = 0, _g = this.m_constraintCount;
	while(_g1 < _g) {
		var i = _g1++;
		var c = this.m_constraints[i];
		var bodyA = c.bodyA;
		var bodyB = c.bodyB;
		var invMassA = bodyA.m_mass * bodyA.m_invMass;
		var invIA = bodyA.m_mass * bodyA.m_invI;
		var invMassB = bodyB.m_mass * bodyB.m_invMass;
		var invIB = bodyB.m_mass * bodyB.m_invI;
		box2D.dynamics.contacts.B2ContactSolver.s_psm.initialize(c);
		var normal = box2D.dynamics.contacts.B2ContactSolver.s_psm.m_normal;
		var _g3 = 0, _g2 = c.pointCount;
		while(_g3 < _g2) {
			var j = _g3++;
			var ccp = c.points[j];
			var point = box2D.dynamics.contacts.B2ContactSolver.s_psm.m_points[j];
			var separation = box2D.dynamics.contacts.B2ContactSolver.s_psm.m_separations[j];
			var rAX = point.x - bodyA.m_sweep.c.x;
			var rAY = point.y - bodyA.m_sweep.c.y;
			var rBX = point.x - bodyB.m_sweep.c.x;
			var rBY = point.y - bodyB.m_sweep.c.y;
			minSeparation = minSeparation < separation?minSeparation:separation;
			var C = box2D.common.math.B2Math.clamp(baumgarte * (separation + box2D.common.B2Settings.b2_linearSlop),-box2D.common.B2Settings.b2_maxLinearCorrection,0.0);
			var impulse = -ccp.equalizedMass * C;
			var PX = impulse * normal.x;
			var PY = impulse * normal.y;
			bodyA.m_sweep.c.x -= invMassA * PX;
			bodyA.m_sweep.c.y -= invMassA * PY;
			bodyA.m_sweep.a -= invIA * (rAX * PY - rAY * PX);
			bodyA.synchronizeTransform();
			bodyB.m_sweep.c.x += invMassB * PX;
			bodyB.m_sweep.c.y += invMassB * PY;
			bodyB.m_sweep.a += invIB * (rBX * PY - rBY * PX);
			bodyB.synchronizeTransform();
		}
	}
	return minSeparation > -1.5 * box2D.common.B2Settings.b2_linearSlop;
}
box2D.dynamics.contacts.B2ContactSolver.prototype.m_step = null;
box2D.dynamics.contacts.B2ContactSolver.prototype.m_allocator = null;
box2D.dynamics.contacts.B2ContactSolver.prototype.m_constraints = null;
box2D.dynamics.contacts.B2ContactSolver.prototype.m_constraintCount = null;
box2D.dynamics.contacts.B2ContactSolver.prototype.__class__ = box2D.dynamics.contacts.B2ContactSolver;
jeash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if( bufferTime === $_ ) return;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
}
jeash.media.SoundLoaderContext.__name__ = ["jeash","media","SoundLoaderContext"];
jeash.media.SoundLoaderContext.prototype.bufferTime = null;
jeash.media.SoundLoaderContext.prototype.checkPolicyFile = null;
jeash.media.SoundLoaderContext.prototype.__class__ = jeash.media.SoundLoaderContext;
box2D.dynamics.joints.B2DistanceJoint = function(def) {
	if( def === $_ ) return;
	box2D.dynamics.joints.B2Joint.call(this,def);
	this.m_localAnchor1 = new box2D.common.math.B2Vec2();
	this.m_localAnchor2 = new box2D.common.math.B2Vec2();
	this.m_u = new box2D.common.math.B2Vec2();
	var tMat;
	var tX;
	var tY;
	this.m_localAnchor1.setV(def.localAnchorA);
	this.m_localAnchor2.setV(def.localAnchorB);
	this.m_length = def.length;
	this.m_frequencyHz = def.frequencyHz;
	this.m_dampingRatio = def.dampingRatio;
	this.m_impulse = 0.0;
	this.m_gamma = 0.0;
	this.m_bias = 0.0;
}
box2D.dynamics.joints.B2DistanceJoint.__name__ = ["box2D","dynamics","joints","B2DistanceJoint"];
box2D.dynamics.joints.B2DistanceJoint.__super__ = box2D.dynamics.joints.B2Joint;
for(var k in box2D.dynamics.joints.B2Joint.prototype ) box2D.dynamics.joints.B2DistanceJoint.prototype[k] = box2D.dynamics.joints.B2Joint.prototype[k];
box2D.dynamics.joints.B2DistanceJoint.prototype.getAnchorA = function() {
	return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
}
box2D.dynamics.joints.B2DistanceJoint.prototype.getAnchorB = function() {
	return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
}
box2D.dynamics.joints.B2DistanceJoint.prototype.getReactionForce = function(inv_dt) {
	return new box2D.common.math.B2Vec2(inv_dt * this.m_impulse * this.m_u.x,inv_dt * this.m_impulse * this.m_u.y);
}
box2D.dynamics.joints.B2DistanceJoint.prototype.getReactionTorque = function(inv_dt) {
	return 0.0;
}
box2D.dynamics.joints.B2DistanceJoint.prototype.getLength = function() {
	return this.m_length;
}
box2D.dynamics.joints.B2DistanceJoint.prototype.setLength = function(length) {
	this.m_length = length;
}
box2D.dynamics.joints.B2DistanceJoint.prototype.getFrequency = function() {
	return this.m_frequencyHz;
}
box2D.dynamics.joints.B2DistanceJoint.prototype.setFrequency = function(hz) {
	this.m_frequencyHz = hz;
}
box2D.dynamics.joints.B2DistanceJoint.prototype.getDampingRatio = function() {
	return this.m_dampingRatio;
}
box2D.dynamics.joints.B2DistanceJoint.prototype.setDampingRatio = function(ratio) {
	this.m_dampingRatio = ratio;
}
box2D.dynamics.joints.B2DistanceJoint.prototype.initVelocityConstraints = function(step) {
	var tMat;
	var tX;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	tMat = bA.m_xf.R;
	var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
	var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
	tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = bB.m_xf.R;
	var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
	var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	this.m_u.x = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
	this.m_u.y = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
	var length = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
	if(length > box2D.common.B2Settings.b2_linearSlop) this.m_u.multiply(1.0 / length); else this.m_u.setZero();
	var cr1u = r1X * this.m_u.y - r1Y * this.m_u.x;
	var cr2u = r2X * this.m_u.y - r2Y * this.m_u.x;
	var invMass = bA.m_invMass + bA.m_invI * cr1u * cr1u + bB.m_invMass + bB.m_invI * cr2u * cr2u;
	this.m_mass = invMass != 0.0?1.0 / invMass:0.0;
	if(this.m_frequencyHz > 0.0) {
		var C = length - this.m_length;
		var omega = 2.0 * Math.PI * this.m_frequencyHz;
		var d = 2.0 * this.m_mass * this.m_dampingRatio * omega;
		var k = this.m_mass * omega * omega;
		this.m_gamma = step.dt * (d + step.dt * k);
		this.m_gamma = this.m_gamma != 0.0?1 / this.m_gamma:0.0;
		this.m_bias = C * step.dt * k * this.m_gamma;
		this.m_mass = invMass + this.m_gamma;
		this.m_mass = this.m_mass != 0.0?1.0 / this.m_mass:0.0;
	}
	if(step.warmStarting) {
		this.m_impulse *= step.dtRatio;
		var PX = this.m_impulse * this.m_u.x;
		var PY = this.m_impulse * this.m_u.y;
		bA.m_linearVelocity.x -= bA.m_invMass * PX;
		bA.m_linearVelocity.y -= bA.m_invMass * PY;
		bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
		bB.m_linearVelocity.x += bB.m_invMass * PX;
		bB.m_linearVelocity.y += bB.m_invMass * PY;
		bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
	} else this.m_impulse = 0.0;
}
box2D.dynamics.joints.B2DistanceJoint.prototype.solveVelocityConstraints = function(step) {
	var tMat;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	tMat = bA.m_xf.R;
	var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
	var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
	var tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = bB.m_xf.R;
	var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
	var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var v1X = bA.m_linearVelocity.x + -bA.m_angularVelocity * r1Y;
	var v1Y = bA.m_linearVelocity.y + bA.m_angularVelocity * r1X;
	var v2X = bB.m_linearVelocity.x + -bB.m_angularVelocity * r2Y;
	var v2Y = bB.m_linearVelocity.y + bB.m_angularVelocity * r2X;
	var Cdot = this.m_u.x * (v2X - v1X) + this.m_u.y * (v2Y - v1Y);
	var impulse = -this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse);
	this.m_impulse += impulse;
	var PX = impulse * this.m_u.x;
	var PY = impulse * this.m_u.y;
	bA.m_linearVelocity.x -= bA.m_invMass * PX;
	bA.m_linearVelocity.y -= bA.m_invMass * PY;
	bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
	bB.m_linearVelocity.x += bB.m_invMass * PX;
	bB.m_linearVelocity.y += bB.m_invMass * PY;
	bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
}
box2D.dynamics.joints.B2DistanceJoint.prototype.solvePositionConstraints = function(baumgarte) {
	var tMat;
	if(this.m_frequencyHz > 0.0) return true;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	tMat = bA.m_xf.R;
	var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
	var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
	var tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = bB.m_xf.R;
	var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
	var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var dX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
	var dY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
	var length = Math.sqrt(dX * dX + dY * dY);
	dX /= length;
	dY /= length;
	var C = length - this.m_length;
	C = box2D.common.math.B2Math.clamp(C,-box2D.common.B2Settings.b2_maxLinearCorrection,box2D.common.B2Settings.b2_maxLinearCorrection);
	var impulse = -this.m_mass * C;
	this.m_u.set(dX,dY);
	var PX = impulse * this.m_u.x;
	var PY = impulse * this.m_u.y;
	bA.m_sweep.c.x -= bA.m_invMass * PX;
	bA.m_sweep.c.y -= bA.m_invMass * PY;
	bA.m_sweep.a -= bA.m_invI * (r1X * PY - r1Y * PX);
	bB.m_sweep.c.x += bB.m_invMass * PX;
	bB.m_sweep.c.y += bB.m_invMass * PY;
	bB.m_sweep.a += bB.m_invI * (r2X * PY - r2Y * PX);
	bA.synchronizeTransform();
	bB.synchronizeTransform();
	return box2D.common.math.B2Math.abs(C) < box2D.common.B2Settings.b2_linearSlop;
}
box2D.dynamics.joints.B2DistanceJoint.prototype.m_localAnchor1 = null;
box2D.dynamics.joints.B2DistanceJoint.prototype.m_localAnchor2 = null;
box2D.dynamics.joints.B2DistanceJoint.prototype.m_u = null;
box2D.dynamics.joints.B2DistanceJoint.prototype.m_frequencyHz = null;
box2D.dynamics.joints.B2DistanceJoint.prototype.m_dampingRatio = null;
box2D.dynamics.joints.B2DistanceJoint.prototype.m_gamma = null;
box2D.dynamics.joints.B2DistanceJoint.prototype.m_bias = null;
box2D.dynamics.joints.B2DistanceJoint.prototype.m_impulse = null;
box2D.dynamics.joints.B2DistanceJoint.prototype.m_mass = null;
box2D.dynamics.joints.B2DistanceJoint.prototype.m_length = null;
box2D.dynamics.joints.B2DistanceJoint.prototype.__class__ = box2D.dynamics.joints.B2DistanceJoint;
jeash.display.BlendMode = { __ename__ : ["jeash","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
jeash.display.BlendMode.ADD = ["ADD",0];
jeash.display.BlendMode.ADD.toString = $estr;
jeash.display.BlendMode.ADD.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.ALPHA = ["ALPHA",1];
jeash.display.BlendMode.ALPHA.toString = $estr;
jeash.display.BlendMode.ALPHA.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.DARKEN = ["DARKEN",2];
jeash.display.BlendMode.DARKEN.toString = $estr;
jeash.display.BlendMode.DARKEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
jeash.display.BlendMode.DIFFERENCE.toString = $estr;
jeash.display.BlendMode.DIFFERENCE.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.ERASE = ["ERASE",4];
jeash.display.BlendMode.ERASE.toString = $estr;
jeash.display.BlendMode.ERASE.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
jeash.display.BlendMode.HARDLIGHT.toString = $estr;
jeash.display.BlendMode.HARDLIGHT.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.INVERT = ["INVERT",6];
jeash.display.BlendMode.INVERT.toString = $estr;
jeash.display.BlendMode.INVERT.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.LAYER = ["LAYER",7];
jeash.display.BlendMode.LAYER.toString = $estr;
jeash.display.BlendMode.LAYER.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
jeash.display.BlendMode.LIGHTEN.toString = $estr;
jeash.display.BlendMode.LIGHTEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
jeash.display.BlendMode.MULTIPLY.toString = $estr;
jeash.display.BlendMode.MULTIPLY.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.NORMAL = ["NORMAL",10];
jeash.display.BlendMode.NORMAL.toString = $estr;
jeash.display.BlendMode.NORMAL.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.OVERLAY = ["OVERLAY",11];
jeash.display.BlendMode.OVERLAY.toString = $estr;
jeash.display.BlendMode.OVERLAY.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.SCREEN = ["SCREEN",12];
jeash.display.BlendMode.SCREEN.toString = $estr;
jeash.display.BlendMode.SCREEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
jeash.display.BlendMode.SUBTRACT.toString = $estr;
jeash.display.BlendMode.SUBTRACT.__enum__ = jeash.display.BlendMode;
box2D.dynamics.joints.B2JointEdge = function(p) {
}
box2D.dynamics.joints.B2JointEdge.__name__ = ["box2D","dynamics","joints","B2JointEdge"];
box2D.dynamics.joints.B2JointEdge.prototype.other = null;
box2D.dynamics.joints.B2JointEdge.prototype.joint = null;
box2D.dynamics.joints.B2JointEdge.prototype.prev = null;
box2D.dynamics.joints.B2JointEdge.prototype.next = null;
box2D.dynamics.joints.B2JointEdge.prototype.__class__ = box2D.dynamics.joints.B2JointEdge;
haxe.io.Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
jeash.geom.Point = function(inX,inY) {
	if( inX === $_ ) return;
	this.x = inX == null?0.0:inX;
	this.y = inY == null?0.0:inY;
}
jeash.geom.Point.__name__ = ["jeash","geom","Point"];
jeash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
jeash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new jeash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
jeash.geom.Point.polar = function(len,angle) {
	return new jeash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
jeash.geom.Point.prototype.x = null;
jeash.geom.Point.prototype.y = null;
jeash.geom.Point.prototype.add = function(v) {
	return new jeash.geom.Point(v.x + this.x,v.y + this.y);
}
jeash.geom.Point.prototype.clone = function() {
	return new jeash.geom.Point(this.x,this.y);
}
jeash.geom.Point.prototype.equals = function(toCompare) {
	return toCompare.x == this.x && toCompare.y == this.y;
}
jeash.geom.Point.prototype.length = null;
jeash.geom.Point.prototype.get_length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}
jeash.geom.Point.prototype.normalize = function(thickness) {
	if(this.x == 0 && this.y == 0) this.x = thickness; else {
		var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
		this.x *= norm;
		this.y *= norm;
	}
}
jeash.geom.Point.prototype.offset = function(dx,dy) {
	this.x += dx;
	this.y += dy;
}
jeash.geom.Point.prototype.subtract = function(v) {
	return new jeash.geom.Point(this.x - v.x,this.y - v.y);
}
jeash.geom.Point.prototype.__class__ = jeash.geom.Point;
jeash.Lib = function(title,width,height) {
	if( title === $_ ) return;
	this.mKilled = false;
	this.mRequestedWidth = width;
	this.mRequestedHeight = height;
	this.mResizePending = false;
	this.__scr = js.Lib.document.getElementById(title);
	if(this.__scr == null) throw "Element with id '" + title + "' not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	this.__scr.appendChild(jeash.Lib.jeashGetCanvas());
}
jeash.Lib.__name__ = ["jeash","Lib"];
jeash.Lib.mMe = null;
jeash.Lib.context = null;
jeash.Lib.current = null;
jeash.Lib.glContext = null;
jeash.Lib.canvas = null;
jeash.Lib.mStage = null;
jeash.Lib.mMainClassRoot = null;
jeash.Lib.mCurrent = null;
jeash.Lib.mRolling = null;
jeash.Lib.mDownObj = null;
jeash.Lib.mMouseX = null;
jeash.Lib.mMouseY = null;
jeash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg); else if(jeash.Lib.mMe.jeashTraceTextField != null) {
		var _g = jeash.Lib.mMe.jeashTraceTextField;
		_g.SetText(_g.GetText() + (arg + "\n"));
	}
}
jeash.Lib.getURL = function(request,target) {
	var document = js.Lib.document;
	var window = js.Lib.window;
	if(target == null || target == "_self") document.open(request.url); else switch(target) {
	case "_blank":
		window.open(request.url);
		break;
	case "_parent":
		window.parent.open(request.url);
		break;
	case "_top":
		window.top.open(request.url);
		break;
	}
}
jeash.Lib.jeashGetCanvas = function() {
	if(jeash.Lib.canvas == null) {
		if(document == null) throw "Document not loaded yet, cannot create root canvas!";
		jeash.Lib.canvas = document.createElement("canvas");
		jeash.Lib.canvas.id = "Root Surface";
		jeash.Lib.context = "2d";
		jeash.Lib.jeashBootstrap();
		jeash.Lib.starttime = haxe.Timer.stamp();
	}
	return jeash.Lib.canvas;
}
jeash.Lib.jeashGetCurrent = function() {
	jeash.Lib.jeashGetCanvas();
	if(jeash.Lib.mMainClassRoot == null) {
		jeash.Lib.mMainClassRoot = new jeash.display.MovieClip();
		jeash.Lib.mCurrent = jeash.Lib.mMainClassRoot;
		jeash.Lib.mCurrent.name = "Root MovieClip";
	}
	return jeash.Lib.mMainClassRoot;
}
jeash.Lib["as"] = function(v,c) {
	return Std["is"](v,c)?v:null;
}
jeash.Lib.starttime = null;
jeash.Lib.getTimer = function() {
	return Std["int"]((haxe.Timer.stamp() - jeash.Lib.starttime) * 1000);
}
jeash.Lib.jeashGetStage = function() {
	jeash.Lib.jeashGetCanvas();
	if(jeash.Lib.mStage == null) {
		var width = jeash.Lib.jeashGetWidth();
		var height = jeash.Lib.jeashGetHeight();
		jeash.Lib.mStage = new jeash.display.Stage(width,height);
		jeash.Lib.mStage.addChild(jeash.Lib.jeashGetCurrent());
	}
	return jeash.Lib.mStage;
}
jeash.Lib.jeashAppendSurface = function(surface,before) {
	if(jeash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		if(before != null) jeash.Lib.mMe.__scr.insertBefore(surface,before); else jeash.Lib.mMe.__scr.appendChild(surface);
	}
}
jeash.Lib.jeashSwapSurface = function(surface1,surface2) {
	var c1 = -1;
	var c2 = -1;
	var swap;
	var _g1 = 0, _g = jeash.Lib.mMe.__scr.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(jeash.Lib.mMe.__scr.childNodes[i] == surface1) c1 = i; else if(jeash.Lib.mMe.__scr.childNodes[i] == surface2) c2 = i;
	}
	if(c1 != -1 && c2 != -1) {
		swap = jeash.Lib.mMe.__scr.removeChild(jeash.Lib.mMe.__scr.childNodes[c1]);
		if(c2 > c1) c2--;
		if(c2 < jeash.Lib.mMe.__scr.childNodes.length - 1) jeash.Lib.mMe.__scr.insertBefore(swap,jeash.Lib.mMe.__scr.childNodes[c2++]); else jeash.Lib.mMe.__scr.appendChild(swap);
		swap = jeash.Lib.mMe.__scr.removeChild(jeash.Lib.mMe.__scr.childNodes[c2]);
		if(c1 > c2) c1--;
		if(c1 < jeash.Lib.mMe.__scr.childNodes.length - 1) jeash.Lib.mMe.__scr.insertBefore(swap,jeash.Lib.mMe.__scr.childNodes[c1++]); else jeash.Lib.mMe.__scr.appendChild(swap);
	}
}
jeash.Lib.jeashIsOnStage = function(surface) {
	var _g1 = 0, _g = jeash.Lib.mMe.__scr.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(jeash.Lib.mMe.__scr.childNodes[i] == surface) return true;
	}
	return false;
}
jeash.Lib.jeashRemoveSurface = function(surface) {
	if(jeash.Lib.mMe.__scr != null) jeash.Lib.mMe.__scr.removeChild(surface);
}
jeash.Lib.jeashSetSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
	} else {
		surface.style.setProperty("-moz-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + "px, " + matrix.ty.toFixed(4) + "px)","");
		surface.style.setProperty("-webkit-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + ", " + matrix.ty.toFixed(4) + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + ", " + matrix.ty.toFixed(4) + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + ", " + matrix.ty.toFixed(4) + ")","");
	}
}
jeash.Lib.jeashSetSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
jeash.Lib.jeashSetSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
jeash.Lib.jeashSetSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
jeash.Lib.jeashSetSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
jeash.Lib.jeashAppendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Lib.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
jeash.Lib.jeashSetTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
}
jeash.Lib.jeashSetSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
jeash.Lib.jeashSurfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
jeash.Lib.jeashCopyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
jeash.Lib.jeashDrawToSurface = function(surface,tgt,matrix,alpha) {
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	if(alpha != 1.0) tgtCtx.globalAlpha = alpha;
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			tgtCtx.drawImage(surface,0,0);
			tgtCtx.restore();
		} else tgtCtx.drawImage(surface,0,0);
	}
}
jeash.Lib.jeashDisableRightClick = function() {
	if(jeash.Lib.mMe != null) try {
		jeash.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		jeash.Lib.trace("Disable right click not supported in this browser.");
	}
}
jeash.Lib.jeashEnableRightClick = function() {
	if(jeash.Lib.mMe != null) try {
		jeash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
	}
}
jeash.Lib.jeashEnableFullScreen = function() {
	if(jeash.Lib.mMe != null) {
		var origWidth = jeash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = jeash.Lib.mMe.__scr.style.getPropertyValue("height");
		jeash.Lib.mMe.__scr.style.setProperty("width","100%","");
		jeash.Lib.mMe.__scr.style.setProperty("height","100%","");
		jeash.Lib.jeashDisableFullScreen = function() {
			jeash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			jeash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
jeash.Lib.jeashDisableFullScreen = function() {
}
jeash.Lib.jeashFullScreenWidth = function() {
	var window = js.Lib.window;
	return window.innerWidth;
}
jeash.Lib.jeashFullScreenHeight = function() {
	var window = js.Lib.window;
	return window.innerHeight;
}
jeash.Lib.jeashSetCursor = function(hand) {
	if(jeash.Lib.mMe != null) {
		if(hand) jeash.Lib.mMe.__scr.style.setProperty("cursor","pointer",""); else jeash.Lib.mMe.__scr.style.setProperty("cursor","default","");
	}
}
jeash.Lib.jeashSetSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
jeash.Lib.jeashSetSurfaceId = function(surface,name) {
	surface.id = name;
}
jeash.Lib.jeashDrawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
}
jeash.Lib.jeashSetSurfaceScale = function(surface,scale) {
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
}
jeash.Lib.jeashSetSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
}
jeash.Lib.Run = function(tgt,width,height) {
	jeash.Lib.mMe = new jeash.Lib(tgt.id,width,height);
	jeash.Lib.jeashGetCanvas().width = width;
	jeash.Lib.jeashGetCanvas().height = height;
	if(!StringTools.startsWith(jeash.Lib.context,"swf")) {
		var _g1 = 0, _g = tgt.attributes.length;
		while(_g1 < _g) {
			var i = _g1++;
			var attr = tgt.attributes.item(i);
			if(StringTools.startsWith(attr.name,"data-")) switch(attr.name) {
			case "data-" + "framerate":
				jeash.Lib.jeashGetStage().jeashSetFrameRate(Std.parseFloat(attr.value));
				break;
			default:
			}
		}
		var _g = 0, _g1 = ["resize","mouseup","mouseover","mouseout","mousemove","mousedown","mousewheel","focus","dblclick","click","blur"];
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			tgt.addEventListener(type,$closure(jeash.Lib.jeashGetStage(),"jeashProcessStageEvent"),true);
		}
		var _g = 0, _g1 = ["keyup","keypress","keydown"];
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			var window = js.Lib.window;
			window.addEventListener(type,$closure(jeash.Lib.jeashGetStage(),"jeashProcessStageEvent"),true);
		}
		jeash.Lib.jeashGetStage().jeashSetBackgroundColour(tgt.style.backgroundColor != null && tgt.style.backgroundColor != ""?jeash.Lib.ParseColor(tgt.style.backgroundColor,function(res,pos,cur) {
			return (function($this) {
				var $r;
				switch(pos) {
				case 0:
					$r = res | cur << 16;
					break;
				case 1:
					$r = res | cur << 8;
					break;
				case 2:
					$r = res | cur;
					break;
				}
				return $r;
			}(this));
		}):16777215);
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().beginFill(jeash.Lib.jeashGetStage().jeashGetBackgroundColour());
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().drawRect(0,0,width,height);
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().jeashSurface.id = "Root MovieClip";
		jeash.Lib.mMe.jeashTraceTextField = new jeash.text.TextField();
		jeash.Lib.mMe.jeashTraceTextField.jeashSetWidth(jeash.Lib.jeashGetStage().jeashGetStageWidth());
		jeash.Lib.mMe.jeashTraceTextField.SetWordWrap(true);
		jeash.Lib.jeashGetCurrent().addChild(jeash.Lib.mMe.jeashTraceTextField);
		jeash.Lib.jeashGetStage().jeashUpdateNextWake();
	}
	return jeash.Lib.mMe;
}
jeash.Lib.ParseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		return col;
	} else throw "Cannot parse color '" + str + "'.";
}
jeash.Lib.jeashGetWidth = function() {
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	return tgt.clientWidth > 0?tgt.clientWidth:500;
}
jeash.Lib.jeashGetHeight = function() {
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	return tgt.clientHeight > 0?tgt.clientHeight:500;
}
jeash.Lib.jeashBootstrap = function() {
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	var lib = jeash.Lib.Run(tgt,jeash.Lib.jeashGetWidth(),jeash.Lib.jeashGetHeight());
	return lib;
}
jeash.Lib.prototype.mKilled = null;
jeash.Lib.prototype.mRequestedWidth = null;
jeash.Lib.prototype.mRequestedHeight = null;
jeash.Lib.prototype.mResizePending = null;
jeash.Lib.prototype.__scr = null;
jeash.Lib.prototype.mArgs = null;
jeash.Lib.prototype.jeashTraceTextField = null;
jeash.Lib.prototype.__class__ = jeash.Lib;
haxe.io.Eof = function(p) {
}
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype.toString = function() {
	return "Eof";
}
haxe.io.Eof.prototype.__class__ = haxe.io.Eof;
box2D.dynamics.joints.B2PulleyJointDef = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.joints.B2JointDef.call(this);
	this.groundAnchorA = new box2D.common.math.B2Vec2();
	this.groundAnchorB = new box2D.common.math.B2Vec2();
	this.localAnchorA = new box2D.common.math.B2Vec2();
	this.localAnchorB = new box2D.common.math.B2Vec2();
	this.type = box2D.dynamics.joints.B2Joint.e_pulleyJoint;
	this.groundAnchorA.set(-1.0,1.0);
	this.groundAnchorB.set(1.0,1.0);
	this.localAnchorA.set(-1.0,0.0);
	this.localAnchorB.set(1.0,0.0);
	this.lengthA = 0.0;
	this.maxLengthA = 0.0;
	this.lengthB = 0.0;
	this.maxLengthB = 0.0;
	this.ratio = 1.0;
	this.collideConnected = true;
}
box2D.dynamics.joints.B2PulleyJointDef.__name__ = ["box2D","dynamics","joints","B2PulleyJointDef"];
box2D.dynamics.joints.B2PulleyJointDef.__super__ = box2D.dynamics.joints.B2JointDef;
for(var k in box2D.dynamics.joints.B2JointDef.prototype ) box2D.dynamics.joints.B2PulleyJointDef.prototype[k] = box2D.dynamics.joints.B2JointDef.prototype[k];
box2D.dynamics.joints.B2PulleyJointDef.prototype.initialize = function(bA,bB,gaA,gaB,anchorA,anchorB,r) {
	this.bodyA = bA;
	this.bodyB = bB;
	this.groundAnchorA.setV(gaA);
	this.groundAnchorB.setV(gaB);
	this.localAnchorA = this.bodyA.getLocalPoint(anchorA);
	this.localAnchorB = this.bodyB.getLocalPoint(anchorB);
	var d1X = anchorA.x - gaA.x;
	var d1Y = anchorA.y - gaA.y;
	this.lengthA = Math.sqrt(d1X * d1X + d1Y * d1Y);
	var d2X = anchorB.x - gaB.x;
	var d2Y = anchorB.y - gaB.y;
	this.lengthB = Math.sqrt(d2X * d2X + d2Y * d2Y);
	this.ratio = r;
	var C = this.lengthA + this.ratio * this.lengthB;
	this.maxLengthA = C - this.ratio * box2D.dynamics.joints.B2PulleyJoint.b2_minPulleyLength;
	this.maxLengthB = (C - box2D.dynamics.joints.B2PulleyJoint.b2_minPulleyLength) / this.ratio;
}
box2D.dynamics.joints.B2PulleyJointDef.prototype.groundAnchorA = null;
box2D.dynamics.joints.B2PulleyJointDef.prototype.groundAnchorB = null;
box2D.dynamics.joints.B2PulleyJointDef.prototype.localAnchorA = null;
box2D.dynamics.joints.B2PulleyJointDef.prototype.localAnchorB = null;
box2D.dynamics.joints.B2PulleyJointDef.prototype.lengthA = null;
box2D.dynamics.joints.B2PulleyJointDef.prototype.maxLengthA = null;
box2D.dynamics.joints.B2PulleyJointDef.prototype.lengthB = null;
box2D.dynamics.joints.B2PulleyJointDef.prototype.maxLengthB = null;
box2D.dynamics.joints.B2PulleyJointDef.prototype.ratio = null;
box2D.dynamics.joints.B2PulleyJointDef.prototype.__class__ = box2D.dynamics.joints.B2PulleyJointDef;
jeash.text.TextFieldAutoSize = function(p) {
}
jeash.text.TextFieldAutoSize.__name__ = ["jeash","text","TextFieldAutoSize"];
jeash.text.TextFieldAutoSize.prototype.__class__ = jeash.text.TextFieldAutoSize;
box2D.collision.B2ManifoldPoint = function(p) {
	if( p === $_ ) return;
	this.m_localPoint = new box2D.common.math.B2Vec2();
	this.m_id = new box2D.collision.B2ContactID();
	this.reset();
}
box2D.collision.B2ManifoldPoint.__name__ = ["box2D","collision","B2ManifoldPoint"];
box2D.collision.B2ManifoldPoint.prototype.reset = function() {
	this.m_localPoint.setZero();
	this.m_normalImpulse = 0.0;
	this.m_tangentImpulse = 0.0;
	this.m_id.setKey(0);
}
box2D.collision.B2ManifoldPoint.prototype.set = function(m) {
	this.m_localPoint.setV(m.m_localPoint);
	this.m_normalImpulse = m.m_normalImpulse;
	this.m_tangentImpulse = m.m_tangentImpulse;
	this.m_id.set(m.m_id);
}
box2D.collision.B2ManifoldPoint.prototype.m_localPoint = null;
box2D.collision.B2ManifoldPoint.prototype.m_normalImpulse = null;
box2D.collision.B2ManifoldPoint.prototype.m_tangentImpulse = null;
box2D.collision.B2ManifoldPoint.prototype.m_id = null;
box2D.collision.B2ManifoldPoint.prototype.__class__ = box2D.collision.B2ManifoldPoint;
jeash.display.IGraphicsStroke = function() { }
jeash.display.IGraphicsStroke.__name__ = ["jeash","display","IGraphicsStroke"];
jeash.display.IGraphicsStroke.prototype.__class__ = jeash.display.IGraphicsStroke;
jeash.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if( thickness === $_ ) return;
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.STROKE;
}
jeash.display.GraphicsStroke.__name__ = ["jeash","display","GraphicsStroke"];
jeash.display.GraphicsStroke.prototype.caps = null;
jeash.display.GraphicsStroke.prototype.fill = null;
jeash.display.GraphicsStroke.prototype.joints = null;
jeash.display.GraphicsStroke.prototype.miterLimit = null;
jeash.display.GraphicsStroke.prototype.pixelHinting = null;
jeash.display.GraphicsStroke.prototype.scaleMode = null;
jeash.display.GraphicsStroke.prototype.thickness = null;
jeash.display.GraphicsStroke.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsStroke.prototype.__class__ = jeash.display.GraphicsStroke;
jeash.display.GraphicsStroke.__interfaces__ = [jeash.display.IGraphicsStroke,jeash.display.IGraphicsData];
box2D.dynamics.joints.B2GearJoint = function(def) {
	if( def === $_ ) return;
	box2D.dynamics.joints.B2Joint.call(this,def);
	this.m_groundAnchor1 = new box2D.common.math.B2Vec2();
	this.m_groundAnchor2 = new box2D.common.math.B2Vec2();
	this.m_localAnchor1 = new box2D.common.math.B2Vec2();
	this.m_localAnchor2 = new box2D.common.math.B2Vec2();
	this.m_J = new box2D.dynamics.joints.B2Jacobian();
	var type1 = def.joint1.m_type;
	var type2 = def.joint2.m_type;
	this.m_revolute1 = null;
	this.m_prismatic1 = null;
	this.m_revolute2 = null;
	this.m_prismatic2 = null;
	var coordinate1;
	var coordinate2;
	this.m_ground1 = def.joint1.getBodyA();
	this.m_bodyA = def.joint1.getBodyB();
	if(type1 == box2D.dynamics.joints.B2Joint.e_revoluteJoint) {
		this.m_revolute1 = (function($this) {
			var $r;
			var $t = def.joint1;
			if(Std["is"]($t,box2D.dynamics.joints.B2RevoluteJoint)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		this.m_groundAnchor1.setV(this.m_revolute1.m_localAnchor1);
		this.m_localAnchor1.setV(this.m_revolute1.m_localAnchor2);
		coordinate1 = this.m_revolute1.getJointAngle();
	} else {
		this.m_prismatic1 = (function($this) {
			var $r;
			var $t = def.joint1;
			if(Std["is"]($t,box2D.dynamics.joints.B2PrismaticJoint)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		this.m_groundAnchor1.setV(this.m_prismatic1.m_localAnchor1);
		this.m_localAnchor1.setV(this.m_prismatic1.m_localAnchor2);
		coordinate1 = this.m_prismatic1.getJointTranslation();
	}
	this.m_ground2 = def.joint2.getBodyA();
	this.m_bodyB = def.joint2.getBodyB();
	if(type2 == box2D.dynamics.joints.B2Joint.e_revoluteJoint) {
		this.m_revolute2 = (function($this) {
			var $r;
			var $t = def.joint2;
			if(Std["is"]($t,box2D.dynamics.joints.B2RevoluteJoint)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		this.m_groundAnchor2.setV(this.m_revolute2.m_localAnchor1);
		this.m_localAnchor2.setV(this.m_revolute2.m_localAnchor2);
		coordinate2 = this.m_revolute2.getJointAngle();
	} else {
		this.m_prismatic2 = (function($this) {
			var $r;
			var $t = def.joint2;
			if(Std["is"]($t,box2D.dynamics.joints.B2PrismaticJoint)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		this.m_groundAnchor2.setV(this.m_prismatic2.m_localAnchor1);
		this.m_localAnchor2.setV(this.m_prismatic2.m_localAnchor2);
		coordinate2 = this.m_prismatic2.getJointTranslation();
	}
	this.m_ratio = def.ratio;
	this.m_constant = coordinate1 + this.m_ratio * coordinate2;
	this.m_impulse = 0.0;
}
box2D.dynamics.joints.B2GearJoint.__name__ = ["box2D","dynamics","joints","B2GearJoint"];
box2D.dynamics.joints.B2GearJoint.__super__ = box2D.dynamics.joints.B2Joint;
for(var k in box2D.dynamics.joints.B2Joint.prototype ) box2D.dynamics.joints.B2GearJoint.prototype[k] = box2D.dynamics.joints.B2Joint.prototype[k];
box2D.dynamics.joints.B2GearJoint.prototype.getAnchorA = function() {
	return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
}
box2D.dynamics.joints.B2GearJoint.prototype.getAnchorB = function() {
	return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
}
box2D.dynamics.joints.B2GearJoint.prototype.getReactionForce = function(inv_dt) {
	return new box2D.common.math.B2Vec2(inv_dt * this.m_impulse * this.m_J.linearB.x,inv_dt * this.m_impulse * this.m_J.linearB.y);
}
box2D.dynamics.joints.B2GearJoint.prototype.getReactionTorque = function(inv_dt) {
	var tMat = this.m_bodyB.m_xf.R;
	var rX = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x;
	var rY = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y;
	var tX = tMat.col1.x * rX + tMat.col2.x * rY;
	rY = tMat.col1.y * rX + tMat.col2.y * rY;
	rX = tX;
	var PX = this.m_impulse * this.m_J.linearB.x;
	var PY = this.m_impulse * this.m_J.linearB.y;
	return inv_dt * (this.m_impulse * this.m_J.angularB - rX * PY + rY * PX);
}
box2D.dynamics.joints.B2GearJoint.prototype.getRatio = function() {
	return this.m_ratio;
}
box2D.dynamics.joints.B2GearJoint.prototype.setRatio = function(ratio) {
	this.m_ratio = ratio;
}
box2D.dynamics.joints.B2GearJoint.prototype.initVelocityConstraints = function(step) {
	var g1 = this.m_ground1;
	var g2 = this.m_ground2;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var ugX;
	var ugY;
	var rX;
	var rY;
	var tMat;
	var tVec;
	var crug;
	var tX;
	var K = 0.0;
	this.m_J.setZero();
	if(this.m_revolute1 != null) {
		this.m_J.angularA = -1.0;
		K += bA.m_invI;
	} else {
		tMat = g1.m_xf.R;
		tVec = this.m_prismatic1.m_localXAxis1;
		ugX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		ugY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		tMat = bA.m_xf.R;
		rX = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		rY = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		tX = tMat.col1.x * rX + tMat.col2.x * rY;
		rY = tMat.col1.y * rX + tMat.col2.y * rY;
		rX = tX;
		crug = rX * ugY - rY * ugX;
		this.m_J.linearA.set(-ugX,-ugY);
		this.m_J.angularA = -crug;
		K += bA.m_invMass + bA.m_invI * crug * crug;
	}
	if(this.m_revolute2 != null) {
		this.m_J.angularB = -this.m_ratio;
		K += this.m_ratio * this.m_ratio * bB.m_invI;
	} else {
		tMat = g2.m_xf.R;
		tVec = this.m_prismatic2.m_localXAxis1;
		ugX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		ugY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		tMat = bB.m_xf.R;
		rX = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		rY = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = tMat.col1.x * rX + tMat.col2.x * rY;
		rY = tMat.col1.y * rX + tMat.col2.y * rY;
		rX = tX;
		crug = rX * ugY - rY * ugX;
		this.m_J.linearB.set(-this.m_ratio * ugX,-this.m_ratio * ugY);
		this.m_J.angularB = -this.m_ratio * crug;
		K += this.m_ratio * this.m_ratio * (bB.m_invMass + bB.m_invI * crug * crug);
	}
	this.m_mass = K > 0.0?1.0 / K:0.0;
	if(step.warmStarting) {
		bA.m_linearVelocity.x += bA.m_invMass * this.m_impulse * this.m_J.linearA.x;
		bA.m_linearVelocity.y += bA.m_invMass * this.m_impulse * this.m_J.linearA.y;
		bA.m_angularVelocity += bA.m_invI * this.m_impulse * this.m_J.angularA;
		bB.m_linearVelocity.x += bB.m_invMass * this.m_impulse * this.m_J.linearB.x;
		bB.m_linearVelocity.y += bB.m_invMass * this.m_impulse * this.m_J.linearB.y;
		bB.m_angularVelocity += bB.m_invI * this.m_impulse * this.m_J.angularB;
	} else this.m_impulse = 0.0;
}
box2D.dynamics.joints.B2GearJoint.prototype.solveVelocityConstraints = function(step) {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var Cdot = this.m_J.compute(bA.m_linearVelocity,bA.m_angularVelocity,bB.m_linearVelocity,bB.m_angularVelocity);
	var impulse = -this.m_mass * Cdot;
	this.m_impulse += impulse;
	bA.m_linearVelocity.x += bA.m_invMass * impulse * this.m_J.linearA.x;
	bA.m_linearVelocity.y += bA.m_invMass * impulse * this.m_J.linearA.y;
	bA.m_angularVelocity += bA.m_invI * impulse * this.m_J.angularA;
	bB.m_linearVelocity.x += bB.m_invMass * impulse * this.m_J.linearB.x;
	bB.m_linearVelocity.y += bB.m_invMass * impulse * this.m_J.linearB.y;
	bB.m_angularVelocity += bB.m_invI * impulse * this.m_J.angularB;
}
box2D.dynamics.joints.B2GearJoint.prototype.solvePositionConstraints = function(baumgarte) {
	var linearError = 0.0;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var coordinate1;
	var coordinate2;
	if(this.m_revolute1 != null) coordinate1 = this.m_revolute1.getJointAngle(); else coordinate1 = this.m_prismatic1.getJointTranslation();
	if(this.m_revolute2 != null) coordinate2 = this.m_revolute2.getJointAngle(); else coordinate2 = this.m_prismatic2.getJointTranslation();
	var C = this.m_constant - (coordinate1 + this.m_ratio * coordinate2);
	var impulse = -this.m_mass * C;
	bA.m_sweep.c.x += bA.m_invMass * impulse * this.m_J.linearA.x;
	bA.m_sweep.c.y += bA.m_invMass * impulse * this.m_J.linearA.y;
	bA.m_sweep.a += bA.m_invI * impulse * this.m_J.angularA;
	bB.m_sweep.c.x += bB.m_invMass * impulse * this.m_J.linearB.x;
	bB.m_sweep.c.y += bB.m_invMass * impulse * this.m_J.linearB.y;
	bB.m_sweep.a += bB.m_invI * impulse * this.m_J.angularB;
	bA.synchronizeTransform();
	bB.synchronizeTransform();
	return linearError < box2D.common.B2Settings.b2_linearSlop;
}
box2D.dynamics.joints.B2GearJoint.prototype.m_ground1 = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_ground2 = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_revolute1 = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_prismatic1 = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_revolute2 = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_prismatic2 = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_groundAnchor1 = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_groundAnchor2 = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_localAnchor1 = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_localAnchor2 = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_J = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_constant = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_ratio = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_mass = null;
box2D.dynamics.joints.B2GearJoint.prototype.m_impulse = null;
box2D.dynamics.joints.B2GearJoint.prototype.__class__ = box2D.dynamics.joints.B2GearJoint;
jeash.display.Shape = function(p) {
	if( p === $_ ) return;
	jeash.Lib.jeashGetCanvas();
	this.jeashGraphics = new jeash.display.Graphics();
	if(this.jeashGraphics != null) this.jeashGraphics.owner = this;
	jeash.display.DisplayObject.call(this);
	this.name = "Shape " + jeash.display.DisplayObject.mNameID++;
}
jeash.display.Shape.__name__ = ["jeash","display","Shape"];
jeash.display.Shape.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.Shape.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.Shape.prototype.jeashGraphics = null;
jeash.display.Shape.prototype.graphics = null;
jeash.display.Shape.prototype.jeashGetGraphics = function() {
	return this.jeashGraphics;
}
jeash.display.Shape.prototype.jeashGetObjectUnderPoint = function(point) {
	return null;
}
jeash.display.Shape.prototype.__class__ = jeash.display.Shape;
if(!jeash.utils) jeash.utils = {}
jeash.utils.ByteArray = function(p) {
	if( p === $_ ) return;
	this.position = 0;
	this.data = [];
	this.TWOeN23 = Math.pow(2,-23);
	this.pow = Math.pow;
	this.LN2 = Math.log(2);
	this.abs = Math.abs;
	this.log = Math.log;
	this.floor = Math.floor;
	this.bigEndian = false;
}
jeash.utils.ByteArray.__name__ = ["jeash","utils","ByteArray"];
jeash.utils.ByteArray.prototype.data = null;
jeash.utils.ByteArray.prototype.bigEndian = null;
jeash.utils.ByteArray.prototype.bytesAvailable = null;
jeash.utils.ByteArray.prototype.endian = null;
jeash.utils.ByteArray.prototype.objectEncoding = null;
jeash.utils.ByteArray.prototype.position = null;
jeash.utils.ByteArray.prototype.length = null;
jeash.utils.ByteArray.prototype.TWOeN23 = null;
jeash.utils.ByteArray.prototype.pow = null;
jeash.utils.ByteArray.prototype.LN2 = null;
jeash.utils.ByteArray.prototype.abs = null;
jeash.utils.ByteArray.prototype.log = null;
jeash.utils.ByteArray.prototype.floor = null;
jeash.utils.ByteArray.prototype.GetBytesAvailable = function() {
	return this.GetLength() - this.position;
}
jeash.utils.ByteArray.prototype.readString = function(len) {
	var bytes = haxe.io.Bytes.alloc(len);
	this.readFullBytes(bytes,0,len);
	return bytes.toString();
}
jeash.utils.ByteArray.prototype.readFullBytes = function(bytes,pos,len) {
	var _g1 = pos, _g = pos + len;
	while(_g1 < _g) {
		var i = _g1++;
		this.data[this.position++] = bytes.b[i];
	}
}
jeash.utils.ByteArray.prototype.read = function(nbytes) {
	var s = new jeash.utils.ByteArray();
	this.readBytes(s,0,nbytes);
	return haxe.io.Bytes.ofData(s.data);
}
jeash.utils.ByteArray.prototype.GetLength = function() {
	return this.data.length;
}
jeash.utils.ByteArray.prototype.readByte = function() {
	if(this.position >= this.GetLength()) throw new jeash.errors.IOError("Read error - Out of bounds");
	return this.data[this.position++];
}
jeash.utils.ByteArray.prototype.readBytes = function(bytes,offset,length) {
	if(offset < 0 || length < 0 || offset + length > this.data.length) throw new jeash.errors.IOError("Read error - Out of bounds");
	if(this.data.length == 0 && length > 0) throw new jeash.errors.IOError("Read error - Out of bounds");
	if(this.data.length < length) length = this.data.length;
	var b1 = this.data;
	var b2 = bytes;
	b2.position = offset;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		b2.writeByte(b1[this.position + i]);
	}
	b2.position = offset;
	this.position += length;
}
jeash.utils.ByteArray.prototype.writeByte = function(value) {
	this.data[this.position++] = value;
}
jeash.utils.ByteArray.prototype.writeBytes = function(bytes,offset,length) {
	if(offset < 0 || length < 0 || offset + length > bytes.GetLength()) throw new jeash.errors.IOError("Write error - Out of bounds");
	var b2 = bytes;
	b2.position = offset;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		this.data[this.position++] = b2.readByte();
	}
}
jeash.utils.ByteArray.prototype.readBoolean = function() {
	return this.readByte() == 1?true:false;
}
jeash.utils.ByteArray.prototype.writeBoolean = function(value) {
	this.writeByte(value?1:0);
}
jeash.utils.ByteArray.prototype.readDouble = function() {
	var data = this.data, pos, b1, b2, b3, b4, b5, b6, b7, b8;
	if(this.bigEndian) {
		pos = (this.position += 8) - 8;
		b1 = data[pos] & 255;
		b2 = data[++pos] & 255;
		b3 = data[++pos] & 255;
		b4 = data[++pos] & 255;
		b5 = data[++pos] & 255;
		b6 = data[++pos] & 255;
		b7 = data[++pos] & 255;
		b8 = data[++pos] & 255;
	} else {
		pos = this.position += 8;
		b1 = data[--pos] & 255;
		b2 = data[--pos] & 255;
		b3 = data[--pos] & 255;
		b4 = data[--pos] & 255;
		b5 = data[--pos] & 255;
		b6 = data[--pos] & 255;
		b7 = data[--pos] & 255;
		b8 = data[--pos] & 255;
	}
	var sign = 1 - (b1 >> 7 << 1);
	var exp = (b1 << 4 & 2047 | b2 >> 4) - 1023;
	var sig = parseInt((((b2 & 15) << 16 | b3 << 8 | b4) * this.pow(2,32)).toString(2),2) + parseInt(((b5 >> 7) * this.pow(2,31)).toString(2),2) + parseInt(((b5 & 127) << 24 | b6 << 16 | b7 << 8 | b8).toString(2),2);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + this.pow(2,-52) * sig) * this.pow(2,exp);
}
jeash.utils.ByteArray.prototype.writeDouble = function(x) {
	if(x == 0.0) {
		var _g = 0;
		while(_g < 8) {
			var _ = _g++;
			this.data[this.position++] = 0;
		}
	}
	var exp = this.floor(this.log(this.abs(x)) / this.LN2);
	var sig = this.floor(this.abs(x) / this.pow(2,exp) * this.pow(2,52));
	var sig_h = sig & 34359738367;
	var sig_l = this.floor(sig / this.pow(2,32));
	var b1 = exp + 1023 >> 4 | (exp > 0?x < 0?128:64:x < 0?128:0), b2 = exp + 1023 << 4 & 255 | sig_l >> 16 & 15, b3 = sig_l >> 8 & 255, b4 = sig_l & 255, b5 = sig_h >> 24 & 255, b6 = sig_h >> 16 & 255, b7 = sig_h >> 8 & 255, b8 = sig_h & 255;
	if(this.bigEndian) {
		this.data[this.position++] = b1;
		this.data[this.position++] = b2;
		this.data[this.position++] = b3;
		this.data[this.position++] = b4;
		this.data[this.position++] = b5;
		this.data[this.position++] = b6;
		this.data[this.position++] = b7;
		this.data[this.position++] = b8;
	} else {
		this.data[this.position++] = b8;
		this.data[this.position++] = b7;
		this.data[this.position++] = b6;
		this.data[this.position++] = b5;
		this.data[this.position++] = b4;
		this.data[this.position++] = b3;
		this.data[this.position++] = b2;
		this.data[this.position++] = b1;
	}
}
jeash.utils.ByteArray.prototype.readFloat = function() {
	var data = this.data, pos, b1, b2, b3, b4;
	if(this.bigEndian) {
		pos = (this.position += 4) - 4;
		b1 = data[pos] & 255;
		b2 = data[++pos] & 255;
		b3 = data[++pos] & 255;
		b4 = data[++pos] & 255;
	} else {
		pos = this.position += 4;
		b1 = data[--pos] & 255;
		b2 = data[--pos] & 255;
		b3 = data[--pos] & 255;
		b4 = data[--pos] & 255;
	}
	var sign = 1 - (b1 >> 7 << 1);
	var exp = (b1 << 1 & 255 | b2 >> 7) - 127;
	var sig = (b2 & 127) << 16 | b3 << 8 | b4;
	if(sig == 0 && exp == -127) return 0.0;
	return sign * (1 + this.TWOeN23 * sig) * this.pow(2,exp);
}
jeash.utils.ByteArray.prototype.writeFloat = function(x) {
	if(x == 0.0) {
		var _g = 0;
		while(_g < 4) {
			var _ = _g++;
			this.data[this.position++] = 0;
		}
	}
	var exp = this.floor(this.log(this.abs(x)) / this.LN2);
	var sig = this.floor(this.abs(x) / this.pow(2,exp) * this.pow(2,23)) & 8388607;
	var b1 = exp + 127 >> 1 | (exp > 0?x < 0?128:64:x < 0?128:0), b2 = exp + 127 << 7 & 255 | sig >> 16 & 127, b3 = sig >> 8 & 255, b4 = sig & 255;
	if(this.bigEndian) {
		this.data[this.position++] = b1;
		this.data[this.position++] = b2;
		this.data[this.position++] = b3;
		this.data[this.position++] = b4;
	} else {
		this.data[this.position++] = b4;
		this.data[this.position++] = b3;
		this.data[this.position++] = b2;
		this.data[this.position++] = b1;
	}
}
jeash.utils.ByteArray.prototype.readInt = function() {
	var ch1, ch2, ch3, ch4;
	if(this.bigEndian) {
		ch4 = this.readByte();
		ch3 = this.readByte();
		ch2 = this.readByte();
		ch1 = this.readByte();
	} else {
		ch1 = this.readByte();
		ch2 = this.readByte();
		ch3 = this.readByte();
		ch4 = this.readByte();
	}
	return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
}
jeash.utils.ByteArray.prototype.writeInt = function(value) {
	if(this.bigEndian) {
		this.writeByte(value >>> 24);
		this.writeByte(value >> 16 & 255);
		this.writeByte(value >> 8 & 255);
		this.writeByte(value & 255);
	} else {
		this.writeByte(value & 255);
		this.writeByte(value >> 8 & 255);
		this.writeByte(value >> 16 & 255);
		this.writeByte(value >>> 24);
	}
}
jeash.utils.ByteArray.prototype.readShort = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	if((n & 32768) != 0) return n - 65536;
	return n;
}
jeash.utils.ByteArray.prototype.writeShort = function(value) {
	if(value < -32768 || value >= 32768) throw new jeash.errors.IOError("Write error - overflow");
	this.writeUnsignedShort(value & 65535);
}
jeash.utils.ByteArray.prototype.writeUnsignedShort = function(value) {
	if(value < 0 || value >= 65536) throw new jeash.errors.IOError("Write error - overflow");
	if(this.__GetEndian() == jeash.utils.Endian.BIG_ENDIAN) {
		this.writeByte(value >> 8);
		this.writeByte(value & 255);
	} else {
		this.writeByte(value & 255);
		this.writeByte(value >> 8);
	}
}
jeash.utils.ByteArray.prototype.readUTF = function() {
	var len = this.readShort();
	var bytes = haxe.io.Bytes.ofData(this.data);
	return bytes.readString(2,len);
}
jeash.utils.ByteArray.prototype.writeUTF = function(value) {
	var bytes = haxe.io.Bytes.ofString(value);
	this.writeShort(bytes.length);
	var _g1 = 0, _g = bytes.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.data[this.position++] = bytes.b[i];
	}
}
jeash.utils.ByteArray.prototype.writeUTFBytes = function(value) {
	var bytes = haxe.io.Bytes.ofString(value);
	var _g1 = 0, _g = bytes.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.data[this.position++] = bytes.b[i];
	}
}
jeash.utils.ByteArray.prototype.readUTFBytes = function(len) {
	var bytes = haxe.io.Bytes.ofData(this.data);
	return bytes.readString(0,len);
}
jeash.utils.ByteArray.prototype.readUnsignedByte = function() {
	return this.readByte();
}
jeash.utils.ByteArray.prototype.readUnsignedShort = function() {
	return this.readShort();
}
jeash.utils.ByteArray.prototype.readUnsignedInt = function() {
	return this.readInt();
}
jeash.utils.ByteArray.prototype.writeUnsignedInt = function(value) {
	this.writeInt(value);
}
jeash.utils.ByteArray.prototype.__GetEndian = function() {
	if(this.bigEndian == true) return jeash.utils.Endian.BIG_ENDIAN; else return jeash.utils.Endian.LITTLE_ENDIAN;
}
jeash.utils.ByteArray.prototype.__SetEndian = function(endian) {
	if(endian == jeash.utils.Endian.BIG_ENDIAN) this.bigEndian = true; else this.bigEndian = false;
	return endian;
}
jeash.utils.ByteArray.prototype.__class__ = jeash.utils.ByteArray;
if(!jeash.net) jeash.net = {}
jeash.net.URLRequest = function(inURL) {
	if( inURL === $_ ) return;
	if(inURL != null) this.url = inURL;
}
jeash.net.URLRequest.__name__ = ["jeash","net","URLRequest"];
jeash.net.URLRequest.prototype.url = null;
jeash.net.URLRequest.prototype.__class__ = jeash.net.URLRequest;
jeash.media.Sound = function(stream,context) {
	if( stream === $_ ) return;
	jeash.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	this.jeashSoundChannels = new IntHash();
	this.jeashSoundIdx = 0;
	if(stream != null) this.load(stream,context);
}
jeash.media.Sound.__name__ = ["jeash","media","Sound"];
jeash.media.Sound.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.media.Sound.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.media.Sound.jeashCanPlayType = function(extension) {
	var audio = js.Lib.document.createElement("audio");
	var playable = function(ok) {
		if(ok != "" && ok != "no") return true; else return false;
	};
	switch(extension) {
	case "mp3":
		return playable(audio.canPlayType("audio/mpeg"));
	case "ogg":
		return playable(audio.canPlayType("audio/ogg; codecs=\"vorbis\""));
	case "wav":
		return playable(audio.canPlayType("audio/wav; codecs=\"1\""));
	case "aac":
		return playable(audio.canPlayType("audio/mp4; codecs=\"mp4a.40.2\""));
	default:
		return false;
	}
}
jeash.media.Sound.prototype.bytesLoaded = null;
jeash.media.Sound.prototype.bytesTotal = null;
jeash.media.Sound.prototype.id3 = null;
jeash.media.Sound.prototype.isBuffering = null;
jeash.media.Sound.prototype.length = null;
jeash.media.Sound.prototype.url = null;
jeash.media.Sound.prototype.jeashStreamUrl = null;
jeash.media.Sound.prototype.jeashSoundChannels = null;
jeash.media.Sound.prototype.jeashSoundIdx = null;
jeash.media.Sound.prototype.jeashSoundCache = null;
jeash.media.Sound.prototype.jeashCreateAudio = function() {
}
jeash.media.Sound.prototype.close = function() {
}
jeash.media.Sound.prototype.load = function(stream,context) {
	var url = stream.url.split("?");
	var extension = url[0].substr(url[0].lastIndexOf(".") + 1);
	if(!jeash.media.Sound.jeashCanPlayType(extension.toLowerCase())) jeash.Lib.trace("Warning: '" + stream.url + "' may not play on this browser.");
	this.jeashStreamUrl = stream.url;
	this.jeashSoundCache = new jeash.net.URLLoader(stream);
}
jeash.media.Sound.prototype.play = function(startTime,loops,sndTransform) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	if(this.jeashStreamUrl == null) return null;
	var self = this;
	var curIdx = this.jeashSoundIdx;
	var removeRef = function() {
		self.jeashSoundChannels.remove(curIdx);
	};
	var channel = jeash.media.SoundChannel.jeashCreate(this.jeashStreamUrl,startTime,loops,sndTransform,removeRef);
	this.jeashSoundChannels.set(curIdx,channel);
	this.jeashSoundIdx++;
	var audio = channel.jeashAudio;
	this.jeashAddEventListeners(audio);
	return channel;
}
jeash.media.Sound.prototype.jeashAddEventListeners = function(audio) {
	audio.addEventListener("canplay",$closure(this,"__onSoundLoaded"),false);
	audio.addEventListener("error",$closure(this,"__onSoundLoadError"),false);
	audio.addEventListener("abort",$closure(this,"__onSoundLoadError"),false);
}
jeash.media.Sound.prototype.jeashRemoveEventListeners = function(audio) {
	audio.removeEventListener("canplay",$closure(this,"__onSoundLoaded"),false);
	audio.removeEventListener("error",$closure(this,"__onSoundLoadError"),false);
	audio.removeEventListener("abort",$closure(this,"__onSoundLoadError"),false);
}
jeash.media.Sound.prototype.__onSoundLoaded = function(evt) {
	var audio = evt.target;
	this.jeashRemoveEventListeners(audio);
	var evt1 = new jeash.events.Event(jeash.events.Event.COMPLETE);
	this.dispatchEvent(evt1);
}
jeash.media.Sound.prototype.__onSoundLoadError = function(evt) {
	var audio = evt.target;
	this.jeashRemoveEventListeners(audio);
	jeash.Lib.trace("Error loading sound '" + audio.src + "'");
	var evt1 = new jeash.events.IOErrorEvent(jeash.events.IOErrorEvent.IO_ERROR);
	this.dispatchEvent(evt1);
}
jeash.media.Sound.prototype.__class__ = jeash.media.Sound;
box2D.collision.B2Collision = function() { }
box2D.collision.B2Collision.__name__ = ["box2D","collision","B2Collision"];
box2D.collision.B2Collision.clipSegmentToLine = function(vOut,vIn,normal,offset) {
	var cv;
	var numOut = 0;
	cv = vIn[0];
	var vIn0 = cv.v;
	cv = vIn[1];
	var vIn1 = cv.v;
	var distance0 = normal.x * vIn0.x + normal.y * vIn0.y - offset;
	var distance1 = normal.x * vIn1.x + normal.y * vIn1.y - offset;
	if(distance0 <= 0.0) vOut[numOut++].set(vIn[0]);
	if(distance1 <= 0.0) vOut[numOut++].set(vIn[1]);
	if(distance0 * distance1 < 0.0) {
		var interp = distance0 / (distance0 - distance1);
		cv = vOut[numOut];
		var tVec = cv.v;
		tVec.x = vIn0.x + interp * (vIn1.x - vIn0.x);
		tVec.y = vIn0.y + interp * (vIn1.y - vIn0.y);
		cv = vOut[numOut];
		var cv2;
		if(distance0 > 0.0) {
			cv2 = vIn[0];
			cv.id = cv2.id;
		} else {
			cv2 = vIn[1];
			cv.id = cv2.id;
		}
		++numOut;
	}
	return numOut;
}
box2D.collision.B2Collision.edgeSeparation = function(poly1,xf1,edge1,poly2,xf2) {
	var count1 = poly1.m_vertexCount;
	var vertices1 = poly1.m_vertices;
	var normals1 = poly1.m_normals;
	var count2 = poly2.m_vertexCount;
	var vertices2 = poly2.m_vertices;
	var tMat;
	var tVec;
	tMat = xf1.R;
	tVec = normals1[edge1];
	var normal1WorldX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
	var normal1WorldY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
	tMat = xf2.R;
	var normal1X = tMat.col1.x * normal1WorldX + tMat.col1.y * normal1WorldY;
	var normal1Y = tMat.col2.x * normal1WorldX + tMat.col2.y * normal1WorldY;
	var index = 0;
	var minDot = Number.MAX_VALUE;
	var _g = 0;
	while(_g < count2) {
		var i = _g++;
		tVec = vertices2[i];
		var dot = tVec.x * normal1X + tVec.y * normal1Y;
		if(dot < minDot) {
			minDot = dot;
			index = i;
		}
	}
	tVec = vertices1[edge1];
	tMat = xf1.R;
	var v1X = xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	var v1Y = xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	tVec = vertices2[index];
	tMat = xf2.R;
	var v2X = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	var v2Y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	v2X -= v1X;
	v2Y -= v1Y;
	var separation = v2X * normal1WorldX + v2Y * normal1WorldY;
	return separation;
}
box2D.collision.B2Collision.findMaxSeparation = function(edgeIndex,poly1,xf1,poly2,xf2) {
	var count1 = poly1.m_vertexCount;
	var normals1 = poly1.m_normals;
	var tVec;
	var tMat;
	tMat = xf2.R;
	tVec = poly2.m_centroid;
	var dX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	var dY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	tMat = xf1.R;
	tVec = poly1.m_centroid;
	dX -= xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	dY -= xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	var dLocal1X = dX * xf1.R.col1.x + dY * xf1.R.col1.y;
	var dLocal1Y = dX * xf1.R.col2.x + dY * xf1.R.col2.y;
	var edge = 0;
	var maxDot = -Number.MAX_VALUE;
	var _g = 0;
	while(_g < count1) {
		var i = _g++;
		tVec = normals1[i];
		var dot = tVec.x * dLocal1X + tVec.y * dLocal1Y;
		if(dot > maxDot) {
			maxDot = dot;
			edge = i;
		}
	}
	var s = box2D.collision.B2Collision.edgeSeparation(poly1,xf1,edge,poly2,xf2);
	var prevEdge = edge - 1 >= 0?edge - 1:count1 - 1;
	var sPrev = box2D.collision.B2Collision.edgeSeparation(poly1,xf1,prevEdge,poly2,xf2);
	var nextEdge = edge + 1 < count1?edge + 1:0;
	var sNext = box2D.collision.B2Collision.edgeSeparation(poly1,xf1,nextEdge,poly2,xf2);
	var bestEdge;
	var bestSeparation;
	var increment;
	if(sPrev > s && sPrev > sNext) {
		increment = -1;
		bestEdge = prevEdge;
		bestSeparation = sPrev;
	} else if(sNext > s) {
		increment = 1;
		bestEdge = nextEdge;
		bestSeparation = sNext;
	} else {
		edgeIndex[0] = edge;
		return s;
	}
	while(true) {
		if(increment == -1) edge = bestEdge - 1 >= 0?bestEdge - 1:count1 - 1; else edge = bestEdge + 1 < count1?bestEdge + 1:0;
		s = box2D.collision.B2Collision.edgeSeparation(poly1,xf1,edge,poly2,xf2);
		if(s > bestSeparation) {
			bestEdge = edge;
			bestSeparation = s;
		} else break;
	}
	edgeIndex[0] = bestEdge;
	return bestSeparation;
}
box2D.collision.B2Collision.findIncidentEdge = function(c,poly1,xf1,edge1,poly2,xf2) {
	var count1 = poly1.m_vertexCount;
	var normals1 = poly1.m_normals;
	var count2 = poly2.m_vertexCount;
	var vertices2 = poly2.m_vertices;
	var normals2 = poly2.m_normals;
	var tMat;
	var tVec;
	tMat = xf1.R;
	tVec = normals1[edge1];
	var normal1X = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
	var normal1Y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
	tMat = xf2.R;
	var tX = tMat.col1.x * normal1X + tMat.col1.y * normal1Y;
	normal1Y = tMat.col2.x * normal1X + tMat.col2.y * normal1Y;
	normal1X = tX;
	var index = 0;
	var minDot = Number.MAX_VALUE;
	var _g = 0;
	while(_g < count2) {
		var i = _g++;
		tVec = normals2[i];
		var dot = normal1X * tVec.x + normal1Y * tVec.y;
		if(dot < minDot) {
			minDot = dot;
			index = i;
		}
	}
	var tClip;
	var i1 = index;
	var i2 = i1 + 1 < count2?i1 + 1:0;
	tClip = c[0];
	tVec = vertices2[i1];
	tMat = xf2.R;
	tClip.v.x = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	tClip.id.features.setReferenceEdge(edge1);
	tClip.id.features.setIncidentEdge(i1);
	tClip.id.features.setIncidentVertex(0);
	tClip = c[1];
	tVec = vertices2[i2];
	tMat = xf2.R;
	tClip.v.x = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	tClip.id.features.setReferenceEdge(edge1);
	tClip.id.features.setIncidentEdge(i2);
	tClip.id.features.setIncidentVertex(1);
}
box2D.collision.B2Collision.makeClipPointVector = function() {
	var r = new Array();
	r[0] = new box2D.collision.ClipVertex();
	r[1] = new box2D.collision.ClipVertex();
	return r;
}
box2D.collision.B2Collision.collidePolygons = function(manifold,polyA,xfA,polyB,xfB) {
	var cv;
	manifold.m_pointCount = 0;
	var totalRadius = polyA.m_radius + polyB.m_radius;
	var edgeA = 0;
	box2D.collision.B2Collision.s_edgeAO[0] = edgeA;
	var separationA = box2D.collision.B2Collision.findMaxSeparation(box2D.collision.B2Collision.s_edgeAO,polyA,xfA,polyB,xfB);
	edgeA = box2D.collision.B2Collision.s_edgeAO[0];
	if(separationA > totalRadius) return;
	var edgeB = 0;
	box2D.collision.B2Collision.s_edgeBO[0] = edgeB;
	var separationB = box2D.collision.B2Collision.findMaxSeparation(box2D.collision.B2Collision.s_edgeBO,polyB,xfB,polyA,xfA);
	edgeB = box2D.collision.B2Collision.s_edgeBO[0];
	if(separationB > totalRadius) return;
	var poly1;
	var poly2;
	var xf1;
	var xf2;
	var edge1;
	var flip;
	var k_relativeTol = 0.98;
	var k_absoluteTol = 0.001;
	var tMat;
	if(separationB > k_relativeTol * separationA + k_absoluteTol) {
		poly1 = polyB;
		poly2 = polyA;
		xf1 = xfB;
		xf2 = xfA;
		edge1 = edgeB;
		manifold.m_type = box2D.collision.B2Manifold.e_faceB;
		flip = 1;
	} else {
		poly1 = polyA;
		poly2 = polyB;
		xf1 = xfA;
		xf2 = xfB;
		edge1 = edgeA;
		manifold.m_type = box2D.collision.B2Manifold.e_faceA;
		flip = 0;
	}
	var incidentEdge = box2D.collision.B2Collision.s_incidentEdge;
	box2D.collision.B2Collision.findIncidentEdge(incidentEdge,poly1,xf1,edge1,poly2,xf2);
	var count1 = poly1.m_vertexCount;
	var vertices1 = poly1.m_vertices;
	var local_v11 = vertices1[edge1];
	var local_v12;
	if(edge1 + 1 < count1) local_v12 = vertices1[Std["int"](edge1 + 1)]; else local_v12 = vertices1[0];
	var localTangent = box2D.collision.B2Collision.s_localTangent;
	localTangent.set(local_v12.x - local_v11.x,local_v12.y - local_v11.y);
	localTangent.normalize();
	var localNormal = box2D.collision.B2Collision.s_localNormal;
	localNormal.x = localTangent.y;
	localNormal.y = -localTangent.x;
	var planePoint = box2D.collision.B2Collision.s_planePoint;
	planePoint.set(0.5 * (local_v11.x + local_v12.x),0.5 * (local_v11.y + local_v12.y));
	var tangent = box2D.collision.B2Collision.s_tangent;
	tMat = xf1.R;
	tangent.x = tMat.col1.x * localTangent.x + tMat.col2.x * localTangent.y;
	tangent.y = tMat.col1.y * localTangent.x + tMat.col2.y * localTangent.y;
	var tangent2 = box2D.collision.B2Collision.s_tangent2;
	tangent2.x = -tangent.x;
	tangent2.y = -tangent.y;
	var normal = box2D.collision.B2Collision.s_normal;
	normal.x = tangent.y;
	normal.y = -tangent.x;
	var v11 = box2D.collision.B2Collision.s_v11;
	var v12 = box2D.collision.B2Collision.s_v12;
	v11.x = xf1.position.x + (tMat.col1.x * local_v11.x + tMat.col2.x * local_v11.y);
	v11.y = xf1.position.y + (tMat.col1.y * local_v11.x + tMat.col2.y * local_v11.y);
	v12.x = xf1.position.x + (tMat.col1.x * local_v12.x + tMat.col2.x * local_v12.y);
	v12.y = xf1.position.y + (tMat.col1.y * local_v12.x + tMat.col2.y * local_v12.y);
	var frontOffset = normal.x * v11.x + normal.y * v11.y;
	var sideOffset1 = -tangent.x * v11.x - tangent.y * v11.y + totalRadius;
	var sideOffset2 = tangent.x * v12.x + tangent.y * v12.y + totalRadius;
	var clipPoints1 = box2D.collision.B2Collision.s_clipPoints1;
	var clipPoints2 = box2D.collision.B2Collision.s_clipPoints2;
	var np;
	np = box2D.collision.B2Collision.clipSegmentToLine(clipPoints1,incidentEdge,tangent2,sideOffset1);
	if(np < 2) return;
	np = box2D.collision.B2Collision.clipSegmentToLine(clipPoints2,clipPoints1,tangent,sideOffset2);
	if(np < 2) return;
	manifold.m_localPlaneNormal.setV(localNormal);
	manifold.m_localPoint.setV(planePoint);
	var pointCount = 0;
	var _g1 = 0, _g = box2D.common.B2Settings.b2_maxManifoldPoints;
	while(_g1 < _g) {
		var i = _g1++;
		cv = clipPoints2[i];
		var separation = normal.x * cv.v.x + normal.y * cv.v.y - frontOffset;
		if(separation <= totalRadius) {
			var cp = manifold.m_points[pointCount];
			tMat = xf2.R;
			var tX = cv.v.x - xf2.position.x;
			var tY = cv.v.y - xf2.position.y;
			cp.m_localPoint.x = tX * tMat.col1.x + tY * tMat.col1.y;
			cp.m_localPoint.y = tX * tMat.col2.x + tY * tMat.col2.y;
			cp.m_id.set(cv.id);
			cp.m_id.features.setFlip(flip);
			++pointCount;
		}
	}
	manifold.m_pointCount = pointCount;
}
box2D.collision.B2Collision.collideCircles = function(manifold,circle1,xf1,circle2,xf2) {
	manifold.m_pointCount = 0;
	var tMat;
	var tVec;
	tMat = xf1.R;
	tVec = circle1.m_p;
	var p1X = xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	var p1Y = xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	tMat = xf2.R;
	tVec = circle2.m_p;
	var p2X = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	var p2Y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	var dX = p2X - p1X;
	var dY = p2Y - p1Y;
	var distSqr = dX * dX + dY * dY;
	var radius = circle1.m_radius + circle2.m_radius;
	if(distSqr > radius * radius) return;
	manifold.m_type = box2D.collision.B2Manifold.e_circles;
	manifold.m_localPoint.setV(circle1.m_p);
	manifold.m_localPlaneNormal.setZero();
	manifold.m_pointCount = 1;
	manifold.m_points[0].m_localPoint.setV(circle2.m_p);
	manifold.m_points[0].m_id.setKey(0);
}
box2D.collision.B2Collision.collidePolygonAndCircle = function(manifold,polygon,xf1,circle,xf2) {
	manifold.m_pointCount = 0;
	var tPoint;
	var dX;
	var dY;
	var positionX;
	var positionY;
	var tVec;
	var tMat;
	tMat = xf2.R;
	tVec = circle.m_p;
	var cX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	var cY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	dX = cX - xf1.position.x;
	dY = cY - xf1.position.y;
	tMat = xf1.R;
	var cLocalX = dX * tMat.col1.x + dY * tMat.col1.y;
	var cLocalY = dX * tMat.col2.x + dY * tMat.col2.y;
	var dist;
	var normalIndex = 0;
	var separation = -Number.MAX_VALUE;
	var radius = polygon.m_radius + circle.m_radius;
	var vertexCount = polygon.m_vertexCount;
	var vertices = polygon.m_vertices;
	var normals = polygon.m_normals;
	var _g = 0;
	while(_g < vertexCount) {
		var i = _g++;
		tVec = vertices[i];
		dX = cLocalX - tVec.x;
		dY = cLocalY - tVec.y;
		tVec = normals[i];
		var s = tVec.x * dX + tVec.y * dY;
		if(s > radius) return;
		if(s > separation) {
			separation = s;
			normalIndex = i;
		}
	}
	var vertIndex1 = normalIndex;
	var vertIndex2 = vertIndex1 + 1 < vertexCount?vertIndex1 + 1:0;
	var v1 = vertices[vertIndex1];
	var v2 = vertices[vertIndex2];
	if(separation < Number.MIN_VALUE) {
		manifold.m_pointCount = 1;
		manifold.m_type = box2D.collision.B2Manifold.e_faceA;
		manifold.m_localPlaneNormal.setV(normals[normalIndex]);
		manifold.m_localPoint.x = 0.5 * (v1.x + v2.x);
		manifold.m_localPoint.y = 0.5 * (v1.y + v2.y);
		manifold.m_points[0].m_localPoint.setV(circle.m_p);
		manifold.m_points[0].m_id.setKey(0);
		return;
	}
	var u1 = (cLocalX - v1.x) * (v2.x - v1.x) + (cLocalY - v1.y) * (v2.y - v1.y);
	var u2 = (cLocalX - v2.x) * (v1.x - v2.x) + (cLocalY - v2.y) * (v1.y - v2.y);
	if(u1 <= 0.0) {
		if((cLocalX - v1.x) * (cLocalX - v1.x) + (cLocalY - v1.y) * (cLocalY - v1.y) > radius * radius) return;
		manifold.m_pointCount = 1;
		manifold.m_type = box2D.collision.B2Manifold.e_faceA;
		manifold.m_localPlaneNormal.x = cLocalX - v1.x;
		manifold.m_localPlaneNormal.y = cLocalY - v1.y;
		manifold.m_localPlaneNormal.normalize();
		manifold.m_localPoint.setV(v1);
		manifold.m_points[0].m_localPoint.setV(circle.m_p);
		manifold.m_points[0].m_id.setKey(0);
	} else if(u2 <= 0) {
		if((cLocalX - v2.x) * (cLocalX - v2.x) + (cLocalY - v2.y) * (cLocalY - v2.y) > radius * radius) return;
		manifold.m_pointCount = 1;
		manifold.m_type = box2D.collision.B2Manifold.e_faceA;
		manifold.m_localPlaneNormal.x = cLocalX - v2.x;
		manifold.m_localPlaneNormal.y = cLocalY - v2.y;
		manifold.m_localPlaneNormal.normalize();
		manifold.m_localPoint.setV(v2);
		manifold.m_points[0].m_localPoint.setV(circle.m_p);
		manifold.m_points[0].m_id.setKey(0);
	} else {
		var faceCenterX = 0.5 * (v1.x + v2.x);
		var faceCenterY = 0.5 * (v1.y + v2.y);
		separation = (cLocalX - faceCenterX) * normals[vertIndex1].x + (cLocalY - faceCenterY) * normals[vertIndex1].y;
		if(separation > radius) return;
		manifold.m_pointCount = 1;
		manifold.m_type = box2D.collision.B2Manifold.e_faceA;
		manifold.m_localPlaneNormal.x = normals[vertIndex1].x;
		manifold.m_localPlaneNormal.y = normals[vertIndex1].y;
		manifold.m_localPlaneNormal.normalize();
		manifold.m_localPoint.set(faceCenterX,faceCenterY);
		manifold.m_points[0].m_localPoint.setV(circle.m_p);
		manifold.m_points[0].m_id.setKey(0);
	}
}
box2D.collision.B2Collision.testOverlap = function(a,b) {
	var t1 = b.lowerBound;
	var t2 = a.upperBound;
	var d1X = t1.x - t2.x;
	var d1Y = t1.y - t2.y;
	t1 = a.lowerBound;
	t2 = b.upperBound;
	var d2X = t1.x - t2.x;
	var d2Y = t1.y - t2.y;
	if(d1X > 0.0 || d1Y > 0.0) return false;
	if(d2X > 0.0 || d2Y > 0.0) return false;
	return true;
}
box2D.collision.B2Collision.prototype.__class__ = box2D.collision.B2Collision;
if(typeof fr=='undefined') fr = {}
if(!fr.aymericlamboley) fr.aymericlamboley = {}
if(!fr.aymericlamboley.test) fr.aymericlamboley.test = {}
fr.aymericlamboley.test.GameState = function(p) {
	if( p === $_ ) return;
	com.citruxengine.core.State.call(this);
}
fr.aymericlamboley.test.GameState.__name__ = ["fr","aymericlamboley","test","GameState"];
fr.aymericlamboley.test.GameState.__super__ = com.citruxengine.core.State;
for(var k in com.citruxengine.core.State.prototype ) fr.aymericlamboley.test.GameState.prototype[k] = com.citruxengine.core.State.prototype[k];
fr.aymericlamboley.test.GameState.prototype.initialize = function() {
	com.citruxengine.core.State.prototype.initialize.call(this);
	var box2d = new com.citruxengine.physics.Box2D("Box2D");
	box2d.setVisible(true);
	this.add(box2d);
	var citruxObject = new com.citruxengine.objects.PhysicsObject("monCitruxObject",{ x : 100, y : 20, width : 30, height : 30});
	this.add(citruxObject);
	var platformBot = new com.citruxengine.objects.platformer.Platform("platformBot",{ x : 260, y : 450, width : 500, height : 30});
	this.add(platformBot);
}
fr.aymericlamboley.test.GameState.prototype.__class__ = fr.aymericlamboley.test.GameState;
jeash.geom.Transform = function(inParent) {
	if( inParent === $_ ) return;
	this.mObj = inParent;
}
jeash.geom.Transform.__name__ = ["jeash","geom","Transform"];
jeash.geom.Transform.prototype.colorTransform = null;
jeash.geom.Transform.prototype.matrix = null;
jeash.geom.Transform.prototype.pixelBounds = null;
jeash.geom.Transform.prototype.mObj = null;
jeash.geom.Transform.prototype.jeashGetMatrix = function() {
	return this.mObj.jeashGetMatrix();
}
jeash.geom.Transform.prototype.jeashSetMatrix = function(inMatrix) {
	return this.mObj.jeashSetMatrix(inMatrix);
}
jeash.geom.Transform.prototype.GetPixelBounds = function() {
	return this.mObj.getBounds(jeash.Lib.jeashGetStage());
}
jeash.geom.Transform.prototype.GetColorTransform = function() {
	return new jeash.geom.ColorTransform();
}
jeash.geom.Transform.prototype.SetColorTransform = function(inColorTransform) {
	return inColorTransform;
}
jeash.geom.Transform.prototype.__class__ = jeash.geom.Transform;
box2D.dynamics.joints.B2WeldJointDef = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.joints.B2JointDef.call(this);
	this.localAnchorA = new box2D.common.math.B2Vec2();
	this.localAnchorB = new box2D.common.math.B2Vec2();
	this.type = box2D.dynamics.joints.B2Joint.e_weldJoint;
	this.referenceAngle = 0.0;
}
box2D.dynamics.joints.B2WeldJointDef.__name__ = ["box2D","dynamics","joints","B2WeldJointDef"];
box2D.dynamics.joints.B2WeldJointDef.__super__ = box2D.dynamics.joints.B2JointDef;
for(var k in box2D.dynamics.joints.B2JointDef.prototype ) box2D.dynamics.joints.B2WeldJointDef.prototype[k] = box2D.dynamics.joints.B2JointDef.prototype[k];
box2D.dynamics.joints.B2WeldJointDef.prototype.initialize = function(bA,bB,anchor) {
	this.bodyA = bA;
	this.bodyB = bB;
	this.localAnchorA.setV(this.bodyA.getLocalPoint(anchor));
	this.localAnchorB.setV(this.bodyB.getLocalPoint(anchor));
	this.referenceAngle = this.bodyB.getAngle() - this.bodyA.getAngle();
}
box2D.dynamics.joints.B2WeldJointDef.prototype.localAnchorA = null;
box2D.dynamics.joints.B2WeldJointDef.prototype.localAnchorB = null;
box2D.dynamics.joints.B2WeldJointDef.prototype.referenceAngle = null;
box2D.dynamics.joints.B2WeldJointDef.prototype.__class__ = box2D.dynamics.joints.B2WeldJointDef;
jeash.display.StageDisplayState = { __ename__ : ["jeash","display","StageDisplayState"], __constructs__ : ["FULL_SCREEN","NORMAL"] }
jeash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",0];
jeash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
jeash.display.StageDisplayState.FULL_SCREEN.__enum__ = jeash.display.StageDisplayState;
jeash.display.StageDisplayState.NORMAL = ["NORMAL",1];
jeash.display.StageDisplayState.NORMAL.toString = $estr;
jeash.display.StageDisplayState.NORMAL.__enum__ = jeash.display.StageDisplayState;
List = function(p) {
	if( p === $_ ) return;
	this.length = 0;
}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x; else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.first = function() {
	return this.h == null?null:this.h[0];
}
List.prototype.last = function() {
	return this.q == null?null:this.q[0];
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.isEmpty = function() {
	return this.h == null;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1]; else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return this.h != null;
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}};
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{" == null?"null":"{";
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = ", " == null?"null":", ";
		s.add(Std.string(l[0]));
		l = l[1];
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = sep == null?"null":sep;
		s.add(l[0]);
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.__class__ = List;
box2D.dynamics.joints.B2PrismaticJoint = function(def) {
	if( def === $_ ) return;
	box2D.dynamics.joints.B2Joint.call(this,def);
	this.m_localAnchor1 = new box2D.common.math.B2Vec2();
	this.m_localAnchor2 = new box2D.common.math.B2Vec2();
	this.m_localXAxis1 = new box2D.common.math.B2Vec2();
	this.m_localYAxis1 = new box2D.common.math.B2Vec2();
	this.m_axis = new box2D.common.math.B2Vec2();
	this.m_perp = new box2D.common.math.B2Vec2();
	this.m_K = new box2D.common.math.B2Mat33();
	this.m_impulse = new box2D.common.math.B2Vec3();
	var tMat;
	var tX;
	var tY;
	this.m_localAnchor1.setV(def.localAnchorA);
	this.m_localAnchor2.setV(def.localAnchorB);
	this.m_localXAxis1.setV(def.localAxisA);
	this.m_localYAxis1.x = -this.m_localXAxis1.y;
	this.m_localYAxis1.y = this.m_localXAxis1.x;
	this.m_refAngle = def.referenceAngle;
	this.m_impulse.setZero();
	this.m_motorMass = 0.0;
	this.m_motorImpulse = 0.0;
	this.m_lowerTranslation = def.lowerTranslation;
	this.m_upperTranslation = def.upperTranslation;
	this.m_maxMotorForce = def.maxMotorForce;
	this.m_motorSpeed = def.motorSpeed;
	this.m_enableLimit = def.enableLimit;
	this.m_enableMotor = def.enableMotor;
	this.m_limitState = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
	this.m_axis.setZero();
	this.m_perp.setZero();
}
box2D.dynamics.joints.B2PrismaticJoint.__name__ = ["box2D","dynamics","joints","B2PrismaticJoint"];
box2D.dynamics.joints.B2PrismaticJoint.__super__ = box2D.dynamics.joints.B2Joint;
for(var k in box2D.dynamics.joints.B2Joint.prototype ) box2D.dynamics.joints.B2PrismaticJoint.prototype[k] = box2D.dynamics.joints.B2Joint.prototype[k];
box2D.dynamics.joints.B2PrismaticJoint.prototype.getAnchorA = function() {
	return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.getAnchorB = function() {
	return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.getReactionForce = function(inv_dt) {
	return new box2D.common.math.B2Vec2(inv_dt * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x),inv_dt * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y));
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.getReactionTorque = function(inv_dt) {
	return inv_dt * this.m_impulse.y;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.getJointTranslation = function() {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var tMat;
	var p1 = bA.getWorldPoint(this.m_localAnchor1);
	var p2 = bB.getWorldPoint(this.m_localAnchor2);
	var dX = p2.x - p1.x;
	var dY = p2.y - p1.y;
	var axis = bA.getWorldVector(this.m_localXAxis1);
	var translation = axis.x * dX + axis.y * dY;
	return translation;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.getJointSpeed = function() {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var tMat;
	tMat = bA.m_xf.R;
	var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
	var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
	var tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = bB.m_xf.R;
	var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
	var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var p1X = bA.m_sweep.c.x + r1X;
	var p1Y = bA.m_sweep.c.y + r1Y;
	var p2X = bB.m_sweep.c.x + r2X;
	var p2Y = bB.m_sweep.c.y + r2Y;
	var dX = p2X - p1X;
	var dY = p2Y - p1Y;
	var axis = bA.getWorldVector(this.m_localXAxis1);
	var v1 = bA.m_linearVelocity;
	var v2 = bB.m_linearVelocity;
	var w1 = bA.m_angularVelocity;
	var w2 = bB.m_angularVelocity;
	var speed = dX * (-w1 * axis.y) + dY * (w1 * axis.x) + (axis.x * (v2.x + -w2 * r2Y - v1.x - -w1 * r1Y) + axis.y * (v2.y + w2 * r2X - v1.y - w1 * r1X));
	return speed;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.isLimitEnabled = function() {
	return this.m_enableLimit;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.enableLimit = function(flag) {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	this.m_enableLimit = flag;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.getLowerLimit = function() {
	return this.m_lowerTranslation;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.getUpperLimit = function() {
	return this.m_upperTranslation;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.setLimits = function(lower,upper) {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	this.m_lowerTranslation = lower;
	this.m_upperTranslation = upper;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.isMotorEnabled = function() {
	return this.m_enableMotor;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.enableMotor = function(flag) {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	this.m_enableMotor = flag;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.setMotorSpeed = function(speed) {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	this.m_motorSpeed = speed;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.getMotorSpeed = function() {
	return this.m_motorSpeed;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.setMaxMotorForce = function(force) {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	this.m_maxMotorForce = force;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.getMotorForce = function() {
	return this.m_motorImpulse;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.initVelocityConstraints = function(step) {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var tMat;
	var tX;
	this.m_localCenterA.setV(bA.getLocalCenter());
	this.m_localCenterB.setV(bB.getLocalCenter());
	var xf1 = bA.getTransform();
	var xf2 = bB.getTransform();
	tMat = bA.m_xf.R;
	var r1X = this.m_localAnchor1.x - this.m_localCenterA.x;
	var r1Y = this.m_localAnchor1.y - this.m_localCenterA.y;
	tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = bB.m_xf.R;
	var r2X = this.m_localAnchor2.x - this.m_localCenterB.x;
	var r2Y = this.m_localAnchor2.y - this.m_localCenterB.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var dX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
	var dY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
	this.m_invMassA = bA.m_invMass;
	this.m_invMassB = bB.m_invMass;
	this.m_invIA = bA.m_invI;
	this.m_invIB = bB.m_invI;
	this.m_axis.setV(box2D.common.math.B2Math.mulMV(xf1.R,this.m_localXAxis1));
	this.m_a1 = (dX + r1X) * this.m_axis.y - (dY + r1Y) * this.m_axis.x;
	this.m_a2 = r2X * this.m_axis.y - r2Y * this.m_axis.x;
	this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
	if(this.m_motorMass > Number.MIN_VALUE) this.m_motorMass = 1.0 / this.m_motorMass;
	this.m_perp.setV(box2D.common.math.B2Math.mulMV(xf1.R,this.m_localYAxis1));
	this.m_s1 = (dX + r1X) * this.m_perp.y - (dY + r1Y) * this.m_perp.x;
	this.m_s2 = r2X * this.m_perp.y - r2Y * this.m_perp.x;
	var m1 = this.m_invMassA;
	var m2 = this.m_invMassB;
	var i1 = this.m_invIA;
	var i2 = this.m_invIB;
	this.m_K.col1.x = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
	this.m_K.col1.y = i1 * this.m_s1 + i2 * this.m_s2;
	this.m_K.col1.z = i1 * this.m_s1 * this.m_a1 + i2 * this.m_s2 * this.m_a2;
	this.m_K.col2.x = this.m_K.col1.y;
	this.m_K.col2.y = i1 + i2;
	this.m_K.col2.z = i1 * this.m_a1 + i2 * this.m_a2;
	this.m_K.col3.x = this.m_K.col1.z;
	this.m_K.col3.y = this.m_K.col2.z;
	this.m_K.col3.z = m1 + m2 + i1 * this.m_a1 * this.m_a1 + i2 * this.m_a2 * this.m_a2;
	if(this.m_enableLimit) {
		var jointTransition = this.m_axis.x * dX + this.m_axis.y * dY;
		if(box2D.common.math.B2Math.abs(this.m_upperTranslation - this.m_lowerTranslation) < 2.0 * box2D.common.B2Settings.b2_linearSlop) this.m_limitState = box2D.dynamics.joints.B2Joint.e_equalLimits; else if(jointTransition <= this.m_lowerTranslation) {
			if(this.m_limitState != box2D.dynamics.joints.B2Joint.e_atLowerLimit) {
				this.m_limitState = box2D.dynamics.joints.B2Joint.e_atLowerLimit;
				this.m_impulse.z = 0.0;
			}
		} else if(jointTransition >= this.m_upperTranslation) {
			if(this.m_limitState != box2D.dynamics.joints.B2Joint.e_atUpperLimit) {
				this.m_limitState = box2D.dynamics.joints.B2Joint.e_atUpperLimit;
				this.m_impulse.z = 0.0;
			}
		} else {
			this.m_limitState = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
			this.m_impulse.z = 0.0;
		}
	} else this.m_limitState = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
	if(this.m_enableMotor == false) this.m_motorImpulse = 0.0;
	if(step.warmStarting) {
		this.m_impulse.x *= step.dtRatio;
		this.m_impulse.y *= step.dtRatio;
		this.m_motorImpulse *= step.dtRatio;
		var PX = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x;
		var PY = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y;
		var L1 = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1;
		var L2 = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
		bA.m_linearVelocity.x -= this.m_invMassA * PX;
		bA.m_linearVelocity.y -= this.m_invMassA * PY;
		bA.m_angularVelocity -= this.m_invIA * L1;
		bB.m_linearVelocity.x += this.m_invMassB * PX;
		bB.m_linearVelocity.y += this.m_invMassB * PY;
		bB.m_angularVelocity += this.m_invIB * L2;
	} else {
		this.m_impulse.setZero();
		this.m_motorImpulse = 0.0;
	}
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.solveVelocityConstraints = function(step) {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var v1 = bA.m_linearVelocity;
	var w1 = bA.m_angularVelocity;
	var v2 = bB.m_linearVelocity;
	var w2 = bB.m_angularVelocity;
	var PX;
	var PY;
	var L1;
	var L2;
	if(this.m_enableMotor && this.m_limitState != box2D.dynamics.joints.B2Joint.e_equalLimits) {
		var Cdot = this.m_axis.x * (v2.x - v1.x) + this.m_axis.y * (v2.y - v1.y) + this.m_a2 * w2 - this.m_a1 * w1;
		var impulse = this.m_motorMass * (this.m_motorSpeed - Cdot);
		var oldImpulse = this.m_motorImpulse;
		var maxImpulse = step.dt * this.m_maxMotorForce;
		this.m_motorImpulse = box2D.common.math.B2Math.clamp(this.m_motorImpulse + impulse,-maxImpulse,maxImpulse);
		impulse = this.m_motorImpulse - oldImpulse;
		PX = impulse * this.m_axis.x;
		PY = impulse * this.m_axis.y;
		L1 = impulse * this.m_a1;
		L2 = impulse * this.m_a2;
		v1.x -= this.m_invMassA * PX;
		v1.y -= this.m_invMassA * PY;
		w1 -= this.m_invIA * L1;
		v2.x += this.m_invMassB * PX;
		v2.y += this.m_invMassB * PY;
		w2 += this.m_invIB * L2;
	}
	var Cdot1X = this.m_perp.x * (v2.x - v1.x) + this.m_perp.y * (v2.y - v1.y) + this.m_s2 * w2 - this.m_s1 * w1;
	var Cdot1Y = w2 - w1;
	if(this.m_enableLimit && this.m_limitState != box2D.dynamics.joints.B2Joint.e_inactiveLimit) {
		var Cdot2 = this.m_axis.x * (v2.x - v1.x) + this.m_axis.y * (v2.y - v1.y) + this.m_a2 * w2 - this.m_a1 * w1;
		var f1 = this.m_impulse.copy();
		var df = this.m_K.solve33(new box2D.common.math.B2Vec3(),-Cdot1X,-Cdot1Y,-Cdot2);
		this.m_impulse.add(df);
		if(this.m_limitState == box2D.dynamics.joints.B2Joint.e_atLowerLimit) this.m_impulse.z = box2D.common.math.B2Math.max(this.m_impulse.z,0.0); else if(this.m_limitState == box2D.dynamics.joints.B2Joint.e_atUpperLimit) this.m_impulse.z = box2D.common.math.B2Math.min(this.m_impulse.z,0.0);
		var bX = -Cdot1X - (this.m_impulse.z - f1.z) * this.m_K.col3.x;
		var bY = -Cdot1Y - (this.m_impulse.z - f1.z) * this.m_K.col3.y;
		var f2r = this.m_K.solve22(new box2D.common.math.B2Vec2(),bX,bY);
		f2r.x += f1.x;
		f2r.y += f1.y;
		this.m_impulse.x = f2r.x;
		this.m_impulse.y = f2r.y;
		df.x = this.m_impulse.x - f1.x;
		df.y = this.m_impulse.y - f1.y;
		df.z = this.m_impulse.z - f1.z;
		PX = df.x * this.m_perp.x + df.z * this.m_axis.x;
		PY = df.x * this.m_perp.y + df.z * this.m_axis.y;
		L1 = df.x * this.m_s1 + df.y + df.z * this.m_a1;
		L2 = df.x * this.m_s2 + df.y + df.z * this.m_a2;
		v1.x -= this.m_invMassA * PX;
		v1.y -= this.m_invMassA * PY;
		w1 -= this.m_invIA * L1;
		v2.x += this.m_invMassB * PX;
		v2.y += this.m_invMassB * PY;
		w2 += this.m_invIB * L2;
	} else {
		var df2 = this.m_K.solve22(new box2D.common.math.B2Vec2(),-Cdot1X,-Cdot1Y);
		this.m_impulse.x += df2.x;
		this.m_impulse.y += df2.y;
		PX = df2.x * this.m_perp.x;
		PY = df2.x * this.m_perp.y;
		L1 = df2.x * this.m_s1 + df2.y;
		L2 = df2.x * this.m_s2 + df2.y;
		v1.x -= this.m_invMassA * PX;
		v1.y -= this.m_invMassA * PY;
		w1 -= this.m_invIA * L1;
		v2.x += this.m_invMassB * PX;
		v2.y += this.m_invMassB * PY;
		w2 += this.m_invIB * L2;
	}
	bA.m_linearVelocity.setV(v1);
	bA.m_angularVelocity = w1;
	bB.m_linearVelocity.setV(v2);
	bB.m_angularVelocity = w2;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.solvePositionConstraints = function(baumgarte) {
	var limitC;
	var oldLimitImpulse;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var c1 = bA.m_sweep.c;
	var a1 = bA.m_sweep.a;
	var c2 = bB.m_sweep.c;
	var a2 = bB.m_sweep.a;
	var tMat;
	var tX;
	var m1;
	var m2;
	var i1;
	var i2;
	var linearError = 0.0;
	var angularError = 0.0;
	var active = false;
	var C2 = 0.0;
	var R1 = box2D.common.math.B2Mat22.fromAngle(a1);
	var R2 = box2D.common.math.B2Mat22.fromAngle(a2);
	tMat = R1;
	var r1X = this.m_localAnchor1.x - this.m_localCenterA.x;
	var r1Y = this.m_localAnchor1.y - this.m_localCenterA.y;
	tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = R2;
	var r2X = this.m_localAnchor2.x - this.m_localCenterB.x;
	var r2Y = this.m_localAnchor2.y - this.m_localCenterB.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var dX = c2.x + r2X - c1.x - r1X;
	var dY = c2.y + r2Y - c1.y - r1Y;
	if(this.m_enableLimit) {
		this.m_axis = box2D.common.math.B2Math.mulMV(R1,this.m_localXAxis1);
		this.m_a1 = (dX + r1X) * this.m_axis.y - (dY + r1Y) * this.m_axis.x;
		this.m_a2 = r2X * this.m_axis.y - r2Y * this.m_axis.x;
		var translation = this.m_axis.x * dX + this.m_axis.y * dY;
		if(box2D.common.math.B2Math.abs(this.m_upperTranslation - this.m_lowerTranslation) < 2.0 * box2D.common.B2Settings.b2_linearSlop) {
			C2 = box2D.common.math.B2Math.clamp(translation,-box2D.common.B2Settings.b2_maxLinearCorrection,box2D.common.B2Settings.b2_maxLinearCorrection);
			linearError = box2D.common.math.B2Math.abs(translation);
			active = true;
		} else if(translation <= this.m_lowerTranslation) {
			C2 = box2D.common.math.B2Math.clamp(translation - this.m_lowerTranslation + box2D.common.B2Settings.b2_linearSlop,-box2D.common.B2Settings.b2_maxLinearCorrection,0.0);
			linearError = this.m_lowerTranslation - translation;
			active = true;
		} else if(translation >= this.m_upperTranslation) {
			C2 = box2D.common.math.B2Math.clamp(translation - this.m_upperTranslation + box2D.common.B2Settings.b2_linearSlop,0.0,box2D.common.B2Settings.b2_maxLinearCorrection);
			linearError = translation - this.m_upperTranslation;
			active = true;
		}
	}
	this.m_perp = box2D.common.math.B2Math.mulMV(R1,this.m_localYAxis1);
	this.m_s1 = (dX + r1X) * this.m_perp.y - (dY + r1Y) * this.m_perp.x;
	this.m_s2 = r2X * this.m_perp.y - r2Y * this.m_perp.x;
	var impulse = new box2D.common.math.B2Vec3();
	var C1X = this.m_perp.x * dX + this.m_perp.y * dY;
	var C1Y = a2 - a1 - this.m_refAngle;
	linearError = box2D.common.math.B2Math.max(linearError,box2D.common.math.B2Math.abs(C1X));
	angularError = box2D.common.math.B2Math.abs(C1Y);
	if(active) {
		m1 = this.m_invMassA;
		m2 = this.m_invMassB;
		i1 = this.m_invIA;
		i2 = this.m_invIB;
		this.m_K.col1.x = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
		this.m_K.col1.y = i1 * this.m_s1 + i2 * this.m_s2;
		this.m_K.col1.z = i1 * this.m_s1 * this.m_a1 + i2 * this.m_s2 * this.m_a2;
		this.m_K.col2.x = this.m_K.col1.y;
		this.m_K.col2.y = i1 + i2;
		this.m_K.col2.z = i1 * this.m_a1 + i2 * this.m_a2;
		this.m_K.col3.x = this.m_K.col1.z;
		this.m_K.col3.y = this.m_K.col2.z;
		this.m_K.col3.z = m1 + m2 + i1 * this.m_a1 * this.m_a1 + i2 * this.m_a2 * this.m_a2;
		this.m_K.solve33(impulse,-C1X,-C1Y,-C2);
	} else {
		m1 = this.m_invMassA;
		m2 = this.m_invMassB;
		i1 = this.m_invIA;
		i2 = this.m_invIB;
		var k11 = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
		var k12 = i1 * this.m_s1 + i2 * this.m_s2;
		var k22 = i1 + i2;
		this.m_K.col1.set(k11,k12,0.0);
		this.m_K.col2.set(k12,k22,0.0);
		var impulse1 = this.m_K.solve22(new box2D.common.math.B2Vec2(),-C1X,-C1Y);
		impulse.x = impulse1.x;
		impulse.y = impulse1.y;
		impulse.z = 0.0;
	}
	var PX = impulse.x * this.m_perp.x + impulse.z * this.m_axis.x;
	var PY = impulse.x * this.m_perp.y + impulse.z * this.m_axis.y;
	var L1 = impulse.x * this.m_s1 + impulse.y + impulse.z * this.m_a1;
	var L2 = impulse.x * this.m_s2 + impulse.y + impulse.z * this.m_a2;
	c1.x -= this.m_invMassA * PX;
	c1.y -= this.m_invMassA * PY;
	a1 -= this.m_invIA * L1;
	c2.x += this.m_invMassB * PX;
	c2.y += this.m_invMassB * PY;
	a2 += this.m_invIB * L2;
	bA.m_sweep.a = a1;
	bB.m_sweep.a = a2;
	bA.synchronizeTransform();
	bB.synchronizeTransform();
	return linearError <= box2D.common.B2Settings.b2_linearSlop && angularError <= box2D.common.B2Settings.b2_angularSlop;
}
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_localAnchor1 = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_localAnchor2 = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_localXAxis1 = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_localYAxis1 = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_refAngle = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_axis = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_perp = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_s1 = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_s2 = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_a1 = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_a2 = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_K = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_impulse = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_motorMass = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_motorImpulse = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_lowerTranslation = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_upperTranslation = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_maxMotorForce = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_motorSpeed = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_enableLimit = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_enableMotor = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.m_limitState = null;
box2D.dynamics.joints.B2PrismaticJoint.prototype.__class__ = box2D.dynamics.joints.B2PrismaticJoint;
jeash.display.GraphicsFillType = { __ename__ : ["jeash","display","GraphicsFillType"], __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
jeash.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
jeash.display.GraphicsFillType.SOLID_FILL.toString = $estr;
jeash.display.GraphicsFillType.SOLID_FILL.__enum__ = jeash.display.GraphicsFillType;
jeash.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
jeash.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
jeash.display.GraphicsFillType.GRADIENT_FILL.__enum__ = jeash.display.GraphicsFillType;
IntIter = function(min,max) {
	if( min === $_ ) return;
	this.min = min;
	this.max = max;
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
jeash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if( inRedMultiplier === $_ ) return;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
	this.color = 0;
}
jeash.geom.ColorTransform.__name__ = ["jeash","geom","ColorTransform"];
jeash.geom.ColorTransform.prototype.alphaMultiplier = null;
jeash.geom.ColorTransform.prototype.alphaOffset = null;
jeash.geom.ColorTransform.prototype.blueMultiplier = null;
jeash.geom.ColorTransform.prototype.blueOffset = null;
jeash.geom.ColorTransform.prototype.color = null;
jeash.geom.ColorTransform.prototype.greenMultiplier = null;
jeash.geom.ColorTransform.prototype.greenOffset = null;
jeash.geom.ColorTransform.prototype.redMultiplier = null;
jeash.geom.ColorTransform.prototype.redOffset = null;
jeash.geom.ColorTransform.prototype.concat = function(second) {
	throw "Not implemented";
}
jeash.geom.ColorTransform.prototype.__class__ = jeash.geom.ColorTransform;
jeash.display.StageScaleMode = { __ename__ : ["jeash","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
jeash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
jeash.display.StageScaleMode.SHOW_ALL.toString = $estr;
jeash.display.StageScaleMode.SHOW_ALL.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
jeash.display.StageScaleMode.NO_SCALE.toString = $estr;
jeash.display.StageScaleMode.NO_SCALE.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
jeash.display.StageScaleMode.NO_BORDER.toString = $estr;
jeash.display.StageScaleMode.NO_BORDER.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
jeash.display.StageScaleMode.EXACT_FIT.toString = $estr;
jeash.display.StageScaleMode.EXACT_FIT.__enum__ = jeash.display.StageScaleMode;
box2D.dynamics.B2FixtureDef = function(p) {
	if( p === $_ ) return;
	this.filter = new box2D.dynamics.B2FilterData();
	this.shape = null;
	this.userData = null;
	this.friction = 0.2;
	this.restitution = 0.0;
	this.density = 0.0;
	this.filter.categoryBits = 1;
	this.filter.maskBits = 65535;
	this.filter.groupIndex = 0;
	this.isSensor = false;
}
box2D.dynamics.B2FixtureDef.__name__ = ["box2D","dynamics","B2FixtureDef"];
box2D.dynamics.B2FixtureDef.prototype.shape = null;
box2D.dynamics.B2FixtureDef.prototype.userData = null;
box2D.dynamics.B2FixtureDef.prototype.friction = null;
box2D.dynamics.B2FixtureDef.prototype.restitution = null;
box2D.dynamics.B2FixtureDef.prototype.density = null;
box2D.dynamics.B2FixtureDef.prototype.isSensor = null;
box2D.dynamics.B2FixtureDef.prototype.filter = null;
box2D.dynamics.B2FixtureDef.prototype.__class__ = box2D.dynamics.B2FixtureDef;
if(!jeash.ui) jeash.ui = {}
jeash.ui.Keyboard = function() { }
jeash.ui.Keyboard.__name__ = ["jeash","ui","Keyboard"];
jeash.ui.Keyboard.jeashConvertWebkitCode = function(code) {
	switch(code.toLowerCase()) {
	case "backspace":
		return jeash.ui.Keyboard.BACKSPACE;
	case "tab":
		return jeash.ui.Keyboard.TAB;
	case "enter":
		return jeash.ui.Keyboard.ENTER;
	case "shift":
		return jeash.ui.Keyboard.SHIFT;
	case "control":
		return jeash.ui.Keyboard.CONTROL;
	case "capslock":
		return jeash.ui.Keyboard.CAPS_LOCK;
	case "escape":
		return jeash.ui.Keyboard.ESCAPE;
	case "space":
		return jeash.ui.Keyboard.SPACE;
	case "pageup":
		return jeash.ui.Keyboard.PAGE_UP;
	case "pagedown":
		return jeash.ui.Keyboard.PAGE_DOWN;
	case "end":
		return jeash.ui.Keyboard.END;
	case "home":
		return jeash.ui.Keyboard.HOME;
	case "left":
		return jeash.ui.Keyboard.LEFT;
	case "right":
		return jeash.ui.Keyboard.RIGHT;
	case "up":
		return jeash.ui.Keyboard.UP;
	case "down":
		return jeash.ui.Keyboard.DOWN;
	case "insert":
		return jeash.ui.Keyboard.INSERT;
	case "delete":
		return jeash.ui.Keyboard.DELETE;
	case "numlock":
		return jeash.ui.Keyboard.NUMLOCK;
	case "break":
		return jeash.ui.Keyboard.BREAK;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + code.substr(3));
	throw "Unrecognised key code: " + code;
	return 0;
}
jeash.ui.Keyboard.jeashConvertMozillaCode = function(code) {
	switch(code) {
	case jeash.ui.Keyboard.DOM_VK_BACK_SPACE:
		return jeash.ui.Keyboard.BACKSPACE;
	case jeash.ui.Keyboard.DOM_VK_TAB:
		return jeash.ui.Keyboard.TAB;
	case jeash.ui.Keyboard.DOM_VK_RETURN:
		return jeash.ui.Keyboard.ENTER;
	case jeash.ui.Keyboard.DOM_VK_ENTER:
		return jeash.ui.Keyboard.ENTER;
	case jeash.ui.Keyboard.DOM_VK_SHIFT:
		return jeash.ui.Keyboard.SHIFT;
	case jeash.ui.Keyboard.DOM_VK_CONTROL:
		return jeash.ui.Keyboard.CONTROL;
	case jeash.ui.Keyboard.DOM_VK_CAPS_LOCK:
		return jeash.ui.Keyboard.CAPS_LOCK;
	case jeash.ui.Keyboard.DOM_VK_ESCAPE:
		return jeash.ui.Keyboard.ESCAPE;
	case jeash.ui.Keyboard.DOM_VK_SPACE:
		return jeash.ui.Keyboard.SPACE;
	case jeash.ui.Keyboard.DOM_VK_PAGE_UP:
		return jeash.ui.Keyboard.PAGE_UP;
	case jeash.ui.Keyboard.DOM_VK_PAGE_DOWN:
		return jeash.ui.Keyboard.PAGE_DOWN;
	case jeash.ui.Keyboard.DOM_VK_END:
		return jeash.ui.Keyboard.END;
	case jeash.ui.Keyboard.DOM_VK_HOME:
		return jeash.ui.Keyboard.HOME;
	case jeash.ui.Keyboard.DOM_VK_LEFT:
		return jeash.ui.Keyboard.LEFT;
	case jeash.ui.Keyboard.DOM_VK_RIGHT:
		return jeash.ui.Keyboard.RIGHT;
	case jeash.ui.Keyboard.DOM_VK_UP:
		return jeash.ui.Keyboard.UP;
	case jeash.ui.Keyboard.DOM_VK_DOWN:
		return jeash.ui.Keyboard.DOWN;
	case jeash.ui.Keyboard.DOM_VK_INSERT:
		return jeash.ui.Keyboard.INSERT;
	case jeash.ui.Keyboard.DOM_VK_DELETE:
		return jeash.ui.Keyboard.DELETE;
	case jeash.ui.Keyboard.DOM_VK_NUM_LOCK:
		return jeash.ui.Keyboard.NUMLOCK;
	default:
		return code;
	}
}
jeash.ui.Keyboard.capsLock = null;
jeash.ui.Keyboard.numLock = null;
jeash.ui.Keyboard.isAccessible = function() {
	return false;
}
jeash.ui.Keyboard.prototype.__class__ = jeash.ui.Keyboard;
box2D.dynamics.B2Body = function(bd,world) {
	if( bd === $_ ) return;
	this.m_xf = new box2D.common.math.B2Transform();
	this.m_sweep = new box2D.common.math.B2Sweep();
	this.m_linearVelocity = new box2D.common.math.B2Vec2();
	this.m_force = new box2D.common.math.B2Vec2();
	this.m_flags = 0;
	if(bd.bullet) this.m_flags |= box2D.dynamics.B2Body.e_bulletFlag;
	if(bd.fixedRotation) this.m_flags |= box2D.dynamics.B2Body.e_fixedRotationFlag;
	if(bd.allowSleep) this.m_flags |= box2D.dynamics.B2Body.e_allowSleepFlag;
	if(bd.awake) this.m_flags |= box2D.dynamics.B2Body.e_awakeFlag;
	if(bd.active) this.m_flags |= box2D.dynamics.B2Body.e_activeFlag;
	this.m_world = world;
	this.m_xf.position.setV(bd.position);
	this.m_xf.R.set(bd.angle);
	this.m_sweep.localCenter.setZero();
	this.m_sweep.t0 = 1.0;
	this.m_sweep.a0 = this.m_sweep.a = bd.angle;
	var tMat = this.m_xf.R;
	var tVec = this.m_sweep.localCenter;
	this.m_sweep.c.x = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
	this.m_sweep.c.y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
	this.m_sweep.c.x += this.m_xf.position.x;
	this.m_sweep.c.y += this.m_xf.position.y;
	this.m_sweep.c0.setV(this.m_sweep.c);
	this.m_jointList = null;
	this.m_controllerList = null;
	this.m_contactList = null;
	this.m_controllerCount = 0;
	this.m_prev = null;
	this.m_next = null;
	this.m_linearVelocity.setV(bd.linearVelocity);
	this.m_angularVelocity = bd.angularVelocity;
	this.m_linearDamping = bd.linearDamping;
	this.m_angularDamping = bd.angularDamping;
	this.m_force.set(0.0,0.0);
	this.m_torque = 0.0;
	this.m_sleepTime = 0.0;
	this.m_type = bd.type;
	if(this.m_type == box2D.dynamics.B2Body.b2_dynamicBody) {
		this.m_mass = 1.0;
		this.m_invMass = 1.0;
	} else {
		this.m_mass = 0.0;
		this.m_invMass = 0.0;
	}
	this.m_I = 0.0;
	this.m_invI = 0.0;
	this.m_inertiaScale = bd.inertiaScale;
	this.m_userData = bd.userData;
	this.m_fixtureList = null;
	this.m_fixtureCount = 0;
}
box2D.dynamics.B2Body.__name__ = ["box2D","dynamics","B2Body"];
box2D.dynamics.B2Body.prototype.connectEdges = function(s1,s2,angle1) {
	var angle2 = Math.atan2(s2.getDirectionVector().y,s2.getDirectionVector().x);
	var coreOffset = Math.tan((angle2 - angle1) * 0.5);
	var core = box2D.common.math.B2Math.mulFV(coreOffset,s2.getDirectionVector());
	core = box2D.common.math.B2Math.subtractVV(core,s2.getNormalVector());
	core = box2D.common.math.B2Math.mulFV(box2D.common.B2Settings.b2_toiSlop,core);
	core = box2D.common.math.B2Math.addVV(core,s2.getVertex1());
	var cornerDir = box2D.common.math.B2Math.addVV(s1.getDirectionVector(),s2.getDirectionVector());
	cornerDir.normalize();
	var convex = box2D.common.math.B2Math.dot(s1.getDirectionVector(),s2.getNormalVector()) > 0.0;
	s1.setNextEdge(s2,core,cornerDir,convex);
	s2.setPrevEdge(s1,core,cornerDir,convex);
	return angle2;
}
box2D.dynamics.B2Body.prototype.createFixture = function(def) {
	if(this.m_world.isLocked() == true) return null;
	var fixture = new box2D.dynamics.B2Fixture();
	fixture.create(this,this.m_xf,def);
	if((this.m_flags & box2D.dynamics.B2Body.e_activeFlag) != 0) {
		var broadPhase = this.m_world.m_contactManager.m_broadPhase;
		fixture.createProxy(broadPhase,this.m_xf);
	}
	fixture.m_next = this.m_fixtureList;
	this.m_fixtureList = fixture;
	++this.m_fixtureCount;
	fixture.m_body = this;
	if(fixture.m_density > 0.0) this.resetMassData();
	this.m_world.m_flags |= box2D.dynamics.B2World.e_newFixture;
	return fixture;
}
box2D.dynamics.B2Body.prototype.createFixture2 = function(shape,density) {
	if(density == null) density = 0.0;
	var def = new box2D.dynamics.B2FixtureDef();
	def.shape = shape;
	def.density = density;
	return this.createFixture(def);
}
box2D.dynamics.B2Body.prototype.DestroyFixture = function(fixture) {
	if(this.m_world.isLocked() == true) return;
	var node = this.m_fixtureList;
	var ppF = null;
	var found = false;
	while(node != null) {
		if(node == fixture) {
			if(ppF != null) ppF.m_next = fixture.m_next; else this.m_fixtureList = fixture.m_next;
			found = true;
			break;
		}
		ppF = node;
		node = node.m_next;
	}
	var edge = this.m_contactList;
	while(edge != null) {
		var c = edge.contact;
		edge = edge.next;
		var fixtureA = c.getFixtureA();
		var fixtureB = c.getFixtureB();
		if(fixture == fixtureA || fixture == fixtureB) this.m_world.m_contactManager.destroy(c);
	}
	if((this.m_flags & box2D.dynamics.B2Body.e_activeFlag) != 0) {
		var broadPhase = this.m_world.m_contactManager.m_broadPhase;
		fixture.destroyProxy(broadPhase);
	} else {
	}
	fixture.destroy();
	fixture.m_body = null;
	fixture.m_next = null;
	--this.m_fixtureCount;
	this.resetMassData();
}
box2D.dynamics.B2Body.prototype.setPositionAndAngle = function(position,angle) {
	var f;
	if(this.m_world.isLocked() == true) return;
	this.m_xf.R.set(angle);
	this.m_xf.position.setV(position);
	var tMat = this.m_xf.R;
	var tVec = this.m_sweep.localCenter;
	this.m_sweep.c.x = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
	this.m_sweep.c.y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
	this.m_sweep.c.x += this.m_xf.position.x;
	this.m_sweep.c.y += this.m_xf.position.y;
	this.m_sweep.c0.setV(this.m_sweep.c);
	this.m_sweep.a0 = this.m_sweep.a = angle;
	var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	f = this.m_fixtureList;
	while(f != null) {
		f.synchronize(broadPhase,this.m_xf,this.m_xf);
		f = f.m_next;
	}
	this.m_world.m_contactManager.findNewContacts();
}
box2D.dynamics.B2Body.prototype.setTransform = function(xf) {
	this.setPositionAndAngle(xf.position,xf.getAngle());
}
box2D.dynamics.B2Body.prototype.getTransform = function() {
	return this.m_xf;
}
box2D.dynamics.B2Body.prototype.getPosition = function() {
	return this.m_xf.position;
}
box2D.dynamics.B2Body.prototype.setPosition = function(position) {
	this.setPositionAndAngle(position,this.getAngle());
}
box2D.dynamics.B2Body.prototype.getAngle = function() {
	return this.m_sweep.a;
}
box2D.dynamics.B2Body.prototype.setAngle = function(angle) {
	this.setPositionAndAngle(this.getPosition(),angle);
}
box2D.dynamics.B2Body.prototype.getWorldCenter = function() {
	return this.m_sweep.c;
}
box2D.dynamics.B2Body.prototype.getLocalCenter = function() {
	return this.m_sweep.localCenter;
}
box2D.dynamics.B2Body.prototype.setLinearVelocity = function(v) {
	if(this.m_type == box2D.dynamics.B2Body.b2_staticBody) return;
	this.m_linearVelocity.setV(v);
}
box2D.dynamics.B2Body.prototype.getLinearVelocity = function() {
	return this.m_linearVelocity;
}
box2D.dynamics.B2Body.prototype.setAngularVelocity = function(omega) {
	if(this.m_type == box2D.dynamics.B2Body.b2_staticBody) return;
	this.m_angularVelocity = omega;
}
box2D.dynamics.B2Body.prototype.getAngularVelocity = function() {
	return this.m_angularVelocity;
}
box2D.dynamics.B2Body.prototype.getDefinition = function() {
	var bd = new box2D.dynamics.B2BodyDef();
	bd.type = this.getType();
	bd.allowSleep = (this.m_flags & box2D.dynamics.B2Body.e_allowSleepFlag) == box2D.dynamics.B2Body.e_allowSleepFlag;
	bd.angle = this.getAngle();
	bd.angularDamping = this.m_angularDamping;
	bd.angularVelocity = this.m_angularVelocity;
	bd.fixedRotation = (this.m_flags & box2D.dynamics.B2Body.e_fixedRotationFlag) == box2D.dynamics.B2Body.e_fixedRotationFlag;
	bd.bullet = (this.m_flags & box2D.dynamics.B2Body.e_bulletFlag) == box2D.dynamics.B2Body.e_bulletFlag;
	bd.awake = (this.m_flags & box2D.dynamics.B2Body.e_awakeFlag) == box2D.dynamics.B2Body.e_awakeFlag;
	bd.linearDamping = this.m_linearDamping;
	bd.linearVelocity.setV(this.getLinearVelocity());
	bd.position = this.getPosition();
	bd.userData = this.getUserData();
	return bd;
}
box2D.dynamics.B2Body.prototype.applyForce = function(force,point) {
	if(this.m_type != box2D.dynamics.B2Body.b2_dynamicBody) return;
	if(this.isAwake() == false) this.setAwake(true);
	this.m_force.x += force.x;
	this.m_force.y += force.y;
	this.m_torque += (point.x - this.m_sweep.c.x) * force.y - (point.y - this.m_sweep.c.y) * force.x;
}
box2D.dynamics.B2Body.prototype.applyTorque = function(torque) {
	if(this.m_type != box2D.dynamics.B2Body.b2_dynamicBody) return;
	if(this.isAwake() == false) this.setAwake(true);
	this.m_torque += torque;
}
box2D.dynamics.B2Body.prototype.applyImpulse = function(impulse,point) {
	if(this.m_type != box2D.dynamics.B2Body.b2_dynamicBody) return;
	if(this.isAwake() == false) this.setAwake(true);
	this.m_linearVelocity.x += this.m_invMass * impulse.x;
	this.m_linearVelocity.y += this.m_invMass * impulse.y;
	this.m_angularVelocity += this.m_invI * ((point.x - this.m_sweep.c.x) * impulse.y - (point.y - this.m_sweep.c.y) * impulse.x);
}
box2D.dynamics.B2Body.prototype.split = function(callbackMethod) {
	var linearVelocity = this.getLinearVelocity().copy();
	var angularVelocity = this.getAngularVelocity();
	var center = this.getWorldCenter();
	var body1 = this;
	var body2 = this.m_world.createBody(this.getDefinition());
	var prev = null;
	var f = body1.m_fixtureList;
	while(f != null) if(callbackMethod(f)) {
		var next = f.m_next;
		if(prev != null) prev.m_next = next; else body1.m_fixtureList = next;
		body1.m_fixtureCount--;
		f.m_next = body2.m_fixtureList;
		body2.m_fixtureList = f;
		body2.m_fixtureCount++;
		f.m_body = body2;
		f = next;
	} else {
		prev = f;
		f = f.m_next;
	}
	body1.resetMassData();
	body2.resetMassData();
	var center1 = body1.getWorldCenter();
	var center2 = body2.getWorldCenter();
	var velocity1 = box2D.common.math.B2Math.addVV(linearVelocity,box2D.common.math.B2Math.crossFV(angularVelocity,box2D.common.math.B2Math.subtractVV(center1,center)));
	var velocity2 = box2D.common.math.B2Math.addVV(linearVelocity,box2D.common.math.B2Math.crossFV(angularVelocity,box2D.common.math.B2Math.subtractVV(center2,center)));
	body1.setLinearVelocity(velocity1);
	body2.setLinearVelocity(velocity2);
	body1.setAngularVelocity(angularVelocity);
	body2.setAngularVelocity(angularVelocity);
	body1.synchronizeFixtures();
	body2.synchronizeFixtures();
	return body2;
}
box2D.dynamics.B2Body.prototype.merge = function(other) {
	var f;
	f = other.m_fixtureList;
	var body1 = this;
	var body2 = other;
	while(f != null) {
		var next = f.m_next;
		other.m_fixtureCount--;
		f.m_next = this.m_fixtureList;
		this.m_fixtureList = f;
		this.m_fixtureCount++;
		f.m_body = body2;
		f = next;
	}
	body1.m_fixtureCount = 0;
	var center1 = body1.getWorldCenter();
	var center2 = body2.getWorldCenter();
	var velocity1 = body1.getLinearVelocity().copy();
	var velocity2 = body2.getLinearVelocity().copy();
	var angular1 = body1.getAngularVelocity();
	var angular = body2.getAngularVelocity();
	body1.resetMassData();
	this.synchronizeFixtures();
}
box2D.dynamics.B2Body.prototype.getMass = function() {
	return this.m_mass;
}
box2D.dynamics.B2Body.prototype.getInertia = function() {
	return this.m_I;
}
box2D.dynamics.B2Body.prototype.getMassData = function(data) {
	data.mass = this.m_mass;
	data.I = this.m_I;
	data.center.setV(this.m_sweep.localCenter);
}
box2D.dynamics.B2Body.prototype.setMassData = function(massData) {
	box2D.common.B2Settings.b2Assert(this.m_world.isLocked() == false);
	if(this.m_world.isLocked() == true) return;
	if(this.m_type != box2D.dynamics.B2Body.b2_dynamicBody) return;
	this.m_invMass = 0.0;
	this.m_I = 0.0;
	this.m_invI = 0.0;
	this.m_mass = massData.mass;
	if(this.m_mass <= 0.0) this.m_mass = 1.0;
	this.m_invMass = 1.0 / this.m_mass;
	if(massData.I > 0.0 && (this.m_flags & box2D.dynamics.B2Body.e_fixedRotationFlag) == 0) {
		this.m_I = massData.I - this.m_mass * (massData.center.x * massData.center.x + massData.center.y * massData.center.y);
		this.m_invI = 1.0 / this.m_I;
	}
	var oldCenter = this.m_sweep.c.copy();
	this.m_sweep.localCenter.setV(massData.center);
	this.m_sweep.c0.setV(box2D.common.math.B2Math.mulX(this.m_xf,this.m_sweep.localCenter));
	this.m_sweep.c.setV(this.m_sweep.c0);
	this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - oldCenter.y);
	this.m_linearVelocity.y += this.m_angularVelocity * (this.m_sweep.c.x - oldCenter.x);
}
box2D.dynamics.B2Body.prototype.resetMassData = function() {
	this.m_mass = 0.0;
	this.m_invMass = 0.0;
	this.m_I = 0.0;
	this.m_invI = 0.0;
	this.m_sweep.localCenter.setZero();
	if(this.m_type == box2D.dynamics.B2Body.b2_staticBody || this.m_type == box2D.dynamics.B2Body.b2_kinematicBody) return;
	var center = box2D.common.math.B2Vec2.make(0,0);
	var f = this.m_fixtureList;
	while(f != null) {
		if(f.m_density == 0.0) continue;
		var massData = f.getMassData();
		this.m_mass += massData.mass;
		center.x += massData.center.x * massData.mass;
		center.y += massData.center.y * massData.mass;
		this.m_I += massData.I;
		f = f.m_next;
	}
	if(this.m_mass > 0.0) {
		this.m_invMass = 1.0 / this.m_mass;
		center.x *= this.m_invMass;
		center.y *= this.m_invMass;
	} else {
		this.m_mass = 1.0;
		this.m_invMass = 1.0;
	}
	if(this.m_I > 0.0 && (this.m_flags & box2D.dynamics.B2Body.e_fixedRotationFlag) == 0) {
		this.m_I -= this.m_mass * (center.x * center.x + center.y * center.y);
		this.m_I *= this.m_inertiaScale;
		box2D.common.B2Settings.b2Assert(this.m_I > 0);
		this.m_invI = 1.0 / this.m_I;
	} else {
		this.m_I = 0.0;
		this.m_invI = 0.0;
	}
	var oldCenter = this.m_sweep.c.copy();
	this.m_sweep.localCenter.setV(center);
	this.m_sweep.c0.setV(box2D.common.math.B2Math.mulX(this.m_xf,this.m_sweep.localCenter));
	this.m_sweep.c.setV(this.m_sweep.c0);
	this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - oldCenter.y);
	this.m_linearVelocity.y += this.m_angularVelocity * (this.m_sweep.c.x - oldCenter.x);
}
box2D.dynamics.B2Body.prototype.getWorldPoint = function(localPoint) {
	var A = this.m_xf.R;
	var u = new box2D.common.math.B2Vec2(A.col1.x * localPoint.x + A.col2.x * localPoint.y,A.col1.y * localPoint.x + A.col2.y * localPoint.y);
	u.x += this.m_xf.position.x;
	u.y += this.m_xf.position.y;
	return u;
}
box2D.dynamics.B2Body.prototype.getWorldVector = function(localVector) {
	return box2D.common.math.B2Math.mulMV(this.m_xf.R,localVector);
}
box2D.dynamics.B2Body.prototype.getLocalPoint = function(worldPoint) {
	return box2D.common.math.B2Math.mulXT(this.m_xf,worldPoint);
}
box2D.dynamics.B2Body.prototype.getLocalVector = function(worldVector) {
	return box2D.common.math.B2Math.mulTMV(this.m_xf.R,worldVector);
}
box2D.dynamics.B2Body.prototype.getLinearVelocityFromWorldPoint = function(worldPoint) {
	return new box2D.common.math.B2Vec2(this.m_linearVelocity.x - this.m_angularVelocity * (worldPoint.y - this.m_sweep.c.y),this.m_linearVelocity.y + this.m_angularVelocity * (worldPoint.x - this.m_sweep.c.x));
}
box2D.dynamics.B2Body.prototype.getLinearVelocityFromLocalPoint = function(localPoint) {
	var A = this.m_xf.R;
	var worldPoint = new box2D.common.math.B2Vec2(A.col1.x * localPoint.x + A.col2.x * localPoint.y,A.col1.y * localPoint.x + A.col2.y * localPoint.y);
	worldPoint.x += this.m_xf.position.x;
	worldPoint.y += this.m_xf.position.y;
	return new box2D.common.math.B2Vec2(this.m_linearVelocity.x - this.m_angularVelocity * (worldPoint.y - this.m_sweep.c.y),this.m_linearVelocity.y + this.m_angularVelocity * (worldPoint.x - this.m_sweep.c.x));
}
box2D.dynamics.B2Body.prototype.getLinearDamping = function() {
	return this.m_linearDamping;
}
box2D.dynamics.B2Body.prototype.setLinearDamping = function(linearDamping) {
	this.m_linearDamping = linearDamping;
}
box2D.dynamics.B2Body.prototype.getAngularDamping = function() {
	return this.m_angularDamping;
}
box2D.dynamics.B2Body.prototype.setAngularDamping = function(angularDamping) {
	this.m_angularDamping = angularDamping;
}
box2D.dynamics.B2Body.prototype.setType = function(type) {
	if(this.m_type == type) return;
	this.m_type = type;
	this.resetMassData();
	if(this.m_type == box2D.dynamics.B2Body.b2_staticBody) {
		this.m_linearVelocity.setZero();
		this.m_angularVelocity = 0.0;
	}
	this.setAwake(true);
	this.m_force.setZero();
	this.m_torque = 0.0;
	var ce = this.m_contactList;
	while(ce != null) {
		ce.contact.flagForFiltering();
		ce = ce.next;
	}
}
box2D.dynamics.B2Body.prototype.getType = function() {
	return this.m_type;
}
box2D.dynamics.B2Body.prototype.setBullet = function(flag) {
	if(flag) this.m_flags |= box2D.dynamics.B2Body.e_bulletFlag; else this.m_flags &= ~box2D.dynamics.B2Body.e_bulletFlag;
}
box2D.dynamics.B2Body.prototype.isBullet = function() {
	return (this.m_flags & box2D.dynamics.B2Body.e_bulletFlag) == box2D.dynamics.B2Body.e_bulletFlag;
}
box2D.dynamics.B2Body.prototype.setSleepingAllowed = function(flag) {
	if(flag) this.m_flags |= box2D.dynamics.B2Body.e_allowSleepFlag; else {
		this.m_flags &= ~box2D.dynamics.B2Body.e_allowSleepFlag;
		this.setAwake(true);
	}
}
box2D.dynamics.B2Body.prototype.setAwake = function(flag) {
	if(flag) {
		this.m_flags |= box2D.dynamics.B2Body.e_awakeFlag;
		this.m_sleepTime = 0.0;
	} else {
		this.m_flags &= ~box2D.dynamics.B2Body.e_awakeFlag;
		this.m_sleepTime = 0.0;
		this.m_linearVelocity.setZero();
		this.m_angularVelocity = 0.0;
		this.m_force.setZero();
		this.m_torque = 0.0;
	}
}
box2D.dynamics.B2Body.prototype.isAwake = function() {
	return (this.m_flags & box2D.dynamics.B2Body.e_awakeFlag) == box2D.dynamics.B2Body.e_awakeFlag;
}
box2D.dynamics.B2Body.prototype.setFixedRotation = function(fixed) {
	if(fixed) this.m_flags |= box2D.dynamics.B2Body.e_fixedRotationFlag; else this.m_flags &= ~box2D.dynamics.B2Body.e_fixedRotationFlag;
	this.resetMassData();
}
box2D.dynamics.B2Body.prototype.isFixedRotation = function() {
	return (this.m_flags & box2D.dynamics.B2Body.e_fixedRotationFlag) == box2D.dynamics.B2Body.e_fixedRotationFlag;
}
box2D.dynamics.B2Body.prototype.setActive = function(flag) {
	if(flag == this.isActive()) return;
	var broadPhase;
	var f;
	if(flag) {
		this.m_flags |= box2D.dynamics.B2Body.e_activeFlag;
		broadPhase = this.m_world.m_contactManager.m_broadPhase;
		f = this.m_fixtureList;
		while(f != null) {
			f.createProxy(broadPhase,this.m_xf);
			f = f.m_next;
		}
	} else {
		this.m_flags &= ~box2D.dynamics.B2Body.e_activeFlag;
		broadPhase = this.m_world.m_contactManager.m_broadPhase;
		f = this.m_fixtureList;
		while(f != null) {
			f.destroyProxy(broadPhase);
			f = f.m_next;
		}
		var ce = this.m_contactList;
		while(ce != null) {
			var ce0 = ce;
			ce = ce.next;
			this.m_world.m_contactManager.destroy(ce0.contact);
		}
		this.m_contactList = null;
	}
}
box2D.dynamics.B2Body.prototype.isActive = function() {
	return (this.m_flags & box2D.dynamics.B2Body.e_activeFlag) == box2D.dynamics.B2Body.e_activeFlag;
}
box2D.dynamics.B2Body.prototype.isSleepingAllowed = function() {
	return (this.m_flags & box2D.dynamics.B2Body.e_allowSleepFlag) == box2D.dynamics.B2Body.e_allowSleepFlag;
}
box2D.dynamics.B2Body.prototype.getFixtureList = function() {
	return this.m_fixtureList;
}
box2D.dynamics.B2Body.prototype.getJointList = function() {
	return this.m_jointList;
}
box2D.dynamics.B2Body.prototype.getControllerList = function() {
	return this.m_controllerList;
}
box2D.dynamics.B2Body.prototype.getContactList = function() {
	return this.m_contactList;
}
box2D.dynamics.B2Body.prototype.getNext = function() {
	return this.m_next;
}
box2D.dynamics.B2Body.prototype.getUserData = function() {
	return this.m_userData;
}
box2D.dynamics.B2Body.prototype.setUserData = function(data) {
	this.m_userData = data;
}
box2D.dynamics.B2Body.prototype.getWorld = function() {
	return this.m_world;
}
box2D.dynamics.B2Body.prototype.synchronizeFixtures = function() {
	var xf1 = box2D.dynamics.B2Body.s_xf1;
	xf1.R.set(this.m_sweep.a0);
	var tMat = xf1.R;
	var tVec = this.m_sweep.localCenter;
	xf1.position.x = this.m_sweep.c0.x - (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	xf1.position.y = this.m_sweep.c0.y - (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	var f;
	var broadPhase = this.m_world.m_contactManager.m_broadPhase;
	f = this.m_fixtureList;
	while(f != null) {
		f.synchronize(broadPhase,xf1,this.m_xf);
		f = f.m_next;
	}
}
box2D.dynamics.B2Body.prototype.synchronizeTransform = function() {
	this.m_xf.R.set(this.m_sweep.a);
	var tMat = this.m_xf.R;
	var tVec = this.m_sweep.localCenter;
	this.m_xf.position.x = this.m_sweep.c.x - (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	this.m_xf.position.y = this.m_sweep.c.y - (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
}
box2D.dynamics.B2Body.prototype.shouldCollide = function(other) {
	if(this.m_type != box2D.dynamics.B2Body.b2_dynamicBody && other.m_type != box2D.dynamics.B2Body.b2_dynamicBody) return false;
	var jn = this.m_jointList;
	while(jn != null) {
		if(jn.other == other) {
			if(jn.joint.m_collideConnected == false) return false;
		}
		jn = jn.next;
	}
	return true;
}
box2D.dynamics.B2Body.prototype.advance = function(t) {
	this.m_sweep.advance(t);
	this.m_sweep.c.setV(this.m_sweep.c0);
	this.m_sweep.a = this.m_sweep.a0;
	this.synchronizeTransform();
}
box2D.dynamics.B2Body.prototype.m_flags = null;
box2D.dynamics.B2Body.prototype.m_type = null;
box2D.dynamics.B2Body.prototype.m_islandIndex = null;
box2D.dynamics.B2Body.prototype.m_xf = null;
box2D.dynamics.B2Body.prototype.m_sweep = null;
box2D.dynamics.B2Body.prototype.m_linearVelocity = null;
box2D.dynamics.B2Body.prototype.m_angularVelocity = null;
box2D.dynamics.B2Body.prototype.m_force = null;
box2D.dynamics.B2Body.prototype.m_torque = null;
box2D.dynamics.B2Body.prototype.m_world = null;
box2D.dynamics.B2Body.prototype.m_prev = null;
box2D.dynamics.B2Body.prototype.m_next = null;
box2D.dynamics.B2Body.prototype.m_fixtureList = null;
box2D.dynamics.B2Body.prototype.m_fixtureCount = null;
box2D.dynamics.B2Body.prototype.m_controllerList = null;
box2D.dynamics.B2Body.prototype.m_controllerCount = null;
box2D.dynamics.B2Body.prototype.m_jointList = null;
box2D.dynamics.B2Body.prototype.m_contactList = null;
box2D.dynamics.B2Body.prototype.m_mass = null;
box2D.dynamics.B2Body.prototype.m_invMass = null;
box2D.dynamics.B2Body.prototype.m_I = null;
box2D.dynamics.B2Body.prototype.m_invI = null;
box2D.dynamics.B2Body.prototype.m_inertiaScale = null;
box2D.dynamics.B2Body.prototype.m_linearDamping = null;
box2D.dynamics.B2Body.prototype.m_angularDamping = null;
box2D.dynamics.B2Body.prototype.m_sleepTime = null;
box2D.dynamics.B2Body.prototype.m_userData = null;
box2D.dynamics.B2Body.prototype.__class__ = box2D.dynamics.B2Body;
jeash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if( type === $_ ) return;
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
}
jeash.events.FocusEvent.__name__ = ["jeash","events","FocusEvent"];
jeash.events.FocusEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.FocusEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.FocusEvent.prototype.keyCode = null;
jeash.events.FocusEvent.prototype.shiftKey = null;
jeash.events.FocusEvent.prototype.relatedObject = null;
jeash.events.FocusEvent.prototype.__class__ = jeash.events.FocusEvent;
jeash.net.URLLoader = function(request) {
	if( request === $_ ) return;
	jeash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.dataFormat = jeash.net.URLLoaderDataFormat.TEXT;
	if(request != null) this.load(request);
}
jeash.net.URLLoader.__name__ = ["jeash","net","URLLoader"];
jeash.net.URLLoader.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.net.URLLoader.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.net.URLLoader.prototype.http = null;
jeash.net.URLLoader.prototype.bytesLoaded = null;
jeash.net.URLLoader.prototype.bytesTotal = null;
jeash.net.URLLoader.prototype.data = null;
jeash.net.URLLoader.prototype.dataFormat = null;
jeash.net.URLLoader.prototype.close = function() {
}
jeash.net.URLLoader.prototype.load = function(request) {
	this.http = new jeash.net._URLLoader.Http(request.url);
	this.http.onData = $closure(this,"onData");
	this.http.onError = $closure(this,"onError");
	this.http.requestUrl(jeash.net._URLLoader.HttpType.STREAM(this.dataFormat == jeash.net.URLLoaderDataFormat.TEXT?jeash.net._URLLoader.DataFormat.TEXT:jeash.net._URLLoader.DataFormat.BINARY));
}
jeash.net.URLLoader.prototype.onData = function(_) {
	var content = this.http.getData();
	switch( (this.dataFormat)[1] ) {
	case 0:
		this.data = new jeash.utils.ByteArray();
		var _g1 = 0, _g = content.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = content["cca"](i) & 255;
			this.data.writeByte(c);
		}
		this.data.position = 0;
		break;
	case 1:
		this.data = content;
		break;
	case 2:
		throw "Not complete";
		break;
	}
	var evt = new jeash.events.Event(jeash.events.Event.COMPLETE);
	this.dispatchEvent(evt);
}
jeash.net.URLLoader.prototype.onError = function(msg) {
	jeash.Lib.trace(msg);
	var evt = new jeash.events.IOErrorEvent(jeash.events.IOErrorEvent.IO_ERROR);
	this.dispatchEvent(evt);
}
jeash.net.URLLoader.prototype.__class__ = jeash.net.URLLoader;
if(!jeash.net._URLLoader) jeash.net._URLLoader = {}
jeash.net._URLLoader.HttpType = { __ename__ : ["jeash","net","_URLLoader","HttpType"], __constructs__ : ["IMAGE","VIDEO","AUDIO","STREAM"] }
jeash.net._URLLoader.HttpType.IMAGE = ["IMAGE",0];
jeash.net._URLLoader.HttpType.IMAGE.toString = $estr;
jeash.net._URLLoader.HttpType.IMAGE.__enum__ = jeash.net._URLLoader.HttpType;
jeash.net._URLLoader.HttpType.VIDEO = ["VIDEO",1];
jeash.net._URLLoader.HttpType.VIDEO.toString = $estr;
jeash.net._URLLoader.HttpType.VIDEO.__enum__ = jeash.net._URLLoader.HttpType;
jeash.net._URLLoader.HttpType.AUDIO = ["AUDIO",2];
jeash.net._URLLoader.HttpType.AUDIO.toString = $estr;
jeash.net._URLLoader.HttpType.AUDIO.__enum__ = jeash.net._URLLoader.HttpType;
jeash.net._URLLoader.HttpType.STREAM = function(format) { var $x = ["STREAM",3,format]; $x.__enum__ = jeash.net._URLLoader.HttpType; $x.toString = $estr; return $x; }
jeash.net._URLLoader.DataFormat = { __ename__ : ["jeash","net","_URLLoader","DataFormat"], __constructs__ : ["BINARY","TEXT"] }
jeash.net._URLLoader.DataFormat.BINARY = ["BINARY",0];
jeash.net._URLLoader.DataFormat.BINARY.toString = $estr;
jeash.net._URLLoader.DataFormat.BINARY.__enum__ = jeash.net._URLLoader.DataFormat;
jeash.net._URLLoader.DataFormat.TEXT = ["TEXT",1];
jeash.net._URLLoader.DataFormat.TEXT.toString = $estr;
jeash.net._URLLoader.DataFormat.TEXT.__enum__ = jeash.net._URLLoader.DataFormat;
haxe.Http = function(url) {
	if( url === $_ ) return;
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
}
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.requestUrl = function(url) {
	var h = new haxe.Http(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		r = d;
	};
	h.onError = function(e) {
		throw e;
	};
	h.request(false);
	return r;
}
haxe.Http.prototype.url = null;
haxe.Http.prototype.async = null;
haxe.Http.prototype.postData = null;
haxe.Http.prototype.headers = null;
haxe.Http.prototype.params = null;
haxe.Http.prototype.setHeader = function(header,value) {
	this.headers.set(header,value);
}
haxe.Http.prototype.setParameter = function(param,value) {
	this.params.set(param,value);
}
haxe.Http.prototype.setPostData = function(data) {
	this.postData = data;
}
haxe.Http.prototype.request = function(post) {
	var me = this;
	var r = new js.XMLHttpRequest();
	var onreadystatechange = function() {
		if(r.readyState != 4) return;
		var s = (function($this) {
			var $r;
			try {
				$r = r.status;
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(s == undefined) s = null;
		if(s != null) me.onStatus(s);
		if(s != null && s >= 200 && s < 400) me.onData(r.responseText); else switch(s) {
		case null: case undefined:
			me.onError("Failed to connect or resolve host");
			break;
		case 12029:
			me.onError("Failed to connect to host");
			break;
		case 12007:
			me.onError("Unknown host");
			break;
		default:
			me.onError("Http Error #" + r.status);
		}
	};
	if(this.async) r.onreadystatechange = onreadystatechange;
	var uri = this.postData;
	if(uri != null) post = true; else {
		var $it0 = this.params.keys();
		while( $it0.hasNext() ) {
			var p = $it0.next();
			if(uri == null) uri = ""; else uri += "&";
			uri += StringTools.urlDecode(p) + "=" + StringTools.urlEncode(this.params.get(p));
		}
	}
	try {
		if(post) r.open("POST",this.url,this.async); else if(uri != null) {
			var question = this.url.split("?").length <= 1;
			r.open("GET",this.url + (question?"?":"&") + uri,this.async);
			uri = null;
		} else r.open("GET",this.url,this.async);
	} catch( e ) {
		this.onError(e.toString());
		return;
	}
	if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var $it1 = this.headers.keys();
	while( $it1.hasNext() ) {
		var h = $it1.next();
		r.setRequestHeader(h,this.headers.get(h));
	}
	r.send(uri);
	if(!this.async) onreadystatechange();
}
haxe.Http.prototype.onData = function(data) {
}
haxe.Http.prototype.onError = function(msg) {
}
haxe.Http.prototype.onStatus = function(status) {
}
haxe.Http.prototype.__class__ = haxe.Http;
jeash.net._URLLoader.Http = function(url) {
	if( url === $_ ) return;
	haxe.Http.call(this,url);
}
jeash.net._URLLoader.Http.__name__ = ["jeash","net","_URLLoader","Http"];
jeash.net._URLLoader.Http.__super__ = haxe.Http;
for(var k in haxe.Http.prototype ) jeash.net._URLLoader.Http.prototype[k] = haxe.Http.prototype[k];
jeash.net._URLLoader.Http.prototype.registerEvents = function(subject) {
	subject.onload = $closure(this,"onData");
	subject.onerror = $closure(this,"onError");
}
jeash.net._URLLoader.Http.prototype.requestUrl = function(type) {
	var self = this;
	var $e = (type);
	switch( $e[1] ) {
	case 3:
		var dataFormat = $e[2];
		var xmlHttpRequest = new XMLHttpRequest();
		switch( (dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.overrideMimeType("text/plain; charset=x-user-defined");
			break;
		default:
		}
		this.registerEvents(xmlHttpRequest);
		var uri = null;
		var $it0 = this.params.keys();
		while( $it0.hasNext() ) {
			var p = $it0.next();
			uri = StringTools.urlDecode(p) + "=" + StringTools.urlEncode(this.params.get(p));
		}
		try {
			if(uri != null) {
				var question = this.url.split("?").length <= 1;
				xmlHttpRequest.open("GET",this.url + (question?"?":"&") + uri,true);
				uri = null;
			} else xmlHttpRequest.open("GET",this.url,true);
		} catch( e ) {
			throw e.toString();
		}
		xmlHttpRequest.send(uri);
		this.getData = function() {
			return xmlHttpRequest.responseText;
		};
		break;
	case 0:
		var image = js.Lib.document.createElement("img");
		this.registerEvents(image);
		image.src = this.url;
		this.getData = function() {
			return image;
		};
		break;
	case 2:
		var audio = js.Lib.document.createElement("audio");
		this.registerEvents(audio);
		audio.src = this.url;
		this.getData = function() {
			return audio;
		};
		break;
	case 1:
		var video = js.Lib.document.createElement("video");
		this.registerEvents(video);
		video.src = this.url;
		this.getData = function() {
			return video;
		};
		break;
	}
}
jeash.net._URLLoader.Http.prototype.getData = function() {
}
jeash.net._URLLoader.Http.prototype.__class__ = jeash.net._URLLoader.Http;
box2D.common.math.B2Mat22 = function(p) {
	if( p === $_ ) return;
	this.col1 = new box2D.common.math.B2Vec2(0,1.0);
	this.col2 = new box2D.common.math.B2Vec2(0,1.0);
}
box2D.common.math.B2Mat22.__name__ = ["box2D","common","math","B2Mat22"];
box2D.common.math.B2Mat22.fromAngle = function(angle) {
	var mat = new box2D.common.math.B2Mat22();
	mat.set(angle);
	return mat;
}
box2D.common.math.B2Mat22.fromVV = function(c1,c2) {
	var mat = new box2D.common.math.B2Mat22();
	mat.setVV(c1,c2);
	return mat;
}
box2D.common.math.B2Mat22.prototype.set = function(angle) {
	var c = Math.cos(angle);
	var s = Math.sin(angle);
	this.col1.x = c;
	this.col2.x = -s;
	this.col1.y = s;
	this.col2.y = c;
}
box2D.common.math.B2Mat22.prototype.setVV = function(c1,c2) {
	this.col1.setV(c1);
	this.col2.setV(c2);
}
box2D.common.math.B2Mat22.prototype.copy = function() {
	var mat = new box2D.common.math.B2Mat22();
	mat.setM(this);
	return mat;
}
box2D.common.math.B2Mat22.prototype.setM = function(m) {
	this.col1.setV(m.col1);
	this.col2.setV(m.col2);
}
box2D.common.math.B2Mat22.prototype.addM = function(m) {
	this.col1.x += m.col1.x;
	this.col1.y += m.col1.y;
	this.col2.x += m.col2.x;
	this.col2.y += m.col2.y;
}
box2D.common.math.B2Mat22.prototype.setIdentity = function() {
	this.col1.x = 1.0;
	this.col2.x = 0.0;
	this.col1.y = 0.0;
	this.col2.y = 1.0;
}
box2D.common.math.B2Mat22.prototype.setZero = function() {
	this.col1.x = 0.0;
	this.col2.x = 0.0;
	this.col1.y = 0.0;
	this.col2.y = 0.0;
}
box2D.common.math.B2Mat22.prototype.getAngle = function() {
	return Math.atan2(this.col1.y,this.col1.x);
}
box2D.common.math.B2Mat22.prototype.getInverse = function(out) {
	var a = this.col1.x;
	var b = this.col2.x;
	var c = this.col1.y;
	var d = this.col2.y;
	var det = a * d - b * c;
	if(det != 0.0) det = 1.0 / det;
	out.col1.x = det * d;
	out.col2.x = -det * b;
	out.col1.y = -det * c;
	out.col2.y = det * a;
	return out;
}
box2D.common.math.B2Mat22.prototype.solve = function(out,bX,bY) {
	var a11 = this.col1.x;
	var a12 = this.col2.x;
	var a21 = this.col1.y;
	var a22 = this.col2.y;
	var det = a11 * a22 - a12 * a21;
	if(det != 0.0) det = 1.0 / det;
	out.x = det * (a22 * bX - a12 * bY);
	out.y = det * (a11 * bY - a21 * bX);
	return out;
}
box2D.common.math.B2Mat22.prototype.abs = function() {
	this.col1.abs();
	this.col2.abs();
}
box2D.common.math.B2Mat22.prototype.col1 = null;
box2D.common.math.B2Mat22.prototype.col2 = null;
box2D.common.math.B2Mat22.prototype.__class__ = box2D.common.math.B2Mat22;
Xml = function(p) {
}
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.Prolog = null;
Xml.Document = null;
Xml.parse = function(str) {
	var rules = [Xml.enode,Xml.epcdata,Xml.eend,Xml.ecdata,Xml.edoctype,Xml.ecomment,Xml.eprolog];
	var nrules = rules.length;
	var current = Xml.createDocument();
	var stack = new List();
	while(str.length > 0) {
		var i = 0;
		try {
			while(i < nrules) {
				var r = rules[i];
				if(r.match(str)) {
					switch(i) {
					case 0:
						var x = Xml.createElement(r.matched(1));
						current.addChild(x);
						str = r.matchedRight();
						while(Xml.eattribute.match(str)) {
							x.set(Xml.eattribute.matched(1),Xml.eattribute.matched(3));
							str = Xml.eattribute.matchedRight();
						}
						if(!Xml.eclose.match(str)) {
							i = nrules;
							throw "__break__";
						}
						if(Xml.eclose.matched(1) == ">") {
							stack.push(current);
							current = x;
						}
						str = Xml.eclose.matchedRight();
						break;
					case 1:
						var x = Xml.createPCData(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
						break;
					case 2:
						if(current._children != null && current._children.length == 0) {
							var e = Xml.createPCData("");
							current.addChild(e);
						}
						if(r.matched(1) != current._nodeName || stack.isEmpty()) {
							i = nrules;
							throw "__break__";
						}
						current = stack.pop();
						str = r.matchedRight();
						break;
					case 3:
						str = r.matchedRight();
						if(!Xml.ecdata_end.match(str)) throw "End of CDATA section not found";
						var x = Xml.createCData(Xml.ecdata_end.matchedLeft());
						current.addChild(x);
						str = Xml.ecdata_end.matchedRight();
						break;
					case 4:
						var pos = 0;
						var count = 0;
						var old = str;
						try {
							while(true) {
								if(!Xml.edoctype_elt.match(str)) throw "End of DOCTYPE section not found";
								var p = Xml.edoctype_elt.matchedPos();
								pos += p.pos + p.len;
								str = Xml.edoctype_elt.matchedRight();
								switch(Xml.edoctype_elt.matched(0)) {
								case "[":
									count++;
									break;
								case "]":
									count--;
									if(count < 0) throw "Invalid ] found in DOCTYPE declaration";
									break;
								default:
									if(count == 0) throw "__break__";
								}
							}
						} catch( e ) { if( e != "__break__" ) throw e; }
						var x = Xml.createDocType(old.substr(10,pos - 11));
						current.addChild(x);
						break;
					case 5:
						if(!Xml.ecomment_end.match(str)) throw "Unclosed Comment";
						var p = Xml.ecomment_end.matchedPos();
						var x = Xml.createComment(str.substr(4,p.pos + p.len - 7));
						current.addChild(x);
						str = Xml.ecomment_end.matchedRight();
						break;
					case 6:
						var prolog = r.matched(0);
						var x = Xml.createProlog(prolog.substr(2,prolog.length - 4));
						current.addChild(x);
						str = r.matchedRight();
						break;
					}
					throw "__break__";
				}
				i += 1;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(i == nrules) {
			if(str.length > 10) throw "Xml parse error : Unexpected " + str.substr(0,10) + "..."; else throw "Xml parse error : Unexpected " + str;
		}
	}
	if(!stack.isEmpty()) throw "Xml parse error : Unclosed " + stack.last().getNodeName();
	return current;
}
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	return r;
}
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	return r;
}
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	return r;
}
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	return r;
}
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	return r;
}
Xml.createProlog = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	return r;
}
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
}
Xml.prototype.nodeType = null;
Xml.prototype.nodeName = null;
Xml.prototype.nodeValue = null;
Xml.prototype.parent = null;
Xml.prototype._nodeName = null;
Xml.prototype._nodeValue = null;
Xml.prototype._attributes = null;
Xml.prototype._children = null;
Xml.prototype._parent = null;
Xml.prototype.getNodeName = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName;
}
Xml.prototype.setNodeName = function(n) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName = n;
}
Xml.prototype.getNodeValue = function() {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue;
}
Xml.prototype.setNodeValue = function(v) {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue = v;
}
Xml.prototype.getParent = function() {
	return this._parent;
}
Xml.prototype.get = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.get(att);
}
Xml.prototype.set = function(att,value) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
}
Xml.prototype.remove = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
}
Xml.prototype.exists = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.exists(att);
}
Xml.prototype.attributes = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.keys();
}
Xml.prototype.iterator = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		return this.cur < this.x.length;
	}, next : function() {
		return this.x[this.cur++];
	}};
}
Xml.prototype.elements = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			if(this.x[k].nodeType == Xml.Element) break;
			k += 1;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k += 1;
			if(n.nodeType == Xml.Element) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}};
}
Xml.prototype.elementsNamed = function(name) {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			if(n.nodeType == Xml.Element && n._nodeName == name) break;
			k++;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k++;
			if(n.nodeType == Xml.Element && n._nodeName == name) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}};
}
Xml.prototype.firstChild = function() {
	if(this._children == null) throw "bad nodetype";
	return this._children[0];
}
Xml.prototype.firstElement = function() {
	if(this._children == null) throw "bad nodetype";
	var cur = 0;
	var l = this._children.length;
	while(cur < l) {
		var n = this._children[cur];
		if(n.nodeType == Xml.Element) return n;
		cur++;
	}
	return null;
}
Xml.prototype.addChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
}
Xml.prototype.removeChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	return b;
}
Xml.prototype.insertChild = function(x,pos) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
}
Xml.prototype.toString = function() {
	if(this.nodeType == Xml.PCData) return this._nodeValue;
	if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
	if(this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
	if(this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
	if(this.nodeType == Xml.Prolog) return "<?" + this._nodeValue + "?>";
	var s = new StringBuf();
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "<" == null?"null":"<";
		s.add(this._nodeName);
		var $it0 = this._attributes.keys();
		while( $it0.hasNext() ) {
			var k = $it0.next();
			s.b[s.b.length] = " " == null?"null":" ";
			s.b[s.b.length] = k == null?"null":k;
			s.b[s.b.length] = "=\"" == null?"null":"=\"";
			s.add(this._attributes.get(k));
			s.b[s.b.length] = "\"" == null?"null":"\"";
		}
		if(this._children.length == 0) {
			s.b[s.b.length] = "/>" == null?"null":"/>";
			return s.b.join("");
		}
		s.b[s.b.length] = ">" == null?"null":">";
	}
	var $it1 = this.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		s.add(x.toString());
	}
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "</" == null?"null":"</";
		s.add(this._nodeName);
		s.b[s.b.length] = ">" == null?"null":">";
	}
	return s.b.join("");
}
Xml.prototype.__class__ = Xml;
jeash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if( inBitmapData === $_ ) return;
	jeash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	this.name = "Bitmap " + jeash.display.DisplayObject.mNameID++;
	this.jeashGraphics = new jeash.display.Graphics();
	if(inBitmapData != null) this.jeashSetBitmapData(inBitmapData);
	this.jeashGraphics.jeashSurface.id = this.name;
}
jeash.display.Bitmap.__name__ = ["jeash","display","Bitmap"];
jeash.display.Bitmap.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.Bitmap.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.Bitmap.prototype.bitmapData = null;
jeash.display.Bitmap.prototype.pixelSnapping = null;
jeash.display.Bitmap.prototype.smoothing = null;
jeash.display.Bitmap.prototype.jeashGraphics = null;
jeash.display.Bitmap.prototype.jeashCurrentLease = null;
jeash.display.Bitmap.prototype.jeashSetBitmapData = function(inBitmapData) {
	this.jeashInvalidateBounds();
	this.bitmapData = inBitmapData;
	return inBitmapData;
}
jeash.display.Bitmap.prototype.jeashGetGraphics = function() {
	return this.jeashGraphics;
}
jeash.display.Bitmap.prototype.BuildBounds = function() {
	jeash.display.DisplayObject.prototype.BuildBounds.call(this);
	if(this.bitmapData != null) {
		var r = new jeash.geom.Rectangle(0,0,this.bitmapData.getWidth(),this.bitmapData.getHeight());
		if(r.width != 0 || r.height != 0) {
			if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone(); else this.mBoundsRect.extendBounds(r);
		}
	}
}
jeash.display.Bitmap.prototype.jeashApplyFilters = function(surface) {
	if(this.jeashFilters != null) {
		var _g = 0, _g1 = this.jeashFilters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			filter.jeashApplyFilter(this.jeashGraphics.jeashSurface);
		}
	}
}
jeash.display.Bitmap.prototype.jeashRender = function(parentMatrix,inMask) {
	if(this.bitmapData == null) return;
	if(this.mMtxDirty || this.mMtxChainDirty) this.jeashValidateMatrix();
	var m = this.mFullMatrix.clone();
	var imageDataLease = this.bitmapData.jeashLease;
	if(imageDataLease != null && (this.jeashCurrentLease == null || imageDataLease.seed != this.jeashCurrentLease.seed || imageDataLease.time != this.jeashCurrentLease.time)) {
		var srcCanvas = this.bitmapData.mTextureBuffer;
		this.jeashGraphics.jeashSurface.width = srcCanvas.width;
		this.jeashGraphics.jeashSurface.height = srcCanvas.height;
		this.jeashGraphics.clear();
		jeash.Lib.jeashDrawToSurface(srcCanvas,this.jeashGraphics.jeashSurface);
		this.jeashCurrentLease = imageDataLease.clone();
		this.jeashApplyFilters(this.jeashGraphics.jeashSurface);
	} else if(inMask != null) this.jeashApplyFilters(this.jeashGraphics.jeashSurface);
	if(inMask != null) jeash.Lib.jeashDrawToSurface(this.jeashGraphics.jeashSurface,inMask,m,(this.parent != null?this.parent.alpha:1) * this.alpha); else {
		jeash.Lib.jeashSetSurfaceTransform(this.jeashGraphics.jeashSurface,m);
		jeash.Lib.jeashSetSurfaceOpacity(this.jeashGraphics.jeashSurface,(this.parent != null?this.parent.alpha:1) * this.alpha);
	}
}
jeash.display.Bitmap.prototype.jeashGetObjectUnderPoint = function(point) {
	if(!this.jeashGetVisible()) return null; else if(this.bitmapData != null) {
		var local = this.globalToLocal(point);
		if(local.x < 0 || local.y < 0 || local.x > this.jeashGetWidth() || local.y > this.jeashGetHeight()) return null; else return this;
	} else return jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint.call(this,point);
}
jeash.display.Bitmap.prototype.__class__ = jeash.display.Bitmap;
box2D.dynamics.B2TimeStep = function(p) {
}
box2D.dynamics.B2TimeStep.__name__ = ["box2D","dynamics","B2TimeStep"];
box2D.dynamics.B2TimeStep.prototype.set = function(step) {
	this.dt = step.dt;
	this.inv_dt = step.inv_dt;
	this.positionIterations = step.positionIterations;
	this.velocityIterations = step.velocityIterations;
	this.warmStarting = step.warmStarting;
}
box2D.dynamics.B2TimeStep.prototype.dt = null;
box2D.dynamics.B2TimeStep.prototype.inv_dt = null;
box2D.dynamics.B2TimeStep.prototype.dtRatio = null;
box2D.dynamics.B2TimeStep.prototype.velocityIterations = null;
box2D.dynamics.B2TimeStep.prototype.positionIterations = null;
box2D.dynamics.B2TimeStep.prototype.warmStarting = null;
box2D.dynamics.B2TimeStep.prototype.__class__ = box2D.dynamics.B2TimeStep;
box2D.dynamics.B2World = function(gravity,doSleep) {
	if( gravity === $_ ) return;
	this.s_stack = new Array();
	this.m_contactManager = new box2D.dynamics.B2ContactManager();
	this.m_contactSolver = new box2D.dynamics.contacts.B2ContactSolver();
	this.m_island = new box2D.dynamics.B2Island();
	this.m_destructionListener = null;
	this.m_debugDraw = null;
	this.m_bodyList = null;
	this.m_contactList = null;
	this.m_jointList = null;
	this.m_controllerList = null;
	this.m_bodyCount = 0;
	this.m_contactCount = 0;
	this.m_jointCount = 0;
	this.m_controllerCount = 0;
	box2D.dynamics.B2World.m_warmStarting = true;
	box2D.dynamics.B2World.m_continuousPhysics = true;
	this.m_allowSleep = doSleep;
	this.m_gravity = gravity;
	this.m_inv_dt0 = 0.0;
	this.m_contactManager.m_world = this;
	var bd = new box2D.dynamics.B2BodyDef();
	this.m_groundBody = this.createBody(bd);
}
box2D.dynamics.B2World.__name__ = ["box2D","dynamics","B2World"];
box2D.dynamics.B2World.m_warmStarting = null;
box2D.dynamics.B2World.m_continuousPhysics = null;
box2D.dynamics.B2World.prototype.setDestructionListener = function(listener) {
	this.m_destructionListener = listener;
}
box2D.dynamics.B2World.prototype.setContactFilter = function(filter) {
	this.m_contactManager.m_contactFilter = filter;
}
box2D.dynamics.B2World.prototype.setContactListener = function(listener) {
	this.m_contactManager.m_contactListener = listener;
}
box2D.dynamics.B2World.prototype.setDebugDraw = function(debugDraw) {
	this.m_debugDraw = debugDraw;
}
box2D.dynamics.B2World.prototype.setBroadPhase = function(broadPhase) {
	var oldBroadPhase = this.m_contactManager.m_broadPhase;
	this.m_contactManager.m_broadPhase = broadPhase;
	var b = this.m_bodyList;
	while(b != null) {
		var f = b.m_fixtureList;
		while(f != null) {
			f.m_proxy = broadPhase.createProxy(oldBroadPhase.getFatAABB(f.m_proxy),f);
			f = f.m_next;
		}
		b = b.m_next;
	}
}
box2D.dynamics.B2World.prototype.validate = function() {
	this.m_contactManager.m_broadPhase.validate();
}
box2D.dynamics.B2World.prototype.getProxyCount = function() {
	return this.m_contactManager.m_broadPhase.getProxyCount();
}
box2D.dynamics.B2World.prototype.createBody = function(def) {
	if(this.isLocked() == true) return null;
	var b = new box2D.dynamics.B2Body(def,this);
	b.m_prev = null;
	b.m_next = this.m_bodyList;
	if(this.m_bodyList != null) this.m_bodyList.m_prev = b;
	this.m_bodyList = b;
	++this.m_bodyCount;
	return b;
}
box2D.dynamics.B2World.prototype.destroyBody = function(b) {
	if(this.isLocked() == true) return;
	var jn = b.m_jointList;
	while(jn != null) {
		var jn0 = jn;
		jn = jn.next;
		if(this.m_destructionListener != null) this.m_destructionListener.sayGoodbyeJoint(jn0.joint);
		this.destroyJoint(jn0.joint);
	}
	var coe = b.m_controllerList;
	while(coe != null) {
		var coe0 = coe;
		coe = coe.nextController;
		coe0.controller.removeBody(b);
	}
	var ce = b.m_contactList;
	while(ce != null) {
		var ce0 = ce;
		ce = ce.next;
		this.m_contactManager.destroy(ce0.contact);
	}
	b.m_contactList = null;
	var f = b.m_fixtureList;
	while(f != null) {
		var f0 = f;
		f = f.m_next;
		if(this.m_destructionListener != null) this.m_destructionListener.sayGoodbyeFixture(f0);
		f0.destroyProxy(this.m_contactManager.m_broadPhase);
		f0.destroy();
	}
	b.m_fixtureList = null;
	b.m_fixtureCount = 0;
	if(b.m_prev != null) b.m_prev.m_next = b.m_next;
	if(b.m_next != null) b.m_next.m_prev = b.m_prev;
	if(b == this.m_bodyList) this.m_bodyList = b.m_next;
	--this.m_bodyCount;
}
box2D.dynamics.B2World.prototype.createJoint = function(def) {
	var j = box2D.dynamics.joints.B2Joint.create(def,null);
	j.m_prev = null;
	j.m_next = this.m_jointList;
	if(this.m_jointList != null) this.m_jointList.m_prev = j;
	this.m_jointList = j;
	++this.m_jointCount;
	j.m_edgeA.joint = j;
	j.m_edgeA.other = j.m_bodyB;
	j.m_edgeA.prev = null;
	j.m_edgeA.next = j.m_bodyA.m_jointList;
	if(j.m_bodyA.m_jointList != null) j.m_bodyA.m_jointList.prev = j.m_edgeA;
	j.m_bodyA.m_jointList = j.m_edgeA;
	j.m_edgeB.joint = j;
	j.m_edgeB.other = j.m_bodyA;
	j.m_edgeB.prev = null;
	j.m_edgeB.next = j.m_bodyB.m_jointList;
	if(j.m_bodyB.m_jointList != null) j.m_bodyB.m_jointList.prev = j.m_edgeB;
	j.m_bodyB.m_jointList = j.m_edgeB;
	var bodyA = def.bodyA;
	var bodyB = def.bodyB;
	if(def.collideConnected == false) {
		var edge = bodyB.getContactList();
		while(edge != null) {
			if(edge.other == bodyA) edge.contact.flagForFiltering();
			edge = edge.next;
		}
	}
	return j;
}
box2D.dynamics.B2World.prototype.destroyJoint = function(j) {
	var collideConnected = j.m_collideConnected;
	if(j.m_prev != null) j.m_prev.m_next = j.m_next;
	if(j.m_next != null) j.m_next.m_prev = j.m_prev;
	if(j == this.m_jointList) this.m_jointList = j.m_next;
	var bodyA = j.m_bodyA;
	var bodyB = j.m_bodyB;
	bodyA.setAwake(true);
	bodyB.setAwake(true);
	if(j.m_edgeA.prev != null) j.m_edgeA.prev.next = j.m_edgeA.next;
	if(j.m_edgeA.next != null) j.m_edgeA.next.prev = j.m_edgeA.prev;
	if(j.m_edgeA == bodyA.m_jointList) bodyA.m_jointList = j.m_edgeA.next;
	j.m_edgeA.prev = null;
	j.m_edgeA.next = null;
	if(j.m_edgeB.prev != null) j.m_edgeB.prev.next = j.m_edgeB.next;
	if(j.m_edgeB.next != null) j.m_edgeB.next.prev = j.m_edgeB.prev;
	if(j.m_edgeB == bodyB.m_jointList) bodyB.m_jointList = j.m_edgeB.next;
	j.m_edgeB.prev = null;
	j.m_edgeB.next = null;
	box2D.dynamics.joints.B2Joint.destroy(j,null);
	--this.m_jointCount;
	if(collideConnected == false) {
		var edge = bodyB.getContactList();
		while(edge != null) {
			if(edge.other == bodyA) edge.contact.flagForFiltering();
			edge = edge.next;
		}
	}
}
box2D.dynamics.B2World.prototype.addController = function(c) {
	c.m_next = this.m_controllerList;
	c.m_prev = null;
	this.m_controllerList = c;
	c.m_world = this;
	this.m_controllerCount++;
	return c;
}
box2D.dynamics.B2World.prototype.removeController = function(c) {
	if(c.m_prev != null) c.m_prev.m_next = c.m_next;
	if(c.m_next != null) c.m_next.m_prev = c.m_prev;
	if(this.m_controllerList == c) this.m_controllerList = c.m_next;
	this.m_controllerCount--;
}
box2D.dynamics.B2World.prototype.createController = function(controller) {
	if(controller.m_world != this) throw "Controller can only be a member of one world";
	controller.m_next = this.m_controllerList;
	controller.m_prev = null;
	if(this.m_controllerList != null) this.m_controllerList.m_prev = controller;
	this.m_controllerList = controller;
	++this.m_controllerCount;
	controller.m_world = this;
	return controller;
}
box2D.dynamics.B2World.prototype.destroyController = function(controller) {
	controller.clear();
	if(controller.m_next != null) controller.m_next.m_prev = controller.m_prev;
	if(controller.m_prev != null) controller.m_prev.m_next = controller.m_next;
	if(controller == this.m_controllerList) this.m_controllerList = controller.m_next;
	--this.m_controllerCount;
}
box2D.dynamics.B2World.prototype.setWarmStarting = function(flag) {
	box2D.dynamics.B2World.m_warmStarting = flag;
}
box2D.dynamics.B2World.prototype.setContinuousPhysics = function(flag) {
	box2D.dynamics.B2World.m_continuousPhysics = flag;
}
box2D.dynamics.B2World.prototype.getBodyCount = function() {
	return this.m_bodyCount;
}
box2D.dynamics.B2World.prototype.getJointCount = function() {
	return this.m_jointCount;
}
box2D.dynamics.B2World.prototype.getContactCount = function() {
	return this.m_contactCount;
}
box2D.dynamics.B2World.prototype.setGravity = function(gravity) {
	this.m_gravity = gravity;
}
box2D.dynamics.B2World.prototype.getGravity = function() {
	return this.m_gravity;
}
box2D.dynamics.B2World.prototype.getGroundBody = function() {
	return this.m_groundBody;
}
box2D.dynamics.B2World.prototype.step = function(dt,velocityIterations,positionIterations) {
	if((this.m_flags & box2D.dynamics.B2World.e_newFixture) != 0) {
		this.m_contactManager.findNewContacts();
		this.m_flags &= ~box2D.dynamics.B2World.e_newFixture;
	}
	this.m_flags |= box2D.dynamics.B2World.e_locked;
	var step = box2D.dynamics.B2World.s_timestep2;
	step.dt = dt;
	step.velocityIterations = velocityIterations;
	step.positionIterations = positionIterations;
	if(dt > 0.0) step.inv_dt = 1.0 / dt; else step.inv_dt = 0.0;
	step.dtRatio = this.m_inv_dt0 * dt;
	step.warmStarting = box2D.dynamics.B2World.m_warmStarting;
	this.m_contactManager.collide();
	if(step.dt > 0.0) this.solve(step);
	if(box2D.dynamics.B2World.m_continuousPhysics && step.dt > 0.0) this.solveTOI(step);
	if(step.dt > 0.0) this.m_inv_dt0 = step.inv_dt;
	this.m_flags &= ~box2D.dynamics.B2World.e_locked;
}
box2D.dynamics.B2World.prototype.clearForces = function() {
	var body = this.m_bodyList;
	while(body != null) {
		body.m_force.setZero();
		body.m_torque = 0.0;
		body = body.m_next;
	}
}
box2D.dynamics.B2World.prototype.drawDebugData = function() {
	if(this.m_debugDraw == null) return;
	this.m_debugDraw.m_sprite.jeashGetGraphics().clear();
	var flags = this.m_debugDraw.getFlags();
	var i;
	var b;
	var f;
	var s;
	var j;
	var bp;
	var invQ = new box2D.common.math.B2Vec2();
	var x1 = new box2D.common.math.B2Vec2();
	var x2 = new box2D.common.math.B2Vec2();
	var xf;
	var b1 = new box2D.collision.B2AABB();
	var b2 = new box2D.collision.B2AABB();
	var vs = [new box2D.common.math.B2Vec2(),new box2D.common.math.B2Vec2(),new box2D.common.math.B2Vec2(),new box2D.common.math.B2Vec2()];
	var color = new box2D.common.B2Color(0,0,0);
	if((flags & box2D.dynamics.B2DebugDraw.e_shapeBit) != 0) {
		b = this.m_bodyList;
		while(b != null) {
			xf = b.m_xf;
			f = b.getFixtureList();
			while(f != null) {
				s = f.getShape();
				if(b.isActive() == false) {
					color.set(0.5,0.5,0.3);
					this.drawShape(s,xf,color);
				} else if(b.getType() == box2D.dynamics.B2Body.b2_staticBody) {
					color.set(0.5,0.9,0.5);
					this.drawShape(s,xf,color);
				} else if(b.getType() == box2D.dynamics.B2Body.b2_kinematicBody) {
					color.set(0.5,0.5,0.9);
					this.drawShape(s,xf,color);
				} else if(b.isAwake() == false) {
					color.set(0.6,0.6,0.6);
					this.drawShape(s,xf,color);
				} else {
					color.set(0.9,0.7,0.7);
					this.drawShape(s,xf,color);
				}
				f = f.m_next;
			}
			b = b.m_next;
		}
	}
	if((flags & box2D.dynamics.B2DebugDraw.e_jointBit) != 0) {
		j = this.m_jointList;
		while(j != null) {
			this.drawJoint(j);
			j = j.m_next;
		}
	}
	if((flags & box2D.dynamics.B2DebugDraw.e_controllerBit) != 0) {
		var c = this.m_controllerList;
		while(c != null) {
			c.draw(this.m_debugDraw);
			c = c.m_next;
		}
	}
	if((flags & box2D.dynamics.B2DebugDraw.e_pairBit) != 0) {
		color.set(0.3,0.9,0.9);
		var contact = this.m_contactManager.m_contactList;
		while(contact != null) {
			var fixtureA = contact.getFixtureA();
			var fixtureB = contact.getFixtureB();
			var cA = fixtureA.getAABB().getCenter();
			var cB = fixtureB.getAABB().getCenter();
			this.m_debugDraw.drawSegment(cA,cB,color);
			contact = contact.getNext();
		}
	}
	if((flags & box2D.dynamics.B2DebugDraw.e_aabbBit) != 0) {
		bp = this.m_contactManager.m_broadPhase;
		vs = [new box2D.common.math.B2Vec2(),new box2D.common.math.B2Vec2(),new box2D.common.math.B2Vec2(),new box2D.common.math.B2Vec2()];
		b = this.m_bodyList;
		while(b != null) {
			if(b.isActive() == false) {
				b = b.getNext();
				continue;
			}
			f = b.getFixtureList();
			while(f != null) {
				var aabb = bp.getFatAABB(f.m_proxy);
				vs[0].set(aabb.lowerBound.x,aabb.lowerBound.y);
				vs[1].set(aabb.upperBound.x,aabb.lowerBound.y);
				vs[2].set(aabb.upperBound.x,aabb.upperBound.y);
				vs[3].set(aabb.lowerBound.x,aabb.upperBound.y);
				this.m_debugDraw.drawPolygon(vs,4,color);
				f = f.getNext();
			}
			b = b.getNext();
		}
	}
	if((flags & box2D.dynamics.B2DebugDraw.e_centerOfMassBit) != 0) {
		b = this.m_bodyList;
		while(b != null) {
			xf = box2D.dynamics.B2World.s_xf;
			xf.R = b.m_xf.R;
			xf.position = b.getWorldCenter();
			this.m_debugDraw.drawTransform(xf);
			b = b.m_next;
		}
	}
}
box2D.dynamics.B2World.prototype.queryAABB = function(callbackMethod,aabb) {
	var broadPhase = this.m_contactManager.m_broadPhase;
	var worldQueryWrapper = function(proxy) {
		return callbackMethod(broadPhase.getUserData(proxy));
	};
	broadPhase.query(worldQueryWrapper,aabb);
}
box2D.dynamics.B2World.prototype.queryShape = function(callbackMethod,shape,transform) {
	if(transform == null) {
		transform = new box2D.common.math.B2Transform();
		transform.setIdentity();
	}
	var broadPhase = this.m_contactManager.m_broadPhase;
	var worldQueryWrapper = function(proxy) {
		var fixture = (function($this) {
			var $r;
			var $t = broadPhase.getUserData(proxy);
			if(Std["is"]($t,box2D.dynamics.B2Fixture)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		if(box2D.collision.shapes.B2Shape.testOverlap(shape,transform,fixture.getShape(),fixture.getBody().getTransform())) return callbackMethod(fixture);
		return true;
	};
	var aabb = new box2D.collision.B2AABB();
	shape.computeAABB(aabb,transform);
	broadPhase.query(worldQueryWrapper,aabb);
}
box2D.dynamics.B2World.prototype.queryPoint = function(callbackMethod,p) {
	var broadPhase = this.m_contactManager.m_broadPhase;
	var worldQueryWrapper = function(proxy) {
		var fixture = (function($this) {
			var $r;
			var $t = broadPhase.getUserData(proxy);
			if(Std["is"]($t,box2D.dynamics.B2Fixture)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		if(fixture.testPoint(p)) return callbackMethod(fixture);
		return true;
	};
	var aabb = new box2D.collision.B2AABB();
	aabb.lowerBound.set(p.x - box2D.common.B2Settings.b2_linearSlop,p.y - box2D.common.B2Settings.b2_linearSlop);
	aabb.upperBound.set(p.x + box2D.common.B2Settings.b2_linearSlop,p.y + box2D.common.B2Settings.b2_linearSlop);
	broadPhase.query(worldQueryWrapper,aabb);
}
box2D.dynamics.B2World.prototype.rayCast = function(callbackMethod,point1,point2) {
	var broadPhase = this.m_contactManager.m_broadPhase;
	var output = new box2D.collision.B2RayCastOutput();
	var rayCastWrapper = function(input,proxy) {
		var userData = broadPhase.getUserData(proxy);
		var fixture = (function($this) {
			var $r;
			var $t = userData;
			if(Std["is"]($t,box2D.dynamics.B2Fixture)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		var hit = fixture.rayCast(output,input);
		if(hit) {
			var fraction = output.fraction;
			var point = new box2D.common.math.B2Vec2((1.0 - fraction) * point1.x + fraction * point2.x,(1.0 - fraction) * point1.y + fraction * point2.y);
			return callbackMethod(fixture,point,output.normal,fraction);
		}
		return input.maxFraction;
	};
	var input = new box2D.collision.B2RayCastInput(point1,point2);
	broadPhase.rayCast(rayCastWrapper,input);
}
box2D.dynamics.B2World.prototype.rayCastOne = function(point1,point2) {
	var result;
	var rayCastOneWrapper = function(fixture,point,normal,fraction) {
		result = fixture;
		return fraction;
	};
	this.rayCast(rayCastOneWrapper,point1,point2);
	return result;
}
box2D.dynamics.B2World.prototype.rayCastAll = function(point1,point2) {
	var result = new Array();
	var rayCastAllWrapper = function(fixture,point,normal,fraction) {
		result[result.length] = fixture;
		return 1;
	};
	this.rayCast(rayCastAllWrapper,point1,point2);
	return result;
}
box2D.dynamics.B2World.prototype.getBodyList = function() {
	return this.m_bodyList;
}
box2D.dynamics.B2World.prototype.getJointList = function() {
	return this.m_jointList;
}
box2D.dynamics.B2World.prototype.getContactList = function() {
	return this.m_contactList;
}
box2D.dynamics.B2World.prototype.isLocked = function() {
	return (this.m_flags & box2D.dynamics.B2World.e_locked) > 0;
}
box2D.dynamics.B2World.prototype.s_stack = null;
box2D.dynamics.B2World.prototype.solve = function(step) {
	var b;
	var controller = this.m_controllerList;
	while(controller != null) {
		controller.step(step);
		controller = controller.m_next;
	}
	var island = this.m_island;
	island.initialize(this.m_bodyCount,this.m_contactCount,this.m_jointCount,null,this.m_contactManager.m_contactListener,this.m_contactSolver);
	b = this.m_bodyList;
	while(b != null) {
		b.m_flags &= ~box2D.dynamics.B2Body.e_islandFlag;
		b = b.m_next;
	}
	var c = this.m_contactList;
	while(c != null) {
		c.m_flags &= ~box2D.dynamics.contacts.B2Contact.e_islandFlag;
		c = c.m_next;
	}
	var j = this.m_jointList;
	while(j != null) {
		j.m_islandFlag = false;
		j = j.m_next;
	}
	var stackSize = this.m_bodyCount;
	var stack = this.s_stack;
	var seed = this.m_bodyList;
	while(seed != null) {
		if((seed.m_flags & box2D.dynamics.B2Body.e_islandFlag) != 0) {
			seed = seed.m_next;
			continue;
		}
		if(seed.isAwake() == false || seed.isActive() == false) {
			seed = seed.m_next;
			continue;
		}
		if(seed.getType() == box2D.dynamics.B2Body.b2_staticBody) {
			seed = seed.m_next;
			continue;
		}
		island.clear();
		var stackCount = 0;
		stack[stackCount++] = seed;
		seed.m_flags |= box2D.dynamics.B2Body.e_islandFlag;
		while(stackCount > 0) {
			b = stack[--stackCount];
			island.addBody(b);
			if(b.isAwake() == false) b.setAwake(true);
			if(b.getType() == box2D.dynamics.B2Body.b2_staticBody) continue;
			var other;
			var ce = b.m_contactList;
			while(ce != null) {
				if((ce.contact.m_flags & box2D.dynamics.contacts.B2Contact.e_islandFlag) != 0) {
					ce = ce.next;
					continue;
				}
				if(ce.contact.isSensor() == true || ce.contact.isEnabled() == false || ce.contact.isTouching() == false) {
					ce = ce.next;
					continue;
				}
				island.addContact(ce.contact);
				ce.contact.m_flags |= box2D.dynamics.contacts.B2Contact.e_islandFlag;
				other = ce.other;
				if((other.m_flags & box2D.dynamics.B2Body.e_islandFlag) != 0) {
					ce = ce.next;
					continue;
				}
				stack[stackCount++] = other;
				other.m_flags |= box2D.dynamics.B2Body.e_islandFlag;
				ce = ce.next;
			}
			var jn = b.m_jointList;
			while(jn != null) {
				if(jn.joint.m_islandFlag == true) {
					jn = jn.next;
					continue;
				}
				other = jn.other;
				if(other.isActive() == false) {
					jn = jn.next;
					continue;
				}
				island.addJoint(jn.joint);
				jn.joint.m_islandFlag = true;
				if((other.m_flags & box2D.dynamics.B2Body.e_islandFlag) != 0) {
					jn = jn.next;
					continue;
				}
				stack[stackCount++] = other;
				other.m_flags |= box2D.dynamics.B2Body.e_islandFlag;
				jn = jn.next;
			}
		}
		island.solve(step,this.m_gravity,this.m_allowSleep);
		var _g1 = 0, _g = island.m_bodyCount;
		while(_g1 < _g) {
			var i = _g1++;
			b = island.m_bodies[i];
			if(b.getType() == box2D.dynamics.B2Body.b2_staticBody) b.m_flags &= ~box2D.dynamics.B2Body.e_islandFlag;
		}
		seed = seed.m_next;
	}
	var _g1 = 0, _g = stack.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(stack[i] == null) break;
		stack[i] = null;
	}
	b = this.m_bodyList;
	while(b != null) {
		if(b.isAwake() == false || b.isActive() == false) {
			b = b.m_next;
			continue;
		}
		if(b.getType() == box2D.dynamics.B2Body.b2_staticBody) {
			b = b.m_next;
			continue;
		}
		b.synchronizeFixtures();
		b = b.m_next;
	}
	this.m_contactManager.findNewContacts();
}
box2D.dynamics.B2World.prototype.solveTOI = function(step) {
	var b;
	var fA;
	var fB;
	var bA;
	var bB;
	var cEdge;
	var j;
	var island = this.m_island;
	island.initialize(this.m_bodyCount,box2D.common.B2Settings.b2_maxTOIContactsPerIsland,box2D.common.B2Settings.b2_maxTOIJointsPerIsland,null,this.m_contactManager.m_contactListener,this.m_contactSolver);
	var queue = box2D.dynamics.B2World.s_queue;
	b = this.m_bodyList;
	while(b != null) {
		b.m_flags &= ~box2D.dynamics.B2Body.e_islandFlag;
		b.m_sweep.t0 = 0.0;
		b = b.m_next;
	}
	var c = this.m_contactList;
	while(c != null) {
		c.m_flags &= ~(box2D.dynamics.contacts.B2Contact.e_toiFlag | box2D.dynamics.contacts.B2Contact.e_islandFlag);
		c = c.m_next;
	}
	j = this.m_jointList;
	while(j != null) {
		j.m_islandFlag = false;
		j = j.m_next;
	}
	while(true) {
		var minContact = null;
		var minTOI = 1.0;
		c = this.m_contactList;
		while(c != null) {
			if(c.isSensor() == true || c.isEnabled() == false || c.isContinuous() == false) {
				c = c.m_next;
				continue;
			}
			var toi = 1.0;
			if((c.m_flags & box2D.dynamics.contacts.B2Contact.e_toiFlag) != 0) toi = c.m_toi; else {
				fA = c.m_fixtureA;
				fB = c.m_fixtureB;
				bA = fA.m_body;
				bB = fB.m_body;
				if((bA.getType() != box2D.dynamics.B2Body.b2_dynamicBody || bA.isAwake() == false) && (bB.getType() != box2D.dynamics.B2Body.b2_dynamicBody || bB.isAwake() == false)) {
					c = c.m_next;
					continue;
				}
				var t0 = bA.m_sweep.t0;
				if(bA.m_sweep.t0 < bB.m_sweep.t0) {
					t0 = bB.m_sweep.t0;
					bA.m_sweep.advance(t0);
				} else if(bB.m_sweep.t0 < bA.m_sweep.t0) {
					t0 = bA.m_sweep.t0;
					bB.m_sweep.advance(t0);
				}
				toi = c.computeTOI(bA.m_sweep,bB.m_sweep);
				box2D.common.B2Settings.b2Assert(0.0 <= toi && toi <= 1.0);
				if(toi > 0.0 && toi < 1.0) {
					toi = (1.0 - toi) * t0 + toi;
					if(toi > 1) toi = 1;
				}
				c.m_toi = toi;
				c.m_flags |= box2D.dynamics.contacts.B2Contact.e_toiFlag;
			}
			if(Number.MIN_VALUE < toi && toi < minTOI) {
				minContact = c;
				minTOI = toi;
			}
			c = c.m_next;
		}
		if(minContact == null || 1.0 - 100.0 * Number.MIN_VALUE < minTOI) break;
		fA = minContact.m_fixtureA;
		fB = minContact.m_fixtureB;
		bA = fA.m_body;
		bB = fB.m_body;
		box2D.dynamics.B2World.s_backupA.set(bA.m_sweep);
		box2D.dynamics.B2World.s_backupB.set(bB.m_sweep);
		bA.advance(minTOI);
		bB.advance(minTOI);
		minContact.update(this.m_contactManager.m_contactListener);
		minContact.m_flags &= ~box2D.dynamics.contacts.B2Contact.e_toiFlag;
		if(minContact.isSensor() == true || minContact.isEnabled() == false) {
			bA.m_sweep.set(box2D.dynamics.B2World.s_backupA);
			bB.m_sweep.set(box2D.dynamics.B2World.s_backupB);
			bA.synchronizeTransform();
			bB.synchronizeTransform();
			continue;
		}
		if(minContact.isTouching() == false) continue;
		var seed = bA;
		if(seed.getType() != box2D.dynamics.B2Body.b2_dynamicBody) seed = bB;
		island.clear();
		var queueStart = 0;
		var queueSize = 0;
		queue[queueStart + queueSize++] = seed;
		seed.m_flags |= box2D.dynamics.B2Body.e_islandFlag;
		while(queueSize > 0) {
			b = queue[queueStart++];
			--queueSize;
			island.addBody(b);
			if(b.isAwake() == false) b.setAwake(true);
			if(b.getType() != box2D.dynamics.B2Body.b2_dynamicBody) continue;
			cEdge = b.m_contactList;
			var other;
			while(cEdge != null) {
				if(island.m_contactCount == island.m_contactCapacity) {
					cEdge = cEdge.next;
					break;
				}
				if((cEdge.contact.m_flags & box2D.dynamics.contacts.B2Contact.e_islandFlag) != 0) {
					cEdge = cEdge.next;
					continue;
				}
				if(cEdge.contact.isSensor() == true || cEdge.contact.isEnabled() == false || cEdge.contact.isTouching() == false) {
					cEdge = cEdge.next;
					continue;
				}
				island.addContact(cEdge.contact);
				cEdge.contact.m_flags |= box2D.dynamics.contacts.B2Contact.e_islandFlag;
				other = cEdge.other;
				if((other.m_flags & box2D.dynamics.B2Body.e_islandFlag) != 0) {
					cEdge = cEdge.next;
					continue;
				}
				if(other.getType() != box2D.dynamics.B2Body.b2_staticBody) {
					other.advance(minTOI);
					other.setAwake(true);
				}
				queue[queueStart + queueSize] = other;
				++queueSize;
				other.m_flags |= box2D.dynamics.B2Body.e_islandFlag;
				cEdge = cEdge.next;
			}
			var jEdge = b.m_jointList;
			while(jEdge != null) {
				if(island.m_jointCount == island.m_jointCapacity) {
					jEdge = jEdge.next;
					continue;
				}
				if(jEdge.joint.m_islandFlag == true) {
					jEdge = jEdge.next;
					continue;
				}
				other = jEdge.other;
				if(other.isActive() == false) {
					jEdge = jEdge.next;
					continue;
				}
				island.addJoint(jEdge.joint);
				jEdge.joint.m_islandFlag = true;
				if((other.m_flags & box2D.dynamics.B2Body.e_islandFlag) != 0) {
					jEdge = jEdge.next;
					continue;
				}
				if(other.getType() != box2D.dynamics.B2Body.b2_staticBody) {
					other.advance(minTOI);
					other.setAwake(true);
				}
				queue[queueStart + queueSize] = other;
				++queueSize;
				other.m_flags |= box2D.dynamics.B2Body.e_islandFlag;
				jEdge = jEdge.next;
			}
		}
		var subStep = box2D.dynamics.B2World.s_timestep;
		subStep.warmStarting = false;
		subStep.dt = (1.0 - minTOI) * step.dt;
		subStep.inv_dt = 1.0 / subStep.dt;
		subStep.dtRatio = 0.0;
		subStep.velocityIterations = step.velocityIterations;
		subStep.positionIterations = step.positionIterations;
		island.solveTOI(subStep);
		var i;
		var _g1 = 0, _g = island.m_bodyCount;
		while(_g1 < _g) {
			var i1 = _g1++;
			b = island.m_bodies[i1];
			b.m_flags &= ~box2D.dynamics.B2Body.e_islandFlag;
			if(b.isAwake() == false) continue;
			if(b.getType() != box2D.dynamics.B2Body.b2_dynamicBody) continue;
			b.synchronizeFixtures();
			cEdge = b.m_contactList;
			while(cEdge != null) {
				cEdge.contact.m_flags &= ~box2D.dynamics.contacts.B2Contact.e_toiFlag;
				cEdge = cEdge.next;
			}
		}
		var _g1 = 0, _g = island.m_contactCount;
		while(_g1 < _g) {
			var i1 = _g1++;
			c = island.m_contacts[i1];
			c.m_flags &= ~(box2D.dynamics.contacts.B2Contact.e_toiFlag | box2D.dynamics.contacts.B2Contact.e_islandFlag);
		}
		var _g1 = 0, _g = island.m_jointCount;
		while(_g1 < _g) {
			var i1 = _g1++;
			j = island.m_joints[i1];
			j.m_islandFlag = false;
		}
		this.m_contactManager.findNewContacts();
	}
}
box2D.dynamics.B2World.prototype.drawJoint = function(joint) {
	var b1 = joint.getBodyA();
	var b2 = joint.getBodyB();
	var xf1 = b1.m_xf;
	var xf2 = b2.m_xf;
	var x1 = xf1.position;
	var x2 = xf2.position;
	var p1 = joint.getAnchorA();
	var p2 = joint.getAnchorB();
	var color = box2D.dynamics.B2World.s_jointColor;
	switch(joint.m_type) {
	case box2D.dynamics.joints.B2Joint.e_distanceJoint:
		this.m_debugDraw.drawSegment(p1,p2,color);
		break;
	case box2D.dynamics.joints.B2Joint.e_pulleyJoint:
		var pulley = (function($this) {
			var $r;
			var $t = joint;
			if(Std["is"]($t,box2D.dynamics.joints.B2PulleyJoint)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		var s1 = pulley.getGroundAnchorA();
		var s2 = pulley.getGroundAnchorB();
		this.m_debugDraw.drawSegment(s1,p1,color);
		this.m_debugDraw.drawSegment(s2,p2,color);
		this.m_debugDraw.drawSegment(s1,s2,color);
		break;
	case box2D.dynamics.joints.B2Joint.e_mouseJoint:
		this.m_debugDraw.drawSegment(p1,p2,color);
		break;
	default:
		if(b1 != this.m_groundBody) this.m_debugDraw.drawSegment(x1,p1,color);
		this.m_debugDraw.drawSegment(p1,p2,color);
		if(b2 != this.m_groundBody) this.m_debugDraw.drawSegment(x2,p2,color);
	}
}
box2D.dynamics.B2World.prototype.drawShape = function(shape,xf,color) {
	switch(shape.m_type) {
	case box2D.collision.shapes.B2Shape.e_circleShape:
		var circle = (function($this) {
			var $r;
			var $t = shape;
			if(Std["is"]($t,box2D.collision.shapes.B2CircleShape)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		var center = box2D.common.math.B2Math.mulX(xf,circle.m_p);
		var radius = circle.m_radius;
		var axis = xf.R.col1;
		this.m_debugDraw.drawSolidCircle(center,radius,axis,color);
		break;
	case box2D.collision.shapes.B2Shape.e_polygonShape:
		var i;
		var poly = (function($this) {
			var $r;
			var $t = shape;
			if(Std["is"]($t,box2D.collision.shapes.B2PolygonShape)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		var vertexCount = poly.getVertexCount();
		var localVertices = poly.getVertices();
		var vertices = new Array();
		var _g = 0;
		while(_g < vertexCount) {
			var i1 = _g++;
			vertices[i1] = box2D.common.math.B2Math.mulX(xf,localVertices[i1]);
		}
		this.m_debugDraw.drawSolidPolygon(vertices,vertexCount,color);
		break;
	case box2D.collision.shapes.B2Shape.e_edgeShape:
		var edge = (function($this) {
			var $r;
			var $t = shape;
			if(Std["is"]($t,box2D.collision.shapes.B2EdgeShape)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		this.m_debugDraw.drawSegment(box2D.common.math.B2Math.mulX(xf,edge.getVertex1()),box2D.common.math.B2Math.mulX(xf,edge.getVertex2()),color);
		break;
	}
}
box2D.dynamics.B2World.prototype.m_flags = null;
box2D.dynamics.B2World.prototype.m_contactManager = null;
box2D.dynamics.B2World.prototype.m_contactSolver = null;
box2D.dynamics.B2World.prototype.m_island = null;
box2D.dynamics.B2World.prototype.m_bodyList = null;
box2D.dynamics.B2World.prototype.m_jointList = null;
box2D.dynamics.B2World.prototype.m_contactList = null;
box2D.dynamics.B2World.prototype.m_bodyCount = null;
box2D.dynamics.B2World.prototype.m_contactCount = null;
box2D.dynamics.B2World.prototype.m_jointCount = null;
box2D.dynamics.B2World.prototype.m_controllerList = null;
box2D.dynamics.B2World.prototype.m_controllerCount = null;
box2D.dynamics.B2World.prototype.m_gravity = null;
box2D.dynamics.B2World.prototype.m_allowSleep = null;
box2D.dynamics.B2World.prototype.m_groundBody = null;
box2D.dynamics.B2World.prototype.m_destructionListener = null;
box2D.dynamics.B2World.prototype.m_debugDraw = null;
box2D.dynamics.B2World.prototype.m_inv_dt0 = null;
box2D.dynamics.B2World.prototype.__class__ = box2D.dynamics.B2World;
box2D.common.math.B2Math = function() { }
box2D.common.math.B2Math.__name__ = ["box2D","common","math","B2Math"];
box2D.common.math.B2Math.isValid = function(x) {
	if(Math.isNaN(x) || x == Math.NEGATIVE_INFINITY || x == Math.POSITIVE_INFINITY) return false;
	return true;
}
box2D.common.math.B2Math.dot = function(a,b) {
	return a.x * b.x + a.y * b.y;
}
box2D.common.math.B2Math.crossVV = function(a,b) {
	return a.x * b.y - a.y * b.x;
}
box2D.common.math.B2Math.crossVF = function(a,s) {
	var v = new box2D.common.math.B2Vec2(s * a.y,-s * a.x);
	return v;
}
box2D.common.math.B2Math.crossFV = function(s,a) {
	var v = new box2D.common.math.B2Vec2(-s * a.y,s * a.x);
	return v;
}
box2D.common.math.B2Math.mulMV = function(A,v) {
	var u = new box2D.common.math.B2Vec2(A.col1.x * v.x + A.col2.x * v.y,A.col1.y * v.x + A.col2.y * v.y);
	return u;
}
box2D.common.math.B2Math.mulTMV = function(A,v) {
	var u = new box2D.common.math.B2Vec2(box2D.common.math.B2Math.dot(v,A.col1),box2D.common.math.B2Math.dot(v,A.col2));
	return u;
}
box2D.common.math.B2Math.mulX = function(T,v) {
	var a = box2D.common.math.B2Math.mulMV(T.R,v);
	a.x += T.position.x;
	a.y += T.position.y;
	return a;
}
box2D.common.math.B2Math.mulXT = function(T,v) {
	var a = box2D.common.math.B2Math.subtractVV(v,T.position);
	var tX = a.x * T.R.col1.x + a.y * T.R.col1.y;
	a.y = a.x * T.R.col2.x + a.y * T.R.col2.y;
	a.x = tX;
	return a;
}
box2D.common.math.B2Math.addVV = function(a,b) {
	var v = new box2D.common.math.B2Vec2(a.x + b.x,a.y + b.y);
	return v;
}
box2D.common.math.B2Math.subtractVV = function(a,b) {
	var v = new box2D.common.math.B2Vec2(a.x - b.x,a.y - b.y);
	return v;
}
box2D.common.math.B2Math.distance = function(a,b) {
	var cX = a.x - b.x;
	var cY = a.y - b.y;
	return Math.sqrt(cX * cX + cY * cY);
}
box2D.common.math.B2Math.distanceSquared = function(a,b) {
	var cX = a.x - b.x;
	var cY = a.y - b.y;
	return cX * cX + cY * cY;
}
box2D.common.math.B2Math.mulFV = function(s,a) {
	var v = new box2D.common.math.B2Vec2(s * a.x,s * a.y);
	return v;
}
box2D.common.math.B2Math.addMM = function(A,B) {
	var C = box2D.common.math.B2Mat22.fromVV(box2D.common.math.B2Math.addVV(A.col1,B.col1),box2D.common.math.B2Math.addVV(A.col2,B.col2));
	return C;
}
box2D.common.math.B2Math.mulMM = function(A,B) {
	var C = box2D.common.math.B2Mat22.fromVV(box2D.common.math.B2Math.mulMV(A,B.col1),box2D.common.math.B2Math.mulMV(A,B.col2));
	return C;
}
box2D.common.math.B2Math.mulTMM = function(A,B) {
	var c1 = new box2D.common.math.B2Vec2(box2D.common.math.B2Math.dot(A.col1,B.col1),box2D.common.math.B2Math.dot(A.col2,B.col1));
	var c2 = new box2D.common.math.B2Vec2(box2D.common.math.B2Math.dot(A.col1,B.col2),box2D.common.math.B2Math.dot(A.col2,B.col2));
	var C = box2D.common.math.B2Mat22.fromVV(c1,c2);
	return C;
}
box2D.common.math.B2Math.abs = function(a) {
	return a > 0.0?a:-a;
}
box2D.common.math.B2Math.absV = function(a) {
	var b = new box2D.common.math.B2Vec2(box2D.common.math.B2Math.abs(a.x),box2D.common.math.B2Math.abs(a.y));
	return b;
}
box2D.common.math.B2Math.absM = function(A) {
	var B = box2D.common.math.B2Mat22.fromVV(box2D.common.math.B2Math.absV(A.col1),box2D.common.math.B2Math.absV(A.col2));
	return B;
}
box2D.common.math.B2Math.min = function(a,b) {
	return a < b?a:b;
}
box2D.common.math.B2Math.minV = function(a,b) {
	var c = new box2D.common.math.B2Vec2(box2D.common.math.B2Math.min(a.x,b.x),box2D.common.math.B2Math.min(a.y,b.y));
	return c;
}
box2D.common.math.B2Math.max = function(a,b) {
	return a > b?a:b;
}
box2D.common.math.B2Math.maxV = function(a,b) {
	var c = new box2D.common.math.B2Vec2(box2D.common.math.B2Math.max(a.x,b.x),box2D.common.math.B2Math.max(a.y,b.y));
	return c;
}
box2D.common.math.B2Math.clamp = function(a,low,high) {
	return a < low?low:a > high?high:a;
}
box2D.common.math.B2Math.clampV = function(a,low,high) {
	return box2D.common.math.B2Math.maxV(low,box2D.common.math.B2Math.minV(a,high));
}
box2D.common.math.B2Math.swap = function(a,b) {
	var tmp = a[0];
	a[0] = b[0];
	b[0] = tmp;
}
box2D.common.math.B2Math.random = function() {
	return Math.random() * 2 - 1;
}
box2D.common.math.B2Math.randomRange = function(lo,hi) {
	var r = Math.random();
	r = (hi - lo) * r + lo;
	return r;
}
box2D.common.math.B2Math.nextPowerOfTwo = function(x) {
	x |= x >> 1 & 2147483647;
	x |= x >> 2 & 1073741823;
	x |= x >> 4 & 268435455;
	x |= x >> 8 & 16777215;
	x |= x >> 16 & 65535;
	return x + 1;
}
box2D.common.math.B2Math.isPowerOfTwo = function(x) {
	var result = x > 0 && (x & x - 1) == 0;
	return result;
}
box2D.common.math.B2Math.prototype.__class__ = box2D.common.math.B2Math;
ApplicationMain = function() { }
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.completed = null;
ApplicationMain.preloader = null;
ApplicationMain.total = null;
ApplicationMain.loaders = null;
ApplicationMain.urlLoaders = null;
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new Hash();
	ApplicationMain.urlLoaders = new Hash();
	ApplicationMain.total = 0;
	ApplicationMain.preloader = new NMEPreloader();
	jeash.Lib.jeashGetCurrent().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader = ApplicationMain.loaders.get(path);
			loader.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader.load(new jeash.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new jeash.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener(jeash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
}
ApplicationMain.getAsset = function(inName) {
	return null;
}
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(jeash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	jeash.Lib.jeashGetCurrent().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	fr.aymericlamboley.test.Main.main();
}
ApplicationMain.prototype.__class__ = ApplicationMain;
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	return haxe.Stack.makeStack("$s");
}
haxe.Stack.exceptionStack = function() {
	return haxe.Stack.makeStack("$e");
}
haxe.Stack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b[b.b.length] = "\nCalled from " == null?"null":"\nCalled from ";
		haxe.Stack.itemToString(b,s);
	}
	return b.b.join("");
}
haxe.Stack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b[b.b.length] = "a C function" == null?"null":"a C function";
		break;
	case 1:
		var m = $e[2];
		b.b[b.b.length] = "module " == null?"null":"module ";
		b.b[b.b.length] = m == null?"null":m;
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b[b.b.length] = " (" == null?"null":" (";
		}
		b.b[b.b.length] = file == null?"null":file;
		b.b[b.b.length] = " line " == null?"null":" line ";
		b.b[b.b.length] = line == null?"null":line;
		if(s1 != null) b.b[b.b.length] = ")" == null?"null":")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b[b.b.length] = cname == null?"null":cname;
		b.b[b.b.length] = "." == null?"null":".";
		b.b[b.b.length] = meth == null?"null":meth;
		break;
	case 4:
		var n = $e[2];
		b.b[b.b.length] = "local function #" == null?"null":"local function #";
		b.b[b.b.length] = n == null?"null":n;
		break;
	}
}
haxe.Stack.makeStack = function(s) {
	var a = (function($this) {
		var $r;
		try {
			$r = eval(s);
		} catch( e ) {
			$r = [];
		}
		return $r;
	}(this));
	var m = new Array();
	var _g1 = 0, _g = a.length - (s == "$s"?2:0);
	while(_g1 < _g) {
		var i = _g1++;
		var d = a[i].split("::");
		m.unshift(haxe.StackItem.Method(d[0],d[1]));
	}
	return m;
}
haxe.Stack.prototype.__class__ = haxe.Stack;
box2D.collision.B2Simplex = function(p) {
	if( p === $_ ) return;
	this.m_v1 = new box2D.collision.B2SimplexVertex();
	this.m_v2 = new box2D.collision.B2SimplexVertex();
	this.m_v3 = new box2D.collision.B2SimplexVertex();
	this.m_vertices = new Array();
	this.m_vertices[0] = this.m_v1;
	this.m_vertices[1] = this.m_v2;
	this.m_vertices[2] = this.m_v3;
}
box2D.collision.B2Simplex.__name__ = ["box2D","collision","B2Simplex"];
box2D.collision.B2Simplex.prototype.readCache = function(cache,proxyA,transformA,proxyB,transformB) {
	box2D.common.B2Settings.b2Assert(0 <= cache.count && cache.count <= 3);
	var wALocal;
	var wBLocal;
	this.m_count = cache.count;
	var vertices = this.m_vertices;
	var v;
	var _g1 = 0, _g = this.m_count;
	while(_g1 < _g) {
		var i = _g1++;
		v = vertices[i];
		v.indexA = cache.indexA[i];
		v.indexB = cache.indexB[i];
		wALocal = proxyA.getVertex(v.indexA);
		wBLocal = proxyB.getVertex(v.indexB);
		v.wA = box2D.common.math.B2Math.mulX(transformA,wALocal);
		v.wB = box2D.common.math.B2Math.mulX(transformB,wBLocal);
		v.w = box2D.common.math.B2Math.subtractVV(v.wB,v.wA);
		v.a = 0;
	}
	if(this.m_count > 1) {
		var metric1 = cache.metric;
		var metric2 = this.getMetric();
		if(metric2 < .5 * metric1 || 2.0 * metric1 < metric2 || metric2 < Number.MIN_VALUE) this.m_count = 0;
	}
	if(this.m_count == 0) {
		v = vertices[0];
		v.indexA = 0;
		v.indexB = 0;
		wALocal = proxyA.getVertex(0);
		wBLocal = proxyB.getVertex(0);
		v.wA = box2D.common.math.B2Math.mulX(transformA,wALocal);
		v.wB = box2D.common.math.B2Math.mulX(transformB,wBLocal);
		v.w = box2D.common.math.B2Math.subtractVV(v.wB,v.wA);
		this.m_count = 1;
	}
}
box2D.collision.B2Simplex.prototype.writeCache = function(cache) {
	cache.metric = this.getMetric();
	cache.count = Std["int"](this.m_count);
	var vertices = this.m_vertices;
	var _g1 = 0, _g = this.m_count;
	while(_g1 < _g) {
		var i = _g1++;
		cache.indexA[i] = Std["int"](vertices[i].indexA);
		cache.indexB[i] = Std["int"](vertices[i].indexB);
	}
}
box2D.collision.B2Simplex.prototype.getSearchDirection = function() {
	switch(this.m_count) {
	case 1:
		return this.m_v1.w.getNegative();
	case 2:
		var e12 = box2D.common.math.B2Math.subtractVV(this.m_v2.w,this.m_v1.w);
		var sgn = box2D.common.math.B2Math.crossVV(e12,this.m_v1.w.getNegative());
		if(sgn > 0.0) return box2D.common.math.B2Math.crossFV(1.0,e12); else return box2D.common.math.B2Math.crossVF(e12,1.0);
		break;
	default:
		box2D.common.B2Settings.b2Assert(false);
		return new box2D.common.math.B2Vec2();
	}
}
box2D.collision.B2Simplex.prototype.getClosestPoint = function() {
	switch(this.m_count) {
	case 0:
		box2D.common.B2Settings.b2Assert(false);
		return new box2D.common.math.B2Vec2();
	case 1:
		return this.m_v1.w;
	case 2:
		return new box2D.common.math.B2Vec2(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x,this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
	default:
		box2D.common.B2Settings.b2Assert(false);
		return new box2D.common.math.B2Vec2();
	}
}
box2D.collision.B2Simplex.prototype.getWitnessPoints = function(pA,pB) {
	switch(this.m_count) {
	case 0:
		box2D.common.B2Settings.b2Assert(false);
		break;
	case 1:
		pA.setV(this.m_v1.wA);
		pB.setV(this.m_v1.wB);
		break;
	case 2:
		pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
		pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
		pB.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
		pB.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
		break;
	case 3:
		pB.x = pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
		pB.y = pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
		break;
	default:
		box2D.common.B2Settings.b2Assert(false);
	}
}
box2D.collision.B2Simplex.prototype.getMetric = function() {
	switch(this.m_count) {
	case 0:
		box2D.common.B2Settings.b2Assert(false);
		return 0.0;
	case 1:
		return 0.0;
	case 2:
		return box2D.common.math.B2Math.subtractVV(this.m_v1.w,this.m_v2.w).length();
	case 3:
		return box2D.common.math.B2Math.crossVV(box2D.common.math.B2Math.subtractVV(this.m_v2.w,this.m_v1.w),box2D.common.math.B2Math.subtractVV(this.m_v3.w,this.m_v1.w));
	default:
		box2D.common.B2Settings.b2Assert(false);
		return 0.0;
	}
}
box2D.collision.B2Simplex.prototype.solve2 = function() {
	var w1 = this.m_v1.w;
	var w2 = this.m_v2.w;
	var e12 = box2D.common.math.B2Math.subtractVV(w2,w1);
	var d12_2 = -(w1.x * e12.x + w1.y * e12.y);
	if(d12_2 <= 0.0) {
		this.m_v1.a = 1.0;
		this.m_count = 1;
		return;
	}
	var d12_1 = w2.x * e12.x + w2.y * e12.y;
	if(d12_1 <= 0.0) {
		this.m_v2.a = 1.0;
		this.m_count = 1;
		this.m_v1.set(this.m_v2);
		return;
	}
	var inv_d12 = 1.0 / (d12_1 + d12_2);
	this.m_v1.a = d12_1 * inv_d12;
	this.m_v2.a = d12_2 * inv_d12;
	this.m_count = 2;
}
box2D.collision.B2Simplex.prototype.solve3 = function() {
	var w1 = this.m_v1.w;
	var w2 = this.m_v2.w;
	var w3 = this.m_v3.w;
	var e12 = box2D.common.math.B2Math.subtractVV(w2,w1);
	var w1e12 = box2D.common.math.B2Math.dot(w1,e12);
	var w2e12 = box2D.common.math.B2Math.dot(w2,e12);
	var d12_1 = w2e12;
	var d12_2 = -w1e12;
	var e13 = box2D.common.math.B2Math.subtractVV(w3,w1);
	var w1e13 = box2D.common.math.B2Math.dot(w1,e13);
	var w3e13 = box2D.common.math.B2Math.dot(w3,e13);
	var d13_1 = w3e13;
	var d13_2 = -w1e13;
	var e23 = box2D.common.math.B2Math.subtractVV(w3,w2);
	var w2e23 = box2D.common.math.B2Math.dot(w2,e23);
	var w3e23 = box2D.common.math.B2Math.dot(w3,e23);
	var d23_1 = w3e23;
	var d23_2 = -w2e23;
	var n123 = box2D.common.math.B2Math.crossVV(e12,e13);
	var d123_1 = n123 * box2D.common.math.B2Math.crossVV(w2,w3);
	var d123_2 = n123 * box2D.common.math.B2Math.crossVV(w3,w1);
	var d123_3 = n123 * box2D.common.math.B2Math.crossVV(w1,w2);
	if(d12_2 <= 0.0 && d13_2 <= 0.0) {
		this.m_v1.a = 1.0;
		this.m_count = 1;
		return;
	}
	if(d12_1 > 0.0 && d12_2 > 0.0 && d123_3 <= 0.0) {
		var inv_d12 = 1.0 / (d12_1 + d12_2);
		this.m_v1.a = d12_1 * inv_d12;
		this.m_v2.a = d12_2 * inv_d12;
		this.m_count = 2;
		return;
	}
	if(d13_1 > 0.0 && d13_2 > 0.0 && d123_2 <= 0.0) {
		var inv_d13 = 1.0 / (d13_1 + d13_2);
		this.m_v1.a = d13_1 * inv_d13;
		this.m_v3.a = d13_2 * inv_d13;
		this.m_count = 2;
		this.m_v2.set(this.m_v3);
		return;
	}
	if(d12_1 <= 0.0 && d23_2 <= 0.0) {
		this.m_v2.a = 1.0;
		this.m_count = 1;
		this.m_v1.set(this.m_v2);
		return;
	}
	if(d13_1 <= 0.0 && d23_1 <= 0.0) {
		this.m_v3.a = 1.0;
		this.m_count = 1;
		this.m_v1.set(this.m_v3);
		return;
	}
	if(d23_1 > 0.0 && d23_2 > 0.0 && d123_1 <= 0.0) {
		var inv_d23 = 1.0 / (d23_1 + d23_2);
		this.m_v2.a = d23_1 * inv_d23;
		this.m_v3.a = d23_2 * inv_d23;
		this.m_count = 2;
		this.m_v1.set(this.m_v3);
		return;
	}
	var inv_d123 = 1.0 / (d123_1 + d123_2 + d123_3);
	this.m_v1.a = d123_1 * inv_d123;
	this.m_v2.a = d123_2 * inv_d123;
	this.m_v3.a = d123_3 * inv_d123;
	this.m_count = 3;
}
box2D.collision.B2Simplex.prototype.m_v1 = null;
box2D.collision.B2Simplex.prototype.m_v2 = null;
box2D.collision.B2Simplex.prototype.m_v3 = null;
box2D.collision.B2Simplex.prototype.m_vertices = null;
box2D.collision.B2Simplex.prototype.m_count = null;
box2D.collision.B2Simplex.prototype.__class__ = box2D.collision.B2Simplex;
box2D.collision.B2Distance = function() { }
box2D.collision.B2Distance.__name__ = ["box2D","collision","B2Distance"];
box2D.collision.B2Distance.b2_gjkCalls = null;
box2D.collision.B2Distance.b2_gjkIters = null;
box2D.collision.B2Distance.b2_gjkMaxIters = null;
box2D.collision.B2Distance.distance = function(output,cache,input) {
	++box2D.collision.B2Distance.b2_gjkCalls;
	var proxyA = input.proxyA;
	var proxyB = input.proxyB;
	var transformA = input.transformA;
	var transformB = input.transformB;
	var simplex = box2D.collision.B2Distance.s_simplex;
	simplex.readCache(cache,proxyA,transformA,proxyB,transformB);
	var vertices = simplex.m_vertices;
	var k_maxIters = 20;
	var saveA = box2D.collision.B2Distance.s_saveA;
	var saveB = box2D.collision.B2Distance.s_saveB;
	var saveCount = 0;
	var closestPoint = simplex.getClosestPoint();
	var distanceSqr1 = closestPoint.lengthSquared();
	var distanceSqr2 = distanceSqr1;
	var i;
	var p;
	var iter = 0;
	while(iter < k_maxIters) {
		saveCount = simplex.m_count;
		var _g = 0;
		while(_g < saveCount) {
			var i1 = _g++;
			saveA[i1] = vertices[i1].indexA;
			saveB[i1] = vertices[i1].indexB;
		}
		switch(simplex.m_count) {
		case 1:
			break;
		case 2:
			simplex.solve2();
			break;
		case 3:
			simplex.solve3();
			break;
		default:
			box2D.common.B2Settings.b2Assert(false);
		}
		if(simplex.m_count == 3) break;
		p = simplex.getClosestPoint();
		distanceSqr2 = p.lengthSquared();
		if(distanceSqr2 > distanceSqr1) {
		}
		distanceSqr1 = distanceSqr2;
		var d = simplex.getSearchDirection();
		if(d.lengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
		var vertex = vertices[simplex.m_count];
		vertex.indexA = Std["int"](proxyA.getSupport(box2D.common.math.B2Math.mulTMV(transformA.R,d.getNegative())));
		vertex.wA = box2D.common.math.B2Math.mulX(transformA,proxyA.getVertex(vertex.indexA));
		vertex.indexB = Std["int"](proxyB.getSupport(box2D.common.math.B2Math.mulTMV(transformB.R,d)));
		vertex.wB = box2D.common.math.B2Math.mulX(transformB,proxyB.getVertex(vertex.indexB));
		vertex.w = box2D.common.math.B2Math.subtractVV(vertex.wB,vertex.wA);
		++iter;
		++box2D.collision.B2Distance.b2_gjkIters;
		var duplicate = false;
		var _g = 0;
		while(_g < saveCount) {
			var i1 = _g++;
			if(vertex.indexA == saveA[i1] && vertex.indexB == saveB[i1]) {
				duplicate = true;
				break;
			}
		}
		if(duplicate) break;
		++simplex.m_count;
	}
	box2D.collision.B2Distance.b2_gjkMaxIters = Std["int"](box2D.common.math.B2Math.max(box2D.collision.B2Distance.b2_gjkMaxIters,iter));
	simplex.getWitnessPoints(output.pointA,output.pointB);
	output.distance = box2D.common.math.B2Math.subtractVV(output.pointA,output.pointB).length();
	output.iterations = iter;
	simplex.writeCache(cache);
	if(input.useRadii) {
		var rA = proxyA.m_radius;
		var rB = proxyB.m_radius;
		if(output.distance > rA + rB && output.distance > Number.MIN_VALUE) {
			output.distance -= rA + rB;
			var normal = box2D.common.math.B2Math.subtractVV(output.pointB,output.pointA);
			normal.normalize();
			output.pointA.x += rA * normal.x;
			output.pointA.y += rA * normal.y;
			output.pointB.x -= rB * normal.x;
			output.pointB.y -= rB * normal.y;
		} else {
			p = new box2D.common.math.B2Vec2();
			p.x = .5 * (output.pointA.x + output.pointB.x);
			p.y = .5 * (output.pointA.y + output.pointB.y);
			output.pointA.x = output.pointB.x = p.x;
			output.pointA.y = output.pointB.y = p.y;
			output.distance = 0.0;
		}
	}
}
box2D.collision.B2Distance.prototype.__class__ = box2D.collision.B2Distance;
box2D.dynamics.B2BodyDef = function(p) {
	if( p === $_ ) return;
	this.position = new box2D.common.math.B2Vec2();
	this.linearVelocity = new box2D.common.math.B2Vec2();
	this.userData = null;
	this.angle = 0.0;
	this.angularVelocity = 0.0;
	this.linearDamping = 0.0;
	this.angularDamping = 0.0;
	this.allowSleep = true;
	this.awake = true;
	this.fixedRotation = false;
	this.bullet = false;
	this.type = box2D.dynamics.B2Body.b2_staticBody;
	this.active = true;
	this.inertiaScale = 1.0;
}
box2D.dynamics.B2BodyDef.__name__ = ["box2D","dynamics","B2BodyDef"];
box2D.dynamics.B2BodyDef.prototype.type = null;
box2D.dynamics.B2BodyDef.prototype.position = null;
box2D.dynamics.B2BodyDef.prototype.angle = null;
box2D.dynamics.B2BodyDef.prototype.linearVelocity = null;
box2D.dynamics.B2BodyDef.prototype.angularVelocity = null;
box2D.dynamics.B2BodyDef.prototype.linearDamping = null;
box2D.dynamics.B2BodyDef.prototype.angularDamping = null;
box2D.dynamics.B2BodyDef.prototype.allowSleep = null;
box2D.dynamics.B2BodyDef.prototype.awake = null;
box2D.dynamics.B2BodyDef.prototype.fixedRotation = null;
box2D.dynamics.B2BodyDef.prototype.bullet = null;
box2D.dynamics.B2BodyDef.prototype.active = null;
box2D.dynamics.B2BodyDef.prototype.userData = null;
box2D.dynamics.B2BodyDef.prototype.inertiaScale = null;
box2D.dynamics.B2BodyDef.prototype.__class__ = box2D.dynamics.B2BodyDef;
box2D.collision.B2ContactID = function(p) {
	if( p === $_ ) return;
	this.features = new box2D.collision.Features();
	this.features._m_id = this;
}
box2D.collision.B2ContactID.__name__ = ["box2D","collision","B2ContactID"];
box2D.collision.B2ContactID.prototype.set = function(id) {
	this.setKey(id._key);
}
box2D.collision.B2ContactID.prototype.copy = function() {
	var id = new box2D.collision.B2ContactID();
	id.setKey(this.getKey());
	return id;
}
box2D.collision.B2ContactID.prototype.key = null;
box2D.collision.B2ContactID.prototype.getKey = function() {
	return this._key;
}
box2D.collision.B2ContactID.prototype.setKey = function(value) {
	this._key = value;
	this.features._referenceEdge = this._key & 255;
	this.features._incidentEdge = (this._key & 65280) >> 8 & 255;
	this.features._incidentVertex = (this._key & 16711680) >> 16 & 255;
	this.features._flip = (this._key & -16777216) >> 24 & 255;
	return this._key;
}
box2D.collision.B2ContactID.prototype.features = null;
box2D.collision.B2ContactID.prototype._key = null;
box2D.collision.B2ContactID.prototype.__class__ = box2D.collision.B2ContactID;
box2D.collision.shapes.B2MassData = function(p) {
	if( p === $_ ) return;
	this.mass = 0.0;
	this.center = new box2D.common.math.B2Vec2(0,0);
	this.I = 0.0;
}
box2D.collision.shapes.B2MassData.__name__ = ["box2D","collision","shapes","B2MassData"];
box2D.collision.shapes.B2MassData.prototype.mass = null;
box2D.collision.shapes.B2MassData.prototype.center = null;
box2D.collision.shapes.B2MassData.prototype.I = null;
box2D.collision.shapes.B2MassData.prototype.__class__ = box2D.collision.shapes.B2MassData;
box2D.collision.B2AABB = function(p) {
	if( p === $_ ) return;
	this.lowerBound = new box2D.common.math.B2Vec2();
	this.upperBound = new box2D.common.math.B2Vec2();
}
box2D.collision.B2AABB.__name__ = ["box2D","collision","B2AABB"];
box2D.collision.B2AABB.prototype.isValid = function() {
	var dX = this.upperBound.x - this.lowerBound.x;
	var dY = this.upperBound.y - this.lowerBound.y;
	var valid = dX >= 0.0 && dY >= 0.0;
	valid = valid && this.lowerBound.isValid() && this.upperBound.isValid();
	return valid;
}
box2D.collision.B2AABB.prototype.getCenter = function() {
	return new box2D.common.math.B2Vec2((this.lowerBound.x + this.upperBound.x) / 2,(this.lowerBound.y + this.upperBound.y) / 2);
}
box2D.collision.B2AABB.prototype.getExtents = function() {
	return new box2D.common.math.B2Vec2((this.upperBound.x - this.lowerBound.x) / 2,(this.upperBound.y - this.lowerBound.y) / 2);
}
box2D.collision.B2AABB.prototype.contains = function(aabb) {
	var result = true;
	result = result && this.lowerBound.x <= aabb.lowerBound.x;
	result = result && this.lowerBound.y <= aabb.lowerBound.y;
	result = result && aabb.upperBound.x <= this.upperBound.x;
	result = result && aabb.upperBound.y <= this.upperBound.y;
	return result;
}
box2D.collision.B2AABB.prototype.rayCast = function(output,input) {
	var tmin = -Number.MAX_VALUE;
	var tmax = Number.MAX_VALUE;
	var pX = input.p1.x;
	var pY = input.p1.y;
	var dX = input.p2.x - input.p1.x;
	var dY = input.p2.y - input.p1.y;
	var absDX = Math.abs(dX);
	var absDY = Math.abs(dY);
	var normal = output.normal;
	var inv_d;
	var t1;
	var t2;
	var t3;
	var s;
	if(absDX < Number.MIN_VALUE) {
		if(pX < this.lowerBound.x || this.upperBound.x < pX) return false;
	} else {
		inv_d = 1.0 / dX;
		t1 = (this.lowerBound.x - pX) * inv_d;
		t2 = (this.upperBound.x - pX) * inv_d;
		s = -1.0;
		if(t1 > t2) {
			t3 = t1;
			t1 = t2;
			t2 = t3;
			s = 1.0;
		}
		if(t1 > tmin) {
			normal.x = s;
			normal.y = 0;
			tmin = t1;
		}
		tmax = Math.min(tmax,t2);
		if(tmin > tmax) return false;
	}
	if(absDY < Number.MIN_VALUE) {
		if(pY < this.lowerBound.y || this.upperBound.y < pY) return false;
	} else {
		inv_d = 1.0 / dY;
		t1 = (this.lowerBound.y - pY) * inv_d;
		t2 = (this.upperBound.y - pY) * inv_d;
		s = -1.0;
		if(t1 > t2) {
			t3 = t1;
			t1 = t2;
			t2 = t3;
			s = 1.0;
		}
		if(t1 > tmin) {
			normal.y = s;
			normal.x = 0;
			tmin = t1;
		}
		tmax = Math.min(tmax,t2);
		if(tmin > tmax) return false;
	}
	output.fraction = tmin;
	return true;
}
box2D.collision.B2AABB.prototype.testOverlap = function(other) {
	var d1X = other.lowerBound.x - this.upperBound.x;
	var d1Y = other.lowerBound.y - this.upperBound.y;
	var d2X = this.lowerBound.x - other.upperBound.x;
	var d2Y = this.lowerBound.y - other.upperBound.y;
	if(d1X > 0.0 || d1Y > 0.0) return false;
	if(d2X > 0.0 || d2Y > 0.0) return false;
	return true;
}
box2D.collision.B2AABB.prototype.combine = function(aabb1,aabb2) {
	this.lowerBound.x = Math.min(aabb1.lowerBound.x,aabb2.lowerBound.x);
	this.lowerBound.y = Math.min(aabb1.lowerBound.y,aabb2.lowerBound.y);
	this.upperBound.x = Math.max(aabb1.upperBound.x,aabb2.upperBound.x);
	this.upperBound.y = Math.max(aabb1.upperBound.y,aabb2.upperBound.y);
}
box2D.collision.B2AABB.prototype.lowerBound = null;
box2D.collision.B2AABB.prototype.upperBound = null;
box2D.collision.B2AABB.prototype.__class__ = box2D.collision.B2AABB;
box2D.dynamics.contacts.B2PolyAndEdgeContact = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.contacts.B2Contact.call(this);
}
box2D.dynamics.contacts.B2PolyAndEdgeContact.__name__ = ["box2D","dynamics","contacts","B2PolyAndEdgeContact"];
box2D.dynamics.contacts.B2PolyAndEdgeContact.__super__ = box2D.dynamics.contacts.B2Contact;
for(var k in box2D.dynamics.contacts.B2Contact.prototype ) box2D.dynamics.contacts.B2PolyAndEdgeContact.prototype[k] = box2D.dynamics.contacts.B2Contact.prototype[k];
box2D.dynamics.contacts.B2PolyAndEdgeContact.create = function(allocator) {
	return new box2D.dynamics.contacts.B2PolyAndEdgeContact();
}
box2D.dynamics.contacts.B2PolyAndEdgeContact.destroy = function(contact,allocator) {
}
box2D.dynamics.contacts.B2PolyAndEdgeContact.prototype.reset = function(fixtureA,fixtureB) {
	box2D.dynamics.contacts.B2Contact.prototype.reset.call(this,fixtureA,fixtureB);
	box2D.common.B2Settings.b2Assert(fixtureA.getType() == box2D.collision.shapes.B2Shape.e_polygonShape);
	box2D.common.B2Settings.b2Assert(fixtureB.getType() == box2D.collision.shapes.B2Shape.e_edgeShape);
}
box2D.dynamics.contacts.B2PolyAndEdgeContact.prototype.evaluate = function() {
	var bA = this.m_fixtureA.getBody();
	var bB = this.m_fixtureB.getBody();
	this.b2CollidePolyAndEdge(this.m_manifold,(function($this) {
		var $r;
		var $t = $this.m_fixtureA.getShape();
		if(Std["is"]($t,box2D.collision.shapes.B2PolygonShape)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),bA.m_xf,(function($this) {
		var $r;
		var $t = $this.m_fixtureB.getShape();
		if(Std["is"]($t,box2D.collision.shapes.B2EdgeShape)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),bB.m_xf);
}
box2D.dynamics.contacts.B2PolyAndEdgeContact.prototype.b2CollidePolyAndEdge = function(manifold,polygon,xf1,edge,xf2) {
}
box2D.dynamics.contacts.B2PolyAndEdgeContact.prototype.__class__ = box2D.dynamics.contacts.B2PolyAndEdgeContact;
box2D.collision.B2DynamicTreeBroadPhase = function(p) {
	if( p === $_ ) return;
	this.m_tree = new box2D.collision.B2DynamicTree();
	this.m_moveBuffer = new Array();
	this.m_pairBuffer = new Array();
	this.m_pairCount = 0;
}
box2D.collision.B2DynamicTreeBroadPhase.__name__ = ["box2D","collision","B2DynamicTreeBroadPhase"];
box2D.collision.B2DynamicTreeBroadPhase.prototype.createProxy = function(aabb,userData) {
	var proxy = this.m_tree.createProxy(aabb,userData);
	++this.m_proxyCount;
	this.bufferMove(proxy);
	return proxy;
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.destroyProxy = function(proxy) {
	this.unBufferMove(proxy);
	--this.m_proxyCount;
	this.m_tree.destroyProxy(proxy);
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.moveProxy = function(proxy,aabb,displacement) {
	var buffer = this.m_tree.moveProxy(proxy,aabb,displacement);
	if(buffer) this.bufferMove(proxy);
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.testOverlap = function(proxyA,proxyB) {
	var aabbA = this.m_tree.getFatAABB(proxyA);
	var aabbB = this.m_tree.getFatAABB(proxyB);
	return aabbA.testOverlap(aabbB);
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.getUserData = function(proxy) {
	return this.m_tree.getUserData(proxy);
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.getFatAABB = function(proxy) {
	return this.m_tree.getFatAABB(proxy);
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.getProxyCount = function() {
	return this.m_proxyCount;
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.updatePairs = function(callbackMethod) {
	var me = this;
	this.m_pairCount = 0;
	var _g = 0, _g1 = this.m_moveBuffer;
	while(_g < _g1.length) {
		var queryProxy = [_g1[_g]];
		++_g;
		var queryCallback = (function(queryProxy) {
			return function(proxy) {
				if(proxy == queryProxy[0]) return true;
				if(me.m_pairCount == me.m_pairBuffer.length) me.m_pairBuffer[me.m_pairCount] = new box2D.collision.B2DynamicTreePair();
				var pair = me.m_pairBuffer[me.m_pairCount];
				if(proxy.id < queryProxy[0].id) {
					pair.proxyA = proxy;
					pair.proxyB = queryProxy[0];
				} else {
					pair.proxyA = queryProxy[0];
					pair.proxyB = proxy;
				}
				++me.m_pairCount;
				return true;
			};
		})(queryProxy);
		var fatAABB = this.m_tree.getFatAABB(queryProxy[0]);
		this.m_tree.query(queryCallback,fatAABB);
	}
	this.m_moveBuffer = new Array();
	var pairing = true;
	var i = 0;
	while(pairing) if(i >= this.m_pairCount) pairing = false; else {
		var primaryPair = this.m_pairBuffer[i];
		var userDataA = this.m_tree.getUserData(primaryPair.proxyA);
		var userDataB = this.m_tree.getUserData(primaryPair.proxyB);
		callbackMethod(userDataA,userDataB);
		++i;
		while(i < this.m_pairCount) {
			var pair = this.m_pairBuffer[i];
			if(pair.proxyA != primaryPair.proxyA || pair.proxyB != primaryPair.proxyB) break;
			++i;
		}
	}
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.query = function(callbackMethod,aabb) {
	this.m_tree.query(callbackMethod,aabb);
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.rayCast = function(callbackMethod,input) {
	this.m_tree.rayCast(callbackMethod,input);
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.validate = function() {
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.rebalance = function(iterations) {
	this.m_tree.rebalance(iterations);
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.bufferMove = function(proxy) {
	this.m_moveBuffer[this.m_moveBuffer.length] = proxy;
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.unBufferMove = function(proxy) {
	this.m_moveBuffer.remove(proxy);
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.comparePairs = function(pair1,pair2) {
	return 0;
}
box2D.collision.B2DynamicTreeBroadPhase.prototype.m_tree = null;
box2D.collision.B2DynamicTreeBroadPhase.prototype.m_proxyCount = null;
box2D.collision.B2DynamicTreeBroadPhase.prototype.m_moveBuffer = null;
box2D.collision.B2DynamicTreeBroadPhase.prototype.m_pairBuffer = null;
box2D.collision.B2DynamicTreeBroadPhase.prototype.m_pairCount = null;
box2D.collision.B2DynamicTreeBroadPhase.prototype.__class__ = box2D.collision.B2DynamicTreeBroadPhase;
box2D.collision.B2DynamicTreeBroadPhase.__interfaces__ = [box2D.collision.IBroadPhase];
jeash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if( type === $_ ) return;
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
}
jeash.events.MouseEvent.__name__ = ["jeash","events","MouseEvent"];
jeash.events.MouseEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.MouseEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.MouseEvent.prototype.altKey = null;
jeash.events.MouseEvent.prototype.buttonDown = null;
jeash.events.MouseEvent.prototype.ctrlKey = null;
jeash.events.MouseEvent.prototype.delta = null;
jeash.events.MouseEvent.prototype.localX = null;
jeash.events.MouseEvent.prototype.localY = null;
jeash.events.MouseEvent.prototype.relatedObject = null;
jeash.events.MouseEvent.prototype.shiftKey = null;
jeash.events.MouseEvent.prototype.stageX = null;
jeash.events.MouseEvent.prototype.stageY = null;
jeash.events.MouseEvent.prototype.commandKey = null;
jeash.events.MouseEvent.prototype.clickCount = null;
jeash.events.MouseEvent.prototype.jeashCreateSimilar = function(type,related,targ) {
	var result = new jeash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
	if(targ != null) result.target = targ;
	return result;
}
jeash.events.MouseEvent.prototype.updateAfterEvent = function() {
}
jeash.events.MouseEvent.prototype.__class__ = jeash.events.MouseEvent;
jeash.events.EventPhase = function() { }
jeash.events.EventPhase.__name__ = ["jeash","events","EventPhase"];
jeash.events.EventPhase.prototype.__class__ = jeash.events.EventPhase;
box2D.dynamics.joints.B2LineJoint = function(def) {
	if( def === $_ ) return;
	box2D.dynamics.joints.B2Joint.call(this,def);
	this.m_localAnchor1 = new box2D.common.math.B2Vec2();
	this.m_localAnchor2 = new box2D.common.math.B2Vec2();
	this.m_localXAxis1 = new box2D.common.math.B2Vec2();
	this.m_localYAxis1 = new box2D.common.math.B2Vec2();
	this.m_axis = new box2D.common.math.B2Vec2();
	this.m_perp = new box2D.common.math.B2Vec2();
	this.m_K = new box2D.common.math.B2Mat22();
	this.m_impulse = new box2D.common.math.B2Vec2();
	var tMat;
	var tX;
	var tY;
	this.m_localAnchor1.setV(def.localAnchorA);
	this.m_localAnchor2.setV(def.localAnchorB);
	this.m_localXAxis1.setV(def.localAxisA);
	this.m_localYAxis1.x = -this.m_localXAxis1.y;
	this.m_localYAxis1.y = this.m_localXAxis1.x;
	this.m_impulse.setZero();
	this.m_motorMass = 0.0;
	this.m_motorImpulse = 0.0;
	this.m_lowerTranslation = def.lowerTranslation;
	this.m_upperTranslation = def.upperTranslation;
	this.m_maxMotorForce = def.maxMotorForce;
	this.m_motorSpeed = def.motorSpeed;
	this.m_enableLimit = def.enableLimit;
	this.m_enableMotor = def.enableMotor;
	this.m_limitState = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
	this.m_axis.setZero();
	this.m_perp.setZero();
}
box2D.dynamics.joints.B2LineJoint.__name__ = ["box2D","dynamics","joints","B2LineJoint"];
box2D.dynamics.joints.B2LineJoint.__super__ = box2D.dynamics.joints.B2Joint;
for(var k in box2D.dynamics.joints.B2Joint.prototype ) box2D.dynamics.joints.B2LineJoint.prototype[k] = box2D.dynamics.joints.B2Joint.prototype[k];
box2D.dynamics.joints.B2LineJoint.prototype.getAnchorA = function() {
	return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
}
box2D.dynamics.joints.B2LineJoint.prototype.getAnchorB = function() {
	return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
}
box2D.dynamics.joints.B2LineJoint.prototype.getReactionForce = function(inv_dt) {
	return new box2D.common.math.B2Vec2(inv_dt * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x),inv_dt * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y));
}
box2D.dynamics.joints.B2LineJoint.prototype.getReactionTorque = function(inv_dt) {
	return inv_dt * this.m_impulse.y;
}
box2D.dynamics.joints.B2LineJoint.prototype.getJointTranslation = function() {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var tMat;
	var p1 = bA.getWorldPoint(this.m_localAnchor1);
	var p2 = bB.getWorldPoint(this.m_localAnchor2);
	var dX = p2.x - p1.x;
	var dY = p2.y - p1.y;
	var axis = bA.getWorldVector(this.m_localXAxis1);
	var translation = axis.x * dX + axis.y * dY;
	return translation;
}
box2D.dynamics.joints.B2LineJoint.prototype.getJointSpeed = function() {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var tMat;
	tMat = bA.m_xf.R;
	var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
	var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
	var tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = bB.m_xf.R;
	var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
	var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var p1X = bA.m_sweep.c.x + r1X;
	var p1Y = bA.m_sweep.c.y + r1Y;
	var p2X = bB.m_sweep.c.x + r2X;
	var p2Y = bB.m_sweep.c.y + r2Y;
	var dX = p2X - p1X;
	var dY = p2Y - p1Y;
	var axis = bA.getWorldVector(this.m_localXAxis1);
	var v1 = bA.m_linearVelocity;
	var v2 = bB.m_linearVelocity;
	var w1 = bA.m_angularVelocity;
	var w2 = bB.m_angularVelocity;
	var speed = dX * (-w1 * axis.y) + dY * (w1 * axis.x) + (axis.x * (v2.x + -w2 * r2Y - v1.x - -w1 * r1Y) + axis.y * (v2.y + w2 * r2X - v1.y - w1 * r1X));
	return speed;
}
box2D.dynamics.joints.B2LineJoint.prototype.isLimitEnabled = function() {
	return this.m_enableLimit;
}
box2D.dynamics.joints.B2LineJoint.prototype.enableLimit = function(flag) {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	this.m_enableLimit = flag;
}
box2D.dynamics.joints.B2LineJoint.prototype.getLowerLimit = function() {
	return this.m_lowerTranslation;
}
box2D.dynamics.joints.B2LineJoint.prototype.getUpperLimit = function() {
	return this.m_upperTranslation;
}
box2D.dynamics.joints.B2LineJoint.prototype.setLimits = function(lower,upper) {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	this.m_lowerTranslation = lower;
	this.m_upperTranslation = upper;
}
box2D.dynamics.joints.B2LineJoint.prototype.isMotorEnabled = function() {
	return this.m_enableMotor;
}
box2D.dynamics.joints.B2LineJoint.prototype.enableMotor = function(flag) {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	this.m_enableMotor = flag;
}
box2D.dynamics.joints.B2LineJoint.prototype.setMotorSpeed = function(speed) {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	this.m_motorSpeed = speed;
}
box2D.dynamics.joints.B2LineJoint.prototype.getMotorSpeed = function() {
	return this.m_motorSpeed;
}
box2D.dynamics.joints.B2LineJoint.prototype.setMaxMotorForce = function(force) {
	this.m_bodyA.setAwake(true);
	this.m_bodyB.setAwake(true);
	this.m_maxMotorForce = force;
}
box2D.dynamics.joints.B2LineJoint.prototype.getMaxMotorForce = function() {
	return this.m_maxMotorForce;
}
box2D.dynamics.joints.B2LineJoint.prototype.getMotorForce = function() {
	return this.m_motorImpulse;
}
box2D.dynamics.joints.B2LineJoint.prototype.initVelocityConstraints = function(step) {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var tMat;
	var tX;
	this.m_localCenterA.setV(bA.getLocalCenter());
	this.m_localCenterB.setV(bB.getLocalCenter());
	var xf1 = bA.getTransform();
	var xf2 = bB.getTransform();
	tMat = bA.m_xf.R;
	var r1X = this.m_localAnchor1.x - this.m_localCenterA.x;
	var r1Y = this.m_localAnchor1.y - this.m_localCenterA.y;
	tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = bB.m_xf.R;
	var r2X = this.m_localAnchor2.x - this.m_localCenterB.x;
	var r2Y = this.m_localAnchor2.y - this.m_localCenterB.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var dX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
	var dY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
	this.m_invMassA = bA.m_invMass;
	this.m_invMassB = bB.m_invMass;
	this.m_invIA = bA.m_invI;
	this.m_invIB = bB.m_invI;
	this.m_axis.setV(box2D.common.math.B2Math.mulMV(xf1.R,this.m_localXAxis1));
	this.m_a1 = (dX + r1X) * this.m_axis.y - (dY + r1Y) * this.m_axis.x;
	this.m_a2 = r2X * this.m_axis.y - r2Y * this.m_axis.x;
	this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
	this.m_motorMass = this.m_motorMass > Number.MIN_VALUE?1.0 / this.m_motorMass:0.0;
	this.m_perp.setV(box2D.common.math.B2Math.mulMV(xf1.R,this.m_localYAxis1));
	this.m_s1 = (dX + r1X) * this.m_perp.y - (dY + r1Y) * this.m_perp.x;
	this.m_s2 = r2X * this.m_perp.y - r2Y * this.m_perp.x;
	var m1 = this.m_invMassA;
	var m2 = this.m_invMassB;
	var i1 = this.m_invIA;
	var i2 = this.m_invIB;
	this.m_K.col1.x = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
	this.m_K.col1.y = i1 * this.m_s1 * this.m_a1 + i2 * this.m_s2 * this.m_a2;
	this.m_K.col2.x = this.m_K.col1.y;
	this.m_K.col2.y = m1 + m2 + i1 * this.m_a1 * this.m_a1 + i2 * this.m_a2 * this.m_a2;
	if(this.m_enableLimit) {
		var jointTransition = this.m_axis.x * dX + this.m_axis.y * dY;
		if(box2D.common.math.B2Math.abs(this.m_upperTranslation - this.m_lowerTranslation) < 2.0 * box2D.common.B2Settings.b2_linearSlop) this.m_limitState = box2D.dynamics.joints.B2Joint.e_equalLimits; else if(jointTransition <= this.m_lowerTranslation) {
			if(this.m_limitState != box2D.dynamics.joints.B2Joint.e_atLowerLimit) {
				this.m_limitState = box2D.dynamics.joints.B2Joint.e_atLowerLimit;
				this.m_impulse.y = 0.0;
			}
		} else if(jointTransition >= this.m_upperTranslation) {
			if(this.m_limitState != box2D.dynamics.joints.B2Joint.e_atUpperLimit) {
				this.m_limitState = box2D.dynamics.joints.B2Joint.e_atUpperLimit;
				this.m_impulse.y = 0.0;
			}
		} else {
			this.m_limitState = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
			this.m_impulse.y = 0.0;
		}
	} else this.m_limitState = box2D.dynamics.joints.B2Joint.e_inactiveLimit;
	if(this.m_enableMotor == false) this.m_motorImpulse = 0.0;
	if(step.warmStarting) {
		this.m_impulse.x *= step.dtRatio;
		this.m_impulse.y *= step.dtRatio;
		this.m_motorImpulse *= step.dtRatio;
		var PX = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x;
		var PY = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y;
		var L1 = this.m_impulse.x * this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1;
		var L2 = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2;
		bA.m_linearVelocity.x -= this.m_invMassA * PX;
		bA.m_linearVelocity.y -= this.m_invMassA * PY;
		bA.m_angularVelocity -= this.m_invIA * L1;
		bB.m_linearVelocity.x += this.m_invMassB * PX;
		bB.m_linearVelocity.y += this.m_invMassB * PY;
		bB.m_angularVelocity += this.m_invIB * L2;
	} else {
		this.m_impulse.setZero();
		this.m_motorImpulse = 0.0;
	}
}
box2D.dynamics.joints.B2LineJoint.prototype.solveVelocityConstraints = function(step) {
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var v1 = bA.m_linearVelocity;
	var w1 = bA.m_angularVelocity;
	var v2 = bB.m_linearVelocity;
	var w2 = bB.m_angularVelocity;
	var PX;
	var PY;
	var L1;
	var L2;
	if(this.m_enableMotor && this.m_limitState != box2D.dynamics.joints.B2Joint.e_equalLimits) {
		var Cdot = this.m_axis.x * (v2.x - v1.x) + this.m_axis.y * (v2.y - v1.y) + this.m_a2 * w2 - this.m_a1 * w1;
		var impulse = this.m_motorMass * (this.m_motorSpeed - Cdot);
		var oldImpulse = this.m_motorImpulse;
		var maxImpulse = step.dt * this.m_maxMotorForce;
		this.m_motorImpulse = box2D.common.math.B2Math.clamp(this.m_motorImpulse + impulse,-maxImpulse,maxImpulse);
		impulse = this.m_motorImpulse - oldImpulse;
		PX = impulse * this.m_axis.x;
		PY = impulse * this.m_axis.y;
		L1 = impulse * this.m_a1;
		L2 = impulse * this.m_a2;
		v1.x -= this.m_invMassA * PX;
		v1.y -= this.m_invMassA * PY;
		w1 -= this.m_invIA * L1;
		v2.x += this.m_invMassB * PX;
		v2.y += this.m_invMassB * PY;
		w2 += this.m_invIB * L2;
	}
	var Cdot1 = this.m_perp.x * (v2.x - v1.x) + this.m_perp.y * (v2.y - v1.y) + this.m_s2 * w2 - this.m_s1 * w1;
	if(this.m_enableLimit && this.m_limitState != box2D.dynamics.joints.B2Joint.e_inactiveLimit) {
		var Cdot2 = this.m_axis.x * (v2.x - v1.x) + this.m_axis.y * (v2.y - v1.y) + this.m_a2 * w2 - this.m_a1 * w1;
		var f1 = this.m_impulse.copy();
		var df = this.m_K.solve(new box2D.common.math.B2Vec2(),-Cdot1,-Cdot2);
		this.m_impulse.add(df);
		if(this.m_limitState == box2D.dynamics.joints.B2Joint.e_atLowerLimit) this.m_impulse.y = box2D.common.math.B2Math.max(this.m_impulse.y,0.0); else if(this.m_limitState == box2D.dynamics.joints.B2Joint.e_atUpperLimit) this.m_impulse.y = box2D.common.math.B2Math.min(this.m_impulse.y,0.0);
		var b = -Cdot1 - (this.m_impulse.y - f1.y) * this.m_K.col2.x;
		var f2r;
		if(this.m_K.col1.x != 0.0) f2r = b / this.m_K.col1.x + f1.x; else f2r = f1.x;
		this.m_impulse.x = f2r;
		df.x = this.m_impulse.x - f1.x;
		df.y = this.m_impulse.y - f1.y;
		PX = df.x * this.m_perp.x + df.y * this.m_axis.x;
		PY = df.x * this.m_perp.y + df.y * this.m_axis.y;
		L1 = df.x * this.m_s1 + df.y * this.m_a1;
		L2 = df.x * this.m_s2 + df.y * this.m_a2;
		v1.x -= this.m_invMassA * PX;
		v1.y -= this.m_invMassA * PY;
		w1 -= this.m_invIA * L1;
		v2.x += this.m_invMassB * PX;
		v2.y += this.m_invMassB * PY;
		w2 += this.m_invIB * L2;
	} else {
		var df2;
		if(this.m_K.col1.x != 0.0) df2 = -Cdot1 / this.m_K.col1.x; else df2 = 0.0;
		this.m_impulse.x += df2;
		PX = df2 * this.m_perp.x;
		PY = df2 * this.m_perp.y;
		L1 = df2 * this.m_s1;
		L2 = df2 * this.m_s2;
		v1.x -= this.m_invMassA * PX;
		v1.y -= this.m_invMassA * PY;
		w1 -= this.m_invIA * L1;
		v2.x += this.m_invMassB * PX;
		v2.y += this.m_invMassB * PY;
		w2 += this.m_invIB * L2;
	}
	bA.m_linearVelocity.setV(v1);
	bA.m_angularVelocity = w1;
	bB.m_linearVelocity.setV(v2);
	bB.m_angularVelocity = w2;
}
box2D.dynamics.joints.B2LineJoint.prototype.solvePositionConstraints = function(baumgarte) {
	var limitC;
	var oldLimitImpulse;
	var bA = this.m_bodyA;
	var bB = this.m_bodyB;
	var c1 = bA.m_sweep.c;
	var a1 = bA.m_sweep.a;
	var c2 = bB.m_sweep.c;
	var a2 = bB.m_sweep.a;
	var tMat;
	var tX;
	var m1;
	var m2;
	var i1;
	var i2;
	var linearError = 0.0;
	var angularError = 0.0;
	var active = false;
	var C2 = 0.0;
	var R1 = box2D.common.math.B2Mat22.fromAngle(a1);
	var R2 = box2D.common.math.B2Mat22.fromAngle(a2);
	tMat = R1;
	var r1X = this.m_localAnchor1.x - this.m_localCenterA.x;
	var r1Y = this.m_localAnchor1.y - this.m_localCenterA.y;
	tX = tMat.col1.x * r1X + tMat.col2.x * r1Y;
	r1Y = tMat.col1.y * r1X + tMat.col2.y * r1Y;
	r1X = tX;
	tMat = R2;
	var r2X = this.m_localAnchor2.x - this.m_localCenterB.x;
	var r2Y = this.m_localAnchor2.y - this.m_localCenterB.y;
	tX = tMat.col1.x * r2X + tMat.col2.x * r2Y;
	r2Y = tMat.col1.y * r2X + tMat.col2.y * r2Y;
	r2X = tX;
	var dX = c2.x + r2X - c1.x - r1X;
	var dY = c2.y + r2Y - c1.y - r1Y;
	if(this.m_enableLimit) {
		this.m_axis = box2D.common.math.B2Math.mulMV(R1,this.m_localXAxis1);
		this.m_a1 = (dX + r1X) * this.m_axis.y - (dY + r1Y) * this.m_axis.x;
		this.m_a2 = r2X * this.m_axis.y - r2Y * this.m_axis.x;
		var translation = this.m_axis.x * dX + this.m_axis.y * dY;
		if(box2D.common.math.B2Math.abs(this.m_upperTranslation - this.m_lowerTranslation) < 2.0 * box2D.common.B2Settings.b2_linearSlop) {
			C2 = box2D.common.math.B2Math.clamp(translation,-box2D.common.B2Settings.b2_maxLinearCorrection,box2D.common.B2Settings.b2_maxLinearCorrection);
			linearError = box2D.common.math.B2Math.abs(translation);
			active = true;
		} else if(translation <= this.m_lowerTranslation) {
			C2 = box2D.common.math.B2Math.clamp(translation - this.m_lowerTranslation + box2D.common.B2Settings.b2_linearSlop,-box2D.common.B2Settings.b2_maxLinearCorrection,0.0);
			linearError = this.m_lowerTranslation - translation;
			active = true;
		} else if(translation >= this.m_upperTranslation) {
			C2 = box2D.common.math.B2Math.clamp(translation - this.m_upperTranslation + box2D.common.B2Settings.b2_linearSlop,0.0,box2D.common.B2Settings.b2_maxLinearCorrection);
			linearError = translation - this.m_upperTranslation;
			active = true;
		}
	}
	this.m_perp = box2D.common.math.B2Math.mulMV(R1,this.m_localYAxis1);
	this.m_s1 = (dX + r1X) * this.m_perp.y - (dY + r1Y) * this.m_perp.x;
	this.m_s2 = r2X * this.m_perp.y - r2Y * this.m_perp.x;
	var impulse = new box2D.common.math.B2Vec2();
	var C1 = this.m_perp.x * dX + this.m_perp.y * dY;
	linearError = box2D.common.math.B2Math.max(linearError,box2D.common.math.B2Math.abs(C1));
	angularError = 0.0;
	if(active) {
		m1 = this.m_invMassA;
		m2 = this.m_invMassB;
		i1 = this.m_invIA;
		i2 = this.m_invIB;
		this.m_K.col1.x = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
		this.m_K.col1.y = i1 * this.m_s1 * this.m_a1 + i2 * this.m_s2 * this.m_a2;
		this.m_K.col2.x = this.m_K.col1.y;
		this.m_K.col2.y = m1 + m2 + i1 * this.m_a1 * this.m_a1 + i2 * this.m_a2 * this.m_a2;
		this.m_K.solve(impulse,-C1,-C2);
	} else {
		m1 = this.m_invMassA;
		m2 = this.m_invMassB;
		i1 = this.m_invIA;
		i2 = this.m_invIB;
		var k11 = m1 + m2 + i1 * this.m_s1 * this.m_s1 + i2 * this.m_s2 * this.m_s2;
		var impulse1;
		if(k11 != 0.0) impulse1 = -C1 / k11; else impulse1 = 0.0;
		impulse.x = impulse1;
		impulse.y = 0.0;
	}
	var PX = impulse.x * this.m_perp.x + impulse.y * this.m_axis.x;
	var PY = impulse.x * this.m_perp.y + impulse.y * this.m_axis.y;
	var L1 = impulse.x * this.m_s1 + impulse.y * this.m_a1;
	var L2 = impulse.x * this.m_s2 + impulse.y * this.m_a2;
	c1.x -= this.m_invMassA * PX;
	c1.y -= this.m_invMassA * PY;
	a1 -= this.m_invIA * L1;
	c2.x += this.m_invMassB * PX;
	c2.y += this.m_invMassB * PY;
	a2 += this.m_invIB * L2;
	bA.m_sweep.a = a1;
	bB.m_sweep.a = a2;
	bA.synchronizeTransform();
	bB.synchronizeTransform();
	return linearError <= box2D.common.B2Settings.b2_linearSlop && angularError <= box2D.common.B2Settings.b2_angularSlop;
}
box2D.dynamics.joints.B2LineJoint.prototype.m_localAnchor1 = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_localAnchor2 = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_localXAxis1 = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_localYAxis1 = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_axis = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_perp = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_s1 = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_s2 = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_a1 = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_a2 = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_K = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_impulse = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_motorMass = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_motorImpulse = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_lowerTranslation = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_upperTranslation = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_maxMotorForce = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_motorSpeed = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_enableLimit = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_enableMotor = null;
box2D.dynamics.joints.B2LineJoint.prototype.m_limitState = null;
box2D.dynamics.joints.B2LineJoint.prototype.__class__ = box2D.dynamics.joints.B2LineJoint;
jeash.display.SpreadMethod = { __ename__ : ["jeash","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] }
jeash.display.SpreadMethod.REPEAT = ["REPEAT",0];
jeash.display.SpreadMethod.REPEAT.toString = $estr;
jeash.display.SpreadMethod.REPEAT.__enum__ = jeash.display.SpreadMethod;
jeash.display.SpreadMethod.REFLECT = ["REFLECT",1];
jeash.display.SpreadMethod.REFLECT.toString = $estr;
jeash.display.SpreadMethod.REFLECT.__enum__ = jeash.display.SpreadMethod;
jeash.display.SpreadMethod.PAD = ["PAD",2];
jeash.display.SpreadMethod.PAD.toString = $estr;
jeash.display.SpreadMethod.PAD.__enum__ = jeash.display.SpreadMethod;
box2D.dynamics.joints.B2PrismaticJointDef = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.joints.B2JointDef.call(this);
	this.localAnchorA = new box2D.common.math.B2Vec2();
	this.localAnchorB = new box2D.common.math.B2Vec2();
	this.localAxisA = new box2D.common.math.B2Vec2();
	this.type = box2D.dynamics.joints.B2Joint.e_prismaticJoint;
	this.localAxisA.set(1.0,0.0);
	this.referenceAngle = 0.0;
	this.enableLimit = false;
	this.lowerTranslation = 0.0;
	this.upperTranslation = 0.0;
	this.enableMotor = false;
	this.maxMotorForce = 0.0;
	this.motorSpeed = 0.0;
}
box2D.dynamics.joints.B2PrismaticJointDef.__name__ = ["box2D","dynamics","joints","B2PrismaticJointDef"];
box2D.dynamics.joints.B2PrismaticJointDef.__super__ = box2D.dynamics.joints.B2JointDef;
for(var k in box2D.dynamics.joints.B2JointDef.prototype ) box2D.dynamics.joints.B2PrismaticJointDef.prototype[k] = box2D.dynamics.joints.B2JointDef.prototype[k];
box2D.dynamics.joints.B2PrismaticJointDef.prototype.initialize = function(bA,bB,anchor,axis) {
	this.bodyA = bA;
	this.bodyB = bB;
	this.localAnchorA = this.bodyA.getLocalPoint(anchor);
	this.localAnchorB = this.bodyB.getLocalPoint(anchor);
	this.localAxisA = this.bodyA.getLocalVector(axis);
	this.referenceAngle = this.bodyB.getAngle() - this.bodyA.getAngle();
}
box2D.dynamics.joints.B2PrismaticJointDef.prototype.localAnchorA = null;
box2D.dynamics.joints.B2PrismaticJointDef.prototype.localAnchorB = null;
box2D.dynamics.joints.B2PrismaticJointDef.prototype.localAxisA = null;
box2D.dynamics.joints.B2PrismaticJointDef.prototype.referenceAngle = null;
box2D.dynamics.joints.B2PrismaticJointDef.prototype.enableLimit = null;
box2D.dynamics.joints.B2PrismaticJointDef.prototype.lowerTranslation = null;
box2D.dynamics.joints.B2PrismaticJointDef.prototype.upperTranslation = null;
box2D.dynamics.joints.B2PrismaticJointDef.prototype.enableMotor = null;
box2D.dynamics.joints.B2PrismaticJointDef.prototype.maxMotorForce = null;
box2D.dynamics.joints.B2PrismaticJointDef.prototype.motorSpeed = null;
box2D.dynamics.joints.B2PrismaticJointDef.prototype.__class__ = box2D.dynamics.joints.B2PrismaticJointDef;
jeash.display.GraphicsSolidFill = function(color,alpha) {
	if( color === $_ ) return;
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.SOLID;
	this.jeashGraphicsFillType = jeash.display.GraphicsFillType.SOLID_FILL;
}
jeash.display.GraphicsSolidFill.__name__ = ["jeash","display","GraphicsSolidFill"];
jeash.display.GraphicsSolidFill.prototype.alpha = null;
jeash.display.GraphicsSolidFill.prototype.color = null;
jeash.display.GraphicsSolidFill.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsSolidFill.prototype.jeashGraphicsFillType = null;
jeash.display.GraphicsSolidFill.prototype.__class__ = jeash.display.GraphicsSolidFill;
jeash.display.GraphicsSolidFill.__interfaces__ = [jeash.display.IGraphicsFill,jeash.display.IGraphicsData];
jeash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if( inX === $_ ) return;
	this.x = inX == null?0:inX;
	this.y = inY == null?0:inY;
	this.width = inWidth == null?0:inWidth;
	this.height = inHeight == null?0:inHeight;
}
jeash.geom.Rectangle.__name__ = ["jeash","geom","Rectangle"];
jeash.geom.Rectangle.prototype.x = null;
jeash.geom.Rectangle.prototype.y = null;
jeash.geom.Rectangle.prototype.width = null;
jeash.geom.Rectangle.prototype.height = null;
jeash.geom.Rectangle.prototype.left = null;
jeash.geom.Rectangle.prototype.get_left = function() {
	return this.x;
}
jeash.geom.Rectangle.prototype.set_left = function(l) {
	this.width -= l - this.x;
	this.x = l;
	return l;
}
jeash.geom.Rectangle.prototype.right = null;
jeash.geom.Rectangle.prototype.get_right = function() {
	return this.x + this.width;
}
jeash.geom.Rectangle.prototype.set_right = function(r) {
	this.width = r - this.x;
	return r;
}
jeash.geom.Rectangle.prototype.top = null;
jeash.geom.Rectangle.prototype.get_top = function() {
	return this.y;
}
jeash.geom.Rectangle.prototype.set_top = function(t) {
	this.height -= t - this.y;
	this.y = t;
	return t;
}
jeash.geom.Rectangle.prototype.bottom = null;
jeash.geom.Rectangle.prototype.get_bottom = function() {
	return this.y + this.height;
}
jeash.geom.Rectangle.prototype.set_bottom = function(b) {
	this.height = b - this.y;
	return b;
}
jeash.geom.Rectangle.prototype.topLeft = null;
jeash.geom.Rectangle.prototype.get_topLeft = function() {
	return new jeash.geom.Point(this.x,this.y);
}
jeash.geom.Rectangle.prototype.set_topLeft = function(p) {
	this.x = p.x;
	this.y = p.y;
	return p.clone();
}
jeash.geom.Rectangle.prototype.size = null;
jeash.geom.Rectangle.prototype.get_size = function() {
	return new jeash.geom.Point(this.width,this.height);
}
jeash.geom.Rectangle.prototype.set_size = function(p) {
	this.width = p.x;
	this.height = p.y;
	return p.clone();
}
jeash.geom.Rectangle.prototype.bottomRight = null;
jeash.geom.Rectangle.prototype.get_bottomRight = function() {
	return new jeash.geom.Point(this.x + this.width,this.y + this.height);
}
jeash.geom.Rectangle.prototype.set_bottomRight = function(p) {
	this.width = p.x - this.x;
	this.height = p.y - this.y;
	return p.clone();
}
jeash.geom.Rectangle.prototype.clone = function() {
	return new jeash.geom.Rectangle(this.x,this.y,this.width,this.height);
}
jeash.geom.Rectangle.prototype.contains = function(inX,inY) {
	return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
}
jeash.geom.Rectangle.prototype.containsPoint = function(point) {
	return this.contains(point.x,point.y);
}
jeash.geom.Rectangle.prototype.containsRect = function(rect) {
	return this.contains(rect.x,rect.y) && this.containsPoint(rect.get_bottomRight());
}
jeash.geom.Rectangle.prototype.equals = function(toCompare) {
	return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
}
jeash.geom.Rectangle.prototype.inflate = function(dx,dy) {
	this.x -= dx;
	this.width += dx * 2;
	this.y -= dy;
	this.height += dy * 2;
}
jeash.geom.Rectangle.prototype.inflatePoint = function(point) {
	this.inflate(point.x,point.y);
}
jeash.geom.Rectangle.prototype.intersection = function(toIntersect) {
	var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
	var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
	if(x1 <= x0) return new jeash.geom.Rectangle();
	var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
	var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
	if(y1 <= y0) return new jeash.geom.Rectangle();
	return new jeash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
}
jeash.geom.Rectangle.prototype.intersects = function(toIntersect) {
	var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
	var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
	if(x1 <= x0) return false;
	var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
	var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
	return y1 > y0;
}
jeash.geom.Rectangle.prototype.union = function(toUnion) {
	var x0 = this.x > toUnion.x?toUnion.x:this.x;
	var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
	var y0 = this.y > toUnion.y?toUnion.y:this.y;
	var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
	return new jeash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
}
jeash.geom.Rectangle.prototype.isEmpty = function() {
	return this.width == 0 && this.height == 0;
}
jeash.geom.Rectangle.prototype.offset = function(dx,dy) {
	this.x += dx;
	this.y += dy;
}
jeash.geom.Rectangle.prototype.offsetPoint = function(point) {
	this.x += point.x;
	this.y += point.y;
}
jeash.geom.Rectangle.prototype.setEmpty = function() {
	this.x = this.y = this.width = this.height = 0;
}
jeash.geom.Rectangle.prototype.transform = function(m) {
	var tx0 = m.a * this.x + m.c * this.y;
	var tx1 = tx0;
	var ty0 = m.b * this.x + m.d * this.y;
	var ty1 = tx0;
	var tx = m.a * (this.x + this.width) + m.c * this.y;
	var ty = m.b * (this.x + this.width) + m.d * this.y;
	if(tx < tx0) tx0 = tx;
	if(ty < ty0) ty0 = ty;
	if(tx > tx1) tx1 = tx;
	if(ty > ty1) ty1 = ty;
	tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
	ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
	if(tx < tx0) tx0 = tx;
	if(ty < ty0) ty0 = ty;
	if(tx > tx1) tx1 = tx;
	if(ty > ty1) ty1 = ty;
	tx = m.a * this.x + m.c * (this.y + this.height);
	ty = m.b * this.x + m.d * (this.y + this.height);
	if(tx < tx0) tx0 = tx;
	if(ty < ty0) ty0 = ty;
	if(tx > tx1) tx1 = tx;
	if(ty > ty1) ty1 = ty;
	return new jeash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
}
jeash.geom.Rectangle.prototype.extendBounds = function(r) {
	var dx = this.x - r.x;
	if(dx > 0) {
		this.x -= dx;
		this.width += dx;
	}
	var dy = this.y - r.y;
	if(dy > 0) {
		this.y -= dy;
		this.height += dy;
	}
	if(r.get_right() > this.get_right()) this.set_right(r.get_right());
	if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
}
jeash.geom.Rectangle.prototype.__class__ = jeash.geom.Rectangle;
jeash.display.MovieClip = function(p) {
	if( p === $_ ) return;
	jeash.display.Sprite.call(this);
	this.enabled = true;
	this.mCurrentFrame = 0;
	this.mTotalFrames = 0;
	this.name = "MovieClip " + jeash.display.DisplayObject.mNameID++;
}
jeash.display.MovieClip.__name__ = ["jeash","display","MovieClip"];
jeash.display.MovieClip.__super__ = jeash.display.Sprite;
for(var k in jeash.display.Sprite.prototype ) jeash.display.MovieClip.prototype[k] = jeash.display.Sprite.prototype[k];
jeash.display.MovieClip.prototype.enabled = null;
jeash.display.MovieClip.prototype.currentFrame = null;
jeash.display.MovieClip.prototype.framesLoaded = null;
jeash.display.MovieClip.prototype.totalFrames = null;
jeash.display.MovieClip.prototype.mCurrentFrame = null;
jeash.display.MovieClip.prototype.mTotalFrames = null;
jeash.display.MovieClip.prototype.GetTotalFrames = function() {
	return this.mTotalFrames;
}
jeash.display.MovieClip.prototype.GetCurrentFrame = function() {
	return this.mCurrentFrame;
}
jeash.display.MovieClip.prototype.gotoAndPlay = function(frame,scene) {
}
jeash.display.MovieClip.prototype.gotoAndStop = function(frame,scene) {
}
jeash.display.MovieClip.prototype.play = function() {
}
jeash.display.MovieClip.prototype.stop = function() {
}
jeash.display.MovieClip.prototype.__class__ = jeash.display.MovieClip;
box2D.dynamics.contacts.B2PolygonContact = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.contacts.B2Contact.call(this);
}
box2D.dynamics.contacts.B2PolygonContact.__name__ = ["box2D","dynamics","contacts","B2PolygonContact"];
box2D.dynamics.contacts.B2PolygonContact.__super__ = box2D.dynamics.contacts.B2Contact;
for(var k in box2D.dynamics.contacts.B2Contact.prototype ) box2D.dynamics.contacts.B2PolygonContact.prototype[k] = box2D.dynamics.contacts.B2Contact.prototype[k];
box2D.dynamics.contacts.B2PolygonContact.create = function(allocator) {
	return new box2D.dynamics.contacts.B2PolygonContact();
}
box2D.dynamics.contacts.B2PolygonContact.destroy = function(contact,allocator) {
}
box2D.dynamics.contacts.B2PolygonContact.prototype.reset = function(fixtureA,fixtureB) {
	box2D.dynamics.contacts.B2Contact.prototype.reset.call(this,fixtureA,fixtureB);
}
box2D.dynamics.contacts.B2PolygonContact.prototype.evaluate = function() {
	var bA = this.m_fixtureA.getBody();
	var bB = this.m_fixtureB.getBody();
	box2D.collision.B2Collision.collidePolygons(this.m_manifold,(function($this) {
		var $r;
		var $t = $this.m_fixtureA.getShape();
		if(Std["is"]($t,box2D.collision.shapes.B2PolygonShape)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),bA.m_xf,(function($this) {
		var $r;
		var $t = $this.m_fixtureB.getShape();
		if(Std["is"]($t,box2D.collision.shapes.B2PolygonShape)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),bB.m_xf);
}
box2D.dynamics.contacts.B2PolygonContact.prototype.__class__ = box2D.dynamics.contacts.B2PolygonContact;
if(!jeash.filters) jeash.filters = {}
jeash.filters.BitmapFilter = function(inType) {
	if( inType === $_ ) return;
	this.mType = inType;
}
jeash.filters.BitmapFilter.__name__ = ["jeash","filters","BitmapFilter"];
jeash.filters.BitmapFilter.prototype.mType = null;
jeash.filters.BitmapFilter.prototype.clone = function() {
	throw "Implement in subclass. BitmapFilter::clone";
	return null;
}
jeash.filters.BitmapFilter.prototype.jeashPreFilter = function(surface) {
}
jeash.filters.BitmapFilter.prototype.jeashApplyFilter = function(surface) {
}
jeash.filters.BitmapFilter.prototype.__class__ = jeash.filters.BitmapFilter;
box2D.dynamics.contacts.B2ContactConstraintPoint = function(p) {
	if( p === $_ ) return;
	this.localPoint = new box2D.common.math.B2Vec2();
	this.rA = new box2D.common.math.B2Vec2();
	this.rB = new box2D.common.math.B2Vec2();
}
box2D.dynamics.contacts.B2ContactConstraintPoint.__name__ = ["box2D","dynamics","contacts","B2ContactConstraintPoint"];
box2D.dynamics.contacts.B2ContactConstraintPoint.prototype.localPoint = null;
box2D.dynamics.contacts.B2ContactConstraintPoint.prototype.rA = null;
box2D.dynamics.contacts.B2ContactConstraintPoint.prototype.rB = null;
box2D.dynamics.contacts.B2ContactConstraintPoint.prototype.normalImpulse = null;
box2D.dynamics.contacts.B2ContactConstraintPoint.prototype.tangentImpulse = null;
box2D.dynamics.contacts.B2ContactConstraintPoint.prototype.normalMass = null;
box2D.dynamics.contacts.B2ContactConstraintPoint.prototype.tangentMass = null;
box2D.dynamics.contacts.B2ContactConstraintPoint.prototype.equalizedMass = null;
box2D.dynamics.contacts.B2ContactConstraintPoint.prototype.velocityBias = null;
box2D.dynamics.contacts.B2ContactConstraintPoint.prototype.__class__ = box2D.dynamics.contacts.B2ContactConstraintPoint;
jeash.text.TextField = function(p) {
	if( p === $_ ) return;
	jeash.display.InteractiveObject.call(this);
	this.mWidth = 40;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.jeashGraphics = new jeash.display.Graphics();
	this.jeashGraphics.jeashExtentBuffer = 0;
	this.mCaretGfx = new jeash.display.Graphics();
	this.mFace = jeash.text.TextField.mDefaultFont;
	this.mAlign = jeash.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.mScrollH = 0;
	this.mScrollV = 1;
	this.mType = jeash.text.TextFieldType.DYNAMIC;
	this.SetAutoSize(jeash.text.TextFieldAutoSize.NONE);
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.mInput = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.name = "TextField " + jeash.display.DisplayObject.mNameID++;
	this.jeashGraphics.jeashSurface.id = this.name;
	this.SetBorderColor(0);
	this.SetBorder(false);
	this.SetBackgroundColor(16777215);
	this.SetBackground(false);
}
jeash.text.TextField.__name__ = ["jeash","text","TextField"];
jeash.text.TextField.__super__ = jeash.display.InteractiveObject;
for(var k in jeash.display.InteractiveObject.prototype ) jeash.text.TextField.prototype[k] = jeash.display.InteractiveObject.prototype[k];
jeash.text.TextField.prototype.htmlText = null;
jeash.text.TextField.prototype.text = null;
jeash.text.TextField.prototype.textColor = null;
jeash.text.TextField.prototype.textWidth = null;
jeash.text.TextField.prototype.textHeight = null;
jeash.text.TextField.prototype.defaultTextFormat = null;
jeash.text.TextField.prototype.mHTMLText = null;
jeash.text.TextField.prototype.mText = null;
jeash.text.TextField.prototype.mTextColour = null;
jeash.text.TextField.prototype.mType = null;
jeash.text.TextField.prototype.autoSize = null;
jeash.text.TextField.prototype.selectable = null;
jeash.text.TextField.prototype.multiline = null;
jeash.text.TextField.prototype.embedFonts = null;
jeash.text.TextField.prototype.borderColor = null;
jeash.text.TextField.prototype.background = null;
jeash.text.TextField.prototype.backgroundColor = null;
jeash.text.TextField.prototype.caretPos = null;
jeash.text.TextField.prototype.displayAsPassword = null;
jeash.text.TextField.prototype.border = null;
jeash.text.TextField.prototype.wordWrap = null;
jeash.text.TextField.prototype.maxChars = null;
jeash.text.TextField.prototype.restrict = null;
jeash.text.TextField.prototype.type = null;
jeash.text.TextField.prototype.antiAliasType = null;
jeash.text.TextField.prototype.sharpness = null;
jeash.text.TextField.prototype.gridFitType = null;
jeash.text.TextField.prototype.length = null;
jeash.text.TextField.prototype.mTextHeight = null;
jeash.text.TextField.prototype.mFace = null;
jeash.text.TextField.prototype.mDownChar = null;
jeash.text.TextField.prototype.selectionBeginIndex = null;
jeash.text.TextField.prototype.selectionEndIndex = null;
jeash.text.TextField.prototype.caretIndex = null;
jeash.text.TextField.prototype.mParagraphs = null;
jeash.text.TextField.prototype.mTryFreeType = null;
jeash.text.TextField.prototype.mLineInfo = null;
jeash.text.TextField.prototype.mAlign = null;
jeash.text.TextField.prototype.mHTMLMode = null;
jeash.text.TextField.prototype.mSelStart = null;
jeash.text.TextField.prototype.mSelEnd = null;
jeash.text.TextField.prototype.mInsertPos = null;
jeash.text.TextField.prototype.mSelectDrag = null;
jeash.text.TextField.prototype.mInput = null;
jeash.text.TextField.prototype.mWidth = null;
jeash.text.TextField.prototype.mHeight = null;
jeash.text.TextField.prototype.mSelectionAnchored = null;
jeash.text.TextField.prototype.mSelectionAnchor = null;
jeash.text.TextField.prototype.mScrollH = null;
jeash.text.TextField.prototype.mScrollV = null;
jeash.text.TextField.prototype.jeashGraphics = null;
jeash.text.TextField.prototype.mCaretGfx = null;
jeash.text.TextField.prototype.ClearSelection = function() {
	this.mSelStart = this.mSelEnd = -1;
	this.mSelectionAnchored = false;
	this.Rebuild();
}
jeash.text.TextField.prototype.DeleteSelection = function() {
	if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) {
		this.mText = this.mText.substr(0,this.mSelStart) + this.mText.substr(this.mSelEnd);
		this.mInsertPos = this.mSelStart;
		this.mSelStart = this.mSelEnd = -1;
		this.mSelectionAnchored = false;
	}
}
jeash.text.TextField.prototype.OnMoveKeyStart = function(inShift) {
	if(inShift && this.selectable) {
		if(!this.mSelectionAnchored) {
			this.mSelectionAnchored = true;
			this.mSelectionAnchor = this.mInsertPos;
			if(jeash.text.TextField.sSelectionOwner != this) {
				if(jeash.text.TextField.sSelectionOwner != null) jeash.text.TextField.sSelectionOwner.ClearSelection();
				jeash.text.TextField.sSelectionOwner = this;
			}
		}
	} else this.ClearSelection();
}
jeash.text.TextField.prototype.OnMoveKeyEnd = function() {
	if(this.mSelectionAnchored) {
		if(this.mInsertPos < this.mSelectionAnchor) {
			this.mSelStart = this.mInsertPos;
			this.mSelEnd = this.mSelectionAnchor;
		} else {
			this.mSelStart = this.mSelectionAnchor;
			this.mSelEnd = this.mInsertPos;
		}
	}
}
jeash.text.TextField.prototype.OnKey = function(inKey) {
	if(inKey.type != jeash.events.KeyboardEvent.KEY_DOWN) return;
	var key = inKey.keyCode;
	var ascii = inKey.charCode;
	var shift = inKey.shiftKey;
	if(ascii == 3) {
		if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) throw "To implement setClipboardString. TextField.OnKey";
		return;
	}
	if(this.mInput) {
		if(key == jeash.ui.Keyboard.LEFT) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos--;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.RIGHT) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos++;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.HOME) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos = 0;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.END) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos = this.mText.length;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.DELETE || key == jeash.ui.Keyboard.BACKSPACE) {
			if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) this.DeleteSelection(); else {
				if(key == jeash.ui.Keyboard.BACKSPACE && this.mInsertPos > 0) this.mInsertPos--;
				var l = this.mText.length;
				if(this.mInsertPos > l) {
					if(l > 0) this.mText = this.mText.substr(0,l - 1);
				} else this.mText = this.mText.substr(0,this.mInsertPos) + this.mText.substr(this.mInsertPos + 1);
			}
		} else if(ascii >= 32 && ascii < 128) {
			if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) this.DeleteSelection();
			this.mText = this.mText.substr(0,this.mInsertPos) + String.fromCharCode(ascii) + this.mText.substr(this.mInsertPos);
			this.mInsertPos++;
		}
		if(this.mInsertPos < 0) this.mInsertPos = 0;
		var l = this.mText.length;
		if(this.mInsertPos > l) this.mInsertPos = l;
		this.RebuildText();
	}
}
jeash.text.TextField.prototype.OnFocusIn = function(inMouse) {
	if(this.mInput && this.selectable && !inMouse) {
		this.mSelStart = 0;
		this.mSelEnd = this.mText.length;
		this.RebuildText();
	}
}
jeash.text.TextField.prototype.jeashGetWidth = function() {
	return this.mWidth;
}
jeash.text.TextField.prototype.jeashGetHeight = function() {
	return this.mHeight;
}
jeash.text.TextField.prototype.jeashSetWidth = function(inWidth) {
	if(inWidth != this.mWidth) {
		this.mWidth = inWidth;
		this.jeashGraphics.jeashSurface.width = Math.round(inWidth);
		this.Rebuild();
	}
	return this.mWidth;
}
jeash.text.TextField.prototype.jeashSetHeight = function(inHeight) {
	if(inHeight != this.mHeight) {
		this.mHeight = inHeight;
		this.jeashGraphics.jeashSurface.height = Math.round(inHeight);
		this.Rebuild();
	}
	return this.mHeight;
}
jeash.text.TextField.prototype.GetType = function() {
	return this.mType;
}
jeash.text.TextField.prototype.SetType = function(inType) {
	this.mType = inType;
	this.mInput = this.mType == jeash.text.TextFieldType.INPUT;
	if(this.mInput && this.mHTMLMode) this.ConvertHTMLToText(true);
	this.tabEnabled = this.GetType() == jeash.text.TextFieldType.INPUT;
	this.Rebuild();
	return inType;
}
jeash.text.TextField.prototype.GetCaret = function() {
	return this.mInsertPos;
}
jeash.text.TextField.prototype.jeashGetGraphics = function() {
	return this.jeashGraphics;
}
jeash.text.TextField.prototype.getLineIndexAtPoint = function(inX,inY) {
	if(this.mLineInfo.length < 1) return -1;
	if(inY <= 0) return 0;
	var _g1 = 0, _g = this.mLineInfo.length;
	while(_g1 < _g) {
		var l = _g1++;
		if(this.mLineInfo[l].mY0 > inY) return l == 0?0:l - 1;
	}
	return this.mLineInfo.length - 1;
}
jeash.text.TextField.prototype.getCharIndexAtPoint = function(inX,inY) {
	var li = this.getLineIndexAtPoint(inX,inY);
	if(li < 0) return -1;
	var line = this.mLineInfo[li];
	var idx = line.mIndex;
	var _g = 0, _g1 = line.mX;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x > inX) return idx;
		idx++;
	}
	return idx;
}
jeash.text.TextField.prototype.getCharBoundaries = function(a) {
	return null;
}
jeash.text.TextField.prototype.OnMouseDown = function(inX,inY) {
	if(this.tabEnabled || this.selectable) {
		if(jeash.text.TextField.sSelectionOwner != null) jeash.text.TextField.sSelectionOwner.ClearSelection();
		jeash.text.TextField.sSelectionOwner = this;
		this.GetStage().SetFocus(this);
		var gx = inX / this.GetStage().jeashGetScaleX();
		var gy = inY / this.GetStage().jeashGetScaleY();
		var pos = this.globalToLocal(new jeash.geom.Point(gx,gy));
		this.mSelectDrag = this.getCharIndexAtPoint(pos.x,pos.y);
		if(this.tabEnabled) this.mInsertPos = this.mSelectDrag;
		this.mSelStart = this.mSelEnd = -1;
		this.RebuildText();
	}
}
jeash.text.TextField.prototype.OnMouseDrag = function(inX,inY) {
	if((this.tabEnabled || this.selectable) && this.mSelectDrag >= 0) {
		var gx = inX / this.GetStage().jeashGetScaleX();
		var gy = inY / this.GetStage().jeashGetScaleY();
		var pos = this.globalToLocal(new jeash.geom.Point(gx,gy));
		var idx = this.getCharIndexAtPoint(pos.x,pos.y);
		if(jeash.text.TextField.sSelectionOwner != this) {
			if(jeash.text.TextField.sSelectionOwner != null) jeash.text.TextField.sSelectionOwner.ClearSelection();
			jeash.text.TextField.sSelectionOwner = this;
		}
		if(idx < this.mSelectDrag) {
			this.mSelStart = idx;
			this.mSelEnd = this.mSelectDrag;
		} else if(idx > this.mSelectDrag) {
			this.mSelStart = this.mSelectDrag;
			this.mSelEnd = idx;
		} else this.mSelStart = this.mSelEnd = -1;
		if(this.tabEnabled) this.mInsertPos = idx;
		this.RebuildText();
	}
}
jeash.text.TextField.prototype.OnMouseUp = function(inX,inY) {
	this.mSelectDrag = -1;
}
jeash.text.TextField.prototype.mMaxWidth = null;
jeash.text.TextField.prototype.mMaxHeight = null;
jeash.text.TextField.prototype.mLimitRenderX = null;
jeash.text.TextField.prototype.RenderRow = function(inRow,inY,inCharIdx,inAlign,inInsert) {
	var h = 0;
	var w = 0;
	var _g = 0;
	while(_g < inRow.length) {
		var chr = inRow[_g];
		++_g;
		if(chr.fh > h) h = chr.fh;
		w += chr.adv;
	}
	if(w > this.mMaxWidth) this.mMaxWidth = w;
	var full_height = Std["int"](h * 1.2);
	var align_x = 0;
	var insert_x = 0;
	if(inInsert != null) {
		if(this.autoSize != jeash.text.TextFieldAutoSize.NONE) {
			this.mScrollH = 0;
			insert_x = inInsert;
		} else {
			insert_x = inInsert - this.mScrollH;
			if(insert_x < 0) this.mScrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.mScrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
			if(this.mScrollH < 0) this.mScrollH = 0;
		}
	}
	if(this.autoSize == jeash.text.TextFieldAutoSize.NONE && w <= this.mLimitRenderX) {
		if(inAlign == jeash.text.TextFormatAlign.CENTER) align_x = this.mLimitRenderX - w >> 1; else if(inAlign == jeash.text.TextFormatAlign.RIGHT) align_x = this.mLimitRenderX - w;
	}
	var x_list = new Array();
	this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx, mX : x_list});
	var cache_sel_font = null;
	var cache_normal_font = null;
	var x = align_x - this.mScrollH;
	var x0 = x;
	var _g = 0;
	while(_g < inRow.length) {
		var chr = inRow[_g];
		++_g;
		var adv = chr.adv;
		if(x + adv > this.mLimitRenderX) break;
		x_list.push(x);
		if(x >= 0) {
			var font = chr.font;
			if(chr.sel) {
				this.jeashGraphics.lineStyle();
				this.jeashGraphics.beginFill(2105440);
				this.jeashGraphics.drawRect(x,inY,adv,full_height);
				this.jeashGraphics.endFill();
				if(cache_normal_font == chr.font) font = cache_sel_font; else {
					font = jeash.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
					cache_sel_font = font;
					cache_normal_font = chr.font;
				}
			}
			font.RenderChar(this.jeashGraphics,chr.chr,x,Std["int"](inY + (h - chr.fh)));
		}
		x += adv;
	}
	x += this.mScrollH;
	if(inInsert != null) {
		this.mCaretGfx.lineStyle(1,this.mTextColour);
		this.mCaretGfx.moveTo(inInsert + align_x - this.mScrollH,inY);
		this.mCaretGfx.lineTo(inInsert + align_x - this.mScrollH,inY + full_height);
	}
	return full_height;
}
jeash.text.TextField.prototype.Rebuild = function() {
	this.mLineInfo = [];
	this.jeashGraphics.clear();
	this.mCaretGfx.clear();
	if(this.background) {
		this.jeashGraphics.beginFill(this.backgroundColor);
		this.jeashGraphics.drawRect(-2,-2,this.jeashGetWidth() + 4,this.jeashGetHeight() + 4);
		this.jeashGraphics.endFill();
	}
	this.jeashGraphics.lineStyle(this.mTextColour);
	var insert_x = null;
	this.mMaxWidth = 0;
	var wrap = this.mLimitRenderX = this.wordWrap && !this.mInput?Std["int"](this.jeashGetWidth()):999999;
	var char_idx = 0;
	var h = 0;
	var s0 = this.mSelStart;
	var s1 = this.mSelEnd;
	var _g = 0, _g1 = this.mParagraphs;
	while(_g < _g1.length) {
		var paragraph = _g1[_g];
		++_g;
		var row = [];
		var row_width = 0;
		var last_word_break = 0;
		var last_word_break_width = 0;
		var last_word_char_idx = 0;
		var start_idx = char_idx;
		var tx = 0;
		var _g2 = 0, _g3 = paragraph.spans;
		while(_g2 < _g3.length) {
			var span = _g3[_g2];
			++_g2;
			var text = span.text;
			var font = span.font;
			var fh = font.jeashGetHeight();
			last_word_break = row.length;
			last_word_break_width = row_width;
			last_word_char_idx = char_idx;
			var _g5 = 0, _g4 = text.length;
			while(_g5 < _g4) {
				var ch = _g5++;
				if(char_idx == this.mInsertPos && this.mInput) insert_x = tx;
				var g = text.charCodeAt(ch);
				var adv = font.jeashGetAdvance(g);
				if(g == 32) {
					last_word_break = row.length;
					last_word_break_width = tx;
					last_word_char_idx = char_idx;
				}
				if(tx + adv > wrap) {
					if(last_word_break > 0) {
						var row_end = row.splice(last_word_break,row.length - last_word_break);
						h += this.RenderRow(row,h,start_idx,paragraph.align);
						row = row_end;
						tx -= last_word_break_width;
						start_idx = last_word_char_idx;
						last_word_break = 0;
						last_word_break_width = 0;
						last_word_char_idx = 0;
						if(row_end.length > 0 && row_end[0].chr == 32) {
							row_end.shift();
							start_idx++;
						}
					} else {
						h += this.RenderRow(row,h,char_idx,paragraph.align);
						row = [];
						tx = 0;
						start_idx = char_idx;
					}
				}
				row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
				tx += adv;
				char_idx++;
			}
		}
		if(row.length > 0) {
			var pos = this.mInput && insert_x == null?tx:insert_x == null?0:insert_x;
			h += this.RenderRow(row,h,start_idx,paragraph.align,pos);
		}
	}
	var w = this.mMaxWidth;
	if(h < this.mTextHeight) h = this.mTextHeight;
	this.mMaxHeight = h;
	switch(this.autoSize) {
	case jeash.text.TextFieldAutoSize.LEFT:
		this.jeashSetWidth(w);
		this.jeashSetHeight(h);
		break;
	case jeash.text.TextFieldAutoSize.RIGHT:
		var x0 = this.jeashGetX() + this.jeashGetWidth();
		this.jeashSetWidth(w);
		this.jeashSetHeight(h);
		this.jeashSetX(x0 - w);
		break;
	case jeash.text.TextFieldAutoSize.CENTER:
		var x0 = this.jeashGetX() + this.jeashGetWidth() / 2;
		this.jeashSetWidth(w);
		this.jeashSetHeight(h);
		this.jeashSetX(x0 - w / 2);
		break;
	default:
		if(this.wordWrap) this.jeashSetHeight(h);
	}
	if(char_idx == 0 && this.mInput) {
		var x = 0;
		if(this.mAlign == jeash.text.TextFormatAlign.CENTER) x = Std["int"](this.jeashGetWidth() / 2); else if(this.mAlign == jeash.text.TextFormatAlign.RIGHT) x = Std["int"](this.jeashGetWidth()) - 1;
		this.mCaretGfx.lineStyle(1,this.mTextColour);
		this.mCaretGfx.moveTo(x,0);
		this.mCaretGfx.lineTo(x,this.mTextHeight);
	}
	if(this.border) {
		this.jeashGraphics.endFill();
		this.jeashGraphics.lineStyle(1,this.borderColor);
		this.jeashGraphics.drawRect(-2,-2,this.jeashGetWidth() + 4,this.jeashGetHeight() + 4);
	}
}
jeash.text.TextField.prototype.GetObj = function(inX,inY,inObj) {
	var inv = this.mFullMatrix.clone();
	inv.invert();
	var px = inv.a * inX + inv.c * inY + inv.tx;
	var py = inv.b * inX + inv.d * inY + inv.ty;
	if(px > 0 && px < this.jeashGetWidth() && py > 0 && py < this.jeashGetHeight()) return this;
	return null;
}
jeash.text.TextField.prototype.GetBackgroundRect = function() {
	if(this.border) return new jeash.geom.Rectangle(-2,-2,this.jeashGetWidth() + 4,this.jeashGetHeight() + 4); else return new jeash.geom.Rectangle(0,0,this.jeashGetWidth(),this.jeashGetHeight());
}
jeash.text.TextField.prototype.GetTextWidth = function() {
	return this.mMaxWidth;
}
jeash.text.TextField.prototype.GetTextHeight = function() {
	return this.mMaxHeight;
}
jeash.text.TextField.prototype.GetTextColour = function() {
	return this.mTextColour;
}
jeash.text.TextField.prototype.SetTextColour = function(inCol) {
	this.mTextColour = inCol;
	this.RebuildText();
	return inCol;
}
jeash.text.TextField.prototype.GetText = function() {
	if(this.mHTMLMode) this.ConvertHTMLToText(false);
	return this.mText;
}
jeash.text.TextField.prototype.SetText = function(inText) {
	this.mText = inText;
	this.mHTMLText = inText;
	this.mHTMLMode = false;
	this.RebuildText();
	return this.mText;
}
jeash.text.TextField.prototype.ConvertHTMLToText = function(inUnSetHTML) {
	this.mText = "";
	var _g = 0, _g1 = this.mParagraphs;
	while(_g < _g1.length) {
		var paragraph = _g1[_g];
		++_g;
		var _g2 = 0, _g3 = paragraph.spans;
		while(_g2 < _g3.length) {
			var span = _g3[_g2];
			++_g2;
			this.mText += span.text;
		}
	}
	if(inUnSetHTML) {
		this.mHTMLMode = false;
		this.RebuildText();
	}
}
jeash.text.TextField.prototype.GetFocusObjects = function(outObjs) {
	if(this.mInput) outObjs.push(this);
}
jeash.text.TextField.prototype.SetAutoSize = function(inAutoSize) {
	this.autoSize = inAutoSize;
	this.Rebuild();
	return inAutoSize;
}
jeash.text.TextField.prototype.SetWordWrap = function(inWordWrap) {
	this.wordWrap = inWordWrap;
	this.Rebuild();
	return this.wordWrap;
}
jeash.text.TextField.prototype.SetBorder = function(inBorder) {
	this.border = inBorder;
	this.Rebuild();
	return inBorder;
}
jeash.text.TextField.prototype.SetBorderColor = function(inBorderCol) {
	this.borderColor = inBorderCol;
	this.Rebuild();
	return inBorderCol;
}
jeash.text.TextField.prototype.SetBackgroundColor = function(inCol) {
	this.backgroundColor = inCol;
	this.Rebuild();
	return inCol;
}
jeash.text.TextField.prototype.SetBackground = function(inBack) {
	this.background = inBack;
	this.Rebuild();
	return inBack;
}
jeash.text.TextField.prototype.GetHTMLText = function() {
	return this.mHTMLText;
}
jeash.text.TextField.prototype.DecodeColour = function(col) {
	return Std.parseInt("0x" + col.substr(1));
}
jeash.text.TextField.prototype.AddXML = function(x,a) {
	var type = x.nodeType;
	if(type == Xml.Document || type == Xml.Element) {
		if(type == Xml.Element) {
			a = { face : a.face, height : a.height, colour : a.colour, align : a.align};
			switch(x.getNodeName()) {
			case "p":
				var l = this.mParagraphs.length;
				var align = x.get("align");
				if(align != null) a.align = Type.createEnum(jeash.text.TextFormatAlign,align);
				if(l > 0 && this.mParagraphs[l - 1].spans.length > 0 && this.multiline) this.mParagraphs.push({ align : a.align, spans : []});
				break;
			case "font":
				var face = x.get("face");
				if(face != null) a.face = face;
				var height = x.get("size");
				if(height != null) a.height = Std["int"](Std.parseFloat(height));
				var col = x.get("color");
				if(col != null) a.colour = this.DecodeColour(col);
				break;
			}
		}
		var $it0 = x.iterator();
		while( $it0.hasNext() ) {
			var child = $it0.next();
			this.AddXML(child,a);
		}
	} else {
		var text = x.getNodeValue();
		var font = jeash.text.FontInstance.CreateSolid(a.face,a.height,a.colour,1.0);
		if(font != null && text != "") {
			var span = { text : text, font : font};
			var l = this.mParagraphs.length;
			if(this.mParagraphs.length < 1) this.mParagraphs.push({ align : a.align, spans : [span]}); else this.mParagraphs[l - 1].spans.push(span);
		}
	}
}
jeash.text.TextField.prototype.RebuildText = function() {
	this.mParagraphs = [];
	if(this.mHTMLMode) {
		var xml = Xml.parse(this.mHTMLText);
		var a = { face : this.mFace, height : this.mTextHeight, colour : this.mTextColour, align : this.mAlign};
		this.AddXML(xml,a);
	} else {
		var font = jeash.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
		var paras = this.mText.split("\n");
		var _g = 0;
		while(_g < paras.length) {
			var paragraph = paras[_g];
			++_g;
			this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph}]});
		}
	}
	this.Rebuild();
}
jeash.text.TextField.prototype.SetHTMLText = function(inHTMLText) {
	this.mParagraphs = new Array();
	this.mHTMLText = inHTMLText;
	this.mHTMLMode = true;
	this.RebuildText();
	if(this.mInput) this.ConvertHTMLToText(true);
	return this.mHTMLText;
}
jeash.text.TextField.prototype.setSelection = function(beginIndex,endIndex) {
}
jeash.text.TextField.prototype.getTextFormat = function(beginIndex,endIndex) {
	return new jeash.text.TextFormat();
}
jeash.text.TextField.prototype.getDefaultTextFormat = function() {
	return new jeash.text.TextFormat();
}
jeash.text.TextField.prototype.setTextFormat = function(inFmt) {
	if(inFmt.font != null) this.mFace = inFmt.font;
	if(inFmt.size != null) this.mTextHeight = Std["int"](inFmt.size);
	if(inFmt.align != null) this.mAlign = inFmt.align;
	if(inFmt.color != null) this.mTextColour = inFmt.color;
	this.RebuildText();
	return this.getTextFormat();
}
jeash.text.TextField.prototype.__class__ = jeash.text.TextField;
jeash.text.FontInstanceMode = { __ename__ : ["jeash","text","FontInstanceMode"], __constructs__ : ["fimSolid"] }
jeash.text.FontInstanceMode.fimSolid = ["fimSolid",0];
jeash.text.FontInstanceMode.fimSolid.toString = $estr;
jeash.text.FontInstanceMode.fimSolid.__enum__ = jeash.text.FontInstanceMode;
jeash.text.FontInstance = function(inFont,inHeight) {
	if( inFont === $_ ) return;
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
}
jeash.text.FontInstance.__name__ = ["jeash","text","FontInstance"];
jeash.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = jeash.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new jeash.text.Font();
	font.jeashSetScale(inHeight);
	font.jeashSetFontName(inFace);
	if(font == null) return null;
	f = new jeash.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	jeash.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
jeash.text.FontInstance.prototype.mMode = null;
jeash.text.FontInstance.prototype.mColour = null;
jeash.text.FontInstance.prototype.mAlpha = null;
jeash.text.FontInstance.prototype.mFont = null;
jeash.text.FontInstance.prototype.mHeight = null;
jeash.text.FontInstance.prototype.mGlyphs = null;
jeash.text.FontInstance.prototype.mCacheAsBitmap = null;
jeash.text.FontInstance.prototype.mTryFreeType = null;
jeash.text.FontInstance.prototype.height = null;
jeash.text.FontInstance.prototype.toString = function() {
	return "FontInstance:" + this.mFont + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
}
jeash.text.FontInstance.prototype.GetFace = function() {
	return this.mFont.fontName;
}
jeash.text.FontInstance.prototype.jeashGetHeight = function() {
	return this.mHeight;
}
jeash.text.FontInstance.prototype.SetSolid = function(inCol,inAlpha) {
	this.mColour = inCol;
	this.mAlpha = inAlpha;
	this.mMode = jeash.text.FontInstanceMode.fimSolid;
}
jeash.text.FontInstance.prototype.RenderChar = function(inGraphics,inGlyph,inX,inY) {
	inGraphics.jeashClearLine();
	inGraphics.beginFill(this.mColour,this.mAlpha);
	this.mFont.jeashRender(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
	inGraphics.endFill();
}
jeash.text.FontInstance.prototype.jeashGetAdvance = function(inChar) {
	if(this.mFont == null) return 0;
	return this.mFont.jeashGetAdvance(inChar,this.mHeight);
}
jeash.text.FontInstance.prototype.__class__ = jeash.text.FontInstance;
jeash.display.ImageDataLease = function(p) {
}
jeash.display.ImageDataLease.__name__ = ["jeash","display","ImageDataLease"];
jeash.display.ImageDataLease.prototype.seed = null;
jeash.display.ImageDataLease.prototype.time = null;
jeash.display.ImageDataLease.prototype.set = function(s,t) {
	this.seed = s;
	this.time = t;
}
jeash.display.ImageDataLease.prototype.clone = function() {
	var leaseClone = new jeash.display.ImageDataLease();
	leaseClone.seed = this.seed;
	leaseClone.time = this.time;
	return leaseClone;
}
jeash.display.ImageDataLease.prototype.__class__ = jeash.display.ImageDataLease;
jeash.display.BitmapData = function(inWidth,inHeight,inTransparent,inFillColor) {
	if( inWidth === $_ ) return;
	if(inTransparent == null) inTransparent = true;
	this.jeashLocked = false;
	this.jeashLeaseNum = 0;
	this.jeashLease = new jeash.display.ImageDataLease();
	this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
	this.mTextureBuffer = js.Lib.document.createElement("canvas");
	this.mTextureBuffer.width = inWidth;
	this.mTextureBuffer.height = inHeight;
	this.jeashTransparent = inTransparent;
	this.rect = new jeash.geom.Rectangle(0,0,inWidth,inHeight);
	if(inFillColor != null) {
		if(!this.jeashTransparent) inFillColor |= -16777216;
		this.jeashInitColor = inFillColor;
		this.jeashFillRect(this.rect,inFillColor);
	}
}
jeash.display.BitmapData.__name__ = ["jeash","display","BitmapData"];
jeash.display.BitmapData.jeashCreateFromHandle = function(inHandle) {
	var result = new jeash.display.BitmapData(0,0);
	result.mTextureBuffer = inHandle;
	return result;
}
jeash.display.BitmapData.prototype.mTextureBuffer = null;
jeash.display.BitmapData.prototype.jeashTransparent = null;
jeash.display.BitmapData.prototype.width = null;
jeash.display.BitmapData.prototype.height = null;
jeash.display.BitmapData.prototype.rect = null;
jeash.display.BitmapData.prototype.jeashImageData = null;
jeash.display.BitmapData.prototype.jeashImageDataChanged = null;
jeash.display.BitmapData.prototype.jeashCopyPixelList = null;
jeash.display.BitmapData.prototype.jeashLocked = null;
jeash.display.BitmapData.prototype.jeashLease = null;
jeash.display.BitmapData.prototype.jeashLeaseNum = null;
jeash.display.BitmapData.prototype.jeashAssignedBitmaps = null;
jeash.display.BitmapData.prototype.jeashInitColor = null;
jeash.display.BitmapData.prototype.applyFilter = function(sourceBitmapData,sourceRect,destPoint,filter) {
	throw "BitmapData.applyFilter not implemented in Jeash";
}
jeash.display.BitmapData.prototype.draw = function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
	if(smoothing == null) smoothing = false;
	this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
	source.drawToSurface(this.mTextureBuffer,matrix,colorTransform,blendMode,clipRect,smoothing);
}
jeash.display.BitmapData.prototype.getColorBoundsRect = function(mask,color,findColor) {
	if(findColor == null) findColor = true;
	var me = this;
	var doGetColorBoundsRect = function(data) {
		var minX = me.mTextureBuffer != null?me.mTextureBuffer.width:0, maxX = 0, minY = me.mTextureBuffer != null?me.mTextureBuffer.height:0, maxY = 0, i = 0;
		while(i < data.length) {
			var value = me.getInt32(i,data);
			if(findColor) {
				if((value & mask) == color) {
					var x = Math.round(i % ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
			} else if((value & mask) != color) {
				var x = Math.round(i % ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4) / 4);
				var y = Math.round(i / ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4));
				if(x < minX) minX = x;
				if(x > maxX) maxX = x;
				if(y < minY) minY = y;
				if(y > maxY) maxY = y;
			}
			i += 4;
		}
		if(minX < maxX && minY < maxY) return new jeash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new jeash.geom.Rectangle(0,0,me.mTextureBuffer != null?me.mTextureBuffer.width:0,me.mTextureBuffer != null?me.mTextureBuffer.height:0);
	};
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		return doGetColorBoundsRect(imageData.data);
	} else return doGetColorBoundsRect(this.jeashImageData.data);
}
jeash.display.BitmapData.prototype.dispose = function() {
}
jeash.display.BitmapData.prototype.compare = function(inBitmapTexture) {
	throw "Not implemented. compare";
	return 0;
}
jeash.display.BitmapData.prototype.copyPixels = function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) mergeAlpha = false;
	if(sourceBitmapData.mTextureBuffer == null || this.mTextureBuffer == null || sourceBitmapData.mTextureBuffer.width == 0 || sourceBitmapData.mTextureBuffer.height == 0 || sourceRect.width <= 0 || sourceRect.height <= 0) return;
	if(sourceRect.x + sourceRect.width > sourceBitmapData.mTextureBuffer.width) sourceRect.width = sourceBitmapData.mTextureBuffer.width - sourceRect.x;
	if(sourceRect.y + sourceRect.height > sourceBitmapData.mTextureBuffer.height) sourceRect.height = sourceBitmapData.mTextureBuffer.height - sourceRect.y;
	if(!this.jeashLocked) {
		this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		ctx.drawImage(sourceBitmapData.mTextureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
	} else this.jeashCopyPixelList[this.jeashCopyPixelList.length] = { handle : sourceBitmapData.mTextureBuffer, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
}
jeash.display.BitmapData.prototype.clipRect = function(r) {
	if(r.x < 0) {
		r.width -= -r.x;
		r.x = 0;
		if(r.x + r.width <= 0) return null;
	}
	if(r.y < 0) {
		r.height -= -r.y;
		r.y = 0;
		if(r.y + r.height <= 0) return null;
	}
	if(r.x + r.width >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0)) {
		r.width -= r.x + r.width - (this.mTextureBuffer != null?this.mTextureBuffer.width:0);
		if(r.width <= 0) return null;
	}
	if(r.y + r.height >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) {
		r.height -= r.y + r.height - (this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		if(r.height <= 0) return null;
	}
	return r;
}
jeash.display.BitmapData.prototype.jeashClearCanvas = function() {
	this.mTextureBuffer.width = this.mTextureBuffer.width;
}
jeash.display.BitmapData.prototype.jeashFillRect = function(rect,color) {
	this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
	var ctx = this.mTextureBuffer.getContext("2d");
	var r = (color & 16711680) >>> 16;
	var g = (color & 65280) >>> 8;
	var b = color & 255;
	var a = this.jeashTransparent?color >>> 24:255;
	if(!this.jeashLocked) {
		var style = "rgba(";
		style += r;
		style += ", ";
		style += g;
		style += ", ";
		style += b;
		style += ", ";
		style += a / 256;
		style += ")";
		ctx.fillStyle = style;
		ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
	} else {
		var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.jeashImageData.width);
		var offsetY;
		var offsetX;
		var _g1 = 0, _g = Math.round(rect.height);
		while(_g1 < _g) {
			var i = _g1++;
			offsetY = i * this.jeashImageData.width;
			var _g3 = 0, _g2 = Math.round(rect.width);
			while(_g3 < _g2) {
				var j = _g3++;
				offsetX = 4 * (j + offsetY);
				this.jeashImageData.data[s + offsetX] = r;
				this.jeashImageData.data[s + offsetX + 1] = g;
				this.jeashImageData.data[s + offsetX + 2] = b;
				this.jeashImageData.data[s + offsetX + 3] = a;
			}
		}
		this.jeashImageDataChanged = true;
		ctx.putImageData(this.jeashImageData,0,0,rect.x,rect.y,rect.width,rect.height);
	}
}
jeash.display.BitmapData.prototype.fillRect = function(rect,color) {
	if(rect == null) return;
	if(rect.width <= 0 || rect.height <= 0) return;
	if(rect.x == 0 && rect.y == 0 && rect.width == this.mTextureBuffer.width && rect.height == this.mTextureBuffer.height) {
		if(this.jeashTransparent) {
			if(color >>> 24 == 0 || color == this.jeashInitColor) return this.mTextureBuffer.width = this.mTextureBuffer.width;
		} else if((color | -16777216) == (this.jeashInitColor | -16777216)) return this.mTextureBuffer.width = this.mTextureBuffer.width;
	}
	return this.jeashFillRect(rect,color);
}
jeash.display.BitmapData.prototype.getPixels = function(rect) {
	var byteArray = new jeash.utils.ByteArray();
	rect = this.clipRect(rect);
	if(rect == null) return byteArray;
	var len = Math.round(4 * rect.width * rect.height);
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			byteArray.writeByte(imagedata.data[i]);
		}
	} else {
		var offset = Math.round(4 * this.jeashImageData.width * rect.y + rect.x * 4);
		var pos = offset;
		var boundR = Math.round(4 * (rect.x + rect.width));
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(pos % (this.jeashImageData.width * 4) > boundR - 1) pos += this.jeashImageData.width * 4 - boundR;
			byteArray.writeByte(this.jeashImageData.data[pos]);
			pos++;
		}
	}
	byteArray.position = 0;
	return byteArray;
}
jeash.display.BitmapData.prototype.getPixel = function(x,y) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return 0;
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imagedata = ctx.getImageData(x,y,1,1);
		return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
	} else {
		var offset = 4 * y * (this.mTextureBuffer != null?this.mTextureBuffer.width:0) + x * 4;
		return this.jeashImageData.data[offset] << 16 | this.jeashImageData.data[offset + 1] << 8 | this.jeashImageData.data[offset + 2];
	}
}
jeash.display.BitmapData.prototype.getInt32 = function(offset,data) {
	var b5, b6, b7, b8, pow = Math.pow;
	b5 = data[offset + 3] & 255;
	b6 = data[offset] & 255;
	b7 = data[offset + 1] & 255;
	b8 = data[offset + 2] & 255;
	return parseInt(((b5 >> 7) * pow(2,31)).toString(2),2) + parseInt(((b5 & 127) << 24 | b6 << 16 | b7 << 8 | b8).toString(2),2);
}
jeash.display.BitmapData.prototype.getPixel32 = function(x,y) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return 0;
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
	} else return this.getInt32(4 * y * this.mTextureBuffer.width + x * 4,this.jeashImageData.data);
}
jeash.display.BitmapData.prototype.setPixel = function(x,y,color) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return;
	if(!this.jeashLocked) {
		this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.createImageData(1,1);
		imageData.data[0] = (color & 16711680) >>> 16;
		imageData.data[1] = (color & 65280) >>> 8;
		imageData.data[2] = color & 255;
		if(this.jeashTransparent) imageData.data[3] = 255;
		ctx.putImageData(imageData,x,y);
	} else {
		var offset = 4 * y * this.jeashImageData.width + x * 4;
		this.jeashImageData.data[offset] = (color & 16711680) >>> 16;
		this.jeashImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.jeashImageData.data[offset + 2] = color & 255;
		if(this.jeashTransparent) this.jeashImageData.data[offset + 3] = 255;
		this.jeashImageDataChanged = true;
	}
}
jeash.display.BitmapData.prototype.setPixel32 = function(x,y,color) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return;
	if(!this.jeashLocked) {
		this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.createImageData(1,1);
		imageData.data[0] = (color & 16711680) >>> 16;
		imageData.data[1] = (color & 65280) >>> 8;
		imageData.data[2] = color & 255;
		if(this.jeashTransparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
		ctx.putImageData(imageData,x,y);
	} else {
		var offset = 4 * y * this.jeashImageData.width + x * 4;
		this.jeashImageData.data[offset] = (color & 16711680) >>> 16;
		this.jeashImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.jeashImageData.data[offset + 2] = color & 255;
		if(this.jeashTransparent) this.jeashImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.jeashImageData.data[offset + 3] = 255;
		this.jeashImageDataChanged = true;
	}
}
jeash.display.BitmapData.prototype.setPixels = function(rect,byteArray) {
	rect = this.clipRect(rect);
	if(rect == null) return;
	var len = Math.round(4 * rect.width * rect.height);
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.createImageData(rect.width,rect.height);
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			imageData.data[i] = byteArray.readByte();
		}
		ctx.putImageData(imageData,rect.x,rect.y);
	} else {
		var offset = Math.round(4 * this.jeashImageData.width * rect.y + rect.x * 4);
		var pos = offset;
		var boundR = Math.round(4 * (rect.x + rect.width));
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(pos % (this.jeashImageData.width * 4) > boundR - 1) pos += this.jeashImageData.width * 4 - boundR;
			this.jeashImageData.data[pos] = byteArray.readByte();
			pos++;
		}
		this.jeashImageDataChanged = true;
	}
}
jeash.display.BitmapData.prototype.clone = function() {
	var bitmapData = new jeash.display.BitmapData(this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0,this.jeashTransparent);
	var rect = new jeash.geom.Rectangle(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
	bitmapData.setPixels(rect,this.getPixels(rect));
	bitmapData.jeashLease.set(bitmapData.jeashLeaseNum++,Date.now().getTime());
	return bitmapData;
}
jeash.display.BitmapData.prototype.handle = function() {
	return this.mTextureBuffer;
}
jeash.display.BitmapData.prototype.getWidth = function() {
	if(this.mTextureBuffer != null) return this.mTextureBuffer.width; else return 0;
}
jeash.display.BitmapData.prototype.getHeight = function() {
	if(this.mTextureBuffer != null) return this.mTextureBuffer.height; else return 0;
}
jeash.display.BitmapData.prototype.destroy = function() {
	this.mTextureBuffer = null;
}
jeash.display.BitmapData.prototype.jeashOnLoad = function(data,e) {
	var canvas = data.texture;
	var width = data.image.width;
	var height = data.image.height;
	canvas.width = width;
	canvas.height = height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(data.image,0,0,width,height);
	data.bitmapData.width = width;
	data.bitmapData.height = height;
	data.bitmapData.rect = new jeash.geom.Rectangle(0,0,width,height);
	data.bitmapData.jeashBuildLease();
	if(data.inLoader != null) {
		var e1 = new jeash.events.Event(jeash.events.Event.COMPLETE);
		e1.target = data.inLoader;
		data.inLoader.dispatchEvent(e1);
	}
}
jeash.display.BitmapData.prototype.jeashLoadFromFile = function(inFilename,inLoader) {
	var me = this;
	var image = js.Lib.document.createElement("img");
	if(inLoader != null) {
		var data = { image : image, texture : this.mTextureBuffer, inLoader : inLoader, bitmapData : this};
		image.addEventListener("load",(function(f,a1) {
			return function(a2) {
				return f(a1,a2);
			};
		})($closure(this,"jeashOnLoad"),data),false);
		image.addEventListener("error",function(e) {
			if(!image.complete) me.jeashOnLoad(data,e);
		},false);
	}
	image.src = inFilename;
}
jeash.display.BitmapData.prototype.lock = function() {
	this.jeashLocked = true;
	var ctx = this.mTextureBuffer.getContext("2d");
	this.jeashImageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
	this.jeashImageDataChanged = false;
	this.jeashCopyPixelList = [];
}
jeash.display.BitmapData.prototype.unlock = function(changeRect) {
	this.jeashLocked = false;
	var ctx = this.mTextureBuffer.getContext("2d");
	if(this.jeashImageDataChanged) {
		if(changeRect != null) ctx.putImageData(this.jeashImageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.jeashImageData,0,0);
	}
	var _g = 0, _g1 = this.jeashCopyPixelList;
	while(_g < _g1.length) {
		var copyCache = _g1[_g];
		++_g;
		ctx.drawImage(copyCache.handle,copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight,copyCache.destX,copyCache.destY,copyCache.sourceWidth,copyCache.sourceHeight);
	}
	this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
}
jeash.display.BitmapData.prototype.drawToSurface = function(inSurface,matrix,colorTransform,blendMode,clipRect,smothing) {
	var ctx = inSurface.getContext("2d");
	ctx.save();
	if(matrix != null) {
		ctx.save();
		if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
		ctx.restore();
	}
	this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
	ctx.drawImage(this.mTextureBuffer,0,0);
	ctx.restore();
}
jeash.display.BitmapData.prototype.colorTransform = function(rect,colorTransform) {
	rect = this.clipRect(rect);
	if(rect == null) return;
	if(!this.jeashLocked) {
		this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
		var offsetX;
		var _g1 = 0, _g = imagedata.data.length >> 2;
		while(_g1 < _g) {
			var i = _g1++;
			offsetX = i * 4;
			imagedata.data[offsetX] = Std["int"](imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset);
			imagedata.data[offsetX + 1] = Std["int"](imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset);
			imagedata.data[offsetX + 2] = Std["int"](imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset);
			imagedata.data[offsetX + 3] = Std["int"](imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset);
		}
		ctx.putImageData(imagedata,rect.x,rect.y);
	} else {
		var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.jeashImageData.width);
		var offsetY;
		var offsetX;
		var _g1 = 0, _g = Math.round(rect.height);
		while(_g1 < _g) {
			var i = _g1++;
			offsetY = i * this.jeashImageData.width;
			var _g3 = 0, _g2 = Math.round(rect.width);
			while(_g3 < _g2) {
				var j = _g3++;
				offsetX = 4 * (j + offsetY);
				this.jeashImageData.data[s + offsetX] = Std["int"](this.jeashImageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset);
				this.jeashImageData.data[s + offsetX + 1] = Std["int"](this.jeashImageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset);
				this.jeashImageData.data[s + offsetX + 2] = Std["int"](this.jeashImageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset);
				this.jeashImageData.data[s + offsetX + 3] = Std["int"](this.jeashImageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset);
			}
		}
		this.jeashImageDataChanged = true;
	}
}
jeash.display.BitmapData.prototype.copyChannel = function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
	this.rect = this.clipRect(this.rect);
	if(this.rect == null) return;
	if(sourceBitmapData.mTextureBuffer == null || this.mTextureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
	if(sourceRect.x + sourceRect.width > sourceBitmapData.mTextureBuffer.width) sourceRect.width = sourceBitmapData.mTextureBuffer.width - sourceRect.x;
	if(sourceRect.y + sourceRect.height > sourceBitmapData.mTextureBuffer.height) sourceRect.height = sourceBitmapData.mTextureBuffer.height - sourceRect.y;
	var doChannelCopy = function(imageData) {
		var srcCtx = sourceBitmapData.mTextureBuffer.getContext("2d");
		var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
		var destIdx = destChannel == 8?3:destChannel == 4?2:destChannel == 2?1:destChannel == 1?0:(function($this) {
			var $r;
			throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			return $r;
		}(this));
		var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
		var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
		var setPos = function(val) {
			if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
			imageData.data[pos] = val;
			pos += 4;
		};
		var srcIdx = sourceChannel == 8?3:sourceChannel == 4?2:sourceChannel == 2?1:sourceChannel == 1?0:(function($this) {
			var $r;
			throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			return $r;
		}(this));
		while(srcIdx < srcImageData.data.length) {
			setPos(srcImageData.data[srcIdx]);
			srcIdx += 4;
		}
	};
	if(!this.jeashLocked) {
		this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		doChannelCopy(imageData);
		ctx.putImageData(imageData,0,0);
	} else {
		doChannelCopy(this.jeashImageData);
		this.jeashImageDataChanged = true;
	}
}
jeash.display.BitmapData.prototype.hitTest = function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
	if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
	var type = Type.getClassName(Type.getClass(secondObject));
	firstAlphaThreshold = firstAlphaThreshold & -1;
	var me = this;
	var doHitTest = function(imageData) {
		if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
		switch(secondObject.__proto__.__class__.__name__[2]) {
		case "Rectangle":
			var rect = secondObject;
			rect.x -= firstPoint.x;
			rect.y -= firstPoint.y;
			rect = me.clipRect(me.rect);
			if(me.rect == null) return false;
			var boundingBox = new jeash.geom.Rectangle(0,0,me.mTextureBuffer != null?me.mTextureBuffer.width:0,me.mTextureBuffer != null?me.mTextureBuffer.height:0);
			if(!rect.intersects(boundingBox)) return false;
			var diff = rect.intersection(boundingBox);
			var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
			var pos = offset;
			var boundR = Math.round(4 * (diff.x + diff.width));
			while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				if(imageData.data[pos] - firstAlphaThreshold >= 0) return true;
				pos += 4;
			}
			return false;
		case "Point":
			var point = secondObject;
			var x = point.x - firstPoint.x, y = point.y - firstPoint.y;
			if(x < 0 || y < 0 || x >= (me.mTextureBuffer != null?me.mTextureBuffer.width:0) || y >= (me.mTextureBuffer != null?me.mTextureBuffer.height:0)) return false;
			if(imageData.data[Math.round(4 * (y * (me.mTextureBuffer != null?me.mTextureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
			return false;
		case "Bitmap":
			throw "BitmapData::hitTest secondObject argument as BitmapData is not (yet) supported.";
			return false;
		case "BitmapData":
			throw "BitmapData::hitTest secondObject argument as BitmapData is not (yet) supported.";
			return false;
		default:
			throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
			return false;
		}
	};
	if(!this.jeashLocked) {
		this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		return doHitTest(imageData);
		ctx.putImageData(imageData,0,0);
	} else {
		return doHitTest(this.jeashImageData);
		this.jeashImageDataChanged = true;
	}
}
jeash.display.BitmapData.prototype.scroll = function(x,y) {
	throw "Not implemented yet, patches welcome. BitmapData::scroll.";
}
jeash.display.BitmapData.prototype.jeashGetLease = function() {
	return this.jeashLease;
}
jeash.display.BitmapData.prototype.jeashGetNumRefBitmaps = function() {
	return this.jeashAssignedBitmaps;
}
jeash.display.BitmapData.prototype.jeashIncrNumRefBitmaps = function() {
	this.jeashAssignedBitmaps++;
}
jeash.display.BitmapData.prototype.jeashDecrNumRefBitmaps = function() {
	this.jeashAssignedBitmaps--;
}
jeash.display.BitmapData.prototype.jeashBuildLease = function() {
	this.jeashLease.set(this.jeashLeaseNum++,Date.now().getTime());
}
jeash.display.BitmapData.prototype.__class__ = jeash.display.BitmapData;
jeash.display.BitmapData.__interfaces__ = [jeash.display.IBitmapDrawable];
jeash.display.PixelSnapping = { __ename__ : ["jeash","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] }
jeash.display.PixelSnapping.NEVER = ["NEVER",0];
jeash.display.PixelSnapping.NEVER.toString = $estr;
jeash.display.PixelSnapping.NEVER.__enum__ = jeash.display.PixelSnapping;
jeash.display.PixelSnapping.AUTO = ["AUTO",1];
jeash.display.PixelSnapping.AUTO.toString = $estr;
jeash.display.PixelSnapping.AUTO.__enum__ = jeash.display.PixelSnapping;
jeash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
jeash.display.PixelSnapping.ALWAYS.toString = $estr;
jeash.display.PixelSnapping.ALWAYS.__enum__ = jeash.display.PixelSnapping;
com.citruxengine.core.CitruxEngine = function(p) {
	if( p === $_ ) return;
	jeash.display.Sprite.call(this);
	com.citruxengine.core.CitruxEngine._instance = this;
	this._stateDisplayIndex = 0;
	this._startTime = Date.now().getTime();
	this._gameTime = this._startTime;
	this.addEventListener(jeash.events.Event.ENTER_FRAME,$closure(this,"_handleEnterFrame"));
}
com.citruxengine.core.CitruxEngine.__name__ = ["com","citruxengine","core","CitruxEngine"];
com.citruxengine.core.CitruxEngine.__super__ = jeash.display.Sprite;
for(var k in jeash.display.Sprite.prototype ) com.citruxengine.core.CitruxEngine.prototype[k] = jeash.display.Sprite.prototype[k];
com.citruxengine.core.CitruxEngine._instance = null;
com.citruxengine.core.CitruxEngine.getInstance = function() {
	return com.citruxengine.core.CitruxEngine._instance;
}
com.citruxengine.core.CitruxEngine.prototype.state = null;
com.citruxengine.core.CitruxEngine.prototype._state = null;
com.citruxengine.core.CitruxEngine.prototype._newState = null;
com.citruxengine.core.CitruxEngine.prototype._stateDisplayIndex = null;
com.citruxengine.core.CitruxEngine.prototype._startTime = null;
com.citruxengine.core.CitruxEngine.prototype._gameTime = null;
com.citruxengine.core.CitruxEngine.prototype._handleEnterFrame = function(evt) {
	if(this._newState != null) {
		if(this._state != null) this._state.destroy();
		this._state = this._newState;
		this._newState = null;
		this.addChildAt(this._state,this._stateDisplayIndex);
		this._state.initialize();
	}
	if(this._state != null) {
		var nowTime = Date.now().getTime();
		var timeSinceLastFrame = nowTime - this._gameTime;
		var timeDelta = timeSinceLastFrame * 0.001;
		this._gameTime = nowTime;
		this._state.update(timeDelta);
	}
}
com.citruxengine.core.CitruxEngine.prototype.getState = function() {
	if(this._newState != null) return this._newState; else return this._state;
}
com.citruxengine.core.CitruxEngine.prototype.setState = function(value) {
	return this._newState = value;
}
com.citruxengine.core.CitruxEngine.prototype.__class__ = com.citruxengine.core.CitruxEngine;
NMEPreloader = function(p) {
	if( p === $_ ) return;
	jeash.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new jeash.display.Sprite();
	this.outline.jeashGetGraphics().lineStyle(1,color,0.15,true);
	this.outline.jeashGetGraphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.jeashSetX(x);
	this.outline.jeashSetY(y);
	this.addChild(this.outline);
	this.progress = new jeash.display.Sprite();
	this.progress.jeashGetGraphics().beginFill(color,0.35);
	this.progress.jeashGetGraphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.jeashSetX(x + padding);
	this.progress.jeashSetY(y + padding);
	this.progress.jeashSetScaleX(0);
	this.addChild(this.progress);
}
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = jeash.display.Sprite;
for(var k in jeash.display.Sprite.prototype ) NMEPreloader.prototype[k] = jeash.display.Sprite.prototype[k];
NMEPreloader.prototype.outline = null;
NMEPreloader.prototype.progress = null;
NMEPreloader.prototype.getBackgroundColor = function() {
	return 16777215;
}
NMEPreloader.prototype.getHeight = function() {
	return 600;
}
NMEPreloader.prototype.getWidth = function() {
	return 800;
}
NMEPreloader.prototype.onInit = function() {
}
NMEPreloader.prototype.onLoaded = function() {
	this.dispatchEvent(new jeash.events.Event(jeash.events.Event.COMPLETE));
}
NMEPreloader.prototype.onUpdate = function(bytesLoaded,bytesTotal) {
	var percentLoaded = bytesLoaded / bytesTotal;
	if(percentLoaded > 1) percentLoaded == 1;
	this.progress.jeashSetScaleX(percentLoaded);
}
NMEPreloader.prototype.__class__ = NMEPreloader;
box2D.dynamics.B2ContactImpulse = function(p) {
	if( p === $_ ) return;
	this.normalImpulses = new Array();
	this.tangentImpulses = new Array();
}
box2D.dynamics.B2ContactImpulse.__name__ = ["box2D","dynamics","B2ContactImpulse"];
box2D.dynamics.B2ContactImpulse.prototype.normalImpulses = null;
box2D.dynamics.B2ContactImpulse.prototype.tangentImpulses = null;
box2D.dynamics.B2ContactImpulse.prototype.__class__ = box2D.dynamics.B2ContactImpulse;
box2D.dynamics.B2Island = function(p) {
	if( p === $_ ) return;
	this.m_bodies = new Array();
	this.m_contacts = new Array();
	this.m_joints = new Array();
}
box2D.dynamics.B2Island.__name__ = ["box2D","dynamics","B2Island"];
box2D.dynamics.B2Island.prototype.initialize = function(bodyCapacity,contactCapacity,jointCapacity,allocator,listener,contactSolver) {
	var i;
	this.m_bodyCapacity = bodyCapacity;
	this.m_contactCapacity = contactCapacity;
	this.m_jointCapacity = jointCapacity;
	this.m_bodyCount = 0;
	this.m_contactCount = 0;
	this.m_jointCount = 0;
	this.m_allocator = allocator;
	this.m_listener = listener;
	this.m_contactSolver = contactSolver;
	var _g = this.m_bodies.length;
	while(_g < bodyCapacity) {
		var i1 = _g++;
		this.m_bodies[i1] = null;
	}
	var _g = this.m_contacts.length;
	while(_g < contactCapacity) {
		var i1 = _g++;
		this.m_contacts[i1] = null;
	}
	var _g = this.m_joints.length;
	while(_g < jointCapacity) {
		var i1 = _g++;
		this.m_joints[i1] = null;
	}
}
box2D.dynamics.B2Island.prototype.clear = function() {
	this.m_bodyCount = 0;
	this.m_contactCount = 0;
	this.m_jointCount = 0;
}
box2D.dynamics.B2Island.prototype.solve = function(step,gravity,allowSleep) {
	var i;
	var j;
	var b;
	var joint;
	var _g1 = 0, _g = this.m_bodyCount;
	while(_g1 < _g) {
		var i1 = _g1++;
		b = this.m_bodies[i1];
		if(b.getType() != box2D.dynamics.B2Body.b2_dynamicBody) continue;
		b.m_linearVelocity.x += step.dt * (gravity.x + b.m_invMass * b.m_force.x);
		b.m_linearVelocity.y += step.dt * (gravity.y + b.m_invMass * b.m_force.y);
		b.m_angularVelocity += step.dt * b.m_invI * b.m_torque;
		b.m_linearVelocity.multiply(box2D.common.math.B2Math.clamp(1.0 - step.dt * b.m_linearDamping,0.0,1.0));
		b.m_angularVelocity *= box2D.common.math.B2Math.clamp(1.0 - step.dt * b.m_angularDamping,0.0,1.0);
	}
	this.m_contactSolver.initialize(step,this.m_contacts,this.m_contactCount,this.m_allocator);
	var contactSolver = this.m_contactSolver;
	contactSolver.initVelocityConstraints(step);
	var _g1 = 0, _g = this.m_jointCount;
	while(_g1 < _g) {
		var i1 = _g1++;
		joint = this.m_joints[i1];
		joint.initVelocityConstraints(step);
	}
	var _g1 = 0, _g = step.velocityIterations;
	while(_g1 < _g) {
		var i1 = _g1++;
		var _g3 = 0, _g2 = this.m_jointCount;
		while(_g3 < _g2) {
			var j1 = _g3++;
			joint = this.m_joints[j1];
			joint.solveVelocityConstraints(step);
		}
		contactSolver.solveVelocityConstraints();
	}
	var _g1 = 0, _g = this.m_jointCount;
	while(_g1 < _g) {
		var i1 = _g1++;
		joint = this.m_joints[i1];
		joint.finalizeVelocityConstraints();
	}
	contactSolver.finalizeVelocityConstraints();
	var _g1 = 0, _g = this.m_bodyCount;
	while(_g1 < _g) {
		var i1 = _g1++;
		b = this.m_bodies[i1];
		if(b.getType() == box2D.dynamics.B2Body.b2_staticBody) continue;
		var translationX = step.dt * b.m_linearVelocity.x;
		var translationY = step.dt * b.m_linearVelocity.y;
		if(translationX * translationX + translationY * translationY > box2D.common.B2Settings.b2_maxTranslationSquared) {
			b.m_linearVelocity.normalize();
			b.m_linearVelocity.x *= box2D.common.B2Settings.b2_maxTranslation * step.inv_dt;
			b.m_linearVelocity.y *= box2D.common.B2Settings.b2_maxTranslation * step.inv_dt;
		}
		var rotation = step.dt * b.m_angularVelocity;
		if(rotation * rotation > box2D.common.B2Settings.b2_maxRotationSquared) {
			if(b.m_angularVelocity < 0.0) b.m_angularVelocity = -box2D.common.B2Settings.b2_maxRotation * step.inv_dt; else b.m_angularVelocity = box2D.common.B2Settings.b2_maxRotation * step.inv_dt;
		}
		b.m_sweep.c0.setV(b.m_sweep.c);
		b.m_sweep.a0 = b.m_sweep.a;
		b.m_sweep.c.x += step.dt * b.m_linearVelocity.x;
		b.m_sweep.c.y += step.dt * b.m_linearVelocity.y;
		b.m_sweep.a += step.dt * b.m_angularVelocity;
		b.synchronizeTransform();
	}
	var _g1 = 0, _g = step.positionIterations;
	while(_g1 < _g) {
		var i1 = _g1++;
		var contactsOkay = contactSolver.solvePositionConstraints(box2D.common.B2Settings.b2_contactBaumgarte);
		var jointsOkay = true;
		var _g3 = 0, _g2 = this.m_jointCount;
		while(_g3 < _g2) {
			var j1 = _g3++;
			joint = this.m_joints[j1];
			var jointOkay = joint.solvePositionConstraints(box2D.common.B2Settings.b2_contactBaumgarte);
			jointsOkay = jointsOkay && jointOkay;
		}
		if(contactsOkay && jointsOkay) break;
	}
	this.report(contactSolver.m_constraints);
	if(allowSleep) {
		var minSleepTime = Number.MAX_VALUE;
		var linTolSqr = box2D.common.B2Settings.b2_linearSleepTolerance * box2D.common.B2Settings.b2_linearSleepTolerance;
		var angTolSqr = box2D.common.B2Settings.b2_angularSleepTolerance * box2D.common.B2Settings.b2_angularSleepTolerance;
		var _g1 = 0, _g = this.m_bodyCount;
		while(_g1 < _g) {
			var i1 = _g1++;
			b = this.m_bodies[i1];
			if(b.getType() == box2D.dynamics.B2Body.b2_staticBody) continue;
			if((b.m_flags & box2D.dynamics.B2Body.e_allowSleepFlag) == 0) {
				b.m_sleepTime = 0.0;
				minSleepTime = 0.0;
			}
			if((b.m_flags & box2D.dynamics.B2Body.e_allowSleepFlag) == 0 || b.m_angularVelocity * b.m_angularVelocity > angTolSqr || box2D.common.math.B2Math.dot(b.m_linearVelocity,b.m_linearVelocity) > linTolSqr) {
				b.m_sleepTime = 0.0;
				minSleepTime = 0.0;
			} else {
				b.m_sleepTime += step.dt;
				minSleepTime = box2D.common.math.B2Math.min(minSleepTime,b.m_sleepTime);
			}
		}
		if(minSleepTime >= box2D.common.B2Settings.b2_timeToSleep) {
			var _g1 = 0, _g = this.m_bodyCount;
			while(_g1 < _g) {
				var i1 = _g1++;
				b = this.m_bodies[i1];
				b.setAwake(false);
			}
		}
	}
}
box2D.dynamics.B2Island.prototype.solveTOI = function(subStep) {
	var i;
	var j;
	this.m_contactSolver.initialize(subStep,this.m_contacts,this.m_contactCount,this.m_allocator);
	var contactSolver = this.m_contactSolver;
	var _g1 = 0, _g = this.m_jointCount;
	while(_g1 < _g) {
		var i1 = _g1++;
		this.m_joints[i1].initVelocityConstraints(subStep);
	}
	var _g1 = 0, _g = subStep.velocityIterations;
	while(_g1 < _g) {
		var i1 = _g1++;
		contactSolver.solveVelocityConstraints();
		var _g3 = 0, _g2 = this.m_jointCount;
		while(_g3 < _g2) {
			var j1 = _g3++;
			this.m_joints[j1].solveVelocityConstraints(subStep);
		}
	}
	var _g1 = 0, _g = this.m_bodyCount;
	while(_g1 < _g) {
		var i1 = _g1++;
		var b = this.m_bodies[i1];
		if(b.getType() == box2D.dynamics.B2Body.b2_staticBody) continue;
		var translationX = subStep.dt * b.m_linearVelocity.x;
		var translationY = subStep.dt * b.m_linearVelocity.y;
		if(translationX * translationX + translationY * translationY > box2D.common.B2Settings.b2_maxTranslationSquared) {
			b.m_linearVelocity.normalize();
			b.m_linearVelocity.x *= box2D.common.B2Settings.b2_maxTranslation * subStep.inv_dt;
			b.m_linearVelocity.y *= box2D.common.B2Settings.b2_maxTranslation * subStep.inv_dt;
		}
		var rotation = subStep.dt * b.m_angularVelocity;
		if(rotation * rotation > box2D.common.B2Settings.b2_maxRotationSquared) {
			if(b.m_angularVelocity < 0.0) b.m_angularVelocity = -box2D.common.B2Settings.b2_maxRotation * subStep.inv_dt; else b.m_angularVelocity = box2D.common.B2Settings.b2_maxRotation * subStep.inv_dt;
		}
		b.m_sweep.c0.setV(b.m_sweep.c);
		b.m_sweep.a0 = b.m_sweep.a;
		b.m_sweep.c.x += subStep.dt * b.m_linearVelocity.x;
		b.m_sweep.c.y += subStep.dt * b.m_linearVelocity.y;
		b.m_sweep.a += subStep.dt * b.m_angularVelocity;
		b.synchronizeTransform();
	}
	var k_toiBaumgarte = 0.75;
	var _g1 = 0, _g = subStep.positionIterations;
	while(_g1 < _g) {
		var i1 = _g1++;
		var contactsOkay = contactSolver.solvePositionConstraints(k_toiBaumgarte);
		var jointsOkay = true;
		var _g3 = 0, _g2 = this.m_jointCount;
		while(_g3 < _g2) {
			var j1 = _g3++;
			var jointOkay = this.m_joints[j1].solvePositionConstraints(box2D.common.B2Settings.b2_contactBaumgarte);
			jointsOkay = jointsOkay && jointOkay;
		}
		if(contactsOkay && jointsOkay) break;
	}
	this.report(contactSolver.m_constraints);
}
box2D.dynamics.B2Island.prototype.report = function(constraints) {
	if(this.m_listener == null) return;
	var _g1 = 0, _g = this.m_contactCount;
	while(_g1 < _g) {
		var i = _g1++;
		var c = this.m_contacts[i];
		var cc = constraints[i];
		var _g3 = 0, _g2 = cc.pointCount;
		while(_g3 < _g2) {
			var j = _g3++;
			box2D.dynamics.B2Island.s_impulse.normalImpulses[j] = cc.points[j].normalImpulse;
			box2D.dynamics.B2Island.s_impulse.tangentImpulses[j] = cc.points[j].tangentImpulse;
		}
		this.m_listener.postSolve(c,box2D.dynamics.B2Island.s_impulse);
	}
}
box2D.dynamics.B2Island.prototype.addBody = function(body) {
	body.m_islandIndex = this.m_bodyCount;
	this.m_bodies[this.m_bodyCount++] = body;
}
box2D.dynamics.B2Island.prototype.addContact = function(contact) {
	this.m_contacts[this.m_contactCount++] = contact;
}
box2D.dynamics.B2Island.prototype.addJoint = function(joint) {
	this.m_joints[this.m_jointCount++] = joint;
}
box2D.dynamics.B2Island.prototype.m_allocator = null;
box2D.dynamics.B2Island.prototype.m_listener = null;
box2D.dynamics.B2Island.prototype.m_contactSolver = null;
box2D.dynamics.B2Island.prototype.m_bodies = null;
box2D.dynamics.B2Island.prototype.m_contacts = null;
box2D.dynamics.B2Island.prototype.m_joints = null;
box2D.dynamics.B2Island.prototype.m_bodyCount = null;
box2D.dynamics.B2Island.prototype.m_jointCount = null;
box2D.dynamics.B2Island.prototype.m_contactCount = null;
box2D.dynamics.B2Island.prototype.m_bodyCapacity = null;
box2D.dynamics.B2Island.prototype.m_contactCapacity = null;
box2D.dynamics.B2Island.prototype.m_jointCapacity = null;
box2D.dynamics.B2Island.prototype.__class__ = box2D.dynamics.B2Island;
box2D.dynamics.contacts.B2CircleContact = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.contacts.B2Contact.call(this);
}
box2D.dynamics.contacts.B2CircleContact.__name__ = ["box2D","dynamics","contacts","B2CircleContact"];
box2D.dynamics.contacts.B2CircleContact.__super__ = box2D.dynamics.contacts.B2Contact;
for(var k in box2D.dynamics.contacts.B2Contact.prototype ) box2D.dynamics.contacts.B2CircleContact.prototype[k] = box2D.dynamics.contacts.B2Contact.prototype[k];
box2D.dynamics.contacts.B2CircleContact.create = function(allocator) {
	return new box2D.dynamics.contacts.B2CircleContact();
}
box2D.dynamics.contacts.B2CircleContact.destroy = function(contact,allocator) {
}
box2D.dynamics.contacts.B2CircleContact.prototype.reset = function(fixtureA,fixtureB) {
	box2D.dynamics.contacts.B2Contact.prototype.reset.call(this,fixtureA,fixtureB);
}
box2D.dynamics.contacts.B2CircleContact.prototype.evaluate = function() {
	var bA = this.m_fixtureA.getBody();
	var bB = this.m_fixtureB.getBody();
	box2D.collision.B2Collision.collideCircles(this.m_manifold,(function($this) {
		var $r;
		var $t = $this.m_fixtureA.getShape();
		if(Std["is"]($t,box2D.collision.shapes.B2CircleShape)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),bA.m_xf,(function($this) {
		var $r;
		var $t = $this.m_fixtureB.getShape();
		if(Std["is"]($t,box2D.collision.shapes.B2CircleShape)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),bB.m_xf);
}
box2D.dynamics.contacts.B2CircleContact.prototype.__class__ = box2D.dynamics.contacts.B2CircleContact;
jeash.display.GraphicsPathCommand = function() { }
jeash.display.GraphicsPathCommand.__name__ = ["jeash","display","GraphicsPathCommand"];
jeash.display.GraphicsPathCommand.prototype.__class__ = jeash.display.GraphicsPathCommand;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	} catch( e ) {
		cl = null;
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	} catch( err ) {
		e = null;
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.copy();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
haxe.Unserializer = function(buf) {
	if( buf === $_ ) return;
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
}
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.cca(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype.buf = null;
haxe.Unserializer.prototype.pos = null;
haxe.Unserializer.prototype.length = null;
haxe.Unserializer.prototype.cache = null;
haxe.Unserializer.prototype.scache = null;
haxe.Unserializer.prototype.resolver = null;
haxe.Unserializer.prototype.setResolver = function(r) {
	if(r == null) this.resolver = { resolveClass : function(_) {
		return null;
	}, resolveEnum : function(_) {
		return null;
	}}; else this.resolver = r;
}
haxe.Unserializer.prototype.getResolver = function() {
	return this.resolver;
}
haxe.Unserializer.prototype.get = function(p) {
	return this.buf.cca(p);
}
haxe.Unserializer.prototype.readDigits = function() {
	var k = 0;
	var s = false;
	var fpos = this.pos;
	while(true) {
		var c = this.buf.cca(this.pos);
		if(c != c) break;
		if(c == 45) {
			if(this.pos != fpos) break;
			s = true;
			this.pos++;
			continue;
		}
		if(c < 48 || c > 57) break;
		k = k * 10 + (c - 48);
		this.pos++;
	}
	if(s) k *= -1;
	return k;
}
haxe.Unserializer.prototype.unserializeObject = function(o) {
	while(true) {
		if(this.pos >= this.length) throw "Invalid object";
		if(this.buf.cca(this.pos) == 103) break;
		var k = this.unserialize();
		if(!Std["is"](k,String)) throw "Invalid object key";
		var v = this.unserialize();
		Reflect.setField(o,k,v);
	}
	this.pos++;
}
haxe.Unserializer.prototype.unserializeEnum = function(edecl,tag) {
	var constr = Reflect.field(edecl,tag);
	if(constr == null) throw "Unknown enum tag " + Type.getEnumName(edecl) + "." + tag;
	if(this.buf.cca(this.pos++) != 58) throw "Invalid enum format";
	var nargs = this.readDigits();
	if(nargs == 0) {
		this.cache.push(constr);
		return constr;
	}
	var args = new Array();
	while(nargs > 0) {
		args.push(this.unserialize());
		nargs -= 1;
	}
	var e = constr.apply(edecl,args);
	this.cache.push(e);
	return e;
}
haxe.Unserializer.prototype.unserialize = function() {
	switch(this.buf.cca(this.pos++)) {
	case 110:
		return null;
	case 116:
		return true;
	case 102:
		return false;
	case 122:
		return 0;
	case 105:
		return this.readDigits();
	case 100:
		var p1 = this.pos;
		while(true) {
			var c = this.buf.cca(this.pos);
			if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
		}
		return Std.parseFloat(this.buf.substr(p1,this.pos - p1));
	case 121:
		var len = this.readDigits();
		if(this.buf.cca(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
		var s = this.buf.substr(this.pos,len);
		this.pos += len;
		s = StringTools.urlDecode(s);
		this.scache.push(s);
		return s;
	case 107:
		return Math.NaN;
	case 109:
		return Math.NEGATIVE_INFINITY;
	case 112:
		return Math.POSITIVE_INFINITY;
	case 97:
		var buf = this.buf;
		var a = new Array();
		this.cache.push(a);
		while(true) {
			var c = this.buf.cca(this.pos);
			if(c == 104) {
				this.pos++;
				break;
			}
			if(c == 117) {
				this.pos++;
				var n = this.readDigits();
				a[a.length + n - 1] = null;
			} else a.push(this.unserialize());
		}
		return a;
	case 111:
		var o = { };
		this.cache.push(o);
		this.unserializeObject(o);
		return o;
	case 114:
		var n = this.readDigits();
		if(n < 0 || n >= this.cache.length) throw "Invalid reference";
		return this.cache[n];
	case 82:
		var n = this.readDigits();
		if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
		return this.scache[n];
	case 120:
		throw this.unserialize();
		break;
	case 99:
		var name = this.unserialize();
		var cl = this.resolver.resolveClass(name);
		if(cl == null) throw "Class not found " + name;
		var o = Type.createEmptyInstance(cl);
		this.cache.push(o);
		this.unserializeObject(o);
		return o;
	case 119:
		var name = this.unserialize();
		var edecl = this.resolver.resolveEnum(name);
		if(edecl == null) throw "Enum not found " + name;
		return this.unserializeEnum(edecl,this.unserialize());
	case 106:
		var name = this.unserialize();
		var edecl = this.resolver.resolveEnum(name);
		if(edecl == null) throw "Enum not found " + name;
		this.pos++;
		var index = this.readDigits();
		var tag = Type.getEnumConstructs(edecl)[index];
		if(tag == null) throw "Unknown enum index " + name + "@" + index;
		return this.unserializeEnum(edecl,tag);
	case 108:
		var l = new List();
		this.cache.push(l);
		var buf = this.buf;
		while(this.buf.cca(this.pos) != 104) l.add(this.unserialize());
		this.pos++;
		return l;
	case 98:
		var h = new Hash();
		this.cache.push(h);
		var buf = this.buf;
		while(this.buf.cca(this.pos) != 104) {
			var s = this.unserialize();
			h.set(s,this.unserialize());
		}
		this.pos++;
		return h;
	case 113:
		var h = new IntHash();
		this.cache.push(h);
		var buf = this.buf;
		var c = this.buf.cca(this.pos++);
		while(c == 58) {
			var i = this.readDigits();
			h.set(i,this.unserialize());
			c = this.buf.cca(this.pos++);
		}
		if(c != 104) throw "Invalid IntHash format";
		return h;
	case 118:
		var d = Date.fromString(this.buf.substr(this.pos,19));
		this.cache.push(d);
		this.pos += 19;
		return d;
	case 115:
		var len = this.readDigits();
		var buf = this.buf;
		if(this.buf.cca(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
		var codes = haxe.Unserializer.CODES;
		if(codes == null) {
			codes = haxe.Unserializer.initCodes();
			haxe.Unserializer.CODES = codes;
		}
		var i = this.pos;
		var rest = len & 3;
		var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
		var max = i + (len - rest);
		var bytes = haxe.io.Bytes.alloc(size);
		var bpos = 0;
		while(i < max) {
			var c1 = codes[buf.cca(i++)];
			var c2 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
			var c3 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
			var c4 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c3 << 6 | c4) & 255;
		}
		if(rest >= 2) {
			var c1 = codes[buf.cca(i++)];
			var c2 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
			if(rest == 3) {
				var c3 = codes[buf.cca(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
			}
		}
		this.pos += len;
		this.cache.push(bytes);
		return bytes;
	case 67:
		var name = this.unserialize();
		var cl = this.resolver.resolveClass(name);
		if(cl == null) throw "Class not found " + name;
		var o = Type.createEmptyInstance(cl);
		this.cache.push(o);
		o.hxUnserialize(this);
		if(this.buf.cca(this.pos++) != 103) throw "Invalid custom data";
		return o;
	default:
	}
	this.pos--;
	throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
}
haxe.Unserializer.prototype.__class__ = haxe.Unserializer;
jeash.media.SoundTransform = function(vol,panning) {
}
jeash.media.SoundTransform.__name__ = ["jeash","media","SoundTransform"];
jeash.media.SoundTransform.prototype.leftToLeft = null;
jeash.media.SoundTransform.prototype.leftToRight = null;
jeash.media.SoundTransform.prototype.pan = null;
jeash.media.SoundTransform.prototype.rightToLeft = null;
jeash.media.SoundTransform.prototype.rightToRight = null;
jeash.media.SoundTransform.prototype.volume = null;
jeash.media.SoundTransform.prototype.__class__ = jeash.media.SoundTransform;
haxe.io.Input = function() { }
haxe.io.Input.__name__ = ["haxe","io","Input"];
haxe.io.Input.prototype.bigEndian = null;
haxe.io.Input.prototype.readByte = function() {
	return (function($this) {
		var $r;
		throw "Not implemented";
		return $r;
	}(this));
}
haxe.io.Input.prototype.readBytes = function(s,pos,len) {
	var k = len;
	var b = s.b;
	if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
	while(k > 0) {
		b[pos] = this.readByte();
		pos++;
		k--;
	}
	return len;
}
haxe.io.Input.prototype.close = function() {
}
haxe.io.Input.prototype.setEndian = function(b) {
	this.bigEndian = b;
	return b;
}
haxe.io.Input.prototype.readAll = function(bufsize) {
	if(bufsize == null) bufsize = 16384;
	var buf = haxe.io.Bytes.alloc(bufsize);
	var total = new haxe.io.BytesBuffer();
	try {
		while(true) {
			var len = this.readBytes(buf,0,bufsize);
			if(len == 0) throw haxe.io.Error.Blocked;
			total.addBytes(buf,0,len);
		}
	} catch( e ) {
		if( js.Boot.__instanceof(e,haxe.io.Eof) ) {
		} else throw(e);
	}
	return total.getBytes();
}
haxe.io.Input.prototype.readFullBytes = function(s,pos,len) {
	while(len > 0) {
		var k = this.readBytes(s,pos,len);
		pos += k;
		len -= k;
	}
}
haxe.io.Input.prototype.read = function(nbytes) {
	var s = haxe.io.Bytes.alloc(nbytes);
	var p = 0;
	while(nbytes > 0) {
		var k = this.readBytes(s,p,nbytes);
		if(k == 0) throw haxe.io.Error.Blocked;
		p += k;
		nbytes -= k;
	}
	return s;
}
haxe.io.Input.prototype.readUntil = function(end) {
	var buf = new StringBuf();
	var last;
	while((last = this.readByte()) != end) buf.b[buf.b.length] = String.fromCharCode(last);
	return buf.b.join("");
}
haxe.io.Input.prototype.readLine = function() {
	var buf = new StringBuf();
	var last;
	var s;
	try {
		while((last = this.readByte()) != 10) buf.b[buf.b.length] = String.fromCharCode(last);
		s = buf.b.join("");
		if(s.charCodeAt(s.length - 1) == 13) s = s.substr(0,-1);
	} catch( e ) {
		if( js.Boot.__instanceof(e,haxe.io.Eof) ) {
			s = buf.b.join("");
			if(s.length == 0) throw e;
		} else throw(e);
	}
	return s;
}
haxe.io.Input.prototype.readFloat = function() {
	throw "Not implemented";
	return 0;
}
haxe.io.Input.prototype.readDouble = function() {
	throw "Not implemented";
	return 0;
}
haxe.io.Input.prototype.readInt8 = function() {
	var n = this.readByte();
	if(n >= 128) return n - 256;
	return n;
}
haxe.io.Input.prototype.readInt16 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	if((n & 32768) != 0) return n - 65536;
	return n;
}
haxe.io.Input.prototype.readUInt16 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	return this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
}
haxe.io.Input.prototype.readInt24 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var n = this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
	if((n & 8388608) != 0) return n - 16777216;
	return n;
}
haxe.io.Input.prototype.readUInt24 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	return this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
}
haxe.io.Input.prototype.readInt31 = function() {
	var ch1, ch2, ch3, ch4;
	if(this.bigEndian) {
		ch4 = this.readByte();
		ch3 = this.readByte();
		ch2 = this.readByte();
		ch1 = this.readByte();
	} else {
		ch1 = this.readByte();
		ch2 = this.readByte();
		ch3 = this.readByte();
		ch4 = this.readByte();
	}
	if((ch4 & 128) == 0 != ((ch4 & 64) == 0)) throw haxe.io.Error.Overflow;
	return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
}
haxe.io.Input.prototype.readUInt30 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var ch4 = this.readByte();
	if((this.bigEndian?ch1:ch4) >= 64) throw haxe.io.Error.Overflow;
	return this.bigEndian?ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24:ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
}
haxe.io.Input.prototype.readInt32 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var ch4 = this.readByte();
	return this.bigEndian?(ch1 << 8 | ch2) << 16 | (ch3 << 8 | ch4):(ch4 << 8 | ch3) << 16 | (ch2 << 8 | ch1);
}
haxe.io.Input.prototype.readString = function(len) {
	var b = haxe.io.Bytes.alloc(len);
	this.readFullBytes(b,0,len);
	return b.toString();
}
haxe.io.Input.prototype.__class__ = haxe.io.Input;
jeash.display.Loader = function(p) {
	if( p === $_ ) return;
	jeash.display.DisplayObjectContainer.call(this);
	this.contentLoaderInfo = jeash.display.LoaderInfo.create(this);
	this.name = "Loader " + jeash.display.DisplayObject.mNameID++;
}
jeash.display.Loader.__name__ = ["jeash","display","Loader"];
jeash.display.Loader.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Loader.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Loader.prototype.content = null;
jeash.display.Loader.prototype.contentLoaderInfo = null;
jeash.display.Loader.prototype.mImage = null;
jeash.display.Loader.prototype.mShape = null;
jeash.display.Loader.prototype.load = function(request,context) {
	var parts = request.url.split(".");
	var extension = parts.length == 0?"":parts[parts.length - 1].toLowerCase();
	var transparent = true;
	this.contentLoaderInfo.url = request.url;
	this.contentLoaderInfo.contentType = (function($this) {
		var $r;
		switch(extension) {
		case "swf":
			$r = "application/x-shockwave-flash";
			break;
		case "jpg":case "jpeg":
			$r = (function($this) {
				var $r;
				transparent = false;
				$r = "image/jpeg";
				return $r;
			}($this));
			break;
		case "png":
			$r = "image/png";
			break;
		case "gif":
			$r = "image/gif";
			break;
		default:
			$r = (function($this) {
				var $r;
				throw "Unrecognized file " + request.url;
				return $r;
			}($this));
		}
		return $r;
	}(this));
	this.mImage = new jeash.display.BitmapData(0,0,transparent);
	try {
		this.contentLoaderInfo.addEventListener(jeash.events.Event.COMPLETE,$closure(this,"handleLoad"),false,2147483647);
		this.mImage.jeashLoadFromFile(request.url,this.contentLoaderInfo);
		this.content = new jeash.display.Bitmap(this.mImage);
		Reflect.setField(this.contentLoaderInfo,"content",this.content);
		this.addChild(this.content);
	} catch( e ) {
		haxe.Log.trace("Error " + e,{ fileName : "Loader.hx", lineNumber : 90, className : "jeash.display.Loader", methodName : "load"});
		var evt = new jeash.events.IOErrorEvent(jeash.events.IOErrorEvent.IO_ERROR);
		this.contentLoaderInfo.dispatchEvent(evt);
		return;
	}
	if(this.mShape == null) {
		this.mShape = new jeash.display.Shape();
		this.addChild(this.mShape);
	}
}
jeash.display.Loader.prototype.handleLoad = function(e) {
	this.contentLoaderInfo.removeEventListener(jeash.events.Event.COMPLETE,$closure(this,"handleLoad"));
	this.jeashInvalidateBounds();
}
jeash.display.Loader.prototype.BuildBounds = function() {
	jeash.display.DisplayObjectContainer.prototype.BuildBounds.call(this);
	if(this.mImage != null) {
		var r = new jeash.geom.Rectangle(0,0,this.mImage.getWidth(),this.mImage.getHeight());
		if(r.width != 0 || r.height != 0) {
			if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone(); else this.mBoundsRect.extendBounds(r);
		}
	}
}
jeash.display.Loader.prototype.__class__ = jeash.display.Loader;
box2D.dynamics.B2DebugDraw = function(p) {
	if( p === $_ ) return;
	this.m_drawScale = 1.0;
	this.m_lineThickness = 1.0;
	this.m_alpha = 1.0;
	this.m_fillAlpha = 1.0;
	this.m_xformScale = 1.0;
	this.m_drawFlags = 0;
}
box2D.dynamics.B2DebugDraw.__name__ = ["box2D","dynamics","B2DebugDraw"];
box2D.dynamics.B2DebugDraw.prototype.setFlags = function(flags) {
	this.m_drawFlags = flags;
}
box2D.dynamics.B2DebugDraw.prototype.getFlags = function() {
	return this.m_drawFlags;
}
box2D.dynamics.B2DebugDraw.prototype.appendFlags = function(flags) {
	this.m_drawFlags |= flags;
}
box2D.dynamics.B2DebugDraw.prototype.clearFlags = function(flags) {
	this.m_drawFlags &= ~flags;
}
box2D.dynamics.B2DebugDraw.prototype.setSprite = function(sprite) {
	this.m_sprite = sprite;
}
box2D.dynamics.B2DebugDraw.prototype.getSprite = function() {
	return this.m_sprite;
}
box2D.dynamics.B2DebugDraw.prototype.setDrawScale = function(drawScale) {
	this.m_drawScale = drawScale;
}
box2D.dynamics.B2DebugDraw.prototype.getDrawScale = function() {
	return this.m_drawScale;
}
box2D.dynamics.B2DebugDraw.prototype.setLineThickness = function(lineThickness) {
	this.m_lineThickness = lineThickness;
}
box2D.dynamics.B2DebugDraw.prototype.getLineThickness = function() {
	return this.m_lineThickness;
}
box2D.dynamics.B2DebugDraw.prototype.setAlpha = function(alpha) {
	this.m_alpha = alpha;
}
box2D.dynamics.B2DebugDraw.prototype.getAlpha = function() {
	return this.m_alpha;
}
box2D.dynamics.B2DebugDraw.prototype.setFillAlpha = function(alpha) {
	this.m_fillAlpha = alpha;
}
box2D.dynamics.B2DebugDraw.prototype.getFillAlpha = function() {
	return this.m_fillAlpha;
}
box2D.dynamics.B2DebugDraw.prototype.setXFormScale = function(xformScale) {
	this.m_xformScale = xformScale;
}
box2D.dynamics.B2DebugDraw.prototype.getXFormScale = function() {
	return this.m_xformScale;
}
box2D.dynamics.B2DebugDraw.prototype.drawPolygon = function(vertices,vertexCount,color) {
	this.m_sprite.jeashGetGraphics().lineStyle(this.m_lineThickness,color.getColor(),this.m_alpha);
	this.m_sprite.jeashGetGraphics().moveTo(vertices[0].x * this.m_drawScale,vertices[0].y * this.m_drawScale);
	var _g = 1;
	while(_g < vertexCount) {
		var i = _g++;
		this.m_sprite.jeashGetGraphics().lineTo(vertices[i].x * this.m_drawScale,vertices[i].y * this.m_drawScale);
	}
	this.m_sprite.jeashGetGraphics().lineTo(vertices[0].x * this.m_drawScale,vertices[0].y * this.m_drawScale);
}
box2D.dynamics.B2DebugDraw.prototype.drawSolidPolygon = function(vertices,vertexCount,color) {
	this.m_sprite.jeashGetGraphics().lineStyle(this.m_lineThickness,color.getColor(),this.m_alpha);
	this.m_sprite.jeashGetGraphics().moveTo(vertices[0].x * this.m_drawScale,vertices[0].y * this.m_drawScale);
	this.m_sprite.jeashGetGraphics().beginFill(color.getColor(),this.m_fillAlpha);
	var _g = 1;
	while(_g < vertexCount) {
		var i = _g++;
		this.m_sprite.jeashGetGraphics().lineTo(vertices[i].x * this.m_drawScale,vertices[i].y * this.m_drawScale);
	}
	this.m_sprite.jeashGetGraphics().lineTo(vertices[0].x * this.m_drawScale,vertices[0].y * this.m_drawScale);
	this.m_sprite.jeashGetGraphics().endFill();
}
box2D.dynamics.B2DebugDraw.prototype.drawCircle = function(center,radius,color) {
	this.m_sprite.jeashGetGraphics().lineStyle(this.m_lineThickness,color.getColor(),this.m_alpha);
	this.m_sprite.jeashGetGraphics().drawCircle(center.x * this.m_drawScale,center.y * this.m_drawScale,radius * this.m_drawScale);
}
box2D.dynamics.B2DebugDraw.prototype.drawSolidCircle = function(center,radius,axis,color) {
	this.m_sprite.jeashGetGraphics().lineStyle(this.m_lineThickness,color.getColor(),this.m_alpha);
	this.m_sprite.jeashGetGraphics().moveTo(0,0);
	this.m_sprite.jeashGetGraphics().beginFill(color.getColor(),this.m_fillAlpha);
	this.m_sprite.jeashGetGraphics().drawCircle(center.x * this.m_drawScale,center.y * this.m_drawScale,radius * this.m_drawScale);
	this.m_sprite.jeashGetGraphics().endFill();
	this.m_sprite.jeashGetGraphics().moveTo(center.x * this.m_drawScale,center.y * this.m_drawScale);
	this.m_sprite.jeashGetGraphics().lineTo((center.x + axis.x * radius) * this.m_drawScale,(center.y + axis.y * radius) * this.m_drawScale);
}
box2D.dynamics.B2DebugDraw.prototype.drawSegment = function(p1,p2,color) {
	this.m_sprite.jeashGetGraphics().lineStyle(this.m_lineThickness,color.getColor(),this.m_alpha);
	this.m_sprite.jeashGetGraphics().moveTo(p1.x * this.m_drawScale,p1.y * this.m_drawScale);
	this.m_sprite.jeashGetGraphics().lineTo(p2.x * this.m_drawScale,p2.y * this.m_drawScale);
}
box2D.dynamics.B2DebugDraw.prototype.drawTransform = function(xf) {
	this.m_sprite.jeashGetGraphics().lineStyle(this.m_lineThickness,16711680,this.m_alpha);
	this.m_sprite.jeashGetGraphics().moveTo(xf.position.x * this.m_drawScale,xf.position.y * this.m_drawScale);
	this.m_sprite.jeashGetGraphics().lineTo((xf.position.x + this.m_xformScale * xf.R.col1.x) * this.m_drawScale,(xf.position.y + this.m_xformScale * xf.R.col1.y) * this.m_drawScale);
	this.m_sprite.jeashGetGraphics().lineStyle(this.m_lineThickness,65280,this.m_alpha);
	this.m_sprite.jeashGetGraphics().moveTo(xf.position.x * this.m_drawScale,xf.position.y * this.m_drawScale);
	this.m_sprite.jeashGetGraphics().lineTo((xf.position.x + this.m_xformScale * xf.R.col2.x) * this.m_drawScale,(xf.position.y + this.m_xformScale * xf.R.col2.y) * this.m_drawScale);
}
box2D.dynamics.B2DebugDraw.prototype.m_drawFlags = null;
box2D.dynamics.B2DebugDraw.prototype.m_sprite = null;
box2D.dynamics.B2DebugDraw.prototype.m_drawScale = null;
box2D.dynamics.B2DebugDraw.prototype.m_lineThickness = null;
box2D.dynamics.B2DebugDraw.prototype.m_alpha = null;
box2D.dynamics.B2DebugDraw.prototype.m_fillAlpha = null;
box2D.dynamics.B2DebugDraw.prototype.m_xformScale = null;
box2D.dynamics.B2DebugDraw.prototype.__class__ = box2D.dynamics.B2DebugDraw;
box2D.collision.shapes.B2PolygonShape = function(p) {
	if( p === $_ ) return;
	box2D.collision.shapes.B2Shape.call(this);
	this.m_type = box2D.collision.shapes.B2Shape.e_polygonShape;
	this.m_centroid = new box2D.common.math.B2Vec2();
	this.m_vertices = new Array();
	this.m_normals = new Array();
}
box2D.collision.shapes.B2PolygonShape.__name__ = ["box2D","collision","shapes","B2PolygonShape"];
box2D.collision.shapes.B2PolygonShape.__super__ = box2D.collision.shapes.B2Shape;
for(var k in box2D.collision.shapes.B2Shape.prototype ) box2D.collision.shapes.B2PolygonShape.prototype[k] = box2D.collision.shapes.B2Shape.prototype[k];
box2D.collision.shapes.B2PolygonShape.asArray = function(vertices,vertexCount) {
	var polygonShape = new box2D.collision.shapes.B2PolygonShape();
	polygonShape.setAsArray(vertices,vertexCount);
	return polygonShape;
}
box2D.collision.shapes.B2PolygonShape.asVector = function(vertices,vertexCount) {
	var polygonShape = new box2D.collision.shapes.B2PolygonShape();
	polygonShape.setAsVector(vertices,vertexCount);
	return polygonShape;
}
box2D.collision.shapes.B2PolygonShape.asBox = function(hx,hy) {
	var polygonShape = new box2D.collision.shapes.B2PolygonShape();
	polygonShape.setAsBox(hx,hy);
	return polygonShape;
}
box2D.collision.shapes.B2PolygonShape.asOrientedBox = function(hx,hy,center,angle) {
	if(angle == null) angle = 0.0;
	var polygonShape = new box2D.collision.shapes.B2PolygonShape();
	polygonShape.setAsOrientedBox(hx,hy,center,angle);
	return polygonShape;
}
box2D.collision.shapes.B2PolygonShape.asEdge = function(v1,v2) {
	var polygonShape = new box2D.collision.shapes.B2PolygonShape();
	polygonShape.setAsEdge(v1,v2);
	return polygonShape;
}
box2D.collision.shapes.B2PolygonShape.computeCentroid = function(vs,count) {
	var c = new box2D.common.math.B2Vec2();
	var area = 0.0;
	var p1X = 0.0;
	var p1Y = 0.0;
	var inv3 = 1.0 / 3.0;
	var _g = 0;
	while(_g < count) {
		var i = _g++;
		var p2 = vs[i];
		var p3 = i + 1 < count?vs[Std["int"](i + 1)]:vs[0];
		var e1X = p2.x - p1X;
		var e1Y = p2.y - p1Y;
		var e2X = p3.x - p1X;
		var e2Y = p3.y - p1Y;
		var D = e1X * e2Y - e1Y * e2X;
		var triangleArea = 0.5 * D;
		area += triangleArea;
		c.x += triangleArea * inv3 * (p1X + p2.x + p3.x);
		c.y += triangleArea * inv3 * (p1Y + p2.y + p3.y);
	}
	c.x *= 1.0 / area;
	c.y *= 1.0 / area;
	return c;
}
box2D.collision.shapes.B2PolygonShape.computeOBB = function(obb,vs,count) {
	var i;
	var p = new Array();
	var _g = 0;
	while(_g < count) {
		var i1 = _g++;
		p[i1] = vs[i1];
	}
	p[count] = p[0];
	var minArea = Number.MAX_VALUE;
	var _g1 = 1, _g = count + 1;
	while(_g1 < _g) {
		var i1 = _g1++;
		var root = p[Std["int"](i1 - 1)];
		var uxX = p[i1].x - root.x;
		var uxY = p[i1].y - root.y;
		var length = Math.sqrt(uxX * uxX + uxY * uxY);
		uxX /= length;
		uxY /= length;
		var uyX = -uxY;
		var uyY = uxX;
		var lowerX = Number.MAX_VALUE;
		var lowerY = Number.MAX_VALUE;
		var upperX = -Number.MAX_VALUE;
		var upperY = -Number.MAX_VALUE;
		var _g2 = 0;
		while(_g2 < count) {
			var j = _g2++;
			var dX = p[j].x - root.x;
			var dY = p[j].y - root.y;
			var rX = uxX * dX + uxY * dY;
			var rY = uyX * dX + uyY * dY;
			if(rX < lowerX) lowerX = rX;
			if(rY < lowerY) lowerY = rY;
			if(rX > upperX) upperX = rX;
			if(rY > upperY) upperY = rY;
		}
		var area = (upperX - lowerX) * (upperY - lowerY);
		if(area < 0.95 * minArea) {
			minArea = area;
			obb.R.col1.x = uxX;
			obb.R.col1.y = uxY;
			obb.R.col2.x = uyX;
			obb.R.col2.y = uyY;
			var centerX = 0.5 * (lowerX + upperX);
			var centerY = 0.5 * (lowerY + upperY);
			var tMat = obb.R;
			obb.center.x = root.x + (tMat.col1.x * centerX + tMat.col2.x * centerY);
			obb.center.y = root.y + (tMat.col1.y * centerX + tMat.col2.y * centerY);
			obb.extents.x = 0.5 * (upperX - lowerX);
			obb.extents.y = 0.5 * (upperY - lowerY);
		}
	}
}
box2D.collision.shapes.B2PolygonShape.prototype.copy = function() {
	var s = new box2D.collision.shapes.B2PolygonShape();
	s.set(this);
	return s;
}
box2D.collision.shapes.B2PolygonShape.prototype.set = function(other) {
	box2D.collision.shapes.B2Shape.prototype.set.call(this,other);
	if(Std["is"](other,box2D.collision.shapes.B2PolygonShape)) {
		var other2 = (function($this) {
			var $r;
			var $t = other;
			if(Std["is"]($t,box2D.collision.shapes.B2PolygonShape)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		this.m_centroid.setV(other2.m_centroid);
		this.m_vertexCount = other2.m_vertexCount;
		this.reserve(this.m_vertexCount);
		var _g1 = 0, _g = this.m_vertexCount;
		while(_g1 < _g) {
			var i = _g1++;
			this.m_vertices[i].setV(other2.m_vertices[i]);
			this.m_normals[i].setV(other2.m_normals[i]);
		}
	}
}
box2D.collision.shapes.B2PolygonShape.prototype.setAsArray = function(vertices,vertexCount) {
	if(vertexCount == null) vertexCount = 0;
	var v = new Array();
	var _g = 0;
	while(_g < vertices.length) {
		var tVec = vertices[_g];
		++_g;
		v.push(tVec);
	}
	this.setAsVector(v,vertexCount);
}
box2D.collision.shapes.B2PolygonShape.prototype.setAsVector = function(vertices,vertexCount) {
	if(vertexCount == null) vertexCount = 0;
	if(vertexCount == 0) vertexCount = vertices.length;
	box2D.common.B2Settings.b2Assert(2 <= vertexCount);
	this.m_vertexCount = Std["int"](vertexCount);
	this.reserve(Std["int"](vertexCount));
	var i;
	var _g1 = 0, _g = this.m_vertexCount;
	while(_g1 < _g) {
		var i1 = _g1++;
		this.m_vertices[i1].setV(vertices[i1]);
	}
	var _g1 = 0, _g = this.m_vertexCount;
	while(_g1 < _g) {
		var i1 = _g1++;
		var i11 = i1;
		var i2 = i1 + 1 < this.m_vertexCount?i1 + 1:0;
		var edge = box2D.common.math.B2Math.subtractVV(this.m_vertices[i2],this.m_vertices[i11]);
		box2D.common.B2Settings.b2Assert(edge.lengthSquared() > Number.MIN_VALUE);
		this.m_normals[i1].setV(box2D.common.math.B2Math.crossVF(edge,1.0));
		this.m_normals[i1].normalize();
	}
	this.m_centroid = box2D.collision.shapes.B2PolygonShape.computeCentroid(this.m_vertices,this.m_vertexCount);
}
box2D.collision.shapes.B2PolygonShape.prototype.setAsBox = function(hx,hy) {
	this.m_vertexCount = 4;
	this.reserve(4);
	this.m_vertices[0].set(-hx,-hy);
	this.m_vertices[1].set(hx,-hy);
	this.m_vertices[2].set(hx,hy);
	this.m_vertices[3].set(-hx,hy);
	this.m_normals[0].set(0.0,-1.0);
	this.m_normals[1].set(1.0,0.0);
	this.m_normals[2].set(0.0,1.0);
	this.m_normals[3].set(-1.0,0.0);
	this.m_centroid.setZero();
}
box2D.collision.shapes.B2PolygonShape.prototype.setAsOrientedBox = function(hx,hy,center,angle) {
	if(angle == null) angle = 0.0;
	this.m_vertexCount = 4;
	this.reserve(4);
	this.m_vertices[0].set(-hx,-hy);
	this.m_vertices[1].set(hx,-hy);
	this.m_vertices[2].set(hx,hy);
	this.m_vertices[3].set(-hx,hy);
	this.m_normals[0].set(0.0,-1.0);
	this.m_normals[1].set(1.0,0.0);
	this.m_normals[2].set(0.0,1.0);
	this.m_normals[3].set(-1.0,0.0);
	this.m_centroid = center;
	var xf = new box2D.common.math.B2Transform();
	xf.position = center;
	xf.R.set(angle);
	var _g1 = 0, _g = this.m_vertexCount;
	while(_g1 < _g) {
		var i = _g1++;
		this.m_vertices[i] = box2D.common.math.B2Math.mulX(xf,this.m_vertices[i]);
		this.m_normals[i] = box2D.common.math.B2Math.mulMV(xf.R,this.m_normals[i]);
	}
}
box2D.collision.shapes.B2PolygonShape.prototype.setAsEdge = function(v1,v2) {
	this.m_vertexCount = 2;
	this.reserve(2);
	this.m_vertices[0].setV(v1);
	this.m_vertices[1].setV(v2);
	this.m_centroid.x = 0.5 * (v1.x + v2.x);
	this.m_centroid.y = 0.5 * (v1.y + v2.y);
	this.m_normals[0] = box2D.common.math.B2Math.crossVF(box2D.common.math.B2Math.subtractVV(v2,v1),1.0);
	this.m_normals[0].normalize();
	this.m_normals[1].x = -this.m_normals[0].x;
	this.m_normals[1].y = -this.m_normals[0].y;
}
box2D.collision.shapes.B2PolygonShape.prototype.testPoint = function(xf,p) {
	var tVec;
	var tMat = xf.R;
	var tX = p.x - xf.position.x;
	var tY = p.y - xf.position.y;
	var pLocalX = tX * tMat.col1.x + tY * tMat.col1.y;
	var pLocalY = tX * tMat.col2.x + tY * tMat.col2.y;
	var _g1 = 0, _g = this.m_vertexCount;
	while(_g1 < _g) {
		var i = _g1++;
		tVec = this.m_vertices[i];
		tX = pLocalX - tVec.x;
		tY = pLocalY - tVec.y;
		tVec = this.m_normals[i];
		var dot = tVec.x * tX + tVec.y * tY;
		if(dot > 0.0) return false;
	}
	return true;
}
box2D.collision.shapes.B2PolygonShape.prototype.rayCast = function(output,input,transform) {
	var lower = 0.0;
	var upper = input.maxFraction;
	var tX;
	var tY;
	var tMat;
	var tVec;
	tX = input.p1.x - transform.position.x;
	tY = input.p1.y - transform.position.y;
	tMat = transform.R;
	var p1X = tX * tMat.col1.x + tY * tMat.col1.y;
	var p1Y = tX * tMat.col2.x + tY * tMat.col2.y;
	tX = input.p2.x - transform.position.x;
	tY = input.p2.y - transform.position.y;
	tMat = transform.R;
	var p2X = tX * tMat.col1.x + tY * tMat.col1.y;
	var p2Y = tX * tMat.col2.x + tY * tMat.col2.y;
	var dX = p2X - p1X;
	var dY = p2Y - p1Y;
	var index = -1;
	var _g1 = 0, _g = this.m_vertexCount;
	while(_g1 < _g) {
		var i = _g1++;
		tVec = this.m_vertices[i];
		tX = tVec.x - p1X;
		tY = tVec.y - p1Y;
		tVec = this.m_normals[i];
		var numerator = tVec.x * tX + tVec.y * tY;
		var denominator = tVec.x * dX + tVec.y * dY;
		if(denominator == 0.0) {
			if(numerator < 0.0) return false;
		} else if(denominator < 0.0 && numerator < lower * denominator) {
			lower = numerator / denominator;
			index = i;
		} else if(denominator > 0.0 && numerator < upper * denominator) upper = numerator / denominator;
		if(upper < lower - Number.MIN_VALUE) return false;
	}
	if(index >= 0) {
		output.fraction = lower;
		tMat = transform.R;
		tVec = this.m_normals[index];
		output.normal.x = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
		output.normal.y = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
		return true;
	}
	return false;
}
box2D.collision.shapes.B2PolygonShape.prototype.computeAABB = function(aabb,xf) {
	var tMat = xf.R;
	var tVec = this.m_vertices[0];
	var lowerX = xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
	var lowerY = xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
	var upperX = lowerX;
	var upperY = lowerY;
	var _g1 = 1, _g = this.m_vertexCount;
	while(_g1 < _g) {
		var i = _g1++;
		tVec = this.m_vertices[i];
		var vX = xf.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
		var vY = xf.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
		lowerX = lowerX < vX?lowerX:vX;
		lowerY = lowerY < vY?lowerY:vY;
		upperX = upperX > vX?upperX:vX;
		upperY = upperY > vY?upperY:vY;
	}
	aabb.lowerBound.x = lowerX - this.m_radius;
	aabb.lowerBound.y = lowerY - this.m_radius;
	aabb.upperBound.x = upperX + this.m_radius;
	aabb.upperBound.y = upperY + this.m_radius;
}
box2D.collision.shapes.B2PolygonShape.prototype.computeMass = function(massData,density) {
	if(this.m_vertexCount == 2) {
		massData.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x);
		massData.center.y = 0.5 * (this.m_vertices[0].y + this.m_vertices[1].y);
		massData.mass = 0.0;
		massData.I = 0.0;
		return;
	}
	var centerX = 0.0;
	var centerY = 0.0;
	var area = 0.0;
	var I = 0.0;
	var p1X = 0.0;
	var p1Y = 0.0;
	var k_inv3 = 1.0 / 3.0;
	var _g1 = 0, _g = this.m_vertexCount;
	while(_g1 < _g) {
		var i = _g1++;
		var p2 = this.m_vertices[i];
		var p3 = i + 1 < this.m_vertexCount?this.m_vertices[Std["int"](i + 1)]:this.m_vertices[0];
		var e1X = p2.x - p1X;
		var e1Y = p2.y - p1Y;
		var e2X = p3.x - p1X;
		var e2Y = p3.y - p1Y;
		var D = e1X * e2Y - e1Y * e2X;
		var triangleArea = 0.5 * D;
		area += triangleArea;
		centerX += triangleArea * k_inv3 * (p1X + p2.x + p3.x);
		centerY += triangleArea * k_inv3 * (p1Y + p2.y + p3.y);
		var px = p1X;
		var py = p1Y;
		var ex1 = e1X;
		var ey1 = e1Y;
		var ex2 = e2X;
		var ey2 = e2Y;
		var intx2 = k_inv3 * (0.25 * (ex1 * ex1 + ex2 * ex1 + ex2 * ex2) + (px * ex1 + px * ex2)) + 0.5 * px * px;
		var inty2 = k_inv3 * (0.25 * (ey1 * ey1 + ey2 * ey1 + ey2 * ey2) + (py * ey1 + py * ey2)) + 0.5 * py * py;
		I += D * (intx2 + inty2);
	}
	massData.mass = density * area;
	centerX *= 1.0 / area;
	centerY *= 1.0 / area;
	massData.center.set(centerX,centerY);
	massData.I = density * I;
}
box2D.collision.shapes.B2PolygonShape.prototype.computeSubmergedArea = function(normal,offset,xf,c) {
	var normalL = box2D.common.math.B2Math.mulTMV(xf.R,normal);
	var offsetL = offset - box2D.common.math.B2Math.dot(normal,xf.position);
	var depths = new Array();
	var diveCount = 0;
	var intoIndex = -1;
	var outoIndex = -1;
	var lastSubmerged = false;
	var i;
	var _g1 = 0, _g = this.m_vertexCount;
	while(_g1 < _g) {
		var i1 = _g1++;
		depths[i1] = box2D.common.math.B2Math.dot(normalL,this.m_vertices[i1]) - offsetL;
		var isSubmerged = depths[i1] < -Number.MIN_VALUE;
		if(i1 > 0) {
			if(isSubmerged) {
				if(!lastSubmerged) {
					intoIndex = i1 - 1;
					diveCount++;
				}
			} else if(lastSubmerged) {
				outoIndex = i1 - 1;
				diveCount++;
			}
		}
		lastSubmerged = isSubmerged;
	}
	switch(diveCount) {
	case 0:
		if(lastSubmerged) {
			var md = new box2D.collision.shapes.B2MassData();
			this.computeMass(md,1);
			c.setV(box2D.common.math.B2Math.mulX(xf,md.center));
			return md.mass;
		} else return 0;
		break;
	case 1:
		if(intoIndex == -1) intoIndex = this.m_vertexCount - 1; else outoIndex = this.m_vertexCount - 1;
		break;
	}
	var intoIndex2 = (intoIndex + 1) % this.m_vertexCount;
	var outoIndex2 = (outoIndex + 1) % this.m_vertexCount;
	var intoLamdda = (0 - depths[intoIndex]) / (depths[intoIndex2] - depths[intoIndex]);
	var outoLamdda = (0 - depths[outoIndex]) / (depths[outoIndex2] - depths[outoIndex]);
	var intoVec = new box2D.common.math.B2Vec2(this.m_vertices[intoIndex].x * (1 - intoLamdda) + this.m_vertices[intoIndex2].x * intoLamdda,this.m_vertices[intoIndex].y * (1 - intoLamdda) + this.m_vertices[intoIndex2].y * intoLamdda);
	var outoVec = new box2D.common.math.B2Vec2(this.m_vertices[outoIndex].x * (1 - outoLamdda) + this.m_vertices[outoIndex2].x * outoLamdda,this.m_vertices[outoIndex].y * (1 - outoLamdda) + this.m_vertices[outoIndex2].y * outoLamdda);
	var area = 0;
	var center = new box2D.common.math.B2Vec2();
	var p2 = this.m_vertices[intoIndex2];
	var p3;
	i = intoIndex2;
	while(i != outoIndex2) {
		i = (i + 1) % this.m_vertexCount;
		if(i == outoIndex2) p3 = outoVec; else p3 = this.m_vertices[i];
		var triangleArea = 0.5 * ((p2.x - intoVec.x) * (p3.y - intoVec.y) - (p2.y - intoVec.y) * (p3.x - intoVec.x));
		area += triangleArea;
		center.x += triangleArea * (intoVec.x + p2.x + p3.x) / 3;
		center.y += triangleArea * (intoVec.y + p2.y + p3.y) / 3;
		p2 = p3;
	}
	center.multiply(1 / area);
	c.setV(box2D.common.math.B2Math.mulX(xf,center));
	return area;
}
box2D.collision.shapes.B2PolygonShape.prototype.getVertexCount = function() {
	return this.m_vertexCount;
}
box2D.collision.shapes.B2PolygonShape.prototype.getVertices = function() {
	return this.m_vertices;
}
box2D.collision.shapes.B2PolygonShape.prototype.getNormals = function() {
	return this.m_normals;
}
box2D.collision.shapes.B2PolygonShape.prototype.getSupport = function(d) {
	var bestIndex = 0;
	var bestValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
	var _g1 = 1, _g = this.m_vertexCount;
	while(_g1 < _g) {
		var i = _g1++;
		var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
		if(value > bestValue) {
			bestIndex = i;
			bestValue = value;
		}
	}
	return bestIndex;
}
box2D.collision.shapes.B2PolygonShape.prototype.getSupportVertex = function(d) {
	var bestIndex = 0;
	var bestValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
	var _g1 = 1, _g = this.m_vertexCount;
	while(_g1 < _g) {
		var i = _g1++;
		var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
		if(value > bestValue) {
			bestIndex = i;
			bestValue = value;
		}
	}
	return this.m_vertices[bestIndex];
}
box2D.collision.shapes.B2PolygonShape.prototype.validate = function() {
	return false;
}
box2D.collision.shapes.B2PolygonShape.prototype.reserve = function(count) {
	var _g = this.m_vertices.length;
	while(_g < count) {
		var i = _g++;
		this.m_vertices[i] = new box2D.common.math.B2Vec2();
		this.m_normals[i] = new box2D.common.math.B2Vec2();
	}
}
box2D.collision.shapes.B2PolygonShape.prototype.m_centroid = null;
box2D.collision.shapes.B2PolygonShape.prototype.m_vertices = null;
box2D.collision.shapes.B2PolygonShape.prototype.m_normals = null;
box2D.collision.shapes.B2PolygonShape.prototype.m_vertexCount = null;
box2D.collision.shapes.B2PolygonShape.prototype.__class__ = box2D.collision.shapes.B2PolygonShape;
box2D.dynamics.contacts.B2ContactConstraint = function(p) {
	if( p === $_ ) return;
	this.localPlaneNormal = new box2D.common.math.B2Vec2();
	this.localPoint = new box2D.common.math.B2Vec2();
	this.normal = new box2D.common.math.B2Vec2();
	this.normalMass = new box2D.common.math.B2Mat22();
	this.K = new box2D.common.math.B2Mat22();
	this.points = new Array();
	var _g1 = 0, _g = box2D.common.B2Settings.b2_maxManifoldPoints;
	while(_g1 < _g) {
		var i = _g1++;
		this.points[i] = new box2D.dynamics.contacts.B2ContactConstraintPoint();
	}
}
box2D.dynamics.contacts.B2ContactConstraint.__name__ = ["box2D","dynamics","contacts","B2ContactConstraint"];
box2D.dynamics.contacts.B2ContactConstraint.prototype.points = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.localPlaneNormal = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.localPoint = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.normal = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.normalMass = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.K = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.bodyA = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.bodyB = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.type = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.radius = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.friction = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.restitution = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.pointCount = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.manifold = null;
box2D.dynamics.contacts.B2ContactConstraint.prototype.__class__ = box2D.dynamics.contacts.B2ContactConstraint;
jeash.display.BitmapDataChannel = function() { }
jeash.display.BitmapDataChannel.__name__ = ["jeash","display","BitmapDataChannel"];
jeash.display.BitmapDataChannel.prototype.__class__ = jeash.display.BitmapDataChannel;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
jeash.display.Stage = function(width,height) {
	if( width === $_ ) return;
	jeash.display.DisplayObjectContainer.call(this);
	this.mFocusObject = null;
	this.jeashWindowWidth = width;
	this.jeashWindowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = jeash.display.StageScaleMode.SHOW_ALL;
	this.jeashStageMatrix = new jeash.geom.Matrix();
	this.tabEnabled = true;
	this.jeashSetFrameRate(60.0);
	this.jeashSetBackgroundColour(16777215);
	this.name = "Stage";
	this.loaderInfo = jeash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.jeashWindowWidth);
	this.loaderInfo.parameters.height = Std.string(this.jeashWindowHeight);
	this.mProjMatrix = [1.,0,0,0,0,1,0,0,0,0,-1,-1,0,0,0,0];
	this.jeashPointInPathMode = jeash.display.Graphics.jeashDetectIsPointInPathMode();
	this.jeashMouseOverObjects = [];
	this.jeashMouseDown = false;
	this.jeashSetShowDefaultContextMenu(true);
}
jeash.display.Stage.__name__ = ["jeash","display","Stage"];
jeash.display.Stage.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Stage.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Stage.prototype.jeashWindowWidth = null;
jeash.display.Stage.prototype.jeashWindowHeight = null;
jeash.display.Stage.prototype.jeashTimer = null;
jeash.display.Stage.prototype.jeashInterval = null;
jeash.display.Stage.prototype.jeashFastMode = null;
jeash.display.Stage.prototype.jeashDragObject = null;
jeash.display.Stage.prototype.jeashDragBounds = null;
jeash.display.Stage.prototype.jeashDragOffsetX = null;
jeash.display.Stage.prototype.jeashDragOffsetY = null;
jeash.display.Stage.prototype.jeashMouseOverObjects = null;
jeash.display.Stage.prototype.jeashStageMatrix = null;
jeash.display.Stage.prototype.jeashMouseDown = null;
jeash.display.Stage.prototype.jeashStageActive = null;
jeash.display.Stage.prototype.jeashFrameRate = null;
jeash.display.Stage.prototype.jeashBackgroundColour = null;
jeash.display.Stage.prototype.jeashShowDefaultContextMenu = null;
jeash.display.Stage.prototype.jeashPointInPathMode = null;
jeash.display.Stage.prototype.stageWidth = null;
jeash.display.Stage.prototype.stageHeight = null;
jeash.display.Stage.prototype.frameRate = null;
jeash.display.Stage.prototype.quality = null;
jeash.display.Stage.prototype.scaleMode = null;
jeash.display.Stage.prototype.align = null;
jeash.display.Stage.prototype.stageFocusRect = null;
jeash.display.Stage.prototype.focus = null;
jeash.display.Stage.prototype.backgroundColor = null;
jeash.display.Stage.prototype.showDefaultContextMenu = null;
jeash.display.Stage.prototype.displayState = null;
jeash.display.Stage.prototype.fullScreenWidth = null;
jeash.display.Stage.prototype.fullScreenHeight = null;
jeash.display.Stage.prototype.jeashGetStageWidth = function() {
	return this.jeashWindowWidth;
}
jeash.display.Stage.prototype.jeashGetStageHeight = function() {
	return this.jeashWindowHeight;
}
jeash.display.Stage.prototype.mFocusObject = null;
jeash.display.Stage.prototype.mProjMatrix = null;
jeash.display.Stage.prototype.jeashStartDrag = function(sprite,lockCenter,bounds) {
	if(lockCenter == null) lockCenter = false;
	this.jeashDragBounds = bounds == null?null:bounds.clone();
	this.jeashDragObject = sprite;
	if(this.jeashDragObject != null) {
		if(lockCenter) {
			var bounds1 = sprite.getBounds(this);
			this.jeashDragOffsetX = -bounds1.width / 2 - bounds1.x;
			this.jeashDragOffsetY = -bounds1.height / 2 - bounds1.y;
		} else {
			var mouse = new jeash.geom.Point(this.jeashGetMouseX(),this.jeashGetMouseY());
			var p = this.jeashDragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			this.jeashDragOffsetX = this.jeashDragObject.jeashGetX() - mouse.x;
			this.jeashDragOffsetY = this.jeashDragObject.jeashGetY() - mouse.y;
		}
	}
}
jeash.display.Stage.prototype.jeashDrag = function(point) {
	var p = this.jeashDragObject.parent;
	if(p != null) point = p.globalToLocal(point);
	var x = point.x + this.jeashDragOffsetX;
	var y = point.y + this.jeashDragOffsetY;
	if(this.jeashDragBounds != null) {
		if(x < this.jeashDragBounds.x) x = this.jeashDragBounds.x; else if(x > this.jeashDragBounds.get_right()) x = this.jeashDragBounds.get_right();
		if(y < this.jeashDragBounds.y) y = this.jeashDragBounds.y; else if(y > this.jeashDragBounds.get_bottom()) y = this.jeashDragBounds.get_bottom();
	}
	this.jeashDragObject.jeashSetX(x);
	this.jeashDragObject.jeashSetY(y);
}
jeash.display.Stage.prototype.jeashStopDrag = function(sprite) {
	this.jeashDragBounds = null;
	this.jeashDragObject = null;
}
jeash.display.Stage.prototype.jeashCheckInOuts = function(event,stack) {
	var prev = this.jeashMouseOverObjects;
	var events = jeash.display.Stage.jeashMouseChanges;
	var new_n = stack.length;
	var new_obj = new_n > 0?stack[new_n - 1]:null;
	var old_n = prev.length;
	var old_obj = old_n > 0?prev[old_n - 1]:null;
	if(new_obj != old_obj) {
		if(old_obj != null) old_obj.jeashFireEvent(event.jeashCreateSimilar(events[0],new_obj,old_obj));
		if(new_obj != null) new_obj.jeashFireEvent(event.jeashCreateSimilar(events[1],old_obj,new_obj));
		var common = 0;
		while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
		var rollOut = event.jeashCreateSimilar(events[2],new_obj,old_obj);
		var i = old_n - 1;
		while(i >= common) {
			prev[i].dispatchEvent(rollOut);
			i--;
		}
		var rollOver = event.jeashCreateSimilar(events[3],old_obj);
		var i1 = new_n - 1;
		while(i1 >= common) {
			stack[i1].dispatchEvent(rollOver);
			i1--;
		}
		this.jeashMouseOverObjects = stack;
	}
}
jeash.display.Stage.prototype.jeashProcessStageEvent = function(evt) {
	evt.stopPropagation();
	switch(evt.type) {
	case "mousemove":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_MOVE);
		break;
	case "mousedown":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_DOWN);
		break;
	case "mouseup":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_UP);
		break;
	case "click":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.CLICK);
		break;
	case "mousewheel":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_WHEEL);
		break;
	case "dblclick":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.DOUBLE_CLICK);
		break;
	case "keydown":
		var evt1 = evt;
		var keyCode = evt1.keyIdentifier != null?(function($this) {
			var $r;
			try {
				$r = jeash.ui.Keyboard.jeashConvertWebkitCode(evt1.keyIdentifier);
			} catch( e ) {
				$r = evt1.keyCode;
			}
			return $r;
		}(this)):jeash.ui.Keyboard.jeashConvertMozillaCode(evt1.keyCode);
		this.jeashOnKey(keyCode,true,evt1.keyLocation,evt1.ctrlKey,evt1.altKey,evt1.shiftKey);
		break;
	case "keyup":
		var evt1 = evt;
		var keyCode = evt1.keyIdentifier != null?(function($this) {
			var $r;
			try {
				$r = jeash.ui.Keyboard.jeashConvertWebkitCode(evt1.keyIdentifier);
			} catch( e ) {
				$r = evt1.keyCode;
			}
			return $r;
		}(this)):jeash.ui.Keyboard.jeashConvertMozillaCode(evt1.keyCode);
		this.jeashOnKey(keyCode,false,evt1.keyLocation,evt1.ctrlKey,evt1.altKey,evt1.shiftKey);
		break;
	default:
	}
}
jeash.display.Stage.prototype.jeashOnMouse = function(event,type) {
	var point = new jeash.geom.Point(event.clientX - jeash.Lib.mMe.__scr.offsetLeft + window.pageXOffset,event.clientY - jeash.Lib.mMe.__scr.offsetTop + window.pageYOffset);
	if(this.jeashDragObject != null) this.jeashDrag(point);
	var obj = this.jeashGetObjectUnderPoint(point);
	this.jeashSetMouseX(point.x);
	this.jeashSetMouseY(point.y);
	var stack = new Array();
	if(obj != null) obj.jeashGetInteractiveObjectStack(stack);
	if(stack.length > 0) {
		stack.reverse();
		var local = obj.globalToLocal(point);
		var evt = this.jeashCreateMouseEvent(type,event,local,obj);
		this.jeashCheckInOuts(evt,stack);
		obj.jeashFireEvent(evt);
	} else {
		var evt = this.jeashCreateMouseEvent(type,event,point,null);
		this.jeashCheckInOuts(evt,stack);
	}
}
jeash.display.Stage.prototype.jeashCreateMouseEvent = function(type,event,local,target) {
	var delta = type == jeash.events.MouseEvent.MOUSE_WHEEL?(function($this) {
		var $r;
		var mouseEvent = event;
		$r = mouseEvent.wheelDelta?js.Lib.isOpera?Std["int"](mouseEvent.wheelDelta / 40):Std["int"](mouseEvent.wheelDelta / 120):mouseEvent.detail?Std["int"](-mouseEvent.detail):null;
		return $r;
	}(this)):2;
	if(type == jeash.events.MouseEvent.MOUSE_DOWN) this.jeashMouseDown = event.which != null?event.which == 1:event.button != null?js.Lib.isIE && event.button == 1 || event.button == 0:false; else if(type == jeash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) this.jeashMouseDown = false; else if(event.button != null) {
				if(js.Lib.isIE && event.button == 1 || event.button == 0) this.jeashMouseDown = false; else this.jeashMouseDown = false;
			}
		}
	}
	var pseudoEvent = new jeash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,this.jeashMouseDown,delta);
	pseudoEvent.stageX = this.jeashGetMouseX();
	pseudoEvent.stageY = this.jeashGetMouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
jeash.display.Stage.prototype.jeashOnKey = function(code,pressed,inChar,ctrl,alt,shift) {
	var event = new jeash.events.KeyboardEvent(pressed?jeash.events.KeyboardEvent.KEY_DOWN:jeash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,shift || ctrl?1:0,ctrl,alt,shift);
	this.dispatchEvent(event);
}
jeash.display.Stage.prototype.jeashOnResize = function(inW,inH) {
	this.jeashWindowWidth = inW;
	this.jeashWindowHeight = inH;
	var event = new jeash.events.Event(jeash.events.Event.RESIZE);
	event.target = this;
	this.jeashBroadcast(event);
}
jeash.display.Stage.prototype.jeashGetBackgroundColour = function() {
	return this.jeashBackgroundColour;
}
jeash.display.Stage.prototype.jeashSetBackgroundColour = function(col) {
	this.jeashBackgroundColour = col;
	return col;
}
jeash.display.Stage.prototype.DoSetFocus = function(inObj,inKeyCode) {
	return inObj;
}
jeash.display.Stage.prototype.SetFocus = function(inObj) {
	return this.DoSetFocus(inObj,-1);
}
jeash.display.Stage.prototype.GetFocus = function() {
	return this.mFocusObject;
}
jeash.display.Stage.prototype.jeashRenderAll = function() {
	this.jeashRender(this.jeashStageMatrix);
}
jeash.display.Stage.prototype.jeashRenderToCanvas = function(canvas) {
	canvas.width = canvas.width;
	this.jeashRender(this.jeashStageMatrix,canvas);
}
jeash.display.Stage.prototype.jeashSetQuality = function(inQuality) {
	this.quality = inQuality;
	return inQuality;
}
jeash.display.Stage.prototype.jeashGetQuality = function() {
	return this.quality != null?this.quality:jeash.display.StageQuality.BEST;
}
jeash.display.Stage.prototype.jeashGetFrameRate = function() {
	return this.jeashFrameRate;
}
jeash.display.Stage.prototype.jeashSetFrameRate = function(speed) {
	if(StringTools.startsWith(jeash.Lib.context,"swf")) return speed;
	var window = js.Lib.window;
	if(speed == 0 && window.postMessage != null) this.jeashFastMode = true; else {
		this.jeashFastMode = false;
		this.jeashInterval = Std["int"](1000.0 / speed);
	}
	this.jeashUpdateNextWake();
	this.jeashFrameRate = speed;
	return speed;
}
jeash.display.Stage.prototype.jeashUpdateNextWake = function() {
	var window = js.Lib.window;
	window.clearInterval(this.jeashTimer);
	if(this.jeashFastMode) {
		window.addEventListener("message",$closure(this,"jeashStageRender"),false);
		window.postMessage("a",window.location);
	} else this.jeashTimer = window.setInterval($closure(this,"jeashStageRender"),this.jeashInterval,[]);
}
jeash.display.Stage.prototype.jeashStageRender = function(_) {
	if(!this.jeashStageActive) {
		this.jeashOnResize(this.jeashWindowWidth,this.jeashWindowHeight);
		var event = new jeash.events.Event(jeash.events.Event.ACTIVATE);
		event.target = this;
		this.jeashBroadcast(event);
		this.jeashStageActive = true;
	}
	var event = new jeash.events.Event(jeash.events.Event.ENTER_FRAME);
	this.jeashBroadcast(event);
	this.jeashRenderAll();
	var event1 = new jeash.events.Event(jeash.events.Event.RENDER);
	this.jeashBroadcast(event1);
	if(this.jeashFastMode) window.postMessage("a",window.location);
}
jeash.display.Stage.prototype.jeashIsOnStage = function() {
	return true;
}
jeash.display.Stage.prototype.jeashGetMouseX = function() {
	return this.mouseX;
}
jeash.display.Stage.prototype.jeashSetMouseX = function(x) {
	this.mouseX = x;
	return x;
}
jeash.display.Stage.prototype.jeashGetMouseY = function() {
	return this.mouseY;
}
jeash.display.Stage.prototype.jeashSetMouseY = function(y) {
	this.mouseY = y;
	return y;
}
jeash.display.Stage.prototype.jeashGetShowDefaultContextMenu = function() {
	return this.jeashShowDefaultContextMenu;
}
jeash.display.Stage.prototype.jeashSetShowDefaultContextMenu = function(showDefaultContextMenu) {
	if(showDefaultContextMenu != this.jeashShowDefaultContextMenu && this.jeashShowDefaultContextMenu != null) {
		if(!showDefaultContextMenu) jeash.Lib.jeashDisableRightClick(); else jeash.Lib.jeashEnableRightClick();
	}
	this.jeashShowDefaultContextMenu = showDefaultContextMenu;
	return showDefaultContextMenu;
}
jeash.display.Stage.prototype.jeashGetDisplayState = function() {
	return this.displayState;
}
jeash.display.Stage.prototype.jeashSetDisplayState = function(displayState) {
	if(displayState != this.displayState && this.displayState != null) {
		switch( (displayState)[1] ) {
		case 1:
			jeash.Lib.jeashDisableFullScreen();
			break;
		case 0:
			jeash.Lib.jeashEnableFullScreen();
			break;
		}
	}
	this.displayState = displayState;
	return displayState;
}
jeash.display.Stage.prototype.jeashGetFullScreenWidth = function() {
	return jeash.Lib.jeashFullScreenWidth();
}
jeash.display.Stage.prototype.jeashGetFullScreenHeight = function() {
	return jeash.Lib.jeashFullScreenHeight();
}
jeash.display.Stage.prototype.__class__ = jeash.display.Stage;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
jeash.errors.IOError = function(message) {
	if( message === $_ ) return;
	if(message == null) message = "";
	jeash.errors.Error.call(this,message);
}
jeash.errors.IOError.__name__ = ["jeash","errors","IOError"];
jeash.errors.IOError.__super__ = jeash.errors.Error;
for(var k in jeash.errors.Error.prototype ) jeash.errors.IOError.prototype[k] = jeash.errors.Error.prototype[k];
jeash.errors.IOError.prototype.__class__ = jeash.errors.IOError;
jeash.text.TextFieldType = function(p) {
}
jeash.text.TextFieldType.__name__ = ["jeash","text","TextFieldType"];
jeash.text.TextFieldType.prototype.__class__ = jeash.text.TextFieldType;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
box2D.collision.B2DistanceProxy = function(p) {
	if( p === $_ ) return;
	this.m_vertices = new Array();
}
box2D.collision.B2DistanceProxy.__name__ = ["box2D","collision","B2DistanceProxy"];
box2D.collision.B2DistanceProxy.prototype.set = function(shape) {
	switch(shape.getType()) {
	case box2D.collision.shapes.B2Shape.e_circleShape:
		var circle = (function($this) {
			var $r;
			var $t = shape;
			if(Std["is"]($t,box2D.collision.shapes.B2CircleShape)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		this.m_vertices = new Array();
		this.m_vertices[0] = circle.m_p;
		this.m_count = 1;
		this.m_radius = circle.m_radius;
		break;
	case box2D.collision.shapes.B2Shape.e_polygonShape:
		var polygon = (function($this) {
			var $r;
			var $t = shape;
			if(Std["is"]($t,box2D.collision.shapes.B2PolygonShape)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		this.m_vertices = polygon.m_vertices;
		this.m_count = polygon.m_vertexCount;
		this.m_radius = polygon.m_radius;
		break;
	default:
		box2D.common.B2Settings.b2Assert(false);
	}
}
box2D.collision.B2DistanceProxy.prototype.getSupport = function(d) {
	var bestIndex = 0;
	var bestValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
	var _g1 = 1, _g = this.m_count;
	while(_g1 < _g) {
		var i = _g1++;
		var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
		if(value > bestValue) {
			bestIndex = i;
			bestValue = value;
		}
	}
	return bestIndex;
}
box2D.collision.B2DistanceProxy.prototype.getSupportVertex = function(d) {
	var bestIndex = 0;
	var bestValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
	var _g1 = 1, _g = this.m_count;
	while(_g1 < _g) {
		var i = _g1++;
		var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
		if(value > bestValue) {
			bestIndex = i;
			bestValue = value;
		}
	}
	return this.m_vertices[bestIndex];
}
box2D.collision.B2DistanceProxy.prototype.getVertexCount = function() {
	return this.m_count;
}
box2D.collision.B2DistanceProxy.prototype.getVertex = function(index) {
	box2D.common.B2Settings.b2Assert(0 <= index && index < this.m_count);
	return this.m_vertices[index];
}
box2D.collision.B2DistanceProxy.prototype.m_vertices = null;
box2D.collision.B2DistanceProxy.prototype.m_count = null;
box2D.collision.B2DistanceProxy.prototype.m_radius = null;
box2D.collision.B2DistanceProxy.prototype.__class__ = box2D.collision.B2DistanceProxy;
fr.aymericlamboley.test.Main = function(p) {
	if( p === $_ ) return;
	com.citruxengine.core.CitruxEngine.call(this);
	jeash.Lib.jeashGetCurrent().GetStage().scaleMode = jeash.display.StageScaleMode.NO_SCALE;
	jeash.Lib.jeashGetCurrent().GetStage().align = jeash.display.StageAlign.TOP_LEFT;
	this.setState(new fr.aymericlamboley.test.GameState());
}
fr.aymericlamboley.test.Main.__name__ = ["fr","aymericlamboley","test","Main"];
fr.aymericlamboley.test.Main.__super__ = com.citruxengine.core.CitruxEngine;
for(var k in com.citruxengine.core.CitruxEngine.prototype ) fr.aymericlamboley.test.Main.prototype[k] = com.citruxengine.core.CitruxEngine.prototype[k];
fr.aymericlamboley.test.Main.main = function() {
	jeash.Lib.jeashGetCurrent().addChild(new fr.aymericlamboley.test.Main());
}
fr.aymericlamboley.test.Main.prototype.__class__ = fr.aymericlamboley.test.Main;
if(!jeash.accessibility) jeash.accessibility = {}
jeash.accessibility.AccessibilityProperties = function(p) {
	if( p === $_ ) return;
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
}
jeash.accessibility.AccessibilityProperties.__name__ = ["jeash","accessibility","AccessibilityProperties"];
jeash.accessibility.AccessibilityProperties.prototype.description = null;
jeash.accessibility.AccessibilityProperties.prototype.forceSimple = null;
jeash.accessibility.AccessibilityProperties.prototype.name = null;
jeash.accessibility.AccessibilityProperties.prototype.noAutoLabeling = null;
jeash.accessibility.AccessibilityProperties.prototype.shortcut = null;
jeash.accessibility.AccessibilityProperties.prototype.silent = null;
jeash.accessibility.AccessibilityProperties.prototype.__class__ = jeash.accessibility.AccessibilityProperties;
Selection = function() { }
Selection.__name__ = ["Selection"];
Selection.prototype.anchorNode = null;
Selection.prototype.anchorOffset = null;
Selection.prototype.focusNode = null;
Selection.prototype.focusOffset = null;
Selection.prototype.isCollapsed = null;
Selection.prototype.rangeCount = null;
Selection.prototype.collapse = null;
Selection.prototype.collapseToStart = null;
Selection.prototype.collapseToEnd = null;
Selection.prototype.selectAllChildren = null;
Selection.prototype.deleteFromDocument = null;
Selection.prototype.getRangeAt = null;
Selection.prototype.addRange = null;
Selection.prototype.removeRange = null;
Selection.prototype.removeAllRanges = null;
Selection.prototype.stringifier = null;
Selection.prototype.__class__ = Selection;
MessagePortArray = function() { }
MessagePortArray.__name__ = ["MessagePortArray"];
MessagePortArray.prototype.__class__ = MessagePortArray;
MessagePort = function() { }
MessagePort.__name__ = ["MessagePort"];
MessagePort.prototype.postMessage = null;
MessagePort.prototype.start = null;
MessagePort.prototype.close = null;
MessagePort.prototype.onmessage = null;
MessagePort.prototype.__class__ = MessagePort;
jeash.net.URLLoaderDataFormat = { __ename__ : ["jeash","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] }
jeash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
jeash.net.URLLoaderDataFormat.BINARY.toString = $estr;
jeash.net.URLLoaderDataFormat.BINARY.__enum__ = jeash.net.URLLoaderDataFormat;
jeash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
jeash.net.URLLoaderDataFormat.TEXT.toString = $estr;
jeash.net.URLLoaderDataFormat.TEXT.__enum__ = jeash.net.URLLoaderDataFormat;
jeash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
jeash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
jeash.net.URLLoaderDataFormat.VARIABLES.__enum__ = jeash.net.URLLoaderDataFormat;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) return true;
	}
	return false;
}
Reflect.field = function(o,field) {
	var methodName = "jeashGet" + field.substr(0,1).toUpperCase() + field.substr(1);
	if(o[methodName] != null) return o[methodName](); else {
		var v = null;
		try {
			v = o[field];
		} catch( e ) {
		}
		return v;
	}
}
Reflect.setField = function(o,field,value) {
	var methodName = "jeashSet" + field.substr(0,1).toUpperCase() + field.substr(1);
	if(o[methodName] != null) o[methodName](value); else o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
				for(var i in o)
					if( o.hasOwnProperty(i) )
						a.push(i);
			;
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			t = null;
		}
		if(t != null) o.__proto__ = null;
		
				for(var i in o)
					if( i != "__proto__" )
						a.push(i);
			;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		Reflect.setField(o2,f,Reflect.field(o,f));
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		return f(a);
	};
}
Reflect.prototype.__class__ = Reflect;
jeash.text.FontType = { __ename__ : ["jeash","text","FontType"], __constructs__ : ["EMBEDDED","DEVICE"] }
jeash.text.FontType.EMBEDDED = ["EMBEDDED",0];
jeash.text.FontType.EMBEDDED.toString = $estr;
jeash.text.FontType.EMBEDDED.__enum__ = jeash.text.FontType;
jeash.text.FontType.DEVICE = ["DEVICE",1];
jeash.text.FontType.DEVICE.toString = $estr;
jeash.text.FontType.DEVICE.__enum__ = jeash.text.FontType;
box2D.dynamics.joints.B2FrictionJointDef = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.joints.B2JointDef.call(this);
	this.localAnchorA = new box2D.common.math.B2Vec2();
	this.localAnchorB = new box2D.common.math.B2Vec2();
	this.type = box2D.dynamics.joints.B2Joint.e_frictionJoint;
	this.maxForce = 0.0;
	this.maxTorque = 0.0;
}
box2D.dynamics.joints.B2FrictionJointDef.__name__ = ["box2D","dynamics","joints","B2FrictionJointDef"];
box2D.dynamics.joints.B2FrictionJointDef.__super__ = box2D.dynamics.joints.B2JointDef;
for(var k in box2D.dynamics.joints.B2JointDef.prototype ) box2D.dynamics.joints.B2FrictionJointDef.prototype[k] = box2D.dynamics.joints.B2JointDef.prototype[k];
box2D.dynamics.joints.B2FrictionJointDef.prototype.initialize = function(bA,bB,anchor) {
	this.bodyA = bA;
	this.bodyB = bB;
	this.localAnchorA.setV(this.bodyA.getLocalPoint(anchor));
	this.localAnchorB.setV(this.bodyB.getLocalPoint(anchor));
}
box2D.dynamics.joints.B2FrictionJointDef.prototype.localAnchorA = null;
box2D.dynamics.joints.B2FrictionJointDef.prototype.localAnchorB = null;
box2D.dynamics.joints.B2FrictionJointDef.prototype.maxForce = null;
box2D.dynamics.joints.B2FrictionJointDef.prototype.maxTorque = null;
box2D.dynamics.joints.B2FrictionJointDef.prototype.__class__ = box2D.dynamics.joints.B2FrictionJointDef;
haxe.io.BytesBuffer = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype.b = null;
haxe.io.BytesBuffer.prototype.addByte = function($byte) {
	this.b.push($byte);
}
haxe.io.BytesBuffer.prototype.add = function(src) {
	var b1 = this.b;
	var b2 = src.b;
	var _g1 = 0, _g = src.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.b.push(b2[i]);
	}
}
haxe.io.BytesBuffer.prototype.addBytes = function(src,pos,len) {
	if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	var _g1 = pos, _g = pos + len;
	while(_g1 < _g) {
		var i = _g1++;
		this.b.push(b2[i]);
	}
}
haxe.io.BytesBuffer.prototype.getBytes = function() {
	var bytes = new haxe.io.Bytes(this.b.length,this.b);
	this.b = null;
	return bytes;
}
haxe.io.BytesBuffer.prototype.__class__ = haxe.io.BytesBuffer;
box2D.common.math.B2Mat33 = function(c1,c2,c3) {
	if( c1 === $_ ) return;
	this.col1 = new box2D.common.math.B2Vec3();
	this.col2 = new box2D.common.math.B2Vec3();
	this.col3 = new box2D.common.math.B2Vec3();
	if(c1 == null && c2 == null && c3 == null) {
		this.col1.setZero();
		this.col2.setZero();
		this.col3.setZero();
	} else {
		this.col1.setV(c1);
		this.col2.setV(c2);
		this.col3.setV(c3);
	}
}
box2D.common.math.B2Mat33.__name__ = ["box2D","common","math","B2Mat33"];
box2D.common.math.B2Mat33.prototype.setVVV = function(c1,c2,c3) {
	this.col1.setV(c1);
	this.col2.setV(c2);
	this.col3.setV(c3);
}
box2D.common.math.B2Mat33.prototype.copy = function() {
	return new box2D.common.math.B2Mat33(this.col1,this.col2,this.col3);
}
box2D.common.math.B2Mat33.prototype.setM = function(m) {
	this.col1.setV(m.col1);
	this.col2.setV(m.col2);
	this.col3.setV(m.col3);
}
box2D.common.math.B2Mat33.prototype.addM = function(m) {
	this.col1.x += m.col1.x;
	this.col1.y += m.col1.y;
	this.col1.z += m.col1.z;
	this.col2.x += m.col2.x;
	this.col2.y += m.col2.y;
	this.col2.z += m.col2.z;
	this.col3.x += m.col3.x;
	this.col3.y += m.col3.y;
	this.col3.z += m.col3.z;
}
box2D.common.math.B2Mat33.prototype.setIdentity = function() {
	this.col1.x = 1.0;
	this.col2.x = 0.0;
	this.col3.x = 0.0;
	this.col1.y = 0.0;
	this.col2.y = 1.0;
	this.col3.y = 0.0;
	this.col1.z = 0.0;
	this.col2.z = 0.0;
	this.col3.z = 1.0;
}
box2D.common.math.B2Mat33.prototype.setZero = function() {
	this.col1.x = 0.0;
	this.col2.x = 0.0;
	this.col3.x = 0.0;
	this.col1.y = 0.0;
	this.col2.y = 0.0;
	this.col3.y = 0.0;
	this.col1.z = 0.0;
	this.col2.z = 0.0;
	this.col3.z = 0.0;
}
box2D.common.math.B2Mat33.prototype.solve22 = function(out,bX,bY) {
	var a11 = this.col1.x;
	var a12 = this.col2.x;
	var a21 = this.col1.y;
	var a22 = this.col2.y;
	var det = a11 * a22 - a12 * a21;
	if(det != 0.0) det = 1.0 / det;
	out.x = det * (a22 * bX - a12 * bY);
	out.y = det * (a11 * bY - a21 * bX);
	return out;
}
box2D.common.math.B2Mat33.prototype.solve33 = function(out,bX,bY,bZ) {
	var a11 = this.col1.x;
	var a21 = this.col1.y;
	var a31 = this.col1.z;
	var a12 = this.col2.x;
	var a22 = this.col2.y;
	var a32 = this.col2.z;
	var a13 = this.col3.x;
	var a23 = this.col3.y;
	var a33 = this.col3.z;
	var det = a11 * (a22 * a33 - a32 * a23) + a21 * (a32 * a13 - a12 * a33) + a31 * (a12 * a23 - a22 * a13);
	if(det != 0.0) det = 1.0 / det;
	out.x = det * (bX * (a22 * a33 - a32 * a23) + bY * (a32 * a13 - a12 * a33) + bZ * (a12 * a23 - a22 * a13));
	out.y = det * (a11 * (bY * a33 - bZ * a23) + a21 * (bZ * a13 - bX * a33) + a31 * (bX * a23 - bY * a13));
	out.z = det * (a11 * (a22 * bZ - a32 * bY) + a21 * (a32 * bX - a12 * bZ) + a31 * (a12 * bY - a22 * bX));
	return out;
}
box2D.common.math.B2Mat33.prototype.col1 = null;
box2D.common.math.B2Mat33.prototype.col2 = null;
box2D.common.math.B2Mat33.prototype.col3 = null;
box2D.common.math.B2Mat33.prototype.__class__ = box2D.common.math.B2Mat33;
box2D.dynamics.controllers.B2ControllerEdge = function(p) {
}
box2D.dynamics.controllers.B2ControllerEdge.__name__ = ["box2D","dynamics","controllers","B2ControllerEdge"];
box2D.dynamics.controllers.B2ControllerEdge.prototype.controller = null;
box2D.dynamics.controllers.B2ControllerEdge.prototype.body = null;
box2D.dynamics.controllers.B2ControllerEdge.prototype.prevBody = null;
box2D.dynamics.controllers.B2ControllerEdge.prototype.nextBody = null;
box2D.dynamics.controllers.B2ControllerEdge.prototype.prevController = null;
box2D.dynamics.controllers.B2ControllerEdge.prototype.nextController = null;
box2D.dynamics.controllers.B2ControllerEdge.prototype.__class__ = box2D.dynamics.controllers.B2ControllerEdge;
StringBuf = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x == null?"null":x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
box2D.dynamics.contacts.B2ContactRegister = function(p) {
}
box2D.dynamics.contacts.B2ContactRegister.__name__ = ["box2D","dynamics","contacts","B2ContactRegister"];
box2D.dynamics.contacts.B2ContactRegister.prototype.createFcn = null;
box2D.dynamics.contacts.B2ContactRegister.prototype.destroyFcn = null;
box2D.dynamics.contacts.B2ContactRegister.prototype.primary = null;
box2D.dynamics.contacts.B2ContactRegister.prototype.pool = null;
box2D.dynamics.contacts.B2ContactRegister.prototype.poolCount = null;
box2D.dynamics.contacts.B2ContactRegister.prototype.__class__ = box2D.dynamics.contacts.B2ContactRegister;
box2D.collision.B2DynamicTreePair = function(p) {
}
box2D.collision.B2DynamicTreePair.__name__ = ["box2D","collision","B2DynamicTreePair"];
box2D.collision.B2DynamicTreePair.prototype.proxyA = null;
box2D.collision.B2DynamicTreePair.prototype.proxyB = null;
box2D.collision.B2DynamicTreePair.prototype.__class__ = box2D.collision.B2DynamicTreePair;
if(!jeash.system) jeash.system = {}
jeash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if( checkPolicyFile === $_ ) return;
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
}
jeash.system.LoaderContext.__name__ = ["jeash","system","LoaderContext"];
jeash.system.LoaderContext.prototype.applicationDomain = null;
jeash.system.LoaderContext.prototype.checkPolicyFile = null;
jeash.system.LoaderContext.prototype.securityDomain = null;
jeash.system.LoaderContext.prototype.__class__ = jeash.system.LoaderContext;
box2D.collision.B2RayCastInput = function(p1,p2,maxFraction) {
	if( p1 === $_ ) return;
	if(maxFraction == null) maxFraction = 1;
	this.p1 = new box2D.common.math.B2Vec2();
	this.p2 = new box2D.common.math.B2Vec2();
	if(p1 != null) this.p1.setV(p1);
	if(p2 != null) this.p2.setV(p2);
	this.maxFraction = maxFraction;
}
box2D.collision.B2RayCastInput.__name__ = ["box2D","collision","B2RayCastInput"];
box2D.collision.B2RayCastInput.prototype.p1 = null;
box2D.collision.B2RayCastInput.prototype.p2 = null;
box2D.collision.B2RayCastInput.prototype.maxFraction = null;
box2D.collision.B2RayCastInput.prototype.__class__ = box2D.collision.B2RayCastInput;
box2D.collision.B2OBB = function(p) {
	if( p === $_ ) return;
	this.R = new box2D.common.math.B2Mat22();
	this.center = new box2D.common.math.B2Vec2();
	this.extents = new box2D.common.math.B2Vec2();
}
box2D.collision.B2OBB.__name__ = ["box2D","collision","B2OBB"];
box2D.collision.B2OBB.prototype.R = null;
box2D.collision.B2OBB.prototype.center = null;
box2D.collision.B2OBB.prototype.extents = null;
box2D.collision.B2OBB.prototype.__class__ = box2D.collision.B2OBB;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var x = $it0.next();
			if(x == elt) return true;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(cmp(x,elt)) return true;
		}
	}
	return false;
}
Lambda.exists = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
}
Lambda.foreach = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
}
Lambda.iter = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
}
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
}
Lambda.fold = function(it,f,first) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = a.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = b.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		l.add(x);
	}
	return l;
}
Lambda.prototype.__class__ = Lambda;
haxe.Timer = function(time_ms) {
	if( time_ms === $_ ) return;
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.run = function() {
}
haxe.Timer.prototype.__class__ = haxe.Timer;
jeash.utils.Endian = { __ename__ : ["jeash","utils","Endian"], __constructs__ : ["BIG_ENDIAN","LITTLE_ENDIAN"] }
jeash.utils.Endian.BIG_ENDIAN = ["BIG_ENDIAN",0];
jeash.utils.Endian.BIG_ENDIAN.toString = $estr;
jeash.utils.Endian.BIG_ENDIAN.__enum__ = jeash.utils.Endian;
jeash.utils.Endian.LITTLE_ENDIAN = ["LITTLE_ENDIAN",1];
jeash.utils.Endian.LITTLE_ENDIAN.toString = $estr;
jeash.utils.Endian.LITTLE_ENDIAN.__enum__ = jeash.utils.Endian;
jeash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	if( inX === $_ ) return;
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
}
jeash.display.GfxPoint.__name__ = ["jeash","display","GfxPoint"];
jeash.display.GfxPoint.prototype.x = null;
jeash.display.GfxPoint.prototype.y = null;
jeash.display.GfxPoint.prototype.cx = null;
jeash.display.GfxPoint.prototype.cy = null;
jeash.display.GfxPoint.prototype.type = null;
jeash.display.GfxPoint.prototype.__class__ = jeash.display.GfxPoint;
jeash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	if( inGrad === $_ ) return;
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
}
jeash.display.LineJob.__name__ = ["jeash","display","LineJob"];
jeash.display.LineJob.prototype.grad = null;
jeash.display.LineJob.prototype.point_idx0 = null;
jeash.display.LineJob.prototype.point_idx1 = null;
jeash.display.LineJob.prototype.thickness = null;
jeash.display.LineJob.prototype.alpha = null;
jeash.display.LineJob.prototype.colour = null;
jeash.display.LineJob.prototype.pixel_hinting = null;
jeash.display.LineJob.prototype.joints = null;
jeash.display.LineJob.prototype.caps = null;
jeash.display.LineJob.prototype.scale_mode = null;
jeash.display.LineJob.prototype.miter_limit = null;
jeash.display.LineJob.prototype.__class__ = jeash.display.LineJob;
jeash.display.PointInPathMode = { __ename__ : ["jeash","display","PointInPathMode"], __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
jeash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
jeash.display.PointInPathMode.USER_SPACE.toString = $estr;
jeash.display.PointInPathMode.USER_SPACE.__enum__ = jeash.display.PointInPathMode;
jeash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
jeash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
jeash.display.PointInPathMode.DEVICE_SPACE.__enum__ = jeash.display.PointInPathMode;
jeash.display.Graphics = function(inSurface) {
	if( inSurface === $_ ) return;
	if(inSurface == null) {
		this.jeashSurface = js.Lib.document.createElement("canvas");
		this.jeashSurface.width = 0;
		this.jeashSurface.height = 0;
	} else this.jeashSurface = inSurface;
	this.mMatrix = new jeash.geom.Matrix();
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.originX = 0;
	this.originY = 0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.mNoClip = false;
	this.jeashClearLine();
	this.mLineJobs = [];
	this.jeashChanged = true;
	this.nextDrawIndex = 0;
	this.jeashRenderFrame = 0;
	this.jeashExtentBuffer = 0;
	this.jeashIsTile = false;
	this.jeashExtent = new jeash.geom.Rectangle();
}
jeash.display.Graphics.__name__ = ["jeash","display","Graphics"];
jeash.display.Graphics.jeashDetectIsPointInPathMode = function() {
	var canvas = js.Lib.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return jeash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?jeash.display.PointInPathMode.USER_SPACE:jeash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
jeash.display.Graphics.prototype.jeashSurface = null;
jeash.display.Graphics.prototype.jeashChanged = null;
jeash.display.Graphics.prototype.mPoints = null;
jeash.display.Graphics.prototype.mSolid = null;
jeash.display.Graphics.prototype.mFilling = null;
jeash.display.Graphics.prototype.mFillColour = null;
jeash.display.Graphics.prototype.mFillAlpha = null;
jeash.display.Graphics.prototype.mSolidGradient = null;
jeash.display.Graphics.prototype.mBitmap = null;
jeash.display.Graphics.prototype.mCurrentLine = null;
jeash.display.Graphics.prototype.mLineJobs = null;
jeash.display.Graphics.prototype.mNoClip = null;
jeash.display.Graphics.prototype.mDrawList = null;
jeash.display.Graphics.prototype.mLineDraws = null;
jeash.display.Graphics.prototype.mPenX = null;
jeash.display.Graphics.prototype.mPenY = null;
jeash.display.Graphics.prototype.mLastMoveID = null;
jeash.display.Graphics.prototype.mMatrix = null;
jeash.display.Graphics.prototype.owner = null;
jeash.display.Graphics.prototype.mBoundsDirty = null;
jeash.display.Graphics.prototype.jeashExtent = null;
jeash.display.Graphics.prototype.originX = null;
jeash.display.Graphics.prototype.originY = null;
jeash.display.Graphics.prototype.nextDrawIndex = null;
jeash.display.Graphics.prototype.jeashRenderFrame = null;
jeash.display.Graphics.prototype.jeashExtentBuffer = null;
jeash.display.Graphics.prototype.jeashIsTile = null;
jeash.display.Graphics.prototype.SetSurface = function(inSurface) {
	this.jeashSurface = inSurface;
}
jeash.display.Graphics.prototype.createCanvasColor = function(color,alpha) {
	var r;
	var g;
	var b;
	r = (16711680 & color) >> 16;
	g = (65280 & color) >> 8;
	b = 255 & color;
	return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
}
jeash.display.Graphics.prototype.createCanvasGradient = function(ctx,g) {
	var gradient;
	var matrix = g.matrix;
	if((g.flags & jeash.display.Graphics.RADIAL) == 0) {
		var p1 = matrix.transformPoint(new jeash.geom.Point(-819.2,0));
		var p2 = matrix.transformPoint(new jeash.geom.Point(819.2,0));
		gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
	} else {
		var p1 = matrix.transformPoint(new jeash.geom.Point(g.focal * 819.2,0));
		var p2 = matrix.transformPoint(new jeash.geom.Point(0,819.2));
		gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
	}
	var _g = 0, _g1 = g.points;
	while(_g < _g1.length) {
		var point = _g1[_g];
		++_g;
		var color = this.createCanvasColor(point.col,point.alpha);
		var pos = point.ratio / 255;
		gradient.addColorStop(pos,color);
	}
	return gradient;
}
jeash.display.Graphics.prototype.jeashRender = function(maskHandle,matrix) {
	if(!this.jeashChanged) return false;
	this.ClosePolygon(true);
	if(this.jeashExtent.width - this.jeashExtent.x != this.jeashSurface.width || this.jeashExtent.height - this.jeashExtent.y != this.jeashSurface.height) this.jeashAdjustSurface();
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		} catch( e ) {
			$r = (function($this) {
				var $r;
				jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
				$r = null;
				return $r;
			}($this));
		}
		return $r;
	}(this));
	if(ctx == null) return false;
	var len = this.mDrawList.length;
	ctx.save();
	if(this.jeashExtent.x != 0 || this.jeashExtent.y != 0) ctx.translate(-this.jeashExtent.x,-this.jeashExtent.y);
	var _g = this.nextDrawIndex;
	while(_g < len) {
		var i = _g++;
		var d = this.mDrawList[len - 1 - i];
		if(d.lineJobs.length > 0) {
			var _g1 = 0, _g2 = d.lineJobs;
			while(_g1 < _g2.length) {
				var lj = _g2[_g1];
				++_g1;
				ctx.lineWidth = lj.thickness;
				switch(lj.joints) {
				case jeash.display.Graphics.CORNER_ROUND:
					ctx.lineJoin = "round";
					break;
				case jeash.display.Graphics.CORNER_MITER:
					ctx.lineJoin = "miter";
					break;
				case jeash.display.Graphics.CORNER_BEVEL:
					ctx.lineJoin = "bevel";
					break;
				}
				switch(lj.caps) {
				case jeash.display.Graphics.END_ROUND:
					ctx.lineCap = "round";
					break;
				case jeash.display.Graphics.END_SQUARE:
					ctx.lineCap = "square";
					break;
				case jeash.display.Graphics.END_NONE:
					ctx.lineCap = "butt";
					break;
				}
				ctx.miterLimit = lj.miter_limit;
				if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
				ctx.beginPath();
				var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
				while(_g4 < _g3) {
					var i1 = _g4++;
					var p = d.points[i1];
					switch(p.type) {
					case jeash.display.Graphics.MOVE:
						ctx.moveTo(p.x,p.y);
						break;
					case jeash.display.Graphics.CURVE:
						ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
						break;
					default:
						ctx.lineTo(p.x,p.y);
					}
				}
				ctx.closePath();
				ctx.stroke();
			}
		} else {
			ctx.beginPath();
			var _g1 = 0, _g2 = d.points;
			while(_g1 < _g2.length) {
				var p = _g2[_g1];
				++_g1;
				switch(p.type) {
				case jeash.display.Graphics.MOVE:
					ctx.moveTo(p.x,p.y);
					break;
				case jeash.display.Graphics.CURVE:
					ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
					break;
				default:
					ctx.lineTo(p.x,p.y);
				}
			}
			ctx.closePath();
		}
		var fillColour = d.fillColour;
		var fillAlpha = d.fillAlpha;
		if(fillAlpha >= 0. && fillAlpha <= 1.) {
			var g = d.solidGradient;
			if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else ctx.fillStyle = this.createCanvasColor(fillColour,fillAlpha);
		}
		ctx.fill();
		ctx.save();
		var bitmap = d.bitmap;
		if(bitmap != null) {
			ctx.clip();
			if(this.jeashExtent.x != 0 || this.jeashExtent.y != 0) ctx.translate(-this.jeashExtent.x,-this.jeashExtent.y);
			var img = bitmap.texture_buffer;
			var matrix1 = bitmap.matrix;
			if(matrix1 != null) ctx.transform(matrix1.a,matrix1.b,matrix1.c,matrix1.d,matrix1.tx,matrix1.ty);
			ctx.drawImage(img,0,0);
		}
		ctx.restore();
	}
	ctx.restore();
	this.jeashChanged = false;
	this.nextDrawIndex = len;
	return true;
}
jeash.display.Graphics.prototype.jeashHitTest = function(inX,inY) {
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		} catch( e ) {
			$r = (function($this) {
				var $r;
				jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
				$r = null;
				return $r;
			}($this));
		}
		return $r;
	}(this));
	if(ctx == null) return false;
	ctx.save();
	var _g = 0, _g1 = this.mDrawList;
	while(_g < _g1.length) {
		var d = _g1[_g];
		++_g;
		ctx.beginPath();
		var _g2 = 0, _g3 = d.points;
		while(_g2 < _g3.length) {
			var p = _g3[_g2];
			++_g2;
			switch(p.type) {
			case jeash.display.Graphics.MOVE:
				ctx.moveTo(p.x,p.y);
				break;
			case jeash.display.Graphics.CURVE:
				ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
				break;
			default:
				ctx.lineTo(p.x,p.y);
			}
		}
		ctx.closePath();
		if(ctx.isPointInPath(inX,inY)) return true;
	}
	ctx.restore();
	return false;
}
jeash.display.Graphics.prototype.blit = function(inTexture) {
	this.ClosePolygon(true);
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		} catch( e ) {
			$r = (function($this) {
				var $r;
				jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
				$r = null;
				return $r;
			}($this));
		}
		return $r;
	}(this));
	if(ctx != null) ctx.drawImage(inTexture.mTextureBuffer,this.mPenX,this.mPenY);
}
jeash.display.Graphics.prototype.lineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
	this.AddLineSegment();
	if(thickness == null) {
		this.jeashClearLine();
		return;
	} else {
		this.mCurrentLine.grad = null;
		this.mCurrentLine.thickness = thickness;
		this.mCurrentLine.colour = color == null?0:color;
		this.mCurrentLine.alpha = alpha == null?1.0:alpha;
		this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
		this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:jeash.display.Graphics.PIXEL_HINTING;
	}
	if(caps != null) {
		switch( (caps)[1] ) {
		case 1:
			this.mCurrentLine.caps = jeash.display.Graphics.END_ROUND;
			break;
		case 2:
			this.mCurrentLine.caps = jeash.display.Graphics.END_SQUARE;
			break;
		case 0:
			this.mCurrentLine.caps = jeash.display.Graphics.END_NONE;
			break;
		}
	}
	this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NORMAL;
	if(scaleMode != null) {
		switch( (scaleMode)[1] ) {
		case 2:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NORMAL;
			break;
		case 3:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_VERTICAL;
			break;
		case 0:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_HORIZONTAL;
			break;
		case 1:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NONE;
			break;
		}
	}
	this.mCurrentLine.joints = jeash.display.Graphics.CORNER_ROUND;
	if(joints != null) {
		switch( (joints)[1] ) {
		case 1:
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_ROUND;
			break;
		case 0:
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_MITER;
			break;
		case 2:
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_BEVEL;
			break;
		}
	}
}
jeash.display.Graphics.prototype.lineGradientStyle = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	this.mCurrentLine.grad = this.CreateGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
}
jeash.display.Graphics.prototype.beginFill = function(color,alpha) {
	this.ClosePolygon(true);
	this.mFillColour = color;
	this.mFillAlpha = alpha == null?1.0:alpha;
	this.mFilling = true;
	this.mSolidGradient = null;
	this.mBitmap = null;
}
jeash.display.Graphics.prototype.endFill = function() {
	this.ClosePolygon(true);
}
jeash.display.Graphics.prototype.DrawEllipse = function(x,y,rx,ry) {
	this.moveTo(x + rx,y);
	this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
	this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
	this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
	this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
	this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
	this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
	this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
	this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
}
jeash.display.Graphics.prototype.drawEllipse = function(x,y,rx,ry) {
	this.ClosePolygon(false);
	rx /= 2;
	ry /= 2;
	this.DrawEllipse(x + rx,y + ry,rx,ry);
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.drawCircle = function(x,y,rad) {
	this.ClosePolygon(false);
	this.DrawEllipse(x,y,rad,rad);
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.drawRect = function(x,y,width,height) {
	this.ClosePolygon(false);
	this.moveTo(x,y);
	this.lineTo(x + width,y);
	this.lineTo(x + width,y + height);
	this.lineTo(x,y + height);
	this.lineTo(x,y);
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.drawRoundRect = function(x,y,width,height,rx,ry) {
	rx *= 0.5;
	ry *= 0.5;
	var w = width * 0.5;
	x += w;
	if(rx > w) rx = w;
	var lw = w - rx;
	var w_ = lw + rx * Math.sin(Math.PI / 4);
	var cw_ = lw + rx * Math.tan(Math.PI / 8);
	var h = height * 0.5;
	y += h;
	if(ry > h) ry = h;
	var lh = h - ry;
	var h_ = lh + ry * Math.sin(Math.PI / 4);
	var ch_ = lh + ry * Math.tan(Math.PI / 8);
	this.ClosePolygon(false);
	this.moveTo(x + w,y + lh);
	this.curveTo(x + w,y + ch_,x + w_,y + h_);
	this.curveTo(x + cw_,y + h,x + lw,y + h);
	this.lineTo(x - lw,y + h);
	this.curveTo(x - cw_,y + h,x - w_,y + h_);
	this.curveTo(x - w,y + ch_,x - w,y + lh);
	this.lineTo(x - w,y - lh);
	this.curveTo(x - w,y - ch_,x - w_,y - h_);
	this.curveTo(x - cw_,y - h,x - lw,y - h);
	this.lineTo(x + lw,y - h);
	this.curveTo(x + cw_,y - h,x + w_,y - h_);
	this.curveTo(x + w,y - ch_,x + w,y - lh);
	this.lineTo(x + w,y + lh);
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.CreateGradient = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	var points = new Array();
	var _g1 = 0, _g = colors.length;
	while(_g1 < _g) {
		var i = _g1++;
		points.push({ col : colors[i], alpha : alphas[i], ratio : ratios[i]});
	}
	var flags = 0;
	if(type == jeash.display.GradientType.RADIAL) flags |= jeash.display.Graphics.RADIAL;
	if(spreadMethod == jeash.display.SpreadMethod.REPEAT) flags |= jeash.display.Graphics.SPREAD_REPEAT; else if(spreadMethod == jeash.display.SpreadMethod.REFLECT) flags |= jeash.display.Graphics.SPREAD_REFLECT;
	if(matrix == null) {
		matrix = new jeash.geom.Matrix();
		matrix.createGradientBox(25,25);
	} else matrix = matrix.clone();
	var focal = focalPointRatio == null?0:focalPointRatio;
	return { points : points, matrix : matrix, flags : flags, focal : focal};
}
jeash.display.Graphics.prototype.beginGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	this.ClosePolygon(true);
	this.mFilling = true;
	this.mBitmap = null;
	this.mSolidGradient = this.CreateGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
}
jeash.display.Graphics.prototype.beginBitmapFill = function(bitmap,matrix,in_repeat,in_smooth) {
	this.ClosePolygon(true);
	var repeat = in_repeat == null?true:in_repeat;
	var smooth = in_smooth == null?false:in_smooth;
	this.mFilling = true;
	this.mSolidGradient = null;
	this.jeashExpandStandardExtent(bitmap.mTextureBuffer != null?bitmap.mTextureBuffer.width:0,bitmap.mTextureBuffer != null?bitmap.mTextureBuffer.height:0);
	this.mBitmap = { texture_buffer : bitmap.mTextureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?jeash.display.Graphics.BMP_REPEAT:0) | (smooth?jeash.display.Graphics.BMP_SMOOTH:0)};
}
jeash.display.Graphics.prototype.jeashClearLine = function() {
	this.mCurrentLine = new jeash.display.LineJob(null,-1,-1,0.0,0.0,0,1,jeash.display.Graphics.CORNER_ROUND,jeash.display.Graphics.END_ROUND,jeash.display.Graphics.SCALE_NORMAL,3.0);
}
jeash.display.Graphics.prototype.jeashClearCanvas = function() {
	if(this.jeashSurface != null) {
		var w = this.jeashSurface.width;
		this.jeashSurface.width = w;
	}
}
jeash.display.Graphics.prototype.clear = function() {
	this.jeashClearLine();
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.nextDrawIndex = 0;
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.jeashClearCanvas();
	this.mLineJobs = [];
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
}
jeash.display.Graphics.prototype.jeashExpandStandardExtent = function(x,y) {
	var maxX, minX, maxY, minY;
	minX = this.jeashExtent.x;
	minY = this.jeashExtent.y;
	maxX = this.jeashExtent.width + minX;
	maxY = this.jeashExtent.height + minY;
	maxX = x > maxX?x:maxX;
	minX = x < minX?x:minX;
	maxY = y > maxY?y:maxY;
	minY = y < minY?y:minY;
	this.jeashExtent.x = minX;
	this.jeashExtent.y = minY;
	this.jeashExtent.width = maxX - minX;
	this.jeashExtent.height = maxY - minY;
}
jeash.display.Graphics.prototype.moveTo = function(inX,inY) {
	this.mPenX = inX;
	this.mPenY = inY;
	this.jeashExpandStandardExtent(inX,inY);
	if(!this.mFilling) this.ClosePolygon(false); else {
		this.AddLineSegment();
		this.mLastMoveID = this.mPoints.length;
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
	}
}
jeash.display.Graphics.prototype.lineTo = function(inX,inY) {
	var pid = this.mPoints.length;
	if(pid == 0) {
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
		pid++;
	}
	this.mPenX = inX;
	this.mPenY = inY;
	this.jeashExpandStandardExtent(inX,inY);
	this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.LINE));
	if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
		if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
		this.mCurrentLine.point_idx1 = pid;
	}
	if(!this.mFilling) this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.curveTo = function(inCX,inCY,inX,inY) {
	var pid = this.mPoints.length;
	if(pid == 0) {
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
		pid++;
	}
	this.mPenX = inX;
	this.mPenY = inY;
	this.jeashExpandStandardExtent(inX,inY);
	this.mPoints.push(new jeash.display.GfxPoint(inX,inY,inCX,inCY,jeash.display.Graphics.CURVE));
	if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
		if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
		this.mCurrentLine.point_idx1 = pid;
	}
}
jeash.display.Graphics.prototype.flush = function() {
	this.ClosePolygon(true);
}
jeash.display.Graphics.prototype.AddDrawable = function(inDrawable) {
	if(inDrawable == null) return;
	this.mDrawList.unshift(inDrawable);
}
jeash.display.Graphics.prototype.AddLineSegment = function() {
	if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new jeash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
	this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
}
jeash.display.Graphics.prototype.ClosePolygon = function(inCancelFill) {
	var l = this.mPoints.length;
	if(l > 0) {
		if(l > 1) {
			if(this.mFilling && l > 2) {
				if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
			}
			this.AddLineSegment();
			var drawable = { points : this.mPoints, fillColour : this.mFillColour, fillAlpha : this.mFillAlpha, solidGradient : this.mSolidGradient, bitmap : this.mBitmap, lineJobs : this.mLineJobs};
			this.AddDrawable(drawable);
		}
		this.mLineJobs = [];
		this.mPoints = [];
	}
	if(inCancelFill) {
		this.mFillAlpha = 0;
		this.mSolidGradient = null;
		this.mBitmap = null;
		this.mFilling = false;
	}
	this.jeashChanged = true;
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
}
jeash.display.Graphics.prototype.drawGraphicsData = function(points) {
	var _g = 0;
	while(_g < points.length) {
		var data = points[_g];
		++_g;
		if(data == null) this.mFilling = true; else switch(data.jeashGraphicsDataType) {
		case jeash.display.GraphicsDataType.STROKE:
			var stroke = data;
			if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.jeashGraphicsFillType) {
			case jeash.display.GraphicsFillType.SOLID_FILL:
				var fill = stroke.fill;
				this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
				break;
			case jeash.display.GraphicsFillType.GRADIENT_FILL:
				var fill = stroke.fill;
				this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
			break;
		case jeash.display.GraphicsDataType.PATH:
			var path = data;
			var j = 0;
			var _g2 = 0, _g1 = path.commands.length;
			while(_g2 < _g1) {
				var i = _g2++;
				var command = path.commands[i];
				switch(command) {
				case 1:
					this.moveTo(path.data[j],path.data[j + 1]);
					j = j + 2;
					break;
				case 2:
					this.lineTo(path.data[j],path.data[j + 1]);
					j = j + 2;
					break;
				case 3:
					this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
					j = j + 4;
					break;
				}
			}
			break;
		case jeash.display.GraphicsDataType.SOLID:
			var fill = data;
			this.beginFill(fill.color,fill.alpha);
			break;
		case jeash.display.GraphicsDataType.GRADIENT:
			var fill = data;
			this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
			break;
		}
	}
}
jeash.display.Graphics.prototype.drawTiles = function(sheet,xyid,smooth,flags) {
	if(flags == null) flags = 0;
	if(smooth == null) smooth = false;
	this.jeashIsTile = true;
	jeash.Lib.jeashDrawSurfaceRect(sheet.jeashSurface,this.jeashSurface,xyid[0],xyid[1],sheet.jeashTileRects[xyid[2]]);
	if(flags != 0) {
		if((flags & 1) == 1) jeash.Lib.jeashSetSurfaceScale(this.jeashSurface,xyid[3]);
		if((flags & 2) == 2) jeash.Lib.jeashSetSurfaceRotation(this.jeashSurface,xyid[4]);
		if((flags & 8) == 8) jeash.Lib.jeashSetSurfaceOpacity(this.jeashSurface,xyid[8]);
	}
}
jeash.display.Graphics.prototype.markBoundsClean = function() {
	this.mBoundsDirty = false;
}
jeash.display.Graphics.prototype.markBoundsDirty = function() {
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
}
jeash.display.Graphics.prototype.getContext = function() {
	try {
		return this.jeashSurface.getContext("2d");
	} catch( e ) {
		jeash.Lib.trace("2d canvas API not implemented for: " + this.jeashSurface);
		return null;
	}
}
jeash.display.Graphics.prototype.jeashAdjustSurface = function() {
	var width = Math.ceil(this.jeashExtent.width - this.jeashExtent.x);
	var height = Math.ceil(this.jeashExtent.height - this.jeashExtent.y);
	if(width > 5000 || height > 5000) return;
	var dstCanvas = js.Lib.document.createElement("canvas");
	var ctx = dstCanvas.getContext("2d");
	dstCanvas.width = width;
	dstCanvas.height = height;
	jeash.Lib.jeashDrawToSurface(this.jeashSurface,dstCanvas);
	if(jeash.Lib.jeashIsOnStage(this.jeashSurface)) {
		jeash.Lib.jeashAppendSurface(dstCanvas);
		jeash.Lib.jeashCopyStyle(this.jeashSurface,dstCanvas);
		jeash.Lib.jeashSwapSurface(this.jeashSurface,dstCanvas);
		jeash.Lib.jeashRemoveSurface(this.jeashSurface);
	}
	this.jeashSurface = dstCanvas;
}
jeash.display.Graphics.prototype.__class__ = jeash.display.Graphics;
box2D.collision.shapes.B2CircleShape = function(radius) {
	if( radius === $_ ) return;
	if(radius == null) radius = 0;
	box2D.collision.shapes.B2Shape.call(this);
	this.m_p = new box2D.common.math.B2Vec2();
	this.m_type = box2D.collision.shapes.B2Shape.e_circleShape;
	this.m_radius = radius;
}
box2D.collision.shapes.B2CircleShape.__name__ = ["box2D","collision","shapes","B2CircleShape"];
box2D.collision.shapes.B2CircleShape.__super__ = box2D.collision.shapes.B2Shape;
for(var k in box2D.collision.shapes.B2Shape.prototype ) box2D.collision.shapes.B2CircleShape.prototype[k] = box2D.collision.shapes.B2Shape.prototype[k];
box2D.collision.shapes.B2CircleShape.prototype.copy = function() {
	var s = new box2D.collision.shapes.B2CircleShape();
	s.set(this);
	return s;
}
box2D.collision.shapes.B2CircleShape.prototype.set = function(other) {
	box2D.collision.shapes.B2Shape.prototype.set.call(this,other);
	if(Std["is"](other,box2D.collision.shapes.B2CircleShape)) {
		var other2 = (function($this) {
			var $r;
			var $t = other;
			if(Std["is"]($t,box2D.collision.shapes.B2CircleShape)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		this.m_p.setV(other2.m_p);
	}
}
box2D.collision.shapes.B2CircleShape.prototype.testPoint = function(transform,p) {
	var tMat = transform.R;
	var dX = transform.position.x + (tMat.col1.x * this.m_p.x + tMat.col2.x * this.m_p.y);
	var dY = transform.position.y + (tMat.col1.y * this.m_p.x + tMat.col2.y * this.m_p.y);
	dX = p.x - dX;
	dY = p.y - dY;
	return dX * dX + dY * dY <= this.m_radius * this.m_radius;
}
box2D.collision.shapes.B2CircleShape.prototype.rayCast = function(output,input,transform) {
	var tMat = transform.R;
	var positionX = transform.position.x + (tMat.col1.x * this.m_p.x + tMat.col2.x * this.m_p.y);
	var positionY = transform.position.y + (tMat.col1.y * this.m_p.x + tMat.col2.y * this.m_p.y);
	var sX = input.p1.x - positionX;
	var sY = input.p1.y - positionY;
	var b = sX * sX + sY * sY - this.m_radius * this.m_radius;
	var rX = input.p2.x - input.p1.x;
	var rY = input.p2.y - input.p1.y;
	var c = sX * rX + sY * rY;
	var rr = rX * rX + rY * rY;
	var sigma = c * c - rr * b;
	if(sigma < 0.0 || rr < Number.MIN_VALUE) return false;
	var a = -(c + Math.sqrt(sigma));
	if(0.0 <= a && a <= input.maxFraction * rr) {
		a /= rr;
		output.fraction = a;
		output.normal.x = sX + a * rX;
		output.normal.y = sY + a * rY;
		output.normal.normalize();
		return true;
	}
	return false;
}
box2D.collision.shapes.B2CircleShape.prototype.computeAABB = function(aabb,transform) {
	var tMat = transform.R;
	var pX = transform.position.x + (tMat.col1.x * this.m_p.x + tMat.col2.x * this.m_p.y);
	var pY = transform.position.y + (tMat.col1.y * this.m_p.x + tMat.col2.y * this.m_p.y);
	aabb.lowerBound.set(pX - this.m_radius,pY - this.m_radius);
	aabb.upperBound.set(pX + this.m_radius,pY + this.m_radius);
}
box2D.collision.shapes.B2CircleShape.prototype.computeMass = function(massData,density) {
	massData.mass = density * box2D.common.B2Settings.b2_pi * this.m_radius * this.m_radius;
	massData.center.setV(this.m_p);
	massData.I = massData.mass * (0.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y));
}
box2D.collision.shapes.B2CircleShape.prototype.computeSubmergedArea = function(normal,offset,xf,c) {
	var p = box2D.common.math.B2Math.mulX(xf,this.m_p);
	var l = -(box2D.common.math.B2Math.dot(normal,p) - offset);
	if(l < -this.m_radius + Number.MIN_VALUE) return 0;
	if(l > this.m_radius) {
		c.setV(p);
		return Math.PI * this.m_radius * this.m_radius;
	}
	var r2 = this.m_radius * this.m_radius;
	var l2 = l * l;
	var area = r2 * (Math.asin(l / this.m_radius) + Math.PI / 2) + l * Math.sqrt(r2 - l2);
	var com = -2 / 3 * Math.pow(r2 - l2,1.5) / area;
	c.x = p.x + normal.x * com;
	c.y = p.y + normal.y * com;
	return area;
}
box2D.collision.shapes.B2CircleShape.prototype.getLocalPosition = function() {
	return this.m_p;
}
box2D.collision.shapes.B2CircleShape.prototype.setLocalPosition = function(position) {
	this.m_p.setV(position);
}
box2D.collision.shapes.B2CircleShape.prototype.getRadius = function() {
	return this.m_radius;
}
box2D.collision.shapes.B2CircleShape.prototype.setRadius = function(radius) {
	this.m_radius = radius;
}
box2D.collision.shapes.B2CircleShape.prototype.m_p = null;
box2D.collision.shapes.B2CircleShape.prototype.__class__ = box2D.collision.shapes.B2CircleShape;
box2D.dynamics.B2DestructionListener = function() { }
box2D.dynamics.B2DestructionListener.__name__ = ["box2D","dynamics","B2DestructionListener"];
box2D.dynamics.B2DestructionListener.prototype.sayGoodbyeJoint = function(joint) {
}
box2D.dynamics.B2DestructionListener.prototype.sayGoodbyeFixture = function(fixture) {
}
box2D.dynamics.B2DestructionListener.prototype.__class__ = box2D.dynamics.B2DestructionListener;
box2D.dynamics.contacts.B2PolyAndCircleContact = function(p) {
	if( p === $_ ) return;
	box2D.dynamics.contacts.B2Contact.call(this);
}
box2D.dynamics.contacts.B2PolyAndCircleContact.__name__ = ["box2D","dynamics","contacts","B2PolyAndCircleContact"];
box2D.dynamics.contacts.B2PolyAndCircleContact.__super__ = box2D.dynamics.contacts.B2Contact;
for(var k in box2D.dynamics.contacts.B2Contact.prototype ) box2D.dynamics.contacts.B2PolyAndCircleContact.prototype[k] = box2D.dynamics.contacts.B2Contact.prototype[k];
box2D.dynamics.contacts.B2PolyAndCircleContact.create = function(allocator) {
	return new box2D.dynamics.contacts.B2PolyAndCircleContact();
}
box2D.dynamics.contacts.B2PolyAndCircleContact.destroy = function(contact,allocator) {
}
box2D.dynamics.contacts.B2PolyAndCircleContact.prototype.reset = function(fixtureA,fixtureB) {
	box2D.dynamics.contacts.B2Contact.prototype.reset.call(this,fixtureA,fixtureB);
	box2D.common.B2Settings.b2Assert(fixtureA.getType() == box2D.collision.shapes.B2Shape.e_polygonShape);
	box2D.common.B2Settings.b2Assert(fixtureB.getType() == box2D.collision.shapes.B2Shape.e_circleShape);
}
box2D.dynamics.contacts.B2PolyAndCircleContact.prototype.evaluate = function() {
	var bA = this.m_fixtureA.m_body;
	var bB = this.m_fixtureB.m_body;
	box2D.collision.B2Collision.collidePolygonAndCircle(this.m_manifold,(function($this) {
		var $r;
		var $t = $this.m_fixtureA.getShape();
		if(Std["is"]($t,box2D.collision.shapes.B2PolygonShape)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),bA.m_xf,(function($this) {
		var $r;
		var $t = $this.m_fixtureB.getShape();
		if(Std["is"]($t,box2D.collision.shapes.B2CircleShape)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)),bB.m_xf);
}
box2D.dynamics.contacts.B2PolyAndCircleContact.prototype.__class__ = box2D.dynamics.contacts.B2PolyAndCircleContact;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
haxe.Resource.content = [];
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
{
	Xml.Element = "element";
	Xml.PCData = "pcdata";
	Xml.CData = "cdata";
	Xml.Comment = "comment";
	Xml.DocType = "doctype";
	Xml.Prolog = "prolog";
	Xml.Document = "document";
}
js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
	try {
		return new ActiveXObject("Msxml2.XMLHTTP");
	} catch( e ) {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} catch( e1 ) {
			throw "Unable to create XMLHttpRequest object.";
		}
	}
}:(function($this) {
	var $r;
	throw "Unable to create XMLHttpRequest object.";
	return $r;
}(this));
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	};
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	};
	d.fromString = function(s) {
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		case 10:
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		default:
			throw "Invalid date format : " + s;
		}
	};
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	};
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
box2D.dynamics.joints.B2Joint.e_unknownJoint = 0;
box2D.dynamics.joints.B2Joint.e_revoluteJoint = 1;
box2D.dynamics.joints.B2Joint.e_prismaticJoint = 2;
box2D.dynamics.joints.B2Joint.e_distanceJoint = 3;
box2D.dynamics.joints.B2Joint.e_pulleyJoint = 4;
box2D.dynamics.joints.B2Joint.e_mouseJoint = 5;
box2D.dynamics.joints.B2Joint.e_gearJoint = 6;
box2D.dynamics.joints.B2Joint.e_lineJoint = 7;
box2D.dynamics.joints.B2Joint.e_weldJoint = 8;
box2D.dynamics.joints.B2Joint.e_frictionJoint = 9;
box2D.dynamics.joints.B2Joint.e_inactiveLimit = 0;
box2D.dynamics.joints.B2Joint.e_atLowerLimit = 1;
box2D.dynamics.joints.B2Joint.e_atUpperLimit = 2;
box2D.dynamics.joints.B2Joint.e_equalLimits = 3;
box2D.dynamics.B2ContactListener.b2_defaultListener = new box2D.dynamics.B2ContactListener();
jeash.errors.Error.DEFAULT_TO_STRING = "Error";
box2D.dynamics.B2ContactManager.s_evalCP = new box2D.collision.B2ContactPoint();
haxe.xml.Check.blanks = new EReg("^[ \r\n\t]*$","");
jeash.display.DisplayObject.mNameID = 0;
jeash.events.Listener.sIDs = 1;
box2D.dynamics.joints.B2RevoluteJoint.tImpulse = new box2D.common.math.B2Vec2();
jeash.text.Font.DEFAULT_FONT_SCALE = 9.0;
jeash.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
jeash.text.Font.DEFAULT_CLASS_NAME = "jeash.text.Font";
jeash.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
nme.installer.Assets.cachedBitmapData = new Hash();
box2D.dynamics.contacts.B2Contact.e_sensorFlag = 1;
box2D.dynamics.contacts.B2Contact.e_continuousFlag = 2;
box2D.dynamics.contacts.B2Contact.e_islandFlag = 4;
box2D.dynamics.contacts.B2Contact.e_toiFlag = 8;
box2D.dynamics.contacts.B2Contact.e_touchingFlag = 16;
box2D.dynamics.contacts.B2Contact.e_enabledFlag = 32;
box2D.dynamics.contacts.B2Contact.e_filterFlag = 64;
box2D.dynamics.contacts.B2Contact.s_input = new box2D.collision.B2TOIInput();
jeash.events.Event.ACTIVATE = "activate";
jeash.events.Event.ADDED = "added";
jeash.events.Event.ADDED_TO_STAGE = "addedToStage";
jeash.events.Event.CANCEL = "cancel";
jeash.events.Event.CHANGE = "change";
jeash.events.Event.CLOSE = "close";
jeash.events.Event.COMPLETE = "complete";
jeash.events.Event.CONNECT = "connect";
jeash.events.Event.DEACTIVATE = "deactivate";
jeash.events.Event.ENTER_FRAME = "enterFrame";
jeash.events.Event.ID3 = "id3";
jeash.events.Event.INIT = "init";
jeash.events.Event.MOUSE_LEAVE = "mouseLeave";
jeash.events.Event.OPEN = "open";
jeash.events.Event.REMOVED = "removed";
jeash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
jeash.events.Event.RENDER = "render";
jeash.events.Event.RESIZE = "resize";
jeash.events.Event.SCROLL = "scroll";
jeash.events.Event.SELECT = "select";
jeash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
jeash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
jeash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
jeash.events.Event.UNLOAD = "unload";
jeash.events.Event.SOUND_COMPLETE = "soundComplete";
jeash.events.KeyboardEvent.KEY_DOWN = "KEY_DOWN";
jeash.events.KeyboardEvent.KEY_UP = "KEY_UP";
box2D.collision.B2Manifold.e_circles = 1;
box2D.collision.B2Manifold.e_faceA = 2;
box2D.collision.B2Manifold.e_faceB = 4;
jeash.events.IOErrorEvent.IO_ERROR = "IO_ERROR";
box2D.dynamics.B2ContactFilter.b2_defaultFilter = new box2D.dynamics.B2ContactFilter();
box2D.collision.B2DynamicTreeNode.currentID = 0;
box2D.dynamics.joints.B2PulleyJoint.b2_minPulleyLength = 2.0;
box2D.collision.shapes.B2Shape.e_unknownShape = -1;
box2D.collision.shapes.B2Shape.e_circleShape = 0;
box2D.collision.shapes.B2Shape.e_polygonShape = 1;
box2D.collision.shapes.B2Shape.e_edgeShape = 2;
box2D.collision.shapes.B2Shape.e_shapeTypeCount = 3;
box2D.collision.shapes.B2Shape.e_hitCollide = 1;
box2D.collision.shapes.B2Shape.e_missCollide = 0;
box2D.collision.shapes.B2Shape.e_startsInsideCollide = -1;
jeash.display.StageQuality.BEST = "best";
jeash.display.StageQuality.HIGH = "high";
jeash.display.StageQuality.MEDIUM = "medium";
jeash.display.StageQuality.LOW = "low";
box2D.collision.B2SeparationFunction.e_points = 1;
box2D.collision.B2SeparationFunction.e_faceA = 2;
box2D.collision.B2SeparationFunction.e_faceB = 4;
box2D.collision.B2TimeOfImpact.b2_toiCalls = 0;
box2D.collision.B2TimeOfImpact.b2_toiIters = 0;
box2D.collision.B2TimeOfImpact.b2_toiMaxIters = 0;
box2D.collision.B2TimeOfImpact.b2_toiRootIters = 0;
box2D.collision.B2TimeOfImpact.b2_toiMaxRootIters = 0;
box2D.collision.B2TimeOfImpact.s_cache = new box2D.collision.B2SimplexCache();
box2D.collision.B2TimeOfImpact.s_distanceInput = new box2D.collision.B2DistanceInput();
box2D.collision.B2TimeOfImpact.s_xfA = new box2D.common.math.B2Transform();
box2D.collision.B2TimeOfImpact.s_xfB = new box2D.common.math.B2Transform();
box2D.collision.B2TimeOfImpact.s_fcn = new box2D.collision.B2SeparationFunction();
box2D.collision.B2TimeOfImpact.s_distanceOutput = new box2D.collision.B2DistanceOutput();
box2D.dynamics.contacts.B2PositionSolverManifold.circlePointA = new box2D.common.math.B2Vec2();
box2D.dynamics.contacts.B2PositionSolverManifold.circlePointB = new box2D.common.math.B2Vec2();
box2D.common.B2Settings.VERSION = "2.1alpha";
box2D.common.B2Settings.USHRT_MAX = 65535;
box2D.common.B2Settings.b2_pi = Math.PI;
box2D.common.B2Settings.b2_maxManifoldPoints = 2;
box2D.common.B2Settings.b2_aabbExtension = 0.1;
box2D.common.B2Settings.b2_aabbMultiplier = 2.0;
box2D.common.B2Settings.b2_polygonRadius = 2.0 * box2D.common.B2Settings.b2_linearSlop;
box2D.common.B2Settings.b2_linearSlop = 0.005;
box2D.common.B2Settings.b2_angularSlop = 2.0 / 180.0 * box2D.common.B2Settings.b2_pi;
box2D.common.B2Settings.b2_toiSlop = 8.0 * box2D.common.B2Settings.b2_linearSlop;
box2D.common.B2Settings.b2_maxTOIContactsPerIsland = 32;
box2D.common.B2Settings.b2_maxTOIJointsPerIsland = 32;
box2D.common.B2Settings.b2_velocityThreshold = 1.0;
box2D.common.B2Settings.b2_maxLinearCorrection = 0.2;
box2D.common.B2Settings.b2_maxAngularCorrection = 8.0 / 180.0 * box2D.common.B2Settings.b2_pi;
box2D.common.B2Settings.b2_maxTranslation = 2.0;
box2D.common.B2Settings.b2_maxTranslationSquared = box2D.common.B2Settings.b2_maxTranslation * box2D.common.B2Settings.b2_maxTranslation;
box2D.common.B2Settings.b2_maxRotation = 0.5 * box2D.common.B2Settings.b2_pi;
box2D.common.B2Settings.b2_maxRotationSquared = box2D.common.B2Settings.b2_maxRotation * box2D.common.B2Settings.b2_maxRotation;
box2D.common.B2Settings.b2_contactBaumgarte = 0.2;
box2D.common.B2Settings.b2_timeToSleep = 0.5;
box2D.common.B2Settings.b2_linearSleepTolerance = 0.01;
box2D.common.B2Settings.b2_angularSleepTolerance = 2.0 / 180.0 * box2D.common.B2Settings.b2_pi;
box2D.dynamics.contacts.B2ContactSolver.staticFix = box2D.common.B2Settings.b2_maxManifoldPoints;
box2D.dynamics.contacts.B2ContactSolver.s_worldManifold = new box2D.collision.B2WorldManifold();
box2D.dynamics.contacts.B2ContactSolver.s_psm = new box2D.dynamics.contacts.B2PositionSolverManifold();
jeash.Lib.DEFAULT_PRIORITY = ["2d","swf"];
jeash.Lib.mShowCursor = true;
jeash.Lib.mShowFPS = false;
jeash.Lib.mFullscreen = false;
jeash.Lib.mCollectEveryFrame = false;
jeash.Lib.mQuitOnEscape = true;
jeash.Lib.mLastMouse = new jeash.geom.Point();
jeash.Lib.VENDOR_HTML_TAG = "data-";
jeash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseup","mouseover","mouseout","mousemove","mousedown","mousewheel","focus","dblclick","click","blur"];
jeash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown"];
jeash.Lib.JEASH_IDENTIFIER = "haxe:jeash";
jeash.Lib.DEFAULT_WIDTH = 500;
jeash.Lib.DEFAULT_HEIGHT = 500;
jeash.text.TextFieldAutoSize.CENTER = "CENTER";
jeash.text.TextFieldAutoSize.LEFT = "LEFT";
jeash.text.TextFieldAutoSize.NONE = "NONE";
jeash.text.TextFieldAutoSize.RIGHT = "RIGHT";
jeash.media.Sound.MEDIA_TYPE_MP3 = "audio/mpeg";
jeash.media.Sound.MEDIA_TYPE_OGG = "audio/ogg; codecs=\"vorbis\"";
jeash.media.Sound.MEDIA_TYPE_WAV = "audio/wav; codecs=\"1\"";
jeash.media.Sound.MEDIA_TYPE_AAC = "audio/mp4; codecs=\"mp4a.40.2\"";
jeash.media.Sound.EXTENSION_MP3 = "mp3";
jeash.media.Sound.EXTENSION_OGG = "ogg";
jeash.media.Sound.EXTENSION_WAV = "wav";
jeash.media.Sound.EXTENSION_AAC = "aac";
box2D.collision.B2Collision.b2_nullFeature = 255;
box2D.collision.B2Collision.s_incidentEdge = box2D.collision.B2Collision.makeClipPointVector();
box2D.collision.B2Collision.s_clipPoints1 = box2D.collision.B2Collision.makeClipPointVector();
box2D.collision.B2Collision.s_clipPoints2 = box2D.collision.B2Collision.makeClipPointVector();
box2D.collision.B2Collision.s_edgeAO = new Array();
box2D.collision.B2Collision.s_edgeBO = new Array();
box2D.collision.B2Collision.s_localTangent = new box2D.common.math.B2Vec2();
box2D.collision.B2Collision.s_localNormal = new box2D.common.math.B2Vec2();
box2D.collision.B2Collision.s_planePoint = new box2D.common.math.B2Vec2();
box2D.collision.B2Collision.s_normal = new box2D.common.math.B2Vec2();
box2D.collision.B2Collision.s_tangent = new box2D.common.math.B2Vec2();
box2D.collision.B2Collision.s_tangent2 = new box2D.common.math.B2Vec2();
box2D.collision.B2Collision.s_v11 = new box2D.common.math.B2Vec2();
box2D.collision.B2Collision.s_v12 = new box2D.common.math.B2Vec2();
box2D.collision.B2Collision.b2CollidePolyTempVec = new box2D.common.math.B2Vec2();
jeash.ui.Keyboard.KEY_0 = 48;
jeash.ui.Keyboard.KEY_1 = 49;
jeash.ui.Keyboard.KEY_2 = 50;
jeash.ui.Keyboard.KEY_3 = 51;
jeash.ui.Keyboard.KEY_4 = 52;
jeash.ui.Keyboard.KEY_5 = 53;
jeash.ui.Keyboard.KEY_6 = 54;
jeash.ui.Keyboard.KEY_7 = 55;
jeash.ui.Keyboard.KEY_8 = 56;
jeash.ui.Keyboard.KEY_9 = 57;
jeash.ui.Keyboard.A = 65;
jeash.ui.Keyboard.B = 66;
jeash.ui.Keyboard.C = 67;
jeash.ui.Keyboard.D = 68;
jeash.ui.Keyboard.E = 69;
jeash.ui.Keyboard.F = 70;
jeash.ui.Keyboard.G = 71;
jeash.ui.Keyboard.H = 72;
jeash.ui.Keyboard.I = 73;
jeash.ui.Keyboard.J = 74;
jeash.ui.Keyboard.K = 75;
jeash.ui.Keyboard.L = 76;
jeash.ui.Keyboard.M = 77;
jeash.ui.Keyboard.N = 78;
jeash.ui.Keyboard.O = 79;
jeash.ui.Keyboard.P = 80;
jeash.ui.Keyboard.Q = 81;
jeash.ui.Keyboard.R = 82;
jeash.ui.Keyboard.S = 83;
jeash.ui.Keyboard.T = 84;
jeash.ui.Keyboard.U = 85;
jeash.ui.Keyboard.V = 86;
jeash.ui.Keyboard.W = 87;
jeash.ui.Keyboard.X = 88;
jeash.ui.Keyboard.Y = 89;
jeash.ui.Keyboard.Z = 90;
jeash.ui.Keyboard.NUMPAD_0 = 96;
jeash.ui.Keyboard.NUMPAD_1 = 97;
jeash.ui.Keyboard.NUMPAD_2 = 98;
jeash.ui.Keyboard.NUMPAD_3 = 99;
jeash.ui.Keyboard.NUMPAD_4 = 100;
jeash.ui.Keyboard.NUMPAD_5 = 101;
jeash.ui.Keyboard.NUMPAD_6 = 102;
jeash.ui.Keyboard.NUMPAD_7 = 103;
jeash.ui.Keyboard.NUMPAD_8 = 104;
jeash.ui.Keyboard.NUMPAD_9 = 105;
jeash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
jeash.ui.Keyboard.NUMPAD_ADD = 107;
jeash.ui.Keyboard.NUMPAD_ENTER = 108;
jeash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
jeash.ui.Keyboard.NUMPAD_DECIMAL = 110;
jeash.ui.Keyboard.NUMPAD_DIVIDE = 111;
jeash.ui.Keyboard.F1 = 112;
jeash.ui.Keyboard.F2 = 113;
jeash.ui.Keyboard.F3 = 114;
jeash.ui.Keyboard.F4 = 115;
jeash.ui.Keyboard.F5 = 116;
jeash.ui.Keyboard.F6 = 117;
jeash.ui.Keyboard.F7 = 118;
jeash.ui.Keyboard.F8 = 119;
jeash.ui.Keyboard.F9 = 120;
jeash.ui.Keyboard.F10 = 121;
jeash.ui.Keyboard.F11 = 122;
jeash.ui.Keyboard.F12 = 123;
jeash.ui.Keyboard.F13 = 124;
jeash.ui.Keyboard.F14 = 125;
jeash.ui.Keyboard.F15 = 126;
jeash.ui.Keyboard.BACKSPACE = 8;
jeash.ui.Keyboard.TAB = 9;
jeash.ui.Keyboard.ENTER = 13;
jeash.ui.Keyboard.SHIFT = 16;
jeash.ui.Keyboard.CONTROL = 17;
jeash.ui.Keyboard.CAPS_LOCK = 18;
jeash.ui.Keyboard.ESCAPE = 27;
jeash.ui.Keyboard.SPACE = 32;
jeash.ui.Keyboard.PAGE_UP = 33;
jeash.ui.Keyboard.PAGE_DOWN = 34;
jeash.ui.Keyboard.END = 35;
jeash.ui.Keyboard.HOME = 36;
jeash.ui.Keyboard.LEFT = 37;
jeash.ui.Keyboard.RIGHT = 39;
jeash.ui.Keyboard.UP = 38;
jeash.ui.Keyboard.DOWN = 40;
jeash.ui.Keyboard.INSERT = 45;
jeash.ui.Keyboard.DELETE = 46;
jeash.ui.Keyboard.NUMLOCK = 144;
jeash.ui.Keyboard.BREAK = 19;
jeash.ui.Keyboard.DOM_VK_CANCEL = 3;
jeash.ui.Keyboard.DOM_VK_HELP = 6;
jeash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
jeash.ui.Keyboard.DOM_VK_TAB = 9;
jeash.ui.Keyboard.DOM_VK_CLEAR = 12;
jeash.ui.Keyboard.DOM_VK_RETURN = 13;
jeash.ui.Keyboard.DOM_VK_ENTER = 14;
jeash.ui.Keyboard.DOM_VK_SHIFT = 16;
jeash.ui.Keyboard.DOM_VK_CONTROL = 17;
jeash.ui.Keyboard.DOM_VK_ALT = 18;
jeash.ui.Keyboard.DOM_VK_PAUSE = 19;
jeash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
jeash.ui.Keyboard.DOM_VK_ESCAPE = 27;
jeash.ui.Keyboard.DOM_VK_SPACE = 32;
jeash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
jeash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
jeash.ui.Keyboard.DOM_VK_END = 35;
jeash.ui.Keyboard.DOM_VK_HOME = 36;
jeash.ui.Keyboard.DOM_VK_LEFT = 37;
jeash.ui.Keyboard.DOM_VK_UP = 38;
jeash.ui.Keyboard.DOM_VK_RIGHT = 39;
jeash.ui.Keyboard.DOM_VK_DOWN = 40;
jeash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
jeash.ui.Keyboard.DOM_VK_INSERT = 45;
jeash.ui.Keyboard.DOM_VK_DELETE = 46;
jeash.ui.Keyboard.DOM_VK_0 = 48;
jeash.ui.Keyboard.DOM_VK_1 = 49;
jeash.ui.Keyboard.DOM_VK_2 = 50;
jeash.ui.Keyboard.DOM_VK_3 = 51;
jeash.ui.Keyboard.DOM_VK_4 = 52;
jeash.ui.Keyboard.DOM_VK_5 = 53;
jeash.ui.Keyboard.DOM_VK_6 = 54;
jeash.ui.Keyboard.DOM_VK_7 = 55;
jeash.ui.Keyboard.DOM_VK_8 = 56;
jeash.ui.Keyboard.DOM_VK_9 = 57;
jeash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
jeash.ui.Keyboard.DOM_VK_EQUALS = 61;
jeash.ui.Keyboard.DOM_VK_A = 65;
jeash.ui.Keyboard.DOM_VK_B = 66;
jeash.ui.Keyboard.DOM_VK_C = 67;
jeash.ui.Keyboard.DOM_VK_D = 68;
jeash.ui.Keyboard.DOM_VK_E = 69;
jeash.ui.Keyboard.DOM_VK_F = 70;
jeash.ui.Keyboard.DOM_VK_G = 71;
jeash.ui.Keyboard.DOM_VK_H = 72;
jeash.ui.Keyboard.DOM_VK_I = 73;
jeash.ui.Keyboard.DOM_VK_J = 74;
jeash.ui.Keyboard.DOM_VK_K = 75;
jeash.ui.Keyboard.DOM_VK_L = 76;
jeash.ui.Keyboard.DOM_VK_M = 77;
jeash.ui.Keyboard.DOM_VK_N = 78;
jeash.ui.Keyboard.DOM_VK_O = 79;
jeash.ui.Keyboard.DOM_VK_P = 80;
jeash.ui.Keyboard.DOM_VK_Q = 81;
jeash.ui.Keyboard.DOM_VK_R = 82;
jeash.ui.Keyboard.DOM_VK_S = 83;
jeash.ui.Keyboard.DOM_VK_T = 84;
jeash.ui.Keyboard.DOM_VK_U = 85;
jeash.ui.Keyboard.DOM_VK_V = 86;
jeash.ui.Keyboard.DOM_VK_W = 87;
jeash.ui.Keyboard.DOM_VK_X = 88;
jeash.ui.Keyboard.DOM_VK_Y = 89;
jeash.ui.Keyboard.DOM_VK_Z = 90;
jeash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
jeash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
jeash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
jeash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
jeash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
jeash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
jeash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
jeash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
jeash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
jeash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
jeash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
jeash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
jeash.ui.Keyboard.DOM_VK_ADD = 107;
jeash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
jeash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
jeash.ui.Keyboard.DOM_VK_DECIMAL = 110;
jeash.ui.Keyboard.DOM_VK_DIVIDE = 111;
jeash.ui.Keyboard.DOM_VK_F1 = 112;
jeash.ui.Keyboard.DOM_VK_F2 = 113;
jeash.ui.Keyboard.DOM_VK_F3 = 114;
jeash.ui.Keyboard.DOM_VK_F4 = 115;
jeash.ui.Keyboard.DOM_VK_F5 = 116;
jeash.ui.Keyboard.DOM_VK_F6 = 117;
jeash.ui.Keyboard.DOM_VK_F7 = 118;
jeash.ui.Keyboard.DOM_VK_F8 = 119;
jeash.ui.Keyboard.DOM_VK_F9 = 120;
jeash.ui.Keyboard.DOM_VK_F10 = 121;
jeash.ui.Keyboard.DOM_VK_F11 = 122;
jeash.ui.Keyboard.DOM_VK_F12 = 123;
jeash.ui.Keyboard.DOM_VK_F13 = 124;
jeash.ui.Keyboard.DOM_VK_F14 = 125;
jeash.ui.Keyboard.DOM_VK_F15 = 126;
jeash.ui.Keyboard.DOM_VK_F16 = 127;
jeash.ui.Keyboard.DOM_VK_F17 = 128;
jeash.ui.Keyboard.DOM_VK_F18 = 129;
jeash.ui.Keyboard.DOM_VK_F19 = 130;
jeash.ui.Keyboard.DOM_VK_F20 = 131;
jeash.ui.Keyboard.DOM_VK_F21 = 132;
jeash.ui.Keyboard.DOM_VK_F22 = 133;
jeash.ui.Keyboard.DOM_VK_F23 = 134;
jeash.ui.Keyboard.DOM_VK_F24 = 135;
jeash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
jeash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
jeash.ui.Keyboard.DOM_VK_COMMA = 188;
jeash.ui.Keyboard.DOM_VK_PERIOD = 190;
jeash.ui.Keyboard.DOM_VK_SLASH = 191;
jeash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
jeash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
jeash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
jeash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
jeash.ui.Keyboard.DOM_VK_QUOTE = 222;
jeash.ui.Keyboard.DOM_VK_META = 224;
jeash.ui.Keyboard.DOM_VK_KANA = 21;
jeash.ui.Keyboard.DOM_VK_HANGUL = 21;
jeash.ui.Keyboard.DOM_VK_JUNJA = 23;
jeash.ui.Keyboard.DOM_VK_FINAL = 24;
jeash.ui.Keyboard.DOM_VK_HANJA = 25;
jeash.ui.Keyboard.DOM_VK_KANJI = 25;
jeash.ui.Keyboard.DOM_VK_CONVERT = 28;
jeash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
jeash.ui.Keyboard.DOM_VK_ACEPT = 30;
jeash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
jeash.ui.Keyboard.DOM_VK_SELECT = 41;
jeash.ui.Keyboard.DOM_VK_PRINT = 42;
jeash.ui.Keyboard.DOM_VK_EXECUTE = 43;
jeash.ui.Keyboard.DOM_VK_SLEEP = 95;
box2D.dynamics.B2Body.s_xf1 = new box2D.common.math.B2Transform();
box2D.dynamics.B2Body.e_islandFlag = 1;
box2D.dynamics.B2Body.e_awakeFlag = 2;
box2D.dynamics.B2Body.e_allowSleepFlag = 4;
box2D.dynamics.B2Body.e_bulletFlag = 8;
box2D.dynamics.B2Body.e_fixedRotationFlag = 16;
box2D.dynamics.B2Body.e_activeFlag = 32;
box2D.dynamics.B2Body.b2_staticBody = 0;
box2D.dynamics.B2Body.b2_kinematicBody = 1;
box2D.dynamics.B2Body.b2_dynamicBody = 2;
jeash.events.FocusEvent.FOCUS_IN = "FOCUS_IN";
jeash.events.FocusEvent.FOCUS_OUT = "FOCUS_OUT";
jeash.events.FocusEvent.KEY_FOCUS_CHANGE = "KEY_FOCUS_CHANGE";
jeash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "MOUSE_FOCUS_CHANGE";
Xml.enode = new EReg("^<([a-zA-Z0-9:_-]+)","");
Xml.ecdata = new EReg("^<!\\[CDATA\\[","i");
Xml.edoctype = new EReg("^<!DOCTYPE ","i");
Xml.eend = new EReg("^</([a-zA-Z0-9:_-]+)>","");
Xml.epcdata = new EReg("^[^<]+","");
Xml.ecomment = new EReg("^<!--","");
Xml.eprolog = new EReg("^<\\?[^\\?]+\\?>","");
Xml.eattribute = new EReg("^\\s*([a-zA-Z0-9:_-]+)\\s*=\\s*([\"'])([^\\2]*?)\\2","");
Xml.eclose = new EReg("^[ \r\n\t]*(>|(/>))","");
Xml.ecdata_end = new EReg("\\]\\]>","");
Xml.edoctype_elt = new EReg("[\\[|\\]>]","");
Xml.ecomment_end = new EReg("-->","");
box2D.dynamics.B2World.s_timestep2 = new box2D.dynamics.B2TimeStep();
box2D.dynamics.B2World.s_xf = new box2D.common.math.B2Transform();
box2D.dynamics.B2World.s_backupA = new box2D.common.math.B2Sweep();
box2D.dynamics.B2World.s_backupB = new box2D.common.math.B2Sweep();
box2D.dynamics.B2World.s_timestep = new box2D.dynamics.B2TimeStep();
box2D.dynamics.B2World.s_queue = new Array();
box2D.dynamics.B2World.s_jointColor = new box2D.common.B2Color(0.5,0.8,0.8);
box2D.dynamics.B2World.e_newFixture = 1;
box2D.dynamics.B2World.e_locked = 2;
box2D.common.math.B2Math.b2Vec2_zero = new box2D.common.math.B2Vec2(0.0,0.0);
box2D.common.math.B2Math.b2Mat22_identity = box2D.common.math.B2Mat22.fromVV(new box2D.common.math.B2Vec2(1.0,0.0),new box2D.common.math.B2Vec2(0.0,1.0));
box2D.common.math.B2Math.b2Transform_identity = new box2D.common.math.B2Transform(box2D.common.math.B2Math.b2Vec2_zero,box2D.common.math.B2Math.b2Mat22_identity);
box2D.common.math.B2Math.MIN_VALUE = Number.MIN_VALUE;
box2D.common.math.B2Math.MAX_VALUE = Number.MAX_VALUE;
box2D.collision.B2Distance.s_simplex = new box2D.collision.B2Simplex();
box2D.collision.B2Distance.s_saveA = new Array();
box2D.collision.B2Distance.s_saveB = new Array();
jeash.events.MouseEvent.CLICK = "click";
jeash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
jeash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
jeash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
jeash.events.MouseEvent.MOUSE_OUT = "mouseOut";
jeash.events.MouseEvent.MOUSE_OVER = "mouseOver";
jeash.events.MouseEvent.MOUSE_UP = "mouseUp";
jeash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
jeash.events.MouseEvent.ROLL_OUT = "rollOut";
jeash.events.MouseEvent.ROLL_OVER = "rollOver";
jeash.events.EventPhase.CAPTURING_PHASE = 0;
jeash.events.EventPhase.AT_TARGET = 1;
jeash.events.EventPhase.BUBBLING_PHASE = 2;
jeash.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
jeash.text.TextField.sSelectionOwner = null;
jeash.text.FontInstance.mSolidFonts = new Hash();
box2D.dynamics.B2Island.s_impulse = new box2D.dynamics.B2ContactImpulse();
jeash.display.GraphicsPathCommand.LINE_TO = 2;
jeash.display.GraphicsPathCommand.MOVE_TO = 1;
jeash.display.GraphicsPathCommand.CURVE_TO = 3;
jeash.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
jeash.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
jeash.display.GraphicsPathCommand.NO_OP = 0;
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
box2D.dynamics.B2DebugDraw.e_shapeBit = 1;
box2D.dynamics.B2DebugDraw.e_jointBit = 2;
box2D.dynamics.B2DebugDraw.e_aabbBit = 4;
box2D.dynamics.B2DebugDraw.e_pairBit = 8;
box2D.dynamics.B2DebugDraw.e_centerOfMassBit = 16;
box2D.dynamics.B2DebugDraw.e_controllerBit = 32;
box2D.collision.shapes.B2PolygonShape.s_mat = new box2D.common.math.B2Mat22();
jeash.display.BitmapDataChannel.ALPHA = 8;
jeash.display.BitmapDataChannel.BLUE = 4;
jeash.display.BitmapDataChannel.GREEN = 2;
jeash.display.BitmapDataChannel.RED = 1;
js.Lib.onerror = null;
jeash.display.Stage.jeashMouseChanges = [jeash.events.MouseEvent.MOUSE_OUT,jeash.events.MouseEvent.MOUSE_OVER,jeash.events.MouseEvent.ROLL_OUT,jeash.events.MouseEvent.ROLL_OVER];
jeash.display.Stage.DEFAULT_FRAMERATE = 60.0;
jeash.display.Stage.DEFAULT_PROJ_MATRIX = [1.,0,0,0,0,1,0,0,0,0,-1,-1,0,0,0,0];
jeash.text.TextFieldType.DYNAMIC = "DYNAMIC";
jeash.text.TextFieldType.INPUT = "INPUT";
haxe.Timer.arr = new Array();
jeash.display.Graphics.defaultFontName = "ARIAL.TTF";
jeash.display.Graphics.defaultFontSize = 12;
jeash.display.Graphics.immediateMatrix = null;
jeash.display.Graphics.immediateMask = null;
jeash.display.Graphics.TOP = 0;
jeash.display.Graphics.CENTER = 1;
jeash.display.Graphics.BOTTOM = 2;
jeash.display.Graphics.LEFT = 0;
jeash.display.Graphics.RIGHT = 2;
jeash.display.Graphics.RADIAL = 1;
jeash.display.Graphics.SPREAD_REPEAT = 2;
jeash.display.Graphics.SPREAD_REFLECT = 4;
jeash.display.Graphics.EDGE_MASK = 240;
jeash.display.Graphics.EDGE_CLAMP = 0;
jeash.display.Graphics.EDGE_REPEAT = 16;
jeash.display.Graphics.EDGE_UNCHECKED = 32;
jeash.display.Graphics.EDGE_REPEAT_POW2 = 48;
jeash.display.Graphics.END_NONE = 0;
jeash.display.Graphics.END_ROUND = 256;
jeash.display.Graphics.END_SQUARE = 512;
jeash.display.Graphics.END_MASK = 768;
jeash.display.Graphics.END_SHIFT = 8;
jeash.display.Graphics.CORNER_ROUND = 0;
jeash.display.Graphics.CORNER_MITER = 4096;
jeash.display.Graphics.CORNER_BEVEL = 8192;
jeash.display.Graphics.CORNER_MASK = 12288;
jeash.display.Graphics.CORNER_SHIFT = 12;
jeash.display.Graphics.PIXEL_HINTING = 16384;
jeash.display.Graphics.BMP_REPEAT = 16;
jeash.display.Graphics.BMP_SMOOTH = 65536;
jeash.display.Graphics.SCALE_NONE = 0;
jeash.display.Graphics.SCALE_VERTICAL = 1;
jeash.display.Graphics.SCALE_HORIZONTAL = 2;
jeash.display.Graphics.SCALE_NORMAL = 3;
jeash.display.Graphics.MOVE = 0;
jeash.display.Graphics.LINE = 1;
jeash.display.Graphics.CURVE = 2;
jeash.display.Graphics.BLEND_ADD = 0;
jeash.display.Graphics.BLEND_ALPHA = 1;
jeash.display.Graphics.BLEND_DARKEN = 2;
jeash.display.Graphics.BLEND_DIFFERENCE = 3;
jeash.display.Graphics.BLEND_ERASE = 4;
jeash.display.Graphics.BLEND_HARDLIGHT = 5;
jeash.display.Graphics.BLEND_INVERT = 6;
jeash.display.Graphics.BLEND_LAYER = 7;
jeash.display.Graphics.BLEND_LIGHTEN = 8;
jeash.display.Graphics.BLEND_MULTIPLY = 9;
jeash.display.Graphics.BLEND_NORMAL = 10;
jeash.display.Graphics.BLEND_OVERLAY = 11;
jeash.display.Graphics.BLEND_SCREEN = 12;
jeash.display.Graphics.BLEND_SUBTRACT = 13;
jeash.display.Graphics.BLEND_SHADER = 14;
jeash.display.Graphics.TILE_SCALE = 1;
jeash.display.Graphics.TILE_ROTATION = 2;
jeash.display.Graphics.TILE_RGB = 4;
jeash.display.Graphics.TILE_ALPHA = 8;
jeash.display.Graphics.TILE_SMOOTH = 4096;
jeash.display.Graphics.JEASH_SIZING_WARM_UP = 10;
jeash.display.Graphics.JEASH_MAX_DIMENSION = 5000;
ApplicationMain.main()