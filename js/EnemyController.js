class EnemyController {
  constructor(spriteName) {
    this.sprite = Nakama.enemyGroup.create(0, 50, "assets", spriteName);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor.setTo(0.5, 0.5);

    var tween = Nakama.game.add.tween(Nakama.enemyGroup).to( { x: 600 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    tween.onLoop.add(this.descend(), Nakama.enemyGroup);
  }
descend() {
    Nakama.enemyGroup.y += 10;
}

}
