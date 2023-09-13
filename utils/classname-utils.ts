export const cn = (...classNames: (string | null)[]): string => {
   return classNames.filter((c) => !!c).join(' ');
}

export const cnif = (condition: boolean, className: string): string | null => {
   return !!condition ? className : null;
}