import { test, expect } from "@playwright/test";

test("Perform a user update", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: { name: "John", job: "QA Engineer" },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.name).toBe("John");
  expect(body.job).toBe("QA Engineer");
});
