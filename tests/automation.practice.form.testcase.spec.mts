
import { test, expect } from '@playwright/test'
import { AutomationPracticeFormPage } from '../pages/automation.practice.form.page.mts'

test.describe('Automate automation proactise form test cases ', () => {

    test('Submit the Student form', async ({ page }) => {
        const fillFormPage = new AutomationPracticeFormPage(page)

        await fillFormPage.navigate()
        await fillFormPage.enterFirstName("Playwright")
        await fillFormPage.enterLastName("Typescript")
        await fillFormPage.enterEmail("Playwright.typescript@gmail.com")
        await fillFormPage.clickGenderMale()
        await fillFormPage.enterMobileNumber("9876543210")
        await fillFormPage.selectDOB(2012, "March", 14)
        await fillFormPage.selectAllHobbies()
        await fillFormPage.upoadFile("/Users/satishkumarjaina/Desktop/PlaywrightSessions/playwright.config.ts")
        await fillFormPage.enterCurrentAddress("Hyderabad")
        await fillFormPage.clickSubmit()
    })
})


