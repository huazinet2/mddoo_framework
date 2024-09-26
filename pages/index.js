import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/index.module.css'; // 用于样式

export default function Home() {
  const teamMembers = [
    {
      name: 'Pearson',
      position: 'Core Developer',
      description: '擅长Python、JS、羊毛届大佬 比较社恐',
      frontImage: '/members/Pearson.jpg',
      url: 'https://sign.ouklc.com',
    },
    {
      name: '十点',
      position: 'Loyal User',
      description: '毛豆框架深度用户 羊毛领域大佬 擅长京豆等0撸活动',
      frontImage: '/members/ten.jpg',
      url: 'https://sign.ouklc.com',
    },
    {
      name: '华子',
      position: 'Organizer',
      description: '略懂网络 刚入门Python',
      frontImage: '/members/huazinet.jpg',
      url: 'https://sign.ouklc.com',
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank'); // 点击卡片后在新标签页中打开链接
  };

  return (
    <div className={styles.container}>
      {/* 添加Logo */}
      <div className={styles.logoContainer}>
        <svg
          t="1722908181587"
          className={styles.icon} // 这里使用 className
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
        >
          <path
            d="M901.4 394.5c11.3 50.9 9.1 119-11.8 166.2-23.6 53.1-68.4 101.1-109.9 141-51.5 49.3-105.6 84.2-181.3 67-61.7-13.9-130-91.4-116.4-155 14.7-67.8 77.2-68.1 123.3-102.4 0.5-0.5 1.1-1.1 2.1-1.6 1.6 0.5 5.6 1.9 7.5 2.1 17.4 4 35.9 10.7 53.6 4.8 17.4-5.6 34.9-24.7 40.5-41.6 13.1-41.6-18-65.7-49.1-80.2-2.1-1.1-9.1-3.2-11-2.9-5.4-18.8-9.4-38.9-4-57.1 9.1-30 53.1-66 83.1-75.1 62.4-17.5 159.7 74.5 173.4 134.8z"
            fill="#E3FFAE"
          />
          <path
            d="M622.9 296.1c-26.8-56-76.3-62.2-133.9-49.7-67.2 14.8-67 45.5-98.4 104.3-1 1.9-4.6 8.8-5.5 12-15.5 19.4-30.9 38.4-55.3 46.8-29.1 9.8-51.9 2.1-80.1 4.3-27.4 2.3-72.6 5.4-94.3 22.1-17.8 13.3-27.2 26.1-33.9 41-0.7 0.3-3 35.9-3 35.9-3.8 31.7 11.6 60.7 35 90.6 40 51.1 74.9 83.7 142.5 86.5 32.4 1.5 80.7 1.7 110.7-8 44.7-14.7 56.3-38.1 73.6-82 42.9-108.3 109.2-56 136.7-108 37-70 30-127 5.9-195.8z"
            fill="#E3FFAE"
          />
          <path
            d="M870.3 562.2c22.2-50.1 24.5-122.4 12.5-176.5-10.7-47.1-69.4-112.3-125.9-136.1-29.6 15.1-63.7 46.2-71.9 72.9-5.7 19.4-1.4 60.7 4.3 80.6 2-0.3 9.4 2 11.7 3.1 33 15.4 37.4 41.9 32.1 65.1-4.2 18.4-10.6 27.6-23 34.1-17.5 9.3-38.4 9.1-56.9 4.9-1.1-0.2-2.9-0.7-4.6-1.2-4.2 2.7-8.5 4.9-12.8 6.3l-2.1 0.6c-47.7 30.4-107 34.8-121.7 102.4C497.5 686 570.1 768.2 635.6 783c0.8 0.2 1.6 0.4 2.5 0.5 43.4-10.1 80.1-37.7 115.6-71.7 44.1-42.3 91.6-93.3 116.6-149.6z"
            fill="#A5D16B"
          />
        </svg>
      </div>
      <h1 className={styles.title}>mddoo framework</h1>
      <p className={styles.description}>
        Intended to provide various automation and bot services.
      </p>
      <div className={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={styles.member}
            onClick={() => handleCardClick(member.url)} // 点击后跳转
          >
            <div className={styles.cardFront}>
              <Image
                src={member.frontImage}
                alt={`${member.name}'s front picture`}
                width={140}
                height={140}
                className={styles.memberImage}
              />
              <h2 className={styles.memberName}>{member.name}</h2>
              <h3 className={styles.memberPosition}>{member.position}</h3>
              <p className={styles.memberDescription}>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.copyright}>
        © 2023 - 2024 毛豆框架. All rights reserved.
      </div>
    </div>
  );
}
