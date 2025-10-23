const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.solid,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion
	];
};
self.C3_JsPropNameTable = [
	{Projétil: 0},
	{Sprite: 0},
	{Sólido: 0},
	{chao: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {}
}