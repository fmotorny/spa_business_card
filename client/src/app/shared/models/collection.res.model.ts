export interface CollectionResModel {
  data: CollectionEl[];
  meta: PaginationModel;
}

export interface CollectionEl {
  attributes: any;
  id: number;
}

export interface PaginationModel {
  pagination: { page: number; pageCount: number; pageSize: number; total: number };
}

export interface PageModel {
  page_title: string;
  page_description: string;
}
