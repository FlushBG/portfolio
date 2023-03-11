export const isMobile = (): boolean => {
   if (typeof window === 'undefined') return false;

   const query = '(min-width: 320px) and (max-width: 767.98px)';
   const match = window.matchMedia(query);
   return match.matches;
}