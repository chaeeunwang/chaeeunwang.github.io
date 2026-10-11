import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PortfolioHeader, PortfolioFooter } from '../portfolio-shell';

const projects = [
  {
    id: 'P01',
    anchor: 'deepshield',
    title: 'DeepShield',
    label: '2024 · Computer Vision · 3인 팀',
    summary:
      '사진을 공유하기 전에 얼굴 영역에 적대적 노이즈를 적용하는 딥페이크 예방 필터입니다. 사진 전체가 변형되는 문제를 줄이기 위해 적용 영역을 제한하고, 필터 경계와 패턴의 시각적 이질감을 조정했습니다.',
    role: '문제 정의·핵심 필터 설계 및 구현·얼굴 영역 선택 로직·Feathering과 Blur를 이용한 시각 품질 조정',
    architecture: [
      '입력 사진',
      '얼굴 · 랜드마크 탐지',
      '얼굴 영역 선택',
      '적대적 노이즈 적용',
      'Feathering · Blur',
      '앱 결과 이미지',
    ],
    decisions: [
      [
        '사진 전체에서 얼굴 영역으로',
        '노이즈가 얼굴 밖까지 적용되면 배경 등 원래 사진의 모습도 달라집니다. 얼굴 랜드마크를 기반으로 영역을 선택하고, 해당 영역에만 필터를 적용하는 로직을 구현했습니다.',
      ],
      [
        '필터 경계와 패턴을 따로 조정',
        '적용 영역의 경계가 두드러지는 문제에는 Feathering을, 노이즈 패턴의 이질감에는 Blur를 적용했습니다. 사용자가 사진을 일상적으로 활용할 수 있도록 시각적 품질을 다듬었습니다.',
      ],
      [
        '핵심 필터를 앱으로 연결',
        '필터 설계·구현을 맡고 앱 개발·배포 담당 팀원들과 협업했습니다. 팀은 App Store에 앱을 출시했고, 개발 과정과 문제의식이 언론 인터뷰로 소개됐습니다.',
      ],
    ],
    stack: [
      'Python',
      'TensorFlow',
      'Computer Vision',
      '얼굴 랜드마크',
      'Feathering',
      'Blur',
    ],
    result:
      '팀 App Store 출시 · 고려대학교 체인지메이커스 포럼 최우수상(2024.11) · 개발팀 언론 인터뷰',
    scope:
      '핵심 필터 구현은 개인 담당, 앱 출시·수상은 팀 성과입니다. Feathering·Blur는 시각 품질 조정이며, 공격 모델별 방어 성능 수치를 뜻하지 않습니다.',
    href: 'https://www.news1.kr/society/incident-accident/5546773',
    linkLabel: '개발팀 인터뷰',
  },
  {
    id: 'P02',
    anchor: 'particle-cnn',
    title: '입자 궤적 이미지 분류',
    label: '인공지능물리학 · 실험 데이터 · CNN',
    summary:
      '자기장이 걸린 안개상자에서 입자의 궤적을 직접 촬영하고, 이미지로 입자의 종류를 분류한 수업 프로젝트입니다. 관측 사진을 학습 데이터로 가공하고 CNN을 파인튜닝하는 과정을 수행했습니다.',
    role: '안개상자 궤적 촬영·궤적 중심 이미지 추출·데이터셋 구성 및 분할·CNN 파인튜닝',
    architecture: [
      '안개상자 실험 · 촬영',
      '궤적 중심 정사각형 crop',
      '이미지 데이터셋 구성',
      '데이터 분할',
      'CNN 파인튜닝 · 분류',
    ],
    decisions: [
      [
        '관측에서 시작한 데이터셋',
        '완성된 공개 이미지 데이터 대신, 안개상자에서 관측한 알파·베타 입자의 궤적을 직접 촬영했습니다. 물리 실험에서 얻은 관측 대상을 이미지 분류 문제의 입력으로 만들었습니다.',
      ],
      [
        '궤적 중심으로 입력 구성',
        '촬영 사진에서 궤적을 중심으로 일정한 크기의 정사각형 이미지를 잘라 데이터셋을 구성했습니다. 사진을 수집하는 단계와 모델에 넣을 이미지로 가공하는 단계를 연결했습니다.',
      ],
      [
        '데이터 분할 후 CNN 파인튜닝',
        '구성한 데이터를 분할하고 CNN을 파인튜닝해 입자 종류를 분류했습니다. 새로운 모델 구조를 제안하기보다 직접 만든 실험 데이터를 기존 모델의 학습에 활용한 경험입니다.',
      ],
    ],
    stack: ['Python', 'TensorFlow', 'CNN', '이미지 전처리', 'Fine-tuning'],
    result:
      '직접 촬영한 궤적 사진을 이미지 데이터셋으로 구성하고, 전처리·분할·CNN 파인튜닝까지 수행',
    scope:
      '수행 과정은 당시 경험을 정리한 기록에 근거합니다. 원본 코드·평가 로그를 재확인하지 못해 모델명과 정량 성능은 제시하지 않습니다.',
  },
  {
    id: 'P03',
    anchor: 'qdd',
    title: 'Quote Distortion Detection',
    label: '2025.08–12 · NLP · 3인 팀',
    summary:
      '기사의 인용문을 원 발언과 비교하는 Chrome 확장 프로그램입니다. 실제 기사와 원문을 짝지어 데이터를 구성하고, 과적합을 분석하며 원문이 학습·검증 데이터에 겹치는 문제를 확인했습니다. 검색·정렬·분류 결과는 사용자가 비교할 수 있는 화면으로 연결했습니다.',
    role: '문제 정의·처리 흐름 설계·React 확장 프로그램 구현, 데이터 수집·라벨 기준 검토 참여와 원문 기준 분할 수정',
    architecture: [
      '인용문 추출',
      '번역 · 원 발언 검색',
      'SBERT 문장 정렬',
      'MPNet 왜곡 분류',
      'React 확장 프로그램',
    ],
    decisions: [
      [
        '검색과 판단을 분리',
        '잘못 찾은 원문을 비교하면 분류 결과도 믿기 어렵습니다. 원 발언 후보 검색과 SBERT 정렬, MPNet 분류를 구분해 전체 처리 흐름을 설계했습니다.',
      ],
      [
        '비교 근거를 화면에 표시',
        '왜곡 여부만 보여주는 대신 기사 인용문 하이라이트와 원문 비교, 분류 결과를 연결하는 React 확장 프로그램 화면을 구현했습니다.',
      ],
      [
        '생성 문장보다 실제 기사에서 출발',
        '팀은 직접인용이 있는 기사를 수집하고 인용문·발화자·날짜로 원 발언을 찾았습니다. 생성자별 문체에 치우친 초기 데이터의 한계를 검토하고, 실제 기사–원문 쌍과 왜곡 여부의 이진 라벨을 중심으로 데이터 구성에 참여했습니다.',
      ],
      [
        '기사 단위 분할에서 원문 기준 분할로',
        '과적합이 나타나 데이터셋을 다시 열어보니, 같은 연설문에서 나온 여러 기사가 학습·검증 양쪽에 들어가 있었습니다. 원문을 기준으로 기사를 정렬하고 같은 원문을 공유하는 데이터가 섞이지 않도록 분할 방식을 바꿨습니다. 이후 학습이 진행되는 변화를 확인했습니다.',
      ],
    ],
    stack: ['Python', 'SBERT', 'MPNet', 'React', 'JavaScript', 'Git'],
    result:
      '팀 평가 결과 F1 Macro 0.8667 · 전체 데이터 4,646건 · Chrome 확장 프로그램 구현',
    scope:
      'F1은 공개 README의 학습 3,717건·검증 929건을 사용한 팀 평가입니다. 원문 기준 분할 수정은 직접 수행한 경험이며, 위 F1을 그 수정만의 개선 효과로 해석하지 않습니다. 공개 가중치가 없어 평가를 재현하지는 않았습니다.',
    href: 'https://github.com/chaeeunwang/Quote-Distortion-Detection',
  },
  {
    id: 'P04',
    anchor: 'hr-leave-assistant',
    title: 'HR Leave Assistant',
    label: '2026.08 · SKALA 개인 실습 확장',
    summary:
      '규정을 답하는 챗봇이 실제 연차 데이터를 바꿀 때, 권한과 중복 실행을 어떻게 통제할지 구현한 로컬 데모입니다.',
    role: '교육용 기반을 확장한 연차 업무 Tool·대화 흐름·비동기 정합성 처리와 검증',
    architecture: [
      'Spring AI · RAG',
      'ToolContext · 권한',
      '연차 업무 Tool',
      'H2 · 트랜잭션',
      'Outbox · RabbitMQ',
      'JDBC 대화 메모리',
    ],
    decisions: [
      [
        '권한은 서버에서 결정',
        '모델이 넘긴 사용자 ID를 신뢰하지 않고 인증된 tenantId·userId를 ToolContext로 전달했습니다. 조회·취소 시 신청 소유권을 검사합니다.',
      ],
      [
        '재전달에도 한 번만 처리',
        'DB 저장 뒤 메시지가 유실되지 않도록 job과 Outbox를 함께 저장했습니다. 업무 식별자와 멱등 처리로 재전달 때 신청·차감·복원이 반복되지 않게 했습니다.',
      ],
      [
        '업무 결과는 DB에서 확정',
        '규정 질문과 연차 신청을 구분하고 날짜·사유를 대화에서 확인합니다. Tool의 returnDirect로 확정된 신청번호·상태를 모델이 다시 쓰지 않게 했습니다.',
      ],
    ],
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring AI',
      'Spring Security',
      'RabbitMQ',
      'JDBC · H2',
      'JUnit 5',
    ],
    result:
      '공개 README 2026.09.22 기준: 인증·소유권·동시 신청·중복 요청·Outbox 복구 관련 80개 자동 테스트 통과, 실행 JAR 패키징 성공',
    scope:
      '교육용 로컬 데모입니다. 실제 인사·결재 시스템 연동이나 운영 성과는 없으며, 공개본 준비 때 외부 모델·RabbitMQ를 포함한 대화 흐름은 재실행하지 않았습니다.',
    href: 'https://github.com/chaeeunwang/hr-leave-assistant',
  },
  {
    id: 'P05',
    anchor: 'chatbot',
    title: 'sLLM 챗봇 백엔드',
    label: '2025.02–05 · Aphrosys 인턴',
    summary:
      '공공 서비스용 챗봇의 백엔드 개발을 보조하며, 세션 문맥 구분과 개인정보 마스킹, 불충분한 질문에 대한 응답 처리를 다뤘습니다.',
    role: '공공사업부 sLLM 백엔드 개발 보조: 질문 분류·라우팅, Redis 문맥 관리, 개인정보 처리',
    architecture: [
      'FastAPI · LangChain',
      '질문 분류',
      '모델 라우팅',
      'Redis 세션 문맥',
      'NER · 정규식',
      '추가 질문',
    ],
    decisions: [
      [
        '세션별 문맥 구분',
        '사용자와 대화 세션의 문맥이 섞이지 않도록 user ID와 session ID를 조합한 Redis 키, TTL·초기화 조건을 다뤘습니다.',
      ],
      [
        '모델과 규칙의 역할 분리',
        '개인정보 탐지·마스킹에 KoELECTRA NER와 YAML 정규식을 함께 사용해 모델 탐지와 명시적 패턴 처리를 결합했습니다.',
      ],
      [
        '답변 전에 질문 확인',
        '분류 점수와 질문의 충분성에 따라 모델을 선택하거나 추가 질문을 생성해, 불완전한 입력을 그대로 답변으로 넘기지 않도록 했습니다.',
      ],
    ],
    stack: ['Python', 'FastAPI', 'Redis', 'LangChain', 'KoELECTRA', 'YAML'],
    result:
      '질문 분류·모델 라우팅, 세션 문맥 구분, 개인정보 탐지·마스킹 관련 백엔드 개발 보조',
    scope:
      '공개 이력과 업무 기록에 근거한 담당 기능입니다. 위 구성은 기능의 묶음이며 실제 호출 순서를 뜻하지 않습니다.',
  },
  {
    id: 'P06',
    anchor: 'risk-detection',
    title: '위험 대화 탐지 모델',
    label: '2024.07–11 · AI보안 교육 프로젝트',
    summary:
      '익명 커뮤니티 게시글·댓글의 위험 대화 패턴을 분류한 NLP 프로젝트입니다. 수집 데이터의 개인정보를 마스킹하고 BERT 분류와 임베딩 기반 모델을 비교했습니다.',
    role: '데이터 수집·개인정보 마스킹·위험 대화 패턴 분류 실험',
    architecture: [
      'Selenium · BeautifulSoup',
      '정규식 마스킹',
      '데이터 · 라벨',
      'BERT 분류 · 임베딩',
      'RandomForest · SVM',
    ],
    decisions: [
      [
        '수집 데이터의 개인정보 처리',
        '게시글·댓글을 수집하는 과정에 정규식 마스킹을 적용해 개인정보가 포함된 텍스트를 그대로 학습에 사용하지 않도록 했습니다.',
      ],
      [
        '분류 방식 비교',
        '문맥 정보를 활용하기 위해 BERT 단일 분류와 BERT 임베딩에 RandomForest·SVM을 결합하는 구조를 실험했습니다.',
      ],
      [
        '탐지 결과의 해석 범위',
        '모델이 분류하는 대상은 텍스트의 위험 패턴입니다. 이를 실제 범죄 가능성이나 개인에 대한 확정 판단으로 확대하지 않습니다.',
      ],
    ],
    stack: [
      'Python',
      'KoBERT',
      'SVM',
      'RandomForest',
      'Selenium',
      'BeautifulSoup',
    ],
    result:
      '기존 프로젝트 기록 기준 약 1,000건의 데이터로 BERT 단일 분류·임베딩 결합 구조를 비교 실험',
    scope:
      '데이터 분할과 모델별 평가 수치를 재확인해야 해, 현재는 데이터 처리와 분류 실험 범위를 소개합니다.',
  },
  {
    id: 'P07',
    anchor: 'agentic-rag',
    title: 'KV cache Agentic RAG 평가',
    label: '2026.09 · SKALA 팀 프로젝트 · LangGraph',
    summary:
      '논문·웹 자료로 KV cache 관련 기술을 여러 관점에서 평가하는 파이프라인입니다. 분석을 합칠 때 출처가 사라지거나 근거 부족을 성공으로 처리하지 않도록, 주장과 근거를 함께 전달하는 상태 계약과 실행 흐름을 구현했습니다.',
    role: '평가 파이프라인·State 계약·제한 재검색·병렬 합류·근거 연결 도메인 RAG 구현',
    architecture: [
      '기술 · 도메인 입력',
      '논문 RAG · 기술 조사',
      '근거 부족 시 제한 재검색',
      '시장 · 이해관계자 · 도메인 평가',
      '결과 합류 · 근거 검사',
      '보고서 · REFERENCE',
    ],
    decisions: [
      [
        '주장에서 원문까지 추적',
        'Finding이 실제 Evidence ID와 기술 ID를 참조하도록 State를 정의했습니다. 수집하지 않은 근거를 인용하거나 다른 기술의 논문을 근거로 조사 완료를 선언하면 검증 단계에서 걸러냅니다.',
      ],
      [
        '근거 부족과 실행 오류를 구분',
        '기술 조사 결과가 partial이면 한도 안에서 다시 검색하고, API·근거 참조 오류는 error로 처리해 보고서 생성을 중단합니다. 다른 관점의 부족한 근거는 한계로 남겨 종합 결과에 전달합니다.',
      ],
      [
        '병렬 평가가 끝난 뒤 한 번 종합',
        '시장·이해관계자·도메인 평가가 각각 다른 State 필드를 갱신하고 모두 합류한 뒤 종합하도록 구성했습니다. 도메인 평가는 기술별·평가 기준별 논문 근거를 연결합니다.',
      ],
    ],
    stack: ['Python', 'LangGraph', 'Pydantic', 'RAG', 'E5', 'NumPy'],
    result:
      '근거 ID 검증·제한 재검색·병렬 합류·오류 중단 구현 · API 없는 상태 전이·도메인 검색 검사 통과 기록',
    scope:
      '본인 작성 커밋 55413a2의 구현을 기준으로 합니다. KV cache 자체를 최적화한 프로젝트가 아니며, 해당 State를 적용한 전체 외부 API 실행·최종 보고서 재생성은 별도 검증하지 않았습니다.',
    href: 'https://github.com/chaeeunwang/kv-cache-agentic-rag/tree/55413a28f36fe0d322a87ecaf11260bbb46d57b7',
    linkLabel: '구현 스냅샷',
  },
  {
    id: 'P08',
    anchor: 'license-guard',
    title: 'License Guard MSA',
    label: '2026.08 · SKALA 팀 프로젝트 · 백엔드·풀스택',
    summary:
      '의존성 lockfile의 라이선스 위험을 확인하고 정책별 조치와 구매 검토로 이어주는 서비스입니다. 추가 정보 요청에 답하는 과정에서 신청 소유권과 현재 상태를 검사하고, 오래된 화면이 최신 검토 내용을 덮어쓰지 못하도록 보완했습니다.',
    role: 'Vue 화면·라이선스 검증 백엔드·정책별 조치 연결·구매 신청 재제출과 동시 변경 처리',
    architecture: [
      'Vue · API Gateway',
      'lockfile · 의존성 분석',
      '라이선스 정책 판정',
      '권장 조치 · 구매 요청',
      '추가 정보 요청',
      '소유권 · 상태 · 버전 검사',
    ],
    decisions: [
      [
        '위험을 발견한 다음 행동까지 연결',
        '라이선스 위험 상세에 정책별 권장 조치를 표시하고 구매 요청으로 연결했습니다. 부적절한 대체 후보 요청을 막아 분석 결과와 후속 업무가 이어지도록 했습니다.',
      ],
      [
        '새 신청 대신 기존 신청을 재제출',
        '추가 정보 요청 상태에서 신청자 본인만 답변할 수 있도록 소유권·현재 상태·입력 용량을 검사했습니다. 답변을 추가한 기존 신청은 MORE_INFO에서 PENDING으로 돌아갑니다.',
      ],
      [
        '행 잠금과 화면 버전을 함께 확인',
        '검토와 재제출이 동시에 실행돼 상태를 덮어쓰는 일을 막기 위해 신청 행을 잠갔습니다. expectedUpdatedAt도 비교해 오래된 화면의 변경 요청에는 409를 반환하도록 구현했습니다.',
      ],
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Vue',
      'Python',
      'FastAPI',
      'MariaDB',
      'JWT',
    ],
    result:
      '위험 확인부터 정책 조치·구매 검토까지 화면·API 연결 · 본인 재제출·상태 전이·오래된 변경 요청 처리 구현',
    scope:
      '팀 비공개 저장소의 본인 작성 커밋과 로컬 코드를 기준으로 합니다. 제공 인증 서비스와 다른 팀원의 구현은 담당 범위에 포함하지 않으며, 전체 컨테이너 기동·운영 성과를 뜻하지 않습니다.',
  },
  {
    id: 'P09',
    anchor: 'qwen-lora',
    title: 'Qwen LoRA 학습과 모델 선정',
    label: '2026.08 · SKALA 실습 확장 · LLM 평가',
    summary:
      '사내 규정 응답용 Qwen LoRA를 여러 버전으로 학습·비교했습니다. 개발 평가에서 좋아 보인 새 모델도 별도 질문에서 회귀할 수 있어, 학습과 체크포인트 선택에 사용하지 않은 질문으로 최종 모델을 다시 판단했습니다.',
    role: '교육용 학습 기반의 데이터 보강·LoRA 실험·버전 비교·독립 질문 평가와 결과 해석',
    architecture: [
      '규정 데이터 · train/validation',
      'Qwen · LoRA SFT',
      '체크포인트 고정',
      '별도 질문 20문항',
      '품질 · 지연 · 문항별 회귀',
      'v3 승격 보류 · v2 유지',
    ],
    decisions: [
      [
        '모델 선택에 쓰지 않은 질문으로 평가',
        'v3 학습과 체크포인트 선택 후 known-policy 15문항·unknown-policy 5문항을 만들었습니다. 기존 학습·검증 질문과 정규화 일치가 없는지 확인하고 Base·v1·v2·v3를 같은 생성 조건으로 비교했습니다.',
      ],
      [
        '새 버전의 회귀를 보고 승격 보류',
        '별도 평가에서 v2의 Token F1은 0.8474, v3는 0.6733이었습니다. 문항별 정책 누락과 잘못된 내용 생성도 함께 살펴 v3를 최종본으로 올리지 않고 v2를 유지했습니다.',
      ],
      [
        '응답시간을 처리 속도와 구분',
        'warmup을 제외하고 모델 실행 순서와 장치 동기화를 맞춰 생성시간을 측정했습니다. v3의 더 긴 지연은 출력 길이 영향이 컸으므로 엔진 속도가 개선됐다는 결론으로 바꾸지 않았습니다.',
      ],
    ],
    stack: ['Python', 'Qwen2.5', 'PyTorch', 'PEFT · LoRA', 'SFT', 'Apple MPS'],
    result: '독립 질문 20문항과 문항별 회귀 검토를 근거로 v3 승격 보류·v2 유지',
    scope:
      '저장된 평가 JSON·보고서를 대조한 결과입니다. 제공 교육 코드를 확장한 실습이며, 20문항의 Token F1을 일반 성능이나 통계적 우월성으로 확대하지 않습니다. 이번 포트폴리오 편집에서 재학습·추론하지 않았습니다.',
  },
  {
    id: 'P10',
    anchor: 'malware-cnn',
    title: 'CNN 악성코드 이미지 분류',
    label: '2024.04–06 · 빅데이터응용보안 · 개인 과제',
    summary:
      '악성코드 파일을 이미지로 바꿔 CNN 입력으로 사용하는 실험입니다. PE feature를 탐색한 뒤 바이트의 좌표 분포를 이미지로 표현했고, 학습·검증 성능이 크게 벌어지는 과적합을 확인해 입력 증강과 정규화를 시도했습니다.',
    role: '데이터 EDA·바이트 이미지 변환 코드·CNN 학습·증강과 정규화 실험·결과 분석',
    architecture: [
      'PE feature EDA',
      '파일을 4바이트씩 읽기',
      '두 값의 좌표 변환',
      '256×256 이미지',
      'CNN 학습 · 검증',
      '증강 · 정규화 실험',
    ],
    decisions: [
      [
        'feature 검토에서 이미지 표현으로',
        'feature 상관관계와 라벨별 분포를 살피고 악성코드 이미지 분류 선행연구를 검토했습니다. 파일을 4바이트씩 읽어 두 값으로 나누고 좌표에 누적한 256×256 이미지를 생성했습니다.',
      ],
      [
        '학습 정확도보다 검증 실패를 확인',
        '발표 자료의 초기 로그에서는 학습 정확도 0.8079와 검증 정확도 0.1177이 크게 벌어졌습니다. 학습 결과만으로 분류가 잘된다고 판단하지 않고 과적합을 후속 실험의 문제로 잡았습니다.',
      ],
      [
        '개선 시도와 남은 한계를 함께 기록',
        '입력 증강과 정규화 후 자료에 기록된 검증 정확도는 26.20%였습니다. 충분한 분류 성능을 확보하지 못한 결과와 모델 구조 개선의 필요성을 발표에 남겼습니다.',
      ],
    ],
    stack: ['Python', 'NumPy', 'Pillow', 'CNN', 'EDA', '이미지 전처리'],
    result:
      '바이트→이미지 변환·CNN 학습·입력 증강 및 정규화 수행 · 과적합과 낮은 검증 성능을 분석한 발표 자료',
    scope:
      '기말 발표 자료의 코드·학습 로그를 근거로 합니다. 모델·데이터를 재실행하지 않았으며, 서로 다른 학습 로그의 차이를 동일 조건의 개선율로 표현하지 않습니다.',
  },
] as const;

export default function DeveloperPortfolio() {
  return (
    <main className="detail-main" id="top">
      <PortfolioHeader active="developer" />

      <section className="detail-hero" id="main-content">
        <p className="eyebrow">AI · BACKEND DEVELOPER</p>
        <h1>
          모델에서 서비스까지,
          <br />
          흐름을 구현합니다.
        </h1>
        <p className="lead">
          이미지·언어 모델의 입력과 평가를 점검하고, 결과를 사용자 흐름으로
          연결합니다. RAG에서는 근거와 실패 상태를, 백엔드에서는 권한과 데이터
          변경을 다룹니다.
        </p>
        <nav className="case-navigation" aria-label="구현 사례 바로가기">
          {projects.map((project) => (
            <a key={project.anchor} href={`#${project.anchor}`}>
              {project.title} <ArrowDown size={15} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>

      <section className="project-section" id="projects">
        <div className="section-heading">
          <h2>개발 사례</h2>
        </div>

        {projects.map((project) => (
          <article
            className="engineering-project"
            id={project.anchor}
            key={project.id}
          >
            <div className="project-side">
              <span>{project.id}</span>
              <p>{project.label}</p>
            </div>
            <div className="project-content">
              <div className="project-title">
                <h3>{project.title}</h3>
              </div>
              <p className="project-summary">{project.summary}</p>
              {'href' in project && project.href ? (
                <div className="project-links">
                  <a
                    className="source-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {'linkLabel' in project ? project.linkLabel : 'GitHub'}{' '}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              ) : null}

              <div className="role-note">
                <strong>내 역할</strong>
                <span>{project.role}</span>
              </div>
              <div className="result-note">
                <strong>결과</strong>
                <span>{project.result}</span>
              </div>
              <p className="evidence-note">
                <strong>확인 범위</strong> · {project.scope}
              </p>

              <div className="architecture-flow" aria-label="주요 구성">
                {project.architecture.map((component) => (
                  <div key={component}>
                    <b>{component}</b>
                  </div>
                ))}
              </div>

              <div className="decision-list">
                {project.decisions.map(([title, description]) => (
                  <article key={title}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </article>
                ))}
              </div>

              <ul className="tag-list" aria-label="사용 기술">
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="stack-section" aria-labelledby="stack-title">
        <div>
          <p className="eyebrow">TECH STACK</p>
          <h2 id="stack-title">사용 기술</h2>
        </div>
        <div className="stack-groups">
          <article>
            <h3>언어·프레임워크</h3>
            <p>
              Java · Spring Boot · Spring Security · Python · FastAPI · React ·
              Vue
            </p>
          </article>
          <article>
            <h3>AI·데이터</h3>
            <p>
              TensorFlow · CNN · Computer Vision · Spring AI · RAG · LangChain ·
              LangGraph · Pydantic · Qwen · PEFT/LoRA · PyTorch · KoBERT · SBERT
              · MPNet · KoELECTRA
            </p>
          </article>
          <article>
            <h3>저장소·검증</h3>
            <p>
              RabbitMQ · JDBC · H2 · MariaDB · Redis · JUnit 5 · GitHub Actions
              · Git
            </p>
          </article>
        </div>
      </section>

      <PortfolioFooter />
    </main>
  );
}
