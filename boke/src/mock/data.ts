import Mock from "mockjs";
const Random = Mock.Random;
export const overview = Mock.mock({
  code: 200,
  data: {
    "article|0-50": 0,
    "gallery|0-50": 0,
    "diary|0-50": 0,
  },
});
export const visit = Mock.mock({
  "data|15": [
    {
      date: "@datetime('MM-dd')",
      "count|1-10": 12,
    },
  ],
});
export const user1 = {
  code: 200,
  avater: "", //头像
  username: "admin",
  password: "111111",
  data: {
    article: 100,
    gallery: 31,
    diary: 22,
  },
};
export const user2 = {
  code: 200,
  avater: "", //头像
  username: "Nayuta",
  password: "111111",
  data: {
    article: 23,
    gallery: 33,
    diary: 22,
  },
};
export const miove = [
  {
    id: 1,
    name: "肖生客的救赎",
    path: "../../public/videos/miove/miove3.jpg",
    information:
      "《肖申克的救赎》是美国作家斯蒂芬·金的中篇小说，讲述银行家安迪被冤判入狱后，凭借智慧与信念用19年越狱，并揭露监狱腐败的故事，被誉为“希望与自由的史诗”",
  },
  {
    id: 2,
    name: "海边的曼切斯特",
    path: "../../public/videos/miove/miove4.jpg",
    information:
      "《海边的曼彻斯特》讲述因过失致家人葬身火海的男主李·钱德勒，返乡处理侄子监护时直面创伤，在冷冽现实中与无法释怀的过去和解的故事。影片以克制叙事展现人性深处的伤痕与救赎，获奥斯卡最佳男主及原创剧本奖",
  },
  {
    id: 3,
    name: "海边的曼切斯特",
    path: "../../public/videos/miove/miove4.jpg",
    information: "xxxxx",
  },
  {
    id: 4,
    name: "海边的曼切斯特",
    path: "../../public/videos/miove/miove4.jpg",
    information: "xxxxx",
  },
];
