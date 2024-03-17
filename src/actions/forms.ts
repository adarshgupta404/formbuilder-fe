"use server";

import { formSchemaType } from "@/types/form";

export async function GetFormStats() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/formbuilder/65f612b226215d4ffaa60ec0`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const data = await response.json();
      const visits = data.visits || 0;
      const submissions = data.submissions || 0;

      let submissionRate = 0;

      if (visits > 0) {
        submissionRate = (submissions / visits) * 100;
      }

      const bounceRate = 100 - submissionRate;

      return {
        visits,
        submissions,
        submissionRate,
        bounceRate,
      };
    } else {
      console.error("Error fetching form stats:", response.status);
      // Handle error cases as needed
      return null;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle exceptions (e.g., network errors) here
    return null;
  }
}

export async function CreateForm(values: formSchemaType) {
  const object = { userId: "adarsh", ...values };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/formbuilder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Form stats:", object);
      return data;
    } else {
      console.error("Error fetching form stats:", response.status);
      // Handle error cases as needed
      return null;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle exceptions (e.g., network errors) here
    return null;
  }
}
export async function GetForms() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/formbuilder`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching form stats:", response.status);
      // Handle error cases as needed
      return null;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle exceptions (e.g., network errors) here
    return null;
  }
}
