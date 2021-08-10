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
  /** Date type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AddItemNoticeInput = {
  endAt?: Maybe<Scalars['DateTime']>;
  message: Scalars['String'];
  startAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<ItemNoticeType>;
};

export type AddItemPriceInput = {
  endAt?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isCrawlUpdating: Scalars['Boolean'];
  originalPrice: Scalars['Int'];
  pickkDiscountAmount?: Maybe<Scalars['Int']>;
  pickkDiscountRate?: Maybe<Scalars['Int']>;
  sellPrice: Scalars['Int'];
  startAt?: Maybe<Scalars['DateTime']>;
};

export type AddItemSizeChartInput = {
  accDepth?: Maybe<Scalars['Float']>;
  accHeight?: Maybe<Scalars['Float']>;
  accWidth?: Maybe<Scalars['Float']>;
  chestWidth?: Maybe<Scalars['Float']>;
  crossStrapLength?: Maybe<Scalars['Float']>;
  glassBridgeLength?: Maybe<Scalars['Float']>;
  glassLegLength?: Maybe<Scalars['Float']>;
  glassWidth?: Maybe<Scalars['Float']>;
  hemWidth?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  riseHeight?: Maybe<Scalars['Float']>;
  shoulderWidth?: Maybe<Scalars['Float']>;
  sleeveLength?: Maybe<Scalars['Float']>;
  thighWidth?: Maybe<Scalars['Float']>;
  totalLength?: Maybe<Scalars['Float']>;
  waistWidth?: Maybe<Scalars['Float']>;
  watchBandDepth?: Maybe<Scalars['Float']>;
};

export type AddItemUrlInput = {
  isPrimary: Scalars['Boolean'];
  url: Scalars['String'];
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
  TossMoney = 'TossMoney',
  Woori = 'Woori',
}

export type BaseOrderOutput = {
  createdAt: Scalars['DateTime'];
  failedAt?: Maybe<Scalars['DateTime']>;
  /** ApolloClient 최적화를 위한 필드입니다. DB에는 존재하지 않습니다. */
  id: Scalars['String'];
  /** 주문고유번호. PrimaryColumn입니다. YYMMDDHHmmssSSS + NN(00~99) 형식입니다. */
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
  withdrawnAt?: Maybe<Scalars['DateTime']>;
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
  items: Array<Item>;
  /** 적용 정산률 (0~100) */
  rate: Scalars['Int'];
  startAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CancelOrderInput = {
  /**
   * 취소로 인해 환불되어야할 액수를 프론트에서 계산해서 넘겨주세요.
   * 서버에서 계산한 값과 입력된 값이 같은지 검증합니다.
   */
  amount: Scalars['Int'];
  /**
   * 취소 후 남을 총 결제 금액을 프론트에서 계산해서 넘겨주세요.
   * 서버에서 계산한 값과 입력된 값이 같은지 검증합니다.
   */
  checksum: Scalars['Int'];
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
  /** CartItem들을 브랜드 단위로 묶은 단위입니다. */
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
  isAdjusted: Scalars['Boolean'];
  product: Product;
  productId: Scalars['Float'];
  quantity: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CheckPinInput = {
  code: Scalars['String'];
  phoneNumber: Scalars['String'];
};

/** 교환/반품 배송비 지불 방식. (Trans:계좌입금, Enclose:택배상자 동봉) */
export enum ClaimFeePayMethod {
  Enclose = 'Enclose',
  Trans = 'Trans',
}

/** 컨텐츠 타입입니다. */
export enum ContentType {
  Look = 'Look',
  Pickk = 'Pickk',
}

export type Coupon = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  spec?: Maybe<CouponSpecification>;
  specId: Scalars['Float'];
  status?: Maybe<CouponStatus>;
  updatedAt: Scalars['DateTime'];
};

export type CouponSpecification = {
  /** 이 값으로 클라이언트에서 필터링 해주세요. */
  availableAt?: Maybe<Scalars['DateTime']>;
  brand?: Maybe<Brand>;
  brandId?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  discountAmount?: Maybe<Scalars['Int']>;
  /** 1~99 정수만 입력 가능합니다. */
  discountRate?: Maybe<Scalars['Int']>;
  expireAt: Scalars['DateTime'];
  id: Scalars['Int'];
  maximumDiscountPrice?: Maybe<Scalars['Int']>;
  minimumForUse?: Maybe<Scalars['Int']>;
  /** 최대 30자까지 입력할 수 있습니다. */
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
  issue?: Maybe<CourierIssue>;
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  returnReserveUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CourierIssue = {
  createdAt: Scalars['DateTime'];
  endAt: Scalars['DateTime'];
  id: Scalars['Int'];
  message: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateCartItemInput = {
  productId: Scalars['Float'];
  quantity: Scalars['Int'];
};

export type CreateCouponInput = {
  specId: Scalars['Float'];
};

export type CreateCouponSpecificationInput = {
  /** 이 값으로 클라이언트에서 필터링 해주세요. */
  availableAt?: Maybe<Scalars['DateTime']>;
  brandId?: Maybe<Scalars['Float']>;
  discountAmount?: Maybe<Scalars['Int']>;
  /** 1~99 정수만 입력 가능합니다. */
  discountRate?: Maybe<Scalars['Int']>;
  expireAt: Scalars['DateTime'];
  maximumDiscountPrice?: Maybe<Scalars['Int']>;
  minimumForUse?: Maybe<Scalars['Int']>;
  /** 최대 30자까지 입력할 수 있습니다. */
  name: Scalars['String'];
  type: CouponType;
};

export type CreateCourierInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  returnReserveUrl: Scalars['String'];
};

export type CreateItemDetailImageInput = {
  urls: Array<Scalars['String']>;
};

export type CreateItemOptionInput = {
  name: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type CreateItemOptionSetInput = {
  options: Array<CreateItemOptionInput>;
};

export type CreateOrderVbankReceiptInput = {
  bankCode: BankCode;
  due: Scalars['DateTime'];
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
};

export type CreateRefundAccountInput = {
  bankCode: BankCode;
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
};

export type CreateSellerClaimAccountInput = {
  bankCode: BankCode;
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
};

export type CreateSellerClaimPolicyInput = {
  accountInput?: Maybe<CreateSellerClaimAccountInput>;
  fee: Scalars['Int'];
  feePayMethod: ClaimFeePayMethod;
  isExchangable: Scalars['Boolean'];
  isRefundable: Scalars['Boolean'];
  /** 담당자 번호 */
  phoneNumber: Scalars['String'];
  /** 담당자 이름 */
  picName: Scalars['String'];
};

export type CreateSellerCrawlPolicyInput = {
  isInspectingNew: Scalars['Boolean'];
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
  businessCode: Scalars['String'];
  businessName: Scalars['String'];
  claimPolicyInput: CreateSellerClaimPolicyInput;
  courierId: Scalars['Int'];
  crawlPolicyInput: CreateSellerCrawlPolicyInput;
  crawlStrategyInput: CreateSellerCrawlStrategyInput;
  csNotiPhoneNumber?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  kakaoTalkCode?: Maybe<Scalars['String']>;
  mailOrderBusinessCode: Scalars['String'];
  operationTimeMessage: Scalars['String'];
  orderNotiPhoneNumber?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  representativeName: Scalars['String'];
  returnAddressInput: CreateSellerReturnAddressInput;
  saleStrategyInput: FindSaleStrategyInput;
  settlePolicyInput?: Maybe<CreateSellerSettlePolicyInput>;
  shippingPolicyInput: CreateSellerShippingPolicyInput;
  userId: Scalars['Int'];
};

export type CreateSellerReturnAddressInput = {
  baseAddress: Scalars['String'];
  detailAddress: Scalars['String'];
  postalCode: Scalars['String'];
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
  /** 정산율 */
  rate: Scalars['Int'];
};

export type CreateSellerShippingPolicyInput = {
  fee: Scalars['Int'];
  minimumAmountForFree: Scalars['Int'];
};

export type CreateShipmentInput = {
  courierId?: Maybe<Scalars['Int']>;
  trackCode?: Maybe<Scalars['String']>;
};

export type CreateShippingAddressInput = {
  baseAddress: Scalars['String'];
  detailAddress: Scalars['String'];
  isPrimary: Scalars['Boolean'];
  name: Scalars['String'];
  phoneNumber1: Scalars['String'];
  phoneNumber2?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  receiverName: Scalars['String'];
};

export type CreateUserInput = {
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  oauthCode?: Maybe<Scalars['String']>;
  oauthProvider?: Maybe<UserProviderType>;
  password?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type ExchangeRequest = {
  confirmedAt?: Maybe<Scalars['DateTime']>;
  faultOf: RefundRequestFaultOf;
  id: Scalars['Int'];
  itemName: Scalars['String'];
  orderItem: OrderItem;
  orderItemMerchantUid: Scalars['String'];
  pickShipment?: Maybe<Shipment>;
  pickShipmentId?: Maybe<Scalars['Int']>;
  /** 수거 완료 시점 */
  pickedAt?: Maybe<Scalars['DateTime']>;
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
  /** 결제된 교환 배송비 */
  shippingFee: Scalars['Int'];
  status: ExchangeRequestStatus;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

/** 교한신청 상태입니다. */
export enum ExchangeRequestStatus {
  Picked = 'Picked',
  Rejected = 'Rejected',
  Requested = 'Requested',
  Reshipped = 'Reshipped',
  Reshipping = 'Reshipping',
}

export type FindSaleStrategyInput = {
  canUseCoupon: Scalars['Boolean'];
  canUseMileage: Scalars['Boolean'];
};

export type Item = {
  brand: Brand;
  brandId: Scalars['Int'];
  campaigns?: Maybe<Array<Campaign>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  detailImages?: Maybe<Array<ItemDetailImage>>;
  finalPrice: Scalars['Float'];
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
  /** 상품 안내 메세지입니다. 파트너어드민에서 입력할 수 있습니다. */
  notice?: Maybe<ItemNotice>;
  options?: Maybe<Array<ItemOption>>;
  originalPrice: Scalars['Float'];
  prices: Array<ItemPrice>;
  products?: Maybe<Array<Product>>;
  providedCode?: Maybe<Scalars['String']>;
  salePolicy?: Maybe<ItemSalePolicy>;
  sellPrice: Scalars['Float'];
  /** 판매가능시점(=활성전환일) */
  sellableAt?: Maybe<Scalars['DateTime']>;
  sizeChartMetaDatas?: Maybe<Array<ItemSizeChartMetaData>>;
  sizeCharts?: Maybe<Array<ItemSizeChart>>;
  updatedAt: Scalars['DateTime'];
  urls: Array<ItemUrl>;
};

export type ItemCategory = {
  children: Array<ItemCategory>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  parent: ItemCategory;
  updatedAt: Scalars['DateTime'];
};

export type ItemDetailImage = {
  angle: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  key: Scalars['String'];
  url: Scalars['String'];
};

export type ItemFilter = {
  brandId?: Maybe<Scalars['Int']>;
  createdAtLte?: Maybe<Scalars['DateTime']>;
  createdAtMte?: Maybe<Scalars['DateTime']>;
  isMdRecommended?: Maybe<Scalars['Boolean']>;
  isPurchasable?: Maybe<Scalars['Boolean']>;
  isSellable?: Maybe<Scalars['Boolean']>;
  majorCategoryId?: Maybe<Scalars['Float']>;
  minorCategoryId?: Maybe<Scalars['Float']>;
  /** 아이템 이름(name)으로 검색합니다. */
  search?: Maybe<Scalars['String']>;
  sellableAtLte?: Maybe<Scalars['DateTime']>;
  sellableAtMte?: Maybe<Scalars['DateTime']>;
};

export type ItemNotice = {
  createdAt: Scalars['DateTime'];
  endAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  message: Scalars['String'];
  startAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<ItemNoticeType>;
  updatedAt: Scalars['DateTime'];
};

/** 아이템 안내 분류입니다. 기본값은 General입니다. */
export enum ItemNoticeType {
  CustomOrder = 'CustomOrder',
  DeliveryDelay = 'DeliveryDelay',
  General = 'General',
  OverseaDelivery = 'OverseaDelivery',
  PreorderDelivery = 'PreorderDelivery',
}

export type ItemOption = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  values: Array<ItemOptionValue>;
};

export type ItemOptionValue = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Float'];
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
  pickkDiscountRate?: Maybe<Scalars['Int']>;
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

export type ItemSalePolicy = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isUsingQuantityLimit: Scalars['Boolean'];
  isUsingStock: Scalars['Boolean'];
  quantityLimit: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ItemSizeChart = {
  accDepth?: Maybe<Scalars['Float']>;
  accHeight?: Maybe<Scalars['Float']>;
  accWidth?: Maybe<Scalars['Float']>;
  chestWidth?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  crossStrapLength?: Maybe<Scalars['Float']>;
  glassBridgeLength?: Maybe<Scalars['Float']>;
  glassLegLength?: Maybe<Scalars['Float']>;
  glassWidth?: Maybe<Scalars['Float']>;
  hemWidth?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  itemId: Scalars['Int'];
  name: Scalars['String'];
  riseHeight?: Maybe<Scalars['Float']>;
  shoulderWidth?: Maybe<Scalars['Float']>;
  sleeveLength?: Maybe<Scalars['Float']>;
  thighWidth?: Maybe<Scalars['Float']>;
  totalLength?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  waistWidth?: Maybe<Scalars['Float']>;
  watchBandDepth?: Maybe<Scalars['Float']>;
};

export type ItemSizeChartMetaData = {
  columnName: Scalars['String'];
  displayName: Scalars['String'];
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

export type JwtPayload = {
  /** Seller 로그인인 경우에만 발급된다. */
  brandId?: Maybe<Scalars['Float']>;
  exp: Scalars['Timestamp'];
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

export type LoginWithAppleInput = {
  clientType: AppleClientType;
  code: Scalars['String'];
};

export type Mutation = {
  activateItemPrice: Item;
  addItemDetailImages: Item;
  addItemNotice: ItemNotice;
  addItemPrice: ItemPrice;
  addItemSizeCharts: Item;
  addItemUrl: ItemUrl;
  addMyRefundAccount: RefundAccount;
  addMyShippingAddress: Array<ShippingAddress>;
  basifyPrice: Item;
  bulkUpdateItems: Scalars['Boolean'];
  cancelOrder: Order;
  completeOrder: BaseOrderOutput;
  createCoupon: Coupon;
  createCouponSpecification: CouponSpecification;
  createCourier: Courier;
  createItemOptionSet: Item;
  createMyCartItem: CartItem;
  createSeller: Seller;
  createUser: User;
  dodgeVbankOrder: BaseOrderOutput;
  failOrder: BaseOrderOutput;
  modifyItemSizeCharts: Item;
  registerOrder: BaseOrderOutput;
  removeCourierIssue: Courier;
  removeItemDetailImage: Item;
  removeItemNotice: Item;
  removeItemPrice: Item;
  removeItemSizeChartsAll: Item;
  removeMyAvatarImage: UserAvatarImage;
  removeMyCartItems: Scalars['Boolean'];
  removeMyRefundAccount: User;
  removeMyShippingAddress: Array<ShippingAddress>;
  requestOrderItemExchange: OrderItem;
  requestOrderRefund: Order;
  startOrder: BaseOrderOutput;
  updateBrand: Brand;
  updateCourier: Courier;
  updateCourierIssue: CourierIssue;
  updateItem: Item;
  updateItemNotice: ItemNotice;
  updateItemOption: ItemOption;
  updateItemPrice: ItemPrice;
  updateMe: User;
  updateMeSeller: Seller;
  updateMyAvatarImage: UserAvatarImage;
  updateMyCartItem: CartItem;
  /** (!) 예전 비밀번호와 현재 비밀번호를 입력해주세요. */
  updateMyPassword: User;
  updateMyRefundAccount: RefundAccount;
  updateMySellerClaimPolicy: SellerClaimPolicy;
  updateMySellerCrawlPolicy: SellerCrawlPolicy;
  updateMySellerReturnAddress: SellerReturnAddress;
  /** 추가도 이거로 해주시면 됩니다! */
  updateMySellerSettlePolicy: SellerSettlePolicy;
  updateMySellerShippingPolicy: SellerShippingPolicy;
  updateMyShippingAddress: ShippingAddress;
  updateProduct: Product;
  /** 입력한 seller의 saleStrategy를 변경합니다. Admin 이상의 권한이 필요합니다. */
  updateSellerSaleStrategy: SaleStrategy;
  uploadMultipleImages: Array<Scalars['String']>;
};

export type MutationActivateItemPriceArgs = {
  itemId: Scalars['Int'];
  priceId: Scalars['Int'];
};

export type MutationAddItemDetailImagesArgs = {
  createItemDetailImageInput: CreateItemDetailImageInput;
  itemId: Scalars['Int'];
};

export type MutationAddItemNoticeArgs = {
  addItemNoticeInput: AddItemNoticeInput;
  itemId: Scalars['Int'];
};

export type MutationAddItemPriceArgs = {
  addItemPriceInput: AddItemPriceInput;
  itemId: Scalars['Int'];
};

export type MutationAddItemSizeChartsArgs = {
  addItemSizeChartInputs: Array<AddItemSizeChartInput>;
  itemId: Scalars['Int'];
};

export type MutationAddItemUrlArgs = {
  addItemUrlInput: AddItemUrlInput;
  itemId: Scalars['Int'];
};

export type MutationAddMyRefundAccountArgs = {
  createRefundAccountInput: CreateRefundAccountInput;
};

export type MutationAddMyShippingAddressArgs = {
  createShippingAddressInput: CreateShippingAddressInput;
};

export type MutationBasifyPriceArgs = {
  itemId: Scalars['Int'];
  priceId: Scalars['Int'];
};

export type MutationBulkUpdateItemsArgs = {
  bulkUpdateItemInput: BulkUpdateItemInput;
  ids: Array<Scalars['Int']>;
};

export type MutationCancelOrderArgs = {
  cancelOrderInput: CancelOrderInput;
  merchantUid: Scalars['String'];
};

export type MutationCompleteOrderArgs = {
  createOrderVbankReceiptInput?: Maybe<CreateOrderVbankReceiptInput>;
  merchantUid: Scalars['String'];
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

export type MutationCreateItemOptionSetArgs = {
  createItemOptionSetInput: CreateItemOptionSetInput;
  id: Scalars['Int'];
};

export type MutationCreateMyCartItemArgs = {
  createCartItemInput: CreateCartItemInput;
};

export type MutationCreateSellerArgs = {
  createSellerInput: CreateSellerInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationDodgeVbankOrderArgs = {
  merchantUid: Scalars['String'];
};

export type MutationFailOrderArgs = {
  merchantUid: Scalars['String'];
};

export type MutationModifyItemSizeChartsArgs = {
  itemId: Scalars['Int'];
  removedChartIds?: Maybe<Array<Scalars['Int']>>;
  updateItemSizeChartInput?: Maybe<Array<UpdateItemSizeChartInput>>;
};

export type MutationRegisterOrderArgs = {
  registerOrderInput: RegisterOrderInput;
};

export type MutationRemoveCourierIssueArgs = {
  courierId: Scalars['Int'];
};

export type MutationRemoveItemDetailImageArgs = {
  detailImageKey: Scalars['String'];
  itemId: Scalars['Int'];
};

export type MutationRemoveItemNoticeArgs = {
  itemId: Scalars['Int'];
};

export type MutationRemoveItemPriceArgs = {
  itemId: Scalars['Int'];
  priceId: Scalars['Int'];
};

export type MutationRemoveItemSizeChartsAllArgs = {
  itemId: Scalars['Int'];
};

export type MutationRemoveMyCartItemsArgs = {
  ids: Array<Scalars['Int']>;
};

export type MutationRemoveMyShippingAddressArgs = {
  addressId: Scalars['Int'];
};

export type MutationRequestOrderItemExchangeArgs = {
  merchantUid: Scalars['String'];
  requestOrderItemExchangeInput: RequestOrderItemExchangeInput;
};

export type MutationRequestOrderRefundArgs = {
  merchantUid: Scalars['String'];
  requestOrderRefundInput: RequestOrderRefundInput;
};

export type MutationStartOrderArgs = {
  merchantUid: Scalars['String'];
  startOrderInput: StartOrderInput;
};

export type MutationUpdateBrandArgs = {
  id: Scalars['Int'];
  updateBrandInput: UpdateBrandInput;
};

export type MutationUpdateCourierArgs = {
  id: Scalars['Int'];
  updateCourierInput: UpdateCourierInput;
};

export type MutationUpdateCourierIssueArgs = {
  courierId: Scalars['Int'];
  updateCourierIssueInput: UpdateCourierIssueInput;
};

export type MutationUpdateItemArgs = {
  itemId: Scalars['Int'];
  updateItemInput: UpdateItemInput;
};

export type MutationUpdateItemNoticeArgs = {
  itemId: Scalars['Int'];
  updateItemNoticeInput: UpdateItemNoticeInput;
};

export type MutationUpdateItemOptionArgs = {
  id: Scalars['Int'];
  updateItemOptionInput: UpdateItemOptionInput;
};

export type MutationUpdateItemPriceArgs = {
  id: Scalars['Int'];
  updateItemPriceInput: UpdateItemPriceInput;
};

export type MutationUpdateMeArgs = {
  updateUserInput: UpdateUserInput;
};

export type MutationUpdateMeSellerArgs = {
  updateSellerInput: UpdateSellerInput;
};

export type MutationUpdateMyAvatarImageArgs = {
  uploadSingleImageInput: UploadSingleImageInput;
};

export type MutationUpdateMyCartItemArgs = {
  id: Scalars['Int'];
  updateCartItemInput: UpdateCartItemInput;
};

export type MutationUpdateMyPasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type MutationUpdateMyRefundAccountArgs = {
  updateRefundAccountInput: UpdateRefundAccountInput;
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

export type MutationUpdateMyShippingAddressArgs = {
  addressId: Scalars['Int'];
  updateShippingAddressInput: UpdateShippingAddressInput;
};

export type MutationUpdateProductArgs = {
  id: Scalars['Int'];
  updateProductInput: UpdateProductInput;
};

export type MutationUpdateSellerSaleStrategyArgs = {
  sellerId: Scalars['Int'];
  updateSaleStrategyInput: FindSaleStrategyInput;
};

export type MutationUploadMultipleImagesArgs = {
  uploadImageInput: UploadMultipleImageInput;
};

export type Order = {
  buyer?: Maybe<OrderBuyer>;
  createdAt: Scalars['DateTime'];
  failedAt?: Maybe<Scalars['DateTime']>;
  /** ApolloClient 최적화를 위한 필드입니다. DB에는 존재하지 않습니다. */
  id: Scalars['String'];
  /** 주문고유번호. PrimaryColumn입니다. YYMMDDHHmmssSSS + NN(00~99) 형식입니다. */
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
  vbankInfo?: Maybe<OrderVbankReceipt>;
  vbankReadyAt?: Maybe<Scalars['DateTime']>;
  withdrawnAt?: Maybe<Scalars['DateTime']>;
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

export type OrderItem = {
  brandNameKor: Scalars['String'];
  cancelRequestedAt?: Maybe<Scalars['DateTime']>;
  cancelledAt?: Maybe<Scalars['DateTime']>;
  claimStatus?: Maybe<OrderItemClaimStatus>;
  confirmedAt?: Maybe<Scalars['DateTime']>;
  couponDiscountAmount: Scalars['Int'];
  courier?: Maybe<Courier>;
  courierId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  exchangeRequest: ExchangeRequest;
  exchangeRequestedAt?: Maybe<Scalars['DateTime']>;
  exchangedAt?: Maybe<Scalars['DateTime']>;
  failedAt?: Maybe<Scalars['DateTime']>;
  /** ApolloClient 최적화를 위한 필드입니다. DB에는 존재하지 않습니다. */
  id: Scalars['String'];
  isConfirmed: Scalars['Boolean'];
  isSettled: Scalars['Boolean'];
  isShipReserved: Scalars['Boolean'];
  item?: Maybe<Item>;
  itemFinalPrice: Scalars['Int'];
  itemId?: Maybe<Scalars['Int']>;
  itemName: Scalars['String'];
  /** 주문상품고유번호. PrimaryColumn입니다. order의 merchantUid + 숫자 1자리 형식입니다. */
  merchantUid: Scalars['String'];
  name: Scalars['String'];
  order: Order;
  orderMerchantUid: Scalars['String'];
  paidAt?: Maybe<Scalars['DateTime']>;
  /** itemFinalPrice - usedPointAmount - couponDiscountAmount */
  payAmount: Scalars['Float'];
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Int']>;
  productVariantName: Scalars['String'];
  quantity: Scalars['Int'];
  recommendContentItemId?: Maybe<Scalars['Int']>;
  recommendContentType?: Maybe<ContentType>;
  recommenderId?: Maybe<Scalars['Int']>;
  recommenderNickname?: Maybe<Scalars['String']>;
  refundRequest: RefundRequest;
  refundRequestedAt?: Maybe<Scalars['DateTime']>;
  refundedAt?: Maybe<Scalars['DateTime']>;
  seller?: Maybe<Seller>;
  sellerId?: Maybe<Scalars['Int']>;
  settledAt?: Maybe<Scalars['DateTime']>;
  shipReadyAt?: Maybe<Scalars['DateTime']>;
  /** 예약발송 예정일 */
  shipReservedAt?: Maybe<Scalars['DateTime']>;
  shipment?: Maybe<Shipment>;
  shipmentId?: Maybe<Scalars['Int']>;
  shippedAt?: Maybe<Scalars['DateTime']>;
  shippingAt?: Maybe<Scalars['DateTime']>;
  status: OrderItemStatus;
  trackCode?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  usedCoupon?: Maybe<Coupon>;
  usedCouponId?: Maybe<Scalars['Int']>;
  usedCouponName?: Maybe<Scalars['String']>;
  usedPointAmount: Scalars['Int'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  vbankDodgedAt?: Maybe<Scalars['DateTime']>;
  vbankReadyAt?: Maybe<Scalars['DateTime']>;
  withdrawnAt?: Maybe<Scalars['DateTime']>;
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

export type OrderReceiver = {
  baseAddress: Scalars['String'];
  createdAt: Scalars['DateTime'];
  detailAddress: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OrderReceiverInput = {
  baseAddress: Scalars['String'];
  detailAddress: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
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
  brands: Array<OrderSheetBrand>;
  coupons: Array<Coupon>;
  /** ApolloClient 최적화를 위한 필드입니다. order의 merchantUid와 같습니다. */
  id: Scalars['String'];
  order: Order;
  refundAccount?: Maybe<RefundAccount>;
  shippingAddresses: Array<ShippingAddress>;
};

export type OrderSheetBrand = {
  items: Array<OrderItem>;
  nameKor: Scalars['String'];
  shippingFee: Scalars['Int'];
  totalItemFinalPrice: Scalars['Int'];
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
  /** 주문고유번호. PrimaryColumn입니다. YYMMDDHHmmssSSS + NN(00~99) 형식입니다. */
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
  vbankDate?: Maybe<Scalars['String']>;
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
  PatialCancel = 'PatialCancel',
}

export type PaymentFilter = {
  buyerEmailSearch?: Maybe<Scalars['String']>;
  buyerNameSearch?: Maybe<Scalars['String']>;
  buyerTelSearch?: Maybe<Scalars['String']>;
  createdAtBetween?: Maybe<Array<Scalars['DateTime']>>;
  merchantUid?: Maybe<Scalars['String']>;
  merchantUidSearch?: Maybe<Scalars['String']>;
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
  cancelled: Scalars['Float'];
  failed: Scalars['Float'];
  paid: Scalars['Float'];
  partial_cancelled: Scalars['Float'];
  pending: Scalars['Float'];
  vbank_ready: Scalars['Float'];
};

/** PG사입니다. */
export enum Pg {
  Inicis = 'Inicis',
}

export type PointEvent = {
  /** 적립/사용 금액. 적립인 경우 양수, 사용인 경우 음수입니다. */
  amount: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  orderId?: Maybe<Scalars['Float']>;
  orderItemId?: Maybe<Scalars['Float']>;
  /** 적립/사용 이후 잔고 */
  resultBalance: Scalars['Int'];
  title: Scalars['String'];
  type: PointType;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Float'];
};

export type PointEventFilter = {
  createdAtLte?: Maybe<Scalars['DateTime']>;
  createdAtMte?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PointType>;
  userId?: Maybe<Scalars['Int']>;
};

/** 포인트 분류입니다. 적립(Add), 사용(Sub) */
export enum PointType {
  Add = 'Add',
  Sub = 'Sub',
}

export type Product = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 예약배송 적용 여부 */
  isShipReserving: Scalars['Boolean'];
  item: Item;
  itemId: Scalars['Int'];
  itemOptionValues: Array<ItemOptionValue>;
  shippingReservePolicy?: Maybe<ProductShippingReservePolicy>;
  stock: Scalars['Int'];
  /** 이 Product의 stock이 0이면 예약배송정책의 stock을 반환합니다. */
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
  /** 중복이면 true, 아니면 false를 반환한다. */
  checkNicknameDuplicate: Scalars['Boolean'];
  checkPin: Scalars['Boolean'];
  checkoutOrder: OrderSheet;
  courier: Courier;
  couriers: Array<Courier>;
  genRandomNickname: Scalars['String'];
  item: Item;
  itemCategoryTree: Array<ItemCategory>;
  itemMajorCategories: Array<ItemCategory>;
  itemMinorCategories: Array<ItemCategory>;
  items: Array<Item>;
  loginByCode: JwtToken;
  loginByOauth: JwtToken;
  loginSellerByCode: JwtToken;
  loginWithApple: JwtToken;
  me: User;
  meSeller: Seller;
  meSellerOrderItems: Array<OrderItem>;
  myCart: Cart;
  myCartItemsCount: Scalars['Int'];
  myCoupons: Array<Coupon>;
  myExpectedPointEvents: Array<PointEvent>;
  /** Bearer token을 받아 JwtPayload를 반환합니다. */
  myJwtPayload: JwtPayload;
  myPointEvents: Array<PointEvent>;
  myShippingAddress: ShippingAddress;
  myShippingAddresses: Array<ShippingAddress>;
  /** [Admin] 결제 목록을 조회합니다. */
  payments: PaymentListOutput;
  /** refresh token을 받아서 새로운 JwtToken을 생성합니다. */
  refreshJwtToken: JwtToken;
  requestPin: Scalars['Boolean'];
  seller: Seller;
  sellers: Array<Seller>;
  user: User;
  users: Array<User>;
};

export type QueryBrandArgs = {
  id: Scalars['Int'];
};

export type QueryCheckNicknameDuplicateArgs = {
  nickname: Scalars['String'];
};

export type QueryCheckPinArgs = {
  checkPinInput: CheckPinInput;
};

export type QueryCheckoutOrderArgs = {
  merchantUid: Scalars['String'];
};

export type QueryCourierArgs = {
  id: Scalars['Int'];
};

export type QueryItemArgs = {
  id: Scalars['Int'];
};

export type QueryItemsArgs = {
  itemFilter?: Maybe<ItemFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryLoginByCodeArgs = {
  loginByCodeInput: LoginByCodeInput;
};

export type QueryLoginByOauthArgs = {
  loginByOauthInput: LoginByOauthInput;
};

export type QueryLoginSellerByCodeArgs = {
  loginByCodeInput: LoginByCodeInput;
};

export type QueryLoginWithAppleArgs = {
  getAppleProviderIdInput: LoginWithAppleInput;
};

export type QueryMeSellerOrderItemsArgs = {
  orderItemFilter?: Maybe<OrderItemFilter>;
  pageInput?: Maybe<PageInput>;
};

export type QueryMyExpectedPointEventsArgs = {
  pageInput?: Maybe<PageInput>;
  pointEventFilter?: Maybe<PointEventFilter>;
};

export type QueryMyPointEventsArgs = {
  pageInput?: Maybe<PageInput>;
  pointEventFilter?: Maybe<PointEventFilter>;
};

export type QueryMyShippingAddressArgs = {
  id: Scalars['Int'];
};

export type QueryPaymentsArgs = {
  paymentFilter: PaymentFilter;
};

export type QueryRequestPinArgs = {
  requestPinInput: RequestPinInput;
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

/** 가상계좌 결제시 환불 받을 계좌 정보 */
export type RefundAccount = {
  bankCode: BankCode;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RefundRequest = {
  amount: Scalars['Int'];
  confirmedAt?: Maybe<Scalars['DateTime']>;
  faultOf: RefundRequestFaultOf;
  id: Scalars['Int'];
  order: Order;
  orderItems: Array<OrderItem>;
  orderMerchantUid: Scalars['String'];
  /** 수거 완료 시점 */
  pickedAt?: Maybe<Scalars['DateTime']>;
  /** 255자 이내로 적어주세요 */
  reason: Scalars['String'];
  /** 255자 이내로 적어주세요 */
  rejectReason?: Maybe<Scalars['String']>;
  rejectedAt?: Maybe<Scalars['DateTime']>;
  requestedAt: Scalars['DateTime'];
  seller?: Maybe<Seller>;
  sellerId?: Maybe<Scalars['Int']>;
  shipment?: Maybe<Shipment>;
  shipmentId?: Maybe<Scalars['Int']>;
  status: RefundRequestStatus;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

/** 교환/반품 책임자?입니다. (구매자 or 판매자) */
export enum RefundRequestFaultOf {
  Customer = 'Customer',
  Seller = 'Seller',
}

/** 반품요청 상태입니다. */
export enum RefundRequestStatus {
  Confirmed = 'Confirmed',
  Picked = 'Picked',
  Rejected = 'Rejected',
  Requested = 'Requested',
}

export type RegisterOrderInput = {
  cartItemIds?: Maybe<Array<Scalars['Int']>>;
  orderItemInputs?: Maybe<Array<RegisterOrderItemInput>>;
};

export type RegisterOrderItemInput = {
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  recommendContentItemId?: Maybe<Scalars['Int']>;
  recommendContentType?: Maybe<ContentType>;
};

export type RequestOrderItemExchangeInput = {
  faultOf: RefundRequestFaultOf;
  productId?: Maybe<Scalars['Int']>;
  /** 255자 이내로 적어주세요 */
  reason: Scalars['String'];
  shipmentInput?: Maybe<CreateShipmentInput>;
  /** 결제된 교환 배송비 */
  shippingFee: Scalars['Int'];
};

export type RequestOrderRefundInput = {
  /**
   * 반품로 인해 환불되어야할 액수를 프론트에서 계산해서 넘겨주세요.
   * 서버에서 계산한 값과 입력된 값이 같은지 검증합니다.
   */
  amount: Scalars['Int'];
  /**
   * 반품 후 남을 총 결제 금액을 프론트에서 계산해서 넘겨주세요.
   * 서버에서 계산한 값과 입력된 값이 같은지 검증합니다.
   */
  checksum: Scalars['Int'];
  faultOf: RefundRequestFaultOf;
  /** 반품처리할 OrderItem들. 같은 브랜드의 OrderItem들로만 신청할 수 있습니다. */
  orderItemMerchantUids: Array<Scalars['String']>;
  /** 255자 이내로 적어주세요 */
  reason: Scalars['String'];
  shipmentInput?: Maybe<CreateShipmentInput>;
};

export type RequestPinInput = {
  phoneNumber?: Maybe<Scalars['String']>;
};

export type SaleStrategy = {
  canUseCoupon: Scalars['Boolean'];
  canUseMileage: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type Seller = {
  brand: Brand;
  brandId?: Maybe<Scalars['Int']>;
  businessCode: Scalars['String'];
  businessName: Scalars['String'];
  claimPolicy: SellerClaimPolicy;
  courier: Courier;
  courierId?: Maybe<Scalars['Int']>;
  crawlPolicy: SellerCrawlPolicy;
  crawlStrategy: SellerCrawlStrategy;
  createdAt: Scalars['DateTime'];
  csNotiPhoneNumber?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  kakaoTalkCode?: Maybe<Scalars['String']>;
  mailOrderBusinessCode: Scalars['String'];
  operationTimeMessage: Scalars['String'];
  orderNotiPhoneNumber?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  representativeName: Scalars['String'];
  returnAddress: SellerReturnAddress;
  saleStrategy: SaleStrategy;
  settlePolicy?: Maybe<SellerSettlePolicy>;
  shippingPolicy: SellerShippingPolicy;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId?: Maybe<Scalars['Int']>;
};

/** 교환배송비 지불 계좌 */
export type SellerClaimAccount = {
  bankCode: BankCode;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number: Scalars['String'];
  ownerName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SellerClaimPolicy = {
  account?: Maybe<SellerClaimAccount>;
  createdAt: Scalars['DateTime'];
  fee: Scalars['Int'];
  feePayMethod: ClaimFeePayMethod;
  id: Scalars['Int'];
  isExchangable: Scalars['Boolean'];
  isRefundable: Scalars['Boolean'];
  /** 담당자 번호 */
  phoneNumber: Scalars['String'];
  /** 담당자 이름 */
  picName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SellerCrawlPolicy = {
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isInspectingNew: Scalars['Boolean'];
  isUpdatingItems: Scalars['Boolean'];
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
  postalCode: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SellerSettlePolicy = {
  /** 정산 받을 계좌 */
  account: SellerClaimAccount;
  createdAt: Scalars['DateTime'];
  /** 세금계산서 수령이메일 */
  email: Scalars['String'];
  id: Scalars['Int'];
  /** 담당자 번호 */
  phoneNumber: Scalars['String'];
  picName: Scalars['String'];
  /** 정산율 */
  rate: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type SellerShippingPolicy = {
  createdAt: Scalars['DateTime'];
  fee: Scalars['Int'];
  id: Scalars['Int'];
  minimumAmountForFree: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type Shipment = {
  courier?: Maybe<Courier>;
  courierId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  lastTrackedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['Int']>;
  ownerType?: Maybe<ShipmentOwnerType>;
  status: ShipmentStatus;
  trackCode?: Maybe<Scalars['String']>;
};

/** 배송 연관 객체 분류입니다. */
export enum ShipmentOwnerType {
  ExchangeRequestPick = 'ExchangeRequestPick',
  ExchangeRequestReShip = 'ExchangeRequestReShip',
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
  phoneNumber1: Scalars['String'];
  phoneNumber2?: Maybe<Scalars['String']>;
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
  /** 주문상품고유번호. PrimaryColumn입니다. order의 merchantUid + 숫자 1자리 형식입니다. */
  merchantUid: Scalars['String'];
  usedCouponId?: Maybe<Scalars['Int']>;
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

export type UpdateCourierInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  returnReserveUrl?: Maybe<Scalars['String']>;
};

export type UpdateCourierIssueInput = {
  endAt: Scalars['DateTime'];
  message: Scalars['String'];
};

export type UpdateItemInput = {
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isInfiniteStock?: Maybe<Scalars['Boolean']>;
  majorCategoryId?: Maybe<Scalars['Float']>;
  minorCategoryId?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateItemNoticeInput = {
  endAt?: Maybe<Scalars['DateTime']>;
  message?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<ItemNoticeType>;
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
  accDepth?: Maybe<Scalars['Float']>;
  accHeight?: Maybe<Scalars['Float']>;
  accWidth?: Maybe<Scalars['Float']>;
  chestWidth?: Maybe<Scalars['Float']>;
  crossStrapLength?: Maybe<Scalars['Float']>;
  glassBridgeLength?: Maybe<Scalars['Float']>;
  glassLegLength?: Maybe<Scalars['Float']>;
  glassWidth?: Maybe<Scalars['Float']>;
  hemWidth?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  riseHeight?: Maybe<Scalars['Float']>;
  shoulderWidth?: Maybe<Scalars['Float']>;
  sleeveLength?: Maybe<Scalars['Float']>;
  thighWidth?: Maybe<Scalars['Float']>;
  totalLength?: Maybe<Scalars['Float']>;
  waistWidth?: Maybe<Scalars['Float']>;
  watchBandDepth?: Maybe<Scalars['Float']>;
};

export type UpdateProductInput = {
  stock: Scalars['Int'];
};

export type UpdateRefundAccountInput = {
  bankCode?: Maybe<BankCode>;
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number?: Maybe<Scalars['String']>;
  ownerName?: Maybe<Scalars['String']>;
};

export type UpdateSellerClaimAccountInput = {
  bankCode?: Maybe<BankCode>;
  /** 계좌번호입니다.("-" 제외) 최대 14자까지 입력 가능합니다. */
  number?: Maybe<Scalars['String']>;
  ownerName?: Maybe<Scalars['String']>;
};

export type UpdateSellerClaimPolicyInput = {
  accountInput?: Maybe<UpdateSellerClaimAccountInput>;
  fee?: Maybe<Scalars['Int']>;
  feePayMethod?: Maybe<ClaimFeePayMethod>;
  isExchangable?: Maybe<Scalars['Boolean']>;
  isRefundable?: Maybe<Scalars['Boolean']>;
  /** 담당자 번호 */
  phoneNumber?: Maybe<Scalars['String']>;
  /** 담당자 이름 */
  picName?: Maybe<Scalars['String']>;
};

export type UpdateSellerCrawlPolicyInput = {
  isInspectingNew?: Maybe<Scalars['Boolean']>;
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
  representativeName?: Maybe<Scalars['String']>;
};

export type UpdateSellerReturnAddressInput = {
  baseAddress?: Maybe<Scalars['String']>;
  detailAddress?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
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
  /** 정산율 */
  rate?: Maybe<Scalars['Int']>;
};

export type UpdateSellerShippingPolicyInput = {
  fee?: Maybe<Scalars['Int']>;
  minimumAmountForFree?: Maybe<Scalars['Int']>;
};

export type UpdateShippingAddressInput = {
  baseAddress?: Maybe<Scalars['String']>;
  detailAddress?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber1?: Maybe<Scalars['String']>;
  phoneNumber2?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  receiverName?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type UploadMultipleImageInput = {
  files: Array<Scalars['Upload']>;
};

export type UploadSingleImageInput = {
  file: Scalars['Upload'];
};

export type User = {
  /** [ResolveField] 사용가능 포인트 잔고 */
  availablePoint: Scalars['Int'];
  avatarImage?: Maybe<UserAvatarImage>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  /** [ResolveField] 적립예정 포인트 잔고 */
  expectedPoint: Scalars['Int'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  oauthCode?: Maybe<Scalars['String']>;
  oauthProvider?: Maybe<UserProviderType>;
  phoneNumber?: Maybe<Scalars['String']>;
  refundAccount?: Maybe<RefundAccount>;
  role?: Maybe<UserRole>;
  shippingAddresses?: Maybe<Array<ShippingAddress>>;
  updatedAt: Scalars['DateTime'];
  weight?: Maybe<Scalars['Int']>;
};

export type UserAvatarImage = {
  angle: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  key: Scalars['String'];
  url: Scalars['String'];
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
