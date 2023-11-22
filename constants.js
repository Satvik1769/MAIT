export const url = process.env.NEXT_PUBLIC_SITE_URL;
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      console.log("debounce");
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
