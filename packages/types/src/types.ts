/**
 * The category of the todo item
 * @public
 */
export interface Category {
  /** The  unique identifier of the category */
  id: string;

  /** The description of the category */
  description: string;

  /** The title of the category */
  title: string;
}

/**
 * The item todo
 * @public
 */
export interface TodoItem {
  /** The unique identifier of the TODO item */
  id: string;

  /** The title of the todo item */
  title: string;

  /** A message describing what to accomplish by the item */
  description: string;

  /** The category the item belongs to */
  category: Category;
}
