export function convertToBase64(file?: File): Promise<string> | undefined {
  if (!file) return;
  const reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise((resolve) => {
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
  });
}
