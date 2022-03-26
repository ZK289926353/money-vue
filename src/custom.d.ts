type RecordItem = {
  tags: string[];
  notes: string;
  type: "-" | "+";
  amount: number;
  createdAt?: Date;
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

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: TagListModel["update"];
  findTag: (id: string) => Tag | undefined;
}
