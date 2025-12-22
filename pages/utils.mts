
import type { Page, Locator } from '@playwright/test'

export class PlayWrightUtils {
    
    protected readonly page: Page

    constructor(page: Page){
        this.page = page
    }
    

}