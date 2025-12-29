import { Page, Locator } from '@playwright/test'
import { PlayWrightUtils } from './utils.mts'

export class MouseHoverFunc extends PlayWrightUtils{

    private readonly pagepath
    private readonly gachibowliLocationEle
    private readonly aboutUsInNavBarEle
    private readonly historyInNavBarEle
    private readonly historyInHistoryPageEle

    constructor(page: Page){
        super(page)
        this.pagepath = '/'
        this.gachibowliLocationEle = page.getByAltText('Gachibowli')
        this.aboutUsInNavBarEle = page.locator('//ul[@id=\'navbar\']//span[text()=\'About us\']')
        this.historyInNavBarEle = page.locator('(//a[text()=\'History\'])[3]')
        this.historyInHistoryPageEle = page.locator('(//h1[text()=\'History\'])[1]')
    }

    public async navigateto(){
        this.page.goto(this.pagepath, {waitUntil: 'domcontentloaded'})
    }

    public async clickgachibowliLocationEle(){
        await this.gachibowliLocationEle.click()
    }

    public async HoverOveraboutUsInNavBarEle(){
        await this.aboutUsInNavBarEle.hover()
    }

    public async clickhistoryInNavBarEle(){
        await this.historyInNavBarEle.click()
    }

    public async historyInHistoryPageEleExists(): Promise<boolean>{
        return await this.historyInHistoryPageEle.isVisible()
    }
}