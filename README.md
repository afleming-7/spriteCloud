# spriteCloud

Programming test for spriteCloud.

---

# SauceDemo & ReqRes Automation Tests

## 🧪 Overview

This repository contains automated **UI and API tests** for:

- [SauceDemo](https://www.saucedemo.com) – UI tests
- [ReqRes](https://reqres.in/) – API tests

Tests are implemented in **JavaScript** using **Playwright**, with a **Page Object Model (POM)** for UI tests.

---

## 📚 Table of Contents

- [Setup](#️setup)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Reports](#reports)
- [Assumptions](#assumptions)
- [AI Usage](#ai-usage)

---

## ⚙️ Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/<your-username>/sauce-reqres-tests.git
   cd sauce-reqres-tests
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Playwright browsers:**

   ```bash
   npx playwright install --with-deps
   ```

---

## 🗂️ Project Structure

```
sauce-reqres-tests/
├── tests/
│   ├── ui/       # UI test specs
│   └── api/      # API test specs
├── pages/        # Page Object Model classes
├── playwright.config.js
├── .github/workflows/tests.yml  # GitHub Actions pipeline
├── package.json
└── README.md
```

---

## ▶️ Running Tests

1. **Run all tests:**

   ```bash
   npx playwright test
   ```

2. **Run a single test file:**

   ```bash
   npx playwright test tests/ui/checkout.spec.js
   ```

3. **Run tests with report generation:**

   ```bash
   npx playwright test --reporter=line,allure-playwright
   npx allure generate ./allure-results --clean -o ./allure-report
   npx allure open ./allure-report
   ```

---

## 📊 Reports

- **Allure** is used for reporting.
- Reports include:
  - Screenshots for UI tests
  - Logs
  - API responses
- GitHub Actions workflow is configured to run tests automatically on push or pull requests.

---

## 📌 Assumptions

- SauceDemo credentials: `standard_user / secret_sauce`
- Checkout total price and item prices are based on current website data.
- API requests use the public [ReqRes](https://reqres.in/) endpoints.
- Maximum delay for delayed request test is **3 seconds**.

---

## 🤖 AI Usage

- Some test skeletons, project structure, and this documentation were generated with **OpenAI ChatGPT** to accelerate development.
- All logic, validations, and assertions were **reviewed and implemented manually**.
