export const cn = (...classNames: string[]): string => {
   return classNames.filter((c) => !!c).join(' ');
}

export const cnif = (className: string, condition: string): string | null => {
   return !!condition ? className : null;
}