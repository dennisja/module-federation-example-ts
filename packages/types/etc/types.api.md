## API Report File for "@mono/types"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
export interface Category {
    description: string;
    id: string;
    title: string;
}

// @public
export function isTypedArray<T>(array: unknown, check: (x: any) => x is T): array is T[];

// @public
export interface TodoItem {
    category: Category;
    description: string;
    id: string;
    title: string;
}


```
