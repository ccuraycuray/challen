import { Item } from "./gilded-rose"

const minQuality = 0
const maxQuality = 50


const maxQualityFunc = quality => quality < maxQuality
const suprQualityFunc = quality => quality > minQuality

const addQuality = (quality, val: number = 1) => maxQualityFunc(quality) ? quality + val : quality
const suprQuality = quality => suprQualityFunc(quality) ? quality - 1 : quality

export const AgedBrie = (item): Item => {
    item.quality = addQuality(item.quality)
    item.quality = item.sellIn < 0 ? addQuality(item.quality) : item.quality;
    item.sellIn -= 1;

    return item;
}

const addConcert = (item: Item): number => {
    let quality = addQuality(item.quality);
    quality = item.sellIn < 11 ? addQuality(quality, 2) : quality;
    quality = item.sellIn < 6 ? addQuality(quality, 3) : quality;

    return quality;
}

export const Concert = (item): Item => {
    item.quality = item.sellIn === 0 ? 0 : addConcert(item);
    item.sellIn = item.sellIn - 1;

    return item;
}
// revisar que este metodo no pase de 80
export const Sulfuras = (item): Item => {
    item.quality = 80;
    return item;
}
const updateItem = (item): Item => {
    item.quality = suprQuality(item.quality);
    item.quality = item.sellIn <= 0 ? suprQuality(item.quality) : item.quality;

    return item;
};

export const OtherItem = (item): Item => {
    item = updateItem(item);
    item.sellIn = item.sellIn <= 0 ? 0 : item.sellIn - 1;

    return item;
};

export const Conjured = (item): Item => {
    item.sellIn == 5 ? item.quality = item.quality - 3 : item = updateItem(item); // nose si este bien verificar
    item.sellIn = item.sellIn - 1;

    return item;
}
