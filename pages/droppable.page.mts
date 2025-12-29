import { Page, Locator } from '@playwright/test'
import { PlayWrightUtils } from '../pages/utils.mts'

export class DropabblePage extends PlayWrightUtils{

    private readonly pageUrl
    private readonly dragMeEle
    private readonly dropHereEle

    constructor(page: Page){
        super(page)
        this.pageUrl='/droppable'
        this.dragMeEle = page.getByText('Drag me', { exact: true })
        this.dropHereEle = page.locator('(//div[@id=\'droppable\'])[1]')
    }

    public async navigateTo(){
        await this.page.goto(this.pageUrl, { waitUntil: 'domcontentloaded'})
    }

    public async dragDragMeEleToDropHereEle(){
        await this.dragMeEle.dragTo(this.dropHereEle)
    }   
}