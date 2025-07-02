const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.Flash,
		C3.Plugins.TiledBg,
		C3.Behaviors.jumpthru,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Behaviors.Sin,
		C3.Behaviors.Rotate,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Platform.Acts.SetIgnoreInput,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Behaviors.Platform.Acts.SetVectorY
	];
};
self.C3_JsPropNameTable = [
	{Платформер: 0},
	{Стеження: 0},
	{Блимання: 0},
	{doodle: 0},
	{ПлиточнийФон: 0},
	{СтрибковаПлатформа: 0},
	{Platform1: 0},
	{ТвердеТіло: 0},
	{Спрайт: 0},
	{Текст: 0},
	{Синусоїда: 0},
	{Спрайт2: 0},
	{бомба: 0},
	{Обертання: 0},
	{Спрайт3: 0},
	{win: 0},
	{пружинка: 0}
];

self.InstanceType = {
	doodle: class extends self.ISpriteInstance {},
	ПлиточнийФон: class extends self.ITiledBackgroundInstance {},
	Platform1: class extends self.ISpriteInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	бомба: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	win: class extends self.ISpriteInstance {},
	пружинка: class extends self.ISpriteInstance {}
}