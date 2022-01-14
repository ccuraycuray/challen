import { expect } from "chai";
import { GildedRose } from "../app/gilded-rose"

describe("Calculator function", () => {
    describe("Validate cases", () => {
        it("Case  One increment 3", () => {
            const item = [{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 3, quality: 8 }]
            const result = new GildedRose(item);

            expect(result.updateQuality()).to.eql([{
                name: 'Backstage passes to a TAFKAL80ETC concert',
                quality: 14,
                sellIn: 2
            }
            ])

        })
        it("Case  Two increment 2", () => {
            const item = [{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 7, quality: 8 }]
            const result = new GildedRose(item);

            expect(result.updateQuality()).to.eql([{
                name: 'Backstage passes to a TAFKAL80ETC concert',
                quality: 11,
                sellIn: 6
            }
            ])

        })
        it("Case  Tree sellIn 0'", () => {
            const item = [{ name: 'Bellowns', sellIn: 0, quality: 10 }]
            const result = new GildedRose(item);

            expect(result.updateQuality()).to.eql([{
                name: 'Bellowns',
                sellIn: 0,
                quality: 8
            }
            ])

        })

    })
})