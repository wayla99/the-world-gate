type StoryKey = "start" | "portal" | "back" | "explore";
type StoryData = {
  text: string;
  choices: { text: string; next: StoryKey }[];
};

export const story: Record<StoryKey, StoryData> = {
  start: {
    text: "คุณตื่นขึ้นมาพบว่าตัวเองอยู่หน้าประตูมิติขนาดยักษ์ คุณจะทำอย่างไร?",
    choices: [
      { text: "ก้าวผ่านประตู", next: "portal" },
      { text: "หันหลังกลับ", next: "back" },
    ],
  },
  portal: {
    text: "คุณก้าวเข้าสู่โลกใหม่ที่เต็มไปด้วยปริศนา...",
    choices: [{ text: "สำรวจต่อ", next: "explore" }],
  },
  explore: {
    text: "คุณพบซากปรักหักพังโบราณที่เต็มไปด้วยสัญลักษณ์ประหลาด...",
    choices: [{ text: "ย้อนกลับ", next: "portal" }],
  },
  back: {
    text: "คุณเลือกที่จะถอยกลับ... แต่แล้วพบว่าไม่มีทางหนีอีกแล้ว!",
    choices: [{ text: "หันกลับไปที่ประตู", next: "start" }],
  },
};
