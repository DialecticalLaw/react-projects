export function convertToBase64(file?: File): Promise<string> | undefined {
  if (!file) throw new Error('file not found');
  const reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise((resolve) => {
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
  });
}
