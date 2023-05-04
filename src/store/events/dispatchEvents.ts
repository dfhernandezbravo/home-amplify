
export const customDispatchEvent = <T>(data: { name: string, detail: T }) => {
  const { name, detail } = data;
  const event = new CustomEvent(name, { detail });
  console.log('dispatch event ', name, detail)
  typeof window != 'undefined' && document.dispatchEvent(event);
}