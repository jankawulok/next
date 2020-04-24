export const ProductTileFragment = `
  fragment ProductTile on Product {
    id
    name
    price
    price_incl_tax
    original_price_incl_tax
    special_price_incl_tax
    image
    media_gallery {
      image
      label
    }
    stock {
      qty
    }
    rating
  }
`;

export const ProductFragment = `
  fragment ProductFragment on Product {
    id
    sku
    description
    breadcrumbs {
      category_id
      name
      slug
    }
    short_description
    price
    price_incl_tax
    original_price_incl_tax
    special_price_incl_tax
    name
    manufacturer
    meta_title
    meta_keyword
    meta_description
    media_gallery {
      image
      label
    }
    stock {
      is_in_stock
      qty
      backorders
      max_sale_qty
    }
    rating
    features {
      name
      value
    }
    reviews {
      items {
        nickname
        created_at
        detail
      }
    }
  }
`;
