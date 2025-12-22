
import { test, expect } from '@playwright/test'
import { AutomationPracticeFormPage } from '../pages/automation.practice.form.page.mts'

test.describe('Automate automation proactise form test cases ', () => {

    test('Submit the Student form', async ({ page }) => {
        const fillFormPage = new AutomationPracticeFormPage(page)

        
    })
})


