const useLocalStorage = () => {
  const getValueLocalStorage = (name: string): string | null => {
    const cookie = localStorage.getItem(name);

    if (!cookie) return null;

    return cookie;
  };

  return {
    getValueLocalStorage,
  };
};

export default useLocalStorage;
