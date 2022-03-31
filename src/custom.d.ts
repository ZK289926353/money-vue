type RecordItem = {
  tags: Tag[];
  notes: string;
  type: "-" | "+";
  amount: number;
  createdAt?: string;
};
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
};
type Tag = {
  id: string;
  name: string;
};
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => "success" | "duplicated"; //success表示成功，duplicated表示name重复
  save: () => void;
  update: (id: string, name: string) => "success" | "not found" | "duplicated";
  remove: (id: string) => boolean;
};
