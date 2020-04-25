/* istanbul ignore file */
/* eslint-disable camelcase */

export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type Attribute = {
   __typename?: 'Attribute';
  attribute_code?: Maybe<Scalars['String']>;
  entity_type?: Maybe<Scalars['String']>;
  attribute_type?: Maybe<Scalars['String']>;
  apply_to?: Maybe<Array<Maybe<Scalars['String']>>>;
  position?: Maybe<Scalars['Int']>;
  is_searchable?: Maybe<Scalars['Boolean']>;
  is_comparable?: Maybe<Scalars['Boolean']>;
  is_user_defined?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  is_filterable?: Maybe<Scalars['Boolean']>;
  is_filterable_in_search?: Maybe<Scalars['Boolean']>;
  frontend_input?: Maybe<Scalars['String']>;
  default_frontend_label?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<AttributeOption>>>;
};

export type AttributeInput = {
  attribute_code?: Maybe<FilterTypeInput>;
  entity_type?: Maybe<Scalars['String']>;
  attribute_id?: Maybe<FilterTypeInput>;
  is_user_defined?: Maybe<FilterTypeInput>;
};

export type AttributeOption = {
   __typename?: 'AttributeOption';
  value?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type BundleOption = {
   __typename?: 'BundleOption';
  option_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  product_links?: Maybe<Array<Maybe<BundleOptionLink>>>;
};

export type BundleOptionLink = {
   __typename?: 'BundleOptionLink';
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Float']>;
  can_change_quantity?: Maybe<Scalars['Boolean']>;
  option_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  position?: Maybe<Scalars['Int']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Categories = EsResponseInterface & {
   __typename?: 'Categories';
  items?: Maybe<Array<Maybe<Category>>>;
  page_info?: Maybe<SearchResultPageInfo>;
  total_count?: Maybe<Scalars['Int']>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type Category = {
   __typename?: 'Category';
  id?: Maybe<Scalars['ID']>;
  parent_id?: Maybe<Scalars['ID']>;
  parent?: Maybe<Category>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  is_root?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  path_in_store?: Maybe<Scalars['String']>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  product_count?: Maybe<Scalars['Int']>;
  default_sort_by?: Maybe<Scalars['String']>;
  children_data?: Maybe<Array<Maybe<Category>>>;
  children?: Maybe<Array<Maybe<Category>>>;
  children_count?: Maybe<Scalars['Int']>;
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  include_in_menu?: Maybe<Scalars['Boolean']>;
  display_mode?: Maybe<Scalars['String']>;
  is_anchor?: Maybe<Scalars['Boolean']>;
  page_layout?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<Maybe<Filter>>>;
  products?: Maybe<Products>;
};

export type CategoryProductsArgs = {
  filter?: Maybe<ProductFilterInput>;
  search?: Maybe<Scalars['String']>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductSortInput>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CategoryBinding = {
   __typename?: 'CategoryBinding';
  category_id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['ID']>;
};

export type CategoryBindingFilterInput = {
  category_id?: Maybe<FilterTypeInput>;
  name?: Maybe<FilterTypeInput>;
};

export type CategoryFilterInput = {
  id?: Maybe<FilterTypeInput>;
  parent_id?: Maybe<FilterTypeInput>;
  is_active?: Maybe<FilterTypeInput>;
  is_root?: Maybe<FilterTypeInput>;
  url_key?: Maybe<FilterTypeInput>;
  url_path?: Maybe<FilterTypeInput>;
  position?: Maybe<FilterTypeInput>;
  level?: Maybe<FilterTypeInput>;
  created_at?: Maybe<FilterTypeInput>;
  updated_at?: Maybe<FilterTypeInput>;
  product_count?: Maybe<FilterTypeInput>;
  children_data?: Maybe<CategoryFilterInput>;
  children_count?: Maybe<FilterTypeInput>;
  include_in_menu?: Maybe<FilterTypeInput>;
};

export type CategorySortInput = {
  id?: Maybe<SortEnum>;
  parent_id?: Maybe<SortEnum>;
  is_active?: Maybe<SortEnum>;
  url_key?: Maybe<SortEnum>;
  url_path?: Maybe<SortEnum>;
  position?: Maybe<SortEnum>;
  level?: Maybe<SortEnum>;
  created_at?: Maybe<SortEnum>;
  updated_at?: Maybe<SortEnum>;
  product_count?: Maybe<SortEnum>;
  include_in_menu?: Maybe<SortEnum>;
};

export type CmsBlock = {
   __typename?: 'CmsBlock';
  identifier?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  creation_time?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
};

export type CmsBlocks = EsResponseInterface & {
   __typename?: 'CmsBlocks';
  items?: Maybe<Array<Maybe<CmsBlock>>>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type CmsHierarchies = EsResponseInterface & {
   __typename?: 'CmsHierarchies';
  items?: Maybe<Array<Maybe<CmsHierarchy>>>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type CmsHierarchy = {
   __typename?: 'CmsHierarchy';
  node_id?: Maybe<Scalars['Int']>;
  parent_node_id?: Maybe<Scalars['Int']>;
  page_id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  request_url?: Maybe<Scalars['String']>;
  xpath?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
};

export type CmsInput = {
  id?: Maybe<FilterTypeInput>;
  identifier?: Maybe<FilterTypeInput>;
  store_id?: Maybe<FilterTypeInput>;
  url_path?: Maybe<FilterTypeInput>;
};

export type CmsPage = {
   __typename?: 'CmsPage';
  page_id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_heading?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['Int']>;
  url_path?: Maybe<Scalars['String']>;
};

export type CmsPages = EsResponseInterface & {
   __typename?: 'CmsPages';
  items?: Maybe<Array<Maybe<CmsPage>>>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type ConfigurableOption = {
   __typename?: 'ConfigurableOption';
  id?: Maybe<Scalars['ID']>;
  attribute_id?: Maybe<Scalars['ID']>;
  attribute_code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<ConfigurableOptionValue>>>;
  product_id?: Maybe<Scalars['ID']>;
};

export type ConfigurableOptionValue = {
   __typename?: 'ConfigurableOptionValue';
  value_index?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
};

export type CustomAttributeMetadata = EsResponseInterface & {
   __typename?: 'CustomAttributeMetadata';
  items?: Maybe<Array<Maybe<Attribute>>>;
  total_count?: Maybe<Scalars['Int']>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type CustomOption = {
   __typename?: 'CustomOption';
  image_size_x?: Maybe<Scalars['Int']>;
  image_size_y?: Maybe<Scalars['Int']>;
  max_characters?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<CustomOptionValue>>>;
  option_id?: Maybe<Scalars['ID']>;
  is_require?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CustomOptionValue = {
   __typename?: 'CustomOptionValue';
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<Scalars['String']>;
  option_type_id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
};

export type EsResponse = EsResponseInterface & {
   __typename?: 'ESResponse';
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type EsResponseInterface = {
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type Feature = {
   __typename?: 'Feature';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Filter = {
   __typename?: 'Filter';
  type?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type FilterTypeInput = {
  eq?: Maybe<Scalars['JSON']>;
  finset?: Maybe<Array<Maybe<Scalars['String']>>>;
  from?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  gteq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  like?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  lteq?: Maybe<Scalars['String']>;
  moreq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['JSON']>;
  notnull?: Maybe<Scalars['String']>;
  null?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  scope?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MediaGalleryItem = {
   __typename?: 'MediaGalleryItem';
  image?: Maybe<Scalars['String']>;
  pos?: Maybe<Scalars['Int']>;
  typ?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  lab?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['JSON']>;
  video?: Maybe<Scalars['JSON']>;
};

export type Product = {
   __typename?: 'Product';
  id?: Maybe<Scalars['Int']>;
  url_key?: Maybe<Scalars['String']>;
  url_path?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Array<Maybe<CategoryBinding>>>;
  type_id?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  ean13?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  short_description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  price_incl_tax?: Maybe<Scalars['Float']>;
  price_tax?: Maybe<Scalars['Float']>;
  final_price?: Maybe<Scalars['Float']>;
  final_price_incl_tax?: Maybe<Scalars['Float']>;
  final_price_tax?: Maybe<Scalars['Float']>;
  original_price?: Maybe<Scalars['Float']>;
  original_price_incl_tax?: Maybe<Scalars['Float']>;
  original_price_tax?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  special_price?: Maybe<Scalars['Float']>;
  special_price_incl_tax?: Maybe<Scalars['Float']>;
  special_price_tax?: Maybe<Scalars['Float']>;
  special_from_date?: Maybe<Scalars['String']>;
  special_to_date?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  manufacturer?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_keyword?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  small_image?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  tier_price?: Maybe<Scalars['Float']>;
  tier_prices?: Maybe<Array<Maybe<ProductTierPrice>>>;
  news_from_date?: Maybe<Scalars['String']>;
  news_to_date?: Maybe<Scalars['String']>;
  required_options?: Maybe<Scalars['Boolean']>;
  has_options?: Maybe<Scalars['Boolean']>;
  image_label?: Maybe<Scalars['String']>;
  small_image_label?: Maybe<Scalars['String']>;
  thumbnail_label?: Maybe<Scalars['String']>;
  country_of_manufacture?: Maybe<Scalars['String']>;
  gift_message_available?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  size_options?: Maybe<Array<Maybe<Scalars['String']>>>;
  color?: Maybe<Scalars['String']>;
  color_options?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Array<Maybe<CategoryBinding>>>;
  configurable_children?: Maybe<Array<Maybe<Product>>>;
  stock?: Maybe<StockItem>;
  features?: Maybe<Array<Maybe<Feature>>>;
  is_in_stock?: Maybe<Scalars['Boolean']>;
  keyword?: Maybe<Scalars['String']>;
  media_gallery?: Maybe<Array<Maybe<MediaGalleryItem>>>;
  configurable_options?: Maybe<Array<Maybe<ConfigurableOption>>>;
  custom_options?: Maybe<Array<Maybe<CustomOption>>>;
  bundle_options?: Maybe<Array<Maybe<BundleOption>>>;
  aggs?: Maybe<Scalars['JSON']>;
  reviews?: Maybe<Reviews>;
};

export type ProductReviewsArgs = {
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ReviewFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductAggregationInput = {
  field?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProductFilterInput = {
  id?: Maybe<FilterTypeInput>;
  name?: Maybe<FilterTypeInput>;
  sku?: Maybe<FilterTypeInput>;
  description?: Maybe<FilterTypeInput>;
  short_description?: Maybe<FilterTypeInput>;
  price?: Maybe<FilterTypeInput>;
  special_price?: Maybe<FilterTypeInput>;
  special_from_date?: Maybe<FilterTypeInput>;
  special_to_date?: Maybe<FilterTypeInput>;
  weight?: Maybe<FilterTypeInput>;
  category?: Maybe<CategoryBindingFilterInput>;
  manufacturer?: Maybe<FilterTypeInput>;
  meta_title?: Maybe<FilterTypeInput>;
  meta_keyword?: Maybe<FilterTypeInput>;
  meta_description?: Maybe<FilterTypeInput>;
  image?: Maybe<FilterTypeInput>;
  small_image?: Maybe<FilterTypeInput>;
  thumbnail?: Maybe<FilterTypeInput>;
  tier_price?: Maybe<FilterTypeInput>;
  news_from_date?: Maybe<FilterTypeInput>;
  news_to_date?: Maybe<FilterTypeInput>;
  custom_layout_update?: Maybe<FilterTypeInput>;
  min_price?: Maybe<FilterTypeInput>;
  max_price?: Maybe<FilterTypeInput>;
  category_ids?: Maybe<FilterTypeInput>;
  options_container?: Maybe<FilterTypeInput>;
  required_options?: Maybe<FilterTypeInput>;
  has_options?: Maybe<FilterTypeInput>;
  image_label?: Maybe<FilterTypeInput>;
  small_image_label?: Maybe<FilterTypeInput>;
  thumbnail_label?: Maybe<FilterTypeInput>;
  created_at?: Maybe<FilterTypeInput>;
  updated_at?: Maybe<FilterTypeInput>;
  country_of_manufacture?: Maybe<FilterTypeInput>;
  custom_layout?: Maybe<FilterTypeInput>;
  gift_message_available?: Maybe<FilterTypeInput>;
  visibility?: Maybe<FilterTypeInput>;
  type_id?: Maybe<FilterTypeInput>;
  is_in_stock?: Maybe<FilterTypeInput>;
  stock?: Maybe<StockFilterInput>;
  status?: Maybe<FilterTypeInput>;
  size?: Maybe<FilterTypeInput>;
  size_options?: Maybe<FilterTypeInput>;
  color?: Maybe<FilterTypeInput>;
  color_options?: Maybe<FilterTypeInput>;
  or?: Maybe<ProductFilterInput>;
};

export type Products = EsResponseInterface & {
   __typename?: 'Products';
  items?: Maybe<Array<Maybe<Product>>>;
  page_info?: Maybe<SearchResultPageInfo>;
  total_count?: Maybe<TotalCountInfo>;
  aggregations?: Maybe<Scalars['JSON']>;
  attribute_metadata?: Maybe<Array<Maybe<Attribute>>>;
  sort_fields?: Maybe<SortFields>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
};

export type ProductSortInput = {
  best_match?: Maybe<SortEnum>;
  score?: Maybe<SortEnum>;
  name?: Maybe<SortEnum>;
  sku?: Maybe<SortEnum>;
  description?: Maybe<SortEnum>;
  short_description?: Maybe<SortEnum>;
  price?: Maybe<SortEnum>;
  final_price?: Maybe<SortEnum>;
  special_price?: Maybe<SortEnum>;
  special_from_date?: Maybe<SortEnum>;
  special_to_date?: Maybe<SortEnum>;
  weight?: Maybe<SortEnum>;
  manufacturer?: Maybe<SortEnum>;
  meta_title?: Maybe<SortEnum>;
  meta_keyword?: Maybe<SortEnum>;
  meta_description?: Maybe<SortEnum>;
  image?: Maybe<SortEnum>;
  small_image?: Maybe<SortEnum>;
  thumbnail?: Maybe<SortEnum>;
  tier_price?: Maybe<SortEnum>;
  news_from_date?: Maybe<SortEnum>;
  news_to_date?: Maybe<SortEnum>;
  custom_layout_update?: Maybe<SortEnum>;
  options_container?: Maybe<SortEnum>;
  required_options?: Maybe<SortEnum>;
  has_options?: Maybe<SortEnum>;
  image_label?: Maybe<SortEnum>;
  small_image_label?: Maybe<SortEnum>;
  thumbnail_label?: Maybe<SortEnum>;
  created_at?: Maybe<SortEnum>;
  updated_at?: Maybe<SortEnum>;
  country_of_manufacture?: Maybe<SortEnum>;
  custom_layout?: Maybe<SortEnum>;
  gift_message_available?: Maybe<SortEnum>;
};

export type ProductTierPrice = {
   __typename?: 'ProductTierPrice';
  customer_group_id?: Maybe<Scalars['String']>;
  qty?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  percentage_value?: Maybe<Scalars['Float']>;
  website_id?: Maybe<Scalars['Float']>;
};

export type Query = {
   __typename?: 'Query';
  version?: Maybe<Scalars['String']>;
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
  attribute?: Maybe<Attribute>;
  categories?: Maybe<Categories>;
  category?: Maybe<Category>;
  cmsPages?: Maybe<CmsPages>;
  cmsBlocks?: Maybe<CmsBlocks>;
  cmsHierarchies?: Maybe<CmsHierarchies>;
  products?: Maybe<Products>;
  product?: Maybe<Product>;
  reviews?: Maybe<Reviews>;
  taxrule?: Maybe<TaxRules>;
  sayHello?: Maybe<Scalars['String']>;
  testElastic?: Maybe<Product>;
};

export type QueryCustomAttributeMetadataArgs = {
  attributes?: Maybe<AttributeInput>;
  filter?: Maybe<AttributeInput>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryAttributeArgs = {
  attribute_code?: Maybe<Scalars['String']>;
  attribute_id?: Maybe<Scalars['String']>;
};

export type QueryCategoriesArgs = {
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<CategoryFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<CategorySortInput>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryCategoryArgs = {
  id?: Maybe<Scalars['ID']>;
  url_path?: Maybe<Scalars['String']>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryCmsPagesArgs = {
  filter?: Maybe<CmsInput>;
};

export type QueryCmsBlocksArgs = {
  filter?: Maybe<CmsInput>;
};

export type QueryCmsHierarchiesArgs = {
  filter?: Maybe<CmsInput>;
};

export type QueryProductsArgs = {
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductFilterInput>;
  aggregation?: Maybe<Array<Maybe<ProductAggregationInput>>>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductSortInput>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryProductArgs = {
  sku?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  url_path?: Maybe<Scalars['String']>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryReviewsArgs = {
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ReviewFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  _sourceIncludes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _sourceExcludes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryTaxruleArgs = {
  filter?: Maybe<TaxRuleInput>;
};

export type QuerySayHelloArgs = {
  name?: Maybe<Scalars['String']>;
};

export type QueryTestElasticArgs = {
  sku?: Maybe<Scalars['String']>;
};

export type Review = {
   __typename?: 'Review';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  review_entity?: Maybe<Scalars['String']>;
  review_type?: Maybe<Scalars['Int']>;
  review_status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
};

export type ReviewFilterInput = {
  review_status?: Maybe<FilterTypeInput>;
  product_id?: Maybe<FilterTypeInput>;
};

export type Reviews = EsResponseInterface & {
   __typename?: 'Reviews';
  page_info?: Maybe<SearchResultPageInfo>;
  total_count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Review>>>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type SearchResultPageInfo = {
   __typename?: 'SearchResultPageInfo';
  page_size?: Maybe<Scalars['Int']>;
  current_page?: Maybe<Scalars['Int']>;
};

export enum SortEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SortField = {
   __typename?: 'SortField';
  value?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SortFields = {
   __typename?: 'SortFields';
  default?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<SortField>>>;
};

export type StockFilterInput = {
  is_in_stock?: Maybe<FilterTypeInput>;
  qty?: Maybe<FilterTypeInput>;
};

export type StockItem = {
   __typename?: 'StockItem';
  item_id?: Maybe<Scalars['ID']>;
  product_id?: Maybe<Scalars['ID']>;
  stock_id?: Maybe<Scalars['ID']>;
  qty?: Maybe<Scalars['Float']>;
  is_in_stock?: Maybe<Scalars['Boolean']>;
  is_qty_decimal?: Maybe<Scalars['Boolean']>;
  min_qty?: Maybe<Scalars['Float']>;
  max_sale_qty?: Maybe<Scalars['Float']>;
  backorders?: Maybe<Scalars['Int']>;
  qty_increments?: Maybe<Scalars['Float']>;
};

export type TaxRate = {
   __typename?: 'TaxRate';
  tax_region_id?: Maybe<Scalars['Int']>;
  tax_country_id?: Maybe<Scalars['Int']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  tax_postcode?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type TaxRule = {
   __typename?: 'TaxRule';
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  rates?: Maybe<Array<Maybe<TaxRate>>>;
  customer_tax_class_ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  product_tax_class_ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tax_rate_ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type TaxRuleInput = {
  id?: Maybe<FilterTypeInput>;
  code?: Maybe<FilterTypeInput>;
  customer_tax_class_ids?: Maybe<FilterTypeInput>;
  product_tax_class_ids?: Maybe<FilterTypeInput>;
  tax_rate_ids?: Maybe<FilterTypeInput>;
};

export type TaxRules = EsResponseInterface & {
   __typename?: 'TaxRules';
  total_count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<TaxRule>>>;
  hits?: Maybe<Scalars['JSON']>;
  suggest?: Maybe<Scalars['JSON']>;
  aggregations?: Maybe<Scalars['JSON']>;
};

export type TotalCountInfo = {
   __typename?: 'TotalCountInfo';
  value?: Maybe<Scalars['Int']>;
  relation?: Maybe<Scalars['String']>;
};

