type RecordItem = {
    tags: string[];
    notes: string;
    type: "-" | "+";
    amount: number;
    createdAt?: Date;
  };