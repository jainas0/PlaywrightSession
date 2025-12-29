import  { test, expect } from '@playwright/test'
import { DropabblePage } from '../pages/droppable.page.mts'

test.describe('Verify the dragdrop functionality in demoQA', () => {

    test('Drag Me to Drop Here test case', async({page}) => {
        const ap = new DropabblePage(page)

        await ap.navigateTo()
        await ap.dragDragMeEleToDropHereEle()
    })
})