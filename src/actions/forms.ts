"use server";

import { formSchemaType } from "@/types/form";

export async function GetFormStats() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/formbuilder/65f612b226215d4ffaa60ec0`,
      { next: { revalidate: 0 } }
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
      return {
        visits: 0,
        submissions: 0,
        submissionRate: 0,
        bounceRate: 0,
      };
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle exceptions (e.g., network errors) here
    return {
      visits: 0,
      submissions: 0,
      submissionRate: 0,
      bounceRate: 0,
    };
  }
}

export async function CreateForm(values: formSchemaType) {
  const object = { userId: "adarsh", ...values };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/formbuilder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching form stats:", response.status);
      // Handle error cases as needed
      return [];
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle exceptions (e.g., network errors) here
    return [];
  }
}
export async function GetForms() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/formbuilder`, {
      next: {
        revalidate: 0,
      },
    });

    if (response.ok) {
      const data = await response.json();
      // console.log(data)
      return data.reverse();
    } else {
      console.error("Error fetching form stats:", response.status);
      // Handle error cases as needed
      return [];
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle exceptions (e.g., network errors) here
    return [];
  }
}

export async function GetFormById(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/formbuilder/${id}`,
      { next: { revalidate: 0 } }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching form stats:", response.status);
      // Handle error cases as needed
      return null;
    }
  } catch (error) {}
}

export async function UpdateFormContent(id: string, jsonContent: string) {
  // const user =  await currentUser();
  const user = "adarsh";
  if (user) {
    console.log("user not found");
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/formbuilder/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jsoncontent: jsonContent }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching form stats:", response.status);
      // Handle error cases as needed
      return [];
    }
  } catch (error) {}
}
export async function GetFormContentByUrl(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/formbuilder/getformcontentbyurl/${id}`,
      { next: { revalidate: 0 } }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching form stats:", response.status);
      // Handle error cases as needed
      return null;
    }
  } catch (error) {}
}
export async function GetFormWithSubmissions(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/formbuilder/getformwithsub/${id}`,
      { next: { revalidate: 0 } }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching form stats:", response.status);
      // Handle error cases as needed
      return null;
    }
  } catch (error) {}
}

export async function SubmitForm(formUrl: string, content: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/formbuilder/submit/${formUrl}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jsoncontent: content }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching form stats:", response.status);
      // Handle error cases as needed
      return null;
    }
  } catch (error) {}
}
