export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** 별점을 나타냅니다. 클라이언트로부터 입력 받은 0~5 실수를 0~10 정수로 변환합니다. */
  Rating: any;
  /** Date type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type AddItemPriceInput = {
  endAt?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isCrawlUpdating: Scalars['Boolean'];
  originalPrice: Scalars['Int'];
  pickkDiscountAmount?: Maybe<Scalars['Int']>;
  pickkDiscountRate: Scalars['Int'];
  sellPrice: Scalars['Int'];
  startAt?: Maybe<Scalars['DateTime']>;
};

export type AddItemUrlInput = {
  isPrimary: Scalars['Boolean'];
  url: Scalars['String'];
};

export type AnswerInquiryInput = {
  /** 최대 길이 255 */
  content: Scalars['String'];
  /** 표시될 답변작성자 이름. 최대 길이 30 */
  displayAuthor: Scalars['String'];
};

/** 애플 로그인시 사용됩니다. [App, Web] */
export enum AppleClientType {
  App = 'App',
  Web = 'Web',
}

/** 은행 식별 코드입니다. InicisBankCode와 값이 같습니다. */
export enum BankCode {
  AbnAmro = 'AbnAmro',
  BcCard = 'BcCard',
  Boa = 'Boa',
  Busan = 'Busan',
  ChBank = 'ChBank',
  Chohung = 'Chohung',
  Citi = 'Citi',
  Commercial = 'Commercial',
  Cu = 'Cu',
  Daegu = 'Daegu',
  Deutsche = 'Deutsche',
  EPost = 'EPost',
  ExShinhan = 'ExShinhan',
  Hana = 'Hana',
  Hanil = 'Hanil',
  Hanmi = 'Hanmi',
  Housing = 'Housing',
  Hsbc = 'Hsbc',
  Ibk = 'Ibk',
  Jeju = 'Jeju',
  Jeonbuk = 'Jeonbuk',
  JpMorgan = 'JpMorgan',
  KBank = 'KBank',
  KakaoBank = 'KakaoBank',
  KakaoMoney = 'KakaoMoney',
  Kangwon = 'Kangwon',
  Kb = 'Kb',
  Kdb = 'Kdb',
  Keb = 'Keb',
  Kwangju = 'Kwangju',
  Kyongnam = 'Kyongnam',
  LPoint = 'LPoint',
  MitsubishiTokyo = 'MitsubishiTokyo',
  MutualSavings = 'MutualSavings',
  NaverPoint = 'NaverPoint',
  NhBank = 'NhBank',
  Nonghyup = 'Nonghyup',
  Payco = 'Payco',
  Peace = 'Peace',
  Sc = 'Sc',
  Seoul = 'Seoul',
  ShBank = 'ShBank',
  Shinan = 'Shinan',
  Shinhan = 'Shinhan',
  Shinsegae = 'Shinsegae',
  Sj = 'Sj',
  SsgMoney = 'SsgMoney',
  TossBank = 'TossBank',
  TossMoney = 'TossMoney',
  Woori = 'Woori',
}

export type BaseOrderOutput = {
  /** [MODEL ONLY] */
  brands: Array<OrderBrand>;
  createdAt: Scalars['DateTime'];
  failedAt?: Maybe<Scalars['DateTime']>;
  /** [MODEL ONLY] */
  id: Scalars['String'];
  /** (PK) 주문고유번호. YYMMDDHHmmssSSS + NN(00~99) */
  merchantUid: Scalars['String'];
  paidAt?: Maybe<Scalars['DateTime']>;
  payMethod?: Maybe<PayMethod>;
  payingAt?: Maybe<Scalars['DateTime']>;
  refundAccount?: Maybe<OrderRefundAccount>;
  refundRequests: Array<RefundRequest>;
  status: OrderStatus;
  totalCouponDiscountAmount: Scalars['Int'];
  totalItemFinalPrice: Scalars['Int'];
  totalPayAmount: Scalars['Int'];
  totalShippingFee: Scalars['Int'];
  totalUsedPointAmount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['Int']>;
  vbankDodgedAt?: Maybe<Scalars['DateTime']>;
  vbankReadyAt?: Maybe<Scalars['DateTime']>;
};

export type Brand = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  nameEng?: Maybe<Scalars['String']>;
  nameKor: Scalars['String'];
  seller?: Maybe<Seller>;
  updatedAt: Scalars['DateTime'];
};

export type BulkShipOrderItemInput = {
  shipOrderItemInputs: Array<ExtendedShipOrderItemInput>;
};

export type BulkUpdateItemInput = {
  isMdRecommended?: Maybe<Scalars['Boolean']>;
  isSellable?: Maybe<Scalars['Boolean']>;
  majorCategoryId?: Maybe<Scalars['Int']>;
  minorCategoryId?: Maybe<Scalars['Int']>;
};

export type Campaign = {
  createdAt: Scalars['DateTime'];
  endAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** [MODEL ONLY] */
  isActive: Scalars['Boolean'];
  items: Array<Item>;
  /** 적용 정산률 (0~100) */
  rate: Scalars['Int'];
  startAt: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CancelOrderInput = {
  orderItemMerchantUids: Array<Scalars['String']>;
  /** 취소 사유 */
  reason: Scalars['String'];
};

export enum CardCode {
  Amex = 'Amex',
  Bc = 'Bc',
  Diners = 'Diners',
  Hanask = 'Hanask',
  Hanmi = 'Hanmi',
  Hyundai = 'Hyundai',
  Jcb = 'Jcb',
  KakaoMoney = 'KakaoMoney',
  Kb = 'Kb',
  Keb = 'Keb',
  LPoint = 'LPoint',
  Lotte = 'Lotte',
  Master = 'Master',
  NaverPoint = 'NaverPoint',
  Nh = 'Nh',
  Payco = 'Payco',
  Samsung = 'Samsung',
  Shinhan = 'Shinhan',
  SsgMoney = 'SsgMoney',
  TossMoney = 'TossMoney',
  Visa = 'Visa',
}

export type Cart = {
  /** CartItem을 브랜드 단위로 묶은 것 */
  cartBrands: Array<CartBrand>;
  cartItems: Array<CartItem>;
  /** userId와 동일한 더미값입니다. */
  id: Scalars['Int'];
};

export type CartBrand = {
  brand: Brand;
  cartItems: Array<CartItem>;
  sellerShippingPolicy: SellerShippingPolicy;
};

export type CartItem = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** [MODEL ONLY] */
  isAdjusted?: Maybe<Scalars['Boolean']>;
  product: Product;
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  recommendDigest?: Maybe<Digest>;
  recommendDigestId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type CheckPinInput = {
  code: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type Comment = {
  content?: Maybe<Scalars['String']>;
  contentUpdatedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isContentUpdated: Scalars['Boolean'];
  isDeleted: Scalars['Boolean'];
  /** [MODEL ONLY] */
  isLiking?: Maybe<Scalars['Boolean']>;
  /** [MODEL ONLY] */
  isMine?: Maybe<Scalars['Boolean']>;
  likeCount: Scalars['Int'];
  mentionedUser?: Maybe<User>;
  mentionedUserId?: Maybe<Scalars['Int']>;
  ownerId: Scalars['Int'];
  ownerType: CommentOwnerType;
  parent?: Maybe<Comment>;
  parentId?: Maybe<Scalars['Int']>;
  replies: Array<Comment>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type CommentFilter = {
  ownerId?: Maybe<Scalars['Int']>;
  ownerType?: Maybe<CommentOwnerType>;
  parentIdIsNull?: Maybe<Scalars['Boolean']>;
};

/** 댓글 연관 객체 분류입니다. */
export enum CommentOwnerType {
  Digest = 'Digest',
  Look = 'Look',
  Video = 'Video',
}

export type Coupon = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  spec?: Maybe<CouponSpecification>;
  specId: Scalars['Int'];
  status?: Maybe<CouponStatus>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type CouponSpecification = {
  /** 이 값으로 클라이언트에서 필터링 해주세요. */
  availableAt?: Maybe<Scalars['DateTime']>;
  brand?: Maybe<Brand>;
  brandId?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  discountAmount?: Maybe<Scalars['Int']>;
  /** 1~99 정수 */
  discountRate?: Maybe<Scalars['Int']>;
  expireAt: Scalars['DateTime'];
  id: Scalars['Int'];
  maximumDiscountPrice?: Maybe<Scalars['Int']>;
  minimumForUse?: Maybe<Scalars['Int']>;
  /** 최대 30자 */
  name: Scalars['String'];
  type: CouponType;
  updatedAt: Scalars['DateTime'];
};

/** 쿠폰 상태입니다. 사용가능(Ready), 사용됨(Applied) */
export enum CouponStatus {
  Applied = 'Applied',
  Ready = 'Ready',
}

/** 쿠폰 분류입니다. 정률적용(Rate), 정액적용(Amount) */
export enum CouponType {
  Amount = 'Amount',
  Rate = 'Rate',
}

export type Courier = {
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  returnReserveUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateCartItemInput = {
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  recommendDigestId?: Maybe<Scalars['Int']>;
};

export type CreateCommentInput = {
  content?: Maybe<Scalars['String']>;
  mentionedUserId?: Maybe<Scalars['Int']>;
  ownerId: Scalars['Int'];
  ownerType: CommentOwnerType;
  parentId?: Maybe<Scalars['Int']>;
};

export type CreateCouponInput = {
  specId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CreateCouponSpecificationInput = {
  /** 이 값으로 클라이언트에서 필터링 해주세요. */
  availableAt?: Maybe<Scalars['DateTime']>;
  brandId?: Maybe<Scalars['Float']>;
  discountAmount?: Maybe<Scalars['Int']>;
  /** 1~99 정수 */
  discountRate?: Maybe<Scalars['Int']>;
  expireAt: Scalars['DateTime'];
  maximumDiscountPrice?: Maybe<Scalars['Int']>;
  minimumForUse?: Maybe<Scalars['Int']>;
  /** 최대 30자 */
  name: Scalars['String'];
  type: CouponType;
};

export type CreateCourierInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  returnReserveUrl: Scalars['String'];
};

export type CreateDigestInput = {
  /** 최대 길이 65000자 */
  content?: Maybe<Scalars['String']>;
  imageUrls: Array<Scalars['String']>;
  itemId?: Maybe<Scalars['Int']>;
  itemPropertyValueIds: Array<Scalars['Int']>;
  rating?: Maybe<Scalars['Rating']>;
  size: Scalars['String'];
  /** 최대 길이 127 */
  title?: Maybe<Scalars['String']>;
};

export type CreateInquiryInput = {
  /** 알림톡 받을 전화번호 (11글자) */
  contactPhoneNumber: Scalars['String'];
  /** 최대 길이 255 */
  content: Scalars['String'];
  isSecret: Scalars['Boolean'];
  itemId?: Maybe<Scalars['Int']>;
  orderItemMerchantUid?: Maybe<Scalars['String']>;
  /** 최대 길이 100 */
  title: Scalars['String'];
  type: InquiryType;
};

export type CreateItemDetailImageInput = {
  urls: Array<Scalars['String']>;
};

export type CreateItemOpionValueInput = {
  name: Scalars['String'];
  priceVariant: Scalars['Int'];
};

export type CreateItemOptionInput = {
  name: Scalars['String'];
  values: Array<CreateItemOpionValueInput>;
};

export type CreateItemOptionSetInput = {
  options: Array<CreateItemOptionInput>;
};

export type CreateItemSizeChartInput = {
  labels: Array<Scalars['String']>;
  recommendations?: Maybe<Array<ItemSizeRecommendationInput>>;
  sizes: Array<ItemSizeInput>;
};

export type CreateLookDigestInput = {
  itemId: Scalars['Int'];
  size: Scalars['String'];
};

export type CreateLookInput = {
  digests: Array<CreateLookDigestInput>;
  imageUrls: Array<Scalars['String']>;
  styleTagIds: Array<Scalars['Int']>;
  /** 최대 길이 127 */
  title: Scalars['String'];
};

export type CreateOrderVbankReceiptInput = {
  bankCode?: Maybe<BankCode>;
  due?: Maybe<Scalars['DateTime']>;
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number?: Maybe<Scalars['String']>;
  ownerName?: Maybe<Scalars['String']>;
};

export type CreateProductShippingReservePolicyInput = {
  /** 예약발송 예정일 */
  estimatedShippingBegginDate: Scalars['DateTime'];
  /** 예약설정된 재고. 예약발송일이 되면, 예약발송 상태는 자동으로 종료되며, 잔여 예약발송 재고는 일반 재고에 합산됩니다. */
  stock: Scalars['Int'];
};

export type CreateRefundAccountInput = {
  bankCode: BankCode;
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
};

export type CreateSellerClaimPolicyInput = {
  description?: Maybe<Scalars['String']>;
  fee: Scalars['Int'];
  isExchangable: Scalars['Boolean'];
  isRefundable: Scalars['Boolean'];
  /** 담당자 번호 */
  phoneNumber: Scalars['String'];
  /** 담당자 이름 */
  picName: Scalars['String'];
};

export type CreateSellerCrawlPolicyInput = {
  /** 크롤링된 새로운 아이템들을 추가 등록하는가 */
  isInspectingNew: Scalars['Boolean'];
  /** 기존 아이템들의 이름/가격을 업데이트하는가 */
  isUpdatingItems: Scalars['Boolean'];
};

export type CreateSellerCrawlStrategyInput = {
  baseUrl: Scalars['String'];
  codeRegex: Scalars['String'];
  itemsSelector: Scalars['String'];
  pageParam?: Maybe<Scalars['String']>;
  pagination: Scalars['Boolean'];
  /** '<>'으로 join된 상태다. */
  startPathNamesJoin: Scalars['String'];
};

export type CreateSellerInput = {
  brandId: Scalars['Int'];
  businessCode?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  claimPolicyInput: CreateSellerClaimPolicyInput;
  courierId: Scalars['Int'];
  crawlPolicyInput: CreateSellerCrawlPolicyInput;
  crawlStrategyInput: CreateSellerCrawlStrategyInput;
  csNotiPhoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  kakaoTalkCode?: Maybe<Scalars['String']>;
  mailOrderBusinessCode?: Maybe<Scalars['String']>;
  operationTimeMessage?: Maybe<Scalars['String']>;
  orderNotiPhoneNumber?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  /** 최대 20자 */
  representativeName?: Maybe<Scalars['String']>;
  returnAddressInput: CreateSellerReturnAddressInput;
  saleStrategyInput: CreateSellerSaleStrategyInput;
  settlePolicyInput?: Maybe<CreateSellerSettlePolicyInput>;
  shippingPolicyInput: CreateSellerShippingPolicyInput;
  userId: Scalars['Int'];
};

export type CreateSellerReturnAddressInput = {
  baseAddress: Scalars['String'];
  detailAddress: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  receiverName: Scalars['String'];
};

export type CreateSellerSaleStrategyInput = {
  canUseCoupon: Scalars['Boolean'];
  canUseMileage: Scalars['Boolean'];
  pickkDiscountRate: Scalars['Int'];
};

export type CreateSellerSettleAccountInput = {
  bankCode: BankCode;
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
};

export type CreateSellerSettlePolicyInput = {
  /** 정산 받을 계좌 */
  accountInput?: Maybe<CreateSellerSettleAccountInput>;
  /** 세금계산서 수령이메일 */
  email: Scalars['String'];
  /** 담당자 번호 */
  phoneNumber: Scalars['String'];
  picName: Scalars['String'];
  /** 기본 정산율 */
  rate: Scalars['Int'];
};

export type CreateSellerShippingPolicyInput = {
  description?: Maybe<Scalars['String']>;
  fee: Scalars['Int'];
  minimumAmountForFree: Scalars['Int'];
};

export type CreateShipmentInput = {
  courierId: Scalars['Int'];
  trackCode: Scalars['String'];
};

export type CreateShippingAddressInput = {
  baseAddress: Scalars['String'];
  detailAddress: Scalars['String'];
  isPrimary: Scalars['Boolean'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  receiverName: Scalars['String'];
};

export type CreateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  /** 최대 11자 */
  nickname: Scalars['String'];
  oauthCode?: Maybe<Scalars['String']>;
  oauthProvider?: Maybe<UserProviderType>;
  password?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type CreateVideoDigestInput = {
  itemId?: Maybe<Scalars['Int']>;
  itemPropertyValueIds?: Maybe<Array<Scalars['Int']>>;
  rating?: Maybe<Scalars['Rating']>;
  size: Scalars['String'];
  timestampEndSecond?: Maybe<Scalars['Int']>;
  timestampStartSecond?: Maybe<Scalars['Int']>;
  /** 최대 길이 127 */
  title?: Maybe<Scalars['String']>;
};

export type CreateVideoInput = {
  digests: Array<CreateVideoDigestInput>;
  /** 최대 길이 127 */
  title: Scalars['String'];
  /** 최대 길이 40 */
  youtubeCode: Scalars['String'];
};

export type Digest = {
  commentCount: Scalars['Int'];
  /** 최대 길이 65000자 */
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  hitCount: Scalars['Int'];
  id: Scalars['Int'];
  images: Array<DigestImage>;
  /** [MODEL ONLY] */
  isLiking?: Maybe<Scalars['Boolean']>;
  /** [MODEL ONLY] */
  isMine?: Maybe<Scalars['Boolean']>;
  item?: Maybe<Item>;
  itemId?: Maybe<Scalars['Int']>;
  itemPropertyValues: Array<ItemPropertyValue>;
  likeCount: Scalars['Int'];
  look?: Maybe<Look>;
  lookId?: Maybe<Scalars['Int']>;
  order: Scalars['Float'];
  rating?: Maybe<Scalars['Rating']>;
  score: Scalars['Float'];
  size: Scalars['String'];
  timestampEndSecond?: Maybe<Scalars['Int']>;
  timestampStartSecond?: Maybe<Scalars['Int']>;
  /** 최대 길이 127 */
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  video?: Maybe<Video>;
  videoId?: Maybe<Scalars['Int']>;
};

export type DigestFilter = {
  idIn?: Maybe<Array<Scalars['Int']>>;
  item?: Maybe<DigestItemFilter>;
  itemId?: Maybe<Scalars['Int']>;
  itemIdIn?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Scalars['String']>;
  ratingIsNull?: Maybe<Scalars['Boolean']>;
  user?: Maybe<DigestUserFilter>;
  userId?: Maybe<Scalars['Int']>;
  userIdIn?: Maybe<Array<Scalars['Int']>>;
};

export type DigestImage = {
  angle: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  digest: Digest;
  digestId: Scalars['Int'];
  key: Scalars['String'];
  order: Scalars['Float'];
  url: Scalars['String'];
};

export type DigestItemFilter = {
  /** [CUSTOM] */
  brandId?: Maybe<Scalars['Int']>;
  /** [CUSTOM] */
  majorCategoryId?: Maybe<Scalars['Int']>;
  /** [CUSTOM] */
  minorCategoryId?: Maybe<Scalars['Int']>;
};

export type DigestUserFilter = {
  /** [CUSTOM] */
  heightBetween?: Maybe<Array<Scalars['Int']>>;
};

export type DigestsExhibition = {
  createdAt: Scalars['DateTime'];
  digests: Array<Digest>;
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ExchangeRequest = {
  confirmedAt?: Maybe<Scalars['DateTime']>;
  convertedAt?: Maybe<Scalars['DateTime']>;
  faultOf: OrderClaimFaultOf;
  /** [MODEL ONLY] */
  id: Scalars['String'];
  isProcessDelaying: Scalars['Boolean'];
  isSettled: Scalars['Boolean'];
  itemName: Scalars['String'];
  /** orderItemMerchantUid와 동일 */
  merchantUid: Scalars['String'];
  orderItem: OrderItem;
  orderItemMerchantUid: Scalars['String'];
  pickShipment?: Maybe<Shipment>;
  pickShipmentId?: Maybe<Scalars['Int']>;
  /** 수거 완료 시점 */
  pickedAt?: Maybe<Scalars['DateTime']>;
  processDelayedAt: Scalars['DateTime'];
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Int']>;
  productVariantName: Scalars['String'];
  quantity: Scalars['Int'];
  reShipment?: Maybe<Shipment>;
  reShipmentId?: Maybe<Scalars['Int']>;
  /** 255자 이내로 적어주세요 */
  reason: Scalars['String'];
  /** 255자 이내로 적어주세요 */
  rejectReason?: Maybe<Scalars['String']>;
  rejectedAt?: Maybe<Scalars['DateTime']>;
  requestedAt: Scalars['DateTime'];
  reshippedAt?: Maybe<Scalars['DateTime']>;
  reshippingAt?: Maybe<Scalars['DateTime']>;
  seller?: Maybe<Seller>;
  sellerId?: Maybe<Scalars['Int']>;
  settledAt?: Maybe<Scalars['DateTime']>;
  /** 결제된 교환 배송비 */
  shippingFee: Scalars['Int'];
  status: ExchangeRequestStatus;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExchangeRequestFilter = {
  isProcessDelaying?: Maybe<Scalars['Boolean']>;
  merchantUidIn?: Maybe<Array<Scalars['String']>>;
  orderItem?: Maybe<ExchangeRequestOrderItemFilter>;
  requestedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  /** 재배송 완료일 (기간). 교환 완료와 동일한 의미로 사용됩니다. */
  reshippedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  /** 주문상품번호, 회수 운송장번호, 재배송 운송장번호로 검색 */
  search?: Maybe<Scalars['String']>;
  sellerId?: Maybe<Scalars['Int']>;
  status?: Maybe<ExchangeRequestStatus>;
  statusIn?: Maybe<Array<ExchangeRequestStatus>>;
};

export type ExchangeRequestOrderItemFilter = {
  paidAtBetween?: Maybe<Array<Scalars['DateTime']>>;
};

export type ExchangeRequestSearchFilter = {
  convertedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  isProcessDelaying?: Maybe<Scalars['Boolean']>;
  isSettled?: Maybe<Scalars['Boolean']>;
  orderBuyerName?: Maybe<Scalars['String']>;
  pickedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  productId?: Maybe<Scalars['Int']>;
  rejectedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  requestedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  reshippedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  reshippingAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  sellerId?: Maybe<Scalars['Int']>;
  settledAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  status?: Maybe<ExchangeRequestStatus>;
  statusIn?: Maybe<Array<ExchangeRequestStatus>>;
};

/** 교한신청 상태입니다. */
export enum ExchangeRequestStatus {
  Converted = 'Converted',
  Pending = 'Pending',
  Picked = 'Picked',
  Rejected = 'Rejected',
  Requested = 'Requested',
  Reshipped = 'Reshipped',
  Reshipping = 'Reshipping',
}

/** 생성일 기준 3달 이내의 건들만 count합니다. */
export type ExchangeRequestsCountOutput = {
  /** 수거 완료 */
  Picked: Scalars['Int'];
  /** 교환 거부 */
  Rejected: Scalars['Int'];
  /** 교환 요청 (= 수거중) */
  Requested: Scalars['Int'];
  /** 교환 배송 완료 */
  Reshipped: Scalars['Int'];
  /** 교환 배송 중 */
  Reshipping: Scalars['Int'];
  /** sellerId와 동일한 값. Apollo Client 캐싱을 위해 존재합니다. */
  id: Scalars['Int'];
  lastUpdatedAt: Scalars['DateTime'];
  /** 교환 처리 지연 (지연중인 requested + picked) */
  process_delayed: Scalars['Int'];
};

export type ExtendedShipOrderItemInput = {
  courierId: Scalars['Int'];
  merchantUid: Scalars['String'];
  trackCode: Scalars['String'];
};

export type FindSaleStrategyInput = {
  canUseCoupon: Scalars['Boolean'];
  canUseMileage: Scalars['Boolean'];
};

export type FollowOutput = {
  id: Scalars['Int'];
  /** [MODEL ONLY] */
  isFollowing?: Maybe<Scalars['Boolean']>;
};

export type GetAppleAuthCodeInput = {
  clientType: AppleClientType;
  code: Scalars['String'];
};

/** 조회수 누적 대상 객체 분류입니다. */
export enum HitOwnerType {
  Digest = 'Digest',
  Item = 'Item',
  Keyword = 'Keyword',
  Look = 'Look',
  Video = 'Video',
}

/** 생성일 기준 3달 이내의 건들만 count합니다. */
export type InquiriesCountOutput = {
  /** 답변 지연 (생성일 5일 경과) */
  delayed: Scalars['Int'];
  /** sellerId와 동일한 값(or 0). Apollo Client 캐싱을 위해 존재합니다. */
  id: Scalars['Int'];
  lastUpdatedAt: Scalars['DateTime'];
  /** 미답변 */
  not_answered: Scalars['Int'];
};

export type Inquiry = {
  answers: Array<InquiryAnswer>;
  /** 알림톡 받을 전화번호 (11글자) */
  contactPhoneNumber: Scalars['String'];
  /** 최대 길이 255 */
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isAnswered: Scalars['Boolean'];
  isSecret: Scalars['Boolean'];
  item?: Maybe<Item>;
  itemId?: Maybe<Scalars['Int']>;
  orderItem?: Maybe<OrderItem>;
  orderItemMerchantUid?: Maybe<Scalars['String']>;
  seller?: Maybe<Seller>;
  sellerId?: Maybe<Scalars['Int']>;
  /** 최대 길이 100 */
  title: Scalars['String'];
  type: InquiryType;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type InquiryAnswer = {
  /** 최대 길이 255 */
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  /** 표시될 답변작성자 이름. 최대 길이 30 */
  displayAuthor: Scalars['String'];
  from: InquiryAnswerFrom;
  id: Scalars['Int'];
  inquiry: Inquiry;
  inquiryId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

/** 답변 작성 출처입니다. (Seller or Root) */
export enum InquiryAnswerFrom {
  Root = 'Root',
  Seller = 'Seller',
}

export type InquiryFilter = {
  idIn?: Maybe<Array<Scalars['Int']>>;
  isAnswered?: Maybe<Scalars['Boolean']>;
  itemId?: Maybe<Scalars['Int']>;
  /** 주문상품번호로 검색 가능 */
  search?: Maybe<Scalars['String']>;
  sellerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type InquirySearchFilter = {
  createdAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  isAnswered?: Maybe<Scalars['Boolean']>;
  itemName?: Maybe<Scalars['String']>;
  orderBuyerName?: Maybe<Scalars['String']>;
  orderItemMerchantUid?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userNickname?: Maybe<Scalars['String']>;
};

/** 배송/사이즈/재입고/기타 */
export enum InquiryType {
  Etc = 'Etc',
  Restock = 'Restock',
  Ship = 'Ship',
  Size = 'Size',
}

export type Item = {
  brand: Brand;
  brandId: Scalars['Int'];
  campaigns?: Maybe<Array<Campaign>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  detailImages?: Maybe<Array<ItemDetailImage>>;
  digestAverageRating: Scalars['Float'];
  digestCount: Scalars['Int'];
  digests?: Maybe<Array<Digest>>;
  /** [MODEL ONLY] */
  finalPrice: Scalars['Float'];
  groupItems?: Maybe<Array<Item>>;
  hitCount: Scalars['Int'];
  id: Scalars['Int'];
  imageUrl: Scalars['String'];
  isInfiniteStock: Scalars['Boolean'];
  isMdRecommended: Scalars['Boolean'];
  isPurchasable: Scalars['Boolean'];
  isSellable: Scalars['Boolean'];
  isSoldout: Scalars['Boolean'];
  majorCategory?: Maybe<ItemCategory>;
  majorCategoryId?: Maybe<Scalars['Float']>;
  minorCategory?: Maybe<ItemCategory>;
  minorCategoryId?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  options?: Maybe<Array<ItemOption>>;
  /** [MODEL ONLY] */
  originalPrice: Scalars['Float'];
  /** [MODEL ONLY] */
  pickkDiscountRate: Scalars['Float'];
  prices: Array<ItemPrice>;
  products?: Maybe<Array<Product>>;
  providedCode?: Maybe<Scalars['String']>;
  salePolicy?: Maybe<ItemSalePolicy>;
  score: Scalars['Float'];
  /** [MODEL ONLY] */
  sellPrice: Scalars['Float'];
  /** 판매가능시점(=활성전환일) */
  sellableAt?: Maybe<Scalars['DateTime']>;
  sizeChart?: Maybe<ItemSizeChart>;
  updatedAt: Scalars['DateTime'];
  urls: Array<ItemUrl>;
};

export type ItemCategory = {
  children: Array<ItemCategory>;
  /** 최대 20자 */
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 최대 20자 */
  name: Scalars['String'];
  parent: ItemCategory;
  updatedAt: Scalars['DateTime'];
};

export type ItemDetailImage = {
  angle: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  itemId: Scalars['Int'];
  key: Scalars['String'];
  order: Scalars['Int'];
  url: Scalars['String'];
};

export type ItemFilter = {
  brandId?: Maybe<Scalars['Int']>;
  createdAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  createdAtLte?: Maybe<Scalars['DateTime']>;
  createdAtMte?: Maybe<Scalars['DateTime']>;
  idIn?: Maybe<Array<Scalars['Int']>>;
  isMdRecommended?: Maybe<Scalars['Boolean']>;
  isPurchasable?: Maybe<Scalars['Boolean']>;
  isSellable?: Maybe<Scalars['Boolean']>;
  majorCategoryId?: Maybe<Scalars['Float']>;
  minorCategoryId?: Maybe<Scalars['Float']>;
  orderBy?: Maybe<Scalars['String']>;
  scoreMt?: Maybe<Scalars['Float']>;
  /** 아이템 이름(name)으로 검색합니다. */
  search?: Maybe<Scalars['String']>;
  sellableAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  sellableAtLte?: Maybe<Scalars['DateTime']>;
  sellableAtMte?: Maybe<Scalars['DateTime']>;
};

export type ItemOption = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  itemId: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  values: Array<ItemOptionValue>;
};

export type ItemOptionValue = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  itemOptionId: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Float'];
  priceVariant: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ItemPrice = {
  createdAt: Scalars['DateTime'];
  displayPrice?: Maybe<Scalars['Float']>;
  endAt?: Maybe<Scalars['DateTime']>;
  finalPrice: Scalars['Int'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  isBase: Scalars['Boolean'];
  isCrawlUpdating: Scalars['Boolean'];
  itemId: Scalars['Int'];
  originalPrice: Scalars['Int'];
  pickkDiscountAmount?: Maybe<Scalars['Int']>;
  pickkDiscountRate: Scalars['Int'];
  sellPrice: Scalars['Int'];
  startAt?: Maybe<Scalars['DateTime']>;
  unit?: Maybe<ItemPriceUnit>;
  updatedAt: Scalars['DateTime'];
};

/** 아이템의 가격 단위입니다. null인 경우 원화로 취급되며, 값을 가질 경우 적절한 displayPrice에 적절한 환율을 곱한 값으로 salePrice를 설정합니다. */
export enum ItemPriceUnit {
  Aud = 'AUD',
  Cad = 'CAD',
  Cny = 'CNY',
  Eur = 'EUR',
  Gbp = 'GBP',
  Jpy = 'JPY',
  Krw = 'KRW',
  Usd = 'USD',
}

export type ItemProperty = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  minorCategory: ItemCategory;
  minorCategoryId: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  values: Array<ItemPropertyValue>;
};

export type ItemPropertyFilter = {
  minorCategoryId?: Maybe<Scalars['Int']>;
};

export type ItemPropertyValue = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** 표시될 순서. 최소 0, 최대 255입니다. */
  order: Scalars['Float'];
  property: ItemProperty;
  propertyId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ItemSalePolicy = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isUsingQuantityLimit: Scalars['Boolean'];
  isUsingStock: Scalars['Boolean'];
  quantityLimit: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ItemSize = {
  name: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type ItemSizeChart = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  labels: Array<Scalars['String']>;
  recommendations?: Maybe<Array<ItemSizeRecommendation>>;
  sizes: Array<ItemSize>;
  updatedAt: Scalars['DateTime'];
};

export type ItemSizeInput = {
  name: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type ItemSizeRecommendation = {
  height: Scalars['Float'];
  sizeName: Scalars['String'];
  weight: Scalars['Float'];
};

export type ItemSizeRecommendationInput = {
  height: Scalars['Float'];
  sizeName: Scalars['String'];
  weight: Scalars['Float'];
};

export type ItemUrl = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isAvailable: Scalars['Boolean'];
  isPrimary: Scalars['Boolean'];
  itemId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type ItemsExhibition = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  items: Array<Item>;
  /** 최대 50자 */
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ItemsGroup = {
  createdAt: Scalars['DateTime'];
  groupItems: Array<ItemsGroupItem>;
  id: Scalars['Int'];
  items: Array<Item>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ItemsGroupItem = {
  createdAt: Scalars['DateTime'];
  group: ItemsGroup;
  id: Scalars['Int'];
  item: Item;
  order: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ItemsPackage = {
  /** 최대 50자 */
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  items: Array<Item>;
  /** 최대 50자 */
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type JwtPayload = {
  /** Seller 로그인인 경우에만 발급된다. */
  brandId?: Maybe<Scalars['Float']>;
  /** Seller 로그인인 경우에만 발급된다. */
  brandNameKor?: Maybe<Scalars['String']>;
  /** 만료 시점 timestamp */
  exp: Scalars['Timestamp'];
  /** 발급 시점 timestamp */
  iat: Scalars['Timestamp'];
  nickname: Scalars['String'];
  /** Seller 로그인인 경우에만 발급된다. */
  sellerId?: Maybe<Scalars['Float']>;
  sub: Scalars['Int'];
};

export type JwtToken = {
  access: Scalars['String'];
  refresh: Scalars['String'];
};

export type Keyword = {
  classes: Array<KeywordClass>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  digests: Array<Digest>;
  hitCount: Scalars['Int'];
  id: Scalars['Int'];
  imageUrl: Scalars['String'];
  /** 좋아요 중 여부 */
  isLiking?: Maybe<Scalars['Boolean']>;
  /** 보유중 여부 */
  isOwning?: Maybe<Scalars['Boolean']>;
  isVisible: Scalars['Boolean'];
  likeCount: Scalars['Int'];
  looks: Array<Look>;
  matchTagNames: Array<Scalars['String']>;
  name: Scalars['String'];
  relatedKeywords: Array<Keyword>;
  score: Scalars['Float'];
  styleTags: Array<StyleTag>;
  /** 스타일팁 줄글 */
  stylingTip: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  usablityRate?: Maybe<Scalars['Float']>;
};

export type KeywordClass = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isVisible: Scalars['Boolean'];
  name: Scalars['String'];
  /** 0~255 정수 */
  order?: Maybe<Scalars['Int']>;
  type: KeywordClassType;
  updatedAt: Scalars['DateTime'];
};

export type KeywordClassFilter = {
  isVisible?: Maybe<Scalars['Boolean']>;
  type?: Maybe<KeywordClassType>;
};

export enum KeywordClassType {
  Essential = 'Essential',
  Trending = 'Trending',
}

export type KeywordFilter = {
  idIn?: Maybe<Array<Scalars['Int']>>;
  /** [CUSTOM] */
  isLiking?: Maybe<Scalars['Boolean']>;
  /** [CUSTOM] */
  isOwning?: Maybe<Scalars['Boolean']>;
  isVisible?: Maybe<Scalars['Boolean']>;
  /** [CUSTOM] */
  keywordClassIdIn?: Maybe<Array<Scalars['Int']>>;
  /** 기본값 id */
  orderBy?: Maybe<Scalars['String']>;
};

/** 좋아요 대상 객체 분류입니다. (Digest, Look, Video, Comment, Keyword) */
export enum LikeOwnerType {
  Comment = 'Comment',
  Digest = 'Digest',
  Keyword = 'Keyword',
  Look = 'Look',
  Video = 'Video',
}

export type LoginByCodeInput = {
  code?: Maybe<Scalars['String']>;
  /** 로그인에 필요한 최소 권한입니다. (ex: Seller로 설정 시 Seller, Admin일때만 성공) */
  minRole?: Maybe<UserRole>;
  password: Scalars['String'];
};

export type LoginByOauthInput = {
  /** 로그인에 필요한 최소 권한입니다. (ex: Seller로 설정 시 Seller, Admin일때만 성공) */
  minRole?: Maybe<UserRole>;
  oauthCode?: Maybe<Scalars['String']>;
  oauthProvider?: Maybe<UserProviderType>;
};

export type Look = {
  commentCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  digests: Array<Digest>;
  hitCount: Scalars['Int'];
  id: Scalars['Int'];
  images: Array<LookImage>;
  /** [MODEL ONLY] */
  isLiking?: Maybe<Scalars['Boolean']>;
  /** [MODEL ONLY] */
  isMine?: Maybe<Scalars['Boolean']>;
  likeCount: Scalars['Int'];
  score: Scalars['Float'];
  styleTags: Array<StyleTag>;
  /** 최대 길이 127 */
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type LookFilter = {
  brandId?: Maybe<Scalars['Int']>;
  idIn?: Maybe<Array<Scalars['Int']>>;
  /** 사용시 다른 필터는 무시합니다. (정렬: "score") */
  itemId?: Maybe<Scalars['Int']>;
  /** 사용시 다른 필터는 무시합니다. (정렬: "score") */
  itemIdIn?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Scalars['String']>;
  styleTagIdIn?: Maybe<Array<Scalars['Int']>>;
  user?: Maybe<LookUserFilter>;
  userId?: Maybe<Scalars['Int']>;
  userIdIn?: Maybe<Array<Scalars['Int']>>;
};

export type LookImage = {
  angle: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  key: Scalars['String'];
  look: Look;
  lookId: Scalars['Int'];
  order: Scalars['Int'];
  url: Scalars['String'];
};

export type LookUserFilter = {
  heightBetween?: Maybe<Array<Scalars['Int']>>;
};

export type ManualCreateItemInput = {
  brandNameKor: Scalars['String'];
  imageUrl: Scalars['String'];
  majorCategoryId: Scalars['Int'];
  minorCategoryId: Scalars['Int'];
  name: Scalars['String'];
  originalPrice: Scalars['Int'];
  sellPrice: Scalars['Int'];
  url: Scalars['String'];
};

export type Mutation = {
  activateItemPrice: Item;
  addItemDetailImages: Item;
  addItemPrice: Item;
  addItemUrl: ItemUrl;
  addMeRefundAccount: RefundAccount;
  addMeShippingAddress: ShippingAddress;
  answerMeSellerInquiry: Inquiry;
  answerRootInquiry: Inquiry;
  basifyPrice: Item;
  bulkPickMeSellerExchangeRequests: Scalars['Boolean'];
  bulkPickMeSellerRefundRequests: Scalars['Boolean'];
  bulkShipMeSellerOrderItems: Scalars['Boolean'];
  bulkShipReadyMeSellerOrderItems: Scalars['Boolean'];
  bulkUpdateMeSellerItems: Scalars['Boolean'];
  bulkUpdateRootItems: Scalars['Boolean'];
  /** 취소 사유는 "담당자 취소 처리"로 고정 */
  cancelMeSellerOrderItem: OrderItem;
  cancelOrder: Order;
  completeExchangeRequest: ExchangeRequest;
  completeOrder: BaseOrderOutput;
  confirmMeOrderItem: OrderItem;
  confirmMeSellerRefundRequest: Scalars['Boolean'];
  convertMeSellerExchangeRequest: ExchangeRequest;
  convertMeSellerRefundRequest: RefundRequest;
  crawlItemOptionSet: Item;
  createComment: Comment;
  createCoupon: Coupon;
  createCouponSpecification: CouponSpecification;
  createCourier: Courier;
  createDigest: Digest;
  createInquiry: Inquiry;
  createItemByUrl: Item;
  createLook: Look;
  createMeSellerItemOptionSet: Item;
  createMeSellerSizeChart: Item;
  createMyCartItem: CartItem;
  createRootItemOptionSet: Item;
  createRootSizeChart: Item;
  createSeller: Seller;
  createShippingReservePolicy: Product;
  createUser: User;
  createVideo: Video;
  dodgeVbankOrder: BaseOrderOutput;
  failOrder: BaseOrderOutput;
  follow: FollowOutput;
  hit: Scalars['Boolean'];
  like: Scalars['Boolean'];
  manualCreateItem: Item;
  own: Scalars['Boolean'];
  registerExchangeRequest: ExchangeRequest;
  registerOrder: BaseOrderOutput;
  removeComment: Comment;
  removeDigest: Scalars['Boolean'];
  removeInquiry: Scalars['Boolean'];
  removeItemDetailImage: Item;
  removeItemPrice: Item;
  removeLook: Scalars['Boolean'];
  removeMeRefundAccount: Scalars['Boolean'];
  removeMeSellerSizeChart: Item;
  removeMeShippingAddress: Scalars['Boolean'];
  removeMyCartItems: Scalars['Boolean'];
  removeRootSizeChart: Item;
  removeVideo: Scalars['Boolean'];
  /** 정보에 오류가 있는 아이템을 신고합니다. */
  reportItem: Scalars['Boolean'];
  requestAppInstallPoint: Scalars['Boolean'];
  requestOrderRefund: Order;
  reshipMeSellerExchangeRequest: ExchangeRequest;
  scrapRootSeller: Scalars['Boolean'];
  setCategoryToItem: Item;
  shipMeSellerOrderItem: OrderItem;
  startOrder: Order;
  /** 여러번 구독된 상태였다면 모두 삭제됩니다. */
  unfollow: FollowOutput;
  /** 여러번 좋아요한 상태였다면 모두 삭제됩니다. */
  unlike: Scalars['Boolean'];
  unown: Scalars['Boolean'];
  updateBrand: Brand;
  updateComment: Comment;
  updateCourier: Courier;
  updateDigest: Digest;
  updateDigestsExhibitionDigests: DigestsExhibition;
  updateItemsExhibitionItems: ItemsExhibition;
  updateItemsPackageItems: ItemsPackage;
  updateLook: Look;
  updateMe: User;
  updateMeRefundAccount: RefundAccount;
  updateMeSeller: Seller;
  updateMeSellerInquiryAnswer: InquiryAnswer;
  updateMeSellerItem: Item;
  updateMeSellerItemByCrawl: Item;
  updateMeSellerItemDetailImages: Item;
  updateMeSellerItemImageUrl: Item;
  updateMeSellerItemOption: ItemOption;
  updateMeSellerItemPrice: Item;
  /** 주문상품 단건 운송장 수정 */
  updateMeSellerOrderItemTrackCode: OrderItem;
  updateMeSellerProduct: Product;
  updateMeSellerSizeChart: Item;
  updateMeShippingAddress: ShippingAddress;
  updateMyCartItem: CartItem;
  /** (!) 예전 비밀번호와 현재 비밀번호를 입력해주세요. */
  updateMyPassword: User;
  updateMySellerClaimPolicy: SellerClaimPolicy;
  updateMySellerCrawlPolicy: SellerCrawlPolicy;
  updateMySellerReturnAddress: SellerReturnAddress;
  /** 추가도 이거로 해주시면 됩니다! */
  updateMySellerSettlePolicy: SellerSettlePolicy;
  updateMySellerShippingPolicy: SellerShippingPolicy;
  updateRootInquiryAnswer: InquiryAnswer;
  updateRootItem: Item;
  updateRootItemByCrawl: Item;
  updateRootItemDetailImages: Item;
  updateRootItemImageUrl: Item;
  updateRootItemOption: ItemOption;
  updateRootItemPrice: Item;
  updateRootProduct: Product;
  updateRootSizeChart: Item;
  /** Admin 이상의 권한이 필요합니다. */
  updateSellerSaleStrategy: Seller;
  updateShippingReservePolicy: Product;
  updateVideo: Video;
};

export type MutationActivateItemPriceArgs = {
  itemId: Scalars['Int'];
  priceId: Scalars['Int'];
};

export type MutationAddItemDetailImagesArgs = {
  createItemDetailImageInput: CreateItemDetailImageInput;
  itemId: Scalars['Int'];
};

export type MutationAddItemPriceArgs = {
  addItemPriceInput: AddItemPriceInput;
  itemId: Scalars['Int'];
};

export type MutationAddItemUrlArgs = {
  addItemUrlInput: AddItemUrlInput;
  itemId: Scalars['Int'];
};

export type MutationAddMeRefundAccountArgs = {
  createRefundAccountInput: CreateRefundAccountInput;
};

export type MutationAddMeShippingAddressArgs = {
  createShippingAddressInput: CreateShippingAddressInput;
};

export type MutationAnswerMeSellerInquiryArgs = {
  answerInquiryInput: AnswerInquiryInput;
  id: Scalars['Int'];
};

export type MutationAnswerRootInquiryArgs = {
  answerInquiryInput: AnswerInquiryInput;
  id: Scalars['Int'];
};

export type MutationBasifyPriceArgs = {
  itemId: Scalars['Int'];
  priceId: Scalars['Int'];
};

export type MutationBulkPickMeSellerExchangeRequestsArgs = {
  merchantUids: Array<Scalars['String']>;
};

export type MutationBulkPickMeSellerRefundRequestsArgs = {
  merchantUids: Array<Scalars['String']>;
};

export type MutationBulkShipMeSellerOrderItemsArgs = {
  bulkShipOrderItemInput: BulkShipOrderItemInput;
};

export type MutationBulkShipReadyMeSellerOrderItemsArgs = {
  merchantUids: Array<Scalars['String']>;
};

export type MutationBulkUpdateMeSellerItemsArgs = {
  ids: Array<Scalars['Int']>;
  input: BulkUpdateItemInput;
};

export type MutationBulkUpdateRootItemsArgs = {
  ids: Array<Scalars['Int']>;
  input: BulkUpdateItemInput;
};

export type MutationCancelMeSellerOrderItemArgs = {
  merchantUid: Scalars['String'];
  restock: Scalars['Boolean'];
};

export type MutationCancelOrderArgs = {
  cancelOrderInput: CancelOrderInput;
  merchantUid: Scalars['String'];
};

export type MutationCompleteExchangeRequestArgs = {
  merchantUid: Scalars['String'];
};

export type MutationCompleteOrderArgs = {
  createOrderVbankReceiptInput?: Maybe<CreateOrderVbankReceiptInput>;
  merchantUid: Scalars['String'];
};

export type MutationConfirmMeOrderItemArgs = {
  merchantUid: Scalars['String'];
};

export type MutationConfirmMeSellerRefundRequestArgs = {
  merchantUid: Scalars['String'];
  shippingFee: Scalars['Int'];
};

export type MutationConvertMeSellerExchangeRequestArgs = {
  merchantUid: Scalars['String'];
};

export type MutationConvertMeSellerRefundRequestArgs = {
  merchantUid: Scalars['String'];
  orderItemMerchantUid: Scalars['String'];
  productId: Scalars['Int'];
};

export type MutationCrawlItemOptionSetArgs = {
  itemId: Scalars['Int'];
};

export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};

export type MutationCreateCouponArgs = {
  createCouponInput: CreateCouponInput;
};

export type MutationCreateCouponSpecificationArgs = {
  createCouponSpecificationInput: CreateCouponSpecificationInput;
};

export type MutationCreateCourierArgs = {
  createCourierInput: CreateCourierInput;
};

export type MutationCreateDigestArgs = {
  createDigestInput: CreateDigestInput;
};

export type MutationCreateInquiryArgs = {
  createInquiryInput: CreateInquiryInput;
};

export type MutationCreateItemByUrlArgs = {
  url: Scalars['String'];
};

export type MutationCreateLookArgs = {
  createLookInput: CreateLookInput;
};

export type MutationCreateMeSellerItemOptionSetArgs = {
  id: Scalars['Int'];
  input: CreateItemOptionSetInput;
};

export type MutationCreateMeSellerSizeChartArgs = {
  input: CreateItemSizeChartInput;
  itemId: Scalars['Int'];
};

export type MutationCreateMyCartItemArgs = {
  createCartItemInput: CreateCartItemInput;
};

export type MutationCreateRootItemOptionSetArgs = {
  id: Scalars['Int'];
  input: CreateItemOptionSetInput;
};

export type MutationCreateRootSizeChartArgs = {
  input: CreateItemSizeChartInput;
  itemId: Scalars['Int'];
};

export type MutationCreateSellerArgs = {
  createSellerInput: CreateSellerInput;
};

export type MutationCreateShippingReservePolicyArgs = {
  createProductShippingReservePolicyInput: CreateProductShippingReservePolicyInput;
  productId: Scalars['Int'];
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationCreateVideoArgs = {
  createVideoInput: CreateVideoInput;
};

export type MutationDodgeVbankOrderArgs = {
  merchantUid: Scalars['String'];
};

export type MutationFailOrderArgs = {
  merchantUid: Scalars['String'];
};

export type MutationFollowArgs = {
  targetId: Scalars['Int'];
};

export type MutationHitArgs = {
  ownerId: Scalars['Float'];
  ownerType: HitOwnerType;
};

export type MutationLikeArgs = {
  ownerId: Scalars['Int'];
  ownerType: LikeOwnerType;
};

export type MutationManualCreateItemArgs = {
  input: ManualCreateItemInput;
};

export type MutationOwnArgs = {
  keywordId: Scalars['Int'];
};

export type MutationRegisterExchangeRequestArgs = {
  merchantUid: Scalars['String'];
  registerExchangeRequestInput: RegisterExchangeRequestInput;
};

export type MutationRegisterOrderArgs = {
  registerOrderInput: RegisterOrderInput;
};

export type MutationRemoveCommentArgs = {
  id: Scalars['Int'];
};

export type MutationRemoveDigestArgs = {
  id: Scalars['Int'];
};

export type MutationRemoveInquiryArgs = {
  id: Scalars['Int'];
};

export type MutationRemoveItemDetailImageArgs = {
  detailImageKey: Scalars['String'];
  itemId: Scalars['Int'];
};

export type MutationRemoveItemPriceArgs = {
  itemId: Scalars['Int'];
  priceId: Scalars['Int'];
};

export type MutationRemoveLookArgs = {
  id: Scalars['Int'];
};

export type MutationRemoveMeSellerSizeChartArgs = {
  itemId: Scalars['Int'];
};

export type MutationRemoveMeShippingAddressArgs = {
  addressId: Scalars['Int'];
};

export type MutationRemoveMyCartItemsArgs = {
  ids: Array<Scalars['Int']>;
};

export type MutationRemoveRootSizeChartArgs = {
  itemId: Scalars['Int'];
};

export type MutationRemoveVideoArgs = {
  id: Scalars['Int'];
};

export type MutationReportItemArgs = {
  id: Scalars['Int'];
  reason: Scalars['String'];
};

export type MutationRequestOrderRefundArgs = {
  merchantUid: Scalars['String'];
  requestOrderRefundInput: RequestOrderRefundInput;
};

export type MutationReshipMeSellerExchangeRequestArgs = {
  merchantUid: Scalars['String'];
  reshipExchangeRequestInput: ReshipExchangeRequestInput;
};

export type MutationScrapRootSellerArgs = {
  id: Scalars['Int'];
};

export type MutationSetCategoryToItemArgs = {
  id: Scalars['Int'];
  setCategoryToItemInput: SetCategoryToItemInput;
};

export type MutationShipMeSellerOrderItemArgs = {
  merchantUid: Scalars['String'];
  shipOrderItemInput: ShipOrderItemInput;
};

export type MutationStartOrderArgs = {
  merchantUid: Scalars['String'];
  startOrderInput: StartOrderInput;
};

export type MutationUnfollowArgs = {
  targetId: Scalars['Int'];
};

export type MutationUnlikeArgs = {
  ownerId: Scalars['Int'];
  ownerType: LikeOwnerType;
};

export type MutationUnownArgs = {
  keywordId: Scalars['Int'];
};

export type MutationUpdateBrandArgs = {
  id: Scalars['Int'];
  updateBrandInput: UpdateBrandInput;
};

export type MutationUpdateCommentArgs = {
  id: Scalars['Int'];
  input: UpdateCommentInput;
};

export type MutationUpdateCourierArgs = {
  id: Scalars['Int'];
  updateCourierInput: UpdateCourierInput;
};

export type MutationUpdateDigestArgs = {
  id: Scalars['Int'];
  updateDigestInput: UpdateDigestInput;
};

export type MutationUpdateDigestsExhibitionDigestsArgs = {
  digestIds: Array<Scalars['Int']>;
  id: Scalars['Int'];
};

export type MutationUpdateItemsExhibitionItemsArgs = {
  id: Scalars['Int'];
  itemIds: Array<Scalars['Int']>;
};

export type MutationUpdateItemsPackageItemsArgs = {
  code: Scalars['String'];
  itemIds: Array<Scalars['Int']>;
};

export type MutationUpdateLookArgs = {
  id: Scalars['Int'];
  updateLookInput: UpdateLookInput;
};

export type MutationUpdateMeArgs = {
  updateUserInput: UpdateUserInput;
};

export type MutationUpdateMeRefundAccountArgs = {
  updateRefundAccountInput: UpdateRefundAccountInput;
};

export type MutationUpdateMeSellerArgs = {
  updateSellerInput: UpdateSellerInput;
};

export type MutationUpdateMeSellerInquiryAnswerArgs = {
  id: Scalars['Int'];
  updateInquiryAnswerInput: UpdateInquiryAnswerInput;
};

export type MutationUpdateMeSellerItemArgs = {
  id: Scalars['Int'];
  input: UpdateItemInput;
};

export type MutationUpdateMeSellerItemByCrawlArgs = {
  itemId: Scalars['Int'];
};

export type MutationUpdateMeSellerItemDetailImagesArgs = {
  itemId: Scalars['Int'];
};

export type MutationUpdateMeSellerItemImageUrlArgs = {
  itemId: Scalars['Int'];
};

export type MutationUpdateMeSellerItemOptionArgs = {
  id: Scalars['Int'];
  input: UpdateItemOptionInput;
};

export type MutationUpdateMeSellerItemPriceArgs = {
  id: Scalars['Int'];
  input: UpdateItemPriceInput;
};

export type MutationUpdateMeSellerOrderItemTrackCodeArgs = {
  merchantUid: Scalars['String'];
  trackCode: Scalars['String'];
};

export type MutationUpdateMeSellerProductArgs = {
  id: Scalars['Int'];
  input: UpdateProductInput;
};

export type MutationUpdateMeSellerSizeChartArgs = {
  input: UpdateItemSizeChartInput;
  itemId: Scalars['Int'];
};

export type MutationUpdateMeShippingAddressArgs = {
  addressId: Scalars['Int'];
  updateShippingAddressInput: UpdateShippingAddressInput;
};

export type MutationUpdateMyCartItemArgs = {
  id: Scalars['Int'];
  updateCartItemInput: UpdateCartItemInput;
};

export type MutationUpdateMyPasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type MutationUpdateMySellerClaimPolicyArgs = {
  updateSellerClaimPolicyInput: UpdateSellerClaimPolicyInput;
};

export type MutationUpdateMySellerCrawlPolicyArgs = {
  updateSellerCrawlPolicyInput: UpdateSellerCrawlPolicyInput;
};

export type MutationUpdateMySellerReturnAddressArgs = {
  updateSellerReturnAddressInput: UpdateSellerReturnAddressInput;
};

export type MutationUpdateMySellerSettlePolicyArgs = {
  updateSellerSettlePolicyInput: UpdateSellerSettlePolicyInput;
};

export type MutationUpdateMySellerShippingPolicyArgs = {
  updateSellerShippingPolicyInput: UpdateSellerShippingPolicyInput;
};

export type MutationUpdateRootInquiryAnswerArgs = {
  id: Scalars['Int'];
  updateInquiryAnswerInput: UpdateInquiryAnswerInput;
};

export type MutationUpdateRootItemArgs = {
  id: Scalars['Int'];
  input: UpdateItemInput;
};

export type MutationUpdateRootItemByCrawlArgs = {
  itemId: Scalars['Int'];
};

export type MutationUpdateRootItemDetailImagesArgs = {
  itemId: Scalars['Int'];
};

export type MutationUpdateRootItemImageUrlArgs = {
  itemId: Scalars['Int'];
};

export type MutationUpdateRootItemOptionArgs = {
  id: Scalars['Int'];
  input: UpdateItemOptionInput;
};

export type MutationUpdateRootItemPriceArgs = {
  id: Scalars['Int'];
  input: UpdateItemPriceInput;
};

export type MutationUpdateRootProductArgs = {
  id: Scalars['Int'];
  input: UpdateProductInput;
};

export type MutationUpdateRootSizeChartArgs = {
  input: UpdateItemSizeChartInput;
  itemId: Scalars['Int'];
};

export type MutationUpdateSellerSaleStrategyArgs = {
  sellerId: Scalars['Int'];
  updateSaleStrategyInput: FindSaleStrategyInput;
};

export type MutationUpdateShippingReservePolicyArgs = {
  productId: Scalars['Int'];
  updateProductShippingReservePolicyInput: UpdateProductShippingReservePolicyInput;
};

export type MutationUpdateVideoArgs = {
  id: Scalars['Int'];
  updateVideoInput: UpdateVideoInput;
};

export type Order = {
  /** [MODEL ONLY] */
  brands: Array<OrderBrand>;
  buyer?: Maybe<OrderBuyer>;
  createdAt: Scalars['DateTime'];
  failedAt?: Maybe<Scalars['DateTime']>;
  /** [MODEL ONLY] */
  id: Scalars['String'];
  /** (PK) 주문고유번호. YYMMDDHHmmssSSS + NN(00~99) */
  merchantUid: Scalars['String'];
  orderItems: Array<OrderItem>;
  paidAt?: Maybe<Scalars['DateTime']>;
  payMethod?: Maybe<PayMethod>;
  payingAt?: Maybe<Scalars['DateTime']>;
  receiver?: Maybe<OrderReceiver>;
  refundAccount?: Maybe<OrderRefundAccount>;
  refundRequests: Array<RefundRequest>;
  status: OrderStatus;
  totalCouponDiscountAmount: Scalars['Int'];
  totalItemFinalPrice: Scalars['Int'];
  totalPayAmount: Scalars['Int'];
  totalShippingFee: Scalars['Int'];
  totalUsedPointAmount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  vbankDodgedAt?: Maybe<Scalars['DateTime']>;
  vbankReadyAt?: Maybe<Scalars['DateTime']>;
  vbankReceipt?: Maybe<OrderVbankReceipt>;
};

export type OrderBrand = {
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  items: Array<OrderItem>;
  nameKor: Scalars['String'];
  shippingFee: Scalars['Int'];
  totalItemFinalPrice: Scalars['Int'];
};

export type OrderBuyer = {
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OrderBuyerInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
};

/** 교환/반품 책임자?입니다. (구매자 or 판매자) */
export enum OrderClaimFaultOf {
  Customer = 'Customer',
  Seller = 'Seller',
}

export type OrderItem = {
  brandNameKor: Scalars['String'];
  campaign?: Maybe<Campaign>;
  campaignId?: Maybe<Scalars['Int']>;
  cancelRequestedAt?: Maybe<Scalars['DateTime']>;
  cancelledAt?: Maybe<Scalars['DateTime']>;
  claimStatus?: Maybe<OrderItemClaimStatus>;
  confirmedAt?: Maybe<Scalars['DateTime']>;
  couponDiscountAmount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  /** 지연발송 전환 시점 */
  delayedAt?: Maybe<Scalars['DateTime']>;
  /** 지연발송 예정일 */
  delayedShipExpectedAt?: Maybe<Scalars['DateTime']>;
  exchangeRequest: ExchangeRequest;
  exchangeRequestedAt?: Maybe<Scalars['DateTime']>;
  exchangedAt?: Maybe<Scalars['DateTime']>;
  failedAt?: Maybe<Scalars['DateTime']>;
  /** [MODEL ONLY] */
  id: Scalars['String'];
  isConfirmed: Scalars['Boolean'];
  isDelaying: Scalars['Boolean'];
  isFreeShippingPackage: Scalars['Boolean'];
  isProcessDelaying: Scalars['Boolean'];
  isSettled: Scalars['Boolean'];
  isShipReserved: Scalars['Boolean'];
  item?: Maybe<Item>;
  itemFinalPrice: Scalars['Int'];
  itemId?: Maybe<Scalars['Int']>;
  itemName: Scalars['String'];
  itemSellPrice: Scalars['Int'];
  /** order.merchantUid + 숫자 2자리 */
  merchantUid: Scalars['String'];
  /** [MODEL ONLY] */
  name: Scalars['String'];
  order: Order;
  orderMerchantUid: Scalars['String'];
  paidAt?: Maybe<Scalars['DateTime']>;
  /** [MODEL ONLY] */
  payAmount: Scalars['Int'];
  /** 처리지연 전환 시점 */
  processDelayedAt?: Maybe<Scalars['DateTime']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Int']>;
  productVariantName: Scalars['String'];
  quantity: Scalars['Int'];
  recommendDigest?: Maybe<Digest>;
  recommendDigestId?: Maybe<Scalars['Int']>;
  recommenderId?: Maybe<Scalars['Int']>;
  recommenderNickname?: Maybe<Scalars['String']>;
  refundRequest: RefundRequest;
  refundRequestedAt?: Maybe<Scalars['DateTime']>;
  refundedAt?: Maybe<Scalars['DateTime']>;
  seller?: Maybe<Seller>;
  sellerId?: Maybe<Scalars['Int']>;
  settleAmount: Scalars['Int'];
  settleStatus: OrderItemSettleStatus;
  settledAt?: Maybe<Scalars['DateTime']>;
  shipReadyAt?: Maybe<Scalars['DateTime']>;
  /** 예약발송 예정일 */
  shipReservedAt?: Maybe<Scalars['DateTime']>;
  shipment?: Maybe<Shipment>;
  shipmentId?: Maybe<Scalars['Int']>;
  shippedAt?: Maybe<Scalars['DateTime']>;
  shippingAt?: Maybe<Scalars['DateTime']>;
  shippingFee: Scalars['Int'];
  status: OrderItemStatus;
  /** 프론트엔드를 위한 status/claimStatus 표시값입니다. */
  statusDisplayName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  usedCoupon?: Maybe<Coupon>;
  usedCouponId?: Maybe<Scalars['Int']>;
  usedCouponName?: Maybe<Scalars['String']>;
  usedPointAmount: Scalars['Int'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  vbankDodgedAt?: Maybe<Scalars['DateTime']>;
  vbankReadyAt?: Maybe<Scalars['DateTime']>;
};

/** 주문상품 클레임상태입니다. */
export enum OrderItemClaimStatus {
  CancelRequested = 'CancelRequested',
  Cancelled = 'Cancelled',
  ExchangeRequested = 'ExchangeRequested',
  Exchanged = 'Exchanged',
  RefundRequested = 'RefundRequested',
  Refunded = 'Refunded',
}

export type OrderItemFilter = {
  claimStatus?: Maybe<OrderItemClaimStatus>;
  claimStatusIn?: Maybe<Array<OrderItemClaimStatus>>;
  claimStatusIsNull?: Maybe<Scalars['Boolean']>;
  isConfirmed?: Maybe<Scalars['Boolean']>;
  isProcessDelaying?: Maybe<Scalars['Boolean']>;
  merchantUidIn?: Maybe<Array<Scalars['String']>>;
  paidAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  /** 주문번호, 주문상품번호, 아이템 명으로 검색합니다. 구매자 번호를 검색할 땐 dash를 제거하고 보내주세요! */
  search?: Maybe<Scalars['String']>;
  sellerId?: Maybe<Scalars['Int']>;
  shipReadyAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  shippedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  shippingAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  status?: Maybe<OrderItemStatus>;
  statusIn?: Maybe<Array<OrderItemStatus>>;
};

export type OrderItemSearchFilter = {
  claimStatus?: Maybe<OrderItemClaimStatus>;
  claimStatusIn?: Maybe<Array<OrderItemClaimStatus>>;
  claimStatusIsNull?: Maybe<Scalars['Boolean']>;
  confirmedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  isConfirmed?: Maybe<Scalars['Boolean']>;
  isProcessDelaying?: Maybe<Scalars['Boolean']>;
  isSettled?: Maybe<Scalars['Boolean']>;
  merchantUidMt?: Maybe<Scalars['String']>;
  paidAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  sellerId?: Maybe<Scalars['Int']>;
  settledAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  shipReadyAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  shippedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  shippingAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  status?: Maybe<OrderItemStatus>;
  statusIn?: Maybe<Array<OrderItemStatus>>;
};

/** 주문상품 정산상태입니다. */
export enum OrderItemSettleStatus {
  Completed = 'Completed',
  Pending = 'Pending',
  Ready = 'Ready',
}

/** 주문상품 상태입니다. 클레임상태와 무관하게 handling됩니다. */
export enum OrderItemStatus {
  Failed = 'Failed',
  Paid = 'Paid',
  Pending = 'Pending',
  ShipPending = 'ShipPending',
  ShipReady = 'ShipReady',
  Shipped = 'Shipped',
  Shipping = 'Shipping',
  VbankDodged = 'VbankDodged',
  VbankReady = 'VbankReady',
}

/** 생성일 기준 3달 이내의 건들만 count합니다. */
export type OrderItemsCountOutput = {
  /**
   * 취소 요청됨 (deprecated)
   * @deprecated 현재 취소는 신청 즉시 완료됩니다.
   */
  CancelRequested: Scalars['Int'];
  /** 취소 완료 */
  Cancelled: Scalars['Int'];
  /** 교환 요청됨 */
  ExchangeRequested: Scalars['Int'];
  /** 교환 완료 */
  Exchanged: Scalars['Int'];
  /** 결제 실패 */
  Failed: Scalars['Int'];
  /** 결제 완료 */
  Paid: Scalars['Int'];
  /** 결제대기 (입금대기와 다릅니다.) */
  Pending: Scalars['Int'];
  /** 반품 요청됨 */
  RefundRequested: Scalars['Int'];
  /** 반품 완료 */
  Refunded: Scalars['Int'];
  /** 배송 보류중(예약중) */
  ShipPending: Scalars['Int'];
  /** 배송 준비중 */
  ShipReady: Scalars['Int'];
  /** 배송 완료 */
  Shipped: Scalars['Int'];
  /** 배송 중 */
  Shipping: Scalars['Int'];
  /** 입금 전 취소 */
  VbankDodged: Scalars['Int'];
  /** 입금 대기 */
  VbankReady: Scalars['Int'];
  /** 구매 확정 */
  confirmed: Scalars['Int'];
  /** sellerId와 동일한 값. Apollo Client 캐싱을 위해 존재합니다. */
  id: Scalars['Int'];
  lastUpdatedAt: Scalars['DateTime'];
  /** 결제 완료 */
  process_delayed_Paid: Scalars['Int'];
  /** 배송 보류중(예약중) */
  process_delayed_ShipPending: Scalars['Int'];
  /** 배송 준비중 */
  process_delayed_ShipReady: Scalars['Int'];
};

export type OrderReceiver = {
  baseAddress: Scalars['String'];
  createdAt: Scalars['DateTime'];
  detailAddress: Scalars['String'];
  id: Scalars['Int'];
  /** 베송 요청사항 (최대 50자) */
  message?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  receiverName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OrderReceiverInput = {
  /** 베송 요청사항 (최대 50자) */
  message?: Maybe<Scalars['String']>;
  shippingAddressId: Scalars['Int'];
};

/** 가상계좌 결제시 환불 받을 계좌 정보 */
export type OrderRefundAccount = {
  bankCode: BankCode;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OrderRefundAccountInput = {
  bankCode: BankCode;
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
};

export type OrderSheet = {
  availablePointAmount: Scalars['Int'];
  brands: Array<OrderBrand>;
  coupons: Array<Coupon>;
  /** [MODEL ONLY] order의 merchantUid와 같습니다. */
  id: Scalars['String'];
  me: User;
  order: Order;
  refundAccount?: Maybe<RefundAccount>;
  shippingAddresses: Array<ShippingAddress>;
};

/** 주문 상태입니다. 클라이언트에선 거의 사용되지 않을 값입니다. */
export enum OrderStatus {
  Failed = 'Failed',
  Paid = 'Paid',
  Paying = 'Paying',
  Pending = 'Pending',
  VbankDodged = 'VbankDodged',
  VbankReady = 'VbankReady',
}

export type OrderVbankReceipt = {
  bankCode: BankCode;
  createdAt: Scalars['DateTime'];
  due: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** 키워드 보유중 여부와 관련된 개수들입니다. */
export type OwnsCountOutput = {
  /** keywordClassId와 동일 */
  id: Scalars['Int'];
  /** 해당 클래스의 키워드 중 내가 보유한 수 */
  owning: Scalars['Int'];
  /** 해당 클래스의 키워드 수 */
  total: Scalars['Int'];
};

export type PageInput = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  startId?: Maybe<Scalars['Int']>;
};

export enum PayEnviroment {
  Mobile = 'Mobile',
  Pc = 'Pc',
}

/** 결제수단입니다. */
export enum PayMethod {
  Booknlife = 'Booknlife',
  Card = 'Card',
  Chaipay = 'Chaipay',
  Cultureland = 'Cultureland',
  Happymoney = 'Happymoney',
  Kakaopay = 'Kakaopay',
  Kpay = 'Kpay',
  Lpay = 'Lpay',
  Naverpay = 'Naverpay',
  Payco = 'Payco',
  Phone = 'Phone',
  Point = 'Point',
  Samsungpay = 'Samsungpay',
  Smartculture = 'Smartculture',
  Ssgpay = 'Ssgpay',
  Tosspay = 'Tosspay',
  Trans = 'Trans',
  Vbank = 'Vbank',
}

export type Payment = {
  amount: Scalars['Int'];
  applyNum?: Maybe<Scalars['String']>;
  buyerAddr: Scalars['String'];
  buyerEmail: Scalars['String'];
  buyerName: Scalars['String'];
  buyerPostalcode: Scalars['String'];
  buyerTel: Scalars['String'];
  cancellations: Array<PaymentCancellation>;
  cancelledAt?: Maybe<Scalars['DateTime']>;
  cardCode?: Maybe<CardCode>;
  cardNum?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  env: PayEnviroment;
  failedAt?: Maybe<Scalars['DateTime']>;
  failedReason?: Maybe<Scalars['String']>;
  /** (PK) 결제유번호. YYMMDDHHmmssSSS + NN(00~99) 형식 */
  merchantUid: Scalars['String'];
  name: Scalars['String'];
  origin: Scalars['String'];
  paidAt?: Maybe<Scalars['DateTime']>;
  payMethod: PayMethod;
  pg: Pg;
  pgTid?: Maybe<Scalars['String']>;
  remainAmount: Scalars['Int'];
  status: PaymentStatus;
  updatedAt: Scalars['DateTime'];
  vbankCode?: Maybe<BankCode>;
  vbankDate?: Maybe<Scalars['DateTime']>;
  vbankDodgedAt?: Maybe<Scalars['DateTime']>;
  vbankHolder?: Maybe<Scalars['String']>;
  vbankNum?: Maybe<Scalars['String']>;
  vbankReadyAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentCancellation = {
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  payment: Payment;
  reason: Scalars['String'];
  refundVbankCode: BankCode;
  refundVbankHolder: Scalars['String'];
  refundVbankNum: Scalars['String'];
  taxFree: Scalars['Int'];
  type: PaymentCancellationType;
  updatedAt: Scalars['DateTime'];
};

export enum PaymentCancellationType {
  Cancel = 'Cancel',
  PartialCancel = 'PartialCancel',
}

export type PaymentFilter = {
  buyerEmailSearch?: Maybe<Scalars['String']>;
  buyerNameSearch?: Maybe<Scalars['String']>;
  buyerTelSearch?: Maybe<Scalars['String']>;
  createdAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  merchantUid?: Maybe<Scalars['String']>;
  merchantUidSearch?: Maybe<Scalars['String']>;
  paidAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  payMethodIn?: Maybe<Array<PayMethod>>;
  pgIn?: Maybe<Array<Pg>>;
  pgTid?: Maybe<Scalars['String']>;
  pgTidSearch?: Maybe<Scalars['String']>;
  statusIn?: Maybe<Array<PaymentStatus>>;
};

export type PaymentListOutput = {
  amounts: PaymentsListAmount;
  payMethodCount: PaymentsListPayMethodCount;
  payments: Array<Payment>;
  pgCount: PaymentsListPgCount;
  statusCount: PaymentsListStatusCount;
};

export enum PaymentStatus {
  Cancelled = 'Cancelled',
  Failed = 'Failed',
  Paid = 'Paid',
  PartialCancelled = 'PartialCancelled',
  Pending = 'Pending',
  VbankDodged = 'VbankDodged',
  VbankReady = 'VbankReady',
}

export type PaymentsListAmount = {
  totalCancelledAmount: Scalars['Float'];
  totalPaidAmount: Scalars['Float'];
};

export type PaymentsListPayMethodCount = {
  card: Scalars['Float'];
  kakaopay: Scalars['Float'];
  trans: Scalars['Float'];
  vbank: Scalars['Float'];
};

export type PaymentsListPgCount = {
  inicis: Scalars['Float'];
};

export type PaymentsListStatusCount = {
  Cancelled: Scalars['Float'];
  Failed: Scalars['Float'];
  Paid: Scalars['Float'];
  PartialCancelled: Scalars['Float'];
  Pending: Scalars['Float'];
  VbankReady: Scalars['Float'];
};

/** PG사입니다. */
export enum Pg {
  Inicis = 'Inicis',
}

export type PointEvent = {
  /** 적립/사용 금액. 양수/음수 구분함 */
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  orderItemMerchantUid?: Maybe<Scalars['String']>;
  /** 적립/사용 이후 잔고 */
  resultBalance: Scalars['Int'];
  sign: PointSign;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type PointEventFilter = {
  createdAtLte?: Maybe<Scalars['DateTime']>;
  createdAtMte?: Maybe<Scalars['DateTime']>;
  sign?: Maybe<PointSign>;
  userId?: Maybe<Scalars['Int']>;
};

/** 포인트 분류입니다. 적립(Plus), 사용(Minus) */
export enum PointSign {
  Minus = 'Minus',
  Plus = 'Plus',
}

export type Product = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  /** [MODEL ONLY] 예약배송 적용 여부 */
  isShipReserving: Scalars['Boolean'];
  item: Item;
  itemId: Scalars['Int'];
  itemOptionValues: Array<ItemOptionValue>;
  priceVariant: Scalars['Int'];
  /** [MODEL ONLY] item.finalPrice + priceVariant */
  purchasePrice: Scalars['Float'];
  shippingReservePolicy?: Maybe<ProductShippingReservePolicy>;
  stock: Scalars['Int'];
  /** [MODEL ONLY] stock || shippingReservePolicy?.stock || 0 */
  stockThreshold: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type ProductShippingReservePolicy = {
  createdAt: Scalars['DateTime'];
  /** 예약발송 예정일 */
  estimatedShippingBegginDate: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 예약설정된 재고. 예약발송일이 되면, 예약발송 상태는 자동으로 종료되며, 잔여 예약발송 재고는 일반 재고에 합산됩니다. */
  stock: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  brand: Brand;
  brands: Array<Brand>;
  checkFollowing: Scalars['Boolean'];
  checkLiking: Scalars['Boolean'];
  /** 중복이면 true, 아니면 false를 반환한다. */
  checkNicknameDuplicate: Scalars['Boolean'];
  checkOwning: Scalars['Boolean'];
  checkPin: Scalars['Boolean'];
  checkoutOrder: OrderSheet;
  comments: Array<Comment>;
  commentsCount: Scalars['Int'];
  courier: Courier;
  couriers: Array<Courier>;
  digest: Digest;
  digests: Array<Digest>;
  digestsExhibitions: Array<DigestsExhibition>;
  expectedCancelAmount: Scalars['Int'];
  expectedClaimShippingFee: Scalars['Int'];
  genRandomNickname: Scalars['String'];
  getAppleAuthCode: Scalars['String'];
  groupItemIds?: Maybe<Array<Scalars['Int']>>;
  inquiries: Array<Inquiry>;
  inquiriesCount: Scalars['Int'];
  item: Item;
  itemCategoryTree: Array<ItemCategory>;
  itemMajorCategories: Array<ItemCategory>;
  itemMinorCategories: Array<ItemCategory>;
  itemProperties: Array<ItemProperty>;
  items: Array<Item>;
  itemsExhibitions: Array<ItemsExhibition>;
  itemsGroupDigests: Array<Digest>;
  itemsGroupLooks: Array<Look>;
  itemsPackage: ItemsPackage;
  keyword: Keyword;
  keywordClasses: Array<KeywordClass>;
  keywords: Array<Keyword>;
  keywordsCountByClass: Scalars['Int'];
  likingDigests: Array<Digest>;
  likingKeywords: Array<Keyword>;
  likingLooks: Array<Look>;
  likingVideos: Array<Video>;
  loginByCode: JwtToken;
  loginByOauth: JwtToken;
  loginRootSeller: JwtToken;
  loginSellerByCode: JwtToken;
  look: Look;
  looks: Array<Look>;
  me: User;
  meFollowingUsers: Array<User>;
  meInquiries: Array<Inquiry>;
  meInquiry: Inquiry;
  meOrder: Order;
  meOrderItem: OrderItem;
  /** VbankReady, VbankDodged, Paid만 표시 */
  meOrders: Array<Order>;
  meOwnsCount: OwnsCountOutput;
  meSeller: Seller;
  meSellerExchangeRequests: Array<ExchangeRequest>;
  meSellerExchangeRequestsCount: ExchangeRequestsCountOutput;
  meSellerInquiries: Array<Inquiry>;
  meSellerInquiriesCount: InquiriesCountOutput;
  meSellerInquiry: Inquiry;
  meSellerItems: Array<Item>;
  meSellerOrderItems: Array<OrderItem>;
  meSellerOrderItemsCount: OrderItemsCountOutput;
  meSellerRefundRequests: Array<RefundRequest>;
  meSellerRefundRequestsCount: RefundRequestsCountOutput;
  meShippingAddresses: Array<ShippingAddress>;
  myCart: Cart;
  myCartItemsCount: Scalars['Int'];
  myCoupons: Array<Coupon>;
  myExpectedPointEvents: Array<PointEvent>;
  /** Bearer token을 받아 JwtPayload를 반환합니다. */
  myJwtPayload: JwtPayload;
  myPointEvents: Array<PointEvent>;
  /** [Admin] 결제 목록을 조회합니다. */
  payments: PaymentListOutput;
  product: Product;
  /** refresh token을 받아서 새로운 JwtToken을 생성합니다. */
  refreshJwtToken: JwtToken;
  requestPin: Scalars['Boolean'];
  rootExchangeRequests: Array<ExchangeRequest>;
  rootInquiries: Array<Inquiry>;
  /** [ROOT ADMIN] */
  rootInquiriesCount: InquiriesCountOutput;
  rootInquiry: Inquiry;
  rootOrderItems: Array<OrderItem>;
  rootRefundRequests: Array<RefundRequest>;
  searchAllItem: Array<Item>;
  searchDigest: Array<Digest>;
  searchKeyword: Array<Keyword>;
  searchLook: Array<Look>;
  searchMeSellerOrderItems: SearchOrderItemsOutput;
  searchMeSellerOrderItemsCount: Scalars['Int'];
  searchPurchasableItem: Array<Item>;
  searchRootExchangeRequests: SearchExchangeRequestsOutput;
  searchRootExchangeRequestsCount: Scalars['Int'];
  searchRootInquiries: SearchInquiriesOutput;
  searchRootInquiryCount: Scalars['Int'];
  searchRootOrderItems: SearchOrderItemsOutput;
  searchRootOrderItemsCount: Scalars['Int'];
  searchRootRefundRequests: SearchRefundRequestsOutput;
  searchRootRefundRequestsCount: Scalars['Int'];
  searchSellerExchangeRequests: SearchExchangeRequestsOutput;
  searchSellerExchangeRequestsCount: Scalars['Int'];
  searchSellerInquiries: SearchInquiriesOutput;
  searchSellerInquiryCount: Scalars['Int'];
  searchSellerRefundRequests: SearchRefundRequestsOutput;
  searchSellerRefundRequestsCount: Scalars['Int'];
  searchVideo: Array<Video>;
  seller: Seller;
  sellers: Array<Seller>;
  styleTags: Array<StyleTag>;
  user: User;
  video: Video;
  videos: Array<Video>;
};

export type QueryBrandArgs = {
  id: Scalars['Int'];
};

export type QueryCheckFollowingArgs = {
  targetId: Scalars['Int'];
};

export type QueryCheckLikingArgs = {
  ownerId: Scalars['Int'];
  ownerType: LikeOwnerType;
};

export type QueryCheckNicknameDuplicateArgs = {
  nickname: Scalars['String'];
};

export type QueryCheckOwningArgs = {
  keywordId: Scalars['Int'];
};

export type QueryCheckPinArgs = {
  checkPinInput: CheckPinInput;
};

export type QueryCheckoutOrderArgs = {
  merchantUid: Scalars['String'];
};

export type QueryCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryCommentsCountArgs = {
  ownerId: Scalars['Int'];
  ownerType: Scalars['String'];
};

export type QueryCourierArgs = {
  id: Scalars['Int'];
};

export type QueryDigestArgs = {
  id: Scalars['Int'];
};

export type QueryDigestsArgs = {
  filter?: Maybe<DigestFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryExpectedCancelAmountArgs = {
  merchantUid: Scalars['String'];
  orderItemMerchantUids: Array<Scalars['String']>;
};

export type QueryExpectedClaimShippingFeeArgs = {
  faultOf: OrderClaimFaultOf;
  merchantUid: Scalars['String'];
  orderItemMerchantUids: Array<Scalars['String']>;
};

export type QueryGetAppleAuthCodeArgs = {
  getAppleAuthCodeInput: GetAppleAuthCodeInput;
};

export type QueryGroupItemIdsArgs = {
  itemId: Scalars['Int'];
};

export type QueryInquiriesArgs = {
  filter?: Maybe<InquiryFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryInquiriesCountArgs = {
  itemId: Scalars['Int'];
};

export type QueryItemArgs = {
  id: Scalars['Int'];
};

export type QueryItemPropertiesArgs = {
  itemPropertyFilter?: Maybe<ItemPropertyFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryItemsArgs = {
  itemFilter?: Maybe<ItemFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryItemsGroupDigestsArgs = {
  filter?: Maybe<DigestFilter>;
  itemId: Scalars['Int'];
  pageInput?: Maybe<PageInput>;
};

export type QueryItemsGroupLooksArgs = {
  itemId: Scalars['Int'];
  pageInput?: Maybe<PageInput>;
};

export type QueryItemsPackageArgs = {
  code: Scalars['String'];
};

export type QueryKeywordArgs = {
  id: Scalars['Int'];
};

export type QueryKeywordClassesArgs = {
  filter: KeywordClassFilter;
  pageInput?: Maybe<PageInput>;
};

export type QueryKeywordsArgs = {
  filter?: Maybe<KeywordFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryKeywordsCountByClassArgs = {
  keywordClassId: Scalars['Int'];
};

export type QueryLikingDigestsArgs = {
  pageInput: PageInput;
};

export type QueryLikingKeywordsArgs = {
  pageInput: PageInput;
};

export type QueryLikingLooksArgs = {
  pageInput: PageInput;
};

export type QueryLikingVideosArgs = {
  pageInput: PageInput;
};

export type QueryLoginByCodeArgs = {
  loginByCodeInput: LoginByCodeInput;
};

export type QueryLoginByOauthArgs = {
  loginByOauthInput: LoginByOauthInput;
};

export type QueryLoginRootSellerArgs = {
  loginByCodeInput: LoginByCodeInput;
  sellerId: Scalars['Int'];
};

export type QueryLoginSellerByCodeArgs = {
  loginByCodeInput: LoginByCodeInput;
};

export type QueryLookArgs = {
  id: Scalars['Int'];
};

export type QueryLooksArgs = {
  filter?: Maybe<LookFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryMeInquiriesArgs = {
  pageInput?: Maybe<PageInput>;
};

export type QueryMeInquiryArgs = {
  id: Scalars['Int'];
};

export type QueryMeOrderArgs = {
  merchantUid: Scalars['String'];
};

export type QueryMeOrderItemArgs = {
  merchantUid: Scalars['String'];
};

export type QueryMeOrdersArgs = {
  pageInput?: Maybe<PageInput>;
};

export type QueryMeOwnsCountArgs = {
  keywordClassId: Scalars['Int'];
};

export type QueryMeSellerExchangeRequestsArgs = {
  exchangeRequestFilter?: Maybe<ExchangeRequestFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryMeSellerExchangeRequestsCountArgs = {
  forceUpdate?: Maybe<Scalars['Boolean']>;
};

export type QueryMeSellerInquiriesArgs = {
  filter?: Maybe<InquiryFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryMeSellerInquiriesCountArgs = {
  forceUpdate?: Maybe<Scalars['Boolean']>;
};

export type QueryMeSellerInquiryArgs = {
  id: Scalars['Int'];
};

export type QueryMeSellerItemsArgs = {
  itemFilter?: Maybe<ItemFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryMeSellerOrderItemsArgs = {
  orderItemFilter?: Maybe<OrderItemFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryMeSellerOrderItemsCountArgs = {
  forceUpdate?: Maybe<Scalars['Boolean']>;
};

export type QueryMeSellerRefundRequestsArgs = {
  pageInput?: Maybe<PageInput>;
  refundRequestFilter?: Maybe<RefundRequestFilter>;
};

export type QueryMeSellerRefundRequestsCountArgs = {
  forceUpdate?: Maybe<Scalars['Boolean']>;
};

export type QueryMyExpectedPointEventsArgs = {
  pageInput?: Maybe<PageInput>;
  pointEventFilter?: Maybe<PointEventFilter>;
};

export type QueryMyPointEventsArgs = {
  pageInput?: Maybe<PageInput>;
  pointEventFilter?: Maybe<PointEventFilter>;
};

export type QueryPaymentsArgs = {
  paymentFilter: PaymentFilter;
};

export type QueryProductArgs = {
  id: Scalars['Int'];
};

export type QueryRequestPinArgs = {
  requestPinInput: RequestPinInput;
};

export type QueryRootExchangeRequestsArgs = {
  exchangeRequestFilter?: Maybe<ExchangeRequestFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryRootInquiriesArgs = {
  filter?: Maybe<InquiryFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryRootInquiriesCountArgs = {
  forceUpdate?: Maybe<Scalars['Boolean']>;
};

export type QueryRootInquiryArgs = {
  id: Scalars['Int'];
};

export type QueryRootOrderItemsArgs = {
  orderItemFilter?: Maybe<OrderItemFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryRootRefundRequestsArgs = {
  pageInput?: Maybe<PageInput>;
  refundRequestFilter?: Maybe<RefundRequestFilter>;
};

export type QuerySearchAllItemArgs = {
  pageInput?: Maybe<PageInput>;
  query: Scalars['String'];
};

export type QuerySearchDigestArgs = {
  pageInput?: Maybe<PageInput>;
  query: Scalars['String'];
};

export type QuerySearchKeywordArgs = {
  pageInput?: Maybe<PageInput>;
  query: Scalars['String'];
};

export type QuerySearchLookArgs = {
  pageInput?: Maybe<PageInput>;
  query: Scalars['String'];
};

export type QuerySearchMeSellerOrderItemsArgs = {
  pageInput?: Maybe<PageInput>;
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<OrderItemSearchFilter>;
};

export type QuerySearchMeSellerOrderItemsCountArgs = {
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<OrderItemSearchFilter>;
};

export type QuerySearchPurchasableItemArgs = {
  pageInput?: Maybe<PageInput>;
  query: Scalars['String'];
};

export type QuerySearchRootExchangeRequestsArgs = {
  pageInput?: Maybe<PageInput>;
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<ExchangeRequestSearchFilter>;
};

export type QuerySearchRootExchangeRequestsCountArgs = {
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<ExchangeRequestSearchFilter>;
};

export type QuerySearchRootInquiriesArgs = {
  pageInput?: Maybe<PageInput>;
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<InquirySearchFilter>;
};

export type QuerySearchRootInquiryCountArgs = {
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<InquirySearchFilter>;
};

export type QuerySearchRootOrderItemsArgs = {
  pageInput?: Maybe<PageInput>;
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<OrderItemSearchFilter>;
};

export type QuerySearchRootOrderItemsCountArgs = {
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<OrderItemSearchFilter>;
};

export type QuerySearchRootRefundRequestsArgs = {
  pageInput?: Maybe<PageInput>;
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<RefundRequestSearchFilter>;
};

export type QuerySearchRootRefundRequestsCountArgs = {
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<RefundRequestSearchFilter>;
};

export type QuerySearchSellerExchangeRequestsArgs = {
  pageInput?: Maybe<PageInput>;
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<ExchangeRequestSearchFilter>;
};

export type QuerySearchSellerExchangeRequestsCountArgs = {
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<ExchangeRequestSearchFilter>;
};

export type QuerySearchSellerInquiriesArgs = {
  pageInput?: Maybe<PageInput>;
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<InquirySearchFilter>;
};

export type QuerySearchSellerInquiryCountArgs = {
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<InquirySearchFilter>;
};

export type QuerySearchSellerRefundRequestsArgs = {
  pageInput?: Maybe<PageInput>;
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<RefundRequestSearchFilter>;
};

export type QuerySearchSellerRefundRequestsCountArgs = {
  query?: Maybe<Scalars['String']>;
  searchFilter?: Maybe<RefundRequestSearchFilter>;
};

export type QuerySearchVideoArgs = {
  pageInput?: Maybe<PageInput>;
  query: Scalars['String'];
};

export type QuerySellerArgs = {
  id: Scalars['Int'];
};

export type QuerySellersArgs = {
  pageInput?: Maybe<PageInput>;
  sellerFilter?: Maybe<SellerFilter>;
};

export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type QueryVideoArgs = {
  id: Scalars['Int'];
};

export type QueryVideosArgs = {
  filter?: Maybe<VideoFilter>;
  pageInput?: Maybe<PageInput>;
};

/** 가상계좌 결제시 환불 받을 계좌 정보 */
export type RefundAccount = {
  bankCode: BankCode;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type RefundRequest = {
  /** 반품대상 주문상품 총 결제액 (배송비 제외) */
  amount: Scalars['Int'];
  confirmedAt?: Maybe<Scalars['DateTime']>;
  faultOf: OrderClaimFaultOf;
  /** [MODEL ONLY] */
  id: Scalars['String'];
  isProcessDelaying: Scalars['Boolean'];
  isSettled: Scalars['Boolean'];
  /** (PK) YYMMDDHHmmssSSS + NN(00~99) + M */
  merchantUid: Scalars['String'];
  order: Order;
  orderItems: Array<OrderItem>;
  orderMerchantUid: Scalars['String'];
  /** 수거 완료 시점 */
  pickedAt?: Maybe<Scalars['DateTime']>;
  processDelayedAt: Scalars['DateTime'];
  /** 최대 255자 */
  reason: Scalars['String'];
  /** 최대 255자 */
  rejectReason?: Maybe<Scalars['String']>;
  rejectedAt?: Maybe<Scalars['DateTime']>;
  requestedAt: Scalars['DateTime'];
  seller?: Maybe<Seller>;
  sellerId?: Maybe<Scalars['Int']>;
  settledAt?: Maybe<Scalars['DateTime']>;
  shipment?: Maybe<Shipment>;
  shipmentId?: Maybe<Scalars['Int']>;
  /** 부과된 반품 배송비 */
  shippingFee: Scalars['Int'];
  status: RefundRequestStatus;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type RefundRequestFilter = {
  confirmedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  isProcessDelaying?: Maybe<Scalars['Boolean']>;
  merchantUidIn?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<RefundRequestOrderFilter>;
  pickedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  requestedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  /** 주문번호, 운송장번호로 검색 */
  search?: Maybe<Scalars['String']>;
  sellerId?: Maybe<Scalars['Int']>;
  status?: Maybe<RefundRequestStatus>;
  statusIn?: Maybe<Array<RefundRequestStatus>>;
};

export type RefundRequestOrderFilter = {
  paidAtBetween?: Maybe<Array<Scalars['DateTime']>>;
};

export type RefundRequestSearchFilter = {
  confirmedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  isProcessDelaying?: Maybe<Scalars['Boolean']>;
  isSettled?: Maybe<Scalars['Boolean']>;
  orderBuyerName?: Maybe<Scalars['String']>;
  pickedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  rejectedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  requestedAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  sellerId?: Maybe<Scalars['Int']>;
  settledAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  status?: Maybe<RefundRequestStatus>;
  statusIn?: Maybe<Array<RefundRequestStatus>>;
};

/** 반품요청 상태입니다. */
export enum RefundRequestStatus {
  Confirmed = 'Confirmed',
  Picked = 'Picked',
  Rejected = 'Rejected',
  Requested = 'Requested',
}

/** 생성일 기준 3달 이내의 건들만 count합니다. */
export type RefundRequestsCountOutput = {
  /** 반품 승인 */
  Confirmed: Scalars['Int'];
  /** 수거 완료 */
  Picked: Scalars['Int'];
  /** 반품 거부 */
  Rejected: Scalars['Int'];
  /** 반품 요청 (= 수거중) */
  Requested: Scalars['Int'];
  /** sellerId와 동일한 값. Apollo Client 캐싱을 위해 존재합니다. */
  id: Scalars['Int'];
  lastUpdatedAt: Scalars['DateTime'];
  /** 반품 처리 지연 (지연중인 requested + picked) */
  process_delayed: Scalars['Int'];
};

export type RegisterExchangeRequestInput = {
  faultOf: OrderClaimFaultOf;
  /** 교환 대상 product */
  productId: Scalars['Int'];
  /** 255자 이내로 적어주세요 */
  reason: Scalars['String'];
  shipmentInput?: Maybe<CreateShipmentInput>;
};

export type RegisterOrderInput = {
  cartItemIds?: Maybe<Array<Scalars['Int']>>;
  orderItemInputs?: Maybe<Array<RegisterOrderItemInput>>;
};

export type RegisterOrderItemInput = {
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  recommendDigestId?: Maybe<Scalars['Int']>;
};

export type RequestOrderRefundInput = {
  faultOf: OrderClaimFaultOf;
  /** 반품처리할 OrderItem들. 같은 브랜드의 OrderItem들로만 신청할 수 있습니다. */
  orderItemMerchantUids: Array<Scalars['String']>;
  /** 최대 255자 */
  reason: Scalars['String'];
  shipmentInput?: Maybe<CreateShipmentInput>;
};

export type RequestPinInput = {
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ReshipExchangeRequestInput = {
  courierId: Scalars['Int'];
  trackCode: Scalars['String'];
};

export type SearchExchangeRequestsOutput = {
  result: Array<ExchangeRequest>;
  total: Scalars['Int'];
};

export type SearchInquiriesOutput = {
  result: Array<Inquiry>;
  total: Scalars['Int'];
};

export type SearchOrderItemsOutput = {
  result: Array<OrderItem>;
  total: Scalars['Int'];
};

export type SearchRefundRequestsOutput = {
  result: Array<RefundRequest>;
  total: Scalars['Int'];
};

export type Seller = {
  brand: Brand;
  brandId?: Maybe<Scalars['Int']>;
  businessCode?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  claimPolicy: SellerClaimPolicy;
  courier?: Maybe<Courier>;
  courierId?: Maybe<Scalars['Int']>;
  crawlPolicy: SellerCrawlPolicy;
  crawlStrategy: SellerCrawlStrategy;
  createdAt: Scalars['DateTime'];
  csNotiPhoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  kakaoTalkCode?: Maybe<Scalars['String']>;
  mailOrderBusinessCode?: Maybe<Scalars['String']>;
  operationTimeMessage?: Maybe<Scalars['String']>;
  orderNotiPhoneNumber?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  /** 최대 20자 */
  representativeName?: Maybe<Scalars['String']>;
  returnAddress: SellerReturnAddress;
  saleStrategy: SellerSaleStrategy;
  settlePolicy?: Maybe<SellerSettlePolicy>;
  shippingPolicy: SellerShippingPolicy;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId?: Maybe<Scalars['Int']>;
};

export type SellerClaimPolicy = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  fee: Scalars['Int'];
  id: Scalars['Int'];
  isExchangable: Scalars['Boolean'];
  isRefundable: Scalars['Boolean'];
  /** 담당자 번호 */
  phoneNumber: Scalars['String'];
  /** 담당자 이름 */
  picName: Scalars['String'];
  sellerId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type SellerCrawlPolicy = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 크롤링된 새로운 아이템들을 추가 등록하는가 */
  isInspectingNew: Scalars['Boolean'];
  /** 기존 아이템들의 이름/가격을 업데이트하는가 */
  isUpdatingItems: Scalars['Boolean'];
  sellerId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type SellerCrawlStrategy = {
  baseUrl: Scalars['String'];
  codeRegex: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  itemsSelector: Scalars['String'];
  pageParam?: Maybe<Scalars['String']>;
  pagination: Scalars['Boolean'];
  sellerId: Scalars['Int'];
  /** '<>'으로 join된 상태다. */
  startPathNamesJoin: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SellerFilter = {
  businessCode?: Maybe<Scalars['String']>;
  kakaoTalkCodeIn?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
};

export type SellerReturnAddress = {
  baseAddress: Scalars['String'];
  createdAt: Scalars['DateTime'];
  detailAddress: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  receiverName: Scalars['String'];
  sellerId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type SellerSaleStrategy = {
  canUseCoupon: Scalars['Boolean'];
  canUseMileage: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  pickkDiscountRate: Scalars['Int'];
  sellerId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

/** 정산 계좌 */
export type SellerSettleAccount = {
  bankCode: BankCode;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
  settlePolicyId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type SellerSettlePolicy = {
  /** 정산 받을 계좌 */
  account: SellerSettleAccount;
  createdAt: Scalars['DateTime'];
  /** 세금계산서 수령이메일 */
  email: Scalars['String'];
  id: Scalars['Int'];
  /** 담당자 번호 */
  phoneNumber: Scalars['String'];
  picName: Scalars['String'];
  /** 기본 정산율 */
  rate: Scalars['Int'];
  sellerId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type SellerShippingPolicy = {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  fee: Scalars['Int'];
  id: Scalars['Int'];
  minimumAmountForFree: Scalars['Int'];
  sellerId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type SetCategoryToItemInput = {
  majorCategoryId: Scalars['Int'];
  minorCategoryId: Scalars['Int'];
};

export type ShipOrderItemInput = {
  courierId: Scalars['Int'];
  trackCode: Scalars['String'];
};

export type Shipment = {
  courier: Courier;
  courierId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  histories: Array<ShipmentHistory>;
  id: Scalars['Int'];
  lastTrackedAt?: Maybe<Scalars['DateTime']>;
  ownerPk?: Maybe<Scalars['String']>;
  ownerType?: Maybe<ShipmentOwnerType>;
  status: ShipmentStatus;
  trackCode: Scalars['String'];
};

export type ShipmentHistory = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  locationName: Scalars['String'];
  shipmentId: Scalars['Int'];
  statusText: Scalars['String'];
  time: Scalars['DateTime'];
};

/** 배송 연관 객체 분류입니다. */
export enum ShipmentOwnerType {
  ExchangeRequestPick = 'ExchangeRequestPick',
  ExchangeRequestReship = 'ExchangeRequestReship',
  OrderItem = 'OrderItem',
  RefundRequest = 'RefundRequest',
}

export enum ShipmentStatus {
  Cancelled = 'Cancelled',
  Failed = 'Failed',
  Shipped = 'Shipped',
  Shipping = 'Shipping',
}

export type ShippingAddress = {
  baseAddress: Scalars['String'];
  createdAt: Scalars['DateTime'];
  detailAddress: Scalars['String'];
  id: Scalars['Int'];
  isPrimary: Scalars['Boolean'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  receiverName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type StartOrderInput = {
  buyerInput: OrderBuyerInput;
  orderItemInputs?: Maybe<Array<StartOrderItemInput>>;
  payMethod?: Maybe<PayMethod>;
  receiverInput: OrderReceiverInput;
  refundAccountInput?: Maybe<OrderRefundAccountInput>;
  usedPointAmount: Scalars['Int'];
};

export type StartOrderItemInput = {
  /** order.merchantUid + 숫자 2자리 */
  merchantUid: Scalars['String'];
  usedCouponId?: Maybe<Scalars['Int']>;
};

export type StyleTag = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 최대 길이 30 */
  name: Scalars['String'];
  order: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type UpdateBrandInput = {
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  nameEng?: Maybe<Scalars['String']>;
  nameKor?: Maybe<Scalars['String']>;
};

export type UpdateCartItemInput = {
  quantity: Scalars['Int'];
};

export type UpdateCommentInput = {
  content?: Maybe<Scalars['String']>;
};

export type UpdateCourierInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  returnReserveUrl?: Maybe<Scalars['String']>;
};

export type UpdateDigestInput = {
  /** 최대 길이 65000자 */
  content?: Maybe<Scalars['String']>;
  imageUrls?: Maybe<Array<Scalars['String']>>;
  itemId?: Maybe<Scalars['Int']>;
  itemPropertyValueIds?: Maybe<Array<Scalars['Int']>>;
  rating?: Maybe<Scalars['Rating']>;
  size?: Maybe<Scalars['String']>;
  /** 최대 길이 127 */
  title?: Maybe<Scalars['String']>;
};

export type UpdateInquiryAnswerInput = {
  /** 최대 길이 255 */
  content?: Maybe<Scalars['String']>;
  /** 표시될 답변작성자 이름. 최대 길이 30 */
  displayAuthor?: Maybe<Scalars['String']>;
};

export type UpdateItemInput = {
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isInfiniteStock?: Maybe<Scalars['Boolean']>;
  majorCategoryId?: Maybe<Scalars['Float']>;
  minorCategoryId?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateItemOptionInput = {
  name: Scalars['String'];
};

export type UpdateItemPriceInput = {
  displayPrice?: Maybe<Scalars['Float']>;
  endAt?: Maybe<Scalars['DateTime']>;
  isCrawlUpdating?: Maybe<Scalars['Boolean']>;
  originalPrice?: Maybe<Scalars['Int']>;
  pickkDiscountAmount?: Maybe<Scalars['Int']>;
  pickkDiscountRate?: Maybe<Scalars['Int']>;
  sellPrice?: Maybe<Scalars['Int']>;
  startAt?: Maybe<Scalars['DateTime']>;
  unit?: Maybe<ItemPriceUnit>;
};

export type UpdateItemSizeChartInput = {
  labels: Array<Scalars['String']>;
  recommendations?: Maybe<Array<ItemSizeRecommendationInput>>;
  sizes: Array<ItemSizeInput>;
};

export type UpdateLookDigestInput = {
  id?: Maybe<Scalars['Int']>;
  itemId?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['String']>;
};

export type UpdateLookInput = {
  digests?: Maybe<Array<UpdateLookDigestInput>>;
  imageUrls?: Maybe<Array<Scalars['String']>>;
  styleTagIds?: Maybe<Array<Scalars['Int']>>;
  /** 최대 길이 127 */
  title?: Maybe<Scalars['String']>;
};

export type UpdateProductInput = {
  stock: Scalars['Int'];
};

export type UpdateProductShippingReservePolicyInput = {
  /** 예약발송 예정일 */
  estimatedShippingBegginDate?: Maybe<Scalars['DateTime']>;
  /** 예약설정된 재고. 예약발송일이 되면, 예약발송 상태는 자동으로 종료되며, 잔여 예약발송 재고는 일반 재고에 합산됩니다. */
  stock?: Maybe<Scalars['Int']>;
};

export type UpdateRefundAccountInput = {
  bankCode?: Maybe<BankCode>;
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number?: Maybe<Scalars['String']>;
  ownerName?: Maybe<Scalars['String']>;
};

export type UpdateSellerClaimPolicyInput = {
  description?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Int']>;
  isExchangable?: Maybe<Scalars['Boolean']>;
  isRefundable?: Maybe<Scalars['Boolean']>;
  /** 담당자 번호 */
  phoneNumber?: Maybe<Scalars['String']>;
  /** 담당자 이름 */
  picName?: Maybe<Scalars['String']>;
};

export type UpdateSellerCrawlPolicyInput = {
  /** 크롤링된 새로운 아이템들을 추가 등록하는가 */
  isInspectingNew?: Maybe<Scalars['Boolean']>;
  /** 기존 아이템들의 이름/가격을 업데이트하는가 */
  isUpdatingItems?: Maybe<Scalars['Boolean']>;
};

export type UpdateSellerInput = {
  businessCode?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  csNotiPhoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  kakaoTalkCode?: Maybe<Scalars['String']>;
  mailOrderBusinessCode?: Maybe<Scalars['String']>;
  operationTimeMessage?: Maybe<Scalars['String']>;
  orderNotiPhoneNumber?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  /** 최대 20자 */
  representativeName?: Maybe<Scalars['String']>;
};

export type UpdateSellerReturnAddressInput = {
  baseAddress?: Maybe<Scalars['String']>;
  detailAddress?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  receiverName?: Maybe<Scalars['String']>;
};

export type UpdateSellerSettleAccountInput = {
  bankCode?: Maybe<BankCode>;
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number?: Maybe<Scalars['String']>;
  ownerName?: Maybe<Scalars['String']>;
};

export type UpdateSellerSettlePolicyInput = {
  accountInput?: Maybe<UpdateSellerSettleAccountInput>;
  /** 세금계산서 수령이메일 */
  email?: Maybe<Scalars['String']>;
  /** 담당자 번호 */
  phoneNumber?: Maybe<Scalars['String']>;
  picName?: Maybe<Scalars['String']>;
  /** 기본 정산율 */
  rate?: Maybe<Scalars['Int']>;
};

export type UpdateSellerShippingPolicyInput = {
  description?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Int']>;
  minimumAmountForFree?: Maybe<Scalars['Int']>;
};

export type UpdateShippingAddressInput = {
  baseAddress?: Maybe<Scalars['String']>;
  detailAddress?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  receiverName?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  /** 최대 255자 */
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  instagramCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** 최대 11자 */
  nickname?: Maybe<Scalars['String']>;
  styleTagIds?: Maybe<Array<Scalars['Int']>>;
  weight?: Maybe<Scalars['Int']>;
  youtubeUrl?: Maybe<Scalars['String']>;
};

export type UpdateVideoDigestInput = {
  id?: Maybe<Scalars['Int']>;
  itemId?: Maybe<Scalars['Int']>;
  itemPropertyValueIds?: Maybe<Array<Scalars['Int']>>;
  rating?: Maybe<Scalars['Rating']>;
  size?: Maybe<Scalars['String']>;
  timestampEndSecond?: Maybe<Scalars['Int']>;
  timestampStartSecond?: Maybe<Scalars['Int']>;
  /** 최대 길이 127 */
  title?: Maybe<Scalars['String']>;
};

export type UpdateVideoInput = {
  digests?: Maybe<Array<UpdateVideoDigestInput>>;
  /** 최대 길이 127 */
  title?: Maybe<Scalars['String']>;
  /** 최대 길이 40 */
  youtubeCode?: Maybe<Scalars['String']>;
};

export type User = {
  /** [ResolveField] 활성화된 주문건들 개수 */
  activeOrderItemsCount: Scalars['Int'];
  /** [ResolveField] 사용가능 포인트 잔고 */
  availablePoint: Scalars['Int'];
  avatarUrl?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  /** 최대 255자 */
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** [ResolveField] 적립예정 포인트 잔고 */
  expectedPoint: Scalars['Int'];
  followCount: Scalars['Int'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  instagramCode?: Maybe<Scalars['String']>;
  /** [MODEL ONLY] */
  isFollowing?: Maybe<Scalars['Boolean']>;
  /** [MODEL ONLY] */
  isMe?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** 최대 11자 */
  nickname: Scalars['String'];
  oauthCode?: Maybe<Scalars['String']>;
  oauthProvider?: Maybe<UserProviderType>;
  phoneNumber?: Maybe<Scalars['String']>;
  refundAccount?: Maybe<RefundAccount>;
  role?: Maybe<UserRole>;
  shippingAddresses?: Maybe<Array<ShippingAddress>>;
  styleTags: Array<StyleTag>;
  updatedAt: Scalars['DateTime'];
  weight?: Maybe<Scalars['Int']>;
  youtubeUrl?: Maybe<Scalars['String']>;
};

/** Oauth 제공 서비스입니다. */
export enum UserProviderType {
  Apple = 'Apple',
  Facebook = 'Facebook',
  Kakao = 'Kakao',
}

/** 유저의 역할/권한을 나타냅니다. User->Editor->Seller->Admin 순으로 계층 구조입니다. */
export enum UserRole {
  Admin = 'Admin',
  Editor = 'Editor',
  Seller = 'Seller',
  User = 'User',
}

export type Video = {
  commentCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  digests: Array<Digest>;
  hitCount: Scalars['Int'];
  id: Scalars['Int'];
  /** [MODEL ONLY] */
  isLiking?: Maybe<Scalars['Boolean']>;
  /** [MODEL ONLY] */
  isMine?: Maybe<Scalars['Boolean']>;
  likeCount: Scalars['Int'];
  score: Scalars['Float'];
  /** 최대 길이 127 */
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  /** 최대 길이 40 */
  youtubeCode: Scalars['String'];
};

export type VideoFilter = {
  idIn?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  userIdIn?: Maybe<Array<Scalars['Int']>>;
};
