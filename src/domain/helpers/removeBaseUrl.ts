export function removeBaseUrl(url: string, baseUrlToRemove: string): string {
  return url.replace(baseUrlToRemove, '');
}
