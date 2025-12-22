import { Locator, Page } from '@playwright/test'
import { PlayWrightUtils } from './utils.mts'

export class AutomationPracticeFormPage extends PlayWrightUtils{
    private readonly fNameEle
    private readonly lNameEle
    private readonly eMailEle
    private readonly genderMaleEle
    private readonly MobileNumberEle
    private readonly DOBEle
    private readonly yearEle
    private readonly monthEle
    //private readonly dateEle
    private readonly subjectEle
    //private readonly subjecValuetEle
    private readonly allHobbiesEles
    private readonly chooseBtnEle
    private readonly currentAddressEle
    private readonly stateEle
    private readonly cityEle
    private readonly submitEle
    private readonly pageName = '/automation-practice-form'

    constructor(page: Page){
        super(page)
        this.fNameEle = page.getByPlaceholder('First Name')
        this.lNameEle = page.getByPlaceholder('Last Name')
        this.eMailEle = page.getByPlaceholder('name@example.com')
        this.genderMaleEle = page.locator('//label[@for=\'gender-radio-1\']')
        this.MobileNumberEle = page.getByPlaceholder('Mobile Number')
        this.DOBEle = page.locator('//input[@id=\'dateOfBirthInput\']')
        this.yearEle = page.locator('//select[contains(@class, \'_year-select\')]')
        this.monthEle = page.locator('//select[@class=\'react-datepicker__month-select\']')
        this.subjectEle = page.locator('//div[contains(@class, \'subjects-auto-complete__value-container\')]')
        this.allHobbiesEles = page.locator('//label[contains(@for, \'hobbies-checkbox-\')]').all()
        this.chooseBtnEle = page.locator('//label[@for=\'uploadPicture\']')
        this.currentAddressEle = page.getByPlaceholder('Current Address')
        this.stateEle = page.getByPlaceholder('Select State')
        this.cityEle = page.getByPlaceholder('Select City')
        this.submitEle = page.getByRole('button', {name: 'Submit'})
    }

    public async enterFirstNameEle(firstNameValue: string){
        await this.fNameEle.fill(firstNameValue)
    }

    public async enterLastName(lastNameValue: string){
        await this.lNameEle.fill(lastNameValue)
    }

    public async enterEmail(emailValue: string){
        await this.eMailEle.fill(emailValue)
    }

    public async clickGenderMale(){
        await this.genderMaleEle.click()
    }

    public async enterMobileNumber(mobileNumberValue: string){
        await this.MobileNumberEle.fill(mobileNumberValue)
    }

    public async clickDOB(){
        await this.DOBEle.click()
    }

    public async selectYear(yearValue: number){
        await this.yearEle.selectOption(yearValue.toString())
    }

    public async selectMonth(monthVal: string){
        await this.monthEle.selectOption(monthVal)
    }

    public async selectAllHobbies(){
        for(const hobbyEle of await this.allHobbiesEles){
            await hobbyEle.click()
        }
    }

    public async upoadFile(pathOfFile: string){
        await this.chooseBtnEle.setInputFiles(pathOfFile)
    }

    public async enterCurrentAddress(addressValue: string){
        await this.currentAddressEle.fill(addressValue)
    }

    public async selectState(stateValue: string){
        await this.stateEle.selectOption(stateValue)
    }

    public async selectCity(cityValue: string){
        await this.cityEle.selectOption(cityValue)
    }

    public async clickSubmit(){
        await this.subjectEle.click()
    }
}       




/*

2 syntaxes for rleative xpaths

//tagname[@attributename='attributevalue]

//tagname[contains(@attributename, 'attributevalue')]

//label[contains(@for, 'hobbies-checkbox-')]



//div[contains(@class, 'subjects-auto-complete__value-container')]



*/