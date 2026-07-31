export const profile = {
  name: "徐赫",
  englishName: "Xu He",
  handle: "xuhe2",
  role: "Audio · AI · Software Engineering",
  location: "China",
  avatar: "https://github.com/xuhe2.png",
  email: "xuhe114514@gmail.com",
  github: "https://github.com/xuhe2",
  blog: "https://www.cnblogs.com/xuhe2",
  tagline: "让声音被理解、重建与创造。",
  intro:
    "我专注于软件工程与 AI 研究，最近在系统学习与探索 Audio 相关方向。毕业于浙江理工大学，推免至东南大学攻读软件工程硕士。",
};

export const links = [
  {
    label: "GitHub",
    href: profile.github,
    note: "开源项目与代码贡献",
  },
  {
    label: "Blog",
    href: profile.blog,
    note: "技术文章与学习记录",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    note: "公开联系邮箱",
  },
];

export const education = [
  {
    degree: "本科",
    school: "浙江理工大学",
    major: "计算机科学与技术，全英文授课",
    time: "2022 - 2026",
    details: ["GPA 4.09/5.00", "专业排名 1", "CET-4 525 / CET-6 495"],
  },
  {
    degree: "硕士",
    school: "东南大学",
    major: "软件工程",
    time: "2026 - 2029",
    details: ["推荐免试攻读研究生"],
  },
];

export const experience = [
  {
    company: "字节跳动",
    role: "TikTok Product Infra 智能客服平台研发实习",
    time: "2025.11.18 — 2026.05.15",
    location: "北京",
    status: "已结束",
    summary:
      "在 TikTok Product Infra 智能客服平台参与 TicketBot 与 AI SOP 工程化建设，围绕 SOP 执行链路、二次进线服务策略、意图识别、监控告警和稳定性治理推进智能客服自动化，帮助提升 AI 服务覆盖和问题处理效率，降低人工客服工作量。",
    tags: ["AI Customer Support", "SOP Workflow", "LLM", "Observability", "Reliability"],
  },
];

export const research = [
  {
    title: "从耳蜗基底膜振动高精度重建音频信号",
    paper:
      "ACReNet: A Knowledge-Enhanced Neural Framework for High-Precision Audio Reconstruction from Basilar-Membrane Motion",
    href: "https://link.springer.com/chapter/10.1007/978-981-95-4088-4_6",
    result: "第一作者，CCF C 类会议 ICONIP Accept",
    time: "Audio Reconstruction",
  },
  {
    title: "基于知识引导优化的多尺度特征融合钢材表面缺陷检测",
    paper:
      "Efficient Steel Surface Defect Detection via a Lightweight YOLO Framework with Task-Specific Knowledge-Guided Optimization",
    href: "https://www.mdpi.com/2079-9292/14/10/2029",
    result: "第一作者，Electronics Published，JCR Q2 / 中科院 4 区",
    time: "2025.01 - 2025.05",
  },
];

export const openSource = [
  {
    title: "sharelatex-ce",
    href: "https://github.com/xuhe2/sharelatex-ce",
    meta: "Docker · Self-hosting",
    description:
      "提供 ShareLaTeX-CE 私有化部署方案，使用 Docker 简化复杂环境配置，方便团队搭建 LaTeX 协作平台。",
  },
  {
    title: "github520cli",
    href: "https://github.com/xuhe2/github520cli",
    meta: "Go · CLI",
    description:
      "基于 Go 的 GitHub 访问优化工具，自动获取并解析可用 GitHub IP 地址，改善国内访问体验。",
  },
  {
    title: "Apache dubbo-go-samples",
    href: "https://github.com/apache/dubbo-go-samples/pull/920",
    meta: "Open Source · PR #920",
    description: "向 Apache/dubbo-go-samples 提交 Pull Request，参与分布式服务框架 Go 实现案例社区协作。",
  },
  {
    title: "chaoxing",
    href: "https://github.com/Samueli924/chaoxing/pull/366",
    meta: "Open Source · PR #366",
    description: "参与 chaoxing 项目的 Issue #365 与 PR #366 贡献。",
  },
];

export const awards = [
  {
    title: "第十五届中国大学生服务外包创新创业大赛",
    level: "国家级三等奖，东部区域决赛二等奖",
    time: "2024.07",
  },
  {
    title: "第十四届蓝桥杯程序设计大赛 C++ 组",
    level: "省级二等奖",
    time: "2023.04",
  },
  {
    title: "第十一届浙江省大学生服务外包创新应用大赛",
    level: "省级三等奖",
    time: "2024.11",
  },
  {
    title: "2022 年浙江理工大学程序设计竞赛",
    level: "校级一等奖",
    time: "2022.11",
  },
];

export const skills = [
  {
    group: "Audio & AI",
    items: ["Audio Reconstruction", "Audio Intelligence", "Deep Learning", "RAG", "LLM Applications"],
  },
  {
    group: "Engineering",
    items: ["Golang", "Python", "C/C++", "Kitex", "Gin", "gRPC", "FastAPI"],
  },
  {
    group: "Systems & Infrastructure",
    items: ["Docker", "Linux", "PostgreSQL", "Redis", "RabbitMQ", "Git", "Makefile"],
  },
];

export const principles = [
  "Audio Exploration",
  "Reliable AI Systems",
  "Open Source",
];
