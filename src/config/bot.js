import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // 봇 상태 설정 (봇 이름 아래에 표시되는 내용)
  // =========================
  // `status` 옵션:
  // - "online"    = 온라인(초록 점)
  // - "idle"      = 자리 비움(노란 달)
  // - "dnd"       = 방해 금지(빨간 표시)
  // - "invisible" = 오프라인으로 표시
  presence: {
    // Discord에 표시되는 현재 상태
    status: "online",

    // 봇 이름 아래 활동 표시
    // Discord 타입:
    // 0 = 플레이 중
    // 1 = 방송 중
    // 2 = 듣는 중
    // 3 = 시청 중
    // 4 = 사용자 지정
    // 5 = 경쟁 중
    activities: [
      {
        // 사용자에게 표시되는 활동 이름
        name: "Mady By 모던",
        type: 2,
      },
    ],
  },

  // =========================
  // 명령어 설정
  // =========================
  commands: {
    // 봇 소유자 ID 목록
    owners: process.env.OWNER_IDS?.split(",") || [],

    // 기본 명령어 쿨타임(초)
    defaultCooldown: 3,

    // true이면 기존 명령어 삭제 후 재등록
    deleteCommands: false,

    // 테스트용 서버 ID
    testGuildId: process.env.TEST_GUILD_ID,

    // 명령어 접두사
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // 지원서 시스템
  // =========================
  applications: {
    // 기본 질문
    defaultQuestions: [
      { question: "이름이 무엇인가요?", required: true },
      { question: "나이가 어떻게 되나요?", required: true },
      { question: "왜 가입하고 싶나요?", required: true },
    ],

    // 상태별 색상
    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },

    // 재지원 대기 시간(시간)
    applicationCooldown: 24,

    // 거절된 지원서 자동 삭제 (일)
    deleteDeniedAfter: 7,

    // 승인된 지원서 자동 삭제 (일)
    deleteApprovedAfter: 30,

    // 관리자 역할
    managerRoles: [],
  },

  // =========================
  // Embed 색상
  // =========================
  embeds: {
    colors: {
      primary: "#336699",
      secondary: "#2F3136",

      success: "#57F287",
      error: "#ED4245",
      warning: "#FEE75C",
      info: "#3498DB",

      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },

      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },

      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",

      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },

    footer: {
      text: "모던",
      icon: null,
    },

    thumbnail: null,

    author: {
      name: null,
      icon: null,
      url: null,
    },
  },

    // =========================
  // 경제 시스템 설정
  // =========================
  economy: {
    currency: {
      // 화폐 이름
      name: "코인",
      // 복수형 화폐 이름
      namePlural: "코인",
      // 화폐 기호
      symbol: "$",
    },

    // 신규 유저 시작 금액
    startingBalance: 0,

    // 최대 은행 보관 한도
    baseBankCapacity: 100000,

    // 일일 보상
    dailyAmount: 100,

    // 작업 최소/최대 보상
    workMin: 10,
    workMax: 100,

    // 구걸 최소/최대 보상
    begMin: 5,
    begMax: 50,

    // 강도 성공 확률 (0.4 = 40%)
    robSuccessRate: 0.4,

    // 강도 실패 시 감옥 시간
    // 3600000 = 1시간
    robFailJailTime: 3600000,
  },

  // =========================
  // 상점 설정
  // =========================
  shop: {

  },

  // =========================
  // 티켓 시스템
  // =========================
  tickets: {
    // 기본 카테고리 ID
    defaultCategory: null,

    // 지원 역할 ID
    supportRoles: [],

    // 우선순위 옵션
    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "없음",
      },
      low: {
        emoji: "🟢",
        color: "#2ECC71",
        label: "낮음",
      },
      medium: {
        emoji: "🟡",
        color: "#F1C40F",
        label: "보통",
      },
      high: {
        emoji: "🔴",
        color: "#E74C3C",
        label: "높음",
      },
      urgent: {
        emoji: "🚨",
        color: "#E91E63",
        label: "긴급",
      },
    },

    // 기본 우선순위
    defaultPriority: "none",

    // 종료된 티켓 아카이브 카테고리
    archiveCategory: null,

    // 로그 채널
    logChannel: null,
  },

  // =========================
  // 이벤트 (Giveaway)
  // =========================
  giveaways: {
    // 기본 지속 시간
    defaultDuration: 86400000,

    // 최소 당첨자 수
    minimumWinners: 1,

    // 최대 당첨자 수
    maximumWinners: 10,

    // 최소 지속 시간
    minimumDuration: 300000,

    // 최대 지속 시간
    maximumDuration: 2592000000,

    // 이벤트 허용 역할
    allowedRoles: [],

    // 우회 역할
    bypassRoles: [],
  },

    // =========================
  // 생일 시스템
  // =========================
  birthday: {
    // 생일 역할 ID
    defaultRole: null,

    // 생일 알림 채널 ID
    announcementChannel: null,

    // 시간대 설정
    timezone: "UTC",
  },

  // =========================
  // 인증 시스템
  // =========================
  verification: {
    // 인증 메시지
    defaultMessage: "아래 버튼을 눌러 인증하고 서버에 입장하세요!",

    // 인증 버튼 텍스트
    defaultButtonText: "인증하기",

    // 자동 인증 설정
    autoVerify: {
      // 자동 인증 기준
      // - "none"        = 모두 즉시 인증
      // - "account_age" = 계정 나이 기준
      // - "server_size" = 서버 크기 기준
      defaultCriteria: "none",

      // 계정 생성 기준 일수
      defaultAccountAgeDays: 7,

      // 서버 크기 기준 인원
      serverSizeThreshold: 1000,

      // 최소 계정 나이
      minAccountAge: 1,
      maxAccountAge: 365,

      // 인증 후 DM 전송 여부
      sendDMNotification: true,

      criteria: {
        account_age: "계정이 지정된 일수보다 오래되어야 합니다.",
        server_size: "서버 인원이 1000명 미만이면 모두 자동 인증됩니다.",
        none: "모든 사용자를 즉시 인증합니다.",
      },
    },

    // 인증 쿨타임
    verificationCooldown: 5000,

    // 최대 인증 시도 횟수
    maxVerificationAttempts: 3,

    // 시도 시간 창
    attemptWindow: 60000,

    // 메모리 제한
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,

    // 정리 주기
    cooldownCleanupInterval: 300000,

    // 감사 로그 최대 크기
    maxAuditMetadataBytes: 4096,

    // 메모리 저장 최대 개수
    maxInMemoryAuditEntries: 1000,

    // 로그 기록 여부
    logAllVerifications: true,

    // 감사 기록 유지 여부
    keepAuditTrail: true,
  },

  // =========================
  // 환영 / 퇴장 메시지
  // =========================
  welcome: {
    // 환영 메시지
    defaultWelcomeMessage:
      "환영합니다 {user}! {server}에 오신 것을 환영합니다! 현재 서버 인원은 {memberCount}명입니다!",

    // 퇴장 메시지
    defaultGoodbyeMessage:
      "{user}님이 서버를 떠났습니다. 현재 서버 인원은 {memberCount}명입니다.",

    // 환영 채널 ID
    defaultWelcomeChannel: null,

    // 퇴장 채널 ID
    defaultGoodbyeChannel: null,
  },

    // =========================
  // 카운터 시스템
  // =========================
  counters: {
    defaults: {
      // 기본 이름 템플릿
      name: "{name} 카운터",

      // 기본 설명
      description: "{name} 카운터",

      // 채널 타입
      type: "voice",

      // 채널 이름 형식
      channelName: "{name}-{count}",
    },

    permissions: {
      // 기본 거부 권한
      deny: ["VIEW_CHANNEL"],

      // 기본 허용 권한
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },

    messages: {
      created: "✅ {name} 카운터가 생성되었습니다",
      deleted: "🗑️ {name} 카운터가 삭제되었습니다",
      updated: "🔄 {name} 카운터가 업데이트되었습니다",
    },

    types: {
      members: {
        name: "👥 전체 멤버",
        description: "서버의 전체 멤버 수",
        getCount: (guild) => guild.memberCount.toString(),
      },

      bots: {
        name: "🤖 봇",
        description: "서버의 전체 봇 수",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },

      members_only: {
        name: "👤 일반 멤버",
        description: "봇을 제외한 일반 멤버 수",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // 공통 메시지
  // =========================
  messages: {
    noPermission: "이 명령어를 사용할 권한이 없습니다.",
    cooldownActive: "{time} 후에 다시 사용할 수 있습니다.",
    errorOccurred: "명령어 실행 중 오류가 발생했습니다.",
    missingPermissions: "이 작업을 수행할 권한이 부족합니다.",
    commandDisabled: "이 명령어는 비활성화되어 있습니다.",
    maintenanceMode: "현재 봇이 점검 중입니다.",
  },

  // =========================
  // 기능 설정
  // =========================
  features: {
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,

    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,

    verification: true,
    reactionRoles: true,
    joinToCreate: true,

    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
  },
};

export function validateConfig(config) {
  const errors = [];

  if (process.env.NODE_ENV !== 'production') {
    logger.debug('환경 변수 확인:');
    logger.debug('DISCORD_TOKEN 존재:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN 존재:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID 존재:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID 존재:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST 존재:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("봇 토큰이 필요합니다 (DISCORD_TOKEN 또는 TOKEN 환경 변수)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("CLIENT_ID 환경 변수가 필요합니다");
  }

  if (process.env.NODE_ENV === 'production') {
    if (!process.env.POSTGRES_HOST) {
      errors.push("프로덕션 환경에서는 POSTGRES_HOST 환경 변수가 필요합니다");
    }
    if (!process.env.POSTGRES_USER) {
      errors.push("프로덕션 환경에서는 POSTGRES_USER 환경 변수가 필요합니다");
    }
    if (!process.env.POSTGRES_PASSWORD) {
      errors.push("프로덕션 환경에서는 POSTGRES_PASSWORD 환경 변수가 필요합니다");
    }
  }

  return errors;
}

const configErrors = validateConfig(botConfig);

if (configErrors.length > 0) {
  logger.error("봇 설정 오류:", configErrors.join("\n"));

  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const BotConfig = botConfig;

export function getColor(path, fallback = "#99AAB5") {
  
  if (typeof path === "number") return path;

  if (typeof path === "string" && path.startsWith("#")) {
    return parseInt(path.replace("#", ""), 16);
  }

  const result = path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
      botConfig.embeds.colors,
    );

  if (typeof result === "string" && result.startsWith("#")) {
    return parseInt(result.replace("#", ""), 16);
  }

  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color),
  );

  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;

// 완료
