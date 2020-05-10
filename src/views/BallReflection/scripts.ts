import * as PIXI from "pixi.js";

type Pos = { x: number; y: number };
type Line = { a: Pos; b: Pos };

function isIntersection(l1: Line, l2: Line) {
  const cross1 = (l1.b.x - l1.a.x) * (l2.a.y - l1.a.y) - (l1.b.y - l1.a.y) * (l2.a.x - l1.a.x);
  const cross2 = (l1.b.x - l1.a.x) * (l2.b.y - l1.a.y) - (l1.b.y - l1.a.y) * (l2.b.x - l1.a.x);

  const cross3 = (l2.b.x - l2.a.x) * (l1.a.y - l2.a.y) - (l2.b.y - l2.a.y) * (l1.a.x - l2.a.x);
  const cross4 = (l2.b.x - l2.a.x) * (l1.b.y - l2.a.y) - (l2.b.y - l2.a.y) * (l1.b.x - l2.a.x);

  return cross1 * cross2 < 0 && cross3 * cross4 < 0;
}

export function main(container: HTMLElement) {
  console.log(document.body.clientHeight, document.body.clientWidth);
  const app = new PIXI.Application({
    transparent: true,
    antialias: true,
    width: container.clientWidth,
    height: container.clientHeight,
  });

  container.appendChild(app.view);
  window.addEventListener("resize", () => {
    app.renderer.resize(container.clientWidth, container.clientHeight);
  });

  const graphics = new PIXI.Graphics();
  app.stage.addChild(graphics);

  const circlePos: Pos = { x: app.screen.width / 2, y: app.screen.height / 2 };
  const barPos: Pos = { x: app.screen.width / 2, y: (app.screen.height * 2) / 3 };
  const direction: Pos = { x: 1, y: 1 };
  const angle = 20;
  const radius = 10;
  let velocity = 20;

  app.ticker.add(() => {
    velocity += 0.0001;
    graphics.clear();

    // mouseに追従する棒
    const mouse = app.renderer.plugins.interaction.mouse.global;
    const mdx = mouse.x - barPos.x;
    barPos.x += mdx > 0 ? Math.min(mdx, velocity / 2) : Math.max(mdx, -velocity / 2);
    barPos.y = (app.screen.height * 9) / 10;

    graphics.beginFill(PIXI.utils.rgb2hex([0, 0, 0]));
    graphics.drawRect(barPos.x - 100, barPos.y - 5, 200, 10);
    graphics.endFill();

    const dx = velocity * direction.x * Math.cos((Math.PI * angle) / 180);
    const dy = velocity * direction.y * Math.sin((Math.PI * angle) / 180);

    circlePos.x += dx;
    circlePos.y += dy;
    // 画面外判定
    if (circlePos.x <= radius) direction.x = 1;
    if (app.screen.width - radius <= circlePos.x) direction.x = -1;
    if (circlePos.y <= radius) direction.y = 1;
    if (app.screen.height - radius <= circlePos.y) direction.y = -1;

    // 棒との衝突判定
    // 外積を使って計算している
    const line1: Line = { a: circlePos, b: { x: circlePos.x + dx, y: circlePos.y + dy } };
    const line2: Line = { a: { x: barPos.x - 100, y: barPos.y - 5 }, b: { x: barPos.x + 100, y: barPos.y - 5 } };
    const line3: Line = { a: { x: barPos.x - 100, y: barPos.y + 5 }, b: { x: barPos.x + 100, y: barPos.y + 5 } };
    const line4: Line = { a: { x: barPos.x - 100, y: barPos.y - 5 }, b: { x: barPos.x - 100, y: barPos.y + 5 } };
    const line5: Line = { a: { x: barPos.x + 100, y: barPos.y - 5 }, b: { x: barPos.x + 100, y: barPos.y + 5 } };
    if (isIntersection(line1, line2)) direction.y = -1;
    else if (isIntersection(line1, line3)) direction.y = 1;
    else if (isIntersection(line1, line4)) direction.x = -1;
    else if (isIntersection(line1, line5)) direction.y = 1;

    graphics.beginFill(PIXI.utils.rgb2hex([0, 0, 0]));
    graphics.drawCircle(circlePos.x, circlePos.y, radius);
    graphics.endFill();
  });
}
