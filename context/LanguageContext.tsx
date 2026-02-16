
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type LanguageCode = 'EN' | 'ZH' | 'JA' | 'KO' | 'RU';

interface Translations {
  [key: string]: {
    [code in LanguageCode]: string;
  };
}

export const translations: Translations = {
  navAbout: { EN: 'About', ZH: '关于', JA: '概要', KO: '정보', RU: 'О проекте' },
  navTokenomics: { EN: 'Tokenomics', ZH: '代币经济', JA: 'トークノミクス', KO: '토큰노믹스', RU: 'Токеномика' },
  navChart: { EN: 'Live Chart', ZH: '实时图表', JA: 'ライブチャート', KO: '라이브 차트', RU: 'График' },
  buyBtn: { EN: 'BUY $FireHorse', ZH: '购买 $FireHorse', JA: '$FireHorseを購入', KO: '$FireHorse 구매', RU: 'КУПИТЬ $FireHorse' },
  heroTag: { EN: 'EST. 2026 • Year of the horse PROTOCOL', ZH: '2026年成立 • 火马协议', JA: '2026年設立 • 火の馬プロトコル', KO: '2026년 설립 • 불의 말 프로토콜', RU: 'ОСН. В 2026 • ПРОТОКОЛ "ГОД ЛОШАДИ"' },
  heroTitle: { EN: 'RIDE THE STORM', ZH: '驭风前行', JA: '嵐に乗れ', KO: '폭풍을 타라', RU: 'ОСЕДЛАЙ ШТОРМ' },
  heroSubtitle: { EN: 'Harness the unstoppable spirit of the Fire Horse. 100% community-owned, zero compromises, pure adrenaline.', ZH: '驾驭势不可挡的火马精神。100%社区所有，零妥协，纯粹的肾上腺素。', JA: '火の馬の止められない精神を利用しましょう。100%コミュニティ所有、妥協なし、純粋なアドレナリン。', KO: '불의 말의 멈출 수 없는 정신을 활용하십시오. 100% 커뮤니티 소유, 타협 없는 순수한 아드레날린.', RU: 'Обуздайте неудержимый дух Огненной Лошади. 100% во владении сообщества, ноль компромиссов, чистый адреналин.' },
  whitepaper: { EN: 'WHITEPAPER', ZH: '白皮书', JA: 'ホワイトペーパー', KO: '백서', RU: 'WHITEPAPER' },
  scrollDown: { EN: 'Scroll Down', ZH: '向下滚动', JA: 'スクロール', KO: '스크롤', RU: 'Листайте вниз' },
  aboutTag: { EN: 'The Protocol', ZH: '协议', JA: 'プロトコル', KO: '프로토콜', RU: 'Протокол' },
  aboutTitle1: { EN: 'A POWERFUL', ZH: '强大的', JA: '強力な', KO: '강력한', RU: 'МОЩНАЯ' },
  aboutTitle2: { EN: 'FORCE OF NATURE', ZH: '自然力量', JA: '自然の力', KO: '자연의 힘', RU: 'СИЛА ПРИРОДЫ' },
  aboutDesc1: { EN: 'FireHorse is not just another token; it is a movement. Built on the principles of unstoppable momentum and burning passion.', ZH: 'FireHorse不仅仅是另一个代币；它是一场运动。建立在势不可挡的动力和燃烧的激情原则之上。', JA: 'FireHorseは単なるトークンではありません。それはムーブメントです。止められない勢いと燃えるような情熱の原則に基づいています。', KO: 'FireHorse는 단순한 토큰이 아닙니다. 그것은 운동입니다. 멈출 수 없는 기세와 불타는 열정의 원칙에 따라 구축되었습니다.', RU: 'FireHorse — это не просто очередной токен; это движение. Построен на принципах неудержимого импульса и жгучей страсти.' },
  aboutStats1: { EN: 'Uptime', ZH: '运行时间', JA: '稼働時間', KO: '가동 시간', RU: 'Аптайм' },
  aboutStats2: { EN: 'Settlement', ZH: '结算时间', JA: '決済', KO: '결제', RU: 'Расчет' },
  tokenomicsTitle: { EN: 'Year of the horse', ZH: '火马年', JA: '火の馬の年', KO: '불의 말의 해', RU: 'Год Лошади' },
  tokenomicsDesc: { EN: 'A fair launch protocol with zero team allocation and absolute security. The horse has no master.', ZH: '公平启动协议，零团队分配，绝对安全。骏马无主。', JA: 'チームの割り当てがなく、絶対的なセキュリティを備えたフェアローンチプロトコル。馬に主人はいない。', KO: '팀 할당이 없고 절대적인 보안을 갖춘 페어 런치 프로토콜입니다. 말에게는 주인이 없습니다.', RU: 'Протокол честного запуска с нулевым распределением команде и абсолютной безопасностью. У этой лошади нет хозяина.' },
  totalSupply: { EN: 'Total Supply', ZH: '总供应量', JA: '総供給量', KO: '총 공급량', RU: 'Общее предложение' },
  ticker: { EN: 'Ticker', ZH: '代币符号', JA: 'ティッカー', KO: '티커', RU: 'Тикер' },
  liquidity: { EN: 'Liquidity', ZH: '流动性', JA: '流動性', KO: '유동성', RU: 'Ликвидность' },
  contract: { EN: 'Contract', ZH: '合约', JA: 'コントラクト', KO: '컨트랙트', RU: 'Контракт' },
  burned: { EN: '100% BURNED', ZH: '100% 已销毁', JA: '100% 焼却済み', KO: '100% 소각됨', RU: '100% СЖЕЧЕНО' },
  revoked: { EN: 'REVOKED', ZH: '权限已放弃', JA: '放棄済み', KO: '포기됨', RU: 'ОТКАЗАНО' },
  buyTax: { EN: 'Buy Tax', ZH: '买入税', JA: '購入税', KO: '구매 세금', RU: 'Налог на покупку' },
  sellTax: { EN: 'Sell Tax', ZH: '卖出税', JA: '販売税', KO: '판매 세금', RU: 'Налог на продажу' },
  status: { EN: 'Status', ZH: '状态', JA: 'ステータス', KO: '상태', RU: 'Статус' },
  verified: { EN: 'VERIFIED', ZH: '已验证', JA: '検証済み', KO: '검증됨', RU: 'ПРОВЕРЕНО' },
  chartIntel: { EN: 'Live Intelligence', ZH: '实时情报', JA: 'ライブインテリジェンス', KO: '라이브 인텔리전스', RU: 'Живая аналитика' },
  chartTitle: { EN: 'Ignition Tracker', ZH: '点火追踪器', JA: 'イグニッショントラッカー', KO: '점화 추적기', RU: 'Трекер зажигания' },
  footerDesc: { EN: 'Unleash the spirit of the Fire Horse. Year of the horse is a decentralized community project built for the bold and the unbridled.', ZH: '释放火马的精神。火马年是一个为大胆和放纵而建立的去中心化社区项目。', JA: '火の馬の精神を解き放ちましょう。火の馬の年は、大胆で自由な人々のために構築された分散型コミュニティプロジェクトです。', KO: '불의 말의 정신을 해방하십시오. 불의 말의 해는 대담하고 억제되지 않은 사람들을 위해 구축된 탈중앙화 커뮤니티 프로젝트입니다.', RU: 'Дайте волю духу Огненной Лошади. Год Лошади — это децентрализованный общественный проект, созданный для смелых и неукротимых.' },
  backToTop: { EN: 'Back to top', ZH: '返回顶部', JA: 'トップへ戻る', KO: '맨 위로', RU: 'Наверх' },
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('EN');

  const t = (key: string) => {
    return translations[key]?.[language] || translations[key]?.['EN'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
