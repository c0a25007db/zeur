import React from "react";
import { IconType } from "react-icons";
import { 
  FaGithub, 
  FaInstagram,
  FaBook,
  FaCode,
  FaMusic,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import { SiPython } from "react-icons/si";

// パーソナル情報の型定義
export interface PersonalInfo {
  // 基本情報
  name: string;
  title: string;
  location: string;
  avatarImage?: string;
  initials: string;
  description?: string;
  
  // About Me
  about: {
    paragraphs: React.ReactNode[];
  };
  
  // Tech Stack
  techStack: {
    name: string;
    icon: React.ReactNode;
  }[];
  
  // 趣味・興味
  hobbies: {
    title: string;
    description: string;
    icon: React.ReactNode;
    badges: string[];
  }[];
  
  // 教育歴
  education: {
    period: string;
    school: string;
    description: string;
    badges: string[];
    link?: string;
  }[];
  
  // ソーシャルリンク
  socialLinks: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

// あなたのパーソナル情報をここで編集してください
export const personalInfo: PersonalInfo = {
  // 基本情報
  name: "アコア 大輝ジョエル",
  title: "駆け出し大学生",
  location: "Tokyo, Japan",
  avatarImage: "avatar.jpg", // 画像を追加したい場合はpublicフォルダに配置
  initials: "YOUR", // アバター画像がない場合に表示されるイニシャル
  
  // About Me セクション
  about: {
    paragraphs: [
      <>大学1年生。</>,
      <>こんにちは</>
    ]
  },
  
  // 技術スタック
  techStack: [
    { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3 mr-1" /> },
    { name: "React", icon: <SiReact className="w-3 h-3 mr-1" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-3 h-3 mr-1" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 h-3 mr-1" /> },
    { name: "python", icon: <SiPython className="w-3 h-3 mr-1"/>}
  ],
  
  // 趣味・興味
  hobbies: [
    {
      title: "Learning & Reading",
      description: "PythonとWeb系の言語について学習をしている",
      icon: <FaBook className="h-5 w-5 text-primary" />,
      badges: ["Clean Code", "Podcast"]
    },
    {
      title: "Development & Design",
      description: "Python×生成AIでリアルタイムの会話ができるキャラクターを製作中(できるかな?)",
      icon: <FaCode className="h-5 w-5 text-primary" />,
      badges: ["React", "UI/UX"]
    },
    {
      title: "Music & Entertainment",
      description: "好きなジャンルはハードコアテクノミュージック, ゲームとかも好きです",
      icon: <FaMusic className="h-5 w-5 text-primary" />,
      badges: ["Lo-Fi", "Gaming"]
    }
  ],
  
  // 教育歴
  education: [
    {
      period: "2025 — 現在",
      school: "東京工科大学 コンピュータサイエンス学部",
      description: "現在はPythonについて学習中。",
      badges: ["人工知能専攻をする予定"],
      link: "https://google.com" // 学校のウェブサイトなど（オプション）
    },
    {
      period: "2022 — 2025",
      school: "都立小川高等学校",
      description: "帰宅部で毎日すぐに家に帰りだらだらと過ごしつつも、高校時代からコンピューターに興味を持ち始め、春休みごろからプログラミングの基礎を独学で学んでいました。",
      badges: ["リーダーシップ", "チームワーク", "独学"]
    }
  ],
  
  // ソーシャルリンク
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/yourusername", // あなたのGitHubのURLに変更してください
      icon: <FaGithub className="size-6" />
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/yourusername", // あなたのX(Twitter)のURLに変更してください
      icon: <FaXTwitter className="size-6" />
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/yourusername", // あなたのInstagramのURLに変更してください
      icon: <FaInstagram className="size-6" />
    },
    
    {
        platform: "Zenn",
        url: "https://zenn.dev/yourusername", // あなたのZennのURLに変更してください
        icon: <SiZenn className="size-6" />
    }
  ]
}; 