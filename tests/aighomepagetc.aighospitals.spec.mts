import { test, expect } from '@playwright/test'
import { MouseHoverFunc } from '../pages/aighompage.mts'

test.describe('Verify AigHospital Test cases', () => {
    test('Mouse Hover on to About us', async({ page }) => {

        const mhf = new MouseHoverFunc(page)

        await mhf.navigateto()
        await mhf.clickgachibowliLocationEle()
        await mhf.HoverOveraboutUsInNavBarEle()
        await mhf.clickhistoryInNavBarEle()

        expect(await mhf.historyInHistoryPageEleExists()).toBe(true)
    })
})