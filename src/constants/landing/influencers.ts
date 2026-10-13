import type { Influencer } from "@/types/landing/influencer.type";

function driveUrl(id: string) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1920`;
}

export const influencers: Influencer[] = [
  {
    id: "yuna",
    name: "유나",
    nameEn: "YUNA",
    profileImage: driveUrl("1IPXv_TGSoUsJuI0hbal8q-TzbaBT1O2l"),
    tagline: "Fashion & Lifestyle AI Influencer",
    description:
      "유나는 트렌디한 패션과 라이프스타일 콘텐츠를 선보이는 AI 인플루언서입니다. 하이엔드 브랜드부터 스트리트 패션까지, 다양한 스타일링으로 MZ세대의 감성을 사로잡습니다.",
    category: "Fashion",
    tags: ["Fashion", "Lifestyle", "Beauty"],
    stats: { followers: "127K", contents: "340+", campaigns: "45" },
    gallery: [
      driveUrl("1IPXv_TGSoUsJuI0hbal8q-TzbaBT1O2l"),
      driveUrl("1u7MceP2tZ1kn-0qKLm-TzyejokPc0e6r"),
      driveUrl("1LxoqkZ3AOZ8ljxePlYpLm0Nt-XetvV9w"),
      driveUrl("1MihgzmoFYJqumbvKSTVvZ6cZi2Ww1vhu"),
      driveUrl("17-Z1Rq662X1n4l-4ubdL5cjqDEFNnwVW"),
      driveUrl("18Pw0fJaCLU2Khv4RPeQGBmPKumZmSEKz"),
    ],
  },
  {
    id: "minseo",
    name: "민서",
    nameEn: "MINSEO",
    profileImage: driveUrl("1gYUG9bunBltb7bJ1lEGcrjA1iBwCzL3Z"),
    tagline: "Beauty & Skincare AI Influencer",
    description:
      "민서는 뷰티와 스킨케어 전문 AI 인플루언서입니다. 깨끗하고 자연스러운 메이크업 룩부터 대담한 아트 메이크업까지, 다양한 뷰티 콘텐츠로 팔로워들과 소통합니다.",
    category: "Beauty",
    tags: ["Beauty", "Skincare", "Makeup"],
    stats: { followers: "98K", contents: "280+", campaigns: "32" },
    gallery: [
      driveUrl("1gYUG9bunBltb7bJ1lEGcrjA1iBwCzL3Z"),
      driveUrl("11UW43HzPmdBCpbHNhhdrGmppSOJdImb1"),
      driveUrl("1UtYu4TOQInqjGFqDAUG2Jbjujo1dkQJE"),
      driveUrl("1go2VKz14yzjSNg9DB9Kz6_qSYt_mk7ks"),
      driveUrl("1-GCsEod15mfsJG1c49RJSxX-SzB_FO7J"),
      driveUrl("1MQQHLisitFdXVcX3Vys9E06SuXI1fHfU"),
    ],
  },
  {
    id: "hana",
    name: "하나",
    nameEn: "HANA",
    profileImage: driveUrl("12CXzE8EnVVnt1UgcIzdQ8EmFXDpDEdJc"),
    tagline: "Travel & Culture AI Influencer",
    description:
      "하나는 여행과 문화 콘텐츠를 전문으로 하는 AI 인플루언서입니다. 전 세계의 아름다운 여행지와 문화 체험을 생생하게 전달하며, 감성적인 비주얼로 여행 욕구를 자극합니다.",
    category: "Travel",
    tags: ["Travel", "Culture", "Photography"],
    stats: { followers: "85K", contents: "210+", campaigns: "28" },
    gallery: [
      driveUrl("12CXzE8EnVVnt1UgcIzdQ8EmFXDpDEdJc"),
      driveUrl("128E6HoyS-48WS-qFohp0HIRRNSYmLl30"),
      driveUrl("1wVig0gURjv1zWH3tz1AWKDQrYP6MwJ_9"),
      driveUrl("1c1fzrTPhfpbSmfXC-lDSx-7RBgJInJjr"),
      driveUrl("1ovgrqcV3ea7_5hycGt-5Lz83V97jGpcF"),
      driveUrl("19XU4Ty5BnB8UIs_clQDuyyu01yOhdyJe"),
    ],
  },
  {
    id: "sora",
    name: "소라",
    nameEn: "SORA",
    profileImage: driveUrl("1nbDLTJXH8IOP_gLduHukXHgPC-Kn5W9X"),
    tagline: "Fitness & Wellness AI Influencer",
    description:
      "소라는 피트니스와 웰니스 라이프스타일을 리드하는 AI 인플루언서입니다. 건강한 신체와 마인드를 추구하며, 운동 루틴과 건강한 식단을 공유합니다.",
    category: "Fitness",
    tags: ["Fitness", "Wellness", "Health"],
    stats: { followers: "112K", contents: "190+", campaigns: "38" },
    gallery: [
      driveUrl("1nbDLTJXH8IOP_gLduHukXHgPC-Kn5W9X"),
      driveUrl("1KHG5CUirHFMY-M00_rogj1C0TBlZ54Zl"),
      driveUrl("1ZI2GlGSmVWoIhNl4MIXCmpgeh7TJFe8I"),
      driveUrl("1Fx9GtzcoFFSbLbnC2Qe-QevUhTTCLndq"),
      driveUrl("1Jlw-xldmTgMWWBn1FXC5KOSTJcOMAtMh"),
      driveUrl("18P4YioHbMIKfMF8ya6lcCwczc9EIE08v"),
    ],
  },
  {
    id: "jiwoo",
    name: "지우",
    nameEn: "JIWOO",
    profileImage: driveUrl("1fXU3u8ti8Gp5s4iZdoibCo7vYRug715R"),
    tagline: "Tech & Digital AI Influencer",
    description:
      "지우는 테크와 디지털 트렌드를 리드하는 AI 인플루언서입니다. 최신 가젯 리뷰부터 디지털 라이프스타일 팁까지, 테크에 관심 있는 팔로워들의 든든한 가이드입니다.",
    category: "Tech",
    tags: ["Tech", "Digital", "Gadget"],
    stats: { followers: "73K", contents: "150+", campaigns: "22" },
    gallery: [
      driveUrl("1fXU3u8ti8Gp5s4iZdoibCo7vYRug715R"),
      driveUrl("1iFFZXzBio0ykcD22AU7JDvoG0HGWcmJJ"),
      driveUrl("1v1k6ZcSlSOeUxk9rvbCnVRq9ELWJ2iUV"),
      driveUrl("1cSUGohq-1KgTsdCN1FaHRELTGm-ho9u9"),
      driveUrl("1oOt0ifQ_Ur7nAaBpH2TcNvxc6yoeuLtW"),
      driveUrl("1Q6E9yNhI7mLxAmKvk6v5qKm9FcFBf-4c"),
    ],
  },
  {
    id: "arin",
    name: "아린",
    nameEn: "ARIN",
    profileImage: driveUrl("1uHiVR7GvcbJOBKZFvATqGlE0NX804b2V"),
    tagline: "Food & Dining AI Influencer",
    description:
      "아린은 맛집 탐방과 푸드 스타일링 전문 AI 인플루언서입니다. 감각적인 푸드 포토그래피와 솔직한 리뷰로 식문화 트렌드를 이끕니다.",
    category: "Food",
    tags: ["Food", "Dining", "Recipe"],
    stats: { followers: "91K", contents: "260+", campaigns: "35" },
    gallery: [
      driveUrl("1uHiVR7GvcbJOBKZFvATqGlE0NX804b2V"),
      driveUrl("1_qTY-b9MKJKWKojIiMIZBOTEoFwuJ2Zz"),
      driveUrl("1ZS2CZOaRXXMyCcWeXXBJn4LQUfe0QIYF"),
      driveUrl("1GHz_v4GFhjKueaRBregZEvRMXozuHNXm"),
      driveUrl("10-97FHrJxnxCdcKY9D2IDSyj_pjAweTV"),
      driveUrl("1iUkrLth-6CHEtu4-mntqa5Qzf-_SchhN"),
    ],
  },
];
