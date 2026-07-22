async function copyPassword(password) {
  if (!password) return;

  try {
    await navigator.clipboard.writeText(password);
  } catch (error) {
    console.error(error);
  }
}
