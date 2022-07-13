function useLocalStorage(key, initialValue) {
  localStorage.setItem(key, JSON.stringify(initialValue));
}

export default useLocalStorage;
