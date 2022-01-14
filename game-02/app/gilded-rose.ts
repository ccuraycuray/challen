import {
    AgedBrie,
    Concert,
    Sulfuras,
    Conjured,
    OtherItem
} from './functionsUpdate'
export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        const muteItems = this.items.map(element => {
            switch (element.name) {
                case 'Aged Brie': {
                    element = AgedBrie(element);
                    return element;
                    break;
                }
                case 'Backstage passes to a TAFKAL80ETC concert': {
                    element = Concert(element);
                    return element;
                    break;
                }
                case 'Sulfuras, Hand of Ragnaros': {
                    element = Sulfuras(element);
                    return element;
                    break;
                }
                case 'Conjured': {
                    element = Conjured(element);
                    return element;
                    break;
                }
                default: {
                    element = OtherItem(element);
                    return element;
                }
            }
        });
        return muteItems;
    }
}
