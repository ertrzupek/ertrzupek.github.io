let autoclickers = Array();
//#region array of autoclicker blocks (material order)
let oneDirt = document.getElementById("oneDirt");
oneDirt.style.display = "none";
oneDirt.showing = false;
oneDirt.ranking = 1;
oneDirt.tier = 1;
oneDirt.materialRanking = 0;
oneDirt.bought = false;
autoclickers.push(oneDirt);
document.getElementById("oneDirtPrice").innerText = document.getElementById("oneDirtPrice").innerText.replace("#", oneDirtPrice);

let twoDirt = document.getElementById("twoDirt");
twoDirt.style.display = "none";
twoDirt.showing = false;
twoDirt.ranking = 2;
twoDirt.tier = 2;
twoDirt.materialRanking = 0;
twoDirt.bought = false;
autoclickers.push(twoDirt);
document.getElementById("twoDirtPrice").innerText = document.getElementById("twoDirtPrice").innerText.replace("#", twoDirtPrice);

let threeDirt = document.getElementById("threeDirt");
threeDirt.style.display = "none";
threeDirt.showing = false;
threeDirt.ranking = 5;
threeDirt.tier = 3;
threeDirt.materialRanking = 0;
threeDirt.bought = false;
autoclickers.push(threeDirt);
document.getElementById("threeDirtPrice").innerText = document.getElementById("threeDirtPrice").innerText.replace("#", threeDirtPrice);

let fourDirt = document.getElementById("fourDirt");
fourDirt.style.display = "none";
fourDirt.showing = false;
fourDirt.ranking = 7;
fourDirt.tier = 4;
fourDirt.materialRanking = 0;
fourDirt.bought = false;
autoclickers.push(fourDirt);
document.getElementById("fourDirtPrice").innerText = document.getElementById("fourDirtPrice").innerText.replace("#", fourDirtPrice);

let fiveDirt = document.getElementById("fiveDirt");
fiveDirt.style.display = "none";
fiveDirt.showing = false;
fiveDirt.ranking = 9;
fiveDirt.tier = 5;
fiveDirt.materialRanking = 0;
fiveDirt.bought = false;
autoclickers.push(fiveDirt);
document.getElementById("fiveDirtPrice").innerText = document.getElementById("fiveDirtPrice").innerText.replace("#", fiveDirtPrice);

let sixDirt = document.getElementById("sixDirt");
sixDirt.style.display = "none";
sixDirt.showing = false;
sixDirt.ranking = 12;
sixDirt.tier = 6;
sixDirt.materialRanking = 0;
sixDirt.bought = false;
autoclickers.push(sixDirt);
document.getElementById("sixDirtPrice").innerText = document.getElementById("sixDirtPrice").innerText.replace("#", sixDirtPrice);


let oneWood = document.getElementById("oneWood");
oneWood.style.display = "none";
oneWood.showing = false;
oneWood.ranking = 1;
oneWood.tier = 1;
oneWood.materialRanking = 1;
oneWood.bought = false;
autoclickers.push(oneWood);
document.getElementById("oneWoodPrice").innerText = document.getElementById("oneWoodPrice").innerText.replace("#", oneWoodPrice);

let twoWood = document.getElementById("twoWood");
twoWood.style.display = "none";
twoWood.showing = false;
twoWood.ranking = 2;
twoWood.tier = 2;
twoWood.materialRanking = 1;
twoWood.bought = false;
autoclickers.push(twoWood);
document.getElementById("twoWoodPrice").innerText = document.getElementById("twoWoodPrice").innerText.replace("#", twoWoodPrice);

let threeWood = document.getElementById("threeWood");
threeWood.style.display = "none";
threeWood.showing = false;
threeWood.ranking = 5;
threeWood.tier = 3;
threeWood.materialRanking = 1;
threeWood.bought = false;
autoclickers.push(threeWood);
document.getElementById("threeWoodPrice").innerText = document.getElementById("threeWoodPrice").innerText.replace("#", threeWoodPrice);

let fourWood = document.getElementById("fourWood");
fourWood.style.display = "none";
fourWood.showing = false;
fourWood.ranking = 7;
fourWood.tier = 4;
fourWood.materialRanking = 1;
fourWood.bought = false;
autoclickers.push(fourWood);
document.getElementById("fourWoodPrice").innerText = document.getElementById("fourWoodPrice").innerText.replace("#", fourWoodPrice);

let fiveWood = document.getElementById("fiveWood");
fiveWood.style.display = "none";
fiveWood.showing = false;
fiveWood.ranking = 9;
fiveWood.tier = 5;
fiveWood.materialRanking = 1;
fiveWood.bought = false;
autoclickers.push(fiveWood);
document.getElementById("fiveWoodPrice").innerText = document.getElementById("fiveWoodPrice").innerText.replace("#", fiveWoodPrice);

let sixWood = document.getElementById("sixWood");
sixWood.style.display = "none";
sixWood.showing = false;
sixWood.ranking = 12;
sixWood.tier = 6;
sixWood.materialRanking = 1;
sixWood.bought = false;
autoclickers.push(sixWood);
document.getElementById("sixWoodPrice").innerText = document.getElementById("sixWoodPrice").innerText.replace("#", sixWoodPrice);


let oneStone = document.getElementById("oneStone");
oneStone.style.display = "none";
oneStone.showing = false;
oneStone.ranking = 1;
oneStone.tier = 1;
oneStone.materialRanking = 2;
oneStone.bought = false;
autoclickers.push(oneStone);
document.getElementById("oneStonePrice").innerText = document.getElementById("oneStonePrice").innerText.replace("#", oneStonePrice);

let twoStone = document.getElementById("twoStone");
twoStone.style.display = "none";
twoStone.showing = false;
twoStone.ranking = 2;
twoStone.tier = 2;
twoStone.materialRanking = 2;
twoStone.bought = false;
autoclickers.push(twoStone);
document.getElementById("twoStonePrice").innerText = document.getElementById("twoStonePrice").innerText.replace("#", twoStonePrice);

let threeStone = document.getElementById("threeStone");
threeStone.style.display = "none";
threeStone.showing = false;
threeStone.ranking = 5;
threeStone.tier = 3;
threeStone.materialRanking = 2;
threeStone.bought = false;
autoclickers.push(threeStone);
document.getElementById("threeStonePrice").innerText = document.getElementById("threeStonePrice").innerText.replace("#", threeStonePrice);

let fourStone = document.getElementById("fourStone");
fourStone.style.display = "none";
fourStone.showing = false;
fourStone.ranking = 7;
fourStone.tier = 4;
fourStone.materialRanking = 2;
fourStone.bought = false;
autoclickers.push(fourStone);
document.getElementById("fourStonePrice").innerText = document.getElementById("fourStonePrice").innerText.replace("#", fourStonePrice);

let fiveStone = document.getElementById("fiveStone");
fiveStone.style.display = "none";
fiveStone.showing = false;
fiveStone.ranking = 9;
fiveStone.tier = 5;
fiveStone.materialRanking = 2;
fiveStone.bought = false;
autoclickers.push(fiveStone);
document.getElementById("fiveStonePrice").innerText = document.getElementById("fiveStonePrice").innerText.replace("#", fiveStonePrice);

let sixStone = document.getElementById("sixStone");
sixStone.style.display = "none";
sixStone.showing = false;
sixStone.ranking = 12;
sixStone.tier = 6;
sixStone.materialRanking = 2;
sixStone.bought = false;
autoclickers.push(sixStone);
document.getElementById("sixStonePrice").innerText = document.getElementById("sixStonePrice").innerText.replace("#", sixStonePrice);


let onePStone = document.getElementById("onePStone");
onePStone.style.display = "none";
onePStone.showing = false;
onePStone.ranking = 1;
onePStone.tier = 1;
onePStone.materialRanking = 3;
onePStone.bought = false;
autoclickers.push(onePStone);
document.getElementById("onePStonePrice").innerText = document.getElementById("onePStonePrice").innerText.replace("#", onePStonePrice);

let twoPStone = document.getElementById("twoPStone");
twoPStone.style.display = "none";
twoPStone.showing = false;
twoPStone.ranking = 2;
twoPStone.tier = 2;
twoPStone.materialRanking = 3;
twoPStone.bought = false;
autoclickers.push(twoPStone);
document.getElementById("twoPStonePrice").innerText = document.getElementById("twoPStonePrice").innerText.replace("#", twoPStonePrice);

let threePStone = document.getElementById("threePStone");
threePStone.style.display = "none";
threePStone.showing = false;
threePStone.ranking = 5;
threePStone.tier = 3;
threePStone.materialRanking = 3;
threePStone.bought = false;
autoclickers.push(threePStone);
document.getElementById("threePStonePrice").innerText = document.getElementById("threePStonePrice").innerText.replace("#", threePStonePrice);

let fourPStone = document.getElementById("fourPStone");
fourPStone.style.display = "none";
fourPStone.showing = false;
fourPStone.ranking = 7;
fourPStone.tier = 4;
fourPStone.materialRanking = 3;
fourPStone.bought = false;
autoclickers.push(fourPStone);
document.getElementById("fourPStonePrice").innerText = document.getElementById("fourPStonePrice").innerText.replace("#", fourPStonePrice);

let fivePStone = document.getElementById("fivePStone");
fivePStone.style.display = "none";
fivePStone.showing = false;
fivePStone.ranking = 9;
fivePStone.tier = 5;
fivePStone.materialRanking = 3;
fivePStone.bought = false;
autoclickers.push(fivePStone);
document.getElementById("fivePStonePrice").innerText = document.getElementById("fivePStonePrice").innerText.replace("#", fivePStonePrice);

let sixPStone = document.getElementById("sixPStone");
sixPStone.style.display = "none";
sixPStone.showing = false;
sixPStone.ranking = 12;
sixPStone.tier = 6;
sixPStone.materialRanking = 3;
sixPStone.bought = false;
autoclickers.push(sixPStone);
document.getElementById("sixPStonePrice").innerText = document.getElementById("sixPStonePrice").innerText.replace("#", sixPStonePrice);


let onePlant = document.getElementById("onePlant");
onePlant.style.display = "none";
onePlant.showing = false;
onePlant.ranking = 1;
onePlant.tier = 1;
onePlant.materialRanking = 4;
onePlant.bought = false;
autoclickers.push(onePlant);
document.getElementById("onePlantPrice").innerText = document.getElementById("onePlantPrice").innerText.replace("#", onePlantPrice);

let twoPlant = document.getElementById("twoPlant");
twoPlant.style.display = "none";
twoPlant.showing = false;
twoPlant.ranking = 2;
twoPlant.tier = 2;
twoPlant.materialRanking = 4;
twoPlant.bought = false;
autoclickers.push(twoPlant);
document.getElementById("twoPlantPrice").innerText = document.getElementById("twoPlantPrice").innerText.replace("#", twoPlantPrice);

let threePlant = document.getElementById("threePlant");
threePlant.style.display = "none";
threePlant.showing = false;
threePlant.ranking = 5;
threePlant.tier = 3;
threePlant.materialRanking = 4;
threePlant.bought = false;
autoclickers.push(threePlant);
document.getElementById("threePlantPrice").innerText = document.getElementById("threePlantPrice").innerText.replace("#", threePlantPrice);

let fourPlant = document.getElementById("fourPlant");
fourPlant.style.display = "none";
fourPlant.showing = false;
fourPlant.ranking = 7;
fourPlant.tier = 4;
fourPlant.materialRanking = 4;
fourPlant.bought = false;
autoclickers.push(fourPlant);
document.getElementById("fourPlantPrice").innerText = document.getElementById("fourPlantPrice").innerText.replace("#", fourPlantPrice);

let fivePlant = document.getElementById("fivePlant");
fivePlant.style.display = "none";
fivePlant.showing = false;
fivePlant.ranking = 9;
fivePlant.tier = 5;
fivePlant.materialRanking = 4;
fivePlant.bought = false;
autoclickers.push(fivePlant);
document.getElementById("fivePlantPrice").innerText = document.getElementById("fivePlantPrice").innerText.replace("#", fivePlantPrice);

let sixPlant = document.getElementById("sixPlant");
sixPlant.style.display = "none";
sixPlant.showing = false;
sixPlant.ranking = 12;
sixPlant.tier = 6;
sixPlant.materialRanking = 4;
sixPlant.bought = false;
autoclickers.push(sixPlant);
document.getElementById("sixPlantPrice").innerText = document.getElementById("sixPlantPrice").innerText.replace("#", sixPlantPrice);


let oneGold = document.getElementById("oneGold");
oneGold.style.display = "none";
oneGold.showing = false;
oneGold.ranking = 1;
oneGold.tier = 1;
oneGold.materialRanking = 5;
oneGold.bought = false;
autoclickers.push(oneGold);
document.getElementById("oneGoldPrice").innerText = document.getElementById("oneGoldPrice").innerText.replace("#", oneGoldPrice);

let twoGold = document.getElementById("twoGold");
twoGold.style.display = "none";
twoGold.showing = false;
twoGold.ranking = 2;
twoGold.tier = 2;
twoGold.materialRanking = 5;
twoGold.bought = false;
autoclickers.push(twoGold);
document.getElementById("twoGoldPrice").innerText = document.getElementById("twoGoldPrice").innerText.replace("#", twoGoldPrice);

let threeGold = document.getElementById("threeGold");
threeGold.style.display = "none";
threeGold.showing = false;
threeGold.ranking = 5;
threeGold.tier = 3;
threeGold.materialRanking = 5;
threeGold.bought = false;
autoclickers.push(threeGold);
document.getElementById("threeGoldPrice").innerText = document.getElementById("threeGoldPrice").innerText.replace("#", threeGoldPrice);

let fourGold = document.getElementById("fourGold");
fourGold.style.display = "none";
fourGold.showing = false;
fourGold.ranking = 7;
fourGold.tier = 4;
fourGold.materialRanking = 5;
fourGold.bought = false;
autoclickers.push(fourGold);
document.getElementById("fourGoldPrice").innerText = document.getElementById("fourGoldPrice").innerText.replace("#", fourGoldPrice);

let fiveGold = document.getElementById("fiveGold");
fiveGold.style.display = "none";
fiveGold.showing = false;
fiveGold.ranking = 9;
fiveGold.tier = 5;
fiveGold.materialRanking = 5;
fiveGold.bought = false;
autoclickers.push(fiveGold);
document.getElementById("fiveGoldPrice").innerText = document.getElementById("fiveGoldPrice").innerText.replace("#", fiveGoldPrice);

let sixGold = document.getElementById("sixGold");
sixGold.style.display = "none";
sixGold.showing = false;
sixGold.ranking = 12;
sixGold.tier = 6;
sixGold.materialRanking = 5;
sixGold.bought = false;
autoclickers.push(sixGold);
document.getElementById("sixGoldPrice").innerText = document.getElementById("sixGoldPrice").innerText.replace("#", sixGoldPrice);


let oneCopper = document.getElementById("oneCopper");
oneCopper.style.display = "none";
oneCopper.showing = false;
oneCopper.ranking = 1;
oneCopper.tier = 1;
oneCopper.materialRanking = 6;
oneCopper.bought = false;
autoclickers.push(oneCopper);
document.getElementById("oneCopperPrice").innerText = document.getElementById("oneCopperPrice").innerText.replace("#", oneCopperPrice);

let twoCopper = document.getElementById("twoCopper");
twoCopper.style.display = "none";
twoCopper.showing = false;
twoCopper.ranking = 2;
twoCopper.tier = 2;
twoCopper.materialRanking = 6;
twoCopper.bought = false;
autoclickers.push(twoCopper);
document.getElementById("twoCopperPrice").innerText = document.getElementById("twoCopperPrice").innerText.replace("#", twoCopperPrice);

let threeCopper = document.getElementById("threeCopper");
threeCopper.style.display = "none";
threeCopper.showing = false;
threeCopper.ranking = 5;
threeCopper.tier = 3;
threeCopper.materialRanking = 6;
threeCopper.bought = false;
autoclickers.push(threeCopper);
document.getElementById("threeCopperPrice").innerText = document.getElementById("threeCopperPrice").innerText.replace("#", threeCopperPrice);

let fourCopper = document.getElementById("fourCopper");
fourCopper.style.display = "none";
fourCopper.showing = false;
fourCopper.ranking = 7;
fourCopper.tier = 4;
fourCopper.materialRanking = 6;
fourCopper.bought = false;
autoclickers.push(fourCopper);
document.getElementById("fourCopperPrice").innerText = document.getElementById("fourCopperPrice").innerText.replace("#", fourCopperPrice);

let fiveCopper = document.getElementById("fiveCopper");
fiveCopper.style.display = "none";
fiveCopper.showing = false;
fiveCopper.ranking = 9;
fiveCopper.tier = 5;
fiveCopper.materialRanking = 6;
fiveCopper.bought = false;
autoclickers.push(fiveCopper);
document.getElementById("fiveCopperPrice").innerText = document.getElementById("fiveCopperPrice").innerText.replace("#", fiveCopperPrice);

let sixCopper = document.getElementById("sixCopper");
sixCopper.style.display = "none";
sixCopper.showing = false;
sixCopper.ranking = 12;
sixCopper.tier = 6;
sixCopper.materialRanking = 6;
sixCopper.bought = false;
autoclickers.push(sixCopper);
document.getElementById("sixCopperPrice").innerText = document.getElementById("sixCopperPrice").innerText.replace("#", sixCopperPrice);


let oneIron = document.getElementById("oneIron");
oneIron.style.display = "none";
oneIron.showing = false;
oneIron.ranking = 1;
oneIron.tier = 1;
oneIron.materialRanking = 7;
oneIron.bought = false;
autoclickers.push(oneIron);
document.getElementById("oneIronPrice").innerText = document.getElementById("oneIronPrice").innerText.replace("#", oneIronPrice);

let twoIron = document.getElementById("twoIron");
twoIron.style.display = "none";
twoIron.showing = false;
twoIron.ranking = 2;
twoIron.tier = 2;
twoIron.materialRanking = 7;
twoIron.bought = false;
autoclickers.push(twoIron);
document.getElementById("twoIronPrice").innerText = document.getElementById("twoIronPrice").innerText.replace("#", twoIronPrice);

let threeIron = document.getElementById("threeIron");
threeIron.style.display = "none";
threeIron.showing = false;
threeIron.ranking = 5;
threeIron.tier = 3;
threeIron.materialRanking = 7;
threeIron.bought = false;
autoclickers.push(threeIron);
document.getElementById("threeIronPrice").innerText = document.getElementById("threeIronPrice").innerText.replace("#", threeIronPrice);

let fourIron = document.getElementById("fourIron");
fourIron.style.display = "none";
fourIron.showing = false;
fourIron.ranking = 7;
fourIron.tier = 4;
fourIron.materialRanking = 7;
fourIron.bought = false;
autoclickers.push(fourIron);
document.getElementById("fourIronPrice").innerText = document.getElementById("fourIronPrice").innerText.replace("#", fourIronPrice);

let fiveIron = document.getElementById("fiveIron");
fiveIron.style.display = "none";
fiveIron.showing = false;
fiveIron.ranking = 9;
fiveIron.tier = 5;
fiveIron.materialRanking = 7;
fiveIron.bought = false;
autoclickers.push(fiveIron);
document.getElementById("fiveIronPrice").innerText = document.getElementById("fiveIronPrice").innerText.replace("#", fiveIronPrice);

let sixIron = document.getElementById("sixIron");
sixIron.style.display = "none";
sixIron.showing = false;
sixIron.ranking = 12;
sixIron.tier = 6;
sixIron.materialRanking = 7;
sixIron.bought = false;
autoclickers.push(sixIron);
document.getElementById("sixIronPrice").innerText = document.getElementById("sixIronPrice").innerText.replace("#", sixIronPrice);


let oneRedstone = document.getElementById("oneRedstone");
oneRedstone.style.display = "none";
oneRedstone.showing = false;
oneRedstone.ranking = 1;
oneRedstone.tier = 1;
oneRedstone.materialRanking = 8;
oneRedstone.bought = false;
autoclickers.push(oneRedstone);
document.getElementById("oneRedstonePrice").innerText = document.getElementById("oneRedstonePrice").innerText.replace("#", oneRedstonePrice);

let twoRedstone = document.getElementById("twoRedstone");
twoRedstone.style.display = "none";
twoRedstone.showing = false;
twoRedstone.ranking = 2;
twoRedstone.tier = 2;
twoRedstone.materialRanking = 8;
twoRedstone.bought = false;
autoclickers.push(twoRedstone);
document.getElementById("twoRedstonePrice").innerText = document.getElementById("twoRedstonePrice").innerText.replace("#", twoRedstonePrice);

let threeRedstone = document.getElementById("threeRedstone");
threeRedstone.style.display = "none";
threeRedstone.showing = false;
threeRedstone.ranking = 5;
threeRedstone.tier = 3;
threeRedstone.materialRanking = 8;
threeRedstone.bought = false;
autoclickers.push(threeRedstone);
document.getElementById("threeRedstonePrice").innerText = document.getElementById("threeRedstonePrice").innerText.replace("#", threeRedstonePrice);

let fourRedstone = document.getElementById("fourRedstone");
fourRedstone.style.display = "none";
fourRedstone.showing = false;
fourRedstone.ranking = 7;
fourRedstone.tier = 4;
fourRedstone.materialRanking = 8;
fourRedstone.bought = false;
autoclickers.push(fourRedstone);
document.getElementById("fourRedstonePrice").innerText = document.getElementById("fourRedstonePrice").innerText.replace("#", fourRedstonePrice);

let fiveRedstone = document.getElementById("fiveRedstone");
fiveRedstone.style.display = "none";
fiveRedstone.showing = false;
fiveRedstone.ranking = 9;
fiveRedstone.tier = 5;
fiveRedstone.materialRanking = 8;
fiveRedstone.bought = false;
autoclickers.push(fiveRedstone);
document.getElementById("fiveRedstonePrice").innerText = document.getElementById("fiveRedstonePrice").innerText.replace("#", fiveRedstonePrice);

let sixRedstone = document.getElementById("sixRedstone");
sixRedstone.style.display = "none";
sixRedstone.showing = false;
sixRedstone.ranking = 12;
sixRedstone.tier = 6;
sixRedstone.materialRanking = 8;
sixRedstone.bought = false;
autoclickers.push(sixRedstone);
document.getElementById("sixRedstonePrice").innerText = document.getElementById("sixRedstonePrice").innerText.replace("#", sixRedstonePrice);






let oneDiamond = document.getElementById("oneDiamond");
oneDiamond.style.display = "none";
oneDiamond.showing = false;
oneDiamond.ranking = 1;
oneDiamond.tier = 1;
oneDiamond.materialRanking = 9;
oneDiamond.bought = false;
autoclickers.push(oneDiamond);
document.getElementById("oneDiamondPrice").innerText = document.getElementById("oneDiamondPrice").innerText.replace("#", oneDiamondPrice);

let twoDiamond = document.getElementById("twoDiamond");
twoDiamond.style.display = "none";
twoDiamond.showing = false;
twoDiamond.ranking = 2;
twoDiamond.tier = 2;
twoDiamond.materialRanking = 9;
twoDiamond.bought = false;
autoclickers.push(twoDiamond);
document.getElementById("twoDiamondPrice").innerText = document.getElementById("twoDiamondPrice").innerText.replace("#", twoDiamondPrice);

let threeDiamond = document.getElementById("threeDiamond");
threeDiamond.style.display = "none";
threeDiamond.showing = false;
threeDiamond.ranking = 5;
threeDiamond.tier = 3;
threeDiamond.materialRanking = 9;
threeDiamond.bought = false;
autoclickers.push(threeDiamond);
document.getElementById("threeDiamondPrice").innerText = document.getElementById("threeDiamondPrice").innerText.replace("#", threeDiamondPrice);

let fourDiamond = document.getElementById("fourDiamond");
fourDiamond.style.display = "none";
fourDiamond.showing = false;
fourDiamond.ranking = 7;
fourDiamond.tier = 4;
fourDiamond.materialRanking = 9;
fourDiamond.bought = false;
autoclickers.push(fourDiamond);
document.getElementById("fourDiamondPrice").innerText = document.getElementById("fourDiamondPrice").innerText.replace("#", fourDiamondPrice);

let fiveDiamond = document.getElementById("fiveDiamond");
fiveDiamond.style.display = "none";
fiveDiamond.showing = false;
fiveDiamond.ranking = 9;
fiveDiamond.tier = 5;
fiveDiamond.materialRanking = 9;
fiveDiamond.bought = false;
autoclickers.push(fiveDiamond);
document.getElementById("fiveDiamondPrice").innerText = document.getElementById("fiveDiamondPrice").innerText.replace("#", fiveDiamondPrice);

let sixDiamond = document.getElementById("sixDiamond");
sixDiamond.style.display = "none";
sixDiamond.showing = false;
sixDiamond.ranking = 12;
sixDiamond.tier = 6;
sixDiamond.materialRanking = 9;
sixDiamond.bought = false;
autoclickers.push(sixDiamond);
document.getElementById("sixDiamondPrice").innerText = document.getElementById("sixDiamondPrice").innerText.replace("#", sixDiamondPrice);


let oneEmerald = document.getElementById("oneEmerald");
oneEmerald.style.display = "none";
oneEmerald.showing = false;
oneEmerald.ranking = 1;
oneEmerald.tier = 1;
oneEmerald.materialRanking = 10;
oneEmerald.bought = false;
autoclickers.push(oneEmerald);
document.getElementById("oneEmeraldPrice").innerText = document.getElementById("oneEmeraldPrice").innerText.replace("#", oneEmeraldPrice);

let twoEmerald = document.getElementById("twoEmerald");
twoEmerald.style.display = "none";
twoEmerald.showing = false;
twoEmerald.ranking = 2;
twoEmerald.tier = 2;
twoEmerald.materialRanking = 10;
twoEmerald.bought = false;
autoclickers.push(twoEmerald);
document.getElementById("twoEmeraldPrice").innerText = document.getElementById("twoEmeraldPrice").innerText.replace("#", twoEmeraldPrice);

let threeEmerald = document.getElementById("threeEmerald");
threeEmerald.style.display = "none";
threeEmerald.showing = false;
threeEmerald.ranking = 5;
threeEmerald.tier = 3;
threeEmerald.materialRanking = 10;
threeEmerald.bought = false;
autoclickers.push(threeEmerald);
document.getElementById("threeEmeraldPrice").innerText = document.getElementById("threeEmeraldPrice").innerText.replace("#", threeEmeraldPrice);

let fourEmerald = document.getElementById("fourEmerald");
fourEmerald.style.display = "none";
fourEmerald.showing = false;
fourEmerald.ranking = 7;
fourEmerald.tier = 4;
fourEmerald.materialRanking = 10;
fourEmerald.bought = false;
autoclickers.push(fourEmerald);
document.getElementById("fourEmeraldPrice").innerText = document.getElementById("fourEmeraldPrice").innerText.replace("#", fourEmeraldPrice);

let fiveEmerald = document.getElementById("fiveEmerald");
fiveEmerald.style.display = "none";
fiveEmerald.showing = false;
fiveEmerald.ranking = 9;
fiveEmerald.tier = 5;
fiveEmerald.materialRanking = 10;
fiveEmerald.bought = false;
autoclickers.push(fiveEmerald);
document.getElementById("fiveEmeraldPrice").innerText = document.getElementById("fiveEmeraldPrice").innerText.replace("#", fiveEmeraldPrice);

let sixEmerald = document.getElementById("sixEmerald");
sixEmerald.style.display = "none";
sixEmerald.showing = false;
sixEmerald.ranking = 12;
sixEmerald.tier = 6;
sixEmerald.materialRanking = 10;
sixEmerald.bought = false;
autoclickers.push(sixEmerald);
document.getElementById("sixEmeraldPrice").innerText = document.getElementById("sixEmeraldPrice").innerText.replace("#", sixEmeraldPrice);


let oneObsidian = document.getElementById("oneObsidian");
oneObsidian.style.display = "none";
oneObsidian.showing = false;
oneObsidian.ranking = 1;
oneObsidian.tier = 1;
oneObsidian.materialRanking = 11;
oneObsidian.bought = false;
autoclickers.push(oneObsidian);
document.getElementById("oneObsidianPrice").innerText = document.getElementById("oneObsidianPrice").innerText.replace("#", oneObsidianPrice);

let twoObsidian = document.getElementById("twoObsidian");
twoObsidian.style.display = "none";
twoObsidian.showing = false;
twoObsidian.ranking = 2;
twoObsidian.tier = 2;
twoObsidian.materialRanking = 11;
twoObsidian.bought = false;
autoclickers.push(twoObsidian);
document.getElementById("twoObsidianPrice").innerText = document.getElementById("twoObsidianPrice").innerText.replace("#", twoObsidianPrice);

let threeObsidian = document.getElementById("threeObsidian");
threeObsidian.style.display = "none";
threeObsidian.showing = false;
threeObsidian.ranking = 5;
threeObsidian.tier = 3;
threeObsidian.materialRanking = 11;
threeObsidian.bought = false;
autoclickers.push(threeObsidian);
document.getElementById("threeObsidianPrice").innerText = document.getElementById("threeObsidianPrice").innerText.replace("#", threeObsidianPrice);

let fourObsidian = document.getElementById("fourObsidian");
fourObsidian.style.display = "none";
fourObsidian.showing = false;
fourObsidian.ranking = 7;
fourObsidian.tier = 4;
fourObsidian.materialRanking = 11;
fourObsidian.bought = false;
autoclickers.push(fourObsidian);
document.getElementById("fourObsidianPrice").innerText = document.getElementById("fourObsidianPrice").innerText.replace("#", fourObsidianPrice);

let fiveObsidian = document.getElementById("fiveObsidian");
fiveObsidian.style.display = "none";
fiveObsidian.showing = false;
fiveObsidian.ranking = 9;
fiveObsidian.tier = 5;
fiveObsidian.materialRanking = 11;
fiveObsidian.bought = false;
autoclickers.push(fiveObsidian);
document.getElementById("fiveObsidianPrice").innerText = document.getElementById("fiveObsidianPrice").innerText.replace("#", fiveObsidianPrice);

let sixObsidian = document.getElementById("sixObsidian");
sixObsidian.style.display = "none";
sixObsidian.showing = false;
sixObsidian.ranking = 12;
sixObsidian.tier = 6;
sixObsidian.materialRanking = 11;
sixObsidian.bought = false;
autoclickers.push(sixObsidian);
document.getElementById("sixObsidianPrice").innerText = document.getElementById("sixObsidianPrice").innerText.replace("#", sixObsidianPrice);


let oneNetherite = document.getElementById("oneNetherite");
oneNetherite.style.display = "none";
oneNetherite.showing = false;
oneNetherite.ranking = 1;
oneNetherite.tier = 1;
oneNetherite.materialRanking = 12;
oneNetherite.bought = false;
autoclickers.push(oneNetherite);
document.getElementById("oneNetheritePrice").innerText = document.getElementById("oneNetheritePrice").innerText.replace("#", oneNetheritePrice);

let twoNetherite = document.getElementById("twoNetherite");
twoNetherite.style.display = "none";
twoNetherite.showing = false;
twoNetherite.ranking = 2;
twoNetherite.tier = 2;
twoNetherite.materialRanking = 12;
twoNetherite.bought = false;
autoclickers.push(twoNetherite);
document.getElementById("twoNetheritePrice").innerText = document.getElementById("twoNetheritePrice").innerText.replace("#", twoNetheritePrice);

let threeNetherite = document.getElementById("threeNetherite");
threeNetherite.style.display = "none";
threeNetherite.showing = false;
threeNetherite.ranking = 5;
threeNetherite.tier = 3;
threeNetherite.materialRanking = 12;
threeNetherite.bought = false;
autoclickers.push(threeNetherite);
document.getElementById("threeNetheritePrice").innerText = document.getElementById("threeNetheritePrice").innerText.replace("#", threeNetheritePrice);

let fourNetherite = document.getElementById("fourNetherite");
fourNetherite.style.display = "none";
fourNetherite.showing = false;
fourNetherite.ranking = 7;
fourNetherite.tier = 4;
fourNetherite.materialRanking = 12;
fourNetherite.bought = false;
autoclickers.push(fourNetherite);
document.getElementById("fourNetheritePrice").innerText = document.getElementById("fourNetheritePrice").innerText.replace("#", fourNetheritePrice);

let fiveNetherite = document.getElementById("fiveNetherite");
fiveNetherite.style.display = "none";
fiveNetherite.showing = false;
fiveNetherite.ranking = 9;
fiveNetherite.tier = 5;
fiveNetherite.materialRanking = 12;
fiveNetherite.bought = false;
autoclickers.push(fiveNetherite);
document.getElementById("fiveNetheritePrice").innerText = document.getElementById("fiveNetheritePrice").innerText.replace("#", fiveNetheritePrice);

let sixNetherite = document.getElementById("sixNetherite");
sixNetherite.style.display = "none";
sixNetherite.showing = false;
sixNetherite.ranking = 12;
sixNetherite.tier = 6;
sixNetherite.materialRanking = 12;
sixNetherite.bought = false;
autoclickers.push(sixNetherite);
document.getElementById("sixNetheritePrice").innerText = document.getElementById("sixNetheritePrice").innerText.replace("#", sixNetheritePrice);
//#endregion

let acButtons = Array();
//#region array of autoclicker buttons (material order)
let oneDirtButton = document.getElementById("oneDirtButton");
oneDirtButton.price = oneDirtPrice;
oneDirtButton.seconds = oneDirtSeconds;
acButtons.push(oneDirtButton);

let twoDirtButton = document.getElementById("twoDirtButton");
twoDirtButton.price = twoDirtPrice;
twoDirtButton.seconds = twoDirtSeconds;
acButtons.push(twoDirtButton);

let threeDirtButton = document.getElementById("threeDirtButton");
threeDirtButton.price = threeDirtPrice;
threeDirtButton.seconds = threeDirtSeconds;
acButtons.push(threeDirtButton);

let fourDirtButton = document.getElementById("fourDirtButton");
fourDirtButton.price = fourDirtPrice;
fourDirtButton.seconds = fourDirtSeconds;
acButtons.push(fourDirtButton);

let fiveDirtButton = document.getElementById("fiveDirtButton");
fiveDirtButton.price = fiveDirtPrice;
fiveDirtButton.seconds = fiveDirtSeconds;
acButtons.push(fiveDirtButton);

let sixDirtButton = document.getElementById("sixDirtButton");
sixDirtButton.price = sixDirtPrice;
sixDirtButton.seconds = sixDirtSeconds;
acButtons.push(sixDirtButton);


let oneWoodButton = document.getElementById("oneWoodButton");
oneWoodButton.price = oneWoodPrice;
oneWoodButton.seconds = oneWoodSeconds;
acButtons.push(oneWoodButton);

let twoWoodButton = document.getElementById("twoWoodButton");
twoWoodButton.price = twoWoodPrice;
twoWoodButton.seconds = twoWoodSeconds;
acButtons.push(twoWoodButton);

let threeWoodButton = document.getElementById("threeWoodButton");
threeWoodButton.price = threeWoodPrice;
threeWoodButton.seconds = threeWoodSeconds;
acButtons.push(threeWoodButton);

let fourWoodButton = document.getElementById("fourWoodButton");
fourWoodButton.price = fourWoodPrice;
fourWoodButton.seconds = fourWoodSeconds;
acButtons.push(fourWoodButton);

let fiveWoodButton = document.getElementById("fiveWoodButton");
fiveWoodButton.price = fiveWoodPrice;
fiveWoodButton.seconds = fiveWoodSeconds;
acButtons.push(fiveWoodButton);

let sixWoodButton = document.getElementById("sixWoodButton");
sixWoodButton.price = sixWoodPrice;
sixWoodButton.seconds = sixWoodSeconds;
acButtons.push(sixWoodButton);


let oneStoneButton = document.getElementById("oneStoneButton");
oneStoneButton.price = oneStonePrice;
oneStoneButton.seconds = oneStoneSeconds;
acButtons.push(oneStoneButton);

let twoStoneButton = document.getElementById("twoStoneButton");
twoStoneButton.price = twoStonePrice;
twoStoneButton.seconds = twoStoneSeconds;
acButtons.push(twoStoneButton);

let threeStoneButton = document.getElementById("threeStoneButton");
threeStoneButton.price = threeStonePrice;
threeStoneButton.seconds = threeStoneSeconds;
acButtons.push(threeStoneButton);

let fourStoneButton = document.getElementById("fourStoneButton");
fourStoneButton.price = fourStonePrice;
fourStoneButton.seconds = fourStoneSeconds;
acButtons.push(fourStoneButton);

let fiveStoneButton = document.getElementById("fiveStoneButton");
fiveStoneButton.price = fiveStonePrice;
fiveStoneButton.seconds = fiveStoneSeconds;
acButtons.push(fiveStoneButton);

let sixStoneButton = document.getElementById("sixStoneButton");
sixStoneButton.price = sixStonePrice;
sixStoneButton.seconds = sixStoneSeconds;
acButtons.push(sixStoneButton);


let onePStoneButton = document.getElementById("onePStoneButton");
onePStoneButton.price = onePStonePrice;
onePStoneButton.seconds = onePStoneSeconds;
acButtons.push(onePStoneButton);

let twoPStoneButton = document.getElementById("twoPStoneButton");
twoPStoneButton.price = twoPStonePrice;
twoPStoneButton.seconds = twoPStoneSeconds;
acButtons.push(twoPStoneButton);

let threePStoneButton = document.getElementById("threePStoneButton");
threePStoneButton.price = threePStonePrice;
threePStoneButton.seconds = threePStoneSeconds;
acButtons.push(threePStoneButton);

let fourPStoneButton = document.getElementById("fourPStoneButton");
fourPStoneButton.price = fourPStonePrice;
fourPStoneButton.seconds = fourPStoneSeconds;
acButtons.push(fourPStoneButton);

let fivePStoneButton = document.getElementById("fivePStoneButton");
fivePStoneButton.price = fivePStonePrice;
fivePStoneButton.seconds = fivePStoneSeconds;
acButtons.push(fivePStoneButton);

let sixPStoneButton = document.getElementById("sixPStoneButton");
sixPStoneButton.price = sixPStonePrice;
sixPStoneButton.seconds = sixPStoneSeconds;
acButtons.push(sixPStoneButton);


let onePlantButton = document.getElementById("onePlantButton");
onePlantButton.price = onePlantPrice;
onePlantButton.seconds = onePlantSeconds;
acButtons.push(onePlantButton);

let twoPlantButton = document.getElementById("twoPlantButton");
twoPlantButton.price = twoPlantPrice;
twoPlantButton.seconds = twoPlantSeconds;
acButtons.push(twoPlantButton);

let threePlantButton = document.getElementById("threePlantButton");
threePlantButton.price = threePlantPrice;
threePlantButton.seconds = threePlantSeconds;
acButtons.push(threePlantButton);

let fourPlantButton = document.getElementById("fourPlantButton");
fourPlantButton.price = fourPlantPrice;
fourPlantButton.seconds = fourPlantSeconds;
acButtons.push(fourPlantButton);

let fivePlantButton = document.getElementById("fivePlantButton");
fivePlantButton.price = fivePlantPrice;
fivePlantButton.seconds = fivePlantSeconds;
acButtons.push(fivePlantButton);

let sixPlantButton = document.getElementById("sixPlantButton");
sixPlantButton.price = sixPlantPrice;
sixPlantButton.seconds = sixPlantSeconds;
acButtons.push(sixPlantButton);


let oneGoldButton = document.getElementById("oneGoldButton");
oneGoldButton.price = oneGoldPrice;
oneGoldButton.seconds = oneGoldSeconds;
acButtons.push(oneGoldButton);

let twoGoldButton = document.getElementById("twoGoldButton");
twoGoldButton.price = twoGoldPrice;
twoGoldButton.seconds = twoGoldSeconds;
acButtons.push(twoGoldButton);

let threeGoldButton = document.getElementById("threeGoldButton");
threeGoldButton.price = threeGoldPrice;
threeGoldButton.seconds = threeGoldSeconds;
acButtons.push(threeGoldButton);

let fourGoldButton = document.getElementById("fourGoldButton");
fourGoldButton.price = fourGoldPrice;
fourGoldButton.seconds = fourGoldSeconds;
acButtons.push(fourGoldButton);

let fiveGoldButton = document.getElementById("fiveGoldButton");
fiveGoldButton.price = fiveGoldPrice;
fiveGoldButton.seconds = fiveGoldSeconds;
acButtons.push(fiveGoldButton);

let sixGoldButton = document.getElementById("sixGoldButton");
sixGoldButton.price = sixGoldPrice;
sixGoldButton.seconds = sixGoldSeconds;
acButtons.push(sixGoldButton);


let oneCopperButton = document.getElementById("oneCopperButton");
oneCopperButton.price = oneCopperPrice;
oneCopperButton.seconds = oneCopperSeconds;
acButtons.push(oneCopperButton);

let twoCopperButton = document.getElementById("twoCopperButton");
twoCopperButton.price = twoCopperPrice;
twoCopperButton.seconds = twoCopperSeconds;
acButtons.push(twoCopperButton);

let threeCopperButton = document.getElementById("threeCopperButton");
threeCopperButton.price = threeCopperPrice;
threeCopperButton.seconds = threeCopperSeconds;
acButtons.push(threeCopperButton);

let fourCopperButton = document.getElementById("fourCopperButton");
fourCopperButton.price = fourCopperPrice;
fourCopperButton.seconds = fourCopperSeconds;
acButtons.push(fourCopperButton);

let fiveCopperButton = document.getElementById("fiveCopperButton");
fiveCopperButton.price = fiveCopperPrice;
fiveCopperButton.seconds = fiveCopperSeconds;
acButtons.push(fiveCopperButton);

let sixCopperButton = document.getElementById("sixCopperButton");
sixCopperButton.price = sixCopperPrice;
sixCopperButton.seconds = sixCopperSeconds;
acButtons.push(sixCopperButton);


let oneIronButton = document.getElementById("oneIronButton");
oneIronButton.price = oneIronPrice;
oneIronButton.seconds = oneIronSeconds;
acButtons.push(oneIronButton);

let twoIronButton = document.getElementById("twoIronButton");
twoIronButton.price = twoIronPrice;
twoIronButton.seconds = twoIronSeconds;
acButtons.push(twoIronButton);

let threeIronButton = document.getElementById("threeIronButton");
threeIronButton.price = threeIronPrice;
threeIronButton.seconds = threeIronSeconds;
acButtons.push(threeIronButton);

let fourIronButton = document.getElementById("fourIronButton");
fourIronButton.price = fourIronPrice;
fourIronButton.seconds = fourIronSeconds;
acButtons.push(fourIronButton);

let fiveIronButton = document.getElementById("fiveIronButton");
fiveIronButton.price = fiveIronPrice;
fiveIronButton.seconds = fiveIronSeconds;
acButtons.push(fiveIronButton);

let sixIronButton = document.getElementById("sixIronButton");
sixIronButton.price = sixIronPrice;
sixIronButton.seconds = sixIronSeconds;
acButtons.push(sixIronButton);


let oneRedstoneButton = document.getElementById("oneRedstoneButton");
oneRedstoneButton.price = oneRedstonePrice;
oneRedstoneButton.seconds = oneRedstoneSeconds;
acButtons.push(oneRedstoneButton);

let twoRedstoneButton = document.getElementById("twoRedstoneButton");
twoRedstoneButton.price = twoRedstonePrice;
twoRedstoneButton.seconds = twoRedstoneSeconds;
acButtons.push(twoRedstoneButton);

let threeRedstoneButton = document.getElementById("threeRedstoneButton");
threeRedstoneButton.price = threeRedstonePrice;
threeRedstoneButton.seconds = threeRedstoneSeconds;
acButtons.push(threeRedstoneButton);

let fourRedstoneButton = document.getElementById("fourRedstoneButton");
fourRedstoneButton.price = fourRedstonePrice;
fourRedstoneButton.seconds = fourRedstoneSeconds;
acButtons.push(fourRedstoneButton);

let fiveRedstoneButton = document.getElementById("fiveRedstoneButton");
fiveRedstoneButton.price = fiveRedstonePrice;
fiveRedstoneButton.seconds = fiveRedstoneSeconds;
acButtons.push(fiveRedstoneButton);

let sixRedstoneButton = document.getElementById("sixRedstoneButton");
sixRedstoneButton.price = sixRedstonePrice;
sixRedstoneButton.seconds = sixRedstoneSeconds;
acButtons.push(sixRedstoneButton);


let oneDiamondButton = document.getElementById("oneDiamondButton");
oneDiamondButton.price = oneDiamondPrice;
oneDiamondButton.seconds = oneDiamondSeconds;
acButtons.push(oneDiamondButton);

let twoDiamondButton = document.getElementById("twoDiamondButton");
twoDiamondButton.price = twoDiamondPrice;
twoDiamondButton.seconds = twoDiamondSeconds;
acButtons.push(twoDiamondButton);

let threeDiamondButton = document.getElementById("threeDiamondButton");
threeDiamondButton.price = threeDiamondPrice;
threeDiamondButton.seconds = threeDiamondSeconds;
acButtons.push(threeDiamondButton);

let fourDiamondButton = document.getElementById("fourDiamondButton");
fourDiamondButton.price = fourDiamondPrice;
fourDiamondButton.seconds = fourDiamondSeconds;
acButtons.push(fourDiamondButton);

let fiveDiamondButton = document.getElementById("fiveDiamondButton");
fiveDiamondButton.price = fiveDiamondPrice;
fiveDiamondButton.seconds = fiveDiamondSeconds;
acButtons.push(fiveDiamondButton);

let sixDiamondButton = document.getElementById("sixDiamondButton");
sixDiamondButton.price = sixDiamondPrice;
sixDiamondButton.seconds = sixDiamondSeconds;
acButtons.push(sixDiamondButton);


let oneEmeraldButton = document.getElementById("oneEmeraldButton");
oneEmeraldButton.price = oneEmeraldPrice;
oneEmeraldButton.seconds = oneEmeraldSeconds;
acButtons.push(oneEmeraldButton);

let twoEmeraldButton = document.getElementById("twoEmeraldButton");
twoEmeraldButton.price = twoEmeraldPrice;
twoEmeraldButton.seconds = twoEmeraldSeconds;
acButtons.push(twoEmeraldButton);

let threeEmeraldButton = document.getElementById("threeEmeraldButton");
threeEmeraldButton.price = threeEmeraldPrice;
threeEmeraldButton.seconds = threeEmeraldSeconds;
acButtons.push(threeEmeraldButton);

let fourEmeraldButton = document.getElementById("fourEmeraldButton");
fourEmeraldButton.price = fourEmeraldPrice;
fourEmeraldButton.seconds = fourEmeraldSeconds;
acButtons.push(fourEmeraldButton);

let fiveEmeraldButton = document.getElementById("fiveEmeraldButton");
fiveEmeraldButton.price = fiveEmeraldPrice;
fiveEmeraldButton.seconds = fiveEmeraldSeconds;
acButtons.push(fiveEmeraldButton);

let sixEmeraldButton = document.getElementById("sixEmeraldButton");
sixEmeraldButton.price = sixEmeraldPrice;
sixEmeraldButton.seconds = sixEmeraldSeconds;
acButtons.push(sixEmeraldButton);


let oneObsidianButton = document.getElementById("oneObsidianButton");
oneObsidianButton.price = oneObsidianPrice;
oneObsidianButton.seconds = oneObsidianSeconds;
acButtons.push(oneObsidianButton);

let twoObsidianButton = document.getElementById("twoObsidianButton");
twoObsidianButton.price = twoObsidianPrice;
twoObsidianButton.seconds = twoObsidianSeconds;
acButtons.push(twoObsidianButton);

let threeObsidianButton = document.getElementById("threeObsidianButton");
threeObsidianButton.price = threeObsidianPrice;
threeObsidianButton.seconds = threeObsidianSeconds;
acButtons.push(threeObsidianButton);

let fourObsidianButton = document.getElementById("fourObsidianButton");
fourObsidianButton.price = fourObsidianPrice;
fourObsidianButton.seconds = fourObsidianSeconds;
acButtons.push(fourObsidianButton);

let fiveObsidianButton = document.getElementById("fiveObsidianButton");
fiveObsidianButton.price = fiveObsidianPrice;
fiveObsidianButton.seconds = fiveObsidianSeconds;
acButtons.push(fiveObsidianButton);

let sixObsidianButton = document.getElementById("sixObsidianButton");
sixObsidianButton.price = sixObsidianPrice;
sixObsidianButton.seconds = sixObsidianSeconds;
acButtons.push(sixObsidianButton);


let oneNetheriteButton = document.getElementById("oneNetheriteButton");
oneNetheriteButton.price = oneNetheritePrice;
oneNetheriteButton.seconds = oneNetheriteSeconds;
acButtons.push(oneNetheriteButton);

let twoNetheriteButton = document.getElementById("twoNetheriteButton");
twoNetheriteButton.price = twoNetheritePrice;
twoNetheriteButton.seconds = twoNetheriteSeconds;
acButtons.push(twoNetheriteButton);

let threeNetheriteButton = document.getElementById("threeNetheriteButton");
threeNetheriteButton.price = threeNetheritePrice;
threeNetheriteButton.seconds = threeNetheriteSeconds;
acButtons.push(threeNetheriteButton);

let fourNetheriteButton = document.getElementById("fourNetheriteButton");
fourNetheriteButton.price = fourNetheritePrice;
fourNetheriteButton.seconds = fourNetheriteSeconds;
acButtons.push(fourNetheriteButton);

let fiveNetheriteButton = document.getElementById("fiveNetheriteButton");
fiveNetheriteButton.price = fiveNetheritePrice;
fiveNetheriteButton.seconds = fiveNetheriteSeconds;
acButtons.push(fiveNetheriteButton);

let sixNetheriteButton = document.getElementById("sixNetheriteButton");
sixNetheriteButton.price = sixNetheritePrice;
sixNetheriteButton.seconds = sixNetheriteSeconds;
acButtons.push(sixNetheriteButton);
//#endregion



//#region array of autoclicker blocks (unlock order)
let oneDirt = document.getElementById("oneDirt");
oneDirt.style.display = "none";
oneDirt.showing = false;
//rank/index of material needed to purchase
oneDirt.ranking = 1;
//tier of upgrade (1-6)
oneDirt.tier = 1;
//rank/index of material affected by autoclickers
oneDirt.materialRanking = 0;
oneDirt.bought = false;
autoclickers.push(oneDirt);
document.getElementById("oneDirtPrice").innerText = document.getElementById("oneDirtPrice").innerText.replace("#", oneDirtPrice);

let oneWood = document.getElementById("oneWood");
oneWood.style.display = "none";
oneWood.showing = false;
oneWood.ranking = 1;
oneWood.tier = 1;
oneWood.materialRanking = 1;
oneWood.bought = false;
autoclickers.push(oneWood);
document.getElementById("oneWoodPrice").innerText = document.getElementById("oneWoodPrice").innerText.replace("#", oneWoodPrice);


let oneStone = document.getElementById("oneStone");
oneStone.style.display = "none";
oneStone.showing = false;
oneStone.ranking = 1;
oneStone.tier = 1;
oneStone.materialRanking = 2;
oneStone.bought = false;
autoclickers.push(oneStone);
document.getElementById("oneStonePrice").innerText = document.getElementById("oneStonePrice").innerText.replace("#", oneStonePrice);

let twoDirt = document.getElementById("twoDirt");
twoDirt.style.display = "none";
twoDirt.showing = false;
twoDirt.ranking = 2;
twoDirt.tier = 2;
twoDirt.materialRanking = 0;
twoDirt.bought = false;
autoclickers.push(twoDirt);
document.getElementById("twoDirtPrice").innerText = document.getElementById("twoDirtPrice").innerText.replace("#", twoDirtPrice);

let twoWood = document.getElementById("twoWood");
twoWood.style.display = "none";
twoWood.showing = false;
twoWood.ranking = 2;
twoWood.tier = 2;
twoWood.materialRanking = 1;
twoWood.bought = false;
autoclickers.push(twoWood);
document.getElementById("twoWoodPrice").innerText = document.getElementById("twoWoodPrice").innerText.replace("#", twoWoodPrice);

let twoStone = document.getElementById("twoStone");
twoStone.style.display = "none";
twoStone.showing = false;
twoStone.ranking = 2;
twoStone.tier = 2;
twoStone.materialRanking = 2;
twoStone.bought = false;
autoclickers.push(twoStone);
document.getElementById("twoStonePrice").innerText = document.getElementById("twoStonePrice").innerText.replace("#", twoStonePrice);


let onePStone = document.getElementById("onePStone");
onePStone.style.display = "none";
onePStone.showing = false;
onePStone.ranking = 1;
onePStone.tier = 1;
onePStone.materialRanking = 3;
onePStone.bought = false;
autoclickers.push(onePStone);
document.getElementById("onePStonePrice").innerText = document.getElementById("onePStonePrice").innerText.replace("#", onePStonePrice);

let twoPStone = document.getElementById("twoPStone");
twoPStone.style.display = "none";
twoPStone.showing = false;
twoPStone.ranking = 2;
twoPStone.tier = 2;
twoPStone.materialRanking = 3;
twoPStone.bought = false;
autoclickers.push(twoPStone);
document.getElementById("twoPStonePrice").innerText = document.getElementById("twoPStonePrice").innerText.replace("#", twoPStonePrice);


let onePlant = document.getElementById("onePlant");
onePlant.style.display = "none";
onePlant.showing = false;
onePlant.ranking = 1;
onePlant.tier = 1;
onePlant.materialRanking = 4;
onePlant.bought = false;
autoclickers.push(onePlant);
document.getElementById("onePlantPrice").innerText = document.getElementById("onePlantPrice").innerText.replace("#", onePlantPrice);

let twoPlant = document.getElementById("twoPlant");
twoPlant.style.display = "none";
twoPlant.showing = false;
twoPlant.ranking = 2;
twoPlant.tier = 2;
twoPlant.materialRanking = 4;
twoPlant.bought = false;
autoclickers.push(twoPlant);
document.getElementById("twoPlantPrice").innerText = document.getElementById("twoPlantPrice").innerText.replace("#", twoPlantPrice);



let oneGold = document.getElementById("oneGold");
oneGold.style.display = "none";
oneGold.showing = false;
oneGold.ranking = 1;
oneGold.tier = 1;
oneGold.materialRanking = 5;
oneGold.bought = false;
autoclickers.push(oneGold);
document.getElementById("oneGoldPrice").innerText = document.getElementById("oneGoldPrice").innerText.replace("#", oneGoldPrice);

let twoGold = document.getElementById("twoGold");
twoGold.style.display = "none";
twoGold.showing = false;
twoGold.ranking = 2;
twoGold.tier = 2;
twoGold.materialRanking = 5;
twoGold.bought = false;
autoclickers.push(twoGold);
document.getElementById("twoGoldPrice").innerText = document.getElementById("twoGoldPrice").innerText.replace("#", twoGoldPrice);

let threeDirt = document.getElementById("threeDirt");
threeDirt.style.display = "none";
threeDirt.showing = false;
threeDirt.ranking = 5;
threeDirt.tier = 3;
threeDirt.materialRanking = 0;
threeDirt.bought = false;
autoclickers.push(threeDirt);
document.getElementById("threeDirtPrice").innerText = document.getElementById("threeDirtPrice").innerText.replace("#", threeDirtPrice);

let threeWood = document.getElementById("threeWood");
threeWood.style.display = "none";
threeWood.showing = false;
threeWood.ranking = 5;
threeWood.tier = 3;
threeWood.materialRanking = 1;
threeWood.bought = false;
autoclickers.push(threeWood);
document.getElementById("threeWoodPrice").innerText = document.getElementById("threeWoodPrice").innerText.replace("#", threeWoodPrice);

let threeStone = document.getElementById("threeStone");
threeStone.style.display = "none";
threeStone.showing = false;
threeStone.ranking = 5;
threeStone.tier = 3;
threeStone.materialRanking = 2;
threeStone.bought = false;
autoclickers.push(threeStone);
document.getElementById("threeStonePrice").innerText = document.getElementById("threeStonePrice").innerText.replace("#", threeStonePrice);

let threePStone = document.getElementById("threePStone");
threePStone.style.display = "none";
threePStone.showing = false;
threePStone.ranking = 5;
threePStone.tier = 3;
threePStone.materialRanking = 3;
threePStone.bought = false;
autoclickers.push(threePStone);
document.getElementById("threePStonePrice").innerText = document.getElementById("threePStonePrice").innerText.replace("#", threePStonePrice);

let threePlant = document.getElementById("threePlant");
threePlant.style.display = "none";
threePlant.showing = false;
threePlant.ranking = 5;
threePlant.tier = 3;
threePlant.materialRanking = 4;
threePlant.bought = false;
autoclickers.push(threePlant);
document.getElementById("threePlantPrice").innerText = document.getElementById("threePlantPrice").innerText.replace("#", threePlantPrice);

let threeGold = document.getElementById("threeGold");
threeGold.style.display = "none";
threeGold.showing = false;
threeGold.ranking = 5;
threeGold.tier = 3;
threeGold.materialRanking = 5;
threeGold.bought = false;
autoclickers.push(threeGold);
document.getElementById("threeGoldPrice").innerText = document.getElementById("threeGoldPrice").innerText.replace("#", threeGoldPrice);


let oneCopper = document.getElementById("oneCopper");
oneCopper.style.display = "none";
oneCopper.showing = false;
oneCopper.ranking = 1;
oneCopper.tier = 1;
oneCopper.materialRanking = 6;
oneCopper.bought = false;
autoclickers.push(oneCopper);
document.getElementById("oneCopperPrice").innerText = document.getElementById("oneCopperPrice").innerText.replace("#", oneCopperPrice);

let twoCopper = document.getElementById("twoCopper");
twoCopper.style.display = "none";
twoCopper.showing = false;
twoCopper.ranking = 2;
twoCopper.tier = 2;
twoCopper.materialRanking = 6;
twoCopper.bought = false;
autoclickers.push(twoCopper);
document.getElementById("twoCopperPrice").innerText = document.getElementById("twoCopperPrice").innerText.replace("#", twoCopperPrice);

let threeCopper = document.getElementById("threeCopper");
threeCopper.style.display = "none";
threeCopper.showing = false;
threeCopper.ranking = 5;
threeCopper.tier = 3;
threeCopper.materialRanking = 6;
threeCopper.bought = false;
autoclickers.push(threeCopper);
document.getElementById("threeCopperPrice").innerText = document.getElementById("threeCopperPrice").innerText.replace("#", threeCopperPrice);


let oneIron = document.getElementById("oneIron");
oneIron.style.display = "none";
oneIron.showing = false;
oneIron.ranking = 1;
oneIron.tier = 1;
oneIron.materialRanking = 7;
oneIron.bought = false;
autoclickers.push(oneIron);
document.getElementById("oneIronPrice").innerText = document.getElementById("oneIronPrice").innerText.replace("#", oneIronPrice);

let twoIron = document.getElementById("twoIron");
twoIron.style.display = "none";
twoIron.showing = false;
twoIron.ranking = 2;
twoIron.tier = 2;
twoIron.materialRanking = 7;
twoIron.bought = false;
autoclickers.push(twoIron);
document.getElementById("twoIronPrice").innerText = document.getElementById("twoIronPrice").innerText.replace("#", twoIronPrice);

let threeIron = document.getElementById("threeIron");
threeIron.style.display = "none";
threeIron.showing = false;
threeIron.ranking = 5;
threeIron.tier = 3;
threeIron.materialRanking = 7;
threeIron.bought = false;
autoclickers.push(threeIron);
document.getElementById("threeIronPrice").innerText = document.getElementById("threeIronPrice").innerText.replace("#", threeIronPrice);

let fourDirt = document.getElementById("fourDirt");
fourDirt.style.display = "none";
fourDirt.showing = false;
fourDirt.ranking = 7;
fourDirt.tier = 4;
fourDirt.materialRanking = 0;
fourDirt.bought = false;
autoclickers.push(fourDirt);
document.getElementById("fourDirtPrice").innerText = document.getElementById("fourDirtPrice").innerText.replace("#", fourDirtPrice);

let fourWood = document.getElementById("fourWood");
fourWood.style.display = "none";
fourWood.showing = false;
fourWood.ranking = 7;
fourWood.tier = 4;
fourWood.materialRanking = 1;
fourWood.bought = false;
autoclickers.push(fourWood);
document.getElementById("fourWoodPrice").innerText = document.getElementById("fourWoodPrice").innerText.replace("#", fourWoodPrice);

let fourStone = document.getElementById("fourStone");
fourStone.style.display = "none";
fourStone.showing = false;
fourStone.ranking = 7;
fourStone.tier = 4;
fourStone.materialRanking = 2;
fourStone.bought = false;
autoclickers.push(fourStone);
document.getElementById("fourStonePrice").innerText = document.getElementById("fourStonePrice").innerText.replace("#", fourStonePrice);

let fourPStone = document.getElementById("fourPStone");
fourPStone.style.display = "none";
fourPStone.showing = false;
fourPStone.ranking = 7;
fourPStone.tier = 4;
fourPStone.materialRanking = 3;
fourPStone.bought = false;
autoclickers.push(fourPStone);
document.getElementById("fourPStonePrice").innerText = document.getElementById("fourPStonePrice").innerText.replace("#", fourPStonePrice);

let fourPlant = document.getElementById("fourPlant");
fourPlant.style.display = "none";
fourPlant.showing = false;
fourPlant.ranking = 7;
fourPlant.tier = 4;
fourPlant.materialRanking = 4;
fourPlant.bought = false;
autoclickers.push(fourPlant);
document.getElementById("fourPlantPrice").innerText = document.getElementById("fourPlantPrice").innerText.replace("#", fourPlantPrice);

let fourGold = document.getElementById("fourGold");
fourGold.style.display = "none";
fourGold.showing = false;
fourGold.ranking = 7;
fourGold.tier = 4;
fourGold.materialRanking = 5;
fourGold.bought = false;
autoclickers.push(fourGold);
document.getElementById("fourGoldPrice").innerText = document.getElementById("fourGoldPrice").innerText.replace("#", fourGoldPrice);

let fourCopper = document.getElementById("fourCopper");
fourCopper.style.display = "none";
fourCopper.showing = false;
fourCopper.ranking = 7;
fourCopper.tier = 4;
fourCopper.materialRanking = 6;
fourCopper.bought = false;
autoclickers.push(fourCopper);
document.getElementById("fourCopperPrice").innerText = document.getElementById("fourCopperPrice").innerText.replace("#", fourCopperPrice);

let fourIron = document.getElementById("fourIron");
fourIron.style.display = "none";
fourIron.showing = false;
fourIron.ranking = 7;
fourIron.tier = 4;
fourIron.materialRanking = 7;
fourIron.bought = false;
autoclickers.push(fourIron);
document.getElementById("fourIronPrice").innerText = document.getElementById("fourIronPrice").innerText.replace("#", fourIronPrice);


let oneRedstone = document.getElementById("oneRedstone");
oneRedstone.style.display = "none";
oneRedstone.showing = false;
oneRedstone.ranking = 1;
oneRedstone.tier = 1;
oneRedstone.materialRanking = 8;
oneRedstone.bought = false;
autoclickers.push(oneRedstone);
document.getElementById("oneRedstonePrice").innerText = document.getElementById("oneRedstonePrice").innerText.replace("#", oneRedstonePrice);

let twoRedstone = document.getElementById("twoRedstone");
twoRedstone.style.display = "none";
twoRedstone.showing = false;
twoRedstone.ranking = 2;
twoRedstone.tier = 2;
twoRedstone.materialRanking = 8;
twoRedstone.bought = false;
autoclickers.push(twoRedstone);
document.getElementById("twoRedstonePrice").innerText = document.getElementById("twoRedstonePrice").innerText.replace("#", twoRedstonePrice);

let threeRedstone = document.getElementById("threeRedstone");
threeRedstone.style.display = "none";
threeRedstone.showing = false;
threeRedstone.ranking = 5;
threeRedstone.tier = 3;
threeRedstone.materialRanking = 8;
threeRedstone.bought = false;
autoclickers.push(threeRedstone);
document.getElementById("threeRedstonePrice").innerText = document.getElementById("threeRedstonePrice").innerText.replace("#", threeRedstonePrice);

let fourRedstone = document.getElementById("fourRedstone");
fourRedstone.style.display = "none";
fourRedstone.showing = false;
fourRedstone.ranking = 7;
fourRedstone.tier = 4;
fourRedstone.materialRanking = 8;
fourRedstone.bought = false;
autoclickers.push(fourRedstone);
document.getElementById("fourRedstonePrice").innerText = document.getElementById("fourRedstonePrice").innerText.replace("#", fourRedstonePrice);


let oneDiamond = document.getElementById("oneDiamond");
oneDiamond.style.display = "none";
oneDiamond.showing = false;
oneDiamond.ranking = 1;
oneDiamond.tier = 1;
oneDiamond.materialRanking = 9;
oneDiamond.bought = false;
autoclickers.push(oneDiamond);
document.getElementById("oneDiamondPrice").innerText = document.getElementById("oneDiamondPrice").innerText.replace("#", oneDiamondPrice);

let twoDiamond = document.getElementById("twoDiamond");
twoDiamond.style.display = "none";
twoDiamond.showing = false;
twoDiamond.ranking = 2;
twoDiamond.tier = 2;
twoDiamond.materialRanking = 9;
twoDiamond.bought = false;
autoclickers.push(twoDiamond);
document.getElementById("twoDiamondPrice").innerText = document.getElementById("twoDiamondPrice").innerText.replace("#", twoDiamondPrice);

let threeDiamond = document.getElementById("threeDiamond");
threeDiamond.style.display = "none";
threeDiamond.showing = false;
threeDiamond.ranking = 5;
threeDiamond.tier = 3;
threeDiamond.materialRanking = 9;
threeDiamond.bought = false;
autoclickers.push(threeDiamond);
document.getElementById("threeDiamondPrice").innerText = document.getElementById("threeDiamondPrice").innerText.replace("#", threeDiamondPrice);

let fourDiamond = document.getElementById("fourDiamond");
fourDiamond.style.display = "none";
fourDiamond.showing = false;
fourDiamond.ranking = 7;
fourDiamond.tier = 4;
fourDiamond.materialRanking = 9;
fourDiamond.bought = false;
autoclickers.push(fourDiamond);
document.getElementById("fourDiamondPrice").innerText = document.getElementById("fourDiamondPrice").innerText.replace("#", fourDiamondPrice);

let fiveDirt = document.getElementById("fiveDirt");
fiveDirt.style.display = "none";
fiveDirt.showing = false;
fiveDirt.ranking = 9;
fiveDirt.tier = 5;
fiveDirt.materialRanking = 0;
fiveDirt.bought = false;
autoclickers.push(fiveDirt);
document.getElementById("fiveDirtPrice").innerText = document.getElementById("fiveDirtPrice").innerText.replace("#", fiveDirtPrice);

let fiveWood = document.getElementById("fiveWood");
fiveWood.style.display = "none";
fiveWood.showing = false;
fiveWood.ranking = 9;
fiveWood.tier = 5;
fiveWood.materialRanking = 1;
fiveWood.bought = false;
autoclickers.push(fiveWood);
document.getElementById("fiveWoodPrice").innerText = document.getElementById("fiveWoodPrice").innerText.replace("#", fiveWoodPrice);

let fiveStone = document.getElementById("fiveStone");
fiveStone.style.display = "none";
fiveStone.showing = false;
fiveStone.ranking = 9;
fiveStone.tier = 5;
fiveStone.materialRanking = 2;
fiveStone.bought = false;
autoclickers.push(fiveStone);
document.getElementById("fiveStonePrice").innerText = document.getElementById("fiveStonePrice").innerText.replace("#", fiveStonePrice);

let fivePStone = document.getElementById("fivePStone");
fivePStone.style.display = "none";
fivePStone.showing = false;
fivePStone.ranking = 9;
fivePStone.tier = 5;
fivePStone.materialRanking = 3;
fivePStone.bought = false;
autoclickers.push(fivePStone);
document.getElementById("fivePStonePrice").innerText = document.getElementById("fivePStonePrice").innerText.replace("#", fivePStonePrice);

let fivePlant = document.getElementById("fivePlant");
fivePlant.style.display = "none";
fivePlant.showing = false;
fivePlant.ranking = 9;
fivePlant.tier = 5;
fivePlant.materialRanking = 4;
fivePlant.bought = false;
autoclickers.push(fivePlant);
document.getElementById("fivePlantPrice").innerText = document.getElementById("fivePlantPrice").innerText.replace("#", fivePlantPrice);

let fiveGold = document.getElementById("fiveGold");
fiveGold.style.display = "none";
fiveGold.showing = false;
fiveGold.ranking = 9;
fiveGold.tier = 5;
fiveGold.materialRanking = 5;
fiveGold.bought = false;
autoclickers.push(fiveGold);
document.getElementById("fiveGoldPrice").innerText = document.getElementById("fiveGoldPrice").innerText.replace("#", fiveGoldPrice);

let fiveCopper = document.getElementById("fiveCopper");
fiveCopper.style.display = "none";
fiveCopper.showing = false;
fiveCopper.ranking = 9;
fiveCopper.tier = 5;
fiveCopper.materialRanking = 6;
fiveCopper.bought = false;
autoclickers.push(fiveCopper);
document.getElementById("fiveCopperPrice").innerText = document.getElementById("fiveCopperPrice").innerText.replace("#", fiveCopperPrice);

let fiveIron = document.getElementById("fiveIron");
fiveIron.style.display = "none";
fiveIron.showing = false;
fiveIron.ranking = 9;
fiveIron.tier = 5;
fiveIron.materialRanking = 7;
fiveIron.bought = false;
autoclickers.push(fiveIron);
document.getElementById("fiveIronPrice").innerText = document.getElementById("fiveIronPrice").innerText.replace("#", fiveIronPrice);

let fiveRedstone = document.getElementById("fiveRedstone");
fiveRedstone.style.display = "none";
fiveRedstone.showing = false;
fiveRedstone.ranking = 9;
fiveRedstone.tier = 5;
fiveRedstone.materialRanking = 8;
fiveRedstone.bought = false;
autoclickers.push(fiveRedstone);
document.getElementById("fiveRedstonePrice").innerText = document.getElementById("fiveRedstonePrice").innerText.replace("#", fiveRedstonePrice);

let fiveDiamond = document.getElementById("fiveDiamond");
fiveDiamond.style.display = "none";
fiveDiamond.showing = false;
fiveDiamond.ranking = 9;
fiveDiamond.tier = 5;
fiveDiamond.materialRanking = 9;
fiveDiamond.bought = false;
autoclickers.push(fiveDiamond);
document.getElementById("fiveDiamondPrice").innerText = document.getElementById("fiveDiamondPrice").innerText.replace("#", fiveDiamondPrice);


let oneEmerald = document.getElementById("oneEmerald");
oneEmerald.style.display = "none";
oneEmerald.showing = false;
oneEmerald.ranking = 1;
oneEmerald.tier = 1;
oneEmerald.materialRanking = 10;
oneEmerald.bought = false;
autoclickers.push(oneEmerald);
document.getElementById("oneEmeraldPrice").innerText = document.getElementById("oneEmeraldPrice").innerText.replace("#", oneEmeraldPrice);

let twoEmerald = document.getElementById("twoEmerald");
twoEmerald.style.display = "none";
twoEmerald.showing = false;
twoEmerald.ranking = 2;
twoEmerald.tier = 2;
twoEmerald.materialRanking = 10;
twoEmerald.bought = false;
autoclickers.push(twoEmerald);
document.getElementById("twoEmeraldPrice").innerText = document.getElementById("twoEmeraldPrice").innerText.replace("#", twoEmeraldPrice);

let threeEmerald = document.getElementById("threeEmerald");
threeEmerald.style.display = "none";
threeEmerald.showing = false;
threeEmerald.ranking = 5;
threeEmerald.tier = 3;
threeEmerald.materialRanking = 10;
threeEmerald.bought = false;
autoclickers.push(threeEmerald);
document.getElementById("threeEmeraldPrice").innerText = document.getElementById("threeEmeraldPrice").innerText.replace("#", threeEmeraldPrice);

let fourEmerald = document.getElementById("fourEmerald");
fourEmerald.style.display = "none";
fourEmerald.showing = false;
fourEmerald.ranking = 7;
fourEmerald.tier = 4;
fourEmerald.materialRanking = 10;
fourEmerald.bought = false;
autoclickers.push(fourEmerald);
document.getElementById("fourEmeraldPrice").innerText = document.getElementById("fourEmeraldPrice").innerText.replace("#", fourEmeraldPrice);

let fiveEmerald = document.getElementById("fiveEmerald");
fiveEmerald.style.display = "none";
fiveEmerald.showing = false;
fiveEmerald.ranking = 9;
fiveEmerald.tier = 5;
fiveEmerald.materialRanking = 10;
fiveEmerald.bought = false;
autoclickers.push(fiveEmerald);
document.getElementById("fiveEmeraldPrice").innerText = document.getElementById("fiveEmeraldPrice").innerText.replace("#", fiveEmeraldPrice);


let oneObsidian = document.getElementById("oneObsidian");
oneObsidian.style.display = "none";
oneObsidian.showing = false;
oneObsidian.ranking = 1;
oneObsidian.tier = 1;
oneObsidian.materialRanking = 11;
oneObsidian.bought = false;
autoclickers.push(oneObsidian);
document.getElementById("oneObsidianPrice").innerText = document.getElementById("oneObsidianPrice").innerText.replace("#", oneObsidianPrice);

let twoObsidian = document.getElementById("twoObsidian");
twoObsidian.style.display = "none";
twoObsidian.showing = false;
twoObsidian.ranking = 2;
twoObsidian.tier = 2;
twoObsidian.materialRanking = 11;
twoObsidian.bought = false;
autoclickers.push(twoObsidian);
document.getElementById("twoObsidianPrice").innerText = document.getElementById("twoObsidianPrice").innerText.replace("#", twoObsidianPrice);

let threeObsidian = document.getElementById("threeObsidian");
threeObsidian.style.display = "none";
threeObsidian.showing = false;
threeObsidian.ranking = 5;
threeObsidian.tier = 3;
threeObsidian.materialRanking = 11;
threeObsidian.bought = false;
autoclickers.push(threeObsidian);
document.getElementById("threeObsidianPrice").innerText = document.getElementById("threeObsidianPrice").innerText.replace("#", threeObsidianPrice);

let fourObsidian = document.getElementById("fourObsidian");
fourObsidian.style.display = "none";
fourObsidian.showing = false;
fourObsidian.ranking = 7;
fourObsidian.tier = 4;
fourObsidian.materialRanking = 11;
fourObsidian.bought = false;
autoclickers.push(fourObsidian);
document.getElementById("fourObsidianPrice").innerText = document.getElementById("fourObsidianPrice").innerText.replace("#", fourObsidianPrice);

let fiveObsidian = document.getElementById("fiveObsidian");
fiveObsidian.style.display = "none";
fiveObsidian.showing = false;
fiveObsidian.ranking = 9;
fiveObsidian.tier = 5;
fiveObsidian.materialRanking = 11;
fiveObsidian.bought = false;
autoclickers.push(fiveObsidian);
document.getElementById("fiveObsidianPrice").innerText = document.getElementById("fiveObsidianPrice").innerText.replace("#", fiveObsidianPrice);


let oneNetherite = document.getElementById("oneNetherite");
oneNetherite.style.display = "none";
oneNetherite.showing = false;
oneNetherite.ranking = 1;
oneNetherite.tier = 1;
oneNetherite.materialRanking = 12;
oneNetherite.bought = false;
autoclickers.push(oneNetherite);
document.getElementById("oneNetheritePrice").innerText = document.getElementById("oneNetheritePrice").innerText.replace("#", oneNetheritePrice);

let twoNetherite = document.getElementById("twoNetherite");
twoNetherite.style.display = "none";
twoNetherite.showing = false;
twoNetherite.ranking = 2;
twoNetherite.tier = 2;
twoNetherite.materialRanking = 12;
twoNetherite.bought = false;
autoclickers.push(twoNetherite);
document.getElementById("twoNetheritePrice").innerText = document.getElementById("twoNetheritePrice").innerText.replace("#", twoNetheritePrice);

let threeNetherite = document.getElementById("threeNetherite");
threeNetherite.style.display = "none";
threeNetherite.showing = false;
threeNetherite.ranking = 5;
threeNetherite.tier = 3;
threeNetherite.materialRanking = 12;
threeNetherite.bought = false;
autoclickers.push(threeNetherite);
document.getElementById("threeNetheritePrice").innerText = document.getElementById("threeNetheritePrice").innerText.replace("#", threeNetheritePrice);

let fourNetherite = document.getElementById("fourNetherite");
fourNetherite.style.display = "none";
fourNetherite.showing = false;
fourNetherite.ranking = 7;
fourNetherite.tier = 4;
fourNetherite.materialRanking = 12;
fourNetherite.bought = false;
autoclickers.push(fourNetherite);
document.getElementById("fourNetheritePrice").innerText = document.getElementById("fourNetheritePrice").innerText.replace("#", fourNetheritePrice);

let fiveNetherite = document.getElementById("fiveNetherite");
fiveNetherite.style.display = "none";
fiveNetherite.showing = false;
fiveNetherite.ranking = 9;
fiveNetherite.tier = 5;
fiveNetherite.materialRanking = 12;
fiveNetherite.bought = false;
autoclickers.push(fiveNetherite);
document.getElementById("fiveNetheritePrice").innerText = document.getElementById("fiveNetheritePrice").innerText.replace("#", fiveNetheritePrice);

let sixDirt = document.getElementById("sixDirt");
sixDirt.style.display = "none";
sixDirt.showing = false;
sixDirt.ranking = 12;
sixDirt.tier = 6;
sixDirt.materialRanking = 0;
sixDirt.bought = false;
autoclickers.push(sixDirt);
document.getElementById("sixDirtPrice").innerText = document.getElementById("sixDirtPrice").innerText.replace("#", sixDirtPrice);

let sixWood = document.getElementById("sixWood");
sixWood.style.display = "none";
sixWood.showing = false;
sixWood.ranking = 12;
sixWood.tier = 6;
sixWood.materialRanking = 1;
sixWood.bought = false;
autoclickers.push(sixWood);
document.getElementById("sixWoodPrice").innerText = document.getElementById("sixWoodPrice").innerText.replace("#", sixWoodPrice);

let sixStone = document.getElementById("sixStone");
sixStone.style.display = "none";
sixStone.showing = false;
sixStone.ranking = 12;
sixStone.tier = 6;
sixStone.materialRanking = 2;
sixStone.bought = false;
autoclickers.push(sixStone);
document.getElementById("sixStonePrice").innerText = document.getElementById("sixStonePrice").innerText.replace("#", sixStonePrice);

let sixPStone = document.getElementById("sixPStone");
sixPStone.style.display = "none";
sixPStone.showing = false;
sixPStone.ranking = 12;
sixPStone.tier = 6;
sixPStone.materialRanking = 3;
sixPStone.bought = false;
autoclickers.push(sixPStone);
document.getElementById("sixPStonePrice").innerText = document.getElementById("sixPStonePrice").innerText.replace("#", sixPStonePrice);

let sixPlant = document.getElementById("sixPlant");
sixPlant.style.display = "none";
sixPlant.showing = false;
sixPlant.ranking = 12;
sixPlant.tier = 6;
sixPlant.materialRanking = 4;
sixPlant.bought = false;
autoclickers.push(sixPlant);
document.getElementById("sixPlantPrice").innerText = document.getElementById("sixPlantPrice").innerText.replace("#", sixPlantPrice);

let sixGold = document.getElementById("sixGold");
sixGold.style.display = "none";
sixGold.showing = false;
sixGold.ranking = 12;
sixGold.tier = 6;
sixGold.materialRanking = 5;
sixGold.bought = false;
autoclickers.push(sixGold);
document.getElementById("sixGoldPrice").innerText = document.getElementById("sixGoldPrice").innerText.replace("#", sixGoldPrice);

let sixCopper = document.getElementById("sixCopper");
sixCopper.style.display = "none";
sixCopper.showing = false;
sixCopper.ranking = 12;
sixCopper.tier = 6;
sixCopper.materialRanking = 6;
sixCopper.bought = false;
autoclickers.push(sixCopper);
document.getElementById("sixCopperPrice").innerText = document.getElementById("sixCopperPrice").innerText.replace("#", sixCopperPrice);

let sixIron = document.getElementById("sixIron");
sixIron.style.display = "none";
sixIron.showing = false;
sixIron.ranking = 12;
sixIron.tier = 6;
sixIron.materialRanking = 7;
sixIron.bought = false;
autoclickers.push(sixIron);
document.getElementById("sixIronPrice").innerText = document.getElementById("sixIronPrice").innerText.replace("#", sixIronPrice);

let sixRedstone = document.getElementById("sixRedstone");
sixRedstone.style.display = "none";
sixRedstone.showing = false;
sixRedstone.ranking = 12;
sixRedstone.tier = 6;
sixRedstone.materialRanking = 8;
sixRedstone.bought = false;
autoclickers.push(sixRedstone);
document.getElementById("sixRedstonePrice").innerText = document.getElementById("sixRedstonePrice").innerText.replace("#", sixRedstonePrice);

let sixDiamond = document.getElementById("sixDiamond");
sixDiamond.style.display = "none";
sixDiamond.showing = false;
sixDiamond.ranking = 12;
sixDiamond.tier = 6;
sixDiamond.materialRanking = 9;
sixDiamond.bought = false;
autoclickers.push(sixDiamond);
document.getElementById("sixDiamondPrice").innerText = document.getElementById("sixDiamondPrice").innerText.replace("#", sixDiamondPrice);

let sixEmerald = document.getElementById("sixEmerald");
sixEmerald.style.display = "none";
sixEmerald.showing = false;
sixEmerald.ranking = 12;
sixEmerald.tier = 6;
sixEmerald.materialRanking = 10;
sixEmerald.bought = false;
autoclickers.push(sixEmerald);
document.getElementById("sixEmeraldPrice").innerText = document.getElementById("sixEmeraldPrice").innerText.replace("#", sixEmeraldPrice);

let sixObsidian = document.getElementById("sixObsidian");
sixObsidian.style.display = "none";
sixObsidian.showing = false;
sixObsidian.ranking = 12;
sixObsidian.tier = 6;
sixObsidian.materialRanking = 11;
sixObsidian.bought = false;
autoclickers.push(sixObsidian);
document.getElementById("sixObsidianPrice").innerText = document.getElementById("sixObsidianPrice").innerText.replace("#", sixObsidianPrice);

let sixNetherite = document.getElementById("sixNetherite");
sixNetherite.style.display = "none";
sixNetherite.showing = false;
sixNetherite.ranking = 12;
sixNetherite.tier = 6;
sixNetherite.materialRanking = 12;
sixNetherite.bought = false;
autoclickers.push(sixNetherite);
document.getElementById("sixNetheritePrice").innerText = document.getElementById("sixNetheritePrice").innerText.replace("#", sixNetheritePrice);
//#endregion

//#region array of autoclicker buttons (unlock order)
let oneDirtButton = document.getElementById("oneDirtButton");
oneDirtButton.price = oneDirtPrice;
oneDirtButton.seconds = oneDirtSeconds;
acButtons.push(oneDirtButton);

let oneWoodButton = document.getElementById("oneWoodButton");
oneWoodButton.price = oneWoodPrice;
oneWoodButton.seconds = oneWoodSeconds;
acButtons.push(oneWoodButton);


let oneStoneButton = document.getElementById("oneStoneButton");
oneStoneButton.price = oneStonePrice;
oneStoneButton.seconds = oneStoneSeconds;
acButtons.push(oneStoneButton);

let twoDirtButton = document.getElementById("twoDirtButton");
twoDirtButton.price = twoDirtPrice;
twoDirtButton.seconds = twoDirtSeconds;
acButtons.push(twoDirtButton);

let twoWoodButton = document.getElementById("twoWoodButton");
twoWoodButton.price = twoWoodPrice;
twoWoodButton.seconds = twoWoodSeconds;
acButtons.push(twoWoodButton);

let twoStoneButton = document.getElementById("twoStoneButton");
twoStoneButton.price = twoStonePrice;
twoStoneButton.seconds = twoStoneSeconds;
acButtons.push(twoStoneButton);


let onePStoneButton = document.getElementById("onePStoneButton");
onePStoneButton.price = onePStonePrice;
onePStoneButton.seconds = onePStoneSeconds;
acButtons.push(onePStoneButton);

let twoPStoneButton = document.getElementById("twoPStoneButton");
twoPStoneButton.price = twoPStonePrice;
twoPStoneButton.seconds = twoPStoneSeconds;
acButtons.push(twoPStoneButton);


let onePlantButton = document.getElementById("onePlantButton");
onePlantButton.price = onePlantPrice;
onePlantButton.seconds = onePlantSeconds;
acButtons.push(onePlantButton);

let twoPlantButton = document.getElementById("twoPlantButton");
twoPlantButton.price = twoPlantPrice;
twoPlantButton.seconds = twoPlantSeconds;
acButtons.push(twoPlantButton);


let oneGoldButton = document.getElementById("oneGoldButton");
oneGoldButton.price = oneGoldPrice;
oneGoldButton.seconds = oneGoldSeconds;
acButtons.push(oneGoldButton);

let twoGoldButton = document.getElementById("twoGoldButton");
twoGoldButton.price = twoGoldPrice;
twoGoldButton.seconds = twoGoldSeconds;
acButtons.push(twoGoldButton);

let threeDirtButton = document.getElementById("threeDirtButton");
threeDirtButton.price = threeDirtPrice;
threeDirtButton.seconds = threeDirtSeconds;
acButtons.push(threeDirtButton);

let threeWoodButton = document.getElementById("threeWoodButton");
threeWoodButton.price = threeWoodPrice;
threeWoodButton.seconds = threeWoodSeconds;
acButtons.push(threeWoodButton);

let threeStoneButton = document.getElementById("threeStoneButton");
threeStoneButton.price = threeStonePrice;
threeStoneButton.seconds = threeStoneSeconds;
acButtons.push(threeStoneButton);

let threePStoneButton = document.getElementById("threePStoneButton");
threePStoneButton.price = threePStonePrice;
threePStoneButton.seconds = threePStoneSeconds;
acButtons.push(threePStoneButton);

let threePlantButton = document.getElementById("threePlantButton");
threePlantButton.price = threePlantPrice;
threePlantButton.seconds = threePlantSeconds;
acButtons.push(threePlantButton);

let threeGoldButton = document.getElementById("threeGoldButton");
threeGoldButton.price = threeGoldPrice;
threeGoldButton.seconds = threeGoldSeconds;
acButtons.push(threeGoldButton);


let oneCopperButton = document.getElementById("oneCopperButton");
oneCopperButton.price = oneCopperPrice;
oneCopperButton.seconds = oneCopperSeconds;
acButtons.push(oneCopperButton);

let twoCopperButton = document.getElementById("twoCopperButton");
twoCopperButton.price = twoCopperPrice;
twoCopperButton.seconds = twoCopperSeconds;
acButtons.push(twoCopperButton);

let threeCopperButton = document.getElementById("threeCopperButton");
threeCopperButton.price = threeCopperPrice;
threeCopperButton.seconds = threeCopperSeconds;
acButtons.push(threeCopperButton);


let oneIronButton = document.getElementById("oneIronButton");
oneIronButton.price = oneIronPrice;
oneIronButton.seconds = oneIronSeconds;
acButtons.push(oneIronButton);

let twoIronButton = document.getElementById("twoIronButton");
twoIronButton.price = twoIronPrice;
twoIronButton.seconds = twoIronSeconds;
acButtons.push(twoIronButton);

let threeIronButton = document.getElementById("threeIronButton");
threeIronButton.price = threeIronPrice;
threeIronButton.seconds = threeIronSeconds;
acButtons.push(threeIronButton);

let fourDirtButton = document.getElementById("fourDirtButton");
fourDirtButton.price = fourDirtPrice;
fourDirtButton.seconds = fourDirtSeconds;
acButtons.push(fourDirtButton);

let fourWoodButton = document.getElementById("fourWoodButton");
fourWoodButton.price = fourWoodPrice;
fourWoodButton.seconds = fourWoodSeconds;
acButtons.push(fourWoodButton);

let fourStoneButton = document.getElementById("fourStoneButton");
fourStoneButton.price = fourStonePrice;
fourStoneButton.seconds = fourStoneSeconds;
acButtons.push(fourStoneButton);

let fourPStoneButton = document.getElementById("fourPStoneButton");
fourPStoneButton.price = fourPStonePrice;
fourPStoneButton.seconds = fourPStoneSeconds;
acButtons.push(fourPStoneButton);

let fourPlantButton = document.getElementById("fourPlantButton");
fourPlantButton.price = fourPlantPrice;
fourPlantButton.seconds = fourPlantSeconds;
acButtons.push(fourPlantButton);

let fourGoldButton = document.getElementById("fourGoldButton");
fourGoldButton.price = fourGoldPrice;
fourGoldButton.seconds = fourGoldSeconds;
acButtons.push(fourGoldButton);

let fourCopperButton = document.getElementById("fourCopperButton");
fourCopperButton.price = fourCopperPrice;
fourCopperButton.seconds = fourCopperSeconds;
acButtons.push(fourCopperButton);

let fourIronButton = document.getElementById("fourIronButton");
fourIronButton.price = fourIronPrice;
fourIronButton.seconds = fourIronSeconds;
acButtons.push(fourIronButton);


let oneRedstoneButton = document.getElementById("oneRedstoneButton");
oneRedstoneButton.price = oneRedstonePrice;
oneRedstoneButton.seconds = oneRedstoneSeconds;
acButtons.push(oneRedstoneButton);

let twoRedstoneButton = document.getElementById("twoRedstoneButton");
twoRedstoneButton.price = twoRedstonePrice;
twoRedstoneButton.seconds = twoRedstoneSeconds;
acButtons.push(twoRedstoneButton);

let threeRedstoneButton = document.getElementById("threeRedstoneButton");
threeRedstoneButton.price = threeRedstonePrice;
threeRedstoneButton.seconds = threeRedstoneSeconds;
acButtons.push(threeRedstoneButton);

let fourRedstoneButton = document.getElementById("fourRedstoneButton");
fourRedstoneButton.price = fourRedstonePrice;
fourRedstoneButton.seconds = fourRedstoneSeconds;
acButtons.push(fourRedstoneButton);


let oneDiamondButton = document.getElementById("oneDiamondButton");
oneDiamondButton.price = oneDiamondPrice;
oneDiamondButton.seconds = oneDiamondSeconds;
acButtons.push(oneDiamondButton);

let twoDiamondButton = document.getElementById("twoDiamondButton");
twoDiamondButton.price = twoDiamondPrice;
twoDiamondButton.seconds = twoDiamondSeconds;
acButtons.push(twoDiamondButton);

let threeDiamondButton = document.getElementById("threeDiamondButton");
threeDiamondButton.price = threeDiamondPrice;
threeDiamondButton.seconds = threeDiamondSeconds;
acButtons.push(threeDiamondButton);

let fourDiamondButton = document.getElementById("fourDiamondButton");
fourDiamondButton.price = fourDiamondPrice;
fourDiamondButton.seconds = fourDiamondSeconds;
acButtons.push(fourDiamondButton);

let fiveDirtButton = document.getElementById("fiveDirtButton");
fiveDirtButton.price = fiveDirtPrice;
fiveDirtButton.seconds = fiveDirtSeconds;
acButtons.push(fiveDirtButton);

let fiveWoodButton = document.getElementById("fiveWoodButton");
fiveWoodButton.price = fiveWoodPrice;
fiveWoodButton.seconds = fiveWoodSeconds;
acButtons.push(fiveWoodButton);

let fiveStoneButton = document.getElementById("fiveStoneButton");
fiveStoneButton.price = fiveStonePrice;
fiveStoneButton.seconds = fiveStoneSeconds;
acButtons.push(fiveStoneButton);

let fivePStoneButton = document.getElementById("fivePStoneButton");
fivePStoneButton.price = fivePStonePrice;
fivePStoneButton.seconds = fivePStoneSeconds;
acButtons.push(fivePStoneButton);

let fivePlantButton = document.getElementById("fivePlantButton");
fivePlantButton.price = fivePlantPrice;
fivePlantButton.seconds = fivePlantSeconds;
acButtons.push(fivePlantButton);

let fiveGoldButton = document.getElementById("fiveGoldButton");
fiveGoldButton.price = fiveGoldPrice;
fiveGoldButton.seconds = fiveGoldSeconds;
acButtons.push(fiveGoldButton);

let fiveCopperButton = document.getElementById("fiveCopperButton");
fiveCopperButton.price = fiveCopperPrice;
fiveCopperButton.seconds = fiveCopperSeconds;
acButtons.push(fiveCopperButton);

let fiveIronButton = document.getElementById("fiveIronButton");
fiveIronButton.price = fiveIronPrice;
fiveIronButton.seconds = fiveIronSeconds;
acButtons.push(fiveIronButton);

let fiveRedstoneButton = document.getElementById("fiveRedstoneButton");
fiveRedstoneButton.price = fiveRedstonePrice;
fiveRedstoneButton.seconds = fiveRedstoneSeconds;
acButtons.push(fiveRedstoneButton);

let fiveDiamondButton = document.getElementById("fiveDiamondButton");
fiveDiamondButton.price = fiveDiamondPrice;
fiveDiamondButton.seconds = fiveDiamondSeconds;
acButtons.push(fiveDiamondButton);


let oneEmeraldButton = document.getElementById("oneEmeraldButton");
oneEmeraldButton.price = oneEmeraldPrice;
oneEmeraldButton.seconds = oneEmeraldSeconds;
acButtons.push(oneEmeraldButton);

let twoEmeraldButton = document.getElementById("twoEmeraldButton");
twoEmeraldButton.price = twoEmeraldPrice;
twoEmeraldButton.seconds = twoEmeraldSeconds;
acButtons.push(twoEmeraldButton);

let threeEmeraldButton = document.getElementById("threeEmeraldButton");
threeEmeraldButton.price = threeEmeraldPrice;
threeEmeraldButton.seconds = threeEmeraldSeconds;
acButtons.push(threeEmeraldButton);

let fourEmeraldButton = document.getElementById("fourEmeraldButton");
fourEmeraldButton.price = fourEmeraldPrice;
fourEmeraldButton.seconds = fourEmeraldSeconds;
acButtons.push(fourEmeraldButton);

let fiveEmeraldButton = document.getElementById("fiveEmeraldButton");
fiveEmeraldButton.price = fiveEmeraldPrice;
fiveEmeraldButton.seconds = fiveEmeraldSeconds;
acButtons.push(fiveEmeraldButton);


let oneObsidianButton = document.getElementById("oneObsidianButton");
oneObsidianButton.price = oneObsidianPrice;
oneObsidianButton.seconds = oneObsidianSeconds;
acButtons.push(oneObsidianButton);

let twoObsidianButton = document.getElementById("twoObsidianButton");
twoObsidianButton.price = twoObsidianPrice;
twoObsidianButton.seconds = twoObsidianSeconds;
acButtons.push(twoObsidianButton);

let threeObsidianButton = document.getElementById("threeObsidianButton");
threeObsidianButton.price = threeObsidianPrice;
threeObsidianButton.seconds = threeObsidianSeconds;
acButtons.push(threeObsidianButton);

let fourObsidianButton = document.getElementById("fourObsidianButton");
fourObsidianButton.price = fourObsidianPrice;
fourObsidianButton.seconds = fourObsidianSeconds;
acButtons.push(fourObsidianButton);

let fiveObsidianButton = document.getElementById("fiveObsidianButton");
fiveObsidianButton.price = fiveObsidianPrice;
fiveObsidianButton.seconds = fiveObsidianSeconds;
acButtons.push(fiveObsidianButton);


let oneNetheriteButton = document.getElementById("oneNetheriteButton");
oneNetheriteButton.price = oneNetheritePrice;
oneNetheriteButton.seconds = oneNetheriteSeconds;
acButtons.push(oneNetheriteButton);

let twoNetheriteButton = document.getElementById("twoNetheriteButton");
twoNetheriteButton.price = twoNetheritePrice;
twoNetheriteButton.seconds = twoNetheriteSeconds;
acButtons.push(twoNetheriteButton);

let threeNetheriteButton = document.getElementById("threeNetheriteButton");
threeNetheriteButton.price = threeNetheritePrice;
threeNetheriteButton.seconds = threeNetheriteSeconds;
acButtons.push(threeNetheriteButton);

let fourNetheriteButton = document.getElementById("fourNetheriteButton");
fourNetheriteButton.price = fourNetheritePrice;
fourNetheriteButton.seconds = fourNetheriteSeconds;
acButtons.push(fourNetheriteButton);

let fiveNetheriteButton = document.getElementById("fiveNetheriteButton");
fiveNetheriteButton.price = fiveNetheritePrice;
fiveNetheriteButton.seconds = fiveNetheriteSeconds;
acButtons.push(fiveNetheriteButton);

let sixDirtButton = document.getElementById("sixDirtButton");
sixDirtButton.price = sixDirtPrice;
sixDirtButton.seconds = sixDirtSeconds;
acButtons.push(sixDirtButton);

let sixWoodButton = document.getElementById("sixWoodButton");
sixWoodButton.price = sixWoodPrice;
sixWoodButton.seconds = sixWoodSeconds;
acButtons.push(sixWoodButton);

let sixStoneButton = document.getElementById("sixStoneButton");
sixStoneButton.price = sixStonePrice;
sixStoneButton.seconds = sixStoneSeconds;
acButtons.push(sixStoneButton);

let sixPStoneButton = document.getElementById("sixPStoneButton");
sixPStoneButton.price = sixPStonePrice;
sixPStoneButton.seconds = sixPStoneSeconds;
acButtons.push(sixPStoneButton);

let sixPlantButton = document.getElementById("sixPlantButton");
sixPlantButton.price = sixPlantPrice;
sixPlantButton.seconds = sixPlantSeconds;
acButtons.push(sixPlantButton);

let sixGoldButton = document.getElementById("sixGoldButton");
sixGoldButton.price = sixGoldPrice;
sixGoldButton.seconds = sixGoldSeconds;
acButtons.push(sixGoldButton);

let sixCopperButton = document.getElementById("sixCopperButton");
sixCopperButton.price = sixCopperPrice;
sixCopperButton.seconds = sixCopperSeconds;
acButtons.push(sixCopperButton);

let sixIronButton = document.getElementById("sixIronButton");
sixIronButton.price = sixIronPrice;
sixIronButton.seconds = sixIronSeconds;
acButtons.push(sixIronButton);

let sixRedstoneButton = document.getElementById("sixRedstoneButton");
sixRedstoneButton.price = sixRedstonePrice;
sixRedstoneButton.seconds = sixRedstoneSeconds;
acButtons.push(sixRedstoneButton);

let sixDiamondButton = document.getElementById("sixDiamondButton");
sixDiamondButton.price = sixDiamondPrice;
sixDiamondButton.seconds = sixDiamondSeconds;
acButtons.push(sixDiamondButton);

let sixEmeraldButton = document.getElementById("sixEmeraldButton");
sixEmeraldButton.price = sixEmeraldPrice;
sixEmeraldButton.seconds = sixEmeraldSeconds;
acButtons.push(sixEmeraldButton);

let sixObsidianButton = document.getElementById("sixObsidianButton");
sixObsidianButton.price = sixObsidianPrice;
sixObsidianButton.seconds = sixObsidianSeconds;
acButtons.push(sixObsidianButton);

let sixNetheriteButton = document.getElementById("sixNetheriteButton");
sixNetheriteButton.price = sixNetheritePrice;
sixNetheriteButton.seconds = sixNetheriteSeconds;
acButtons.push(sixNetheriteButton);
//#endregion
