import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/index.module.css'; // 用于样式

export default function Home() {
  const teamMembers = [
    {
      name: 'mddoo',
      position: 'Chief Shareholder',
      description: '专注研究服务器、网络、软件以及网络协议',
      frontImage: '/members/mddoo.jpg',
      url: 'https://example.com/mddoo',
    },
    {
      name: 'Pearson',
      position: 'Core Developer',
      description: '擅长Python、JS、羊毛届大佬 比较社恐',
      frontImage: '/members/Pearson.jpg',
      url: 'https://example.com/pearson',
    },
    {
      name: '十点',
      position: 'Loyal User',
      description: '毛豆框架深度用户 羊毛领域大佬 擅长京豆等0撸活动',
      frontImage: '/members/ten.jpg',
      url: 'https://baidu.com',
    },
    {
      name: '华子',
      position: 'Organizer',
      description: '略懂网络 刚入门Python',
      frontImage: '/members/huazinet.jpg',
      url: 'https://example.com/huazinet',
    }
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank'); // 点击后在新标签页打开链接
  };

  return (
    <div className={styles.container}>
      {/* 添加Logo */}
      <div className={styles.logoContainer}>
        <svg t="1722908181587" className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          {/* Logo SVG Path 省略 */}
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
            className={`${styles.member}`} // 保留布局
            onClick={() => handleCardClick(member.url)} // 点击后跳转
          >
            <div className={`${styles.cardFace} ${styles.cardFront}`}>
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
