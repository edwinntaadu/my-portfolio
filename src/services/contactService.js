export async function sendContactMessage(formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Contact form submitted:", formData);

  return { success: true };
}
