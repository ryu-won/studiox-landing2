export interface Influencer {
  id: string;
  name: string;
  nameEn: string;
  profileImage: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  stats: {
    followers: string;
    contents: string;
    campaigns: string;
  };
  gallery: string[];
}
